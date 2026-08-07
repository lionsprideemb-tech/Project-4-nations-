import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const PORT=Number(process.env.PORT||8787);
const OPENAI_API_KEY=process.env.OPENAI_API_KEY||'';
const OPENAI_MODEL=process.env.OPENAI_MODEL||'';
const OPENAI_IMAGE_MODEL=process.env.OPENAI_IMAGE_MODEL||'gpt-image-2';
const GENERATED_DIR=path.join(__dirname,'generated-art');
const ALLOWED_ORIGIN=process.env.ALLOWED_ORIGIN||'';
const MAX_BODY=180_000;
const requestBuckets=new Map();

const systemPrompt=`You are the AI language layer for Project Four Nations, a life-simulation RPG inspired by a four-nations elemental fantasy world.
The browser simulation is always the source of truth.

For narrate_resolved_action:
- Narrate the already-resolved action.
- Never recalculate or override outcome, costs, difficulty, or consequences.
- Do not grant unearned powers, items, knowledge, relationships, status, or canon importance.
- NPCs only know supplied personal memory/knowledge plus plausible local public knowledge.
- Return immersive narration only.

For npc_dialogue_turn:
- Speak only as the supplied NPC.
- Use the NPC's personality, goals, relationship state, memories, promises, secrets, suspected lies, and current emotional state.
- Never reveal information outside the NPC's supplied personal knowledge or plausible local public knowledge.
- You may refuse, misunderstand, admit ignorance, change subject, ask a question back, or show discomfort.
- Do not narrate player actions or mutate simulation state.
- Keep replies concise and conversational.
- Adult romance may be emotionally mature, but sexual content must remain non-explicit.

For both:
- Respect era, location, weather, economy, factions, injuries, spirits, and content settings.
- Preserve uncertainty where facts are not established.
- Combat may acknowledge serious injuries when supplied, but avoid gratuitous gore.`;


function json(res,status,obj,extra={}){
  const body=JSON.stringify(obj);
  res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...extra});
  res.end(body);
}
function allowed(req){
  if(!ALLOWED_ORIGIN)return true;
  const origin=req.headers.origin;
  return !origin||origin===ALLOWED_ORIGIN;
}
function rateLimited(req){
  const ip=req.socket.remoteAddress||'unknown',now=Date.now(),windowMs=60_000,limit=30;
  const row=requestBuckets.get(ip)||{start:now,count:0};
  if(now-row.start>windowMs){row.start=now;row.count=0;}
  row.count++;requestBuckets.set(ip,row);
  return row.count>limit;
}
async function bodyJson(req){
  let total=0,chunks=[];
  for await(const chunk of req){total+=chunk.length;if(total>MAX_BODY)throw new Error('request too large');chunks.push(chunk);}
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}
function validPayload(p){
  if(!p||p.version!==2||!p.context)return false;
  if(p.requestType==='narrate_resolved_action'){
    return typeof p.context.action==='string'&&p.context.action.length<=1200&&p.context.resolution&&typeof p.context.resolution.label==='string'&&Array.isArray(p.context.directives);
  }
  if(p.requestType==='npc_dialogue_turn'){
    return typeof p.context.playerText==='string'&&p.context.playerText.length<=1200&&p.context.npc&&p.context.session&&Array.isArray(p.context.directives);
  }
  return false;
}
function extractResponseText(data){
  if(typeof data?.output_text==='string'&&data.output_text.trim())return data.output_text.trim();
  const pieces=[];
  for(const item of data?.output||[])for(const c of item?.content||[])if(c?.type==='output_text'&&typeof c.text==='string')pieces.push(c.text);
  return pieces.join('\n').trim();
}
async function callOpenAI(context,requestType){
  if(!OPENAI_API_KEY||!OPENAI_MODEL)throw new Error('AI provider is not configured');
  const payload={
    model:OPENAI_MODEL,
    instructions:systemPrompt+`\nCurrent request type: ${requestType}.`,
    input:JSON.stringify(context),
    max_output_tokens:900
  };
  const r=await fetch('https://api.openai.com/v1/responses',{
    method:'POST',
    headers:{'Authorization':`Bearer ${OPENAI_API_KEY}`,'Content-Type':'application/json'},
    body:JSON.stringify(payload)
  });
  const data=await r.json().catch(()=>({}));
  if(!r.ok)throw new Error(data?.error?.message||`AI provider returned ${r.status}`);
  const text=extractResponseText(data);
  if(!text)throw new Error('AI provider returned no narration');
  return text.slice(0,4000);
}

function safeAssetPath(urlPath){
 if(typeof urlPath!=='string'||!urlPath.startsWith('/generated-art/'))return null;
 const name=path.basename(urlPath);if(!/^[A-Za-z0-9._-]+\.(png|jpg|jpeg|webp)$/i.test(name))return null;
 const full=path.join(GENERATED_DIR,name);return full.startsWith(GENERATED_DIR)?full:null;
}
function validImagePayload(p){
 return p&&['portrait','scene'].includes(p.kind)&&typeof p.entityId==='string'&&p.entityId.length<=160&&typeof p.prompt==='string'&&p.prompt.length>=10&&p.prompt.length<=12000&&
   ['1024x1024','1024x1536','1536x1024'].includes(p.size||'1024x1024')&&['low','medium','high'].includes(p.quality||'medium')&&
   (!p.referenceAssetUrls||(Array.isArray(p.referenceAssetUrls)&&p.referenceAssetUrls.length<=4&&p.referenceAssetUrls.every(x=>typeof x==='string'&&x.length<300)));
}
async function imageGenerationRequest(p){
 if(!OPENAI_API_KEY)throw new Error('AI provider is not configured');
 const refs=(p.referenceAssetUrls||[]).map(safeAssetPath).filter(Boolean).filter(existsSync);
 let data;
 if(refs.length){
   const form=new FormData();form.set('model',OPENAI_IMAGE_MODEL);form.set('prompt',p.prompt);form.set('size',p.size||'1536x1024');form.set('quality',p.quality||'medium');
   for(const ref of refs){const bytes=await readFile(ref);form.append('image[]',new Blob([bytes],{type:'image/png'}),path.basename(ref));}
   const r=await fetch('https://api.openai.com/v1/images/edits',{method:'POST',headers:{'Authorization':`Bearer ${OPENAI_API_KEY}`},body:form});
   data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data?.error?.message||`Image provider returned ${r.status}`);
 }else{
   const r=await fetch('https://api.openai.com/v1/images/generations',{method:'POST',headers:{'Authorization':`Bearer ${OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:OPENAI_IMAGE_MODEL,prompt:p.prompt,size:p.size||'1024x1024',quality:p.quality||'medium',n:1})});
   data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data?.error?.message||`Image provider returned ${r.status}`);
 }
 const b64=data?.data?.[0]?.b64_json;if(!b64)throw new Error('Image provider returned no image data');
 await mkdir(GENERATED_DIR,{recursive:true});
 const safeId=p.entityId.replace(/[^A-Za-z0-9_-]/g,'_').slice(0,80),stamp=Date.now().toString(36),filename=`${p.kind}_${safeId}_${stamp}.png`,full=path.join(GENERATED_DIR,filename);
 await writeFile(full,Buffer.from(b64,'base64'));
 return {assetUrl:`/generated-art/${filename}`,model:OPENAI_IMAGE_MODEL,usedReferences:refs.length};
}

async function api(req,res,url){
  if(!allowed(req))return json(res,403,{error:'Origin not allowed'});
  if(url.pathname==='/api/health'&&req.method==='GET'){
    return json(res,200,{ok:true,service:'Project Four Nations Story Director',aiConfigured:!!(OPENAI_API_KEY&&OPENAI_MODEL),imageConfigured:!!OPENAI_API_KEY,provider:'openai',model:OPENAI_MODEL||null,imageModel:OPENAI_IMAGE_MODEL});
  }
  if(url.pathname==='/api/image'&&req.method==='POST'){
    if(rateLimited(req))return json(res,429,{error:'Too many generation requests; try again shortly.'});
    try{
      const p=await bodyJson(req);if(!validImagePayload(p))return json(res,400,{error:'Invalid image generation request'});
      const result=await imageGenerationRequest(p);return json(res,200,{...result,provider:'openai',traceId:`img_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`});
    }catch(err){
      const msg=err?.message||String(err),status=msg==='request too large'?413:msg==='AI provider is not configured'?503:502;return json(res,status,{error:msg});
    }
  }
  if(url.pathname==='/api/gm'&&req.method==='POST'){
    if(rateLimited(req))return json(res,429,{error:'Too many narration requests; try again shortly.'});
    try{
      const p=await bodyJson(req);
      if(!validPayload(p))return json(res,400,{error:'Invalid Story Director request'});
      const traceId=`pfn_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
      const text=await callOpenAI(p.context,p.requestType);
      if(p.requestType==='npc_dialogue_turn')return json(res,200,{dialogue:text,provider:'openai',model:OPENAI_MODEL,traceId});
      return json(res,200,{narration:text,provider:'openai',model:OPENAI_MODEL,traceId});
    }catch(err){
      const msg=err?.message||String(err);
      const status=msg==='request too large'?413:msg==='AI provider is not configured'?503:502;
      return json(res,status,{error:msg});
    }
  }
  return false;
}
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
async function serveStatic(req,res,url){
  let rel=decodeURIComponent(url.pathname);
  if(rel==='/'||rel==='')rel='/index.html';
  const full=path.normalize(path.join(__dirname,rel));
  if(!full.startsWith(__dirname))return json(res,403,{error:'Forbidden'});
  if(!existsSync(full))return json(res,404,{error:'Not found'});
  try{
    const data=await readFile(full);
    res.writeHead(200,{'Content-Type':mime[path.extname(full)]||'application/octet-stream','Cache-Control':path.basename(full)==='index.html'?'no-cache':'public, max-age=300'});
    res.end(data);
  }catch{return json(res,500,{error:'Could not read file'});}
}
const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);
  const handled=await api(req,res,url);
  if(handled!==false)return;
  if(req.method!=='GET'&&req.method!=='HEAD')return json(res,405,{error:'Method not allowed'});
  await serveStatic(req,res,url);
});
server.listen(PORT,()=>console.log(`Project Four Nations running at http://localhost:${PORT}`));
