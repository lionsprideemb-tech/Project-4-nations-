const STORAGE_KEY = 'projectFourNations.world.beta1_1';
const SLOT_INDEX_KEY = 'projectFourNations.saveSlots.v1';
const LEGACY_STORAGE_KEYS = ['projectFourNations.world.beta1','projectFourNations.world.v0_37','projectFourNations.world.v0_36','projectFourNations.world.v0_35','projectFourNations.world.v0_34','projectFourNations.world.v0_33','projectFourNations.world.v0_32','projectFourNations.world.v0_31','projectFourNations.world.v0_30','projectFourNations.world.v0_29','projectFourNations.world.v0_28','projectFourNations.world.v0_27','projectFourNations.world.v0_26','projectFourNations.world.v0_25','projectFourNations.world.v0_24','projectFourNations.world.v0_23','projectFourNations.world.v0_22','projectFourNations.world.v0_21','projectFourNations.world.v0_20','projectFourNations.world.v0_19','projectFourNations.world.v0_18','projectFourNations.world.v0_17','projectFourNations.world.v0_16','projectFourNations.world.v0_15','projectFourNations.world.v0_14','projectFourNations.world.v0_13','projectFourNations.world.v0_12','projectFourNations.world.v0_11','projectFourNations.world.v0_10','projectFourNations.world.v0_9','projectFourNations.world.v0_8','projectFourNations.world.v0_7','projectFourNations.world.v0_6','projectFourNations.world.v0_5','projectFourNations.world.v0_4','projectFourNations.world.v0_3','projectFourNations.world.v0_2','projectFourNations.world.v0_1'];

const eras = { kyoshi:'Age of Kyoshi', roku:'Age of Roku', 'hundred-year-war':'Hundred Year War', aang:'Avatar Aang Era', reconstruction:'Reconstruction Era', korra:'Avatar Korra Era', future:'Future Avatar Era' };
const historyModes = { canon:'Canon Timeline', alternate:'Alternate History' };
const nationRegions = {
 'Earth Kingdom':['Ba Sing Se','Lower Ring','Middle Ring','Upper Ring','Omashu','Gaoling','Chin Village','Makapu Village','Full Moon Bay','Si Wong Desert','Misty Palms Oasis','Great Divide region','Serpent’s Pass region','Lake Laogai outskirts','Agrarian village','Mining town','Coastal Earth Kingdom','Mountain village'],
 'Fire Nation':['Fire Nation Capital','Royal Caldera','Caldera outskirts','Ember Island','Shu Jing','Jang Hui','Fire Fountain City','Fire Nation colony','Industrial town','Rural volcanic island','Naval port','Fishing island','Military settlement'],
 'Northern Water Tribe':['Agna Qel’a','Inner canal district','Northern coast','Outer ice settlement','Hunter camp','Spirit oasis district'],
 'Southern Water Tribe':['Southern capital settlement','Coastal village','Remote ice settlement','Hunter camp','Shipyard district','Rebuilding village'],
 'Foggy Swamp Tribe':['Foggy Swamp settlement','Deep swamp community','Waterway camp','Giant-tree settlement'],
 'Air Nomad / Air culture':['Northern Air Temple','Southern Air Temple','Eastern Air Temple','Western Air Temple','Air sanctuary','Traveling community','Air acolyte settlement'],
 'Republic City':['Central City','Dragon Flats','Harbor district','Residential borough','Industrial district','Cranefish Town legacy district','Pro-bending district','University quarter','Police precinct district','Spirit Wilds edge']
};
const eraNations = {
  kyoshi:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe','Air Nomad / Air culture'],
  roku:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe','Air Nomad / Air culture'],
  'hundred-year-war':['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe'],
  aang:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe'],
  reconstruction:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe','Air Nomad / Air culture','Republic City'],
  korra:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe','Air Nomad / Air culture','Republic City'],
  future:['Earth Kingdom','Fire Nation','Northern Water Tribe','Southern Water Tribe','Foggy Swamp Tribe','Air Nomad / Air culture','Republic City']
};
const occupations = ['Farmer','Rice farmer','Orchard keeper','Fisher','Hunter','Forager','Tea server','Tea shop owner','Cook','Baker','Street-food vendor','Merchant','Market trader','Courier','Messenger','Postal worker','Blacksmith','Weaponsmith','Carpenter','Mason','Potter','Glassworker','Weaver','Tailor','Jeweler','Healer','Herbalist','Midwife','Doctor','Scholar','Historian','Teacher','Student','Tutor','Scribe','Librarian','Soldier','Guard','City watch','Sailor','Ship captain','Dockworker','Navigator','Ranger','Animal caretaker','Stable keeper','Beekeeper','Artist','Painter','Musician','Dancer','Actor','Performer','Mechanic','Engineer','Inventor','Factory worker','Machinist','Rail worker','Detective','Police officer','Metalbending police officer','Arena fighter','Pro-bender','Martial arts instructor','Bending instructor','Acrobat','Spirit researcher','Spiritual guide','Temple caretaker','Diplomat','Civil servant','Judge','Law clerk','Architect','Miner','Quarry worker','Construction worker','Innkeeper','Bathhouse worker','Tour guide','Journalist','Photographer','Radio worker','Entrepreneur','Unemployed / between paths'];
const personalities = ['Kind','Patient','Curious','Reserved','Outgoing','Disciplined','Creative','Honest','Ambitious','Stubborn','Compassionate','Competitive','Playful','Practical','Idealistic','Protective','Independent','Traditional','Adventurous','Cautious'];
const strengths = ['Calm under pressure','Excellent memory','Athletic','Empathetic','Natural leader','Observant','Quick learner','Resourceful','Persuasive','Strong work ethic','Spiritually centered','Good with animals'];
const flaws = ['Short temper','Overconfident','Socially awkward','Impulsive','Stubborn pride','Fear of heights','Poor swimmer','Too trusting','Distrustful','Avoids conflict','Workaholic','Reckless curiosity'];
const firstNames = ['Mina','Rin','Tao','Jin','Mei','Kaito','Lian','Nari','Hana','Ren','Batu','Sora','Yuna','Kiri','Bo','Aya','Kenzo','Mako','Tashi','Nima'];
const familyRoles = ['Mother','Father','Older sibling','Younger sibling','Grandmother','Grandfather','Guardian','Cousin'];


const contentDB={
 wildlife:[
  {name:'Sky bison',habitat:['Air Nomad / Air culture'],era:'all',tags:['flying','companion','rare']},{name:'Winged lemur',habitat:['Air Nomad / Air culture'],era:'all',tags:['flying','small']},{name:'Badgermole',habitat:['Earth Kingdom'],era:'all',tags:['burrowing','earthbending']},{name:'Ostrich horse',habitat:['Earth Kingdom'],era:'all',tags:['mount','domestic']},{name:'Saber-tooth moose lion',habitat:['Earth Kingdom'],era:'all',tags:['wild','large']},{name:'Platypus bear',habitat:['Earth Kingdom'],era:'all',tags:['wild']},{name:'Turtle duck',habitat:['Earth Kingdom','Fire Nation','Republic City'],era:'all',tags:['water','small']},{name:'Cat owl',habitat:['Earth Kingdom'],era:'all',tags:['nocturnal']},{name:'Messenger hawk',habitat:['Earth Kingdom','Fire Nation'],era:'all',tags:['domestic','flying']},{name:'Shirshu',habitat:['Earth Kingdom'],era:'all',tags:['tracker','dangerous']},{name:'Unagi',habitat:['Earth Kingdom'],era:'all',tags:['ocean','dangerous']},{name:'Eel hound',habitat:['Fire Nation'],era:'all',tags:['mount','coastal']},{name:'Komodo rhino',habitat:['Fire Nation'],era:'all',tags:['mount','military']},{name:'Dragon',habitat:['Fire Nation'],era:'all',tags:['legendary','fire']},{name:'Boar-q-pine',habitat:['Fire Nation'],era:'all',tags:['wild']},{name:'Polar bear dog',habitat:['Northern Water Tribe','Southern Water Tribe'],era:'all',tags:['mount','companion']},{name:'Otter penguin',habitat:['Southern Water Tribe'],era:'all',tags:['water','playful']},{name:'Tiger seal',habitat:['Northern Water Tribe','Southern Water Tribe'],era:'all',tags:['water','wild']},{name:'Arctic camel',habitat:['Northern Water Tribe'],era:'all',tags:['mount']},{name:'Catgator',habitat:['Foggy Swamp Tribe'],era:'all',tags:['swamp','dangerous']},{name:'Possum chicken',habitat:['Foggy Swamp Tribe'],era:'all',tags:['swamp','small']},{name:'Dragonfly bunny spirit',habitat:['Spirit World'],era:'all',tags:['spirit']}
 ],
 foods:[
  {name:'Jasmine tea',cultures:['Earth Kingdom','Fire Nation','Republic City'],kind:'drink'},{name:'Seaweed noodles',cultures:['Northern Water Tribe','Southern Water Tribe'],kind:'meal'},{name:'Sea prune stew',cultures:['Northern Water Tribe','Southern Water Tribe'],kind:'meal'},{name:'Five-flavor soup',cultures:['Fire Nation'],kind:'meal'},{name:'Fire flakes',cultures:['Fire Nation'],kind:'snack'},{name:'Spicy noodles',cultures:['Fire Nation','Republic City'],kind:'meal'},{name:'Roast duck',cultures:['Earth Kingdom'],kind:'meal'},{name:'Cabbage dumplings',cultures:['Earth Kingdom','Republic City'],kind:'meal'},{name:'Rice porridge',cultures:['Earth Kingdom','Fire Nation'],kind:'meal'},{name:'Moon peach cakes',cultures:['Earth Kingdom'],kind:'dessert'},{name:'Fruit pies',cultures:['Air Nomad / Air culture'],kind:'dessert'},{name:'Vegetarian dumplings',cultures:['Air Nomad / Air culture'],kind:'meal'},{name:'Tofu and vegetables',cultures:['Air Nomad / Air culture'],kind:'meal'},{name:'Swamp stew',cultures:['Foggy Swamp Tribe'],kind:'meal'},{name:'Grilled fish',cultures:['Northern Water Tribe','Southern Water Tribe','Fire Nation'],kind:'meal'},{name:'Republic City noodles',cultures:['Republic City'],kind:'meal'},{name:'Street dumplings',cultures:['Republic City'],kind:'snack'}
 ],
 techniques:{
  water:['Push and pull','Water whip','Water shield','Water ring','Ice shaping','Ice wall','Ice projectiles','Water jet','Mist shaping','Healing','Plantbending','Vine manipulation','Octopus form','Water arms','Bloodbending'],
  earth:['Rock throw','Earth wall','Earth column','Earth armor','Earth wave','Ground shift','Rock gloves','Dust cloud','Sandbending','Seismic sense','Metalbending','Lavabending','Mud shaping','Crystal shaping'],
  fire:['Fire jab','Fire kick','Fire stream','Fire shield','Fire daggers','Fire breath','Jet propulsion','Fire arc','Heat control','Lightning generation','Lightning redirection','Combustionbending'],
  air:['Air blast','Air swipe','Air shield','Air scooter','Air wheel','Air spout','Air funnel','Air cushion','Enhanced agility','Breath control','Flight','Spiritual projection'],
  none:['Boxing','Wrestling','Swordsmanship','Dual swords','Broadsword','Spear fighting','Archery','Kyoshi Warrior fans','Chi blocking','Acrobatics','Improvised weapons']
 },
 transport:[
  {name:'Walking',eras:['all'],terrain:['all']},{name:'Ostrich horse',eras:['all'],terrain:['land']},{name:'Eel hound',eras:['all'],terrain:['land','coast']},{name:'Polar bear dog',eras:['all'],terrain:['ice']},{name:'Sailboat',eras:['all'],terrain:['water']},{name:'Merchant ship',eras:['all'],terrain:['water']},{name:'Warship passage',eras:['hundred-year-war','aang'],terrain:['water']},{name:'Sand-sailer',eras:['all'],terrain:['desert']},{name:'Sky bison',eras:['all'],terrain:['air']},{name:'Train',eras:['aang','reconstruction','korra','future'],terrain:['rail']},{name:'Satocar',eras:['korra','future'],terrain:['road']},{name:'Motorcycle',eras:['korra','future'],terrain:['road']},{name:'Airship',eras:['aang','reconstruction','korra','future'],terrain:['air']}
 ],
 festivals:[
  {name:'Avatar Day',cultures:['Earth Kingdom'],eras:['aang','reconstruction','korra','future']},{name:'Fire Days Festival',cultures:['Fire Nation'],eras:['all']},{name:'Ice Moon Celebration',cultures:['Northern Water Tribe','Southern Water Tribe'],eras:['all']},{name:'Harvest Festival',cultures:['Earth Kingdom'],eras:['all']},{name:'Air Nomad meditation retreat',cultures:['Air Nomad / Air culture'],eras:['all']},{name:'Republic City street fair',cultures:['Republic City'],eras:['reconstruction','korra','future']},{name:'Pro-bending exhibition',cultures:['Republic City'],eras:['korra','future']}
 ],
 laws:[
  {culture:'Earth Kingdom',items:['Local magistrates regulate trade and property','City laws vary heavily by province','Walled cities may restrict movement during unrest']},
  {culture:'Fire Nation',items:['Military and civil authority are strongly organized','Ports and strategic travel can require inspection','Local law reflects the political conditions of the selected era']},
  {culture:'Northern Water Tribe',items:['Community leadership and formal institutions govern disputes','Water access, hunting, and communal safety carry strong obligations']},
  {culture:'Southern Water Tribe',items:['Community decisions emphasize survival, kinship, and shared resources']},
  {culture:'Republic City',items:['Police, courts, permits, labor rules, and municipal law govern urban life','Bending-related crime can receive specialized police attention']}
 ],
 clothing:[
  {culture:'Earth Kingdom',items:['work tunics','layered green robes','merchant clothing','formal court robes','travel cloaks']},{culture:'Fire Nation',items:['red work clothes','school uniforms','military uniforms','formal robes','island leisure wear']},{culture:'Northern Water Tribe',items:['fur-lined parkas','formal blue robes','hunting gear','healer clothing']},{culture:'Southern Water Tribe',items:['practical parkas','hunter clothing','travel layers','ceremonial blue clothing']},{culture:'Air Nomad / Air culture',items:['saffron robes','travel wraps','acolyte clothing']},{culture:'Republic City',items:['workwear','suits','dresses','police uniforms','pro-bending gear','factory clothing']}
 ]
};
function ensureContentState(){if(!world)return;world.contentState=world.contentState||{version:'5.1',discoveredEntries:[],favorites:[]};}
function contentForCharacter(ch){
 const nation=ch?.nation||currentSettlement(ch)?.homeNation||'Earth Kingdom',era=world?.era||'aang',bend=ch?.bending?.element||ch?.bending||'none';
 return {
  wildlife:contentDB.wildlife.filter(x=>x.habitat.includes(nation)||x.habitat.includes('Spirit World')).slice(0,12),
  foods:contentDB.foods.filter(x=>x.cultures.includes(nation)||x.cultures.includes('Republic City')).slice(0,12),
  techniques:contentDB.techniques[bend]||contentDB.techniques.none,
  transport:contentDB.transport.filter(x=>x.eras.includes('all')||x.eras.includes(era)),
  festivals:contentDB.festivals.filter(x=>(x.cultures.includes(nation)||x.cultures.includes('Republic City'))&&(x.eras.includes('all')||x.eras.includes(era))),
  laws:(contentDB.laws.find(x=>x.culture===nation)?.items||[]),
  clothing:(contentDB.clothing.find(x=>x.culture===nation)?.items||[])
 };
}
function renderContentLibrary(){
 if(!$('contentView')||!world)return;const ch=activeCharacter();$('noContentLife').classList.toggle('hidden',!!ch);$('contentGame').classList.toggle('hidden',!ch);if(!ch)return;ensureContentState();const c=contentForCharacter(ch);
 $('contentSummary').innerHTML=`<span>Wildlife <b>${contentDB.wildlife.length}</b></span><span>Foods <b>${contentDB.foods.length}</b></span><span>Techniques <b>${Object.values(contentDB.techniques).flat().length}</b></span><span>Occupations <b>${occupations.length}</b></span><span>Transport <b>${contentDB.transport.length}</b></span>`;
 const group=(title,rows)=>`<article class="content-group"><h3>${escapeHtml(title)}</h3>${rows.map(x=>`<div class="content-row">${escapeHtml(typeof x==='string'?x:x.name)}</div>`).join('')}</article>`;
 $('contentLibrary').innerHTML=group('Regional wildlife',c.wildlife)+group('Food & drink',c.foods)+group('Era-appropriate transportation',c.transport)+group('Bending / martial techniques',c.techniques)+group('Festivals & public life',c.festivals)+group('Local law & expectations',c.laws)+group('Clothing traditions',c.clothing);
}

let world = null;
let creatorStep = 0;
const $ = id => document.getElementById(id);
const uid = (prefix='world') => `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;

function initialYear(era){
 const starts={kyoshi:-270,roku:-50,'hundred-year-war':25,aang:100,reconstruction:101,korra:170,future:185};
 return starts[era]??1;
}
function makeEvent(title, detail, participants=[]){ return { id:uid('event'), title, detail, participants, worldDate: world ? worldDate() : null, realTimestamp:new Date().toISOString() }; }

function newWorld(){
  const name=$('worldName').value.trim()||'My Four Nations World', era=$('eraSelect').value, historyMode=$('historyMode').value;
  world={ schemaVersion:41,id:uid(),name,era,historyMode,createdAt:new Date().toISOString(),lastSavedAt:null,clock:{year:initialYear(era),seasonIndex:0,day:1,hour:7},environment:{weather:'Clear'},characters:[],activeCharacterId:null,npcs:[
    {id:uid('npc'),name:'Mina',role:'Tea seller',active:true},{id:uid('npc'),name:'Rin',role:'Courier',active:true},{id:uid('npc'),name:'Tao',role:'Dockworker',active:true}
  ],relationships:[],locations:[],settlements:[],opportunities:[],lifeLog:[],gmLog:[],gmSettings:{mode:'local',endpoint:'/api/gm',timeoutMs:30000},uiSettings:{combatIntensity:'standard',relationshipTone:'mature',language:'moderate',romance:'mature',permanentInjury:true,characterDeath:true,reducedMotion:false,largeText:false,atmosphere:true,compactNav:true},saveMeta:{slotId:'slot-1',slotName:'Primary World'},events:[] };
  world.events.push(makeEvent('World created',`${name} begins in the ${eras[era]} under ${historyModes[historyMode]}.`)); saveWorld(); showDashboard(); openTab('charactersView');
}

function migrateWorld(data){
  world=data;
  data.schemaVersion=41; data.betaState=data.betaState||{version:'Beta 1.1',recoveryCount:0,lastValidation:null,lastBackup:null,lastLifeHandoff:null}; data.betaState=data.betaState||{version:'Beta 1.1',recoveryCount:0,lastValidation:null,lastBackup:null}; data.onboardingState=data.onboardingState||{completedCharacterIds:[],firstDayCharacterId:null}; data.balanceState=data.balanceState||{profile:'standard',daily:{},monthlyLog:[],lastMonthlyTick:null}; data.everydayEvents=data.everydayEvents||{events:[],lastDailyTick:null,lastBirthdayYear:{},calendar:[]}; data.imageGeneration=data.imageGeneration||{endpoint:'/api/image',status:'unknown',lastError:null,lastGeneratedAt:null,imageModel:null}; data.mapState=data.mapState||{selectedSettlementId:null,selectedRouteId:null,zoom:'world',showUnknown:true}; data.combatState=data.combatState||{encounters:[],activeEncounterId:null,history:[]}; data.dialogueState=data.dialogueState||{memories:[],secrets:[],promises:[],lies:[],conversations:[],sessions:[],activeSessionId:null,lastDailyTick:null};data.dialogueState.sessions=Array.isArray(data.dialogueState.sessions)?data.dialogueState.sessions:[];data.dialogueState.activeSessionId=data.dialogueState.activeSessionId||null; data.aiConnection=data.aiConnection||{status:'unknown',lastChecked:null,lastError:null,serverModel:null}; data.contentState=data.contentState||{version:'5.1',discoveredEntries:[],favorites:[]}; data.alphaState=data.alphaState||{build:'5.10-beta1.1-hotfix',lastAudit:null,auditResults:[]}; data.uiSettings=data.uiSettings||{combatIntensity:'standard',relationshipTone:'mature',language:'moderate',romance:'mature',permanentInjury:true,characterDeath:true,reducedMotion:false,largeText:false,atmosphere:true,compactNav:true}; data.saveMeta=data.saveMeta||{slotId:'slot-1',slotName:'Primary World'}; data.longTermState=data.longTermState||{lastYearTick:null,decadeEvents:[],settlementHistory:[],leadershipHistory:[]}; data.visualStoryState=data.visualStoryState||{moments:[],provider:'prompt-export'}; data.portraitState=data.portraitState||{profiles:{},generations:[],provider:'prompt-export'}; data.dialogueState=data.dialogueState||{memories:[],secrets:[],promises:[],lies:[],conversations:[],lastDailyTick:null}; data.explorationState=data.explorationState||{routes:[],discoveries:[],camps:[],journeys:[],initialized:false}; data.canonState=data.canonState||{figures:[],encounters:[],lastDailyTick:null,initialized:false}; data.relationshipSimulation=data.relationshipSimulation||{events:[],lastDailyTick:null,lastYearTick:null}; data.generationState=data.generationState||{households:[],inheritanceLog:[],deaths:[],lastYearTick:null}; data.emergentStories=data.emergentStories||{arcs:[],consequences:[],lastDailyTick:null}; data.storyDirector=data.storyDirector||{threads:[],rewards:[],memory:[],directorEvents:[],streaks:{}}; data.economyState=data.economyState||{settlements:{},tradeRoutes:[],marketEvents:[],businesses:[],lastDailyTick:null,lastSeasonTick:null}; data.factionState=data.factionState||{factions:[],incidents:[],politicalEvents:[],initialized:false}; data.spiritState=data.spiritState||{spirits:[],disturbances:[],encounters:[],worldBalance:50}; data.combatState=data.combatState||{encounters:[],activeEncounterId:null,history:[]}; data.npcSimulation=data.npcSimulation||{lastDailyTick:null,lastYearTick:null,households:[],socialEvents:[]}; data.historyState=data.historyState||{processed:[],branches:[],globalFlags:{},historicalLog:[]}; data.worldAtlas=data.worldAtlas||{discoveredRegionIds:[],initialized:false}; data.storyThreads=Array.isArray(data.storyThreads)?data.storyThreads:[]; data.rumors=Array.isArray(data.rumors)?data.rumors:[]; data.characters=Array.isArray(data.characters)?data.characters:[]; data.relationships=Array.isArray(data.relationships)?data.relationships:[]; data.activeCharacterId=data.activeCharacterId||null; data.locations=Array.isArray(data.locations)?data.locations:[]; data.settlements=Array.isArray(data.settlements)?data.settlements:[]; data.opportunities=Array.isArray(data.opportunities)?data.opportunities:[]; data.lifeLog=Array.isArray(data.lifeLog)?data.lifeLog:[]; data.gmLog=Array.isArray(data.gmLog)?data.gmLog:[]; data.gmSettings=data.gmSettings||{mode:'local',endpoint:'/api/gm',timeoutMs:30000};data.gmSettings.timeoutMs=Number(data.gmSettings.timeoutMs||30000);
  data.relationships.forEach(r=>{r.trust=r.trust??10;r.respect=r.respect??10;r.affection=r.affection??5;r.attraction=r.attraction??r.romanticInterest??0;r.tension=r.tension??0;r.closeness=r.closeness??Math.round(((r.trust||0)+(r.affection||0))/2);r.compatibility=r.compatibility??50;r.sharedMemories=Array.isArray(r.sharedMemories)?r.sharedMemories:[];r.history=Array.isArray(r.history)?r.history:[];r.boundaries=r.boundaries||{romanceAllowed:r.type!=='family'};r.stage=r.stage||'acquaintance';r.expectations=r.expectations||{commitment:'unspecified',communication:'moderate',independence:'balanced'};r.jealousy=Number(r.jealousy||0);r.security=Number(r.security??50);r.distanceDays=Number(r.distanceDays||0);r.lastMeaningfulContact=r.lastMeaningfulContact||null;r.breakups=Number(r.breakups||0);r.reconciliations=Number(r.reconciliations||0);r.npcInitiated=Array.isArray(r.npcInitiated)?r.npcInitiated:[];});
  data.characters.forEach(c=>{ensureTrainingState(c);ensureCareerState(c);ensureGenerationCharacter(c);});
  (data.events||[]).forEach(e=>{ if(!e.worldDate) e.worldDate='Earlier in this world'; }); data.characters.forEach(c=>{ensureCharacterLifeState(c);c.knownSettlementIds=Array.isArray(c.knownSettlementIds)?c.knownSettlementIds:[];}); if(data.activeCharacterId) ensureHomeSettlement(data.characters.find(c=>c.id===data.activeCharacterId)); return data;
}
function slotKey(id){return `${STORAGE_KEY}.${id}`;}
function getSaveSlots(){try{return JSON.parse(localStorage.getItem(SLOT_INDEX_KEY)||'[]')}catch{return []}}
function setSaveSlots(rows){localStorage.setItem(SLOT_INDEX_KEY,JSON.stringify(rows))}
function upsertSlotMeta(){
 if(!world)return;const id=world.saveMeta?.slotId||'slot-1',name=world.saveMeta?.slotName||world.name||'World Save';let rows=getSaveSlots();const row={id,name,worldName:world.name,era:world.era,year:world.clock?.year,lastSavedAt:world.lastSavedAt,activeCharacterName:activeCharacter()?.name||null};rows=rows.filter(x=>x.id!==id);rows.unshift(row);setSaveSlots(rows.slice(0,12));
}
function saveWorld(){ if(world){if(Array.isArray(world.events)&&world.events.length>1200)world.events=world.events.slice(-1200);if(Array.isArray(world.storyDirector?.memory)&&world.storyDirector.memory.length>500)world.storyDirector.memory=world.storyDirector.memory.slice(-500);if(Array.isArray(world.storyDirector?.rewards)&&world.storyDirector.rewards.length>400)world.storyDirector.rewards=world.storyDirector.rewards.slice(-400);if(Array.isArray(world.everydayEvents?.events)&&world.everydayEvents.events.length>240)world.everydayEvents.events=world.everydayEvents.events.slice(-240);} if(!world)return;world.lastSavedAt=new Date().toISOString();world.saveMeta=world.saveMeta||{slotId:'slot-1',slotName:'Primary World'};localStorage.setItem(STORAGE_KEY,JSON.stringify(world));localStorage.setItem(slotKey(world.saveMeta.slotId),JSON.stringify(world));upsertSlotMeta();applyUiSettings();render();if($('saveStatus'))$('saveStatus').textContent=`Saved · ${world.saveMeta.slotName}`;}
function loadWorld(){const rows=getSaveSlots();const preferred=rows[0]?.id;const raw=(preferred&&localStorage.getItem(slotKey(preferred)))||localStorage.getItem(STORAGE_KEY)||LEGACY_STORAGE_KEYS.map(k=>localStorage.getItem(k)).find(Boolean);if(!raw){alert('No local world save was found yet.');return;}try{world=migrateWorld(JSON.parse(raw));saveWorld();showDashboard();$('saveStatus').textContent=`Loaded · ${world.saveMeta?.slotName||'World'}`;}catch{alert('The local world save could not be read.');}}
function saveAsNewSlot(){if(!world)return;const name=prompt('Name this save slot:',`${world.name} — ${activeCharacter()?.name||'World'}`);if(!name)return;const copy=JSON.parse(JSON.stringify(world));copy.saveMeta={slotId:uid('slot'),slotName:name.trim()};world=copy;saveWorld();renderSaveSlots();}
function loadSlot(id){const raw=localStorage.getItem(slotKey(id));if(!raw)return;try{world=migrateWorld(JSON.parse(raw));localStorage.setItem(STORAGE_KEY,raw);showDashboard();applyUiSettings();renderSaveSlots();render();$('saveStatus').textContent=`Loaded · ${world.saveMeta?.slotName||'World'}`;}catch{alert('That save slot could not be loaded.');}}
function deleteSlot(id){const rows=getSaveSlots(),row=rows.find(x=>x.id===id);if(!row)return;if(!confirm(`Delete save slot “${row.name}”? This cannot be undone.`))return;localStorage.removeItem(slotKey(id));setSaveSlots(rows.filter(x=>x.id!==id));renderSaveSlots();}


function ensureUiSettings(){if(!world)return;world.uiSettings=world.uiSettings||{combatIntensity:'standard',relationshipTone:'mature',language:'moderate',romance:'mature',permanentInjury:true,characterDeath:true,reducedMotion:false,largeText:false,atmosphere:true,compactNav:true};}
function applyUiSettings(){
 if(!world)return;ensureUiSettings();const u=world.uiSettings,body=document.body;
 body.classList.toggle('reduced-motion',!!u.reducedMotion);body.classList.toggle('large-text',!!u.largeText);body.classList.toggle('compact-nav',u.compactNav!==false);body.classList.toggle('atmosphere-on',u.atmosphere!==false);
 document.documentElement.dataset.combatIntensity=u.combatIntensity;document.documentElement.dataset.relationshipTone=u.relationshipTone;
}
function updateUiSetting(key,value){
 if(!world)return;ensureUiSettings();const booleans=['permanentInjury','characterDeath','reducedMotion','largeText','atmosphere','compactNav'];world.uiSettings[key]=booleans.includes(key)?value==='true':value;saveWorld();
}

async function checkAiConnection(){
 if(!world)return;const endpoint=(world.gmSettings?.endpoint||'/api/gm').replace(/\/gm(?:\?.*)?$/,'/health');
 world.aiConnection=world.aiConnection||{status:'unknown',lastChecked:null,lastError:null,serverModel:null};
 if($('aiConnectionStatus'))$('aiConnectionStatus').textContent='Checking…';
 try{
   const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
   const res=await fetch(endpoint,{headers:{'X-PFN-Client':'5.2'},signal:controller.signal});clearTimeout(timer);
   const data=await res.json();if(!res.ok)throw new Error(data?.error||`HTTP ${res.status}`);
   world.aiConnection={status:data.aiConfigured?'connected':'server-only',lastChecked:new Date().toISOString(),lastError:null,serverModel:data.model||null,provider:data.provider||null};
 }catch(err){world.aiConnection={status:'offline',lastChecked:new Date().toISOString(),lastError:err?.message||String(err),serverModel:null};}
 renderAiConnectionStatus();localStorage.setItem(STORAGE_KEY,JSON.stringify(world));
}
function renderAiConnectionStatus(){
 if(!$('aiConnectionStatus')||!world)return;const a=world.aiConnection||{},labels={connected:'AI server connected', 'server-only':'Server online · AI key/model not configured',offline:'Server unavailable',unknown:'Not checked'};
 $('aiConnectionStatus').textContent=labels[a.status]||a.status||'Unknown';
 if($('aiConnectionDetails'))$('aiConnectionDetails').textContent=[a.provider,a.serverModel,a.lastChecked?`checked ${new Date(a.lastChecked).toLocaleString()}`:null,a.lastError].filter(Boolean).join(' · ');
}
function saveAiSettings(){
 if(!world)return;world.gmSettings=world.gmSettings||{};world.gmSettings.mode=$('aiSettingsMode')?.value||$('gmMode')?.value||world.gmSettings.mode||'local';world.gmSettings.endpoint=$('aiSettingsEndpoint')?.value?.trim()||$('gmEndpoint')?.value?.trim()||'/api/gm';world.gmSettings.timeoutMs=Math.max(5000,Math.min(60000,Number($('gmTimeout')?.value||30000)));saveWorld();renderAiConnectionStatus();
}

function renderSettings(){
 if(!$('settingsView')||!world)return;ensureUiSettings();const u=world.uiSettings;
 ['combatIntensity','relationshipTone','language','romance'].forEach(k=>{const el=$(k+'Setting');if(el)el.value=u[k]});
 ['permanentInjury','characterDeath','reducedMotion','largeText','atmosphere','compactNav'].forEach(k=>{const el=$(k+'Setting');if(el)el.checked=!!u[k]});
 renderSaveSlots();renderAiConnectionStatus();renderImageConnectionStatus();if($('gmTimeout'))$('gmTimeout').value=world.gmSettings?.timeoutMs||30000;if($('aiSettingsMode'))$('aiSettingsMode').value=world.gmSettings?.mode||'local';if($('aiSettingsEndpoint'))$('aiSettingsEndpoint').value=world.gmSettings?.endpoint||'/api/gm';if($('alphaAuditResults'))renderAlphaAudit();
}
function renderSaveSlots(){
 if(!$('saveSlotList'))return;const rows=getSaveSlots();$('saveSlotList').innerHTML=rows.length?rows.map(r=>`<article class="save-slot"><div><strong>${escapeHtml(r.name)}</strong><small>${escapeHtml(r.worldName||'World')} · ${escapeHtml(eras[r.era]||r.era||'')} · Year ${r.year??'—'}${r.activeCharacterName?` · ${escapeHtml(r.activeCharacterName)}`:''}</small></div><div class="actions compact"><button data-load-slot="${r.id}">Load</button><button data-delete-slot="${r.id}">Delete</button></div></article>`).join(''):'<p class="muted">No named save slots yet. The current world will appear here after saving.</p>';
 $('saveSlotList').querySelectorAll('[data-load-slot]').forEach(b=>b.onclick=()=>loadSlot(b.dataset.loadSlot));$('saveSlotList').querySelectorAll('[data-delete-slot]').forEach(b=>b.onclick=()=>deleteSlot(b.dataset.deleteSlot));
}


function normalizeIntegratedWorld(){if(!world)return;world.characters=Array.isArray(world.characters)?world.characters:[];world.npcs=Array.isArray(world.npcs)?world.npcs:[];world.relationships=Array.isArray(world.relationships)?world.relationships:[];world.events=Array.isArray(world.events)?world.events:[];world.lifeLog=Array.isArray(world.lifeLog)?world.lifeLog:[];ensureUiSettings();ensureBalanceState();ensureEverydayEvents();ensureMapState();ensureContentState();ensureLongTermState();ensureVisualStoryState();ensurePortraitState();ensureDialogueState();ensureExplorationState();ensureCanonState();ensureRelationshipSimulation();ensureGenerationState();ensureEmergentStories();ensureEconomyState();ensureFactionState();ensureSpiritState();ensureCombatState();ensureNpcSimulation();ensureHistoryState();ensureAtlasState();world.characters.forEach(ch=>{ensureCharacterLifeState(ch);ensureTrainingState(ch);ensureCareerState(ch);ensureGenerationCharacter(ch);});if(world.activeCharacterId){const ch=activeCharacter();if(ch){ensureHomeSettlement(ch);if(!ch.currentSettlementId)ch.currentSettlementId=ch.homeSettlementId;}}}
function runAlphaAudit(){if(!world)return[];normalizeIntegratedWorld();const checks=[],add=(name,ok,detail='')=>checks.push({name,ok:!!ok,detail});add('Schema version',world.schemaVersion===41,`v${world.schemaVersion}`);add('Active character reference',!world.activeCharacterId||!!world.characters.find(c=>c.id===world.activeCharacterId));add('Character settlement references',world.characters.every(c=>!c.currentSettlementId||world.settlements.some(s=>s.id===c.currentSettlementId)));add('Relationship endpoints',world.relationships.every(r=>!!personById(r.a)&&!!personById(r.b)),`${world.relationships.length} relationships`);add('Unique relationship IDs',new Set(world.relationships.map(r=>r.id)).size===world.relationships.length);add('NPC settlement references',world.npcs.every(n=>!n.settlementId||world.settlements.some(s=>s.id===n.settlementId)),`${world.npcs.length} NPCs`);add('Travel route endpoints',world.explorationState.routes.every(r=>world.settlements.some(s=>s.id===r.from)&&world.settlements.some(s=>s.id===r.to)),`${world.explorationState.routes.length} routes`);add('Business settlements',world.economyState.businesses.every(b=>world.settlements.some(s=>s.id===b.settlementId)));add('Faction settlements',world.factionState.factions.every(f=>world.settlements.some(s=>s.id===f.settlementId)));add('Save metadata',!!world.saveMeta?.slotId,world.saveMeta?.slotName||'missing');add('World Atlas renderer',typeof renderAtlas==='function');add('Travel renderer',typeof renderTravel==='function');add('Story Director memory',Array.isArray(world.storyDirector?.memory));add('Generation state',Array.isArray(world.generationState?.households));world.alphaState={build:'5.10-beta1.1-hotfix',lastAudit:new Date().toISOString(),auditResults:checks};return checks;}
function renderAlphaAudit(){if(!$('alphaAuditResults')||!world)return;const checks=runAlphaAudit();$('alphaAuditResults').innerHTML=checks.map(c=>`<div class="audit-row ${c.ok?'pass':'fail'}"><span>${c.ok?'✓':'!'}</span><div><strong>${escapeHtml(c.name)}</strong>${c.detail?`<small>${escapeHtml(c.detail)}</small>`:''}</div></div>`).join('');$('alphaAuditSummary').textContent=`${checks.filter(c=>c.ok).length}/${checks.length} integration checks passing`;}


function ensureBetaState(){if(!world)return;world.betaState=world.betaState||{version:'Beta 1.1',recoveryCount:0,lastValidation:null,lastBackup:null};}
function validateWorldIntegrity(){
 if(!world)return {ok:false,issues:['No world loaded']};ensureBetaState();const issues=[];
 if(!world.id)issues.push('World has no id');if(!world.clock)issues.push('World clock missing');if(!Array.isArray(world.characters))issues.push('Character collection missing');if(!Array.isArray(world.npcs))issues.push('NPC collection missing');if(!Array.isArray(world.relationships))issues.push('Relationship collection missing');if(!Array.isArray(world.settlements)||!world.settlements.length)issues.push('Settlement database missing');
 if(world.activeCharacterId&&!world.characters.some(c=>c.id===world.activeCharacterId))issues.push('Active character reference is invalid');
 const ids=new Set(),dupes=[];[...(world.characters||[]),...(world.npcs||[])].forEach(p=>{if(!p?.id)return;if(ids.has(p.id))dupes.push(p.id);ids.add(p.id);});if(dupes.length)issues.push(`${dupes.length} duplicate person id(s)`);
 (world.relationships||[]).forEach(r=>{if(r.a&&!ids.has(r.a))issues.push(`Relationship ${r.id||'?'} has missing participant A`);if(r.b&&!ids.has(r.b))issues.push(`Relationship ${r.id||'?'} has missing participant B`);});
 world.betaState.lastValidation={worldDate:worldDate(),realDate:new Date().toISOString(),ok:issues.length===0,issues:issues.slice(0,30)};return {ok:!issues.length,issues};
}
function repairWorldIntegrity(){
 if(!world)return;ensureBetaState();normalizeIntegratedWorld();const all=[...(world.characters||[]),...(world.npcs||[])],ids=new Set(all.map(x=>x.id).filter(Boolean));
 world.relationships=(world.relationships||[]).filter(r=>(!r.a||ids.has(r.a))&&(!r.b||ids.has(r.b)));
 if(world.activeCharacterId&&!world.characters.some(c=>c.id===world.activeCharacterId))world.activeCharacterId=world.characters[0]?.id||null;
 world.betaState.recoveryCount++;validateWorldIntegrity();saveWorld();renderBetaDiagnostics();
}
function downloadBetaBackup(){
 if(!world)return;ensureBetaState();world.betaState.lastBackup=new Date().toISOString();const blob=new Blob([JSON.stringify(world,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`four-nations-${(world.name||'world').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}-beta-backup.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);saveWorld();renderBetaDiagnostics();
}
function renderBetaDiagnostics(){
 if(!$('betaDiagnostics')||!world)return;ensureBetaState();const result=validateWorldIntegrity(),ch=activeCharacter(),counts={characters:world.characters?.length||0,npcs:world.npcs?.length||0,relationships:world.relationships?.length||0,settlements:world.settlements?.length||0,events:world.events?.length||0};
 $('betaStatus').textContent=result.ok?'Beta integrity check passed':`${result.issues.length} integrity issue${result.issues.length===1?'':'s'} found`;
 $('betaStatus').className=`status-pill ${result.ok?'':'warning'}`;
 $('betaDiagnostics').innerHTML=`<div class="balance-row"><strong>Build</strong><span>Beta 1.1 · Schema 41</span></div><div class="balance-row"><strong>Active life</strong><span>${escapeHtml(ch?.name||'None')}</span></div><div class="balance-row"><strong>World population</strong><span>${counts.characters} player · ${counts.npcs} NPC</span></div><div class="balance-row"><strong>Simulation graph</strong><span>${counts.relationships} relationships · ${counts.settlements} settlements · ${counts.events} logged events</span></div><div class="balance-row"><strong>Recovery uses</strong><span>${world.betaState.recoveryCount||0}</span></div>${result.issues.length?`<div class="notice"><strong>Detected:</strong> ${escapeHtml(result.issues.slice(0,5).join(' · '))}</div>`:'<div class="notice"><strong>Ready:</strong> Core world references are internally consistent.</div>'}`;
}

function showDashboard(){ normalizeIntegratedWorld(); $('launcher').classList.add('hidden');$('dashboard').classList.remove('hidden');$('exportWorldBtn').disabled=false;setupCreatorOptions();applyUiSettings();render();if(!world.characters.length)openTab('creatorView');else if(world.onboardingState?.firstDayCharacterId&&world.activeCharacterId===world.onboardingState.firstDayCharacterId)openTab('firstDayView'); }
function showLauncher(){ $('dashboard').classList.add('hidden');$('launcher').classList.remove('hidden');$('saveStatus').textContent=world?'World remains loaded':'No world loaded'; }
function advanceHours(hours){ if(!world)return;
      for(let i=0;i<hours;i++){
        const beforeYear=world.clock.year;
        world.clock.hour++;
        if(world.clock.hour>=24){world.clock.hour=0;world.clock.day++;maybeChangeWeather();maybeGenerateAmbientEvent();processHistoricalSimulation();simulateNpcDay();simulateFactionPolitics();economyDailyTick();economySeasonTick();advanceIgnoredArcs();npcInitiatedRelationshipEvents();canonDailyTick();spreadNpcKnowledge();generateEverydayEvent();expireEverydayEvents();}
        if(world.clock.day>30){world.clock.day=1;world.clock.seasonIndex++;monthlyBalanceTick();}
        if(world.clock.seasonIndex>3){world.clock.seasonIndex=0;world.clock.year++;processHistoricalSimulation(true);simulateNpcYear();simulateGenerationYear();relationshipYearTick();simulateLongTermYear();}
        if(world.clock.year!==beforeYear)processHistoricalSimulation(true);
      }
      saveWorld();
    }



const injuryTable=[
 {name:'Bruised',severity:1,penalty:2,days:1},{name:'Strained',severity:2,penalty:5,days:3},
 {name:'Cut',severity:2,penalty:4,days:2},{name:'Sprain',severity:3,penalty:8,days:6},
 {name:'Fracture',severity:4,penalty:14,days:18},{name:'Concussion',severity:4,penalty:16,days:12},
 {name:'Burn',severity:3,penalty:9,days:8}
];
const combatPositions=['close','mid','far'];
function ensureCombatState(){if(!world)return;world.combatState=world.combatState||{encounters:[],activeEncounterId:null,history:[]};world.combatState.encounters=Array.isArray(world.combatState.encounters)?world.combatState.encounters:[];world.combatState.history=Array.isArray(world.combatState.history)?world.combatState.history:[];}
function activeEncounter(){ensureCombatState();return world.combatState.encounters.find(e=>e.id===world.combatState.activeEncounterId&&e.status==='active')||null;}
function baseCombatant(id,name,kind,side,hp=90,stamina=90){return {id,name,kind,side,hp,maxHp:hp,stamina,maxStamina:stamina,position:'mid',guard:0,cover:0,statuses:[],injuries:[],surrendered:false,escaped:false,captured:false,defeated:false};}
function combatantFromCharacter(ch){ensureTrainingState(ch);ensureCharacterLifeState(ch);return {...baseCombatant(ch.id,ch.name,'player','player',100,100),control:ch.training.control||10,conditioning:ch.training.conditioning||10};}
function combatantFromNpc(n,side='enemy'){ensureNpcLife(n);const level=Math.max(0,n.careerLevel||0),martial=/guard|soldier|fighter|police|ranger|bender|warrior|hunter/i.test(n.role||n.occupation||'');return {...baseCombatant(n.id,n.name,'npc',side,84+level*5+(martial?8:0),78+level*6+(martial?8:0)),skill:30+level*8+(martial?10:0)};}
function combatTerrain(ch){
 const town=currentSettlement(ch),place=currentPlace(ch),words=`${place?.name||''} ${place?.desc||''} ${town?.terrain||''}`.toLowerCase(),resources=[];
 if(/water|river|canal|harbor|coast|rain|snow|ice/.test(words)||world.environment?.weather==='Rain')resources.push('water');
 if(/earth|stone|road|mountain|field|ground|market|building/.test(words))resources.push('earth');
 if(/metal|city|workshop|factory|rail|police/.test(words))resources.push('metal');
 if(/wood|forest|market|building|street/.test(words))resources.push('cover');
 if(/open|field|cliff|roof|mountain/.test(words))resources.push('open air');
 return {name:place?.name||town?.name||'Open ground',tags:trainingEnvironment(ch),resources:[...new Set(resources)],weather:world.environment?.weather||'Clear'};
}
function combatLiving(e,side){return e.combatants.filter(c=>c.side===side&&!c.defeated&&!c.surrendered&&!c.escaped&&!c.captured&&c.hp>0);}
function combatPlayer(e){return e.combatants.find(c=>c.kind==='player');}
function combatTarget(e,id){return e.combatants.find(c=>c.id===id&&!c.defeated&&!c.surrendered&&!c.escaped&&!c.captured);}
function distanceBetween(a,b){return Math.abs(combatPositions.indexOf(a.position)-combatPositions.indexOf(b.position));}
function startCombat(npcId,mode='duel'){
 const ch=activeCharacter(),primary=world.npcs.find(x=>x.id===npcId&&x.alive!==false);if(!ch||!primary)return;ensureCombatState();if(activeEncounter()){alert('Finish the current encounter first.');return;}
 const combatants=[combatantFromCharacter(ch),combatantFromNpc(primary,'enemy')],locals=world.npcs.filter(n=>n.alive!==false&&n.active&&n.settlementId===ch.currentSettlementId&&n.id!==primary.id&&n.age>=18);
 if(mode==='skirmish'){
   const allies=locals.filter(n=>{const r=relationshipWith(ch,n);return r.trust>=50&&r.tension<45;}).slice(0,2);
   const enemies=locals.filter(n=>!allies.includes(n)).slice(0,2);
   allies.forEach(n=>combatants.push(combatantFromNpc(n,'player')));enemies.forEach(n=>combatants.push(combatantFromNpc(n,'enemy')));
 }
 const intent=mode==='spar'?'nonlethal':mode==='danger'?'dangerous':'nonlethal';
 const e={id:uid('combat'),version:2,status:'active',mode,startedAt:worldDate(),round:1,terrain:combatTerrain(ch),combatants,intent,selectedTargetId:primary.id,log:[],nonlethal:intent!=='lethal',outcome:null};
 e.log.push(`${ch.name} entered ${mode==='skirmish'?'a team skirmish':mode==='spar'?'a sparring match':mode==='duel'?'a duel':'a dangerous fight'} at ${e.terrain.name}.`);
 world.combatState.encounters.push(e);world.combatState.activeEncounterId=e.id;saveWorld();
}
function combatTechnique(ch,id){const cat=trainingCatalog[trainingPath(ch)]||trainingCatalog.none;return cat.find(x=>x.id===id);}
function techniqueRange(tech){
 const x=`${tech?.name||''} ${tech?.desc||''}`.toLowerCase();if(/projectile|launch|lightning|blast|wave|jet|throw|arrow|mist/.test(x))return 2;if(/dagger|martial|weapon|pressure|blocking|whip/.test(x))return 0;return 1;
}
function techniqueEnvironmentBonus(e,ch,tech){
 const path=trainingPath(ch),r=e.terrain.resources;
 if(path==='water'&&!r.includes('water'))return -.18;if(path==='earth'&&!r.some(x=>['earth','metal'].includes(x)))return -.16;
 if(path==='air'&&r.includes('open air'))return .08;if(path==='earth'&&r.includes('metal')&&/metal/i.test(tech?.name||''))return .12;return 0;
}
function combatPower(ch,tech,action,e){
 const prof=tech?techniqueProficiency(ch,tech.id):Math.min(70,Math.round(ch.training.xp/5));let base=15+prof*.24+(ch.training.control||10)*.10+(ch.training.conditioning||10)*.09+(tech?.tier||1)*2;
 if(action==='power')base+=9;if(action==='control')base-=3;if(action==='restrain')base-=6;
 base*=1+techniqueEnvironmentBonus(e,ch,tech);return Math.max(5,base);
}
function tickStatuses(c,e){
 c.statuses=c.statuses.filter(st=>{if(st.id==='burning'){c.hp=Math.max(0,c.hp-4);e.log.push(`${c.name} takes 4 damage from lingering burns.`);}st.turns--;return st.turns>0;});
 if(c.hp<=0)c.defeated=true;
}
function addStatus(target,id,turns,label,e){const existing=target.statuses.find(x=>x.id===id);if(existing)existing.turns=Math.max(existing.turns,turns);else target.statuses.push({id,turns,label});e.log.push(`${target.name} is ${label.toLowerCase()}.`);}
function moveCombatant(c,direction,e){
 const i=combatPositions.indexOf(c.position),next=direction==='closer'?Math.max(0,i-1):Math.min(2,i+1);if(next===i)return false;c.position=combatPositions[next];c.stamina=Math.max(0,c.stamina-4);e.log.push(`${c.name} moves ${direction}, now at ${c.position} range.`);return true;
}
function npcCombatTurn(e,c){
 if(c.hp<=0||c.surrendered||c.escaped||c.captured)return;tickStatuses(c,e);if(c.defeated)return;
 const foes=combatLiving(e,c.side==='player'?'enemy':'player');if(!foes.length)return;const target=foes.slice().sort((a,b)=>a.hp-b.hp)[0];
 if(c.hp<c.maxHp*.25&&Math.random()<.25){c.surrendered=true;e.log.push(`${c.name} chooses to surrender.`);return;}
 if(c.stamina<18){c.stamina=Math.min(c.maxStamina,c.stamina+16);c.guard=7;e.log.push(`${c.name} guards and recovers.`);return;}
 const dist=distanceBetween(c,target);if(dist>1&&Math.random()<.7){moveCombatant(c,'closer',e);return;}
 if(c.cover<5&&e.terrain.resources.includes('cover')&&Math.random()<.16){c.cover=7;e.log.push(`${c.name} takes cover.`);return;}
 c.stamina=Math.max(0,c.stamina-9);const chance=55+(c.skill||35)*.22-dist*12-(target.cover||0)*2;
 if(Math.random()*100<chance){let dmg=9+Math.floor((c.skill||35)/10)+Math.floor(Math.random()*9);dmg=Math.max(2,dmg-target.guard-target.cover);target.hp=Math.max(0,target.hp-dmg);e.log.push(`${c.name} attacks ${target.name} for ${dmg}.`);if(dmg>=16&&Math.random()<.12)addCombatInjury(e,target,target.side==='enemy');if(target.hp<=0)target.defeated=true;}else e.log.push(`${c.name} attacks ${target.name}, but misses or is deflected.`);
 target.guard=0;target.cover=Math.max(0,target.cover-2);
}
function runNpcRound(e){e.combatants.filter(c=>c.kind==='npc').forEach(c=>npcCombatTurn(e,c));e.round++;e.combatants.forEach(c=>{c.guard=Math.max(0,c.guard-2);});resolveCombatIfNeeded(e);}
function addCombatInjury(e,target,isOpponent){ensureUiSettings();if(!world.uiSettings.permanentInjury&&target.kind==='player')return;if((world.uiSettings.combatIntensity||'standard')==='light'&&Math.random()<.65)return;if(e.intent==='nonlethal'&&Math.random()<.68)return;
 const max=e.intent==='lethal'||e.mode==='danger'?injuryTable.length:5,inj={...injuryTable[Math.floor(Math.random()*max)],id:uid('inj'),receivedAt:worldDate()};target.injuries.push(inj);e.log.push(`${target.name} suffers ${inj.name.toLowerCase()}.`);
 if(target.kind==='player'){const ch=activeCharacter();ch.injuries=Array.isArray(ch.injuries)?ch.injuries:[];ch.injuries.push(inj);}
}
function resolveCombatIfNeeded(e){
 if(e.status!=='active')return;const p=combatPlayer(e),friends=combatLiving(e,'player'),foes=combatLiving(e,'enemy');let outcome=null;
 if(p?.surrendered)outcome='surrendered';else if(p?.escaped)outcome='escaped';else if(!friends.length)outcome='defeated';else if(!foes.length)outcome='victory';
 if(!outcome)return;e.status='resolved';e.outcome=outcome;e.endedAt=worldDate();world.combatState.activeEncounterId=null;const ch=activeCharacter();
 if(outcome==='victory'){gainTrainingXp(ch,e.mode==='spar'?5:e.mode==='skirmish'?15:12,'Combat experience');ch.training.insight+=e.mode==='spar'?1:3;}
 applyNeeds(ch,{energy:-Math.max(8,Math.round((100-(p?.stamina||0))/4)),hunger:8,morale:outcome==='victory'?6:-4});
 if(e.intent==='lethal'&&outcome==='victory'&&world.uiSettings?.characterDeath!==false)e.combatants.filter(c=>c.side==='enemy'&&c.hp<=0).forEach(c=>{const n=world.npcs.find(x=>x.id===c.id);if(n&&Math.random()<.45){n.alive=false;n.lifeStatus='deceased';e.log.push(`${n.name} died from the fight.`);}});
 const names=e.combatants.filter(c=>c.side==='enemy').map(c=>c.name).join(', '),summary=`${ch.name}'s ${e.mode} against ${names} ended: ${outcome}.`;
 world.combatState.history.push({id:e.id,summary,outcome,worldDate:worldDate(),rounds:e.round,intent:e.intent,participants:e.combatants.map(c=>c.id)});addLifeLog(ch,'Combat',summary);world.events.push(makeEvent('Combat concluded',summary,e.combatants.map(c=>c.id)));
}
function combatAction(kind,techId){
 const e=activeEncounter(),ch=activeCharacter();if(!e||!ch)return;ensureTrainingState(ch);const p=combatPlayer(e);if(!p||p.hp<=0)return;const target=combatTarget(e,e.selectedTargetId)||combatLiving(e,'enemy')[0];
 if(kind==='intent'){e.intent=techId;e.nonlethal=e.intent==='nonlethal';e.log.push(`${ch.name}'s combat intent is now ${e.intent}.`);saveWorld();return;}
 if(kind==='target'){e.selectedTargetId=techId;saveWorld();return;}
 if(kind==='surrender'){p.surrendered=true;e.log.push(`${p.name} surrenders.`);resolveCombatIfNeeded(e);saveWorld();return;}
 if(kind==='escape'){const enemies=combatLiving(e,'enemy'),chance=48+Math.round((p.stamina-(enemies[0]?.stamina||50))/5)+(p.position==='far'?15:0);if(Math.random()*100<chance){p.escaped=true;e.log.push(`${p.name} successfully disengages.`);}else{e.log.push(`${p.name} cannot break away.`);runNpcRound(e);}resolveCombatIfNeeded(e);saveWorld();return;}
 if(kind==='recover'){p.stamina=Math.min(p.maxStamina,p.stamina+20);p.guard=8;e.log.push(`${p.name} guards and recovers stamina.`);runNpcRound(e);saveWorld();return;}
 if(kind==='cover'){if(e.terrain.resources.includes('cover')){p.cover=10;e.log.push(`${p.name} uses the environment as cover.`);}else e.log.push(`There is little useful cover here.`);runNpcRound(e);saveWorld();return;}
 if(kind==='closer'||kind==='farther'){moveCombatant(p,kind==='closer'?'closer':'farther',e);runNpcRound(e);saveWorld();return;}
 if(kind==='capture'){if(!target)return;if(target.hp<=target.maxHp*.25||target.statuses.some(s=>s.id==='restrained')){target.captured=true;e.log.push(`${p.name} secures and captures ${target.name}.`);}else e.log.push(`${target.name} is still too capable of resisting capture.`);runNpcRound(e);resolveCombatIfNeeded(e);saveWorld();return;}
 const tech=combatTechnique(ch,techId);if(!target||!tech||!ch.training.known.includes(techId))return;const cost=7+tech.tier*3;if(p.stamina<cost){e.log.push(`${p.name} is too exhausted to use ${tech.name} effectively.`);runNpcRound(e);saveWorld();return;}
 const dist=distanceBetween(p,target),range=techniqueRange(tech);p.stamina-=cost;
 if(dist>range){e.log.push(`${tech.name} cannot reliably reach ${target.name} from ${p.position} range.`);runNpcRound(e);saveWorld();return;}
 let accuracy=61+techniqueProficiency(ch,tech.id)*.27+(ch.training.control||10)*.12-dist*9-target.cover*1.5;if(kind==='power')accuracy-=11;if(kind==='control'||kind==='restrain')accuracy+=6;
 if(Math.random()*100<accuracy){
   let dmg=Math.round(combatPower(ch,tech,kind,e)*(0.76+Math.random()*.42));dmg=Math.max(1,dmg-target.guard-target.cover);if(kind==='restrain')dmg=Math.round(dmg*.45);target.hp=Math.max(0,target.hp-dmg);
   e.log.push(`${p.name} uses ${tech.name} on ${target.name}${kind==='power'?' with heavy force':kind==='control'?' with restraint':kind==='restrain'?' to restrain them':''}, dealing ${dmg}.`);
   const lname=tech.name.toLowerCase();if(kind==='restrain'&&Math.random()<.7)addStatus(target,'restrained',2,'Restrained',e);if(/fire|flame|lightning/.test(lname)&&e.intent!=='nonlethal'&&Math.random()<.18)addStatus(target,'burning',2,'Burning',e);if(kind==='power'&&Math.random()<.22)addStatus(target,'staggered',1,'Staggered',e);
   if(dmg>=18&&Math.random()<.15)addCombatInjury(e,target,true);if(target.hp<=0)target.defeated=true;ch.training.proficiency[tech.id]=Math.min(100,techniqueProficiency(ch,tech.id)+1);
 }else e.log.push(`${p.name} uses ${tech.name}, but ${target.name} avoids or disrupts it.`);
 target.guard=0;target.cover=Math.max(0,target.cover-3);resolveCombatIfNeeded(e);if(e.status==='active')runNpcRound(e);saveWorld();
}
function renderCombat(){
 if(!$('combatView')||!world)return;const ch=activeCharacter();$('noCombatLife').classList.toggle('hidden',!!ch);$('combatGame').classList.toggle('hidden',!ch);if(!ch)return;ensureCombatState();ensureTrainingState(ch);const e=activeEncounter();
 $('combatActive').classList.toggle('hidden',!e);$('combatSetup').classList.toggle('hidden',!!e);
 if(!e){
   const locals=world.npcs.filter(n=>n.alive!==false&&n.active&&n.settlementId===ch.currentSettlementId&&n.age>=18);
   $('combatOpponents').innerHTML=locals.length?locals.slice(0,16).map(n=>`<article class="combat-opponent"><div><strong>${escapeHtml(n.name)}</strong><small>${escapeHtml(n.role||n.occupation||'Resident')} · age ${n.age}</small></div><div class="actions compact"><button data-start-combat="${n.id}" data-mode="spar">Spar</button><button data-start-combat="${n.id}" data-mode="duel">Duel</button><button data-start-combat="${n.id}" data-mode="danger">Dangerous Fight</button><button data-start-combat="${n.id}" data-mode="skirmish">Team Skirmish</button></div></article>`).join(''):'<p class="muted">No adult residents are available here.</p>';
   $('combatOpponents').querySelectorAll('[data-start-combat]').forEach(b=>b.onclick=()=>startCombat(b.dataset.startCombat,b.dataset.mode));
 }else{
   const p=combatPlayer(e),foes=combatLiving(e,'enemy');
   $('combatRound').textContent=`ROUND ${e.round} · ${e.mode.toUpperCase()} · ${e.intent.toUpperCase()}`;$('combatTerrain').textContent=`${e.terrain.name} · ${e.terrain.weather} · resources: ${e.terrain.resources.join(', ')||'limited'}`;
   $('combatIntent').value=e.intent;$('combatTargetSelect').innerHTML=foes.map(c=>`<option value="${c.id}" ${c.id===e.selectedTargetId?'selected':''}>${escapeHtml(c.name)} · ${c.hp} HP · ${c.position}</option>`).join('');
   $('combatantsBoard').innerHTML=e.combatants.map(c=>`<article class="fighter-card ${c.side} ${c.defeated?'down':''}"><div><strong>${escapeHtml(c.name)}</strong><small>${c.side==='player'?'ALLY':'OPPONENT'} · ${c.position}</small></div><div class="fighter-bars"><span>HP ${c.hp}/${c.maxHp}</span><span>STA ${c.stamina}/${c.maxStamina}</span></div><small>${c.statuses.map(x=>x.label).join(', ')||'Ready'}${c.cover?` · cover ${c.cover}`:''}${c.surrendered?' · surrendered':''}${c.captured?' · captured':''}</small></article>`).join('');
   const cat=trainingCatalog[trainingPath(ch)]||trainingCatalog.none;
   $('combatTechniques').innerHTML=ch.training.known.map(id=>cat.find(x=>x.id===id)).filter(Boolean).map(tech=>`<article class="combat-tech"><strong>${escapeHtml(tech.name)}</strong><small>Tier ${tech.tier} · proficiency ${techniqueProficiency(ch,tech.id)}% · range ${['close','mid','far'][techniqueRange(tech)]}</small><div class="actions compact"><button data-combat-tech="${tech.id}" data-kind="pressure">Use</button><button data-combat-tech="${tech.id}" data-kind="control">Controlled</button><button data-combat-tech="${tech.id}" data-kind="power">Power</button><button data-combat-tech="${tech.id}" data-kind="restrain">Restrain</button></div></article>`).join('');
   $('combatTechniques').querySelectorAll('[data-combat-tech]').forEach(b=>b.onclick=()=>combatAction(b.dataset.kind,b.dataset.combatTech));
   $('combatLog').innerHTML=[...e.log].reverse().slice(0,35).map(x=>`<div class="event">${escapeHtml(x)}</div>`).join('');
 }
 const hist=[...world.combatState.history].reverse().slice(0,12);$('combatHistory').innerHTML=hist.length?hist.map(x=>`<div class="event"><strong>${escapeHtml(x.outcome)}</strong><div>${escapeHtml(x.summary)}</div><small>${escapeHtml(x.worldDate)} · ${x.rounds} rounds${x.intent?` · ${escapeHtml(x.intent)}`:''}</small></div>`).join(''):'<p class="muted">No completed fights yet.</p>';
}

const spiritArchetypes=[
 {kind:'place',names:['Moss-Under-Stone','Keeper of the Quiet Pool','Old Reed'],temperament:'territorial',domain:'a particular natural place'},
 {kind:'memory',names:['Lantern Memory','The Listening Mask','Ash-of-Yesterday'],temperament:'reflective',domain:'memory, grief, and old promises'},
 {kind:'wild',names:['Many-Tails','Crooked Antler','Cloud-Eater'],temperament:'unpredictable',domain:'wild places and changing weather'},
 {kind:'guardian',names:['Gatekeeper Crane','White Cedar','River Sentinel'],temperament:'watchful',domain:'boundaries, shrines, and community obligations'}
];
function ensureSpiritState(){if(!world)return;world.spiritState=world.spiritState||{spirits:[],disturbances:[],encounters:[],worldBalance:50};world.spiritState.spirits=Array.isArray(world.spiritState.spirits)?world.spiritState.spirits:[];world.spiritState.disturbances=Array.isArray(world.spiritState.disturbances)?world.spiritState.disturbances:[];world.spiritState.encounters=Array.isArray(world.spiritState.encounters)?world.spiritState.encounters:[];world.characters.forEach(ch=>{ch.spirituality=ch.spirituality||{sensitivity:10,discipline:5,reputation:0,meditations:0,spiritRelations:{},inSpiritWorld:false,spiritMemories:[]};});}
function spiritVisibilityModifier(){return world.era==='korra'||world.era==='future'?18:world.era==='aang'||world.era==='reconstruction'?7:0;}
function localSpiritChance(ch){const st=currentSettlement(ch),mods=st?.historyModifiers?.spirit||0;return Math.max(3,8+spiritVisibilityModifier()+mods*4+Math.floor(ch.spirituality.sensitivity/8));}
function createLocalSpirit(ch){ensureSpiritState();const a=spiritArchetypes[Math.floor(Math.random()*spiritArchetypes.length)],name=a.names[Math.floor(Math.random()*a.names.length)],st=currentSettlement(ch);const sp={id:uid('spirit'),name,kind:a.kind,temperament:a.temperament,domain:a.domain,settlementId:st?.id||null,mood:50+Math.floor(Math.random()*21)-10,known:false,history:[],era:world.era};world.spiritState.spirits.push(sp);return sp;}
function spiritRelation(ch,sp){ch.spirituality.spiritRelations[sp.id]=ch.spirituality.spiritRelations[sp.id]||{trust:0,respect:0,fear:0,obligation:0,encounters:0};return ch.spirituality.spiritRelations[sp.id];}
function meditate(){
 const ch=activeCharacter();if(!ch)return;ensureSpiritState();if(ch.needs?.energy<10){alert('You are too exhausted to meditate effectively.');return;}ch.spirituality.meditations++;ch.spirituality.discipline=Math.min(100,ch.spirituality.discipline+2);ch.spirituality.sensitivity=Math.min(100,ch.spirituality.sensitivity+(Math.random()<.55?1:0));applyNeeds(ch,{energy:-8,hunger:3,morale:5});advanceHours(2);
 if(Math.random()*100<localSpiritChance(ch)){const locals=world.spiritState.spirits.filter(x=>x.settlementId===ch.currentSettlementId),sp=locals[Math.floor(Math.random()*locals.length)]||createLocalSpirit(ch);sp.known=true;const r=spiritRelation(ch,sp);r.encounters++;r.respect+=2;ch.spirituality.spiritMemories.push({worldDate:worldDate(),text:`During meditation, ${ch.name} became aware of ${sp.name}, a spirit associated with ${sp.domain}.`});world.spiritState.encounters.push({id:uid('se'),characterId:ch.id,spiritId:sp.id,worldDate:worldDate(),type:'meditation',detail:`${ch.name} sensed ${sp.name}.`});}saveWorld();
}
function approachSpirit(spiritId,choice){
 const ch=activeCharacter(),sp=world.spiritState.spirits.find(x=>x.id===spiritId);if(!ch||!sp)return;const r=spiritRelation(ch,sp);r.encounters++;let detail='';
 if(choice==='respect'){r.respect+=6;r.trust+=3;ch.spirituality.reputation+=2;sp.mood=Math.min(100,sp.mood+5);detail=`${ch.name} approached ${sp.name} respectfully and avoided making demands.`;}
 if(choice==='offer'){r.trust+=5;r.obligation+=1;ch.spirituality.reputation+=1;sp.mood=Math.min(100,sp.mood+7);detail=`${ch.name} left a modest offering for ${sp.name}.`;}
 if(choice==='demand'){r.fear+=2;r.trust-=6;sp.mood=Math.max(0,sp.mood-10);ch.spirituality.reputation-=3;detail=`${ch.name} tried to impose their will on ${sp.name}. The spirit remembered the disrespect.`;}
 sp.history.push({worldDate:worldDate(),detail});ch.spirituality.spiritMemories.push({worldDate:worldDate(),text:detail});world.spiritState.encounters.push({id:uid('se'),characterId:ch.id,spiritId:sp.id,worldDate:worldDate(),type:choice,detail});saveWorld();
}
function generateSpiritDisturbance(){
 const ch=activeCharacter();if(!ch)return;ensureSpiritState();const st=currentSettlement(ch),types=['A neglected shrine has become unnaturally cold at dusk.','Animals are avoiding a familiar stream and villagers report strange reflections.','Repeated construction has disturbed something old beneath the settlement.','Travelers report losing hours on a road that normally takes minutes.'];world.spiritState.disturbances.push({id:uid('dist'),settlementId:st.id,title:'Spiritual Disturbance',detail:types[Math.floor(Math.random()*types.length)],severity:1+Math.floor(Math.random()*3),resolved:false,createdAt:worldDate()});saveWorld();
}
function resolveDisturbance(id,method){
 const ch=activeCharacter(),d=world.spiritState.disturbances.find(x=>x.id===id);if(!ch||!d||d.resolved)return;let chance=35+ch.spirituality.discipline*.5+ch.spirituality.reputation*.2;if(method==='listen')chance+=12;if(method==='force')chance-=12;const ok=Math.random()*100<chance;
 if(ok){d.resolved=true;d.resolution=method;d.resolvedAt=worldDate();ch.spirituality.reputation+=method==='force'?0:5;world.spiritState.worldBalance=Math.min(100,world.spiritState.worldBalance+4);world.events.push(makeEvent('Spiritual disturbance eased',`${ch.name} helped settle a disturbance near ${currentSettlement(ch)?.name}.`,[ch.id]));}
 else{d.severity=Math.min(5,d.severity+1);ch.spirituality.reputation-=method==='force'?4:1;world.spiritState.worldBalance=Math.max(0,world.spiritState.worldBalance-2);}
 saveWorld();
}
function enterSpiritWorld(){
 const ch=activeCharacter();if(!ch)return;ensureSpiritState();if(ch.spirituality.discipline<20){alert('You do not yet have enough spiritual discipline to deliberately cross over through meditation.');return;}if(ch.spirituality.inSpiritWorld){ch.spirituality.inSpiritWorld=false;ch.spirituality.spiritMemories.push({worldDate:worldDate(),text:'Returned from the Spirit World.'});advanceHours(2);return;}
 const chance=35+ch.spirituality.discipline*.6;if(Math.random()*100<chance){ch.spirituality.inSpiritWorld=true;ch.spirituality.spiritMemories.push({worldDate:worldDate(),text:'Entered the Spirit World through deep meditation. Physical bending may not behave normally here.'});world.events.push(makeEvent('Spirit World journey',`${ch.name}'s spirit crossed into the Spirit World.`,[ch.id]));advanceHours(3);}else{ch.spirituality.spiritMemories.push({worldDate:worldDate(),text:'Attempted to reach the Spirit World but could not fully cross over.'});advanceHours(2);}
}
function renderSpirits(){
 if(!$('spiritsView')||!world)return;const ch=activeCharacter();$('noSpiritsLife').classList.toggle('hidden',!!ch);$('spiritsGame').classList.toggle('hidden',!ch);if(!ch)return;ensureSpiritState();const sp=ch.spirituality;
 $('spiritStats').innerHTML=`<span>Sensitivity <b>${sp.sensitivity}</b></span><span>Discipline <b>${sp.discipline}</b></span><span>Spirit Reputation <b>${sp.reputation}</b></span><span>World Balance <b>${world.spiritState.worldBalance}</b></span><span>State <b>${sp.inSpiritWorld?'Spirit World':'Physical World'}</b></span>`;
 const known=world.spiritState.spirits.filter(x=>x.known);$('knownSpirits').innerHTML=known.length?known.map(x=>{const r=spiritRelation(ch,x);return `<article class="spirit-card"><p class="eyebrow">${escapeHtml(x.kind.toUpperCase())} SPIRIT</p><h3>${escapeHtml(x.name)}</h3><p>${escapeHtml(x.domain)} · ${escapeHtml(x.temperament)}</p><small>Trust ${r.trust} · Respect ${r.respect} · Fear ${r.fear} · Encounters ${r.encounters}</small><div class="actions compact"><button data-spirit="${x.id}" data-spirit-act="respect">Approach Respectfully</button><button data-spirit="${x.id}" data-spirit-act="offer">Leave Offering</button><button data-spirit="${x.id}" data-spirit-act="demand">Make Demand</button></div></article>`}).join(''):'<p class="muted">You have not personally encountered any spirits yet.</p>';
 $('knownSpirits').querySelectorAll('[data-spirit]').forEach(b=>b.onclick=()=>approachSpirit(b.dataset.spirit,b.dataset.spiritAct));
 const ds=world.spiritState.disturbances.filter(x=>x.settlementId===ch.currentSettlementId&&!x.resolved);$('spiritDisturbances').innerHTML=ds.length?ds.map(d=>`<article class="spirit-card"><h3>${escapeHtml(d.title)}</h3><p>${escapeHtml(d.detail)}</p><small>Severity ${d.severity}</small><div class="actions compact"><button data-dist="${d.id}" data-dist-act="listen">Listen & Investigate</button><button data-dist="${d.id}" data-dist-act="ritual">Meditate / Ritual</button><button data-dist="${d.id}" data-dist-act="force">Force the Issue</button></div></article>`).join(''):'<p class="muted">No unresolved spiritual disturbances are known here.</p>';
 $('spiritDisturbances').querySelectorAll('[data-dist]').forEach(b=>b.onclick=()=>resolveDisturbance(b.dataset.dist,b.dataset.distAct));
 $('spiritMemories').innerHTML=[...sp.spiritMemories].reverse().slice(0,15).map(m=>`<div class="event"><div>${escapeHtml(m.text)}</div><small>${escapeHtml(m.worldDate)}</small></div>`).join('')||'<p class="muted">No spiritual experiences recorded.</p>';
}


const factionTemplates=[
 {key:'local-government',name:'Local Government',type:'government',ethos:'order, taxes, public works, and local legitimacy'},
 {key:'watch',name:'City Watch',type:'law',ethos:'public safety, patrols, arrests, and enforcement'},
 {key:'merchants',name:'Merchants Guild',type:'commerce',ethos:'trade access, contracts, prices, and commercial stability'},
 {key:'school',name:'Regional Bending School',type:'school',ethos:'training, reputation, lineage, and disciplined technique'},
 {key:'underworld',name:'Local Underworld',type:'crime',ethos:'smuggling, protection, theft, favors, and illicit markets'}
];
function ensureFactionState(){
 if(!world)return;world.factionState=world.factionState||{factions:[],incidents:[],politicalEvents:[],initialized:false};world.factionState.factions=Array.isArray(world.factionState.factions)?world.factionState.factions:[];world.factionState.incidents=Array.isArray(world.factionState.incidents)?world.factionState.incidents:[];world.factionState.politicalEvents=Array.isArray(world.factionState.politicalEvents)?world.factionState.politicalEvents:[];
 world.characters.forEach(ch=>{ch.factions=ch.factions||{reputation:{},memberships:[],wanted:{},legalHistory:[],influence:0};});
 if(!world.factionState.initialized){world.settlements.forEach(seedSettlementFactions);world.factionState.initialized=true;}
}
function seedSettlementFactions(st){
 factionTemplates.forEach((f,i)=>{const id=`${st.id}-${f.key}`;if(world.factionState.factions.some(x=>x.id===id))return;world.factionState.factions.push({id,name:`${st.name} ${f.name}`,shortName:f.name,type:f.type,ethos:f.ethos,settlementId:st.id,power:35+Math.floor(Math.random()*45),wealth:25+Math.floor(Math.random()*55),stability:40+Math.floor(Math.random()*40),relations:{},members:[],laws:f.type==='law'||f.type==='government'?['assault','theft','fraud','trespass']:[],history:[]});});
}
function factionRep(ch,id){return Number(ch.factions.reputation[id]||0);}
function changeFactionRep(ch,id,n,why){ch.factions.reputation[id]=Math.max(-100,Math.min(100,factionRep(ch,id)+n));const f=world.factionState.factions.find(x=>x.id===id);if(f)f.history.push({worldDate:worldDate(),detail:`${ch.name}: ${why} (${n>0?'+':''}${n} reputation)`});}
function localFactions(ch){ensureFactionState();return world.factionState.factions.filter(f=>f.settlementId===ch.currentSettlementId);}
function joinFaction(id){
 const ch=activeCharacter(),f=world.factionState.factions.find(x=>x.id===id);if(!ch||!f)return;if(ch.factions.memberships.includes(id))return;const rep=factionRep(ch,id);if(rep<15){alert('This organization does not know or trust you well enough for membership yet.');return;}ch.factions.memberships.push(id);f.members.push(ch.id);changeFactionRep(ch,id,5,'joined the organization');world.events.push(makeEvent('Faction membership',`${ch.name} joined ${f.name}.`,[ch.id]));saveWorld();
}
function factionWork(id){
 const ch=activeCharacter(),f=world.factionState.factions.find(x=>x.id===id);if(!ch||!f)return;let detail='',rep=3,coins=2;
 if(f.type==='government')detail='helped with records, public work, or a civic errand.';
 if(f.type==='law')detail='assisted with a lawful patrol or community safety matter.';
 if(f.type==='commerce'){detail='helped move goods, settle a contract, or connect traders.';coins=5;}
 if(f.type==='school'){detail='helped at a lesson, demonstration, or school responsibility.';if(ch.training)ch.training.insight+=2;}
 if(f.type==='crime'){detail='carried out a discreet favor whose legality was questionable.';coins=7;rep=4;if(Math.random()<.25)commitCrime('underworld activity',2);}
 ch.currency+=coins;changeFactionRep(ch,id,rep,detail);applyNeeds(ch,{energy:-12,hunger:5,morale:1});advanceHours(3);saveWorld();
}
function commitCrime(kind='public offense',severity=1){
 const ch=activeCharacter();if(!ch)return;ensureFactionState();const st=currentSettlement(ch),watch=localFactions(ch).find(f=>f.type==='law'),gov=localFactions(ch).find(f=>f.type==='government');const id=uid('crime'),incident={id,characterId:ch.id,settlementId:st.id,kind,severity,witnessed:Math.random()<.65,status:'unresolved',worldDate:worldDate()};world.factionState.incidents.push(incident);
 if(incident.witnessed){ch.factions.wanted[st.id]=(ch.factions.wanted[st.id]||0)+severity*12;if(watch)changeFactionRep(ch,watch.id,-severity*8,`suspected of ${kind}`);if(gov)changeFactionRep(ch,gov.id,-severity*5,`suspected of ${kind}`);world.events.push(makeEvent('Legal trouble',`${ch.name} is suspected of ${kind} in ${st.name}.`,[ch.id]));}saveWorld();
}
function faceAuthorities(){
 const ch=activeCharacter();if(!ch)return;const st=currentSettlement(ch),wanted=ch.factions.wanted[st.id]||0;if(wanted<=0){alert('Local authorities are not currently seeking you.');return;}const fine=Math.max(2,Math.round(wanted/4));if(ch.currency>=fine){ch.currency-=fine;ch.factions.wanted[st.id]=Math.max(0,wanted-25);ch.factions.legalHistory.push({worldDate:worldDate(),settlementId:st.id,outcome:'fine',detail:`Paid ${fine} coins in fines or restitution.`});world.events.push(makeEvent('Legal case resolved',`${ch.name} paid fines or restitution in ${st.name}.`,[ch.id]));}else{advanceHours(12);ch.factions.wanted[st.id]=Math.max(0,wanted-18);ch.factions.legalHistory.push({worldDate:worldDate(),settlementId:st.id,outcome:'detention',detail:'Spent time in local detention after being unable to pay.'});}saveWorld();
}
function simulateFactionPolitics(){
 if(!world||Math.random()>.08)return;ensureFactionState();const st=world.settlements[Math.floor(Math.random()*world.settlements.length)],fs=world.factionState.factions.filter(f=>f.settlementId===st.id);if(fs.length<2)return;const a=fs[Math.floor(Math.random()*fs.length)],b=fs.filter(x=>x.id!==a.id)[Math.floor(Math.random()*(fs.length-1))];const positive=Math.random()<.55,delta=positive?3:-4;a.relations[b.id]=(a.relations[b.id]||0)+delta;b.relations[a.id]=(b.relations[a.id]||0)+delta;const detail=positive?`${a.shortName} and ${b.shortName} found common ground over a local issue.`:`Tension increased between ${a.shortName} and ${b.shortName} in ${st.name}.`;world.factionState.politicalEvents.push({id:uid('pol'),worldDate:worldDate(),settlementId:st.id,detail});if(world.factionState.politicalEvents.length>100)world.factionState.politicalEvents.shift();
}
function renderFactions(){
 if(!$('factionsView')||!world)return;const ch=activeCharacter();$('noFactionsLife').classList.toggle('hidden',!!ch);$('factionsGame').classList.toggle('hidden',!ch);if(!ch)return;ensureFactionState();const fs=localFactions(ch),st=currentSettlement(ch),wanted=ch.factions.wanted[st.id]||0;
 $('politicsSummary').innerHTML=`<span>Influence <b>${ch.factions.influence}</b></span><span>Memberships <b>${ch.factions.memberships.length}</b></span><span>Local Wanted <b>${wanted}</b></span><span>Legal Record <b>${ch.factions.legalHistory.length}</b></span>`;
 $('localFactions').innerHTML=fs.map(f=>{const rep=factionRep(ch,f.id),member=ch.factions.memberships.includes(f.id);return `<article class="faction-card"><p class="eyebrow">${escapeHtml(f.type.toUpperCase())}</p><h3>${escapeHtml(f.name)}</h3><p>${escapeHtml(f.ethos)}</p><small>Reputation ${rep} · Power ${f.power} · Wealth ${f.wealth} · Stability ${f.stability}${member?' · MEMBER':''}</small><div class="actions compact"><button data-faction-work="${f.id}">Do Work</button>${!member?`<button data-faction-join="${f.id}" ${rep<15?'disabled':''}>Join</button>`:''}</div></article>`}).join('');
 $('localFactions').querySelectorAll('[data-faction-work]').forEach(b=>b.onclick=()=>factionWork(b.dataset.factionWork));$('localFactions').querySelectorAll('[data-faction-join]').forEach(b=>b.onclick=()=>joinFaction(b.dataset.factionJoin));
 const incidents=world.factionState.incidents.filter(x=>x.characterId===ch.id).slice().reverse();$('legalHistory').innerHTML=incidents.length?incidents.map(x=>`<div class="event"><strong>${escapeHtml(x.kind)}</strong><div>${x.witnessed?'Witnessed / reported':'Not publicly connected to you'} · severity ${x.severity}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">No recorded incidents.</p>';
 $('authorityBtn').disabled=wanted<=0;const pe=[...world.factionState.politicalEvents].reverse().slice(0,15);$('politicalLog').innerHTML=pe.length?pe.map(x=>`<div class="event"><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">Local organizations are currently relatively quiet.</p>';
}


const economyGoods=[
 {id:'grain',name:'Grain & staples',base:3,need:1.0},{id:'produce',name:'Fresh produce',base:4,need:.8},
 {id:'medicine',name:'Medicine',base:9,need:.35},{id:'cloth',name:'Cloth',base:6,need:.45},
 {id:'tools',name:'Tools',base:10,need:.3},{id:'fuel',name:'Fuel',base:7,need:.45},
 {id:'luxury',name:'Luxury goods',base:15,need:.12}
];
function ensureEconomyState(){
 if(!world)return;world.economyState=world.economyState||{settlements:{},tradeRoutes:[],marketEvents:[],businesses:[],lastDailyTick:null,lastSeasonTick:null};
 const e=world.economyState;e.settlements=e.settlements||{};e.tradeRoutes=Array.isArray(e.tradeRoutes)?e.tradeRoutes:[];e.marketEvents=Array.isArray(e.marketEvents)?e.marketEvents:[];e.businesses=Array.isArray(e.businesses)?e.businesses:[];
 world.characters.forEach(ch=>{ch.economy=ch.economy||{properties:[],businessIds:[],debts:[],economicHistory:[]};});
 world.settlements.forEach((st,i)=>{if(!e.settlements[st.id])e.settlements[st.id]={prosperity:45+Math.floor(Math.random()*30),housing:55+Math.floor(Math.random()*25),infrastructure:45+Math.floor(Math.random()*35),tech:eraTechBase(),stocks:Object.fromEntries(economyGoods.map((g,j)=>[g.id,35+((i*13+j*17)%45)])),demand:Object.fromEntries(economyGoods.map(g=>[g.id,50])),projects:[],damage:0};});
 if(!e.tradeRoutes.length&&world.settlements.length>1){for(let i=0;i<world.settlements.length-1;i++)e.tradeRoutes.push({id:uid('route'),from:world.settlements[i].id,to:world.settlements[i+1].id,capacity:8+Math.floor(Math.random()*10),reliability:60+Math.floor(Math.random()*35),active:true});}
}
function eraTechBase(){return world.era==='future'?85:world.era==='korra'?70:world.era==='reconstruction'?52:world.era==='aang'?38:world.era==='hundred-year-war'?30:24;}
function settlementEconomy(id){ensureEconomyState();return world.economyState.settlements[id];}
function marketPrice(stId,goodId){
 const m=settlementEconomy(stId),g=economyGoods.find(x=>x.id===goodId);if(!m||!g)return 1;const stock=m.stocks[goodId]||1,demand=m.demand[goodId]||50,scarcity=Math.max(.55,Math.min(2.8,demand/Math.max(15,stock)));const prosperity=1+(m.prosperity-50)/250;return Math.max(1,Math.round(g.base*scarcity*prosperity));
}
function economyDailyTick(){
 if(!world)return;ensureEconomyState();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.economyState.lastDailyTick===stamp)return;world.economyState.lastDailyTick=stamp;
 world.settlements.forEach(st=>{const m=settlementEconomy(st.id),pop=residentsOf(st.id).length;economyGoods.forEach(g=>{m.stocks[g.id]=Math.max(0,(m.stocks[g.id]||0)-Math.max(1,Math.round(pop*g.need*.08))+Math.floor(Math.random()*3));m.demand[g.id]=Math.max(20,Math.min(100,45+Math.round(pop*g.need*.8)+m.damage/2));});});
 world.economyState.tradeRoutes.filter(r=>r.active).forEach(r=>{if(Math.random()*100>r.reliability)return;const a=settlementEconomy(r.from),b=settlementEconomy(r.to);economyGoods.forEach(g=>{const delta=(a.stocks[g.id]||0)-(b.stocks[g.id]||0);if(Math.abs(delta)>18){const amt=Math.min(r.capacity,Math.floor(Math.abs(delta)/5));if(delta>0){a.stocks[g.id]-=amt;b.stocks[g.id]+=amt}else{b.stocks[g.id]-=amt;a.stocks[g.id]+=amt}}});});
 world.economyState.businesses.forEach(b=>{if(!b.active)return;const m=settlementEconomy(b.settlementId),profit=Math.max(0,Math.round((m.prosperity+b.quality)/25)+Math.floor(Math.random()*4)-2);b.cash+=profit;b.lastProfit=profit;const owner=world.characters.find(c=>c.id===b.ownerId);if(owner&&profit>0){const draw=Math.floor(profit*.35);owner.currency+=draw;b.cash-=draw;}});
}
function economySeasonTick(){
 if(!world)return;ensureEconomyState();const stamp=`${world.clock.year}-${world.clock.seasonIndex}`;if(world.economyState.lastSeasonTick===stamp)return;world.economyState.lastSeasonTick=stamp;
 world.settlements.forEach(st=>{const m=settlementEconomy(st.id),shortages=economyGoods.filter(g=>(m.stocks[g.id]||0)<18).length;m.prosperity=Math.max(5,Math.min(100,m.prosperity+(shortages?-shortages:2)+Math.floor(Math.random()*5)-2));m.infrastructure=Math.max(5,Math.min(100,m.infrastructure+(Math.random()<.45?1:0)-Math.round(m.damage/40)));m.tech=Math.max(eraTechBase(),Math.min(100,m.tech+(m.prosperity>65&&Math.random()<.35?1:0)));if(shortages>=2)world.economyState.marketEvents.push({id:uid('me'),worldDate:worldDate(),settlementId:st.id,detail:`${st.name} is experiencing shortages in ${shortages} important categories.`});});
}
function buyMarketGood(id){
 const ch=activeCharacter();if(!ch)return;const price=marketPrice(ch.currentSettlementId,id),m=settlementEconomy(ch.currentSettlementId),g=economyGoods.find(x=>x.id===id);if(ch.currency<price){alert('You cannot afford that.');return;}if((m.stocks[id]||0)<=0){alert('That good is currently unavailable.');return;}ch.currency-=price;m.stocks[id]--;ch.inventory=Array.isArray(ch.inventory)?ch.inventory:[];ch.inventory.push({id:uid('item'),name:g.name,category:'market good',value:price});ch.economy.economicHistory.push({worldDate:worldDate(),detail:`Bought ${g.name} for ${price} coins.`});saveWorld();
}
function rentHome(){
 const ch=activeCharacter();if(!ch)return;ensureEconomyState();const st=currentSettlement(ch),m=settlementEconomy(st.id),rent=Math.max(3,Math.round((100-m.housing+m.prosperity)/18));if(ch.currency<rent){alert('You cannot afford the deposit and first rent payment.');return;}ch.currency-=rent;ch.economy.properties.push({id:uid('prop'),settlementId:st.id,type:'rented room',monthlyCost:rent,owned:false,acquiredAt:worldDate()});ch.economy.economicHistory.push({worldDate:worldDate(),detail:`Rented a room in ${st.name} for ${rent} coins.`});saveWorld();
}
function openBusiness(){
 const ch=activeCharacter();if(!ch)return;ensureEconomyState();const cost=25;if(ch.currency<cost){alert(`Opening even a tiny business requires ${cost} coins of startup capital.`);return;}const name=prompt('Name the business:');if(!name)return;const type=prompt('What kind of business is it? (shop, food stall, repair, transport, craft, etc.)')||'small business';ch.currency-=cost;const b={id:uid('biz'),ownerId:ch.id,name,type,settlementId:ch.currentSettlementId,cash:cost,quality:40,workers:0,active:true,lastProfit:0,openedAt:worldDate()};world.economyState.businesses.push(b);ch.economy.businessIds.push(b.id);ch.economy.economicHistory.push({worldDate:worldDate(),detail:`Opened ${name}, a ${type}.`});world.events.push(makeEvent('New business',`${ch.name} opened ${name} in ${currentSettlement(ch).name}.`,[ch.id]));saveWorld();
}
function startPublicProject(){
 const ch=activeCharacter();if(!ch)return;const st=currentSettlement(ch),m=settlementEconomy(st.id);if(ch.currency<8){alert('You need at least 8 coins to contribute meaningfully.');return;}ch.currency-=8;m.projects.push({id:uid('proj'),name:'Community Improvement',progress:20,goal:100,startedAt:worldDate(),sponsorId:ch.id});m.infrastructure=Math.min(100,m.infrastructure+2);ch.factions&&(ch.factions.influence+=1);world.events.push(makeEvent('Public project',`${ch.name} contributed to improvements in ${st.name}.`,[ch.id]));saveWorld();
}
function damageSettlement(){
 const ch=activeCharacter();if(!ch)return;const m=settlementEconomy(ch.currentSettlementId);m.damage=Math.min(100,m.damage+15);m.infrastructure=Math.max(0,m.infrastructure-5);m.housing=Math.max(0,m.housing-4);world.economyState.marketEvents.push({id:uid('me'),worldDate:worldDate(),settlementId:ch.currentSettlementId,detail:`Damage disrupted homes and infrastructure in ${currentSettlement(ch).name}. Rebuilding will affect the local economy.`});saveWorld();
}
function renderEconomy(){
 if(!$('economyView')||!world)return;const ch=activeCharacter();$('noEconomyLife').classList.toggle('hidden',!!ch);$('economyGame').classList.toggle('hidden',!ch);if(!ch)return;ensureEconomyState();const st=currentSettlement(ch),m=settlementEconomy(st.id);
 $('economySummary').innerHTML=`<span>Coins <b>${ch.currency}</b></span><span>Prosperity <b>${m.prosperity}</b></span><span>Housing <b>${m.housing}</b></span><span>Infrastructure <b>${m.infrastructure}</b></span><span>Technology <b>${m.tech}</b></span><span>Damage <b>${m.damage}</b></span>`;
 $('marketGoods').innerHTML=economyGoods.map(g=>`<article class="market-row"><div><strong>${escapeHtml(g.name)}</strong><small>Stock ${m.stocks[g.id]} · demand ${m.demand[g.id]}</small></div><button data-buy-good="${g.id}" ${m.stocks[g.id]<=0?'disabled':''}>Buy · ${marketPrice(st.id,g.id)} coins</button></article>`).join('');$('marketGoods').querySelectorAll('[data-buy-good]').forEach(b=>b.onclick=()=>buyMarketGood(b.dataset.buyGood));
 const props=ch.economy.properties;$('propertyList').innerHTML=props.length?props.map(p=>`<div class="event"><strong>${escapeHtml(p.type)}</strong><div>${escapeHtml(world.settlements.find(s=>s.id===p.settlementId)?.name||'Unknown')} · ${p.monthlyCost} coins rent</div></div>`).join(''):'<p class="muted">You do not currently rent or own property.</p>';
 const businesses=world.economyState.businesses.filter(b=>b.ownerId===ch.id);$('businessList').innerHTML=businesses.length?businesses.map(b=>`<article class="market-row"><div><strong>${escapeHtml(b.name)}</strong><small>${escapeHtml(b.type)} · cash ${b.cash} · last profit ${b.lastProfit}</small></div></article>`).join(''):'<p class="muted">You do not own a business.</p>';
 const shortages=economyGoods.filter(g=>m.stocks[g.id]<18);$('economyConditions').innerHTML=`<p><strong>${escapeHtml(st.name)}</strong> currently has ${shortages.length?`${shortages.length} shortage${shortages.length===1?'':'s'}`:'no major shortages'}.</p><p class="muted">${m.damage?`Damage level ${m.damage} is putting pressure on housing and infrastructure.`:'Infrastructure is not currently suffering major recorded damage.'}</p>`;
 const events=world.economyState.marketEvents.filter(x=>x.settlementId===st.id).slice().reverse().slice(0,12);$('economyLog').innerHTML=events.length?events.map(x=>`<div class="event"><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">No major recent market events.</p>';
}


const emergentArcTemplates=[
 {kind:'community',title:'A Community Under Pressure',seed:'A local problem is beginning to affect ordinary households.',sources:['shortage','damage','crime','rumor']},
 {kind:'relationship',title:'A Relationship at a Crossroads',seed:'Trust, affection, or tension between people has reached a point where choices may matter.',sources:['relationship']},
 {kind:'faction',title:'Competing Interests',seed:'Two organizations want different outcomes from the same local situation.',sources:['faction','crime']},
 {kind:'spirit',title:'Human and Spirit Needs Collide',seed:'A spiritual disturbance is becoming entangled with human activity.',sources:['spirit']},
 {kind:'career',title:'Work Becomes Personal',seed:'A professional opportunity is becoming tied to reputation, responsibility, and local need.',sources:['career','economy']},
 {kind:'travel',title:'Trouble on the Road',seed:'News from beyond the settlement is starting to affect travel and local decisions.',sources:['travel','rumor']},
 {kind:'history',title:'History Reaches Ordinary Lives',seed:'A wider historical development is producing local consequences.',sources:['history']}
];
function ensureEmergentStories(){
 if(!world)return;world.emergentStories=world.emergentStories||{arcs:[],consequences:[],lastDailyTick:null};
 world.emergentStories.arcs=Array.isArray(world.emergentStories.arcs)?world.emergentStories.arcs:[];
 world.emergentStories.consequences=Array.isArray(world.emergentStories.consequences)?world.emergentStories.consequences:[];
}
function arcSourceCandidates(ch){
 const town=currentSettlement(ch);ensureEconomyState();ensureFactionState();ensureSpiritState();ensureNpcSimulation();const c=[];
 const econ=settlementEconomy(town.id);
 if(economyGoods.some(g=>econ.stocks[g.id]<18))c.push({type:'shortage',weight:3,detail:'Local shortages are affecting prices and households.'});
 if(econ.damage>10)c.push({type:'damage',weight:3,detail:'Damage to homes or infrastructure is straining local life.'});
 const crimes=(world.factionState.incidents||[]).filter(x=>x.settlementId===town.id&&x.status==='unresolved');if(crimes.length)c.push({type:'crime',weight:2,detail:'Unresolved crime is affecting local trust and enforcement.'});
 const pol=(world.factionState.politicalEvents||[]).filter(x=>x.settlementId===town.id).slice(-4);if(pol.length)c.push({type:'faction',weight:2,detail:pol[pol.length-1].detail});
 const dist=(world.spiritState.disturbances||[]).filter(x=>x.settlementId===town.id&&!x.resolved);if(dist.length)c.push({type:'spirit',weight:3,detail:dist[0].detail});
 const rumors=(world.rumors||[]).filter(x=>x.settlementId===town.id&&!x.investigated);if(rumors.length)c.push({type:'rumor',weight:2,detail:rumors[0].text});
 const rels=relationshipPeople(ch).filter(x=>(x.r.tension||0)>20||(x.r.closeness||0)>60);if(rels.length)c.push({type:'relationship',weight:2,detail:`Your history with ${rels[0].n.name} has become significant.`});
 if((ch.career?.shifts||0)>4)c.push({type:'career',weight:2,detail:'Your working life is becoming visible enough to create responsibilities.'});
 if((ch.knownSettlementIds||[]).length>1)c.push({type:'travel',weight:1,detail:'Travel connections are bringing outside concerns into your current life.'});
 if((world.historyState?.historicalLog||[]).length)c.push({type:'history',weight:1,detail:'Wider historical changes are shaping local decisions.'});
 return c;
}
function createEmergentArc(){
 const ch=activeCharacter();if(!ch)return;ensureEmergentStories();const town=currentSettlement(ch),sources=arcSourceCandidates(ch);if(!sources.length){alert('Nothing in your current life is under enough pressure to naturally form a major story arc yet.');return;}
 const source=sources.sort((a,b)=>b.weight-a.weight)[0],tpl=emergentArcTemplates.find(x=>x.sources.includes(source.type))||emergentArcTemplates[0];
 const relatedNpc=relationshipPeople(ch).sort((a,b)=>((b.r.tension||0)+(b.r.closeness||0))-((a.r.tension||0)+(a.r.closeness||0)))[0]?.n||null;
 const localFaction=localFactions(ch).sort((a,b)=>b.power-a.power)[0]||null;
 const arc={id:uid('arc'),characterId:ch.id,settlementId:town.id,title:tpl.title,kind:tpl.kind,status:'active',stage:1,maxStage:4,urgency:1+Math.floor(Math.random()*3),createdAt:worldDate(),lastAdvanced:worldDate(),sourceType:source.type,summary:`${tpl.seed} ${source.detail}`,relatedNpcId:relatedNpc?.id||null,relatedFactionId:localFaction?.id||null,choices:[],history:[{worldDate:worldDate(),detail:'This story emerged from existing simulation pressure rather than a predefined quest.'}],ignoredTicks:0,resolution:null};
 world.emergentStories.arcs.push(arc);world.events.push(makeEvent('An emergent story begins',`${arc.title} is developing in ${town.name}.`,[ch.id]));saveWorld();
}
function arcChoice(arc,choice){
 const ch=activeCharacter();if(!ch||!arc||arc.status!=='active')return;ensureEmergentStories();
 const effects={help:{progress:1,rep:3,cost:2},investigate:{progress:1,rep:1,cost:1},negotiate:{progress:1,rep:2,cost:1},profit:{progress:1,rep:-1,cost:0},ignore:{progress:0,rep:0,cost:0}},e=effects[choice]||effects.investigate;
 if(choice!=='ignore'&&ch.needs.energy<8){alert('You are too exhausted to give this situation meaningful attention.');return;}
 if(choice!=='ignore'){applyNeeds(ch,{energy:-8-e.cost,hunger:4,morale:choice==='profit'?-1:2});advanceHours(2);}
 arc.choices.push({worldDate:worldDate(),choice});arc.history.push({worldDate:worldDate(),detail:`${ch.name} chose to ${choice}.`});
 if(choice==='ignore')arc.ignoredTicks+=2;else{arc.stage=Math.min(arc.maxStage,arc.stage+e.progress);arc.urgency=Math.max(1,arc.urgency-1);}
 if(arc.relatedFactionId&&e.rep)changeFactionRep(ch,arc.relatedFactionId,e.rep,`response to ${arc.title}`);
 if(choice==='profit'){ch.currency+=4+arc.urgency;arc.history.push({worldDate:worldDate(),detail:'The player benefited materially, but the underlying problem did not necessarily improve.'});}
 applyArcConsequences(arc,choice);if(arc.stage>=arc.maxStage&&choice!=='ignore')resolveArc(arc,choice);saveWorld();
}
function applyArcConsequences(arc,choice){
 const town=world.settlements.find(s=>s.id===arc.settlementId);if(!town)return;const econ=settlementEconomy(town.id);let detail='';
 if(arc.kind==='community'){if(choice==='help'||choice==='negotiate'){econ.prosperity=Math.min(100,econ.prosperity+2);detail='Community strain eased slightly.';}else if(choice==='profit'){econ.prosperity=Math.max(0,econ.prosperity-1);detail='Some people felt the situation was being exploited.';}}
 if(arc.kind==='faction'){const f=world.factionState.factions.find(x=>x.id===arc.relatedFactionId);if(f){f.stability=Math.max(0,Math.min(100,f.stability+(choice==='negotiate'?3:choice==='profit'?-2:1)));detail=`${f.shortName}'s stability shifted.`;}}
 if(arc.kind==='spirit'){if(choice==='help'||choice==='investigate')world.spiritState.worldBalance=Math.min(100,world.spiritState.worldBalance+2);if(choice==='profit')world.spiritState.worldBalance=Math.max(0,world.spiritState.worldBalance-2);detail='The human-spirit balance changed.';}
 if(arc.kind==='relationship'&&arc.relatedNpcId){const n=world.npcs.find(x=>x.id===arc.relatedNpcId);if(n){const r=relationshipWith(activeCharacter(),n);if(choice==='negotiate'||choice==='help'){r.trust=clamp(r.trust+4);r.tension=clamp(r.tension-4);}if(choice==='ignore')r.tension=clamp(r.tension+3);detail=`Your relationship with ${n.name} shifted.`;}}
 if(detail){world.emergentStories.consequences.push({id:uid('cons'),arcId:arc.id,worldDate:worldDate(),detail});if(world.emergentStories.consequences.length>180)world.emergentStories.consequences.shift();}
}
function resolveArc(arc,choice){
 const ch=activeCharacter();arc.status='resolved';arc.resolution=choice;arc.resolvedAt=worldDate();const reward=choice==='profit'?5:choice==='help'?3:2;ch.currency+=reward;arc.history.push({worldDate:worldDate(),detail:`The arc resolved primarily through ${choice}.`});world.events.push(makeEvent('Emergent story resolved',`${arc.title} concluded through ${choice}.`,[ch.id]));addLifeLog(ch,'Story consequence',`${arc.title} concluded. The world state changed according to how you handled it.`);
}
function advanceIgnoredArcs(){
 if(!world)return;ensureEmergentStories();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.emergentStories.lastDailyTick===stamp)return;world.emergentStories.lastDailyTick=stamp;
 world.emergentStories.arcs.filter(a=>a.status==='active').forEach(arc=>{arc.ignoredTicks++;if(arc.ignoredTicks%3===0){arc.urgency=Math.min(5,arc.urgency+1);if(arc.kind==='community'||arc.kind==='career'){const econ=settlementEconomy(arc.settlementId);econ.prosperity=Math.max(0,econ.prosperity-1);}if(arc.kind==='spirit')world.spiritState.worldBalance=Math.max(0,world.spiritState.worldBalance-1);arc.history.push({worldDate:worldDate(),detail:'The situation changed because no one resolved it quickly.'});}
 if(arc.ignoredTicks>=10){arc.status='resolved-without-player';arc.resolution='world-resolved';arc.resolvedAt=worldDate();arc.history.push({worldDate:worldDate(),detail:'Other people or changing circumstances eventually resolved this without the player.'});world.events.push(makeEvent('A story moved on without you',`${arc.title} changed course while the player stayed uninvolved.`));}});
}
function renderEmergentStories(){
 if(!$('emergentView')||!world)return;const ch=activeCharacter();$('noEmergentLife').classList.toggle('hidden',!!ch);$('emergentGame').classList.toggle('hidden',!ch);if(!ch)return;ensureEmergentStories();const arcs=world.emergentStories.arcs.filter(a=>a.characterId===ch.id),active=arcs.filter(a=>a.status==='active'),past=arcs.filter(a=>a.status!=='active').slice().reverse();
 $('emergentSummary').innerHTML=`<span>Active Arcs <b>${active.length}</b></span><span>Resolved <b>${past.length}</b></span><span>Consequences <b>${world.emergentStories.consequences.length}</b></span>`;
 $('emergentArcs').innerHTML=active.length?active.map(a=>{const n=world.npcs.find(x=>x.id===a.relatedNpcId),f=world.factionState?.factions?.find(x=>x.id===a.relatedFactionId);return `<article class="arc-card"><div class="section-head"><div><p class="eyebrow">${escapeHtml(a.kind.toUpperCase())} · STAGE ${a.stage}/${a.maxStage}</p><h3>${escapeHtml(a.title)}</h3></div><span class="status-pill">Urgency ${a.urgency}</span></div><p>${escapeHtml(a.summary)}</p><small>${n?`Connected to ${escapeHtml(n.name)} · `:''}${f?`Faction: ${escapeHtml(f.shortName)} · `:''}Ignored for ${a.ignoredTicks} ticks</small><div class="actions compact"><button data-arc="${a.id}" data-arc-choice="help">Help</button><button data-arc="${a.id}" data-arc-choice="investigate">Investigate</button><button data-arc="${a.id}" data-arc-choice="negotiate">Negotiate</button><button data-arc="${a.id}" data-arc-choice="profit">Exploit Opportunity</button><button data-arc="${a.id}" data-arc-choice="ignore">Ignore</button></div><details><summary>Story history</summary>${a.history.slice().reverse().map(x=>`<p>${escapeHtml(x.worldDate)} — ${escapeHtml(x.detail)}</p>`).join('')}</details></article>`}).join(''):'<p class="muted">No major emergent arcs are currently demanding your attention.</p>';
 $('emergentArcs').querySelectorAll('[data-arc]').forEach(b=>b.onclick=()=>arcChoice(world.emergentStories.arcs.find(a=>a.id===b.dataset.arc),b.dataset.arcChoice));
 $('emergentHistory').innerHTML=past.length?past.slice(0,15).map(a=>`<div class="event"><strong>${escapeHtml(a.title)}</strong><div>${escapeHtml(a.status)} · ${escapeHtml(a.resolution||'unknown')}</div><small>${escapeHtml(a.resolvedAt||a.createdAt)}</small></div>`).join(''):'<p class="muted">No emergent arcs have concluded yet.</p>';
 const cons=[...world.emergentStories.consequences].reverse().slice(0,15);$('consequenceLog').innerHTML=cons.length?cons.map(c=>`<div class="event"><div>${escapeHtml(c.detail)}</div><small>${escapeHtml(c.worldDate)}</small></div>`).join(''):'<p class="muted">No major downstream consequences have been recorded yet.</p>';
}


function ensureGenerationState(){
 if(!world)return;world.generationState=world.generationState||{households:[],inheritanceLog:[],deaths:[],lastYearTick:null};
 world.generationState.households=Array.isArray(world.generationState.households)?world.generationState.households:[];
 world.generationState.inheritanceLog=Array.isArray(world.generationState.inheritanceLog)?world.generationState.inheritanceLog:[];
 world.generationState.deaths=Array.isArray(world.generationState.deaths)?world.generationState.deaths:[];
 world.characters.forEach(ensureGenerationCharacter);
}
function ensureGenerationCharacter(ch){
 if(!ch)return;ch.birthYear=Number.isFinite(ch.birthYear)?ch.birthYear:(world?world.clock.year-Number(ch.age||18):0);
 ch.alive=ch.alive!==false;ch.lifeStatus=ch.lifeStatus||(ch.alive?'living':'deceased');ch.partnerId=ch.partnerId||null;
 ch.parentIds=Array.isArray(ch.parentIds)?ch.parentIds:[];ch.childrenIds=Array.isArray(ch.childrenIds)?ch.childrenIds:[];ch.siblingIds=Array.isArray(ch.siblingIds)?ch.siblingIds:[];
 ch.legacy=ch.legacy||{generation:1,inheritanceReceived:0,heirs:[],willNote:'Family and household possessions pass to surviving partner or adult children when possible.'};
 ch.householdId=ch.householdId||null;
}
function personById(id){return world.characters.find(x=>x.id===id)||world.npcs.find(x=>x.id===id)||null;}
function householdFor(ch){
 ensureGenerationState();if(ch.householdId){const found=world.generationState.households.find(x=>x.id===ch.householdId);if(found)return found;}
 const hh={id:uid('house'),name:`${ch.name}'s Household`,settlementId:ch.currentSettlementId||null,memberIds:[ch.id],foundedAt:worldDate(),history:[]};world.generationState.households.push(hh);ch.householdId=hh.id;return hh;
}
function adultRomanticRelationship(ch){
 return relationshipPeople(ch).filter(({r,n})=>n&&Number(n.age||0)>=18&&ch.age>=18&&r.type!=='family'&&(r.status==='romantic'||r.stage==='partner'||r.commitment==='partner')).sort((a,b)=>b.r.closeness-a.r.closeness)[0]||null;
}
function commitPartner(npcId){
 const ch=activeCharacter(),n=personById(npcId);if(!ch||!n)return;ensureGenerationState();if(ch.age<18||Number(n.age||0)<18){alert('Partnership and adult romance are only available between adults.');return;}
 const r=relationshipWith(ch,n);if(r.type==='family'){alert('Family relationships cannot become romantic partnerships.');return;}
 if(r.trust<55||r.affection<50||r.attraction<25){alert('This relationship is not ready for a committed partnership yet.');return;}
 r.status='romantic';r.type='romance';r.commitment='partner';r.stage='partner';ch.partnerId=n.id;n.partnerId=ch.id;
 const hh=householdFor(ch);if(!hh.memberIds.includes(n.id))hh.memberIds.push(n.id);if('householdId' in n)n.householdId=hh.id;
 r.sharedMemories.push(`${worldDate()}: Chose to build a committed life together.`);world.events.push(makeEvent('A partnership begins',`${ch.name} and ${n.name} became committed partners.`,[ch.id,n.id]));saveWorld();
}
function createPlayerChild(){
 const ch=activeCharacter();if(!ch)return;ensureGenerationState();const pair=adultRomanticRelationship(ch);if(!pair){alert('A stable adult partnership is required before choosing to grow the household.');return;}
 const partner=pair.n;if(ch.age<18||Number(partner.age||0)<18)return;
 const name=prompt('Name the child:');if(!name)return;
 const child={id:uid('pc'),createdAt:new Date().toISOString(),status:'dependent',name:name.trim(),nickname:'',age:0,birthYear:world.clock.year,alive:true,lifeStatus:'child',gender:'',pronouns:'',voice:'',appearance:{},visualIdentity:{nation:ch.nation,currentAge:0,artNotes:'Descendant visual identity develops with age.'},nation:ch.nation,region:ch.region,upbringing:'Family household',education:'Family taught',bending:{element:'unknown',training:'Untrained',discipline:'None yet',mastery:'Beginner'},occupation:'Child',wealth:ch.wealth,home:ch.home,personality:[],strengths:[],flaws:[],goal:'Grow up safely',fear:'',romancePreference:'friends-only',familyMode:'independent',skills:{general:{},bending:{}},health:{condition:'Healthy',fatigue:0},inventory:[],equipment:{outfit:null,tool:null,weapon:null,travel:null},properties:[],lodging:null,ownershipLog:[],currency:0,reputation:[],memories:[{id:uid('memory'),importance:'major',summary:`Born into the household of ${ch.name} and ${partner.name}.`,createdAtWorldDate:worldDate()}],familyIds:[ch.id,partner.id],relationshipIds:[],chronicle:[],parentIds:[ch.id,partner.id],childrenIds:[],siblingIds:[],partnerId:null,legacy:{generation:(ch.legacy?.generation||1)+1,inheritanceReceived:0,heirs:[],willNote:'No will yet.'}};
 world.characters.push(child);ensureGenerationCharacter(child);const hh=householdFor(ch);child.householdId=hh.id;hh.memberIds.push(child.id);ch.childrenIds.push(child.id);ch.familyIds.push(child.id);
 if(Array.isArray(partner.childrenIds))partner.childrenIds.push(child.id);if(Array.isArray(partner.familyIds))partner.familyIds.push(child.id);
 ch.childrenIds.filter(id=>id!==child.id).forEach(id=>{const sib=world.characters.find(x=>x.id===id);if(sib){sib.siblingIds=sib.siblingIds||[];if(!sib.siblingIds.includes(child.id))sib.siblingIds.push(child.id);child.siblingIds.push(sib.id);}});
 world.relationships.push({id:uid('rel'),a:ch.id,b:child.id,type:'family',familyRole:'Parent / child',trust:80,respect:40,affection:90,attraction:0,closeness:75,boundaries:{romanceAllowed:false},status:'active',stage:'family',sharedMemories:[],history:[]});
 world.events.push(makeEvent('A new generation begins',`${name} joined ${ch.name}'s household.`,[ch.id,partner.id,child.id]));saveWorld();
}
function inheritanceRecipients(ch){
 const livingChildren=(ch.childrenIds||[]).map(personById).filter(x=>x&&x.alive!==false);
 const partner=personById(ch.partnerId);if(partner&&partner.alive!==false)return [partner,...livingChildren];
 return livingChildren;
}
function distributeInheritance(ch){
 const heirs=inheritanceRecipients(ch);if(!heirs.length)return;const coins=Math.max(0,Number(ch.currency||0)),share=Math.floor(coins/heirs.length);heirs.forEach(h=>{h.currency=Number(h.currency||0)+share;if(h.legacy)h.legacy.inheritanceReceived=(h.legacy.inheritanceReceived||0)+share;});
 ch.currency=Math.max(0,coins-share*heirs.length);ch.legacy.heirs=heirs.map(x=>x.id);world.generationState.inheritanceLog.push({id:uid('inherit'),worldDate:worldDate(),fromId:ch.id,toIds:heirs.map(x=>x.id),coins:share*heirs.length,detail:`${ch.name}'s available household wealth passed to ${heirs.map(x=>x.name).join(', ')}.`});
}
function playerDeath(ch,reason='natural causes'){
 if(!ch||ch.alive===false)return;ch.alive=false;ch.status='deceased';ch.lifeStatus='deceased';ch.health.condition='Deceased';distributeInheritance(ch);world.generationState.deaths.push({id:uid('death'),characterId:ch.id,worldDate:worldDate(),age:ch.age,reason});world.events.push(makeEvent('A playable life ends',`${ch.name} died at age ${ch.age}. Their family and legacy remain in the world.`,[ch.id]));
 if(world.activeCharacterId===ch.id){const heir=(ch.childrenIds||[]).map(id=>world.characters.find(x=>x.id===id)).find(x=>x&&x.alive!==false&&x.age>=18);world.activeCharacterId=heir?.id||null;}
}
function simulateGenerationYear(){
 if(!world)return;ensureGenerationState();if(world.generationState.lastYearTick===world.clock.year)return;world.generationState.lastYearTick=world.clock.year;
 world.characters.slice().forEach(ch=>{ensureGenerationCharacter(ch);if(!ch.alive)return;ch.age=Math.max(Number(ch.age||0)+1,world.clock.year-ch.birthYear);if(ch.visualIdentity)ch.visualIdentity.currentAge=ch.age;if(world.portraitState?.profiles?.[ch.id])world.portraitState.profiles[ch.id].age=ch.age;
 if(ch.age===18&&ch.lifeStatus==='child'){ch.lifeStatus='living';ch.status='active';ch.occupation=ch.occupation==='Child'?'Unestablished':ch.occupation;world.events.push(makeEvent('A descendant comes of age',`${ch.name} reached adulthood and can now become a playable active life.`,[ch.id]));}
 const mortality=ch.age<55?.0005:ch.age<70?.008:ch.age<85?.04:.14;if(world.uiSettings?.characterDeath!==false&&Math.random()<mortality)playerDeath(ch,'natural causes');});
}
function activateDescendant(id){
 const ch=world.characters.find(x=>x.id===id);if(!ch||ch.alive===false)return;if(ch.age<18){alert('This descendant is still a child. Time must pass before they can become the active playable life.');return;}world.activeCharacterId=ch.id;ch.status='active';ch.lifeStatus='living';ensureCharacterLifeState(ch);ensureTrainingState(ch);ensureHomeSettlement(ch);world.events.push(makeEvent('The story passes to another life',`${ch.name} becomes the active playable character.`,[ch.id]));saveWorld();
}
function renderGenerations(){
 if(!$('generationsView')||!world)return;const ch=activeCharacter();$('noGenerationLife').classList.toggle('hidden',!!ch);$('generationGame').classList.toggle('hidden',!ch);if(!ch)return;ensureGenerationState();ensureGenerationCharacter(ch);const hh=householdFor(ch),partner=personById(ch.partnerId),children=(ch.childrenIds||[]).map(personById).filter(Boolean),parents=(ch.parentIds||[]).map(personById).filter(Boolean),siblings=(ch.siblingIds||[]).map(personById).filter(Boolean);
 $('generationSummary').innerHTML=`<span>Age <b>${ch.age}</b></span><span>Generation <b>${ch.legacy.generation}</b></span><span>Partner <b>${partner?escapeHtml(partner.name):'—'}</b></span><span>Children <b>${children.length}</b></span><span>Household <b>${hh.memberIds.length}</b></span>`;
 $('householdList').innerHTML=hh.memberIds.map(id=>personById(id)).filter(Boolean).map(p=>`<div class="event"><strong>${escapeHtml(p.name)}</strong><div>${p.id===ch.id?'Active character':p.lifeStatus||p.role||p.occupation||'Household member'} · age ${Number(p.age||0)}${p.alive===false?' · deceased':''}</div></div>`).join('');
 $('familyTree').innerHTML=`<div class="family-tree-grid"><div><h4>Parents</h4>${parents.map(p=>`<p>${escapeHtml(p.name)}</p>`).join('')||'<p class="muted">None recorded</p>'}</div><div><h4>Siblings</h4>${siblings.map(p=>`<p>${escapeHtml(p.name)}</p>`).join('')||'<p class="muted">None recorded</p>'}</div><div><h4>Partner</h4><p>${partner?escapeHtml(partner.name):'None'}</p></div><div><h4>Children / Descendants</h4>${children.map(p=>`<p><strong>${escapeHtml(p.name)}</strong> · age ${p.age}${world.characters.some(x=>x.id===p.id)&&p.age>=18&&p.alive!==false?` <button data-heir="${p.id}">Play</button>`:''}</p>`).join('')||'<p class="muted">None</p>'}</div></div>`;
 $('familyTree').querySelectorAll('[data-heir]').forEach(b=>b.onclick=()=>activateDescendant(b.dataset.heir));
 const possible=relationshipPeople(ch).filter(({r,n})=>n&&Number(n.age||0)>=18&&r.type!=='family'&&!ch.partnerId&&r.trust>=55&&r.affection>=50&&r.attraction>=25);
 $('partnerOptions').innerHTML=ch.partnerId?`<p>You share a committed household with <strong>${escapeHtml(partner?.name||'your partner')}</strong>.</p>`:possible.length?possible.map(({n,r})=>`<article class="family-option"><strong>${escapeHtml(n.name)}</strong><small>Trust ${r.trust} · affection ${r.affection} · attraction ${r.attraction}</small><button data-partner="${n.id}">Commit as Partners</button></article>`).join(''):'<p class="muted">No current adult relationship is ready for long-term partnership.</p>';
 $('partnerOptions').querySelectorAll('[data-partner]').forEach(b=>b.onclick=()=>commitPartner(b.dataset.partner));
 $('growFamilyBtn').disabled=!adultRomanticRelationship(ch);
 const log=[...world.generationState.inheritanceLog].reverse().slice(0,12);$('legacyLog').innerHTML=log.length?log.map(x=>`<div class="event"><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">No inheritance has changed hands yet.</p>';
}


const canonFigureTemplates=[
 {id:'aang',name:'Aang',eras:['hundred-year-war','post-war'],nation:'Air Nomads',role:'Avatar',importance:'world-famous'},
 {id:'katara',name:'Katara',eras:['hundred-year-war','post-war'],nation:'Southern Water Tribe',role:'Waterbender and healer',importance:'famous'},
 {id:'sokka',name:'Sokka',eras:['hundred-year-war','post-war'],nation:'Southern Water Tribe',role:'Strategist and leader',importance:'famous'},
 {id:'zuko',name:'Zuko',eras:['hundred-year-war','post-war'],nation:'Fire Nation',role:'Prince / Fire Lord',importance:'world-famous'},
 {id:'toph',name:'Toph Beifong',eras:['hundred-year-war','post-war'],nation:'Earth Kingdom',role:'Earthbending master',importance:'famous'},
 {id:'iroh',name:'Iroh',eras:['hundred-year-war','post-war'],nation:'Fire Nation',role:'Retired general and tea master',importance:'famous'},
 {id:'azula',name:'Azula',eras:['hundred-year-war'],nation:'Fire Nation',role:'Princess',importance:'world-famous'},
 {id:'korra',name:'Korra',eras:['korra-era'],nation:'Southern Water Tribe',role:'Avatar',importance:'world-famous'},
 {id:'asami',name:'Asami Sato',eras:['korra-era'],nation:'United Republic',role:'Industrialist',importance:'famous'},
 {id:'mako',name:'Mako',eras:['korra-era'],nation:'United Republic',role:'Pro-bender / police officer',importance:'known'},
 {id:'bolin',name:'Bolin',eras:['korra-era'],nation:'United Republic',role:'Pro-bender and performer',importance:'known'},
 {id:'tenzin',name:'Tenzin',eras:['korra-era'],nation:'Air Nation',role:'Airbending master',importance:'famous'},
 {id:'lin',name:'Lin Beifong',eras:['korra-era'],nation:'United Republic',role:'Police chief',importance:'famous'}
];
function canonEraMatch(f){const e=String(world.era||'').toLowerCase();if(f.eras.some(x=>e.includes(x)))return true;if(e.includes('war')&&f.eras.includes('hundred-year-war'))return true;if((e.includes('aang')||e.includes('reconstruction')||e.includes('republic'))&&f.eras.includes('post-war'))return true;if((e.includes('korra')||e.includes('modern'))&&f.eras.includes('korra-era'))return true;return false;}
function ensureCanonState(){if(!world)return;world.canonState=world.canonState||{figures:[],encounters:[],lastDailyTick:null,initialized:false};if(!world.canonState.initialized){world.canonState.figures=canonFigureTemplates.filter(canonEraMatch).map(f=>({...f,status:'elsewhere',settlementId:null,lastSeen:null,playerFamiliarity:0}));world.canonState.initialized=true;}}
function canonEncounterChance(){const ch=activeCharacter();if(!ch)return;ensureCanonState();const town=currentSettlement(ch);if(!town)return;const candidates=world.canonState.figures.filter(f=>f.status!=='unavailable');if(!candidates.length)return;const chance=(town.prosperity||50)>65?.035:.018;if(Math.random()>chance)return;const f=candidates[Math.floor(Math.random()*candidates.length)],types=['glimpse','public-event','professional-crossing','brief-conversation'],type=types[Math.floor(Math.random()*types.length)];let detail='';if(type==='glimpse')detail=`${ch.name} briefly saw ${f.name} passing through ${town.name}. There was no reason for the famous figure to notice them.`;if(type==='public-event')detail=`${ch.name} was present at a public moment involving ${f.name}. They experienced history as one person in the crowd.`;if(type==='professional-crossing')detail=`Ordinary work or travel briefly put ${ch.name} in the same place as ${f.name}. The encounter was practical rather than destiny-driven.`;if(type==='brief-conversation')detail=`Circumstance allowed ${ch.name} a short conversation with ${f.name}. It created familiarity, not instant friendship.`;const enc={id:uid('canon'),characterId:ch.id,figureId:f.id,type,settlementId:town.id,worldDate:worldDate(),detail,significance:type==='brief-conversation'?2:1};world.canonState.encounters.push(enc);f.lastSeen=worldDate();f.settlementId=town.id;f.playerFamiliarity=Math.min(10,f.playerFamiliarity+enc.significance);world.events.push(makeEvent('Historical encounter',detail,[ch.id]));addLifeLog(ch,'A brush with history',detail);}
function canonDailyTick(){if(!world)return;ensureCanonState();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.canonState.lastDailyTick===stamp)return;world.canonState.lastDailyTick=stamp;canonEncounterChance();}
function renderCanonEncounters(){if(!$('canonView')||!world)return;const ch=activeCharacter();$('noCanonLife').classList.toggle('hidden',!!ch);$('canonGame').classList.toggle('hidden',!ch);if(!ch)return;ensureCanonState();const figs=world.canonState.figures;$('canonFigures').innerHTML=figs.length?figs.map(f=>`<article class="canon-card"><p class="eyebrow">${escapeHtml(f.importance.toUpperCase())}</p><h3>${escapeHtml(f.name)}</h3><p>${escapeHtml(f.role)} · ${escapeHtml(f.nation)}</p><small>Personal familiarity: ${f.playerFamiliarity}/10${f.lastSeen?` · last encountered ${escapeHtml(f.lastSeen)}`:''}</small></article>`).join(''):'<p class="muted">No major canon figures are active in this selected era.</p>';const rows=world.canonState.encounters.filter(e=>e.characterId===ch.id).slice().reverse();$('canonEncounterLog').innerHTML=rows.length?rows.map(e=>{const f=figs.find(x=>x.id===e.figureId);return `<div class="event"><strong>${escapeHtml(f?.name||'Historical figure')}</strong><div>${escapeHtml(e.detail)}</div><small>${escapeHtml(e.worldDate)} · ${escapeHtml(e.type)}</small></div>`}).join(''):'<p class="muted">You have not personally crossed paths with a famous historical figure yet.</p>';}



function ensureMapState(){
 if(!world)return;world.mapState=world.mapState||{selectedSettlementId:null,selectedRouteId:null,zoom:'world',showUnknown:true};
 world.settlements.forEach((st,i)=>{if(!st.mapPosition){const nation=st.homeNation||'Other',group={'Earth Kingdom':[48,54],'Fire Nation':[78,48],'Northern Water Tribe':[50,13],'Southern Water Tribe':[50,88],'Foggy Swamp Tribe':[38,67],'Air Nomad / Air culture':[24,33],'Republic City':[61,42]}[nation]||[50,50];const angle=((i*137.5)%360)*Math.PI/180,rad=8+(i%5)*2;st.mapPosition={x:Math.max(6,Math.min(94,group[0]+Math.cos(angle)*rad)),y:Math.max(7,Math.min(93,group[1]+Math.sin(angle)*rad))};}});
}
function mapKnownSettlement(ch,st){return st.id===ch.currentSettlementId||st.id===ch.homeSettlementId||(ch.knownSettlementIds||[]).includes(st.id)||world.worldAtlas?.discoveredRegionIds?.includes(st.atlasId);}
function routeConnectedTo(route,id){return route.from===id||route.to===id;}
function mapRouteClass(route,ch){const a=world.settlements.find(s=>s.id===route.from),b=world.settlements.find(s=>s.id===route.to),known=route.discovered||mapKnownSettlement(ch,a)||mapKnownSettlement(ch,b);return `${known?'known':'unknown'} ${route.blocked?'blocked':''} danger-${route.danger>=55?'high':route.danger>=30?'mid':'low'}`;}
function worldMapSvg(ch){
 ensureMapState();const width=900,height=520,settlements=world.settlements,showUnknown=world.mapState.showUnknown!==false;
 const lines=world.explorationState.routes.filter(r=>showUnknown||r.discovered||routeConnectedTo(r,ch.currentSettlementId)).map(r=>{const a=settlements.find(s=>s.id===r.from),b=settlements.find(s=>s.id===r.to);if(!a||!b)return '';const x1=a.mapPosition.x/100*width,y1=a.mapPosition.y/100*height,x2=b.mapPosition.x/100*width,y2=b.mapPosition.y/100*height;return `<line class="map-route ${mapRouteClass(r,ch)} ${world.mapState.selectedRouteId===r.id?'selected':''}" data-map-route="${r.id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><title>${escapeHtml(routeName(r))} · ${r.terrain} · danger ${r.danger}</title></line>`}).join('');
 const nodes=settlements.filter(st=>showUnknown||mapKnownSettlement(ch,st)).map(st=>{const known=mapKnownSettlement(ch,st),here=st.id===ch.currentSettlementId,x=st.mapPosition.x/100*width,y=st.mapPosition.y/100*height,label=known?st.name:'Unknown place';return `<g class="map-node ${known?'known':'unknown'} ${here?'current':''} ${world.mapState.selectedSettlementId===st.id?'selected':''}" data-map-settlement="${st.id}" transform="translate(${x} ${y})"><circle r="${here?11:8}"></circle><text y="-14" text-anchor="middle">${escapeHtml(label)}</text>${here?'<text y="24" text-anchor="middle" class="you-are-here">YOU ARE HERE</text>':''}<title>${escapeHtml(label)}${known?` · ${escapeHtml(st.homeNation||'')}`:''}</title></g>`}).join('');
 return `<svg class="world-map-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Schematic world travel map"><rect class="map-sea" width="${width}" height="${height}" rx="20"></rect><text x="20" y="30" class="map-caption">Schematic travel map · routes represent connectivity, not exact geographic scale</text>${lines}${nodes}</svg>`;
}
function selectMapSettlement(id){
 const ch=activeCharacter(),st=world.settlements.find(s=>s.id===id);if(!ch||!st)return;ensureMapState();world.mapState.selectedSettlementId=id;const route=world.explorationState.routes.find(r=>routeConnectedTo(r,ch.currentSettlementId)&&routeOther(r,ch.currentSettlementId)===id);world.mapState.selectedRouteId=route?.id||null;renderTravel();
}
function selectMapRoute(id){ensureMapState();const r=world.explorationState.routes.find(x=>x.id===id);if(!r)return;world.mapState.selectedRouteId=id;const ch=activeCharacter();world.mapState.selectedSettlementId=routeOther(r,ch.currentSettlementId)||r.to;renderTravel();}
function renderMapSelection(ch){
 const st=world.settlements.find(s=>s.id===world.mapState.selectedSettlementId),route=world.explorationState.routes.find(r=>r.id===world.mapState.selectedRouteId);
 if(!st){$('mapSelection').innerHTML='<p class="muted">Select a destination node or route to inspect it.</p>';return;}
 const known=mapKnownSettlement(ch,st),reachable=route&&routeConnectedTo(route,ch.currentSettlementId);
 $('mapSelection').innerHTML=`<p class="eyebrow">${known?escapeHtml(st.homeNation||'KNOWN REGION'):'UNDISCOVERED'}</p><h3>${escapeHtml(known?st.name:'Unknown destination')}</h3>${known?`<p>${escapeHtml(st.description||st.culture||'A known settlement.')}</p>`:'<p class="muted">You know a route leads somewhere in this direction, but you have not learned enough to identify the place.</p>'}${route?`<div class="route-facts"><span>${escapeHtml(route.terrain)}</span><span>Distance ${route.distance}</span><span>Danger ${route.danger}</span>${route.blocked?'<span>BLOCKED</span>':''}</div>`:''}${reachable&&!route.blocked?`<div class="map-travel-modes">${availableTravelModes(route).map(m=>`<button data-map-travel="${route.id}" data-map-mode="${m.id}">${escapeHtml(m.name)} · ${m.cost} coin · ~${Math.max(2,Math.ceil(route.distance*5/m.speed))}h</button>`).join('')}</div>`:known&&st.id!==ch.currentSettlementId?'<p class="muted">No direct route from your current location. Travel through connected settlements first.</p>':'<p><strong>You are here.</strong></p>'}`;
 $('mapSelection').querySelectorAll('[data-map-travel]').forEach(b=>b.onclick=()=>beginRegionalJourney(b.dataset.mapTravel,b.dataset.mapMode));
}
function localMapSvg(ch){
 const st=currentSettlement(ch),places=st?.places||[];if(!st)return '';const width=760,height=360,cx=380,cy=180,n=Math.max(1,places.length);
 const paths=places.map((p,i)=>{const angle=(-Math.PI/2)+(i/n)*Math.PI*2,x=cx+Math.cos(angle)*125,y=cy+Math.sin(angle)*125;p.localMapPosition={x,y};return `<line class="district-link" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"></line>`}).join('');
 const nodes=places.map((p,i)=>{const pos=p.localMapPosition,here=p.key===ch.currentLocationKey;return `<g class="district-node ${here?'current':''}" data-local-place="${p.key}" transform="translate(${pos.x} ${pos.y})"><circle r="${here?17:14}"></circle><text y="4" text-anchor="middle" class="district-icon">${escapeHtml(p.icon||'•')}</text><text y="31" text-anchor="middle">${escapeHtml(p.name)}</text></g>`}).join('');
 return `<svg class="local-map-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Local settlement map"><circle class="district-center" cx="${cx}" cy="${cy}" r="42"></circle><text x="${cx}" y="${cy+4}" text-anchor="middle" class="district-center-label">${escapeHtml(st.name)}</text>${paths}${nodes}</svg>`;
}
function renderLocalNavigation(ch){
 if(!$('localMap'))return;const st=currentSettlement(ch),place=currentPlace(ch);$('localMapTitle').textContent=`${st.name} · local districts`;$('localMap').innerHTML=localMapSvg(ch);$('localMap').querySelectorAll('[data-local-place]').forEach(el=>el.onclick=()=>travelTo(el.dataset.localPlace));$('localPlaceDetail').innerHTML=`<h3>${escapeHtml(place?.name||st.name)}</h3><p>${escapeHtml(place?.desc||st.description||'')}</p><p class="muted">${presentNpcs(st,ch.currentLocationKey).length} people currently present · moving districts takes about 1 hour.</p>`;
}

const travelModes=[
 {id:'walk',name:'On foot',speed:1,cost:0,energy:9,risk:1.15},
 {id:'mount',name:'Animal mount',speed:1.7,cost:2,energy:5,risk:.9},
 {id:'cart',name:'Cart / caravan',speed:1.4,cost:3,energy:3,risk:.75},
 {id:'ship',name:'Ship / ferry',speed:2.2,cost:5,energy:2,risk:.7},
 {id:'rail',name:'Rail / modern transit',speed:3.2,cost:6,energy:1,risk:.45}
];
function ensureExplorationState(){
 if(!world)return;ensureMapState();world.explorationState=world.explorationState||{routes:[],discoveries:[],camps:[],journeys:[],initialized:false};
 const e=world.explorationState;if(e.initialized)return;e.initialized=true;
 const ss=world.settlements||[];for(let i=0;i<ss.length;i++){for(let j=i+1;j<ss.length;j++){if(j===i+1||Math.random()<.18){e.routes.push({id:uid('route'),from:ss[i].id,to:ss[j].id,distance:2+((i+j*2)%7),terrain:['road','forest','mountains','coast','riverlands','desert'][((i*3)+j)%6],danger:15+((i*11+j*7)%55),discovered:i===0||j===0,blocked:false});}}}
}
function availableTravelModes(route){
 const modern=String(world.era).toLowerCase().includes('korra')||String(world.era).toLowerCase().includes('future')||String(world.era).toLowerCase().includes('modern');
 return travelModes.filter(m=>m.id!=='rail'||modern).filter(m=>m.id!=='ship'||route.terrain==='coast'||route.terrain==='riverlands');
}
function routeOther(route,id){return route.from===id?route.to:route.from;}
function routeName(route){const a=world.settlements.find(s=>s.id===route.from),b=world.settlements.find(s=>s.id===route.to);return `${a?.name||'Unknown'} ↔ ${b?.name||'Unknown'}`;}
function travelEncounter(ch,route){
 const roll=Math.random()*100,threshold=route.danger;let detail=null;
 if(roll<threshold*.18){detail=`Bad conditions on the ${route.terrain} route caused a minor injury and delay.`;ch.health.condition=ch.health.condition==='Healthy'?'Bruised':ch.health.condition;applyNeeds(ch,{energy:-8,morale:-3});}
 else if(roll<threshold*.42){detail=`The journey encountered a tense situation along the ${route.terrain}, but ${ch.name} avoided serious harm.`;applyNeeds(ch,{energy:-4,morale:-1});}
 else if(roll>88){const finds=['an overlooked shrine','a scenic overlook','old road markers','a quiet camping hollow','animal tracks leading off the road','the remains of an older settlement'];const found=finds[Math.floor(Math.random()*finds.length)];detail=`Exploration revealed ${found}.`;world.explorationState.discoveries.push({id:uid('disc'),characterId:ch.id,routeId:route.id,worldDate:worldDate(),name:found,detail});ch.lifeStats.placesExplored=(ch.lifeStats.placesExplored||0)+1;}
 return detail;
}
function beginRegionalJourney(routeId,modeId){
 const ch=activeCharacter();if(!ch)return;ensureExplorationState();const route=world.explorationState.routes.find(r=>r.id===routeId);if(!route||route.blocked)return;const mode=travelModes.find(m=>m.id===modeId)||travelModes[0];if(!availableTravelModes(route).some(m=>m.id===mode.id))return;
 if(ch.currency<mode.cost){alert('You cannot afford that travel method.');return;}ch.currency-=mode.cost;
 const destinationId=routeOther(route,ch.currentSettlementId);if(!destinationId){alert('This route does not connect to your current settlement.');return;}
 const hours=Math.max(2,Math.ceil(route.distance*5/mode.speed)),days=Math.max(1,Math.ceil(hours/12));applyNeeds(ch,{energy:-Math.min(70,mode.energy*days),hunger:Math.min(60,8*days),morale:-Math.round(route.danger/25)});
 const encounter=travelEncounter(ch,route);advanceHours(hours);ch.currentSettlementId=destinationId;const arrived=world.settlements.find(s=>s.id===destinationId);ch.currentLocationKey=arrived?.places?.some(p=>p.key==='market')?'market':arrived?.places?.[0]?.key||'home';ch.knownSettlementIds=ch.knownSettlementIds||[];if(!ch.knownSettlementIds.includes(destinationId))ch.knownSettlementIds.push(destinationId);route.discovered=true;
 const dest=world.settlements.find(s=>s.id===destinationId);const journey={id:uid('journey'),characterId:ch.id,routeId:route.id,mode:mode.id,from:route.from===destinationId?route.to:route.from,to:destinationId,hours,worldDate:worldDate(),encounter};world.explorationState.journeys.push(journey);addLifeLog(ch,'Regional journey',`${ch.name} traveled to ${dest?.name||'a new settlement'} by ${mode.name.toLowerCase()} over ${hours} hours.${encounter?' '+encounter:''}`);saveWorld();
}
function makeCamp(){
 const ch=activeCharacter();if(!ch)return;ensureExplorationState();const cost=2;if(ch.currency<cost){alert('You need 2 coins worth of basic food and camp supplies.');return;}ch.currency-=cost;applyNeeds(ch,{energy:28,hunger:-24,morale:5});world.explorationState.camps.push({id:uid('camp'),characterId:ch.id,settlementId:ch.currentSettlementId,worldDate:worldDate(),weather:world.environment.weather});addLifeLog(ch,'Made camp',`${ch.name} spent the night in a simple camp near ${currentSettlement(ch).name}.`);advanceHours(8);
}
function exploreRegion(){
 const ch=activeCharacter();if(!ch)return;ensureExplorationState();const routes=world.explorationState.routes.filter(r=>r.from===ch.currentSettlementId||r.to===ch.currentSettlementId);if(!routes.length)return;applyNeeds(ch,{energy:-12,hunger:8,morale:6});advanceHours(3);const r=routes[Math.floor(Math.random()*routes.length)];r.discovered=true;const detail=travelEncounter(ch,r)||`Scouting revealed more of the ${r.terrain} route toward ${world.settlements.find(s=>s.id===routeOther(r,ch.currentSettlementId))?.name||'another settlement'}.`;world.explorationState.discoveries.push({id:uid('disc'),characterId:ch.id,routeId:r.id,worldDate:worldDate(),name:'Regional scouting',detail});addLifeLog(ch,'Explored the region',detail);saveWorld();
}
function renderTravel(){
 if(!$('travelView')||!world)return;const ch=activeCharacter();const no=$('noTravelLife'),game=$('travelGame');if(no)no.classList.toggle('hidden',!!ch);if(game)game.classList.toggle('hidden',!ch);if(!ch)return;ensureExplorationState();ensureMapState();const town=currentSettlement(ch),routes=world.explorationState.routes.filter(r=>r.from===town.id||r.to===town.id);
 $('travelLocationPill').textContent=`${town.name} · ${currentPlace(ch)?.name||''}`;$('travelRegionTitle').textContent='World & Regional Navigation';$('travelRegionContext').textContent=`Choose routes visually, inspect danger and travel time, or move around ${town.name} on the local map.`;
 if(!$('worldMap').innerHTML)$('worldMap').innerHTML=worldMapSvg(ch);else $('worldMap').innerHTML=worldMapSvg(ch);
 $('worldMap').querySelectorAll('[data-map-settlement]').forEach(el=>el.onclick=()=>selectMapSettlement(el.dataset.mapSettlement));$('worldMap').querySelectorAll('[data-map-route]').forEach(el=>el.onclick=e=>{e.stopPropagation();selectMapRoute(el.dataset.mapRoute)});
 renderMapSelection(ch);renderLocalNavigation(ch);
 $('destinationList').innerHTML=routes.map(r=>{const d=world.settlements.find(s=>s.id===routeOther(r,town.id)),known=mapKnownSettlement(ch,d),modes=availableTravelModes(r);return `<article class="route-card ${r.blocked?'blocked':''}"><div><p class="eyebrow">${escapeHtml(r.terrain.toUpperCase())} · DANGER ${r.danger}</p><h3>${escapeHtml(known?d?.name||'Unknown':'Unknown destination')}</h3><p>${r.distance} route units · ${r.discovered?'mapped':'partially known'}${r.blocked?' · BLOCKED':''}</p></div><div class="actions compact">${!r.blocked?modes.map(m=>`<button data-route="${r.id}" data-mode="${m.id}">${escapeHtml(m.name)} · ${m.cost} coin</button>`).join(''):'<span class="muted">Route unavailable</span>'}</div></article>`}).join('')||'<p class="muted">No regional route has been mapped from this settlement yet.</p>';
 $('destinationList').querySelectorAll('[data-route]').forEach(b=>b.onclick=()=>beginRegionalJourney(b.dataset.route,b.dataset.mode));
 $('journeySummary').innerHTML=`<p>Weather: <strong>${escapeHtml(world.environment.weather)}</strong></p><p>Energy ${ch.needs.energy} · Hunger ${ch.needs.hunger} · Coins ${ch.currency}</p><p>${routes.filter(r=>r.danger>=55).length} high-risk route${routes.filter(r=>r.danger>=55).length===1?'':'s'} connect here.</p><div class="actions"><button id="exploreRegionBtn">Scout Nearby Routes</button><button id="makeCampBtn">Make Camp · 2 coins</button><label class="inline-check"><input id="showUnknownMapToggle" type="checkbox" ${world.mapState.showUnknown!==false?'checked':''}> Show unknown nodes</label></div>`;
 $('exploreRegionBtn').onclick=exploreRegion;$('makeCampBtn').onclick=makeCamp;$('showUnknownMapToggle').onchange=e=>{world.mapState.showUnknown=e.target.checked;renderTravel();};
 const logs=world.explorationState.journeys.filter(j=>j.characterId===ch.id).slice().reverse().slice(0,12);$('travelLog').innerHTML=logs.length?logs.map(j=>`<div class="event"><strong>${escapeHtml(world.settlements.find(s=>s.id===j.to)?.name||'Journey')}</strong><div>${j.hours} hours by ${escapeHtml(travelModes.find(m=>m.id===j.mode)?.name||j.mode)}${j.encounter?` · ${escapeHtml(j.encounter)}`:''}</div><small>${escapeHtml(j.worldDate)}</small></div>`).join(''):'<p class="muted">No regional journeys yet.</p>';
}

function ensureDialogueState(){if(!world)return;world.dialogueState=world.dialogueState||{memories:[],secrets:[],promises:[],lies:[],conversations:[],sessions:[],activeSessionId:null,lastDailyTick:null};world.dialogueState.sessions=Array.isArray(world.dialogueState.sessions)?world.dialogueState.sessions:[];world.npcs.forEach(n=>{n.memory=n.memory||{events:[],people:{},facts:[],opinions:{},promises:[],secrets:[],liesSuspected:[]};});}
function npcRemember(npc,kind,detail,{aboutId=null,importance=1,source='witnessed',privateInfo=false}={}){
 ensureDialogueState();npc.memory=npc.memory||{events:[],people:{},facts:[],opinions:{},promises:[],secrets:[],liesSuspected:[]};
 const m={id:uid('nmem'),npcId:npc.id,kind,detail,aboutId,importance,source,privateInfo,worldDate:worldDate(),forgotten:false};npc.memory.events.push(m);world.dialogueState.memories.push(m);if(npc.memory.events.length>100)npc.memory.events.shift();return m;
}
function npcKnowledgeContext(npc,ch){
 ensureDialogueState();const rel=relationshipWith(ch,npc),mem=npc.memory.events.filter(m=>!m.forgotten).slice(-18);
 return {identity:{name:npc.name,role:npc.role||npc.occupation,personality:npc.personality,goal:npc.goal},relationship:{trust:rel.trust,respect:rel.respect,affection:rel.affection,tension:rel.tension,stage:rel.stage},memories:mem.map(m=>({kind:m.kind,detail:m.detail,source:m.source,worldDate:m.worldDate})),facts:(npc.memory.facts||[]).slice(-12),promises:(npc.memory.promises||[]).slice(-8),secrets:(npc.memory.secrets||[]).slice(-8),suspectedLies:(npc.memory.liesSuspected||[]).slice(-8)};
}
function recordConversationMemory(ch,npc,text,outcome){
 const r=relationshipWith(ch,npc),low=String(text).toLowerCase();let kind='conversation',importance=1;
 if(/\bpromise|swear|i will|i'll\b/.test(low)){kind='promise';importance=3;const p={id:uid('promise'),fromId:ch.id,toId:npc.id,text,worldDate:worldDate(),status:'open'};world.dialogueState.promises.push(p);npc.memory.promises.push(p);}
 if(/\bsecret|don't tell|do not tell|between us\b/.test(low)){kind='secret';importance=3;const sec={id:uid('secret'),ownerId:ch.id,knowerId:npc.id,text,worldDate:worldDate()};world.dialogueState.secrets.push(sec);npc.memory.secrets.push(sec);}
 if(/\blie|not true|i didn't|i did not\b/.test(low)&&r.trust<45){kind='possible lie';importance=2;npc.memory.liesSuspected.push({text,worldDate:worldDate()});}
 npcRemember(npc,kind,`${ch.name} said: “${text.slice(0,220)}”`,{aboutId:ch.id,importance,source:'told directly',privateInfo:kind==='secret'});
 npc.memory.people[ch.id]=npc.memory.people[ch.id]||{impression:'acquaintance',lastSeen:null};npc.memory.people[ch.id].lastSeen=worldDate();npc.memory.people[ch.id].impression=r.tension>55?'strained':r.trust>65?'trusted':r.affection>55?'liked':'known';
 world.dialogueState.conversations.push({id:uid('conv'),characterId:ch.id,npcId:npc.id,text:text.slice(0,500),outcome,worldDate:worldDate()});
}
function witnessPlayerAction(ch,town,place,rawAction,outcome,targetNpc){
 ensureDialogueState();const witnesses=presentNpcs(town,place.key).filter(n=>n.id!==targetNpc?.id);witnesses.forEach(n=>{if(Math.random()<.78)npcRemember(n,'witnessed action',`${n.name} saw ${ch.name} attempt: ${rawAction.slice(0,180)}. Result: ${outcome.label}.`,{aboutId:ch.id,importance:outcome.tier.includes('critical')?3:1,source:'witnessed'});});
}
function spreadNpcKnowledge(){
 if(!world)return;ensureDialogueState();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.dialogueState.lastDailyTick===stamp)return;world.dialogueState.lastDailyTick=stamp;
 world.settlements.forEach(town=>{const locals=(town.localNpcIds||[]).map(id=>world.npcs.find(n=>n.id===id)).filter(Boolean);if(locals.length<2)return;for(let i=0;i<Math.min(2,locals.length);i++){const a=locals[Math.floor(Math.random()*locals.length)],b=locals[Math.floor(Math.random()*locals.length)];if(!a||!b||a.id===b.id)continue;const share=(a.memory?.events||[]).filter(m=>!m.privateInfo&&!m.forgotten&&m.importance>=2).slice(-5);if(share.length&&Math.random()<.28){const m=share[Math.floor(Math.random()*share.length)];npcRemember(b,'heard from another person',m.detail,{aboutId:m.aboutId,importance:Math.max(1,m.importance-1),source:`heard from ${a.name}`});}}});
 world.npcs.forEach(n=>(n.memory?.events||[]).forEach(m=>{if(!m.forgotten&&m.importance<=1&&Math.random()<.015)m.forgotten=true;}));
}

function activeDialogueSession(){ensureDialogueState();return world.dialogueState.sessions.find(s=>s.id===world.dialogueState.activeSessionId&&s.status==='active')||null;}
function dialogueNpc(session){return world.npcs.find(n=>n.id===session?.npcId)||null;}
function dialogueCharacter(session){return world.characters.find(c=>c.id===session?.characterId)||null;}
function startDialogue(npcId){
 const ch=activeCharacter(),npc=world.npcs.find(n=>n.id===npcId&&n.alive!==false);if(!ch||!npc)return;ensureDialogueState();
 const existing=world.dialogueState.sessions.find(s=>s.status==='active'&&s.characterId===ch.id&&s.npcId===npc.id);
 if(existing){world.dialogueState.activeSessionId=existing.id;openTab('dialogueView');renderDialogue();return;}
 const r=relationshipWith(ch,npc),session={id:uid('dialogue'),characterId:ch.id,npcId:npc.id,status:'active',startedAt:worldDate(),startedHour:world.clock.hour,endedAt:null,turns:[],topics:[],tone:'neutral',emotionalState:{warmth:Math.round((r.trust+r.affection)/2),guardedness:Math.round((r.tension+(100-r.trust))/2),interest:Math.round((r.closeness+r.attraction)/2)},npcQuestionPending:null};
 session.turns.push({id:uid('turn'),speaker:'narrator',text:`You begin a conversation with ${npc.name}.`,worldDate:worldDate(),hour:world.clock.hour});
 world.dialogueState.sessions.push(session);world.dialogueState.activeSessionId=session.id;openTab('dialogueView');saveWorld();
}
function inferDialogueTopic(text){
 const low=String(text).toLowerCase();
 const map=[['work',/\bwork|job|shift|business|career|shop\b/],['family',/\bfamily|mother|father|parent|child|sister|brother\b/],['romance',/\blove|date|romance|relationship|partner|feelings\b/],['rumors',/\brumor|heard|news|missing|strange|lights|gossip\b/],['politics',/\bguard|government|law|faction|war|fire lord|king|police\b/],['spirits',/\bspirit|shrine|ghost|meditat|haunt\b/],['travel',/\btravel|road|route|ship|train|village|city\b/],['bending',/\bbend|bending|water|earth|fire|air|technique|training\b/],['promise',/\bpromise|swear|i will|i'll\b/],['secret',/\bsecret|don't tell|do not tell|between us\b/]];
 return map.find(([,rx])=>rx.test(low))?.[0]||'general';
}
function dialogueToneFromText(text){
 const low=String(text).toLowerCase();
 if(/\bthank|appreciate|glad|kind|sorry\b/.test(low))return 'warm';
 if(/\bidiot|stupid|hate|shut up|threat|or else\b/.test(low))return 'hostile';
 if(/\bplease|could you|would you|may i\b/.test(low))return 'polite';
 if(/\bsecret|quiet|whisper|between us\b/.test(low))return 'private';
 if(/\bwhy|how|what|where|who|when\b/.test(low))return 'curious';
 return 'neutral';
}
function updateDialogueEmotion(session,npc,ch,text){
 const r=relationshipWith(ch,npc),tone=dialogueToneFromText(text),e=session.emotionalState;
 if(tone==='warm'||tone==='polite'){e.warmth=clamp(e.warmth+3);e.guardedness=clamp(e.guardedness-2);}
 if(tone==='hostile'){e.warmth=clamp(e.warmth-8);e.guardedness=clamp(e.guardedness+10);r.tension=clamp(r.tension+5);r.trust=clamp(r.trust-3);}
 if(tone==='private'&&r.trust>45){e.interest=clamp(e.interest+4);}
 session.tone=tone;r.closeness=clamp(Math.round((r.trust+r.affection+(100-r.tension))/3));
}
function localNpcDialogue(session,npc,ch,text){
 const r=relationshipWith(ch,npc),topic=inferDialogueTopic(text),ctx=npcKnowledgeContext(npc,ch),e=session.emotionalState;
 const known=ctx.memories.filter(m=>String(m.detail).toLowerCase().includes(topic)||topic==='general').slice(-3);
 const name=npc.name,role=npc.role||npc.occupation||'resident';
 if(e.guardedness>72||r.tension>70)return `${name} studies you for a moment. “I don't think this is a conversation I want to have with you right now.”`;
 if(topic==='secret'&&r.trust<45)return `${name} lowers their voice, but doesn't answer the way you hoped. “You barely know me. Why would I promise to keep something like that?”`;
 if(topic==='rumors'){
   const rumor=(npc.knowledge?.rumors||[])[0],mem=known[0];
   if(mem)return `${name} thinks it over. “What I know is this: ${mem.detail.replace(/^.*?:\s*/,'').slice(0,240)}”`;
   if(rumor)return `${name} nods cautiously. “I've heard something about that, but I wouldn't call it proven.”`;
   return `${name} shakes their head. “No. At least, nothing I'd trust enough to repeat as fact.”`;
 }
 if(topic==='work')return `${name} glances toward the work around them. “Being a ${role} keeps me busy. Some days are better than others.”`;
 if(topic==='family'&&r.trust<35)return `${name}'s expression closes slightly. “I'd rather keep my family out of casual conversation.”`;
 if(topic==='spirits'&&!(npc.memory?.events||[]).some(m=>/spirit|shrine/i.test(m.detail)))return `${name} gives a small shrug. “I've heard stories, same as anyone. That doesn't mean I've seen anything myself.”`;
 if(topic==='bending')return `${name} answers from their own experience rather than pretending expertise. “I know what people around here say about bending, but I'm not going to claim I understand every technique.”`;
 if(dialogueToneFromText(text)==='hostile')return `${name}'s posture stiffens. “If that's how you want to speak to me, maybe we're done here.”`;
 if(r.trust>65)return `${name} answers with noticeably less caution. “All right. Since it's you, I'll tell you what I actually think.”`;
 if(r.affection>55)return `${name} smiles faintly. “You always manage to make these conversations interesting.”`;
 return `${name} considers your words before answering. “I can tell you what I know. I won't pretend to know more than that.”`;
}
async function connectedNpcDialogue(session,npc,ch,text){
 const endpoint=world.gmSettings?.endpoint||'/api/gm',timeoutMs=Math.max(5000,Math.min(60000,Number(world.gmSettings?.timeoutMs||30000)));
 const payload={version:2,requestType:'npc_dialogue_turn',context:{world:{era:world.era,historyMode:world.historyMode,date:worldDate(),hour:world.clock.hour,weather:world.environment.weather},location:{settlement:currentSettlement(ch)?.name,place:currentPlace(ch)?.name},character:{name:ch.name,nation:ch.nation,occupation:ch.occupation,bending:ch.bending},npc:npcKnowledgeContext(npc,ch),session:{tone:session.tone,emotionalState:session.emotionalState,recentTurns:session.turns.slice(-10).map(x=>({speaker:x.speaker,text:x.text})),topics:session.topics.slice(-10)},playerText:text,contentSettings:world.uiSettings,directives:['Speak only as the NPC, not as a narrator.','Do not reveal information outside the NPC supplied memory/knowledge or plausible local public knowledge.','Do not change simulation state, grant rewards, or decide action success.','You may refuse questions, ask a question back, change the subject, misunderstand, or admit ignorance.','Keep the reply concise and conversational.','Adult romance may be emotionally mature but never sexually explicit.']}};
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeoutMs);
 try{
   const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','X-PFN-Client':'5.3'},body:JSON.stringify(payload),signal:controller.signal});
   if(!res.ok)throw new Error(`Dialogue endpoint returned ${res.status}`);const data=await res.json();if(typeof data.dialogue!=='string')throw new Error('Dialogue endpoint returned no dialogue');return data.dialogue.slice(0,1800);
 }finally{clearTimeout(timer);}
}
function maybeNpcInitiatedQuestion(session,npc,ch){
 if(session.npcQuestionPending||session.turns.length<4||Math.random()>.18)return null;const r=relationshipWith(ch,npc),qs=[];
 if(r.trust>45)qs.push(`“What brought you to ${currentSettlement(ch)?.name||'this place'} in the first place?”`);
 if(r.affection>45)qs.push('“And how have you actually been doing lately?”');
 if(npc.goal)qs.push(`“I've been thinking about ${String(npc.goal).toLowerCase()}. What would you do in my position?”`);
 if(r.tension>25)qs.push('“Are we going to talk about what happened between us, or keep pretending it did not happen?”');
 if(!qs.length)return null;const q=qs[Math.floor(Math.random()*qs.length)];session.npcQuestionPending=q;return q;
}
async function sendDialogueTurn(){
 const session=activeDialogueSession(),ch=dialogueCharacter(session),npc=dialogueNpc(session),input=$('dialogueInput');if(!session||!ch||!npc||!input)return;const text=input.value.trim();if(!text)return;
 input.value='';session.npcQuestionPending=null;session.turns.push({id:uid('turn'),speaker:'player',text,worldDate:worldDate(),hour:world.clock.hour});const topic=inferDialogueTopic(text);session.topics.push(topic);updateDialogueEmotion(session,npc,ch,text);recordConversationMemory(ch,npc,text,'conversation');
 renderDialogue();
 let reply='',provider='local';
 if(world.gmSettings?.mode==='connected'){try{reply=await connectedNpcDialogue(session,npc,ch,text);provider='connected';}catch(err){world.aiConnection={...(world.aiConnection||{}),status:'offline',lastError:err.message,lastChecked:new Date().toISOString()};}}
 if(!reply)reply=localNpcDialogue(session,npc,ch,text);
 session.turns.push({id:uid('turn'),speaker:'npc',text:reply,provider,worldDate:worldDate(),hour:world.clock.hour});npcRemember(npc,'conversation exchange',`${npc.name} spoke with ${ch.name} about ${topic}.`,{aboutId:ch.id,importance:topic==='secret'||topic==='promise'?2:1,source:'experienced directly'});
 const q=maybeNpcInitiatedQuestion(session,npc,ch);if(q)session.turns.push({id:uid('turn'),speaker:'npc',text:q,provider:'simulation',worldDate:worldDate(),hour:world.clock.hour});
 const r=relationshipWith(ch,npc);if(session.turns.length%4===0){r.trust=clamp(r.trust+(session.tone==='hostile'?-1:1));r.closeness=clamp(r.closeness+(session.tone==='warm'?2:0));}
 advanceHours(1);saveWorld();renderDialogue();
}
function endDialogue(){
 const session=activeDialogueSession();if(!session)return;session.status='ended';session.endedAt=worldDate();session.endedHour=world.clock.hour;world.dialogueState.activeSessionId=null;const npc=dialogueNpc(session),ch=dialogueCharacter(session);if(npc&&ch){const r=relationshipWith(ch,npc);rememberRelationship(r,`Conversation ended after ${session.turns.filter(x=>x.speaker!=='narrator').length} exchanges.`,'small');}saveWorld();renderDialogue();
}
function dialogueQuickTopic(topic){
 const el=$('dialogueInput');if(!el)return;const prompts={work:'How has work been going lately?',family:'How is your family doing?',rumors:'Have you heard anything unusual around here?',spirits:'Have you ever seen anything you thought was a spirit?',travel:'What are the roads like outside town?',bending:'What do people around here think about bending?',relationship:'Can we talk about us for a minute?'};el.value=prompts[topic]||topic;el.focus();
}
function renderDialogue(){
 if(!$('dialogueView')||!world)return;const ch=activeCharacter();$('noDialogueLife').classList.toggle('hidden',!!ch);$('dialogueGame').classList.toggle('hidden',!ch);if(!ch)return;ensureDialogueState();const session=activeDialogueSession();
 $('dialogueSession').classList.toggle('hidden',!session);$('dialogueStart').classList.toggle('hidden',!!session);
 if(!session){
   const town=currentSettlement(ch),place=currentPlace(ch),near=presentNpcs(town,place?.key||ch.currentLocationKey).filter(n=>n.alive!==false);
   $('dialoguePeople').innerHTML=near.length?near.map(n=>{const r=relationshipWith(ch,n);return `<article class="dialogue-person"><div><strong>${escapeHtml(n.name)}</strong><small>${escapeHtml(n.role||n.occupation||'Resident')} · ${escapeHtml(r.stage||'acquaintance')}</small></div><button data-talk-npc="${n.id}">Talk</button></article>`}).join(''):'<p class="muted">Nobody available here seems free to talk right now.</p>';
   $('dialoguePeople').querySelectorAll('[data-talk-npc]').forEach(b=>b.onclick=()=>startDialogue(b.dataset.talkNpc));
 }else{
   const npc=dialogueNpc(session),rel=relationshipWith(ch,npc);$('dialogueNpcHeader').innerHTML=`<div><p class="eyebrow">${escapeHtml(npc.role||npc.occupation||'RESIDENT')}</p><h2>${escapeHtml(npc.name)}</h2><small>Trust ${rel.trust} · Affection ${rel.affection} · Tension ${rel.tension} · Tone ${escapeHtml(session.tone)}</small></div>`;
   $('dialogueTranscript').innerHTML=session.turns.map(turn=>`<div class="dialogue-bubble ${turn.speaker}"><strong>${turn.speaker==='player'?escapeHtml(ch.name):turn.speaker==='npc'?escapeHtml(npc.name):'Scene'}</strong><p>${escapeHtml(turn.text)}</p>${turn.provider?`<small>${escapeHtml(turn.provider)}</small>`:''}</div>`).join('');
   $('dialogueTranscript').scrollTop=$('dialogueTranscript').scrollHeight;
   const mem=npcKnowledgeContext(npc,ch);$('dialogueContext').innerHTML=`<p><strong>Topics:</strong> ${escapeHtml(session.topics.slice(-6).join(', ')||'none yet')}</p><p><strong>NPC memory:</strong> ${mem.memories.length} relevant retained memories</p><p><strong>Emotional read:</strong> warmth ${session.emotionalState.warmth} · guardedness ${session.emotionalState.guardedness} · interest ${session.emotionalState.interest}</p>${session.npcQuestionPending?`<p><strong>${escapeHtml(npc.name)} is waiting on your answer.</strong></p>`:''}`;
 }
 const past=world.dialogueState.sessions.filter(s=>s.characterId===ch.id&&s.status==='ended').slice().reverse().slice(0,10);$('dialogueHistory').innerHTML=past.length?past.map(s=>`<div class="event"><strong>${escapeHtml(personById(s.npcId)?.name||'Conversation')}</strong><div>${s.turns.filter(x=>x.speaker!=='narrator').length} exchanges · topics: ${escapeHtml(s.topics.slice(-4).join(', ')||'general')}</div><small>${escapeHtml(s.endedAt||s.startedAt)}</small></div>`).join(''):'<p class="muted">No completed conversations yet.</p>';
}

function renderNpcMemory(){
 if(!$('npcMemoryView')||!world)return;const ch=activeCharacter();$('noNpcMemoryLife').classList.toggle('hidden',!!ch);$('npcMemoryGame').classList.toggle('hidden',!ch);if(!ch)return;ensureDialogueState();
 const known=relationshipPeople(ch).map(x=>x.n).filter(Boolean);$('npcMemoryCards').innerHTML=known.length?known.map(n=>{const ctx=npcKnowledgeContext(n,ch),mem=ctx.memories.slice().reverse().slice(0,8);return `<article class="memory-card"><h3>${escapeHtml(n.name)}</h3><p class="muted">${escapeHtml(n.role||n.occupation||'Resident')}</p><small>${mem.length} recent remembered items · impression: ${escapeHtml(n.memory.people[ch.id]?.impression||'known')}</small><details><summary>What ${escapeHtml(n.name)} remembers</summary>${mem.map(m=>`<p><strong>${escapeHtml(m.kind)}</strong> — ${escapeHtml(m.detail)} <small>${escapeHtml(m.source)}</small></p>`).join('')||'<p class="muted">Nothing significant yet.</p>'}</details></article>`}).join(''):'<p class="muted">You do not know anyone well enough to inspect relationship memory yet.</p>';
 const conv=world.dialogueState.conversations.filter(c=>c.characterId===ch.id).slice().reverse().slice(0,15);$('conversationMemoryLog').innerHTML=conv.length?conv.map(c=>`<div class="event"><strong>${escapeHtml(personById(c.npcId)?.name||'NPC')}</strong><div>${escapeHtml(c.text)}</div><small>${escapeHtml(c.worldDate)}</small></div>`).join(''):'<p class="muted">No remembered conversations yet.</p>';
}


const visualPools={
 hair:['straight','wavy','curly','coiled','shaved sides','long tied-back','short practical','braided'],
 build:['slender','lean','average','broad','stocky','athletic','heavyset'],
 face:['oval','round','angular','square','long','soft-featured'],
 demeanor:['reserved','warm','stern','playful','weathered','confident','scholarly','alert']
};
function ensurePortraitState(){if(!world)return;world.portraitState=world.portraitState||{profiles:{},generations:[],provider:'prompt-export'};}
function seededPick(arr,key){let n=0;for(const c of String(key))n=(n*31+c.charCodeAt(0))>>>0;return arr[n%arr.length];}
function nationPalette(n){const x=String(n||'').toLowerCase();if(x.includes('fire'))return 'deep reds, charcoal, warm gold accents';if(x.includes('water'))return 'layered blues, white, fur or practical cold-weather textiles';if(x.includes('air'))return 'saffron, warm yellow, orange, light layered fabrics';if(x.includes('earth'))return 'greens, ochre, brown, sturdy natural fabrics';if(x.includes('republic')||x.includes('united'))return 'era-appropriate cosmopolitan clothing with mixed regional influences';return 'locally appropriate practical clothing';}
function visualProfile(person){
 ensurePortraitState();if(world.portraitState.profiles[person.id])return world.portraitState.profiles[person.id];
 const key=person.id+person.name,existing=person.visualIdentity||{},p={id:person.id,name:person.name,age:Number(person.age||existing.currentAge||18),nation:person.nation||existing.nation||'Unknown',region:person.region||person.homeSettlementId||'Unknown',hair:existing.hair||seededPick(visualPools.hair,key+'h'),build:existing.build||seededPick(visualPools.build,key+'b'),face:existing.face||seededPick(visualPools.face,key+'f'),demeanor:seededPick(visualPools.demeanor,key+'d'),clothing:nationPalette(person.nation||existing.nation),occupation:person.role||person.occupation||'resident',bending:person.bending?.element||person.bending||'none',marks:existing.marks||[],accessories:existing.accessories||[],injuries:person.health?.condition&&person.health.condition!=='Healthy'?[person.health.condition]:[],wealth:person.wealth||'modest',artNotes:existing.artNotes||'',locked:true};world.portraitState.profiles[person.id]=p;return p;
}
function portraitPrompt(person){
 const p=visualProfile(person),era=world.era||'Avatar-inspired historical era';
 return `Consistent character portrait for an original person living in an Avatar-inspired four-nations world. ${p.name}, age ${p.age}, from ${p.nation}, region ${p.region}. ${p.build} build, ${p.face} face, ${p.hair} hair, ${p.demeanor} demeanor. Occupation: ${p.occupation}. Clothing: ${p.clothing}, appropriate to ${era} and their ${p.wealth} means. Bending identity: ${p.bending}. Distinguishing marks/accessories: ${[...p.marks,...p.accessories].join(', ')||'none established'}. Current visible injury/scar notes: ${p.injuries.join(', ')||'none'}. Additional locked identity notes: ${p.artNotes||'none'}. Waist-up illustrated RPG portrait, expressive but grounded, coherent anatomy, culturally consistent clothing, no text, neutral contextual background. Preserve the same facial structure, hair identity, build, skin tone, marks, and established accessories in every future depiction of this character.`;
}
function updatePortraitField(id,field,value){ensurePortraitState();const person=personById(id);if(!person)return;const p=visualProfile(person);p[field]=value.trim();world.portraitState.profiles[id]=p;saveWorld();}
function copyPortraitPrompt(id){const p=personById(id);if(!p)return;const text=portraitPrompt(p);if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(()=>alert('Portrait prompt copied.')).catch(()=>prompt('Copy portrait prompt:',text));else prompt('Copy portrait prompt:',text);}

function ensureImageGenerationState(){if(!world)return;world.imageGeneration=world.imageGeneration||{endpoint:'/api/image',status:'unknown',lastError:null,lastGeneratedAt:null,imageModel:null};}
async function requestGeneratedImage(payload){
 ensureImageGenerationState();const endpoint=world.imageGeneration.endpoint||'/api/image';const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),90000);
 try{
   const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','X-PFN-Client':'5.6'},body:JSON.stringify(payload),signal:controller.signal});
   const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data?.error||`Image endpoint returned ${res.status}`);if(!data.assetUrl)throw new Error('Image endpoint returned no asset URL');
   world.imageGeneration.status='connected';world.imageGeneration.lastError=null;world.imageGeneration.lastGeneratedAt=new Date().toISOString();world.imageGeneration.imageModel=data.model||world.imageGeneration.imageModel||null;return data;
 }catch(err){world.imageGeneration.status='error';world.imageGeneration.lastError=err?.message||String(err);throw err;}finally{clearTimeout(timer);}
}
async function generatePortraitAsset(id){
 const person=personById(id);if(!person)return;const p=visualProfile(person),btn=document.querySelector(`[data-generate-portrait="${CSS.escape(id)}"]`);if(btn){btn.disabled=true;btn.textContent='Generating…';}
 try{
   const data=await requestGeneratedImage({kind:'portrait',entityId:id,prompt:portraitPrompt(person),size:'1024x1536',quality:'medium',referenceAssetUrls:p.artAsset?[p.artAsset]:[]});
   p.artAsset=data.assetUrl;p.generatedAt=worldDate();p.imageModel=data.model||null;world.portraitState.generations.push({id:uid('pgen'),personId:id,assetUrl:data.assetUrl,worldDate:worldDate(),model:data.model||null});saveWorld();renderPortraitStudio();renderActivePortraitChip();
 }catch(err){alert(`Portrait generation failed: ${err.message}`);if(btn){btn.disabled=false;btn.textContent='Generate Portrait';}}
}
function visualReferenceAssets(moment){
 return (moment.participantIds||[]).map(id=>world.portraitState?.profiles?.[id]?.artAsset).filter(Boolean).slice(0,4);
}
async function generateSceneAsset(id){
 const m=world.visualStoryState.moments.find(x=>x.id===id);if(!m)return;const btn=document.querySelector(`[data-generate-scene="${CSS.escape(id)}"]`);if(btn){btn.disabled=true;btn.textContent='Generating…';}
 try{
   const refs=visualReferenceAssets(m),data=await requestGeneratedImage({kind:'scene',entityId:m.id,prompt:scenePrompt(m),size:'1536x1024',quality:'medium',referenceAssetUrls:refs});
   m.artAsset=data.assetUrl;m.status='generated';m.generatedAt=worldDate();m.imageModel=data.model||null;m.referenceAssetUrls=refs;saveWorld();renderVisualStories();
 }catch(err){alert(`Scene generation failed: ${err.message}`);if(btn){btn.disabled=false;btn.textContent='Generate Scene Art';}}
}
async function checkImageConnection(){
 ensureImageGenerationState();try{const res=await fetch('/api/health',{headers:{'X-PFN-Client':'5.6'}}),data=await res.json();world.imageGeneration.status=data.imageConfigured?'connected':'server-only';world.imageGeneration.imageModel=data.imageModel||null;world.imageGeneration.lastError=data.imageConfigured?null:'Server is online, but image generation is not configured.';}catch(err){world.imageGeneration.status='offline';world.imageGeneration.lastError=err.message;}saveWorld();renderSettings();
}
function renderImageConnectionStatus(){
 if(!$('imageConnectionStatus')||!world)return;ensureImageGenerationState();const g=world.imageGeneration,labels={connected:'Image generation ready','server-only':'Server online · image model/key not configured',offline:'Image server unavailable',error:'Last image request failed',unknown:'Not checked'};$('imageConnectionStatus').textContent=labels[g.status]||g.status;$('imageConnectionDetails').textContent=[g.imageModel,g.lastGeneratedAt?`last generated ${new Date(g.lastGeneratedAt).toLocaleString()}`:null,g.lastError].filter(Boolean).join(' · ');
}

function renderPortraitStudio(){
 if(!$('portraitView')||!world)return;const ch=activeCharacter();$('noPortraitLife').classList.toggle('hidden',!!ch);$('portraitGame').classList.toggle('hidden',!ch);if(!ch)return;ensurePortraitState();
 const people=[ch,...relationshipPeople(ch).map(x=>x.n).filter(Boolean)].filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i).slice(0,30);
 $('portraitCards').innerHTML=people.map(person=>{const p=visualProfile(person);return `<article class="portrait-card"><div class="portrait-placeholder">${p.artAsset?`<img src="${escapeHtml(p.artAsset)}" alt="${escapeHtml(person.name)} portrait">`:`<span>${escapeHtml(person.name.slice(0,1).toUpperCase())}</span>`}</div><div><p class="eyebrow">${person.id===ch.id?'PLAYER':'KNOWN PERSON'}</p><h3>${escapeHtml(person.name)}</h3><p>${escapeHtml(p.nation)} · age ${p.age} · ${escapeHtml(p.occupation)}</p><small>${escapeHtml(p.build)} · ${escapeHtml(p.face)} face · ${escapeHtml(p.hair)} hair · ${escapeHtml(p.demeanor)}</small><details><summary>Locked visual identity</summary><label>Hair<input data-portrait-id="${person.id}" data-portrait-field="hair" value="${escapeHtml(p.hair)}"></label><label>Build<input data-portrait-id="${person.id}" data-portrait-field="build" value="${escapeHtml(p.build)}"></label><label>Face<input data-portrait-id="${person.id}" data-portrait-field="face" value="${escapeHtml(p.face)}"></label><label>Art notes<textarea data-portrait-id="${person.id}" data-portrait-field="artNotes">${escapeHtml(p.artNotes)}</textarea></label></details><div class="actions compact"><button data-generate-portrait="${person.id}">${p.artAsset?'Regenerate Portrait':'Generate Portrait'}</button><button data-copy-portrait="${person.id}">Copy Generation Prompt</button></div></div></article>`}).join('');
 $('portraitCards').querySelectorAll('[data-portrait-field]').forEach(el=>el.onchange=()=>updatePortraitField(el.dataset.portraitId,el.dataset.portraitField,el.value));
 $('portraitCards').querySelectorAll('[data-copy-portrait]').forEach(b=>b.onclick=()=>copyPortraitPrompt(b.dataset.copyPortrait));$('portraitCards').querySelectorAll('[data-generate-portrait]').forEach(b=>b.onclick=()=>generatePortraitAsset(b.dataset.generatePortrait));
}


function ensureVisualStoryState(){if(!world)return;world.visualStoryState=world.visualStoryState||{moments:[],provider:'prompt-export'};}
function visualMomentType(title,detail){
 const x=(title+' '+detail).toLowerCase();
 if(/wedding|married|partnership|romance|date/.test(x))return 'relationship';
 if(/fight|battle|duel|attack|combat|injur|burn|scar/.test(x))return 'combat';
 if(/spirit|shrine|spiritual/.test(x))return 'spirit';
 if(/festival|celebrat|ceremony/.test(x))return 'festival';
 if(/born|child|family|generation|death|died|funeral/.test(x))return 'family';
 if(/travel|journey|discover|explor|route/.test(x))return 'exploration';
 if(/histor|canon|avatar|famous/.test(x))return 'history';
 return 'life';
}
function visualMomentImportance(title,detail){const x=(title+' '+detail).toLowerCase();if(/death|wedding|born|critical|battle|avatar|spirit|historic/.test(x))return 3;if(/relationship|journey|discover|injur|festival/.test(x))return 2;return 1;}
function captureVisualMoment(ch,title,detail,participantIds=[]){
 if(!world||!ch)return;ensureVisualStoryState();const importance=visualMomentImportance(title,detail);if(importance<2)return null;
 const dupe=world.visualStoryState.moments.find(m=>m.worldDate===worldDate()&&m.title===title&&m.characterId===ch.id);if(dupe)return dupe;
 const ids=[ch.id,...participantIds].filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i);const m={id:uid('visual'),characterId:ch.id,title,detail,type:visualMomentType(title,detail),importance,worldDate:worldDate(),settlementId:ch.currentSettlementId,participantIds:ids,status:'prompt-ready',artAsset:null};world.visualStoryState.moments.push(m);return m;
}
function scenePrompt(moment){
 ensurePortraitState();const people=(moment.participantIds||[]).map(personById).filter(Boolean);const identities=people.map(p=>portraitPrompt(p).replace('Waist-up illustrated RPG portrait','Character identity reference')).join('\n');
 const town=world.settlements.find(s=>s.id===moment.settlementId);return `Illustrate a memorable story scene from an Avatar-inspired four-nations life-simulation RPG. Era: ${world.era}. Location: ${town?.name||'the current region'}. Scene category: ${moment.type}. Event: ${moment.title}. Story context: ${moment.detail}. ${identities} Show a cinematic environmental composition rather than a lineup. Preserve all established character identities exactly. Clothing, architecture, technology, bending practice, and environment must fit the selected era and region. If combat or injury is present, portray consequences dramatically but without gratuitous gore. If adult romance is present, keep the scene emotionally mature and non-explicit. No text, captions, logos, or UI.`;
}
function copyScenePrompt(id){const m=world.visualStoryState.moments.find(x=>x.id===id);if(!m)return;const text=scenePrompt(m);if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(()=>alert('Scene art prompt copied.')).catch(()=>prompt('Copy scene prompt:',text));else prompt('Copy scene prompt:',text);}
function createMomentFromRecent(){
 const ch=activeCharacter();if(!ch)return;const title=prompt('Title this visual memory:','A moment worth remembering');if(!title)return;const detail=prompt('What happened in the scene?','');if(!detail)return;ensureVisualStoryState();const m={id:uid('visual'),characterId:ch.id,title,detail,type:visualMomentType(title,detail),importance:2,worldDate:worldDate(),settlementId:ch.currentSettlementId,participantIds:[ch.id],status:'prompt-ready',artAsset:null};world.visualStoryState.moments.push(m);saveWorld();
}
function renderVisualStories(){
 if(!$('visualStoriesView')||!world)return;const ch=activeCharacter();$('noVisualStoriesLife').classList.toggle('hidden',!!ch);$('visualStoriesGame').classList.toggle('hidden',!ch);if(!ch)return;ensureVisualStoryState();
 const rows=world.visualStoryState.moments.filter(m=>m.characterId===ch.id).slice().reverse();
 $('visualMomentSummary').innerHTML=`<span>Illustratable memories <b>${rows.length}</b></span><span>Major moments <b>${rows.filter(x=>x.importance>=3).length}</b></span>`;
 $('visualMomentCards').innerHTML=rows.length?rows.map(m=>`<article class="visual-moment-card"><div class="visual-moment-placeholder">${m.artAsset?`<img src="${escapeHtml(m.artAsset)}" alt="${escapeHtml(m.title)}">`:`<span>${escapeHtml(({combat:'⚔',relationship:'♥',spirit:'◌',festival:'✦',family:'⌂',exploration:'⌖',history:'◈',life:'•'})[m.type]||'•')}</span>`}</div><div><p class="eyebrow">${escapeHtml(m.type.toUpperCase())} · IMPORTANCE ${m.importance}</p><h3>${escapeHtml(m.title)}</h3><p>${escapeHtml(m.detail)}</p><small>${escapeHtml(m.worldDate)} · ${escapeHtml(world.settlements.find(s=>s.id===m.settlementId)?.name||'Unknown location')}</small><div class="actions compact"><button data-generate-scene="${m.id}">${m.artAsset?'Regenerate Scene Art':'Generate Scene Art'}</button><button data-scene-prompt="${m.id}">Copy Scene Art Prompt</button></div></div></article>`).join(''):'<p class="muted">No major visual memories have been captured yet. Important events will begin appearing here automatically.</p>';
 $('visualMomentCards').querySelectorAll('[data-scene-prompt]').forEach(b=>b.onclick=()=>copyScenePrompt(b.dataset.scenePrompt));$('visualMomentCards').querySelectorAll('[data-generate-scene]').forEach(b=>b.onclick=()=>generateSceneAsset(b.dataset.generateScene));$('createVisualMomentBtn')?.addEventListener('click',createMomentFromRecent);
}


function ensureLongTermState(){
 if(!world)return;world.longTermState=world.longTermState||{lastYearTick:null,decadeEvents:[],settlementHistory:[],leadershipHistory:[]};
 world.longTermState.decadeEvents=Array.isArray(world.longTermState.decadeEvents)?world.longTermState.decadeEvents:[];
 world.longTermState.settlementHistory=Array.isArray(world.longTermState.settlementHistory)?world.longTermState.settlementHistory:[];
 world.longTermState.leadershipHistory=Array.isArray(world.longTermState.leadershipHistory)?world.longTermState.leadershipHistory:[];
}
function simulateSettlementYear(st){
 ensureEconomyState();const e=settlementEconomy(st.id),res=residentsOf(st.id);
 const births=res.filter(n=>n.age>=20&&n.age<=45&&n.partnerId).length;
 const workforce=res.filter(n=>n.age>=18&&n.age<70).length;
 const drift=Math.round((workforce-4)/8)+Math.floor(Math.random()*5)-2;
 e.prosperity=Math.max(5,Math.min(100,e.prosperity+drift));
 if(e.damage>0){const repair=Math.max(1,Math.round(e.infrastructure/25));e.damage=Math.max(0,e.damage-repair);e.housing=Math.min(100,e.housing+Math.ceil(repair/2));}
 if(e.prosperity>70&&e.damage<10&&Math.random()<.35)e.infrastructure=Math.min(100,e.infrastructure+2);
 if(e.prosperity<30&&Math.random()<.28)e.housing=Math.max(5,e.housing-2);
 const record={id:uid('sth'),worldDate:worldDate(),year:world.clock.year,settlementId:st.id,population:res.length,prosperity:e.prosperity,housing:e.housing,infrastructure:e.infrastructure,damage:e.damage,birthPressure:births};
 world.longTermState.settlementHistory.push(record);
}
function simulateNpcCareerYear(n){
 if(!n.alive)return;ensureNpcLife(n);
 if(n.age>=18&&n.age<70){
   n.careerXp=(n.careerXp||0)+12+Math.floor(Math.random()*16);
   if(n.careerXp>=(n.careerLevel+1)*90&&n.careerLevel<5){n.careerLevel++;npcLifeLog(n,'Career advancement',`${n.name} advanced professionally as a ${n.occupation||n.role}.`);}
   if(Math.random()<.04&&n.careerLevel>=2){const old=n.occupation||n.role,newRole=townNpcRoles[Math.floor(Math.random()*townNpcRoles.length)];n.occupation=newRole;n.role=newRole;npcLifeLog(n,'Changed careers',`${n.name} left ${old} work and began working as a ${newRole}.`);}
 }
}
function simulateBusinessYear(){
 ensureEconomyState();world.economyState.businesses.forEach(b=>{
   if(!b.active)return;const e=settlementEconomy(b.settlementId),chance=(e.prosperity+b.quality+(b.cash>0?15:-10))/180;
   if(Math.random()<chance){b.quality=Math.min(100,b.quality+2);b.cash+=8+Math.floor(Math.random()*16);}
   else if(Math.random()<.12){b.cash-=8;}
   if(b.cash<-20){b.active=false;b.closedAt=worldDate();world.longTermState.decadeEvents.push({id:uid('lte'),year:world.clock.year,worldDate:worldDate(),detail:`${b.name} closed after sustained financial trouble.`});}
 });
}
function simulateFactionLeadership(){
 ensureFactionState();world.factionState.factions.forEach(f=>{
   if(Math.random()<.08){const candidates=residentsOf(f.settlementId).filter(n=>n.age>=25&&n.alive);if(!candidates.length)return;const leader=candidates[Math.floor(Math.random()*candidates.length)];const old=f.leaderId||null;f.leaderId=leader.id;world.longTermState.leadershipHistory.push({id:uid('lead'),factionId:f.id,oldLeaderId:old,newLeaderId:leader.id,worldDate:worldDate(),year:world.clock.year});f.history.push({worldDate:worldDate(),detail:`Leadership shifted to ${leader.name}.`});}
   f.stability=Math.max(0,Math.min(100,f.stability+(Math.random()<.5?1:-1)));
 });
}
function simulateMigrationYear(){
 ensureNpcSimulation();world.npcs.filter(n=>n.alive!==false&&n.age>=18).forEach(n=>{
   if(Math.random()<.025){const current=world.settlements.find(s=>s.id===n.settlementId),choices=world.settlements.filter(s=>s.id!==n.settlementId);if(!choices.length)return;choices.sort((a,b)=>(settlementEconomy(b.id).prosperity||0)-(settlementEconomy(a.id).prosperity||0));const dest=choices[0];if(current&&settlementEconomy(dest.id).prosperity>settlementEconomy(current.id).prosperity+8){n.settlementId=dest.id;n.lifeStatus='migrant';npcLifeLog(n,'Migrated for opportunity',`${n.name} moved from ${current.name} to ${dest.name} seeking a better life.`);}}
 });
}
function simulateDecadePulse(){
 if(world.clock.year%10!==0)return;const thriving=world.settlements.slice().sort((a,b)=>settlementEconomy(b.id).prosperity-settlementEconomy(a.id).prosperity)[0],struggling=world.settlements.slice().sort((a,b)=>settlementEconomy(a.id).prosperity-settlementEconomy(b.id).prosperity)[0];
 world.longTermState.decadeEvents.push({id:uid('lte'),year:world.clock.year,worldDate:worldDate(),detail:`At the decade mark, ${thriving?.name||'one settlement'} is among the most prosperous places in the world, while ${struggling?.name||'another'} is struggling by comparison.`});
 if(world.longTermState.decadeEvents.length>120)world.longTermState.decadeEvents.shift();
}
function simulateLongTermYear(){
 if(!world)return;ensureLongTermState();if(world.longTermState.lastYearTick===world.clock.year)return;world.longTermState.lastYearTick=world.clock.year;
 world.settlements.forEach(simulateSettlementYear);world.npcs.forEach(simulateNpcCareerYear);simulateBusinessYear();simulateFactionLeadership();simulateMigrationYear();simulateDecadePulse();
}
function renderLongTermWorld(){
 if(!$('longTermView')||!world)return;ensureLongTermState();const ch=activeCharacter();$('noLongTermLife').classList.toggle('hidden',!!ch);$('longTermGame').classList.toggle('hidden',!ch);if(!ch)return;
 const latest={};[...world.longTermState.settlementHistory].reverse().forEach(r=>{if(!latest[r.settlementId])latest[r.settlementId]=r;});
 $('longTermSummary').innerHTML=`<span>Year <b>${world.clock.year}</b></span><span>Tracked settlements <b>${Object.keys(latest).length}</b></span><span>Leadership changes <b>${world.longTermState.leadershipHistory.length}</b></span><span>Decade events <b>${world.longTermState.decadeEvents.length}</b></span>`;
 $('longTermSettlements').innerHTML=world.settlements.map(st=>{const r=latest[st.id],e=settlementEconomy(st.id);return `<article class="longterm-card"><h3>${escapeHtml(st.name)}</h3><p>Population ${r?.population??residentsOf(st.id).length} · Prosperity ${e.prosperity} · Housing ${e.housing} · Infrastructure ${e.infrastructure}</p><small>Damage ${e.damage} · Technology ${e.tech}</small></article>`}).join('');
 const leaders=[...world.longTermState.leadershipHistory].reverse().slice(0,12);$('leadershipHistory').innerHTML=leaders.length?leaders.map(x=>{const f=world.factionState.factions.find(y=>y.id===x.factionId),n=personById(x.newLeaderId);return `<div class="event"><strong>${escapeHtml(f?.name||'Faction')}</strong><div>${escapeHtml(n?.name||'Unknown')} became leader.</div><small>${escapeHtml(x.worldDate)}</small></div>`}).join(''):'<p class="muted">No major leadership turnover yet.</p>';
 const decade=[...world.longTermState.decadeEvents].reverse().slice(0,15);$('decadeHistory').innerHTML=decade.length?decade.map(x=>`<div class="event"><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">The world has not yet accumulated a decade-scale history.</p>';
}


const atlasCultureProfiles={
 'Earth Kingdom':{terrain:'continental farmland, mountains, deserts, stone cities, and regional roads',food:'dumplings, noodles, vegetables, grains, tea',clothing:'greens, ochres, sturdy regional fabrics',culture:'regional communities shaped by land, trade, family, craft, and earthbending traditions'},
 'Fire Nation':{terrain:'volcanic islands, calderas, warm coasts, and industrial ports',food:'spiced noodles, rice, grilled seafood, hot tea',clothing:'reds, charcoal, gold accents, practical island and formal styles',culture:'island communities shaped by family, education, industry, theater, military history, and firebending traditions'},
 'Northern Water Tribe':{terrain:'polar sea, ice walls, canals, and frozen coastline',food:'fish, seaweed, stews, preserved meat',clothing:'layered blue cold-weather clothing, fur, and heavy boots',culture:'formal northern traditions centered on family, water, healing, fishing, craft, and waterbending'},
 'Southern Water Tribe':{terrain:'southern ice, coastline, open sea, and scattered settlements',food:'fish stew, sea prunes, preserved foods',clothing:'blue layered cold-weather clothing adapted to travel and fishing',culture:'close-knit communities shaped by survival, adaptation, fishing, healing, and family'},
 'Foggy Swamp Tribe':{terrain:'humid swamp, giant trees, waterways, and dense vegetation',food:'swamp fish, foraged greens, stew',clothing:'light practical swamp clothing',culture:'kin-based communities shaped by boats, hunting, plant life, swamp waterbending, and natural connection'},
 'Air Nomad / Air culture':{terrain:'remote mountains, temples, cliffs, and open sky',food:'vegetarian dumplings, fruit, cakes, tofu, tea',clothing:'saffron, yellow, orange, and layered monastic or traveling garments',culture:'community, meditation, travel, spiritual practice, education, and airbending traditions'},
 'Republic City':{terrain:'dense coastal metropolis, harbor, boroughs, and industrial districts',food:'mixed-national street food, noodles, dumplings, restaurants',clothing:'cosmopolitan mixed-national fashion, workwear, uniforms, and modern suits',culture:'multinational urban life shaped by industry, media, policing, entertainment, commerce, and modern bending'}
};
function atlasProfileForNation(nation){return atlasCultureProfiles[nation]||{terrain:'varied regional terrain',food:'local staples and regional dishes',clothing:'locally appropriate clothing',culture:'local family, work, trade, and community traditions'};}
function ensureAtlasState(){if(!world)return;world.worldAtlas=world.worldAtlas||{discoveredRegionIds:[],initialized:false};world.worldAtlas.discoveredRegionIds=Array.isArray(world.worldAtlas.discoveredRegionIds)?world.worldAtlas.discoveredRegionIds:[];world.settlements.forEach(st=>{if(!st.atlasId)st.atlasId=`atlas-${st.id}`;const p=atlasProfileForNation(st.homeNation);st.terrain=st.terrain||p.terrain;st.culture=st.culture||p.culture;st.foods=st.foods||p.food.split(', ');st.clothing=st.clothing||p.clothing;if(!world.worldAtlas.discoveredRegionIds.includes(st.atlasId)&&world.characters.some(c=>(c.knownSettlementIds||[]).includes(st.id)))world.worldAtlas.discoveredRegionIds.push(st.atlasId);});world.worldAtlas.initialized=true;}
function renderAtlas(){if(!$('atlasView')||!world)return;const ch=activeCharacter();$('noAtlasLife').classList.toggle('hidden',!!ch);$('atlasGame').classList.toggle('hidden',!ch);if(!ch)return;ensureAtlasState();const town=currentSettlement(ch),p=atlasProfileForNation(town?.homeNation||ch.nation);$('atlasContext').textContent=`${eras[world.era]||world.era} · ${world.settlements.length} simulated settlements · ${world.worldAtlas.discoveredRegionIds.length} personally known regions`;$('currentCulture').innerHTML=`<p class="eyebrow">${escapeHtml(town?.homeNation||ch.nation)}</p><h2>${escapeHtml(town?.name||ch.region)}</h2><p>${escapeHtml(town?.culture||p.culture)}</p><div class="culture-grid"><div><strong>Terrain</strong><span>${escapeHtml(town?.terrain||p.terrain)}</span></div><div><strong>Food</strong><span>${escapeHtml((town?.foods||p.food.split(', ')).join(', '))}</span></div><div><strong>Clothing</strong><span>${escapeHtml(town?.clothing||p.clothing)}</span></div><div><strong>Era</strong><span>${escapeHtml(eras[world.era]||world.era)}</span></div></div>`;const groups={};world.settlements.forEach(st=>{const n=st.homeNation||'Other';groups[n]=groups[n]||[];groups[n].push(st);});$('atlasRegions').innerHTML=Object.entries(groups).map(([nation,rows])=>`<article class="atlas-group"><h3>${escapeHtml(nation)}</h3>${rows.map(st=>`<div class="atlas-row"><div><strong>${escapeHtml(st.name)}</strong><small>${escapeHtml(st.region||st.name)} · ${escapeHtml(st.terrain||atlasProfileForNation(nation).terrain)}</small></div><span>${world.worldAtlas.discoveredRegionIds.includes(st.atlasId)?'Known':'Unvisited'}</span></div>`).join('')}</article>`).join('');}


const everydayEventTemplates=[
 {id:'market-day',title:'Busy Market Day',type:'market',weight:6,seasons:[0,1,2,3],public:true,detail:'Extra traders, performers, food stalls, and gossip have filled the local market.'},
 {id:'street-performance',title:'Street Performance',type:'culture',weight:5,seasons:[0,1,2,3],public:true,detail:'A small crowd has gathered around local musicians, dancers, or storytellers.'},
 {id:'neighborhood-dispute',title:'Neighborhood Dispute',type:'community',weight:4,seasons:[0,1,2,3],public:true,detail:'Two households or businesses are arguing over a practical local problem that is drawing attention.'},
 {id:'work-shortage',title:'Short Staffed',type:'work',weight:4,seasons:[0,1,2,3],public:false,detail:'Someone at work failed to show up, leaving extra responsibilities for everyone else.'},
 {id:'supply-delay',title:'Delayed Supplies',type:'economy',weight:3,seasons:[0,1,2,3],public:true,detail:'A late shipment is creating inconvenience and temporary price pressure.'},
 {id:'school-demo',title:'Public Training Demonstration',type:'bending',weight:3,seasons:[0,1,2,3],public:true,detail:'A local school is holding a public demonstration of bending or martial skill.'},
 {id:'friendly-tournament',title:'Friendly Local Tournament',type:'bending',weight:2,seasons:[1,2],public:true,detail:'A small local tournament has drawn competitors, families, and curious spectators.'},
 {id:'harvest-day',title:'Harvest Celebration',type:'festival',weight:4,seasons:[2],public:true,detail:'Families and workers are celebrating the season with food, music, and shared labor.'},
 {id:'spring-cleaning',title:'Community Renewal Day',type:'community',weight:4,seasons:[0],public:true,detail:'Residents are repairing, cleaning, painting, planting, and improving shared spaces.'},
 {id:'summer-storm',title:'Sudden Seasonal Storm',type:'weather',weight:3,seasons:[1],public:true,detail:'A strong seasonal storm is disrupting errands, roads, and outdoor work.'},
 {id:'winter-cold',title:'Bitter Cold Snap',type:'weather',weight:3,seasons:[3],public:true,detail:'A sharp drop in temperature is making travel and outdoor work more difficult.'},
 {id:'family-meal',title:'Family Meal',type:'family',weight:5,seasons:[0,1,2,3],public:false,detail:'Relatives have found an excuse to gather for food, conversation, and whatever tensions or affection come with it.'},
 {id:'wedding',title:'Community Wedding',type:'relationship',weight:1,seasons:[0,1,2],public:true,detail:'A local couple is being celebrated by family, friends, neighbors, and curious onlookers.'},
 {id:'funeral',title:'Community Funeral',type:'family',weight:1,seasons:[0,1,2,3],public:true,detail:'A family and community are gathering to remember someone who died.'},
 {id:'spirit-offering',title:'Local Spirit Offering',type:'spirit',weight:2,seasons:[0,1,2,3],public:true,detail:'Residents are leaving food, incense, flowers, or quiet offerings at a place considered spiritually meaningful.'},
 {id:'public-debate',title:'Public Civic Debate',type:'politics',weight:2,seasons:[0,1,2,3],public:true,detail:'Residents and officials are openly debating a local policy, project, or grievance.'},
 {id:'illness-wave',title:'Seasonal Illness',type:'health',weight:2,seasons:[3,0],public:true,detail:'A common seasonal illness is spreading through several households and workplaces.'},
 {id:'travelers-arrive',title:'Travelers Arrive',type:'travel',weight:4,seasons:[0,1,2],public:true,detail:'A new group of travelers has arrived with unfamiliar stories, goods, and rumors.'}
];
function ensureEverydayEvents(){
 if(!world)return;world.everydayEvents=world.everydayEvents||{events:[],lastDailyTick:null,lastBirthdayYear:{},calendar:[]};
 world.everydayEvents.events=Array.isArray(world.everydayEvents.events)?world.everydayEvents.events:[];world.everydayEvents.lastBirthdayYear=world.everydayEvents.lastBirthdayYear||{};world.everydayEvents.calendar=Array.isArray(world.everydayEvents.calendar)?world.everydayEvents.calendar:[];
}
function weightedPickEvent(rows){
 const total=rows.reduce((n,x)=>n+x.weight,0);let roll=Math.random()*total;for(const row of rows){roll-=row.weight;if(roll<=0)return row;}return rows[0];
}
function eventCultureName(ch,type){
 const nation=currentSettlement(ch)?.homeNation||ch.nation;
 const festival=contentDB.festivals.find(f=>f.cultures.includes(nation)&&(f.eras.includes('all')||f.eras.includes(world.era)));
 if(type==='festival'&&festival)return festival.name;return null;
}
function createEverydayEvent(template,settlementId,participants=[]){
 const st=world.settlements.find(s=>s.id===settlementId),ch=activeCharacter(),cultureTitle=eventCultureName(ch,template.type);
 const event={id:uid('dayevent'),templateId:template.id,title:cultureTitle||template.title,type:template.type,settlementId,status:'active',createdAt:worldDate(),day:world.clock.day,seasonIndex:world.clock.seasonIndex,year:world.clock.year,detail:template.detail,participantIds:participants,playerResponse:null,expiresAfterDays:2};
 world.everydayEvents.events.push(event);if(world.everydayEvents.events.length>160)world.everydayEvents.events.shift();return event;
}
function birthdayEvents(){
 ensureEverydayEvents();world.characters.filter(c=>c.alive!==false).forEach(ch=>{
   const key=ch.id,last=world.everydayEvents.lastBirthdayYear[key];if(last===world.clock.year)return;
   const birthdayDay=((String(ch.id).split('').reduce((a,c)=>a+c.charCodeAt(0),0)%30)+1),birthdaySeason=Math.abs(Number(ch.birthYear||0))%4;
   if(world.clock.day===birthdayDay&&world.clock.seasonIndex===birthdaySeason){world.everydayEvents.lastBirthdayYear[key]=world.clock.year;const e={id:uid('dayevent'),templateId:'birthday',title:`${ch.name}'s Birthday`,type:'birthday',settlementId:ch.currentSettlementId||ch.homeSettlementId,status:'active',createdAt:worldDate(),day:world.clock.day,seasonIndex:world.clock.seasonIndex,year:world.clock.year,detail:`${ch.name} has turned ${ch.age}. People close to them may remember—or forget—the occasion.`,participantIds:[ch.id],playerResponse:null,expiresAfterDays:1};world.everydayEvents.events.push(e);if(ch.id===world.activeCharacterId)addLifeLog(ch,'Birthday',e.detail);}
 });
}
function generateEverydayEvent(){
 const ch=activeCharacter();if(!ch)return;ensureEverydayEvents();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.everydayEvents.lastDailyTick===stamp)return;world.everydayEvents.lastDailyTick=stamp;
 birthdayEvents();
 if(Math.random()>.28)return;
 const available=everydayEventTemplates.filter(x=>x.seasons.includes(world.clock.seasonIndex)),tpl=weightedPickEvent(available),st=currentSettlement(ch);
 const nearby=world.npcs.filter(n=>n.alive!==false&&n.settlementId===st.id).sort(()=>Math.random()-.5).slice(0,Math.min(4,1+Math.floor(Math.random()*4))).map(n=>n.id);
 const e=createEverydayEvent(tpl,st.id,nearby);
 if(tpl.type==='economy'){const econ=settlementEconomy(st.id);economyGoods[Math.floor(Math.random()*economyGoods.length)]&& (econ.prosperity=Math.max(5,econ.prosperity-1));}
 if(tpl.type==='weather')world.environment.weather=tpl.id==='summer-storm'?'Storm':tpl.id==='winter-cold'?'Cold':'Unsettled';
}
function expireEverydayEvents(){
 ensureEverydayEvents();world.everydayEvents.events.filter(e=>e.status==='active').forEach(e=>{const age=(world.clock.year-e.year)*120+(world.clock.seasonIndex-e.seasonIndex)*30+(world.clock.day-e.day);if(age>e.expiresAfterDays)e.status='passed';});
}
function attendEverydayEvent(id,choice='attend'){
 const ch=activeCharacter(),e=world.everydayEvents.events.find(x=>x.id===id);if(!ch||!e||e.status!=='active')return;const st=world.settlements.find(s=>s.id===e.settlementId);e.playerResponse=choice;e.status='resolved';e.resolvedAt=worldDate();
 const participants=(e.participantIds||[]).map(personById).filter(Boolean);
 if(choice==='attend'){
   applyNeeds(ch,{energy:-8,hunger:4,morale:6});advanceHours(e.type==='festival'||e.type==='wedding'?4:2);participants.forEach(n=>{if(n.id===ch.id)return;const r=relationshipWith(ch,n);r.closeness=clamp(r.closeness+2);r.affection=clamp(r.affection+1);npcRemember(n,'shared event',`${n.name} and ${ch.name} were both present for ${e.title}.`,{aboutId:ch.id,importance:e.type==='wedding'||e.type==='funeral'?2:1,source:'experienced directly'});});
   if(e.type==='community'||e.type==='festival')ch.factions&&(ch.factions.influence=(ch.factions.influence||0)+1);
   if(e.type==='market'&&Math.random()<.35)ch.currency+=2;
   addLifeLog(ch,e.title,`${ch.name} took part in ${e.title} in ${st?.name||'the community'}. ${e.detail}`);
 }else if(choice==='help'){
   applyNeeds(ch,{energy:-14,hunger:6,morale:8});advanceHours(4);ch.currency+=e.type==='work'||e.type==='market'?3:0;participants.forEach(n=>{if(n.id===ch.id)return;const r=relationshipWith(ch,n);r.trust=clamp(r.trust+3);r.respect=clamp(r.respect+2);});addLifeLog(ch,`Helped with ${e.title}`,`${ch.name} actively helped organize or solve problems during ${e.title}.`);
 }else{
   addLifeLog(ch,`Skipped ${e.title}`,`${ch.name} chose not to participate in ${e.title}.`);
 }
 if(typeof captureVisualMoment==='function'&&['festival','relationship','family','birthday','bending','spirit'].includes(e.type))captureVisualMoment(ch,e.title,e.detail,[...e.participantIds]);
 saveWorld();
}
function renderEverydayEvents(){
 if(!$('eventsView')||!world)return;const ch=activeCharacter();$('noEventsLife').classList.toggle('hidden',!!ch);$('eventsGame').classList.toggle('hidden',!ch);if(!ch)return;ensureEverydayEvents();expireEverydayEvents();const st=currentSettlement(ch),active=world.everydayEvents.events.filter(e=>e.settlementId===st.id&&e.status==='active').slice().reverse(),past=world.everydayEvents.events.filter(e=>e.settlementId===st.id&&e.status!=='active').slice().reverse().slice(0,18);
 $('eventsSummary').innerHTML=`<span>Today <b>${active.length}</b></span><span>Season <b>${['Spring','Summer','Autumn','Winter'][world.clock.seasonIndex]||world.clock.seasonIndex}</b></span><span>Local history <b>${past.length}</b></span>`;
 $('activeEverydayEvents').innerHTML=active.length?active.map(e=>`<article class="everyday-event-card"><p class="eyebrow">${escapeHtml(e.type.toUpperCase())}</p><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.detail)}</p><small>${escapeHtml(st.name)} · ${escapeHtml(e.createdAt)}</small><div class="actions compact"><button data-event="${e.id}" data-event-choice="attend">Attend</button><button data-event="${e.id}" data-event-choice="help">Help</button><button data-event="${e.id}" data-event-choice="skip">Skip</button></div></article>`).join(''):'<p class="muted">Nothing special is demanding attention today. Ordinary routines continue.</p>';
 $('activeEverydayEvents').querySelectorAll('[data-event]').forEach(b=>b.onclick=()=>attendEverydayEvent(b.dataset.event,b.dataset.eventChoice));
 $('pastEverydayEvents').innerHTML=past.length?past.map(e=>`<div class="event"><strong>${escapeHtml(e.title)}</strong><div>${escapeHtml(e.playerResponse||e.status)}</div><small>${escapeHtml(e.createdAt)}</small></div>`).join(''):'<p class="muted">No recent local event history yet.</p>';
}

const historicalTimeline=[
 {id:'kyoshi-stability',era:'kyoshi',year:-270,title:'Kyoshi-era regional consolidation',summary:'Local rulers, daofei, merchants and Earth Kingdom authorities compete to define order across a politically uneven world.',tags:['politics','earth'],effects:{security:-1,trade:0}},
 {id:'roku-peace',era:'roku',year:-50,title:'Roku-era international peace',summary:'The Four Nations remain formally at peace while industrial growth and Fire Nation ambition begin changing the balance between them.',tags:['politics','trade'],effects:{trade:1}},
 {id:'war-begins',era:'hundred-year-war',year:0,title:'The Hundred Year War begins',summary:'Fire Nation expansion turns international tension into a generations-long war. Borders, trade, migration and military life change dramatically.',tags:['war','global'],effects:{security:-2,trade:-1}},
 {id:'war-middle',era:'hundred-year-war',year:50,title:'A generation grows up knowing only war',summary:'Occupation, resistance, displacement and military logistics shape ordinary life across much of the world.',tags:['war','society'],effects:{security:-1,trade:-1}},
 {id:'war-end',era:'aang',year:100,title:'The Hundred Year War ends',summary:'Fire Lord Ozai is defeated and the war ends. The world enters a difficult period of reconciliation, resettlement and political reconstruction.',tags:['canon','global'],effects:{security:2,trade:1}},
 {id:'reconstruction',era:'reconstruction',year:101,title:'Reconstruction accelerates',summary:'Former colonies, returning soldiers, displaced families and national governments negotiate what peace should actually mean.',tags:['politics','society'],effects:{trade:1}},
 {id:'republic-growth',era:'reconstruction',year:110,title:'Multinational urban development expands',summary:'Former colonial territories increasingly become centers of mixed culture, industry and political experimentation.',tags:['technology','culture'],effects:{trade:1}},
 {id:'korra-modern',era:'korra',year:170,title:'A highly modernized world',summary:'Motor vehicles, radio, industry, professional bending and modern policing are part of everyday urban life, while old traditions remain influential.',tags:['technology','culture'],effects:{trade:1}},
 {id:'spirit-change',era:'korra',year:171,title:'Human-spirit relations enter a new age',summary:'Spiritual and political changes make spirits a more visible part of human affairs and force communities to rethink old assumptions.',tags:['spirit','global'],effects:{spirit:2}},
 {id:'future-open',era:'future',year:185,title:'An unwritten generation',summary:'The broad inheritance of previous Avatars remains, but this era is intentionally open for new history to emerge from the simulation.',tags:['future'],effects:{}}
];
function historicalYearLabel(y){return y<0?`${Math.abs(y)} BG`:y===0?'0 AG':`${y} AG`;}
function ensureHistoryState(){if(!world)return;world.historyState=world.historyState||{processed:[],branches:[],globalFlags:{},historicalLog:[]};world.historyState.processed=Array.isArray(world.historyState.processed)?world.historyState.processed:[];world.historyState.branches=Array.isArray(world.historyState.branches)?world.historyState.branches:[];world.historyState.globalFlags=world.historyState.globalFlags||{};world.historyState.historicalLog=Array.isArray(world.historyState.historicalLog)?world.historyState.historicalLog:[];}
function eraHistoricalEvents(){return historicalTimeline.filter(e=>e.era===world.era).sort((a,b)=>a.year-b.year);}
function applyHistoricalEffects(e){
 const effects=e.effects||{};world.settlements.forEach(s=>{s.historyModifiers=s.historyModifiers||{security:0,trade:0,spirit:0};for(const k of ['security','trade','spirit'])s.historyModifiers[k]=(s.historyModifiers[k]||0)+(effects[k]||0);});
 if(e.tags?.includes('war'))world.historyState.globalFlags.wartime=true;
 if(e.id==='war-end')world.historyState.globalFlags.wartime=false;
 if(e.tags?.includes('technology'))world.historyState.globalFlags.industrializing=true;
 if(e.tags?.includes('spirit'))world.historyState.globalFlags.spiritTransition=true;
}
function processHistoricalSimulation(force=false){
 if(!world)return;ensureHistoryState();const eligible=eraHistoricalEvents().filter(e=>world.clock.year>=e.year&&!world.historyState.processed.includes(e.id));
 eligible.forEach(e=>{
   const branch=world.historyState.branches.find(b=>b.eventId===e.id);
   if(world.historyMode==='alternate'&&branch?.outcome==='diverged'){
     world.historyState.processed.push(e.id);
     world.historyState.historicalLog.push({id:uid('history'),eventId:e.id,title:`History diverged: ${e.title}`,detail:branch.detail||'Events no longer follow the canonical course here.',year:world.clock.year,worldDate:worldDate(),mode:'alternate'});
     world.events.push(makeEvent('History diverges',branch.detail||`${e.title} no longer follows the expected course.`));
   }else{
     world.historyState.processed.push(e.id);applyHistoricalEffects(e);
     world.historyState.historicalLog.push({id:uid('history'),eventId:e.id,title:e.title,detail:e.summary,year:e.year,worldDate:worldDate(),mode:world.historyMode});
     world.events.push(makeEvent('Historical development',`${e.title}: ${e.summary}`));
   }
 });
}
function createHistoricalBranch(eventId){
 if(world.historyMode!=='alternate'){alert('Canon Timeline protects major historical outcomes. Create an Alternate History world to branch them.');return;}
 ensureHistoryState();const e=historicalTimeline.find(x=>x.id===eventId);if(!e)return;
 if(world.historyState.processed.includes(eventId)){alert('This historical point has already passed in this world.');return;}
 const detail=prompt(`How should history diverge around “${e.title}”?`,`Local events begin pushing this historical development onto a different path.`);
 if(!detail)return;world.historyState.branches=world.historyState.branches.filter(b=>b.eventId!==eventId);world.historyState.branches.push({eventId,outcome:'diverged',detail,createdAt:worldDate()});world.events.push(makeEvent('Alternate-history pressure',detail));saveWorld();
}
function historyWorldContext(){
 ensureHistoryState();const flags=world.historyState.globalFlags||{};const parts=[];
 if(flags.wartime)parts.push('The wider world is at war.');
 if(flags.industrializing)parts.push('Industrial technology is changing daily life.');
 if(flags.spiritTransition)parts.push('Human-spirit relations are unusually visible and unsettled.');
 return parts.join(' ')||'No major global condition currently overrides ordinary regional life.';
}
function renderHistory(){
 if(!$('historyView')||!world)return;ensureHistoryState();processHistoricalSimulation();
 $('historyModePill').textContent=historyModes[world.historyMode]||world.historyMode;
 $('historyCurrentDate').textContent=`${worldDate()} · ${historicalYearLabel(world.clock.year)}`;
 $('historyContext').textContent=historyWorldContext();
 const events=eraHistoricalEvents();
 $('historyTimeline').innerHTML=events.map(e=>{const done=world.historyState.processed.includes(e.id),branch=world.historyState.branches.find(b=>b.eventId===e.id);return `<article class="history-card ${done?'past':''}"><div class="section-head"><div><p class="eyebrow">${historicalYearLabel(e.year)} · ${escapeHtml(e.tags.join(' / ').toUpperCase())}</p><h3>${escapeHtml(e.title)}</h3></div><span class="status-pill">${done?'Occurred':branch?'Branch prepared':'Ahead'}</span></div><p>${escapeHtml(e.summary)}</p>${world.historyMode==='alternate'&&!done?`<button data-history-branch="${e.id}">${branch?'Edit Divergence':'Create Divergence'}</button>`:''}${branch?`<small>Alternate path: ${escapeHtml(branch.detail)}</small>`:''}</article>`}).join('');
 $('historyTimeline').querySelectorAll('[data-history-branch]').forEach(b=>b.onclick=()=>createHistoricalBranch(b.dataset.historyBranch));
 const log=[...world.historyState.historicalLog].reverse();$('historicalLog').innerHTML=log.length?log.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">This world has not crossed a major historical threshold yet.</p>';
}

const npcGoalPool=['Save enough money for a better home','Become respected in their trade','Support their household','Travel beyond their home region','Find a dependable partner','Learn a difficult skill','Open a small business','Live quietly and avoid trouble','Build stronger community ties'];
function ensureNpcSimulation(){
 if(!world)return;world.npcSimulation=world.npcSimulation||{lastDailyTick:null,lastYearTick:null,households:[],socialEvents:[]};
 world.npcSimulation.households=Array.isArray(world.npcSimulation.households)?world.npcSimulation.households:[];
 world.npcSimulation.socialEvents=Array.isArray(world.npcSimulation.socialEvents)?world.npcSimulation.socialEvents:[];
 world.npcs=Array.isArray(world.npcs)?world.npcs:[];
 world.npcs.forEach((n,i)=>ensureNpcLife(n,i));
}
function ensureNpcLife(n,i=0){
 if(!n)return;n.age=Number(n.age||18);n.alive=n.alive!==false;n.active=n.active!==false&&n.alive;
 n.money=Number.isFinite(n.money)?n.money:8+Math.floor(Math.random()*45);n.careerXp=Number(n.careerXp||0);n.careerLevel=Number(n.careerLevel||0);
 n.goal=n.goal||n.goals?.[0]||npcGoalPool[i%npcGoalPool.length];n.goals=Array.isArray(n.goals)?n.goals:[n.goal];
 n.memories=Array.isArray(n.memories)?n.memories:[];n.npcRelations=n.npcRelations||{};n.familyIds=Array.isArray(n.familyIds)?n.familyIds:[];
 n.partnerId=n.partnerId||null;n.childrenIds=Array.isArray(n.childrenIds)?n.childrenIds:[];n.birthYear=Number.isFinite(n.birthYear)?n.birthYear:world.clock.year-n.age;
 n.health=n.health||{condition:'well',vitality:70+Math.floor(Math.random()*25)};n.lifeStatus=n.lifeStatus||'resident';
 n.knowledge=n.knowledge||{local:true};n.knowledge.rumors=Array.isArray(n.knowledge.rumors)?n.knowledge.rumors:[];
 n.history=Array.isArray(n.history)?n.history:[];n.homeSettlementId=n.homeSettlementId||n.settlementId||null;
}
function npcLifeLog(n,title,detail){ensureNpcLife(n);n.history.push({title,detail,worldDate:worldDate(),year:world.clock.year});if(n.history.length>60)n.history.shift();world.npcSimulation.socialEvents.push({npcId:n.id,title,detail,worldDate:worldDate()});if(world.npcSimulation.socialEvents.length>150)world.npcSimulation.socialEvents.shift();}
function npcRelation(a,b){ensureNpcLife(a);ensureNpcLife(b);a.npcRelations[b.id]=a.npcRelations[b.id]||{trust:10+Math.floor(Math.random()*20),affection:5+Math.floor(Math.random()*20),tension:0,closeness:8};return a.npcRelations[b.id];}
function residentsOf(settlementId){return world.npcs.filter(n=>n.alive!==false&&n.settlementId===settlementId);}
function npcDailyWork(n){if(!n.alive)return;const pay=2+n.careerLevel;n.money+=pay;n.careerXp+=2;if(n.careerXp>=(n.careerLevel+1)*80&&n.careerLevel<4){n.careerLevel++;npcLifeLog(n,'Professional advancement',`${n.name} became more established as a ${n.occupation||n.role}.`);}}
function npcSocialize(n){
 const peers=residentsOf(n.settlementId).filter(x=>x.id!==n.id);if(!peers.length)return;const other=peers[Math.floor(Math.random()*peers.length)],r=npcRelation(n,other),back=npcRelation(other,n);
 if(Math.random()<.72){r.trust=Math.min(100,r.trust+1);r.affection=Math.min(100,r.affection+1);r.closeness=Math.min(100,r.closeness+1);back.trust=Math.min(100,back.trust+1);back.affection=Math.min(100,back.affection+1);}
 else{r.tension=Math.min(100,r.tension+2);back.tension=Math.min(100,back.tension+2);}
 if(!n.partnerId&&!other.partnerId&&n.age>=18&&other.age>=18&&r.trust>45&&r.affection>50&&r.closeness>40&&Math.random()<.025){n.partnerId=other.id;other.partnerId=n.id;npcLifeLog(n,'Relationship began',`${n.name} and ${other.name} became partners.`);npcLifeLog(other,'Relationship began',`${other.name} and ${n.name} became partners.`);}
}
function npcPursueGoal(n){
 if(Math.random()>.12)return;
 if(/money|home|business/i.test(n.goal)){n.money+=1+Math.floor(Math.random()*4);}
 if(/travel/i.test(n.goal)&&Math.random()<.08){const choices=world.settlements.filter(s=>s.id!==n.settlementId&&s.homeNation===world.settlements.find(x=>x.id===n.settlementId)?.homeNation);if(choices.length){const dest=choices[Math.floor(Math.random()*choices.length)],old=world.settlements.find(s=>s.id===n.settlementId);n.settlementId=dest.id;n.lifeStatus='migrant';npcLifeLog(n,'Moved settlements',`${n.name} moved from ${old?.name||'their former home'} to ${dest.name} while pursuing a personal goal.`);}}
}
function simulateNpcDay(){
 if(!world)return;ensureNpcSimulation();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.npcSimulation.lastDailyTick===stamp)return;world.npcSimulation.lastDailyTick=stamp;
 world.npcs.filter(n=>n.alive!==false).forEach(n=>{if(Math.random()<.85)npcDailyWork(n);if(Math.random()<.55)npcSocialize(n);npcPursueGoal(n);if(Math.random()<.015){const local=world.rumors?.filter(r=>r.settlementId===n.settlementId);if(local?.length){const r=local[Math.floor(Math.random()*local.length)];if(!n.knowledge.rumors.includes(r.id))n.knowledge.rumors.push(r.id);}}});
}
function makeNpcChild(a,b){
 const st=world.settlements.find(s=>s.id===a.settlementId)||world.settlements[0];if(!st)return;const child={id:uid('npc'),name:townNpcNames[Math.floor(Math.random()*townNpcNames.length)],role:'Child',occupation:'Child',age:0,birthYear:world.clock.year,active:true,alive:true,settlementId:st.id,homeSettlementId:st.id,homeLocationKey:'home',schedule:makeSchedule('home','home'),personality:[personalities[Math.floor(Math.random()*personalities.length)]],goals:['Grow up safely'],knowledge:{local:true,rumors:[]},socialProfile:{romanceAvailable:false,pace:'none',values:[]},relationship:{trust:20,respect:10,affection:20},familyIds:[a.id,b.id],partnerId:null,childrenIds:[],money:0,health:{condition:'well',vitality:90},npcRelations:{},memories:[],history:[],lifeStatus:'child'};world.npcs.push(child);st.localNpcIds=st.localNpcIds||[];st.localNpcIds.push(child.id);a.childrenIds.push(child.id);b.childrenIds.push(child.id);a.familyIds.push(child.id);b.familyIds.push(child.id);npcLifeLog(a,'Child joined household',`${a.name} and ${b.name} welcomed ${child.name} into their family.`);return child;
}
function simulateNpcYear(){
 if(!world)return;ensureNpcSimulation();if(world.npcSimulation.lastYearTick===world.clock.year)return;world.npcSimulation.lastYearTick=world.clock.year;
 world.npcs.slice().forEach(n=>{if(!n.alive)return;n.age=Math.max(n.age+1,world.clock.year-n.birthYear);if(n.age>=14&&n.occupation==='Child'){n.occupation=townNpcRoles[Math.floor(Math.random()*townNpcRoles.length)];n.role=n.occupation;n.lifeStatus='resident';n.goal=npcGoalPool[Math.floor(Math.random()*npcGoalPool.length)];npcLifeLog(n,'Came of age',`${n.name} began learning the work of a ${n.occupation}.`);}
 if(n.partnerId&&n.age>=20&&n.age<=45&&n.childrenIds.length<4&&Math.random()<.18){const p=world.npcs.find(x=>x.id===n.partnerId);if(p&&p.alive&&n.id<p.id)makeNpcChild(n,p);}
 const mortality=n.age<55?.001:n.age<70?.012:n.age<85?.05:.16;if(Math.random()<mortality){n.alive=false;n.active=false;n.lifeStatus='deceased';n.health.condition='deceased';npcLifeLog(n,'Died',`${n.name} died at age ${n.age}. Their relationships and history remain part of the world.`);world.events.push(makeEvent('A life ends',`${n.name}, ${n.occupation||n.role}, died at age ${n.age}.`,[n.id]));}});
}
function renderSociety(){
 if(!$('societyView')||!world)return;ensureNpcSimulation();const alive=world.npcs.filter(n=>n.alive!==false),dead=world.npcs.filter(n=>n.alive===false),couples=alive.filter(n=>n.partnerId&&n.id<n.partnerId).length,children=alive.filter(n=>n.age<18).length;
 $('societySummary').innerHTML=`<span>Living NPCs <b>${alive.length}</b></span><span>Children <b>${children}</b></span><span>Couples <b>${couples}</b></span><span>Recorded deaths <b>${dead.length}</b></span>`;
 const settlements=world.settlements||[];$('societySettlements').innerHTML=settlements.map(st=>{const rs=residentsOf(st.id);return `<article class="society-card"><h3>${escapeHtml(st.name)}</h3><small>${rs.length} simulated residents</small><div class="npc-mini-list">${rs.slice(0,8).map(n=>`<div><strong>${escapeHtml(n.name)}</strong><span>${escapeHtml(n.occupation||n.role)} · age ${n.age}${n.partnerId?' · partnered':''}</span></div>`).join('')}</div></article>`}).join('');
 const interesting=alive.slice().sort((a,b)=>(b.history?.length||0)-(a.history?.length||0)).slice(0,12);$('npcLives').innerHTML=interesting.map(n=>`<article class="society-card"><div class="section-head"><div><p class="eyebrow">${escapeHtml((n.lifeStatus||'resident').toUpperCase())}</p><h3>${escapeHtml(n.name)}</h3></div><span class="status-pill">Age ${n.age}</span></div><p>${escapeHtml(n.occupation||n.role)} · ${n.money} ◈</p><p><strong>Goal:</strong> ${escapeHtml(n.goal)}</p><small>${n.partnerId?`Partner: ${escapeHtml(world.npcs.find(x=>x.id===n.partnerId)?.name||'Unknown')} · `:''}${n.childrenIds.length} children · ${n.knowledge.rumors.length} known rumors</small>${n.history.length?`<details><summary>Life history</summary>${n.history.slice(-6).reverse().map(x=>`<p>${escapeHtml(x.worldDate)} — ${escapeHtml(x.detail)}</p>`).join('')}</details>`:''}</article>`).join('');
 const ev=[...world.npcSimulation.socialEvents].reverse().slice(0,20);$('societyLog').innerHTML=ev.length?ev.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">Residents are only beginning to build independent histories.</p>';
}
function maybeChangeWeather(){const w=['Clear','Cloudy','Light Rain','Windy','Foggy'];if(Math.random()<.35)world.environment.weather=w[Math.floor(Math.random()*w.length)];}
function maybeGenerateAmbientEvent(){if(Math.random()>.28)return;const p=[['Merchant caravan arrives','Traveling merchants enter the settlement with fresh goods and rumors from the road.'],['A local celebration begins','Residents gather for food, music, and conversation as the evening approaches.'],['Rumors spread','A new story begins circulating among travelers. Its accuracy is uncertain.'],['Weather shifts',`The local weather changes to ${world.environment.weather.toLowerCase()}, altering travel conditions.`]];const [t,d]=p[Math.floor(Math.random()*p.length)];world.events.push(makeEvent(t,d));}
function simulateEvent(){const entries=[['Courier route delayed','Heavy road traffic causes letters and small deliveries to arrive later than expected.'],['Tea prices rise slightly','A delayed shipment affects local tea sellers for the next few days.'],['Traveling performer arrives','A musician begins drawing evening crowds near the market.'],['Stray animal spotted','Residents report an unfamiliar hybrid animal near the edge of town.'],['Bending lesson announced','A local instructor posts notice of an open training session for interested residents.']];const [t,d]=entries[Math.floor(Math.random()*entries.length)];world.events.push(makeEvent(t,d));saveWorld();}
function seasonName(i){return ['Spring','Summer','Autumn','Winter'][i]||'Spring';}
function worldDate(){const c=world.clock;return `${seasonName(c.seasonIndex)}, Day ${c.day}, Year ${c.year}`;}
function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}


function renderActivePortraitChip(){
 if(!$('activePortraitChip')||!world)return;const ch=activeCharacter();if(!ch){$('activePortraitChip').innerHTML='';return;}const p=visualProfile(ch);$('activePortraitChip').innerHTML=`<div class="mini-avatar">${p.artAsset?`<img src="${escapeHtml(p.artAsset)}" alt="">`:escapeHtml(ch.name.slice(0,1).toUpperCase())}</div><div><strong>${escapeHtml(ch.name)}</strong><small>${escapeHtml(p.nation)} · age ${ch.age}</small></div>`;
}

function render(){ if(!world)return; $('worldTitle').textContent=world.name;$('eraLabel').textContent=eras[world.era]||world.era;$('historyLabel').textContent=historyModes[world.historyMode]||world.historyMode;$('worldIdLabel').textContent=world.id;$('dateLabel').textContent=worldDate();$('timeLabel').textContent=`${String(world.clock.hour).padStart(2,'0')}:00`;$('seasonLabel').textContent=seasonName(world.clock.seasonIndex);$('weatherLabel').textContent=world.environment.weather;$('npcCountLabel').textContent=world.npcs.filter(n=>n.active).length;$('characterCountLabel').textContent=world.characters.length;$('eventCountLabel').textContent=world.events.length;
  renderActivePortraitChip();const log=$('eventLog');log.innerHTML='';[...world.events].reverse().slice(0,30).forEach(e=>{const el=document.createElement('div');el.className='event';el.innerHTML=`<strong>${escapeHtml(e.title)}</strong><div>${escapeHtml(e.detail)}</div><small>${escapeHtml(e.worldDate||worldDate())}</small>`;log.appendChild(el);}); renderCharacterList(); renderLife(); renderRelationships(); renderTraining(); renderTravel(); renderInventory(); renderCareer(); renderStories(); renderAtlas(); renderHistory(); renderSociety(); renderCombat(); renderSpirits(); renderFactions(); renderEconomy(); renderEmergentStories(); renderGenerations(); renderCanonEncounters(); renderTravel(); renderNpcMemory(); renderPortraitStudio(); renderVisualStories(); renderLongTermWorld(); renderSettings(); renderContentLibrary(); renderDialogue(); renderEverydayEvents(); renderProgressionBalance(); renderBetaDiagnostics(); }

function setupCreatorOptions(){ const nations=eraNations[world.era]||eraNations.future; $('charNation').innerHTML=nations.map(n=>`<option>${escapeHtml(n)}</option>`).join(''); $('charOccupation').innerHTML=occupations.map(o=>`<option>${escapeHtml(o)}</option>`).join(''); updateRegions(); makeChips('personalityChoices',personalities,5);makeChips('strengthChoices',strengths,3);makeChips('flawChoices',flaws,3); $('creatorWorldContext').textContent=`Creating a resident of ${world.name} · ${eras[world.era]}.`; updateBendingCompatibility();if($('onboardCombatIntensity'))$('onboardCombatIntensity').value=world.uiSettings?.combatIntensity||'standard';if($('onboardRomance'))$('onboardRomance').value=world.uiSettings?.romance||'mature';if($('onboardPermanentInjury'))$('onboardPermanentInjury').checked=world.uiSettings?.permanentInjury!==false;if($('onboardCharacterDeath'))$('onboardCharacterDeath').checked=world.uiSettings?.characterDeath!==false;if($('onboardPacing'))$('onboardPacing').value=world.balanceState?.profile||'standard'; }
function updateRegions(){const rs=nationRegions[$('charNation').value]||['Local settlement'];$('charRegion').innerHTML=rs.map(r=>`<option>${escapeHtml(r)}</option>`).join('');}
function makeChips(containerId,values,max){const c=$(containerId); if(c.children.length)return; values.forEach(v=>{const label=document.createElement('label');label.className='chip';label.innerHTML=`<input type="checkbox" value="${escapeHtml(v)}" data-max="${max}"><span>${escapeHtml(v)}</span>`;c.appendChild(label);}); c.addEventListener('change',e=>{const boxes=[...c.querySelectorAll('input:checked')];if(boxes.length>max){e.target.checked=false;alert(`Choose up to ${max}.`);}});}
function selectedChips(id){return [...$(id).querySelectorAll('input:checked')].map(x=>x.value);}
function updateBendingCompatibility(){ if(!world)return;const n=$('charNation').value,b=$('charBending').value;let text='Your bending choice is stored as part of your life history. The AI-GM will later enforce training and cultural context.';const expected={'Northern Water Tribe':'water','Southern Water Tribe':'water','Foggy Swamp Tribe':'water','Fire Nation':'fire','Earth Kingdom':'earth','Air Nomad / Air culture':'air'}[n];if(expected&&b!=='none'&&b!=='unknown'&&b!==expected)text='Unusual combination: this can still work, but your family history or migration background should explain why. The game will preserve that as a story hook.';$('bendingCompatibility').textContent=text;}

function showCreatorStep(step){creatorStep=Math.max(0,Math.min(8,step));document.querySelectorAll('.creator-step').forEach((el,i)=>el.classList.toggle('hidden',i!==creatorStep));$('creatorBackBtn').disabled=creatorStep===0;$('creatorNextBtn').classList.toggle('hidden',creatorStep===8);$('createCharacterBtn').classList.toggle('hidden',creatorStep!==8); if(creatorStep===8)renderReview();renderStepper();}
function renderStepper(){const c=$('creatorStepper');c.innerHTML='';['Identity','Appearance','Home','Bending','Life','Personality','Relationships','Settings','Review'].forEach((name,i)=>{const b=document.createElement('button');b.type='button';b.className=`step-dot ${i===creatorStep?'active':''} ${i<creatorStep?'done':''}`;b.textContent=`${i+1}. ${name}`;b.addEventListener('click',()=>{if(i<=creatorStep)showCreatorStep(i);});c.appendChild(b);});}
function openTab(id){document.querySelectorAll('.tab-view').forEach(v=>v.classList.add('hidden'));$(id).classList.remove('hidden');document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));if(id==='creatorView')showCreatorStep(0);if(id==='lifeView')renderLife();if(id==='relationshipsView')renderRelationships();if(id==='trainingView')renderTraining();if(id==='travelView')renderTravel();if(id==='inventoryView')renderInventory();if(id==='careerView')renderCareer();if(id==='storiesView')renderStories();if(id==='atlasView')renderAtlas();if(id==='historyView')renderHistory();if(id==='societyView')renderSociety();if(id==='combatView')renderCombat();if(id==='spiritsView')renderSpirits();if(id==='factionsView')renderFactions();if(id==='economyView')renderEconomy();if(id==='emergentView')renderEmergentStories();if(id==='generationsView')renderGenerations();if(id==='canonView')renderCanonEncounters();if(id==='npcMemoryView')renderNpcMemory();if(id==='portraitView')renderPortraitStudio();if(id==='visualStoriesView')renderVisualStories();if(id==='longTermView')renderLongTermWorld();if(id==='settingsView')renderSettings();if(id==='contentView')renderContentLibrary();if(id==='dialogueView')renderDialogue();if(id==='eventsView')renderEverydayEvents();if(id==='progressionView')renderProgressionBalance();if(id==='firstDayView')renderFirstDay();if(id==='betaView')renderBetaDiagnostics();}

function formData(){return {name:$('charName').value.trim(),nickname:$('charNickname').value.trim(),age:Number($('charAge').value),gender:$('charGender').value.trim(),pronouns:$('charPronouns').value.trim(),voice:$('charVoice').value,appearance:{height:$('charHeight').value.trim(),build:$('charBuild').value,skinTone:$('charSkin').value.trim(),eyes:$('charEyes').value.trim(),hairColor:$('charHairColor').value.trim(),hairStyle:$('charHairStyle').value.trim(),face:$('charFace').value.trim(),marks:$('charMarks').value.trim(),clothing:$('charClothing').value.trim()},nation:$('charNation').value,region:$('charRegion').value,upbringing:$('charUpbringing').value,education:$('charEducation').value,bending:{element:$('charBending').value,training:$('charTraining').value,discipline:$('charDiscipline').value,mastery:'Beginner'},occupation:$('charOccupation').value,wealth:$('charWealth').value,home:$('charHome').value,personality:selectedChips('personalityChoices'),strengths:selectedChips('strengthChoices'),flaws:selectedChips('flawChoices'),goal:$('charGoal').value.trim(),fear:$('charFear').value.trim(),romancePreference:$('charRomance').value,familyMode:$('charFamilyMode').value,startingConnection:$('charStartingConnection')?.value||'childhood-friend',startingBond:$('charStartingBond')?.value||'trusted',backgroundHook:$('charBackgroundHook')?.value?.trim()||'',onboardingSettings:{combatIntensity:$('onboardCombatIntensity')?.value||world.uiSettings?.combatIntensity||'standard',romance:$('onboardRomance')?.value||world.uiSettings?.romance||'mature',permanentInjury:$('onboardPermanentInjury')?.checked??world.uiSettings?.permanentInjury??true,characterDeath:$('onboardCharacterDeath')?.checked??world.uiSettings?.characterDeath??true,pacing:$('onboardPacing')?.value||world.balanceState?.profile||'standard'}};}
function renderReview(){const c=formData(),tone=c.onboardingSettings;$('characterReview').innerHTML=`<div class="review-hero"><div class="avatar-placeholder">${escapeHtml((c.name||'?').slice(0,1).toUpperCase())}</div><div><h3>${escapeHtml(c.name||'Unnamed Character')}</h3><p>${escapeHtml(c.age)} years old · ${escapeHtml(c.nation)} · ${escapeHtml(c.region)}</p><p>${escapeHtml(c.occupation)} · ${escapeHtml(bendingLabel(c.bending.element))}</p></div></div><div class="review-grid"><div><strong>Upbringing</strong><span>${escapeHtml(c.upbringing)}</span></div><div><strong>Education</strong><span>${escapeHtml(c.education)}</span></div><div><strong>Training</strong><span>${escapeHtml(c.bending.training)}</span></div><div><strong>Personality</strong><span>${escapeHtml(c.personality.join(', ')||'Still taking shape')}</span></div><div><strong>Strengths</strong><span>${escapeHtml(c.strengths.join(', ')||'None selected')}</span></div><div><strong>Flaws</strong><span>${escapeHtml(c.flaws.join(', ')||'None selected')}</span></div><div><strong>Life goal</strong><span>${escapeHtml(c.goal||'Still figuring it out')}</span></div><div><strong>Background hook</strong><span>${escapeHtml(c.backgroundHook||'No special unfinished business')}</span></div><div><strong>Starting connection</strong><span>${escapeHtml(c.startingConnection.replaceAll('-',' '))} · ${escapeHtml(c.startingBond)}</span></div><div><strong>Game tone</strong><span>${escapeHtml(tone.combatIntensity)} combat · ${escapeHtml(tone.romance)} romance · ${escapeHtml(tone.pacing)} pacing</span></div></div><div class="notice"><strong>First-day promise:</strong> The game will begin with ordinary responsibilities, people who already know you, and at least one nearby opportunity. It will not immediately declare you the hero of history.</div>`;}
function bendingLabel(v){return {none:'Nonbender',water:'Waterbender',earth:'Earthbender',fire:'Firebender',air:'Airbender',unknown:'Undiscovered / uncertain'}[v]||v;}

function generateFamily(character){if(character.familyMode==='independent')return [];const count=character.familyMode==='small'?2:Math.floor(Math.random()*3)+3;const used=new Set();const family=[];for(let i=0;i<count;i++){let role=familyRoles[Math.floor(Math.random()*familyRoles.length)];while(used.has(role)&&used.size<familyRoles.length)role=familyRoles[Math.floor(Math.random()*familyRoles.length)];used.add(role);const ageOffset=role.includes('sibling')?(role.startsWith('Older')?Math.floor(Math.random()*8)+1:-(Math.floor(Math.random()*6)+1)):role.includes('Grand')?Math.floor(Math.random()*25)+42:Math.floor(Math.random()*18)+20;family.push({id:uid('npc'),name:firstNames[Math.floor(Math.random()*firstNames.length)],role,age:Math.max(6,character.age+ageOffset),nation:character.nation,relationship:{trust:65+Math.floor(Math.random()*25),respect:55+Math.floor(Math.random()*30),affection:60+Math.floor(Math.random()*30)},active:true});}return family;}
function createStartingFriend(character){
 const connection=character.startingConnection||'childhood-friend',bond=character.startingBond||'trusted',roleMap={'childhood-friend':'Childhood friend','coworker':'Coworker','neighbor':'Neighbor','former-classmate':'Former classmate','friendly-rival':'Friendly rival','mentor-contact':'Older mentor contact'},role=roleMap[connection]||'Childhood friend';
 const ageBase=connection==='mentor-contact'?character.age+12:character.age+(Math.floor(Math.random()*5)-2),friend={id:uid('npc'),name:firstNames[Math.floor(Math.random()*firstNames.length)],role,occupation:connection==='coworker'?character.occupation:undefined,age:Math.max(connection==='mentor-contact'?25:12,ageBase),nation:character.nation,active:true};
 const values={distant:[38,42,35,8],familiar:[52,48,46,6],trusted:[68,60,64,4],complicated:[48,55,48,28]}[bond]||[60,55,58,6];
 world.npcs.push(friend);world.relationships.push({id:uid('rel'),a:character.id,b:friend.id,type:connection==='friendly-rival'?'rival-friend':'friend',trust:values[0],respect:values[1],affection:values[2],tension:values[3],romanticInterest:0,sharedMemories:[`They knew each other before the player story began as ${role.toLowerCase()}s.`],status:'active'});return friend;
}

function ensureLifeHandoffCollections(){
 if(!world)return;world.characters=Array.isArray(world.characters)?world.characters:[];world.npcs=Array.isArray(world.npcs)?world.npcs:[];world.relationships=Array.isArray(world.relationships)?world.relationships:[];world.settlements=Array.isArray(world.settlements)?world.settlements:[];world.events=Array.isArray(world.events)?world.events:[];world.lifeLog=Array.isArray(world.lifeLog)?world.lifeLog:[];world.opportunities=Array.isArray(world.opportunities)?world.opportunities:[];world.onboardingState=world.onboardingState||{completedCharacterIds:[],firstDayCharacterId:null};ensureBetaState();
}
function forcePlayableLocation(ch){
 ensureLifeHandoffCollections();ensureCharacterLifeState(ch);let town=null;
 try{town=ensureHomeSettlement(ch);}catch(err){console.error('Home settlement initialization failed; using recovery settlement.',err);}
 if(!town){
   town=world.settlements.find(s=>s.id===ch.homeSettlementId)||world.settlements[0];
   if(!town){town={id:uid('settlement'),name:ch.region||'Home Settlement',region:ch.region||'Home Region',homeNation:ch.nation||'Unknown',era:world.era,description:'A modest home settlement used to safely begin this life.',createdAtWorldDate:worldDate(),places:placeTemplates.map(x=>({...x})),localNpcIds:[],economy:{foodPrice:2,teaPrice:1,roomPrice:5,workPay:6},notoriety:0};world.settlements.push(town);}
 }
 town.places=Array.isArray(town.places)&&town.places.length?town.places:placeTemplates.map(x=>({...x}));town.localNpcIds=Array.isArray(town.localNpcIds)?town.localNpcIds:[];
 ch.homeSettlementId=town.id;ch.currentSettlementId=town.id;
 const preferred=town.places.find(p=>p.key==='home')||town.places[0];ch.currentLocationKey=preferred?.key||'home';
 ch.knownSettlementIds=Array.isArray(ch.knownSettlementIds)?ch.knownSettlementIds:[];if(!ch.knownSettlementIds.includes(town.id))ch.knownSettlementIds.push(town.id);
 return town;
}
function safeInitializeNewLife(ch){
 ensureLifeHandoffCollections();world.activeCharacterId=ch.id;ensureCharacterLifeState(ch);
 const failures=[];
 const run=(label,fn)=>{try{return fn();}catch(err){console.error(`Life handoff: ${label} failed`,err);failures.push(`${label}: ${err?.message||err}`);return null;}};
 run('onboarding settings',()=>applyOnboardingSettings(ch));run('training',()=>ensureTrainingState(ch));run('career',()=>ensureCareerState(ch));run('generation',()=>ensureGenerationCharacter(ch));
 const town=forcePlayableLocation(ch);
 run('family placement',()=>assignFamilyToTown(ch,town));run('town opportunities',()=>ensureTownOpportunities(town));run('portrait identity',()=>visualProfile(ch));run('map state',()=>ensureMapState());run('exploration',()=>ensureExplorationState());
 world.onboardingState.firstDayCharacterId=ch.id;world.betaState.lastLifeHandoff={characterId:ch.id,realDate:new Date().toISOString(),worldDate:worldDate(),ok:true,warnings:failures};
 return {town,failures};
}
function enterPlayableLife(ch,{firstMorning=true}={}){
 if(!world||!ch)return false;ensureLifeHandoffCollections();world.activeCharacterId=ch.id;const result=safeInitializeNewLife(ch);
 try{saveWorld();}catch(err){console.error('Save during life handoff failed',err);}
 const target=firstMorning?'firstDayView':'lifeView';
 try{openTab(target);if(firstMorning)renderFirstDay();else renderLife();return true;}catch(err){
   console.error('First target screen failed; falling back to Life screen.',err);
   try{document.querySelectorAll('.tab-view').forEach(v=>v.classList.add('hidden'));$('lifeView')?.classList.remove('hidden');renderLife();return true;}catch(inner){console.error('Life fallback failed',inner);return false;}
 }
}
function recoverEnterMyLife(){
 ensureLifeHandoffCollections();let ch=activeCharacter();
 if(!ch)ch=world.characters.find(c=>c.alive!==false)||world.characters[0];
 if(!ch){alert('No completed character exists in this save yet.');openTab('creatorView');return;}
 world.betaState.recoveryCount=(world.betaState.recoveryCount||0)+1;
 const incomplete=!world.onboardingState?.completedCharacterIds?.includes(ch.id);
 const ok=enterPlayableLife(ch,{firstMorning:incomplete});
 if(!ok)alert('Recovery could not open the life screen. Download a backup and report this save from Beta Diagnostics.');
}

function createCharacter(e){
 e.preventDefault();ensureLifeHandoffCollections();const c=formData();
 if(!c.name){alert('Your character needs a name.');showCreatorStep(0);return;}
 if(c.personality.length<3){alert('Choose at least 3 personality traits.');showCreatorStep(5);return;}
 const character={id:uid('pc'),createdAt:new Date().toISOString(),status:'active',...c,visualIdentity:{...c.appearance,nation:c.nation,region:c.region,currentAge:c.age,artNotes:'Persistent visual identity profile — future generated art should preserve these traits.'},skills:{general:{},bending:{}},health:{condition:'Healthy',fatigue:0},inventory:starterInventory(c),equipment:{outfit:null,tool:null,weapon:null,travel:null},properties:[],lodging:null,ownershipLog:[],currency:startingCurrency(c.wealth),reputation:[],memories:[],familyIds:[],relationshipIds:[],chronicle:[]};
 // Commit the player record FIRST. Optional generation must never prevent the life from existing.
 world.characters.push(character);world.activeCharacterId=character.id;
 let family=[],friend=null;const warnings=[];
 try{family=generateFamily(character)||[];}catch(err){console.error('Starting family generation failed',err);warnings.push('family generation');family=[];}
 family.forEach(n=>{try{world.npcs.push(n);character.familyIds.push(n.id);const rel={id:uid('rel'),a:character.id,b:n.id,type:'family',familyRole:n.role,trust:n.relationship?.trust??65,respect:n.relationship?.respect??55,affection:n.relationship?.affection??60,romanticInterest:0,status:'active'};world.relationships.push(rel);character.relationshipIds.push(rel.id);}catch(err){console.error('Family member attachment failed',err);warnings.push('family relationship');}});
 try{friend=createStartingFriend(character);if(friend){const rel=world.relationships.slice().reverse().find(r=>(r.a===character.id&&r.b===friend.id)||(r.b===character.id&&r.a===friend.id));if(rel&&!character.relationshipIds.includes(rel.id))character.relationshipIds.push(rel.id);}}catch(err){console.error('Starting connection generation failed',err);warnings.push('starting connection');friend=null;}
 character.memories.push({id:uid('memory'),importance:'major',summary:`Began life in ${character.region}${family.length?` with ${family.length} close family connection${family.length===1?'':'s'}`:''}${friend?`${family.length?' and':' with'} ${friend.name} already part of their life`:''}.`,createdAtWorldDate:worldDate()});
 const handoff=safeInitializeNewLife(character);
 [...family,friend].filter(Boolean).forEach(n=>{try{n.settlementId=character.homeSettlementId;n.homeSettlementId=character.homeSettlementId;const st=world.settlements.find(s=>s.id===character.homeSettlementId);if(st&&!st.localNpcIds.includes(n.id))st.localNpcIds.push(n.id);}catch(err){console.error('Starting NPC placement failed',err);warnings.push('NPC placement');}});
 try{world.events.push(makeEvent('A new life begins',`${character.name}, a ${character.age}-year-old ${bendingLabel(character.bending.element).toLowerCase()} from ${character.region}, begins their playable life.`,[character.id]));}catch(err){console.error('Opening event failed',err);}
 world.betaState.lastLifeHandoff={characterId:character.id,realDate:new Date().toISOString(),worldDate:worldDate(),ok:true,warnings:[...warnings,...(handoff.failures||[])]};
 try{saveWorld();}catch(err){console.error('Initial save failed',err);}
 resetCreator();
 if(!enterPlayableLife(character,{firstMorning:true})){alert('Your character was created and saved, but the opening screen failed. Use Beta Diagnostics → Enter My Life to recover without remaking the character.');}
}


function applyOnboardingSettings(c){
 ensureUiSettings();ensureBalanceState();if(!c?.onboardingSettings)return;world.uiSettings.combatIntensity=c.onboardingSettings.combatIntensity;world.uiSettings.romance=c.onboardingSettings.romance;world.uiSettings.permanentInjury=!!c.onboardingSettings.permanentInjury;world.uiSettings.characterDeath=!!c.onboardingSettings.characterDeath;world.balanceState.profile=c.onboardingSettings.pacing||'standard';applyUiSettings();
}
function buildFirstDay(ch){
 ensureCharacterLifeState(ch);const st=forcePlayableLocation(ch),friend=relationshipPeople(ch).find(x=>x.r.type==='friend'||x.r.type==='rival-friend')?.n||null,family=(ch.familyIds||[]).map(personById).filter(Boolean),place=currentPlace(ch)||st.places?.[0]||null,duties=[];
 if(ch.occupation&&ch.occupation!=='Unemployed / between paths')duties.push(`Your ${ch.occupation.toLowerCase()} responsibilities are waiting.`);
 if(family.length)duties.push(`${family[0].name} is part of your immediate household life.`);
 if(friend)duties.push(`${friend.name}, your ${(friend.role||'starting connection').toLowerCase()}, already knows you well enough to have expectations.`);
 const routes=(world.explorationState?.routes||[]).filter(r=>routeConnectedTo(r,st.id));if(routes.length)duties.push(`${routes.length} regional route${routes.length===1?'':'s'} connect ${st.name} to the wider world.`);
 if(!duties.length)duties.push(`You have a home in ${st.name}, a day ahead of you, and no obligation to become anyone's hero.`);
 return {st,friend,family,place,duties,intro:`Morning arrives in ${st.name}. You are ${ch.name}, ${ch.age}, and today begins with the life you already had—not a prophecy.${ch.backgroundHook?` One unfinished thread is already on your mind: ${ch.backgroundHook}`:''}`};
}
function renderFirstDay(){
 if(!$('firstDayView')||!world)return;let ch=activeCharacter();if(!ch){ch=world.characters?.[0]||null;if(ch)world.activeCharacterId=ch.id;}if(!ch){openTab('creatorView');return;}
 let d;try{d=buildFirstDay(ch);}catch(err){console.error('First Morning build failed',err);forcePlayableLocation(ch);openTab('lifeView');return;}
 $('firstDayTitle').textContent=`Your First Morning in ${d.st.name}`;$('firstDayIntro').textContent=d.intro;$('firstDayCharacter').innerHTML=`<div class="review-hero"><div class="avatar-placeholder">${escapeHtml(ch.name.slice(0,1).toUpperCase())}</div><div><h3>${escapeHtml(ch.name)}</h3><p>${escapeHtml(ch.occupation||'Unestablished')} · ${escapeHtml(bendingLabel(ch.bending?.element||'none'))}</p><p>${escapeHtml(d.place?.name||d.st.name)} · ${escapeHtml(world.environment?.weather||'Clear')}</p></div></div>`;
 $('firstDayThreads').innerHTML=d.duties.map(x=>`<div class="onboarding-thread">${escapeHtml(x)}</div>`).join('');
 $('firstDayChoices').innerHTML=`<button data-firstday="work">${ch.occupation==='Unemployed / between paths'?'Look for work':'Start with work'}</button>${d.friend?'<button data-firstday="friend">Find your connection</button>':''}<button data-firstday="explore">Walk around town</button><button data-firstday="events">See what is happening today</button><button data-firstday="life">Enter My Life</button>`;
 $('firstDayChoices').querySelectorAll('[data-firstday]').forEach(b=>b.onclick=()=>beginFirstDayChoice(b.dataset.firstday));
}
function beginFirstDayChoice(kind){
 const ch=activeCharacter();if(!ch){recoverEnterMyLife();return;}world.onboardingState=world.onboardingState||{completedCharacterIds:[],firstDayCharacterId:null};if(!world.onboardingState.completedCharacterIds.includes(ch.id))world.onboardingState.completedCharacterIds.push(ch.id);world.onboardingState.firstDayCharacterId=null;
 try{
   if(kind==='work')openTab('careerView');
   else if(kind==='friend'){const friend=relationshipPeople(ch).find(x=>x.r.type==='friend'||x.r.type==='rival-friend')?.n;if(friend)startDialogue(friend.id);else openTab('dialogueView');}
   else if(kind==='events')openTab('eventsView');
   else openTab('lifeView');
 }catch(err){console.error('First-day choice failed; opening Life fallback.',err);openTab('lifeView');}
 saveWorld();
}

function renderCharacterList(){if(!world)return;const c=$('characterList');c.innerHTML='';if(!world.characters.length){c.innerHTML='<div class="empty-state"><h3>No player characters yet</h3><p>Create the first ordinary person who will begin living in this world.</p><button class="primary" data-open-creator>Create First Character</button></div>';c.querySelector('[data-open-creator]').addEventListener('click',()=>openTab('creatorView'));return;}world.characters.forEach(ch=>{const card=document.createElement('button');card.className='character-card';card.innerHTML=`<div class="avatar-placeholder small">${escapeHtml(ch.name.slice(0,1).toUpperCase())}</div><div><strong>${escapeHtml(ch.name)}</strong><span>${escapeHtml(ch.age)} · ${escapeHtml(ch.nation)}</span><span>${escapeHtml(ch.occupation)} · ${escapeHtml(bendingLabel(ch.bending.element))}</span></div>${world.activeCharacterId===ch.id?'<em>Active life</em>':''}`;card.addEventListener('click',()=>showCharacterDetail(ch.id));c.appendChild(card);});}
function showCharacterDetail(id){const ch=world.characters.find(x=>x.id===id);if(!ch)return;const family=ch.familyIds.map(fid=>world.npcs.find(n=>n.id===fid)).filter(Boolean);const relationships=world.relationships.filter(r=>r.a===ch.id||r.b===ch.id).map(r=>{const otherId=r.a===ch.id?r.b:r.a;return {...r,other:world.npcs.find(n=>n.id===otherId)||world.characters.find(n=>n.id===otherId)};});const d=$('characterDetail');d.classList.remove('hidden');d.innerHTML=`<div class="detail-header"><div class="avatar-placeholder large">${escapeHtml(ch.name.slice(0,1).toUpperCase())}</div><div><p class="eyebrow">CHARACTER RECORD</p><h2>${escapeHtml(ch.name)}</h2><p>${escapeHtml(ch.age)} years old · ${escapeHtml(ch.region)} · ${escapeHtml(ch.nation)}</p></div>${world.activeCharacterId===ch.id?'<span class="status-pill">Active life</span>':`<button data-activate="${ch.id}">Make Active</button>`}</div><div class="detail-columns"><div><h3>Life</h3><dl class="stats"><div><dt>Occupation</dt><dd>${escapeHtml(ch.occupation)}</dd></div><div><dt>Bending</dt><dd>${escapeHtml(bendingLabel(ch.bending.element))}</dd></div><div><dt>Training</dt><dd>${escapeHtml(ch.bending.training)}</dd></div><div><dt>Goal</dt><dd>${escapeHtml(ch.goal||'Undecided')}</dd></div></dl><h3>Personality</h3><p>${escapeHtml(ch.personality.join(', '))}</p><p><strong>Strengths:</strong> ${escapeHtml(ch.strengths.join(', ')||'—')}</p><p><strong>Flaws:</strong> ${escapeHtml(ch.flaws.join(', ')||'—')}</p></div><div><h3>Family</h3>${family.length?family.map(n=>`<p><strong>${escapeHtml(n.name)}</strong> · ${escapeHtml(n.role)} · age ${escapeHtml(n.age)}</p>`).join(''):'<p>No immediate household recorded.</p>'}<h3>Relationships</h3>${relationships.map(r=>`<p><strong>${escapeHtml(r.other?.name||'Unknown')}</strong> · ${escapeHtml(r.familyRole||r.type)} · trust ${r.trust}</p>`).join('')||'<p>No relationships recorded.</p>'}</div><div><h3>Visual Identity</h3><p>${escapeHtml([ch.visualIdentity.build,ch.visualIdentity.skinTone,ch.visualIdentity.eyes&&`${ch.visualIdentity.eyes} eyes`,ch.visualIdentity.hairColor&&`${ch.visualIdentity.hairColor} hair`,ch.visualIdentity.hairStyle,ch.visualIdentity.marks].filter(Boolean).join(' · ')||'Appearance details not specified.')}</p><h3>Starting Memory</h3><p>${escapeHtml(ch.memories[0]?.summary||'The story has just begun.')}</p></div></div>`;const b=d.querySelector('[data-activate]');if(b)b.addEventListener('click',()=>{world.activeCharacterId=ch.id;ensureCharacterLifeState(ch);ensureHomeSettlement(ch);world.events.push(makeEvent('Active life changed',`${ch.name} becomes the current playable character.`,[ch.id]));saveWorld();showCharacterDetail(ch.id);});}

function resetCreator(){ $('characterForm').reset();$('charAge').value=18;document.querySelectorAll('.chip input').forEach(x=>x.checked=false);setupCreatorOptions();showCreatorStep(0); }
function randomizeCharacter(){setupCreatorOptions();$('charName').value=firstNames[Math.floor(Math.random()*firstNames.length)];$('charAge').value=Math.floor(Math.random()*25)+16;$('charVoice').selectedIndex=Math.floor(Math.random()*$('charVoice').options.length);$('charBuild').selectedIndex=Math.floor(Math.random()*$('charBuild').options.length);$('charEyes').value=['Brown','Gray','Hazel','Dark brown','Green'][Math.floor(Math.random()*5)];$('charHairColor').value=['Black','Dark brown','Brown','Auburn'][Math.floor(Math.random()*4)];$('charHairStyle').value=['Shoulder-length and tied back','Long braid','Short and tousled','Neatly cropped','Long and loose'][Math.floor(Math.random()*5)];$('charNation').selectedIndex=Math.floor(Math.random()*$('charNation').options.length);updateRegions();$('charRegion').selectedIndex=Math.floor(Math.random()*$('charRegion').options.length);$('charUpbringing').selectedIndex=Math.floor(Math.random()*$('charUpbringing').options.length);$('charEducation').selectedIndex=Math.floor(Math.random()*$('charEducation').options.length);$('charOccupation').selectedIndex=Math.floor(Math.random()*$('charOccupation').options.length);document.querySelectorAll('.chip input').forEach(x=>x.checked=false);pickRandomChips('personalityChoices',4);pickRandomChips('strengthChoices',2);pickRandomChips('flawChoices',2);$('charGoal').value=['See more of the world','Become excellent at my trade','Support my family','Find a teacher worth following','Open a small business'][Math.floor(Math.random()*5)];updateBendingCompatibility();showCreatorStep(0);}
function pickRandomChips(id,count){const boxes=[...$(id).querySelectorAll('input')].sort(()=>Math.random()-.5);boxes.slice(0,count).forEach(x=>x.checked=true);}
function exportWorld(){if(!world)return;const blob=new Blob([JSON.stringify(world,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`${world.name.replace(/[^a-z0-9]+/gi,'-').toLowerCase()}-world-save-v03.json`;a.click();URL.revokeObjectURL(a.href);}
function importWorld(file){const r=new FileReader();r.onload=()=>{try{const imported=JSON.parse(r.result);if(!imported.id||!imported.clock||!Array.isArray(imported.events))throw new Error();world=migrateWorld(imported);saveWorld();showDashboard();$('saveStatus').textContent='Imported world loaded';}catch{alert('That file is not a valid Project Four Nations world save.');}};r.readAsText(file);}



const placeTemplates = [
  {key:'home',name:'Home',icon:'⌂',desc:'A familiar place to rest, eat, think, and spend time with the people who share your daily life.'},
  {key:'market',name:'Market Square',icon:'◈',desc:'Vendors, neighbors, travelers, and gossip collect here throughout the day.'},
  {key:'tea',name:'Tea House',icon:'♨',desc:'A warm public room where people linger longer than they planned and conversations travel faster than news.'},
  {key:'workshop',name:'Artisan Row',icon:'⚒',desc:'Workshops and small trades fill the street with hammering, sawing, clay dust, and practical errands.'},
  {key:'clinic',name:'Healer’s House',icon:'✚',desc:'A modest place for treatment, herbs, recovery, and quiet advice.'},
  {key:'training',name:'Training Yard',icon:'◎',desc:'An open practice ground used by benders, guards, athletes, and anyone trying to improve a physical skill.'},
  {key:'outskirts',name:'Town Outskirts',icon:'⌁',desc:'Fields, water, trails, and the beginning of the road beyond town. Travelers and animals pass through here.'},
  {key:'shrine',name:'Local Shrine',icon:'◇',desc:'A quiet spiritual place where residents leave offerings, meditate, remember the dead, or simply find a moment alone.'}
];
const townNpcRoles = ['Tea keeper','Market vendor','Courier','Carpenter','Local healer','Guard','Teacher','Fisher','Potter','Stable keeper','Cook','Herbalist'];
const townNpcNames = ['Lian','Ren','Aya','Batu','Nari','Jin','Hana','Bo','Sora','Tashi','Yuna','Kiri','Mina','Tao','Kenzo','Mei'];

function startingCurrency(wealth){return ({Struggling:8,Modest:18,Stable:35,Comfortable:70,Wealthy:150})[wealth]||25;}
function activeCharacter(){return world?.characters?.find(c=>c.id===world.activeCharacterId)||null;}
function currentSettlement(ch=activeCharacter()){if(!world||!ch)return null;return world.settlements.find(s=>s.id===ch.currentSettlementId)||world.settlements.find(s=>s.id===ch.homeSettlementId)||world.settlements[0]||null;}
function currentPlace(ch=activeCharacter()){const st=currentSettlement(ch);if(!st||!ch)return null;return st.places?.find(p=>p.key===ch.currentLocationKey)||st.places?.[0]||null;}
function ensureCharacterLifeState(ch){if(!ch)return; ch.needs=ch.needs||{energy:82,hunger:18,morale:70}; ch.currency=Number.isFinite(ch.currency)?ch.currency:startingCurrency(ch.wealth); ch.currentSettlementId=ch.currentSettlementId||null; ch.currentLocationKey=ch.currentLocationKey||'home'; ch.lifeStats=ch.lifeStats||{daysWorked:0,trainingSessions:0,socialMoments:0,placesExplored:0}; ch.localActivity=Array.isArray(ch.localActivity)?ch.localActivity:[]; ensurePossessionState(ch);}
function makeSchedule(homeKey,workKey){return {0:'home',1:'home',2:'home',3:'home',4:'home',5:'home',6:'home',7:'home',8:workKey,9:workKey,10:workKey,11:workKey,12:'market',13:workKey,14:workKey,15:workKey,16:workKey,17:'market',18:'tea',19:'tea',20:'home',21:'home',22:'home',23:'home'};}
function createTownNpc(settlement,role,index){const workMap={'Tea keeper':'tea','Market vendor':'market','Courier':'market','Carpenter':'workshop','Local healer':'clinic','Guard':'market','Teacher':'training','Fisher':'outskirts','Potter':'workshop','Stable keeper':'outskirts','Cook':'tea','Herbalist':'clinic'}; const roleKey=role||townNpcRoles[index%townNpcRoles.length]; return {id:uid('npc'),name:townNpcNames[(index+Math.floor(Math.random()*townNpcNames.length))%townNpcNames.length],role:roleKey,occupation:roleKey,age:19+Math.floor(Math.random()*42),active:true,settlementId:settlement.id,homeLocationKey:'home',schedule:makeSchedule('home',workMap[roleKey]||'market'),personality:[personalities[(index*3)%personalities.length],personalities[(index*3+5)%personalities.length]],goals:['Make a stable life here'],knowledge:{local:true},socialProfile:{romanceAvailable:Math.random()>.18,pace:['slow','natural','guarded'][Math.floor(Math.random()*3)],values:[personalities[(index+2)%personalities.length],personalities[(index+7)%personalities.length]]},relationship:{trust:20,respect:20,affection:10}};}
function ensureHomeSettlement(ch){if(!world||!ch)return null; ensureCharacterLifeState(ch); let town=ch.homeSettlementId&&world.settlements.find(s=>s.id===ch.homeSettlementId); if(!town){town=world.settlements.find(s=>s.isHome&&s.region===ch.region&&s.homeNation===ch.nation)||world.settlements.find(s=>s.region===ch.region&&s.homeNation===ch.nation&&!s.generatedFor);}
  if(!town){town={id:uid('settlement'),name:ch.region,region:ch.region,homeNation:ch.nation,era:world.era,description:`${ch.region} is home to ordinary families, tradespeople, travelers, and local traditions shaped by ${ch.nation}. It is not waiting for a hero; it is already busy living.`,createdAtWorldDate:worldDate(),places:placeTemplates.map(x=>({...x})),localNpcIds:[],economy:{foodPrice:2,teaPrice:1,roomPrice:5,workPay:6},notoriety:0}; world.settlements.push(town); for(let i=0;i<8;i++){const npc=createTownNpc(town,townNpcRoles[i],i);world.npcs.push(npc);town.localNpcIds.push(npc.id);} world.events.push(makeEvent('A hometown enters the simulation',`${town.name} is now a persistent settlement with residents, routines, work, and local opportunities.`));}
  ch.homeSettlementId=ch.homeSettlementId||town.id; town.isHome=true; ch.currentSettlementId=ch.currentSettlementId||town.id; if(!town.places.some(p=>p.key===ch.currentLocationKey))ch.currentLocationKey='home'; assignFamilyToTown(ch,town); ensureTownOpportunities(town); return town;}
function assignFamilyToTown(ch,town){(ch.familyIds||[]).forEach((id,i)=>{const n=world.npcs.find(x=>x.id===id);if(!n)return;n.settlementId=town.id;n.homeLocationKey='home';n.schedule=n.schedule||makeSchedule('home',i%2?'market':'workshop');if(!town.localNpcIds.includes(id))town.localNpcIds.push(id);}); const rels=world.relationships.filter(r=>r.a===ch.id||r.b===ch.id);rels.forEach(r=>{const oid=r.a===ch.id?r.b:r.a,n=world.npcs.find(x=>x.id===oid);if(n&&!n.settlementId){n.settlementId=town.id;n.schedule=n.schedule||makeSchedule('home','market');if(!town.localNpcIds.includes(n.id))town.localNpcIds.push(n.id);}});}
function npcLocation(npc){if(!npc)return null;return npc.schedule?.[world.clock.hour]||npc.homeLocationKey||'market';}
function presentNpcs(town,key){return (town.localNpcIds||[]).map(id=>world.npcs.find(n=>n.id===id)).filter(n=>n&&n.active&&npcLocation(n)===key);}
function clamp(n,min=0,max=100){return Math.max(min,Math.min(max,Math.round(n)));}
function applyNeeds(ch,{energy=0,hunger=0,morale=0}){ch.needs.energy=clamp(ch.needs.energy+energy);ch.needs.hunger=clamp(ch.needs.hunger+hunger);ch.needs.morale=clamp(ch.needs.morale+morale);}
function addLifeLog(ch,title,detail){const row={id:uid('life'),characterId:ch.id,title,detail,worldDate:worldDate(),hour:world.clock.hour};world.lifeLog.push(row);ch.localActivity.push(row.id);if(ch.localActivity.length>80)ch.localActivity=ch.localActivity.slice(-80);if(typeof captureVisualMoment==='function')captureVisualMoment(ch,title,detail,[]);}
function passTime(hours,ch,cost={energy:-2,hunger:3,morale:0}){applyNeeds(ch,{energy:(cost.energy||0)*hours,hunger:(cost.hunger||0)*hours,morale:(cost.morale||0)});advanceHours(hours);}
function travelTo(key){const ch=activeCharacter(),town=currentSettlement(ch);if(!ch||!town)return;if(ch.currentLocationKey===key)return;const place=town.places.find(p=>p.key===key);ch.currentLocationKey=key;applyNeeds(ch,{energy:-2,hunger:1});addLifeLog(ch,'Walked across town',`${ch.name} went to ${place.name}.`);advanceHours(1);}
function compatibilityScore(ch,npc){
  const a=(ch.personality||[]).map(x=>String(x).toLowerCase()),b=(npc.personality||[]).map(x=>String(x).toLowerCase());
  let score=48; a.forEach(t=>{if(b.includes(t))score+=7;});
  const complements=[['reserved','outgoing'],['patient','impulsive'],['disciplined','creative'],['curious','observant'],['compassionate','empathetic']];
  complements.forEach(([x,y])=>{if((a.includes(x)&&b.includes(y))||(a.includes(y)&&b.includes(x)))score+=5;});
  return clamp(score,20,95);
}
function normalizeRelationship(r,ch,npc){
  r.trust=r.trust??8;r.respect=r.respect??8;r.affection=r.affection??4;r.attraction=r.attraction??r.romanticInterest??0;r.tension=r.tension??0;r.compatibility=r.compatibility??compatibilityScore(ch,npc);r.closeness=r.closeness??Math.round((r.trust+r.affection)/2);r.sharedMemories=Array.isArray(r.sharedMemories)?r.sharedMemories:[];r.history=Array.isArray(r.history)?r.history:[];r.boundaries=r.boundaries||{romanceAllowed:r.type!=='family'};r.expectations=r.expectations||{commitment:'unspecified',communication:'moderate',independence:'balanced'};r.jealousy=Number(r.jealousy||0);r.security=Number(r.security??50);r.distanceDays=Number(r.distanceDays||0);r.lastMeaningfulContact=r.lastMeaningfulContact||null;r.breakups=Number(r.breakups||0);r.reconciliations=Number(r.reconciliations||0);r.npcInitiated=Array.isArray(r.npcInitiated)?r.npcInitiated:[];updateRelationshipStage(r,ch,npc);return r;
}
function updateRelationshipStage(r,ch,npc){
  if(r.type==='family'){r.stage=r.familyRole||'family';return r.stage;}
  const c=(r.closeness??Math.round(((r.trust||0)+(r.affection||0))/2));
  if(r.tension>=70&&r.trust<25)r.stage='estranged';
  else if(r.status==='romantic'||r.type==='romance')r.stage=r.commitment==='partner'?'partner':'romantic';
  else if(r.type==='rival'&&r.respect>=45)r.stage='friendly rival';
  else if(r.trust>=75&&r.affection>=70)r.stage='close friend';
  else if(r.trust>=52&&r.affection>=45)r.stage='friend';
  else if(r.trust>=28||c>=30)r.stage='familiar';
  else r.stage='acquaintance';
  return r.stage;
}
function relationshipWith(ch,npc){let r=world.relationships.find(x=>(x.a===ch.id&&x.b===npc.id)||(x.b===ch.id&&x.a===npc.id));if(!r){r={id:uid('rel'),a:ch.id,b:npc.id,type:'acquaintance',trust:8,respect:8,affection:4,attraction:0,tension:0,closeness:6,compatibility:compatibilityScore(ch,npc),sharedMemories:[],history:[],boundaries:{romanceAllowed:true},expectations:{commitment:'unspecified',communication:'moderate',independence:'balanced'},jealousy:0,security:50,distanceDays:0,lastMeaningfulContact:null,breakups:0,reconciliations:0,npcInitiated:[],status:'active',stage:'acquaintance'};world.relationships.push(r);ch.relationshipIds=ch.relationshipIds||[];ch.relationshipIds.push(r.id);}return normalizeRelationship(r,ch,npc);}
function rememberRelationship(r,text,importance='small'){r.sharedMemories=r.sharedMemories||[];r.sharedMemories.push(text);if(r.sharedMemories.length>40)r.sharedMemories=r.sharedMemories.slice(-40);r.history=r.history||[];r.history.push({worldDate:worldDate(),text,importance});if(r.history.length>80)r.history=r.history.slice(-80);}
function relationshipDrift(r,ch,npc){normalizeRelationship(r,ch,npc);const age=(r.history||[]).length;if(age>0&&Math.random()<.08){r.affection=clamp(r.affection-1);r.closeness=clamp(r.closeness-1);}updateRelationshipStage(r,ch,npc);}
function socialAction(npcId,kind){const ch=activeCharacter(),npc=world.npcs.find(n=>n.id===npcId);if(!ch||!npc)return;const r=relationshipWith(ch,npc);const compat=r.compatibility||50;let msg='',hours=1;
  if(kind==='talk'){r.trust=clamp(r.trust+3+(compat>65?1:0));r.respect=clamp(r.respect+2);r.affection=clamp(r.affection+2);r.tension=clamp(r.tension-2);msg=`${ch.name} and ${npc.name} spent time talking without forcing the moment.`;}
  if(kind==='spend'){r.trust=clamp(r.trust+4);r.affection=clamp(r.affection+5);r.closeness=clamp((r.closeness||0)+6);r.tension=clamp(r.tension-2);hours=2;msg=`${ch.name} and ${npc.name} deliberately spent part of the day together.`;}
  if(kind==='confide'){if(r.trust<35){r.tension=clamp(r.tension+4);r.trust=clamp(r.trust+1);msg=`${npc.name} listens, but the relationship is not yet close enough for the moment to feel entirely comfortable.`;}else{r.trust=clamp(r.trust+7);r.affection=clamp(r.affection+4);r.closeness=clamp((r.closeness||0)+7);msg=`A more vulnerable conversation deepens the trust between ${ch.name} and ${npc.name}.`;}}
  if(kind==='argue'){r.tension=clamp(r.tension+14);r.trust=clamp(r.trust-5);r.affection=clamp(r.affection-4);msg=`A disagreement leaves real tension between ${ch.name} and ${npc.name}.`;}
  if(kind==='reconcile'){if(r.tension<8){msg=`There is not much conflict to repair, but ${npc.name} appreciates the gesture.`;r.respect=clamp(r.respect+2);}else{r.tension=clamp(r.tension-16);r.trust=clamp(r.trust+5);r.respect=clamp(r.respect+4);msg=`The attempt to repair things helps, though trust may still need time.`;}}
  if(kind==='flirt'){ensureUiSettings();if(world.uiSettings.romance==='off'){alert('Romance is disabled in Settings.');return;}const permitted=ch.romancePreference!=='friends-only'&&r.type!=='family'&&npc.socialProfile?.romanceAvailable!==false;if(!permitted){r.tension=clamp(r.tension+2);msg=`${npc.name} does not respond romantically, and the moment settles back into ordinary conversation.`;}else if(r.trust<25||r.affection<20){r.tension=clamp(r.tension+4);msg=`The romantic signal lands awkwardly; there is not enough connection yet for it to feel natural.`;}else{const gain=Math.max(1,Math.round((compat-35)/12));r.attraction=clamp(r.attraction+gain);r.affection=clamp(r.affection+2);msg=`${npc.name} notices the romantic tone. Whether it grows into anything will depend on mutual history and compatibility.`;}}
  if(kind==='express'){ensureUiSettings();if(world.uiSettings.romance==='off'){alert('Romance is disabled in Settings.');return;}const permitted=ch.romancePreference!=='friends-only'&&r.type!=='family'&&npc.socialProfile?.romanceAvailable!==false;if(!permitted){msg=`${npc.name} is clear that they do not want a romantic relationship. The boundary is recorded.`;r.boundaries.romanceAllowed=false;r.attraction=0;r.tension=clamp(r.tension+3);}else if(r.trust>=55&&r.affection>=55&&r.attraction>=25&&compat>=45){r.type='romance';r.status='romantic';r.commitment='dating';r.affection=clamp(r.affection+6);r.trust=clamp(r.trust+3);msg=`The feeling is mutual enough to begin exploring a romantic relationship. It is a beginning, not an ending.`;}else{r.tension=clamp(r.tension+5);r.respect=clamp(r.respect+1);msg=`${npc.name} hears the feelings honestly, but the relationship is not ready to become romantic.`;}}
  r.lastMeaningfulContact=worldDate();r.distanceDays=0;r.security=clamp(r.security+(kind==='argue'?-5:kind==='reconcile'?6:2));r.closeness=clamp(Math.round(((r.trust||0)+(r.affection||0)+(100-(r.tension||0)))/3));updateRelationshipStage(r,ch,npc);rememberRelationship(r,`${kind}: ${msg}`,kind==='express'?'major':'small');npcRemember(npc,'shared interaction',msg,{aboutId:ch.id,importance:['confide','express','argue'].includes(kind)?2:1,source:'experienced directly'});ch.lifeStats.socialMoments=(ch.lifeStats.socialMoments||0)+1;applyNeeds(ch,{energy:-3*hours,hunger:2*hours,morale:kind==='argue'?-5:6});addLifeLog(ch,`${npc.name}: ${r.stage}`,msg);advanceHours(hours);
}
function socialize(npcId){socialAction(npcId,'talk');}


function ensureRelationshipSimulation(){
 if(!world)return;world.relationshipSimulation=world.relationshipSimulation||{events:[],lastDailyTick:null,lastYearTick:null};
 world.relationshipSimulation.events=Array.isArray(world.relationshipSimulation.events)?world.relationshipSimulation.events:[];
}
function relationshipEvent(ch,npc,r,title,detail){
 ensureRelationshipSimulation();const ev={id:uid('rse'),characterId:ch.id,npcId:npc.id,relationshipId:r.id,title,detail,worldDate:worldDate()};world.relationshipSimulation.events.push(ev);if(world.relationshipSimulation.events.length>180)world.relationshipSimulation.events.shift();rememberRelationship(r,detail,'major');addLifeLog(ch,title,detail);
}
function datingAction(npcId,kind){
 const ch=activeCharacter(),npc=personById(npcId);ensureUiSettings();if(world.uiSettings.romance==='off'){alert('Romance is disabled in Settings.');return;}if(!ch||!npc)return;const r=relationshipWith(ch,npc);
 if(ch.age<18||Number(npc.age||0)<18){alert('Adult dating and romance options require both characters to be at least 18.');return;}
 if(r.type==='family'||r.boundaries?.romanceAllowed===false){alert('This relationship does not allow romance.');return;}
 let msg='',hours=2;
 if(kind==='date'){
   if(!(r.status==='romantic'||r.type==='romance')){alert('You are not currently dating.');return;}
   r.affection=clamp(r.affection+6);r.trust=clamp(r.trust+4);r.attraction=clamp(r.attraction+3);r.security=clamp(r.security+5);r.tension=clamp(r.tension-4);msg=`${ch.name} and ${npc.name} spent intentional time together and learned more about what daily life feels like as a couple.`;
 }
 if(kind==='expectations'){
   const commitment=prompt('Relationship expectation: casual, dating, committed, marriage-minded, or independent?','committed');if(!commitment)return;
   r.expectations.commitment=commitment;r.respect=clamp(r.respect+3);r.trust=clamp(r.trust+4);msg=`${ch.name} and ${npc.name} talked openly about relationship expectations. Current expectation: ${commitment}.`;
 }
 if(kind==='space'){
   r.security=clamp(r.security+2);r.tension=clamp(r.tension-3);r.expectations.independence='high';msg=`${ch.name} and ${npc.name} agreed to give one another more personal space without treating distance as rejection.`;
 }
 if(kind==='intimacy'){
   if(!(r.status==='romantic'||r.type==='romance')){alert('Intimacy is only available in an established adult romantic relationship.');return;}
   if(r.trust<50||r.affection<50){alert('The relationship does not yet have enough trust for that level of intimacy.');return;}
   r.affection=clamp(r.affection+5);r.trust=clamp(r.trust+4);r.security=clamp(r.security+6);msg=`${ch.name} and ${npc.name} shared a private adult moment together. The details remain personal, but the emotional significance is remembered.`;hours=3;
 }
 if(kind==='breakup'){
   if(!(r.status==='romantic'||r.type==='romance')){alert('This is not currently a romantic relationship.');return;}
   r.status='ended';r.type='former romance';r.commitment='ended';r.stage='ex-partner';r.breakups++;r.affection=clamp(r.affection-10);r.trust=clamp(r.trust-8);r.tension=clamp(r.tension+18);r.security=clamp(r.security-20);if(ch.partnerId===npc.id)ch.partnerId=null;if(npc.partnerId===ch.id)npc.partnerId=null;msg=`${ch.name} and ${npc.name} ended their romantic relationship. Their shared history remains and future reconciliation is possible, but not guaranteed.`;
 }
 if(kind==='reconcile-romance'){
   if(r.type!=='former romance'&&r.stage!=='ex-partner'){alert('There is no ended romance to reconcile.');return;}
   if(r.trust<35||r.tension>65){alert('Too much unresolved distrust or tension remains for reconciliation right now.');return;}
   r.type='romance';r.status='romantic';r.commitment='dating';r.stage='romantic';r.reconciliations++;r.trust=clamp(r.trust+5);r.affection=clamp(r.affection+4);r.tension=clamp(r.tension-12);r.security=clamp(r.security+4);msg=`${ch.name} and ${npc.name} cautiously decided to try the relationship again, knowing the previous breakup still matters.`;
 }
 r.lastMeaningfulContact=worldDate();r.distanceDays=0;relationshipEvent(ch,npc,r,'Relationship milestone',msg);applyNeeds(ch,{energy:-2*hours,hunger:2*hours,morale:kind==='breakup'?-8:5});advanceHours(hours);
}
function relationshipJealousyCheck(ch,r,npc){
 if(r.type!=='romance'&&r.status!=='romantic')return;const otherRomances=relationshipPeople(ch).filter(x=>x.r.id!==r.id&&(x.r.status==='romantic'||x.r.type==='romance'));if(!otherRomances.length){r.jealousy=clamp(r.jealousy-1);return;}
 const independence=r.expectations?.independence||'balanced';const base=independence==='high'?1:independence==='low'?5:3;r.jealousy=clamp(r.jealousy+base);if(r.jealousy>45){r.tension=clamp(r.tension+3);r.security=clamp(r.security-3);}
}
function npcInitiatedRelationshipEvents(){
 if(!world)return;ensureRelationshipSimulation();const stamp=`${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}`;if(world.relationshipSimulation.lastDailyTick===stamp)return;world.relationshipSimulation.lastDailyTick=stamp;
 world.characters.filter(c=>c.alive!==false).forEach(ch=>{relationshipPeople(ch).forEach(({r,n})=>{normalizeRelationship(r,ch,n);if(r.type==='family')return;
   const samePlace=(n.currentSettlementId||n.settlementId||n.homeSettlementId)===ch.currentSettlementId;
   if(!samePlace){r.distanceDays++;if(r.distanceDays%4===0){r.closeness=clamp(r.closeness-1);if(r.expectations.communication==='high')r.tension=clamp(r.tension+1);}}
   else if(r.distanceDays>0)r.distanceDays=Math.max(0,r.distanceDays-1);
   relationshipJealousyCheck(ch,r,n);
   if(ch.age>=18&&Number(n.age||0)>=18&&r.boundaries?.romanceAllowed!==false&&r.status!=='romantic'&&r.type!=='former romance'&&r.trust>=60&&r.affection>=55&&r.attraction>=30&&Math.random()<.025){
     r.npcInitiated.push({worldDate:worldDate(),type:'romantic-interest'});r.attraction=clamp(r.attraction+3);r.tension=clamp(r.tension+1);world.relationshipSimulation.events.push({id:uid('rse'),characterId:ch.id,npcId:n.id,relationshipId:r.id,title:'NPC-initiated interest',detail:`${n.name} has begun showing clearer romantic interest in ${ch.name}.`,worldDate:worldDate()});
   }
   if(r.status==='romantic'&&r.tension>75&&r.trust<30&&Math.random()<.08){
     r.status='ended';r.type='former romance';r.stage='ex-partner';r.commitment='ended';r.breakups++;if(ch.partnerId===n.id)ch.partnerId=null;if(n.partnerId===ch.id)n.partnerId=null;world.relationshipSimulation.events.push({id:uid('rse'),characterId:ch.id,npcId:n.id,relationshipId:r.id,title:'NPC ended relationship',detail:`${n.name} ended the romantic relationship after prolonged unresolved tension.`,worldDate:worldDate()});
   }
 });});
}
function relationshipYearTick(){
 if(!world)return;ensureRelationshipSimulation();if(world.relationshipSimulation.lastYearTick===world.clock.year)return;world.relationshipSimulation.lastYearTick=world.clock.year;
 world.relationships.forEach(r=>{const a=personById(r.a),b=personById(r.b);if(!a||!b)return;normalizeRelationship(r,a,b);
   if(r.status==='romantic'){r.security=clamp(r.security+(r.tension<20?3:-2));if(r.security>70&&r.trust>70&&r.affection>70&&r.commitment==='dating')r.commitment='committed';}
   if(r.distanceDays>45){r.affection=clamp(r.affection-3);r.closeness=clamp(r.closeness-4);}
 }); 
}
function renderRelationshipSimulationLog(ch){
 if(!$('relationshipSimulationLog'))return;ensureRelationshipSimulation();const rows=world.relationshipSimulation.events.filter(x=>x.characterId===ch.id).slice().reverse().slice(0,20);$('relationshipSimulationLog').innerHTML=rows.length?rows.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">No major NPC-initiated relationship developments yet.</p>';
}

function doLocalAction(action){const ch=activeCharacter(),town=currentSettlement(ch);if(!ch||!town)return;const loc=ch.currentLocationKey;
  if(action==='rest'){applyNeeds(ch,{energy:28,hunger:6,morale:5});addLifeLog(ch,'Rested','A few quiet hours restored some energy.');advanceHours(3);}
  if(action==='eat'){const cost=town.economy.foodPrice;if(ch.currency<cost){addLifeLog(ch,'Could not afford a meal','There was not enough money for a prepared meal.');saveWorld();return;}ch.currency-=cost;applyNeeds(ch,{energy:3,hunger:-38,morale:4});addLifeLog(ch,'Ate a meal',`${ch.name} spent ${cost} coins on something filling.`);advanceHours(1);}
  if(action==='work'){const pay=town.economy.workPay+(ch.wealth==='Struggling'?1:0);ch.currency+=pay;ch.lifeStats.daysWorked++;applyNeeds(ch,{energy:-20,hunger:18,morale:-1});addLifeLog(ch,'Worked a shift',`${ch.name} completed ordinary work as a ${ch.occupation} and earned ${pay} coins.`);advanceHours(5);}
  if(action==='train'){practiceTraining('fundamentals');}
  if(action==='meditate'){applyNeeds(ch,{energy:5,hunger:3,morale:12});addLifeLog(ch,'Quiet reflection',`${ch.name} spent time slowing down and paying attention to the world around them.`);advanceHours(1);}
  if(action==='explore'){ch.lifeStats.placesExplored++;applyNeeds(ch,{energy:-9,hunger:7,morale:7});const finds=['a weathered trail marker','a tucked-away food stall','an old carving locals rarely mention','a shortcut between two streets','animal tracks near the road'];const found=finds[Math.floor(Math.random()*finds.length)];addLifeLog(ch,'Explored nearby',`${ch.name} wandered without an urgent goal and noticed ${found}.`); if(Math.random()<.55)createOpportunity(town);advanceHours(2);}
  if(action==='tea'){const cost=town.economy.teaPrice;if(ch.currency>=cost){ch.currency-=cost;applyNeeds(ch,{energy:2,hunger:-6,morale:6});addLifeLog(ch,'Stopped for tea',`${ch.name} spent ${cost} coin and listened to the room for a while.`);if(Math.random()<.6)createOpportunity(town);advanceHours(1);}else{addLifeLog(ch,'Skipped tea','Not enough money today.');saveWorld();}}
}
function opportunityTemplates(){return [
 ['Missing delivery','A courier is looking for someone willing to help find a package that never reached its destination.','market',5],
 ['Extra hands needed','A local craftsperson needs help finishing ordinary work before sunset.','workshop',6],
 ['Animal near the road','Residents have noticed a frightened hybrid animal lingering outside town. No one knows whether it is lost or wild.','outskirts',4],
 ['Open practice session','A local instructor is letting residents observe or join a basic training session.','training',3],
 ['Herbs running low','The healer needs someone to gather or purchase common supplies before the next patient arrives.','clinic',5],
 ['An old shrine needs care','Wind and weather have damaged part of the local shrine, and someone has begun asking neighbors for help.','shrine',4],
 ['Traveler with a rumor','A traveler at the tea house claims something unusual happened on the road. Their version may not be completely reliable.','tea',2]
 ];}
function createOpportunity(town){const opts=opportunityTemplates(),t=opts[Math.floor(Math.random()*opts.length)];const duplicate=world.opportunities.find(o=>o.settlementId===town.id&&o.title===t[0]&&o.status==='open');if(duplicate)return duplicate;const o={id:uid('opp'),settlementId:town.id,title:t[0],description:t[1],locationKey:t[2],reward:t[3],status:'open',createdAtWorldDate:worldDate(),expiresDay:world.clock.day+5};world.opportunities.push(o);return o;}
function ensureTownOpportunities(town){const open=world.opportunities.filter(o=>o.settlementId===town.id&&o.status==='open');while(open.length+world.opportunities.filter(o=>o.settlementId===town.id&&o.status==='open'&&!open.includes(o)).length<2){createOpportunity(town);if(world.opportunities.filter(o=>o.settlementId===town.id&&o.status==='open').length>=2)break;}}
function resolveOpportunity(id){const ch=activeCharacter(),town=ensureHomeSettlement(ch),o=world.opportunities.find(x=>x.id===id);if(!ch||!o||o.status!=='open')return;if(ch.currentLocationKey!==o.locationKey){travelTo(o.locationKey);return;}o.status='resolved';o.resolvedBy=ch.id;o.resolvedAt=worldDate();ch.currency+=o.reward;applyNeeds(ch,{energy:-9,hunger:7,morale:9});const place=town.places.find(p=>p.key===o.locationKey);addLifeLog(ch,'Helped with: '+o.title,`${ch.name} followed through on a local problem at ${place?.name||'town'} and earned ${o.reward} coins. This is intentionally a simple rules-based resolution until the freeform AI-GM arrives in Sprint 2.4.`);world.events.push(makeEvent('A small local problem was resolved',`${ch.name} helped with “${o.title}” in ${town.name}.`,[ch.id]));advanceHours(2);}
function refreshOpportunity(){const ch=activeCharacter(),town=currentSettlement(ch);if(!ch)return;createOpportunity(town);applyNeeds(ch,{energy:-1,morale:1});addLifeLog(ch,'Listened for local news','A little time spent listening surfaced another possible thread in town.');advanceHours(1);}
function actionsForLocation(key){const common=[['eat','Eat a meal','1 hour · costs coins'],['work','Work a shift','5 hours · earn coins']];const special={home:[['rest','Rest','3 hours · restore energy'],['meditate','Reflect quietly','1 hour · restore morale']],market:[['explore','Browse the market','2 hours · discoveries possible'],['tea','Buy something warm','1 hour · hear rumors']],tea:[['tea','Sit down for tea','1 hour · hear rumors'],['meditate','Sit quietly','1 hour · observe the room']],workshop:[['work','Take on work','5 hours · earn coins'],['explore','Look around the workshops','2 hours']],clinic:[['meditate','Offer quiet help','1 hour'],['explore','Ask about needed supplies','2 hours']],training:[['train','Practice','2 hours · improve experience'],['meditate','Center yourself','1 hour']],outskirts:[['explore','Explore beyond town','2 hours · opportunities possible'],['train','Practice outdoors','2 hours']],shrine:[['meditate','Meditate','1 hour · restore morale'],['explore','Study the shrine grounds','2 hours']]};return [...(special[key]||[]),...common].slice(0,4);}

// --- Sprint 3.9: AI Story Director & Freeform Action pipeline ---
const gmActionWords = {
  rest:['rest','sleep','nap','lie down','take a break'],
  eat:['eat','meal','food','breakfast','lunch','dinner','snack'],
  drink:['tea','drink','cup'],
  work:['work','shift','job','help at work','earn money'],
  train:['train','practice','spar','exercise','drill'],
  meditate:['meditate','reflect','breathe','center myself','pray'],
  explore:['explore','look around','investigate','search','wander','inspect'],
  talk:['talk','ask','speak','chat','tell','question','greet','introduce'],
  travel:['go to','walk to','head to','travel to','move to','visit'],
  help:['help','assist','volunteer','offer to help'],
  steal:['steal','pickpocket','take without paying','rob'],
  fight:['attack','punch','kick','fight','strike','hit'],
  bend:['bend','waterbend','earthbend','firebend','airbend','bending']
};
function normalizeText(v){return String(v||'').toLowerCase().replace(/[^a-z0-9\s'-]/g,' ').replace(/\s+/g,' ').trim();}
function containsAny(text,arr){return arr.some(x=>text.includes(x));}
function inferIntent(text){
  const t=normalizeText(text); let best='improvise';
  for(const [intent,words] of Object.entries(gmActionWords)){if(containsAny(t,words)){best=intent;break;}}
  return {intent:best,text:t};
}
function relevantSkillScore(ch,intent){
  const base=35;
  const p=(ch.personality||[]).map(x=>String(x).toLowerCase());
  let score=base;
  if(intent==='talk' && (p.includes('outgoing')||p.includes('empathetic')||p.includes('compassionate')))score+=14;
  if(intent==='explore' && (p.includes('curious')||p.includes('observant')||p.includes('adventurous')))score+=12;
  if(intent==='fight'||intent==='train')score+=Math.min(18,(ch.lifeStats?.trainingSessions||0)*2);
  if(intent==='bend' && ch.bending?.element!=='none')score+=12;
  if(intent==='work')score+=Math.min(15,(ch.lifeStats?.daysWorked||0));
  if(ch.needs?.energy<25)score-=18;
  if(ch.needs?.hunger>80)score-=12;
  return Math.max(5,Math.min(90,score));
}
function findMentionedNpc(text,present){const t=normalizeText(text);return present.find(n=>t.includes(normalizeText(n.name)))||null;}
function findMentionedPlace(text,town){const t=normalizeText(text);return town.places.find(p=>t.includes(normalizeText(p.name))||t.includes(normalizeText(p.key)))||null;}
function checkFeasibility(ch,town,place,present,parsed){
  const reasons=[]; let difficulty=45; let allowed=true;
  if(parsed.intent==='bend' && ch.bending?.element==='none'){allowed=false;reasons.push('This character is a nonbender.');}
  if((parsed.intent==='fight'||parsed.intent==='steal') && present.length===0){difficulty+=10;reasons.push('There is no obvious person here matching that action.');}
  if(parsed.intent==='rest' && ch.currentLocationKey!=='home')difficulty+=10;
  if(parsed.intent==='work' && !['market','workshop','tea','clinic','outskirts','training'].includes(ch.currentLocationKey))difficulty+=10;
  if(parsed.intent==='travel' && !findMentionedPlace(parsed.text,town)){reasons.push('No specific known destination was recognized.');difficulty+=10;}
  if(parsed.intent==='help'){const open=world.opportunities.filter(o=>o.settlementId===town.id&&o.status==='open'&&o.locationKey===ch.currentLocationKey);if(!open.length){difficulty+=12;reasons.push('No obvious local problem is currently active here.');}}
  if(ch.needs.energy<10 && ['fight','train','bend','explore','work'].includes(parsed.intent)){difficulty+=25;reasons.push('Exhaustion makes this much harder.');}
  return {allowed,difficulty:Math.max(10,Math.min(90,difficulty)),reasons};
}
function rollOutcome(score,difficulty){
  const roll=1+Math.floor(Math.random()*100); const margin=(score+roll/2)-difficulty;
  if(margin>=45)return {tier:'critical-success',label:'Exceptional success',roll};
  if(margin>=22)return {tier:'success',label:'Success',roll};
  if(margin>=5)return {tier:'success-cost',label:'Success with a cost',roll};
  if(margin>=-12)return {tier:'partial',label:'Partial success',roll};
  if(margin>=-30)return {tier:'failure-opportunity',label:'Failure with an opening',roll};
  return {tier:'failure',label:'Failure',roll};
}
function localNarration(ctx){
  const {ch,place,parsed,outcome,targetNpc,feasibility}=ctx;
  const name=targetNpc?.name;
  const intros={
    'critical-success':`The idea comes together better than ${ch.name} could reasonably have expected.`,
    'success':`${ch.name}'s approach works.`,
    'success-cost':`${ch.name} manages it, though not without a small price.`,
    'partial':`Part of the idea works, but the situation refuses to cooperate completely.`,
    'failure-opportunity':`It does not work the way ${ch.name} intended, but the attempt reveals another possibility.`,
    'failure':`${ch.name} tries, but the attempt does not succeed.`
  };
  let detail='';
  if(parsed.intent==='talk')detail=name?`${name} gives the conversation real attention and responds according to the relationship already between them.`:`The words draw a response from the people close enough to hear, but no particular resident was singled out.`;
  else if(parsed.intent==='travel')detail=`The attempt is grounded in the streets and paths around ${place.name}; distance and time still matter.`;
  else if(parsed.intent==='bend')detail=`The motion draws on ${bendingLabel(ch.bending.element).toLowerCase()} training rather than granting a technique the character has never learned.`;
  else if(parsed.intent==='fight')detail=`No cinematic immunity protects anyone here. Position, fatigue, witnesses, and consequences all remain real.`;
  else if(parsed.intent==='steal')detail=`Hands, eyes, witnesses, ownership, and local law all matter; success would still create social and legal risk.`;
  else if(parsed.intent==='help')detail=`The offer connects to whatever ordinary need is actually present here rather than creating a heroic emergency out of nowhere.`;
  else detail=`The attempt plays out in ${place.name}, shaped by the current time, weather, energy, and what is actually nearby.`;
  const caveat=feasibility.reasons.length?` ${feasibility.reasons[0]}`:'';
  return `${intros[outcome.tier]} ${detail}${caveat}`;
}

function storyDirectorContext(ctx){
 const {ch,town,place,present,targetNpc}=ctx;ensureFactionState();ensureEconomyState();ensureSpiritState();ensureNpcSimulation();
 const localRumors=(world.rumors||[]).filter(r=>r.settlementId===town.id).slice(-8);
 const openOpps=(world.opportunities||[]).filter(o=>o.settlementId===town.id&&o.status==='open').slice(0,6);
 const factions=localFactions(ch).map(f=>({name:f.name,type:f.type,reputation:factionRep(ch,f.id),member:ch.factions.memberships.includes(f.id),power:f.power}));
 const economy=settlementEconomy(town.id),disturbances=world.spiritState.disturbances.filter(d=>d.settlementId===town.id&&!d.resolved);
 const target=targetNpc?{id:targetNpc.id,name:targetNpc.name,role:targetNpc.role||targetNpc.occupation,personality:targetNpc.personality,goal:targetNpc.goal,relationship:relationshipWith(ch,targetNpc),knowledge:npcKnowledgeContext(targetNpc,ch),npcRelations:targetNpc.npcRelations}:null;
 return {era:world.era,historyMode:world.historyMode,date:worldDate(),hour:world.clock.hour,weather:world.environment.weather,settlement:{id:town.id,name:town.name,prosperity:economy.prosperity,damage:economy.damage},place:{key:place.key,name:place.name,description:place.desc},character:{name:ch.name,nation:ch.nation,occupation:ch.occupation,bending:ch.bending,needs:ch.needs,currency:ch.currency,training:ch.training?{mastery:ch.training.mastery,known:ch.training.known,style:ch.training.style}:null,spirituality:ch.spirituality,factions:ch.factions},target,nearby:present.map(n=>({id:n.id,name:n.name,role:n.role||n.occupation,personality:n.personality,goal:n.goal,knowledge:npcKnowledgeContext(n,ch)})),rumors:localRumors,opportunities:openOpps,factions,spiritualDisturbances:disturbances,economicConditions:{prosperity:economy.prosperity,housing:economy.housing,infrastructure:economy.infrastructure,shortages:economyGoods.filter(g=>economy.stocks[g.id]<18).map(g=>g.name)},recentWorldEvents:(world.events||[]).slice(-8),recentDirectorMemory:(world.storyDirector?.memory||[]).slice(-10),contentSettings:world.uiSettings};
}
function directorReward(ctx){const ch=ctx.ch;ensureBalanceState();world.storyDirector=world.storyDirector||{threads:[],rewards:[],memory:[],directorEvents:[],streaks:{}};const key=ctx.parsed.intent,st=world.storyDirector.streaks;st[key]=(st[key]||0)+1;let reward=null;const good=['critical-success','success'].includes(ctx.outcome.tier),mixed=ctx.outcome.tier==='success-cost'||ctx.outcome.tier==='partial',used=dailyProgress(ch,'story'),eligible=used<10;if(good&&eligible&&['talk','help','explore','meditate','train','bend','work'].includes(key)){const raw=key==='train'||key==='bend'?2:1,insight=Math.max(1,Math.round(raw*balanceProfile().story));if(ch.training)ch.training.insight+=insight;addDailyProgress(ch,'story',insight);reward={type:'insight',amount:insight,label:`+${insight} insight`};}if(good&&eligible&&key==='help'&&Math.random()<.2){const coins=Math.max(1,Math.round(2*balanceProfile().story));ch.currency+=coins;addDailyProgress(ch,'story',coins);reward={type:'community',amount:coins,label:`+${coins} community reward coins`};}if((good||mixed)&&st[key]===4){reward={type:'milestone',amount:1,label:`New ${key} approach milestone`};world.storyDirector.threads.push({id:uid('thread'),characterId:ch.id,title:`Growing through ${key}`,status:'active',progress:1,createdAt:worldDate()});st[key]=0;}if(reward)world.storyDirector.rewards.push({id:uid('reward'),characterId:ch.id,worldDate:worldDate(),intent:key,...reward});return reward;}
function rememberDirectorAction(ctx,narration,reward){
 const mem={id:uid('sdm'),characterId:ctx.ch.id,worldDate:worldDate(),location:ctx.place.name,action:ctx.rawAction,intent:ctx.parsed.intent,outcome:ctx.outcome.label,targetNpcId:ctx.targetNpc?.id||null,narration:narration.slice(0,700),reward:reward?.label||null};world.storyDirector.memory.push(mem);if(world.storyDirector.memory.length>120)world.storyDirector.memory.shift();
}
function enrichLocalNarration(ctx,base){
 const c=storyDirectorContext(ctx),npc=ctx.targetNpc,parts=[base];
 if(npc){const rel=relationshipWith(ctx.ch,npc),known=(npc.knowledge?.rumors||[]).length;parts.push(`${npc.name}'s reaction is filtered through ${rel.trust||0} trust, ${rel.respect||0} respect, and what they actually know${known?` (${known} remembered rumor${known===1?'':'s'})`:''}.`);}
 if(c.economicConditions.shortages.length)parts.push(`${ctx.town.name} is currently short on ${c.economicConditions.shortages.slice(0,2).join(' and ')}, which colors ordinary conversation and prices.`);
 if(c.spiritualDisturbances.length&&['explore','meditate','talk'].includes(ctx.parsed.intent))parts.push(`There is also an unresolved spiritual unease in the area, though that does not mean everyone understands its cause.`);
 if(ctx.ch.factions){const wanted=ctx.ch.factions.wanted?.[ctx.town.id]||0;if(wanted>0)parts.push(`Local authorities have reason to pay attention to ${ctx.ch.name}, so conspicuous choices carry extra risk.`);}
 return parts.join(' ');
}

async function connectedNarration(context){
  const endpoint=world.gmSettings?.endpoint||'/api/gm',timeoutMs=Math.max(5000,Math.min(60000,Number(world.gmSettings?.timeoutMs||30000)));
  const payload={version:2,requestType:'narrate_resolved_action',context:{...storyDirectorContext(context),action:context.rawAction,resolution:{intent:context.parsed.intent,outcome:context.outcome.tier,label:context.outcome.label,allowed:context.feasibility.allowed,reasons:context.feasibility.reasons,score:context.score,difficulty:context.feasibility.difficulty},directives:['Do not override the resolved outcome.','Do not grant unearned powers, items, knowledge, relationships, or canon importance.','Keep the player an ordinary person in the world unless simulation state establishes otherwise.','NPCs may only reveal information in their supplied personal memory/knowledge or plausible local public knowledge. They are not omniscient.','NPC dialogue should reflect remembered promises, secrets, suspected lies, prior treatment, relationship tension, and personality when relevant.','Respect supplied content settings. Adult intimate content remains non-explicit.','Return narration only.']}};
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),timeoutMs);
  try{
    const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','X-PFN-Client':'5.2'},body:JSON.stringify(payload),signal:controller.signal});
    if(!res.ok){let detail='';try{detail=(await res.json())?.error||''}catch{}throw new Error(`GM endpoint returned ${res.status}${detail?`: ${detail}`:''}`);}
    const data=await res.json();if(!data||typeof data.narration!=='string')throw new Error('GM endpoint did not return narration');
    world.aiConnection={status:'connected',lastChecked:new Date().toISOString(),lastError:null,serverModel:data.model||world.aiConnection?.serverModel||null,traceId:data.traceId||null};
    return data.narration.slice(0,4000);
  }finally{clearTimeout(timer);}
}

function applyFreeformConsequences(ctx){
  const {ch,town,parsed,outcome,targetNpc}=ctx; const good=['critical-success','success'].includes(outcome.tier); const mixed=['success-cost','partial'].includes(outcome.tier);
  let hours=1;
  if(parsed.intent==='rest'){hours=2;applyNeeds(ch,{energy:good?22:12,hunger:5,morale:4});}
  else if(parsed.intent==='eat'){const cost=town.economy.foodPrice;if(ch.currency>=cost){ch.currency-=cost;applyNeeds(ch,{hunger:good?-34:-22,morale:3});}else applyNeeds(ch,{morale:-2});}
  else if(parsed.intent==='drink'){const cost=town.economy.teaPrice;if(ch.currency>=cost){ch.currency-=cost;applyNeeds(ch,{hunger:-5,morale:good?8:4});}}
  else if(parsed.intent==='work'){hours=4;if(good||mixed){const pay=Math.max(2,town.economy.workPay-(mixed?2:0));ch.currency+=pay;ch.lifeStats.daysWorked++;}applyNeeds(ch,{energy:-16,hunger:14,morale:mixed?-2:1});}
  else if(parsed.intent==='train'||parsed.intent==='bend'){hours=2;if(good||mixed){ch.lifeStats.trainingSessions++;gainTrainingXp(ch,good?8:4,'Freeform practice');}applyNeeds(ch,{energy:-14,hunger:9,morale:good?6:1});}
  else if(parsed.intent==='meditate'){applyNeeds(ch,{energy:3,hunger:2,morale:good?12:6});}
  else if(parsed.intent==='explore'){hours=2;if(good||mixed){ch.lifeStats.placesExplored++;if(good&&Math.random()<.45)createOpportunity(town);}applyNeeds(ch,{energy:-8,hunger:6,morale:good?7:2});}
  else if(parsed.intent==='talk'){if(targetNpc){const r=relationshipWith(ch,targetNpc);const delta=good?5:mixed?2:-1;r.trust=clamp((r.trust||0)+delta);r.respect=clamp((r.respect||0)+(good?3:mixed?1:0));r.affection=clamp((r.affection||0)+(good?2:mixed?1:0));r.sharedMemories=r.sharedMemories||[];r.sharedMemories.push(`${outcome.label}: conversation at ${worldDate()}`);ch.lifeStats.socialMoments++;}applyNeeds(ch,{energy:-2,hunger:2,morale:good?6:1});}
  else if(parsed.intent==='travel'){const dest=findMentionedPlace(parsed.text,town);if(dest){hours=1;ch.currentLocationKey=dest.key;applyNeeds(ch,{energy:-2,hunger:1});}}
  else if(parsed.intent==='help'){const o=world.opportunities.find(o=>o.settlementId===town.id&&o.status==='open'&&o.locationKey===ch.currentLocationKey);if(o&&(good||mixed)){o.status='resolved';o.resolvedBy=ch.id;o.resolvedAt=worldDate();ch.currency+=mixed?Math.max(1,Math.floor(o.reward/2)):o.reward;world.events.push(makeEvent('A local problem changed',`${ch.name}'s freeform action affected “${o.title}” in ${town.name}.`,[ch.id]));}applyNeeds(ch,{energy:-7,hunger:5,morale:good?8:3});hours=2;}
  else if(parsed.intent==='fight'){applyNeeds(ch,{energy:-12,hunger:6,morale:mixed?-3:0});hours=1;}
  else if(parsed.intent==='steal'){if(good){ch.currency+=1+Math.floor(Math.random()*4);town.notoriety=(town.notoriety||0)+4;}else{town.notoriety=(town.notoriety||0)+7;}applyNeeds(ch,{energy:-4,morale:-2});}
  else {applyNeeds(ch,{energy:-3,hunger:2,morale:good?3:0});}
  return hours;
}
async function submitFreeformAction(){
  const input=$('gmActionInput'),btn=$('gmSubmitBtn'); if(!input||!world)return; const rawAction=input.value.trim(); if(!rawAction)return;
  const ch=activeCharacter(),town=currentSettlement(ch); if(!ch||!town)return; const place=town.places.find(p=>p.key===ch.currentLocationKey)||town.places[0]; const present=presentNpcs(town,ch.currentLocationKey); const parsed=inferIntent(rawAction); const targetNpc=findMentionedNpc(rawAction,present); const feasibility=checkFeasibility(ch,town,place,present,parsed); const score=relevantSkillScore(ch,parsed.intent); const outcome=feasibility.allowed?rollOutcome(score,feasibility.difficulty):{tier:'failure',label:'Not possible as attempted',roll:null};
  const context={rawAction,ch,town,place,present,parsed,targetNpc,feasibility,score,outcome}; if(targetNpc&&parsed.intent==='talk')recordConversationMemory(ch,targetNpc,rawAction,outcome.label);witnessPlayerAction(ch,town,place,rawAction,outcome,targetNpc); btn.disabled=true;btn.textContent='Resolving…';
  let narration=''; let provider='local';
  if(feasibility.allowed){const hours=applyFreeformConsequences(context); context.hours=hours; try{if(world.gmSettings?.mode==='connected'){narration=await connectedNarration(context);provider='connected';}}catch(err){narration='';provider='local-fallback';}}
  if(!narration)narration=enrichLocalNarration(context,localNarration(context));const directorRewardEarned=feasibility.allowed?directorReward(context):null;rememberDirectorAction(context,narration,directorRewardEarned);
  const entry={id:uid('gm'),characterId:ch.id,rawAction,intent:parsed.intent,outcome:outcome.tier,outcomeLabel:outcome.label,narration,provider,worldDate:worldDate(),hour:world.clock.hour,locationKey:ch.currentLocationKey,reward:directorRewardEarned?.label||null,debug:{score,difficulty:feasibility.difficulty,reasons:feasibility.reasons}}; world.gmLog=world.gmLog||[];world.gmLog.push(entry); if(world.gmLog.length>250)world.gmLog=world.gmLog.slice(-250);
  addLifeLog(ch,`Freeform: ${outcome.label}`,narration); input.value='';
  if(feasibility.allowed)advanceHours(context.hours||1);else saveWorld(); btn.disabled=false;btn.textContent='Attempt Action'; renderGmPanel();
}
function renderGmPanel(){
  if(!$('gmHistory')||!world)return;const ch=activeCharacter();if(!ch)return;
  const rows=(world.gmLog||[]).filter(x=>x.characterId===ch.id).slice(-8).reverse();
  $('gmHistory').innerHTML=rows.length?rows.map(x=>`<div class="gm-entry"><div class="gm-player">You: ${escapeHtml(x.rawAction)}</div><div class="gm-result"><strong>${escapeHtml(x.outcomeLabel)}</strong><p>${escapeHtml(x.narration)}</p><small>${escapeHtml(x.worldDate)} · ${escapeHtml(x.provider)}${x.reward?` · Reward: ${escapeHtml(x.reward)}`:''}</small></div></div>`).join(''):'<p class="muted">Type anything your character reasonably attempts. The simulation resolves it before narration is produced.</p>';
  if($('gmMode'))$('gmMode').value=world.gmSettings?.mode||'local'; if($('gmEndpoint'))$('gmEndpoint').value=world.gmSettings?.endpoint||'/api/gm'; if($('directorThreads')){const th=(world.storyDirector?.threads||[]).filter(x=>x.characterId===ch.id&&x.status==='active');$('directorThreads').innerHTML=th.length?th.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>Progress ${x.progress}</div><small>${escapeHtml(x.createdAt)}</small></div>`).join(''):'<p class="muted">Repeated choices can develop into personal story threads.</p>';}
}


const trainingCatalog={
 water:[
  {id:'water_flow',name:'Flowing Form',tier:1,cost:0,req:0,desc:'Redirect and guide nearby water with controlled circular motion.'},
  {id:'water_whip',name:'Water Whip',tier:1,cost:12,req:18,desc:'Shape a narrow stream into a striking or grasping lash.',needs:['water_flow']},
  {id:'ice_shape',name:'Basic Ice Shaping',tier:2,cost:22,req:40,desc:'Freeze controlled water into simple barriers, footholds, and restraints.',needs:['water_flow']},
  {id:'healing_intro',name:'Healing Fundamentals',tier:2,cost:24,req:45,desc:'Begin learning chi-guided healing. Requires appropriate instruction.',teacher:true,needs:['water_flow']},
  {id:'water_shield',name:'Water Shield',tier:2,cost:25,req:55,desc:'Maintain a moving defensive sheet capable of redirecting force.',needs:['water_whip']},
  {id:'plant_intro',name:'Plantbending Principles',tier:3,cost:38,req:100,desc:'Manipulate water held within suitable plant matter.',teacher:true,needs:['water_whip']}
 ],
 earth:[
  {id:'earth_stance',name:'Rooted Stance',tier:1,cost:0,req:0,desc:'Sense stable footing and move small nearby earth with deliberate force.'},
  {id:'earth_wall',name:'Earth Wall',tier:1,cost:12,req:18,desc:'Raise a compact defensive slab from suitable ground.',needs:['earth_stance']},
  {id:'stone_launch',name:'Stone Launch',tier:2,cost:22,req:42,desc:'Project controlled stones with improved accuracy and force.',needs:['earth_stance']},
  {id:'earth_armor',name:'Earth Armor',tier:2,cost:28,req:65,desc:'Shape protective stone around parts of the body without sacrificing all mobility.',needs:['earth_wall']},
  {id:'seismic_intro',name:'Seismic Sense Principles',tier:3,cost:40,req:110,desc:'Read vibration through direct contact with earth.',teacher:true,needs:['earth_stance']},
  {id:'metal_theory',name:'Metalbending Theory',tier:3,cost:45,req:125,desc:'Learn to perceive and manipulate earthen impurities within refined metal.',teacher:true,era:['reconstruction','korra','future'],needs:['seismic_intro']}
 ],
 fire:[
  {id:'fire_breath',name:'Breath & Flame',tier:1,cost:0,req:0,desc:'Generate controlled flame through breath, stance, and internal heat.'},
  {id:'fire_stream',name:'Focused Flame',tier:1,cost:12,req:18,desc:'Sustain a directed stream rather than an uncontrolled burst.',needs:['fire_breath']},
  {id:'fire_arc',name:'Sweeping Fire Arc',tier:2,cost:22,req:45,desc:'Use footwork to carry flame across a wider controlled arc.',needs:['fire_stream']},
  {id:'heat_control',name:'Heat Control',tier:2,cost:25,req:60,desc:'Manipulate heat with less emphasis on open flame.',needs:['fire_breath']},
  {id:'lightning_theory',name:'Lightning Theory',tier:3,cost:45,req:130,desc:'Study the separation and guidance of energies required for lightning generation.',teacher:true,needs:['fire_stream']},
  {id:'redirection',name:'Lightning Redirection',tier:3,cost:42,req:120,desc:'Guide incoming lightning safely through the body along a practiced path.',teacher:true,needs:['fire_stream']}
 ],
 air:[
  {id:'air_breath',name:'Breath & Motion',tier:1,cost:0,req:0,desc:'Coordinate breath and continuous movement to redirect surrounding air.'},
  {id:'air_push',name:'Air Push',tier:1,cost:12,req:18,desc:'Produce a focused gust for movement, defense, or displacement.',needs:['air_breath']},
  {id:'air_scooter',name:'Air Scooter',tier:2,cost:24,req:48,desc:'Maintain a rotating sphere of air for fast ground movement.',needs:['air_push']},
  {id:'glider_control',name:'Glider Control',tier:2,cost:25,req:55,desc:'Use air currents with a suitable glider for controlled aerial travel.',teacher:true,needs:['air_push']},
  {id:'air_shield',name:'Air Shield',tier:2,cost:28,req:65,desc:'Maintain rotating currents that redirect debris and attacks.',needs:['air_push']},
  {id:'spiritual_projection',name:'Spiritual Projection Study',tier:3,cost:48,req:145,desc:'A rare spiritual discipline requiring exceptional inner development.',teacher:true,needs:['air_breath']}
 ],
 none:[
  {id:'conditioning',name:'Combat Conditioning',tier:1,cost:0,req:0,desc:'Build balance, endurance, footwork, and recovery.'},
  {id:'martial_forms',name:'Martial Forms',tier:1,cost:12,req:18,desc:'Develop reliable striking, guarding, and movement fundamentals.',needs:['conditioning']},
  {id:'weapon_control',name:'Weapon Control',tier:2,cost:22,req:42,desc:'Train timing, distance, and safe handling for a chosen weapon discipline.',teacher:true,needs:['conditioning']},
  {id:'acrobatics',name:'Combat Acrobatics',tier:2,cost:24,req:50,desc:'Use mobility, rolls, vaults, and evasive movement under pressure.',needs:['conditioning']},
  {id:'chi_theory',name:'Chi Blocking Theory',tier:3,cost:42,req:115,desc:'Study precise strikes against chi pathways. Requires a qualified teacher.',teacher:true,needs:['martial_forms']},
  {id:'master_tactics',name:'Advanced Combat Tactics',tier:3,cost:38,req:100,desc:'Read terrain, opponents, timing, and team positioning at a high level.',needs:['martial_forms']}
 ]
};
trainingCatalog.water.push(
{id:'water_ring',name:'Orbiting Water Ring',tier:2,cost:26,req:70,desc:'Maintain a circling reserve of water for quick defense and redirection.',needs:['water_whip'],env:['water']},
{id:'ice_projectiles',name:'Ice Projectiles',tier:3,cost:34,req:105,desc:'Shape and launch controlled ice shards with accuracy.',needs:['ice_shape'],env:['water']},
{id:'healing_deep',name:'Advanced Healing',tier:3,cost:42,req:125,desc:'Treat more serious injuries through careful chi-guided healing.',teacher:true,needs:['healing_intro'],env:['water']},
{id:'mist_screen',name:'Mist Screen',tier:3,cost:36,req:110,desc:'Disperse fine water into an obscuring mist.',needs:['water_ring'],env:['water']},
{id:'octopus_form',name:'Octopus Form',tier:4,cost:55,req:190,desc:'Control multiple water limbs at once for defense and restraint.',teacher:true,needs:['water_ring','water_shield'],env:['water']},
{id:'blood_theory',name:'Bloodbending Theory',tier:5,cost:80,req:360,desc:'Forbidden study of manipulating water within living bodies.',teacher:true,needs:['healing_deep'],env:['fullmoon'],rare:true});
trainingCatalog.earth.push(
{id:'earth_surf',name:'Earth Surfing',tier:2,cost:25,req:70,desc:'Move over suitable earth by continuously reshaping the ground.',needs:['earth_stance'],env:['earth']},
{id:'precision_stone',name:'Precision Stonework',tier:3,cost:34,req:105,desc:'Shape smaller stone structures with greater precision.',needs:['stone_launch'],env:['earth']},
{id:'sand_forms',name:'Sandbending Forms',tier:3,cost:40,req:120,desc:'Adapt earthbending to loose sand and shifting terrain.',teacher:true,needs:['earth_stance'],env:['sand']},
{id:'seismic_mastery',name:'Seismic Sense',tier:4,cost:58,req:205,desc:'Interpret fine vibrations through grounded contact.',teacher:true,needs:['seismic_intro'],env:['earth']},
{id:'metal_control',name:'Practical Metalbending',tier:4,cost:62,req:220,desc:'Manipulate suitable metal through its earthen impurities.',teacher:true,needs:['metal_theory'],era:['reconstruction','korra','future'],env:['metal']},
{id:'lava_theory',name:'Lavabending Principles',tier:5,cost:78,req:350,desc:'Rare study of transforming and controlling earth at extreme heat.',teacher:true,needs:['precision_stone'],rare:true,env:['earth']});
trainingCatalog.fire.push(
{id:'fire_jets',name:'Fire Jets',tier:3,cost:36,req:115,desc:'Use sustained flame bursts to enhance movement and leaps.',needs:['fire_stream']},
{id:'flame_wall',name:'Flame Wall',tier:3,cost:34,req:110,desc:'Raise a controlled wall of flame to deny space.',needs:['fire_arc']},
{id:'fire_daggers',name:'Fire Daggers',tier:3,cost:38,req:125,desc:'Maintain short concentrated blades of flame.',needs:['fire_stream']},
{id:'lightning_generation',name:'Lightning Generation',tier:4,cost:65,req:225,desc:'Separate internal energies and release directed lightning.',teacher:true,needs:['lightning_theory'],rare:true},
{id:'redirection_mastery',name:'Lightning Redirection Mastery',tier:4,cost:58,req:205,desc:'Redirect powerful electrical attacks with disciplined internal routing.',teacher:true,needs:['redirection']},
{id:'blue_flame',name:'Intense Flame Control',tier:5,cost:78,req:350,desc:'Produce unusually concentrated high-temperature flame.',teacher:true,needs:['heat_control','fire_stream'],rare:true});
trainingCatalog.air.push(
{id:'air_spout',name:'Air Spout',tier:3,cost:35,req:110,desc:'Maintain a rotating column of air for elevation and evasion.',needs:['air_push']},
{id:'vacuum_pull',name:'Vacuum Pull',tier:3,cost:38,req:125,desc:'Create a controlled pressure difference to pull or destabilize.',needs:['air_push']},
{id:'enhanced_gliding',name:'Advanced Glider Maneuvers',tier:3,cost:38,req:125,desc:'Use changing currents for difficult turns, climbs and landings.',teacher:true,needs:['glider_control'],env:['openair']},
{id:'air_sphere',name:'Air Sphere Defense',tier:4,cost:55,req:195,desc:'Maintain layered circulating currents around the body.',needs:['air_shield','air_push']},
{id:'projection_mastery',name:'Spiritual Projection',tier:4,cost:64,req:230,desc:'Project the spirit beyond the body through exceptional discipline.',teacher:true,needs:['spiritual_projection'],rare:true},
{id:'flight_theory',name:'Unassisted Flight Philosophy',tier:5,cost:85,req:380,desc:'Study the rare spiritual principle of complete release from earthly attachment.',teacher:true,needs:['projection_mastery'],rare:true});
trainingCatalog.none.push(
{id:'weapon_specialization',name:'Weapon Specialization',tier:3,cost:34,req:100,desc:'Commit to a weapon discipline and refine counters, timing and recovery.',teacher:true,needs:['weapon_control']},
{id:'pressure_points',name:'Pressure-Point Striking',tier:3,cost:38,req:120,desc:'Use anatomical knowledge and precision to disrupt movement.',teacher:true,needs:['martial_forms']},
{id:'chi_blocking',name:'Chi Blocking',tier:4,cost:60,req:210,desc:'Apply precise strikes intended to temporarily disrupt bending and limb control.',teacher:true,needs:['chi_theory','pressure_points'],rare:true},
{id:'master_weapon',name:'Master Weapon Forms',tier:4,cost:55,req:195,desc:'Integrate offense, defense, footwork and feints with a chosen weapon.',teacher:true,needs:['weapon_specialization']},
{id:'battlefield_command',name:'Battlefield Command',tier:4,cost:52,req:185,desc:'Coordinate allies, terrain, retreats and pressure.',needs:['master_tactics']},
{id:'legendary_discipline',name:'Personal Martial Discipline',tier:5,cost:75,req:340,desc:'Develop a highly individualized nonbender fighting philosophy.',needs:['master_weapon','master_tactics']});


const balanceProfiles={
 standard:{training:1,career:1,wage:1,living:1,business:1,story:1},
 relaxed:{training:1.2,career:1.15,wage:1.15,living:.85,business:1.1,story:1.15},
 slowLife:{training:.78,career:.82,wage:1,living:1,business:.9,story:.8}
};
function ensureBalanceState(){if(!world)return;world.balanceState=world.balanceState||{profile:'standard',daily:{},monthlyLog:[],lastMonthlyTick:null};world.balanceState.daily=world.balanceState.daily||{};world.balanceState.monthlyLog=Array.isArray(world.balanceState.monthlyLog)?world.balanceState.monthlyLog:[];}
function balanceProfile(){ensureBalanceState();return balanceProfiles[world.balanceState.profile]||balanceProfiles.standard;}
function dailyBalanceKey(ch){return `${world.clock.year}-${world.clock.seasonIndex}-${world.clock.day}-${ch.id}`;}
function dailyProgress(ch,type){ensureBalanceState();const key=dailyBalanceKey(ch);world.balanceState.daily[key]=world.balanceState.daily[key]||{training:0,career:0,story:0,relationship:0,combat:0};return world.balanceState.daily[key][type]||0;}
function addDailyProgress(ch,type,amount){ensureBalanceState();const key=dailyBalanceKey(ch);world.balanceState.daily[key]=world.balanceState.daily[key]||{training:0,career:0,story:0,relationship:0,combat:0};world.balanceState.daily[key][type]=(world.balanceState.daily[key][type]||0)+amount;}
function diminishingGain(base,used,softCap){if(used<=softCap)return base;const over=used-softCap,mult=Math.max(.25,1-over/(softCap*2));return Math.max(1,Math.round(base*mult));}
function monthlyLivingCost(ch){
 const st=currentSettlement(ch),econ=settlementEconomy(st.id),props=ch.economy?.properties||[],rent=props.reduce((sum,p)=>sum+(p.monthlyCost||0),0),base=Math.max(4,Math.round((econ.prosperity+econ.housing)/24)),household=world.generationState?.households?.find(h=>h.id===ch.householdId),dependents=(household?.memberIds||[]).map(personById).filter(p=>p&&Number(p.age||0)<18).length;
 return Math.max(2,Math.round((base+rent+dependents*2)*balanceProfile().living));
}
function monthlyBalanceTick(){
 if(!world)return;ensureBalanceState();const stamp=`${world.clock.year}-${world.clock.seasonIndex}`;if(world.balanceState.lastMonthlyTick===stamp)return;world.balanceState.lastMonthlyTick=stamp;
 world.characters.filter(c=>c.alive!==false&&c.age>=18).forEach(ch=>{ensureCharacterLifeState(ch);const cost=monthlyLivingCost(ch),before=ch.currency;ch.currency=Math.max(0,ch.currency-cost);const unpaid=Math.max(0,cost-before);if(unpaid>0){ch.needs.morale=clamp(ch.needs.morale-6);if(ch.economy){ch.economy.debts=ch.economy.debts||[];ch.economy.debts.push({id:uid('debt'),amount:unpaid,worldDate:worldDate(),reason:'living costs'});}}world.balanceState.monthlyLog.push({id:uid('bal'),characterId:ch.id,worldDate:worldDate(),cost,paid:Math.min(before,cost),unpaid});});
 if(world.balanceState.monthlyLog.length>180)world.balanceState.monthlyLog.shift();
}
function progressionScore(ch){
 ensureTrainingState(ch);ensureCareerState(ch);const rels=relationshipPeople(ch),training=Math.min(100,ch.training.xp/6.2),career=Math.min(100,ch.career.xp/6.2),social=Math.min(100,rels.reduce((n,x)=>n+x.r.closeness,0)/Math.max(1,rels.length)),wealth=Math.min(100,ch.currency*1.6),worldRep=Math.min(100,Math.max(0,ch.factions?.influence||0)*4);return Math.round(training*.3+career*.25+social*.2+wealth*.15+worldRep*.1);
}
function renderProgressionBalance(){
 if(!$('progressionView')||!world)return;const ch=activeCharacter();$('noProgressionLife').classList.toggle('hidden',!!ch);$('progressionGame').classList.toggle('hidden',!ch);if(!ch)return;ensureBalanceState();ensureTrainingState(ch);ensureCareerState(ch);const score=progressionScore(ch),profile=balanceProfile(),cost=monthlyLivingCost(ch),rels=relationshipPeople(ch);
 $('progressionSummary').innerHTML=`<span>Life progression <b>${score}/100</b></span><span>Training <b>${ch.training.xp} XP</b></span><span>Career <b>${ch.career.xp} XP</b></span><span>Coins <b>${ch.currency}</b></span><span>Monthly living cost <b>${cost}</b></span>`;
 $('progressionProfile').value=world.balanceState.profile||'standard';
 $('progressionBreakdown').innerHTML=`<div class="balance-row"><strong>Training pace</strong><span>${profile.training}× · same-day soft cap 24 XP</span></div><div class="balance-row"><strong>Career pace</strong><span>${profile.career}× · higher promotion thresholds</span></div><div class="balance-row"><strong>Story rewards</strong><span>${profile.story}× · repeated rewards diminish</span></div><div class="balance-row"><strong>Business economy</strong><span>${profile.business}× · profit now follows local prosperity and wages</span></div><div class="balance-row"><strong>Living costs</strong><span>${cost} coins per simulated month</span></div><div class="balance-row"><strong>Relationships</strong><span>${rels.length} known · ${rels.filter(x=>x.r.closeness>=60).length} close</span></div>`;
 const logs=world.balanceState.monthlyLog.filter(x=>x.characterId===ch.id).slice().reverse().slice(0,12);$('balanceLog').innerHTML=logs.length?logs.map(x=>`<div class="event"><strong>Living costs: ${x.cost} coins</strong><div>${x.unpaid?`${x.unpaid} unpaid and recorded as debt`:'Paid in full'}</div><small>${escapeHtml(x.worldDate)}</small></div>`).join(''):'<p class="muted">No monthly balance history yet.</p>';
}
function setBalanceProfile(value){if(!balanceProfiles[value]||!world)return;ensureBalanceState();world.balanceState.profile=value;saveWorld();}

const masteryBands=[['Novice',0],['Student',30],['Practiced',75],['Adept',150],['Expert',260],['Master',420]];
function trainingPath(ch){return ch.bending?.element==='unknown'?'none':(ch.bending?.element||'none');}
function ensureTrainingState(ch){if(!ch)return;ch.training=ch.training||{};ch.training.xp=Number(ch.training.xp||0);ch.training.insight=Number(ch.training.insight??8);ch.training.known=Array.isArray(ch.training.known)?ch.training.known:[];ch.training.journal=Array.isArray(ch.training.journal)?ch.training.journal:[];ch.training.specializations=Array.isArray(ch.training.specializations)?ch.training.specializations:[];ch.training.proficiency=ch.training.proficiency||{};ch.training.style=ch.training.style||{name:'Developing Style',traits:[],signatureTechniques:[]};ch.training.conditioning=Number(ch.training.conditioning||10);ch.training.control=Number(ch.training.control||10);ch.training.creativity=Number(ch.training.creativity||10);const cat=trainingCatalog[trainingPath(ch)]||trainingCatalog.none;cat.filter(t=>t.cost===0).forEach(t=>{if(!ch.training.known.includes(t.id))ch.training.known.push(t.id)});updateMastery(ch);}
function updateMastery(ch){ensureTrainingStateShallow(ch);let name='Novice';for(const [n,min] of masteryBands)if(ch.training.xp>=min)name=n;ch.training.mastery=name;if(ch.bending)ch.bending.mastery=name;return name;}
function ensureTrainingStateShallow(ch){ch.training=ch.training||{xp:0,insight:8,known:[],journal:[],specializations:[],proficiency:{},style:{name:'Developing Style',traits:[],signatureTechniques:[]},conditioning:10,control:10,creativity:10};}
function nextMastery(ch){for(const [n,min] of masteryBands)if(min>ch.training.xp)return {name:n,min};return {name:'Master',min:420};}
function trainingEntry(ch,title,detail){ensureTrainingState(ch);ch.training.journal.push({id:uid('train'),title,detail,worldDate:worldDate(),hour:world.clock.hour});if(ch.training.journal.length>120)ch.training.journal=ch.training.journal.slice(-120);}
function gainTrainingXp(ch,amount,reason){ensureTrainingState(ch);ensureBalanceState();const before=ch.training.mastery,used=dailyProgress(ch,'training'),scaled=Math.max(1,Math.round(amount*balanceProfile().training)),actual=diminishingGain(scaled,used,24);ch.training.xp+=actual;ch.training.insight+=Math.max(1,Math.floor(actual/5));addDailyProgress(ch,'training',actual);const after=updateMastery(ch);trainingEntry(ch,reason,`Gained ${actual} training experience${actual<scaled?' (diminishing returns from heavy same-day training)':''}.`);if(after!==before){world.events.push(makeEvent('Training milestone',`${ch.name} reached ${after} mastery in their primary training path.`,[ch.id]));trainingEntry(ch,'Mastery advanced',`${before} → ${after}`);}}
function techniqueAvailable(ch,t){ensureTrainingState(ch);if(t.era&&!t.era.includes(world.era))return {ok:false,reason:'This technique is not broadly available in this era.'};if(ch.training.xp<t.req)return {ok:false,reason:`Requires ${t.req} training XP.`};if((t.needs||[]).some(id=>!ch.training.known.includes(id)))return {ok:false,reason:'Prerequisite technique not yet known.'};if(t.teacher&&!hasTrainingTeacher(ch))return {ok:false,reason:'Requires access to a willing qualified teacher or equivalent source.'};if(ch.training.insight<t.cost)return {ok:false,reason:`Requires ${t.cost} insight.`};const env=trainingEnvironment(ch);if(t.env?.length&&!t.env.some(x=>env.includes(x)))return {ok:false,reason:`Requires suitable conditions: ${t.env.join(' or ')}.`};return {ok:true,reason:'Ready to study.'};}
function trainingEnvironment(ch){const town=currentSettlement(ch);const place=town?.places?.find(p=>p.key===ch.currentLocationKey);const words=[town?.terrain,town?.region,town?.kind,place?.key,place?.name,world.environment?.weather].filter(Boolean).join(' ').toLowerCase();const env=[];if(/river|water|sea|coast|harbor|canal|swamp|rain|ice|snow|clinic/.test(words))env.push('water');if(/earth|mountain|stone|field|outskirts|desert|ground|workshop/.test(words))env.push('earth');if(/desert|sand/.test(words))env.push('sand');if(/metal|workshop|city|forge/.test(words))env.push('metal');if(/outskirts|temple|mountain|open|field/.test(words))env.push('openair');if(world.environment?.weather==='Full Moon')env.push('fullmoon');return env;}
function techniqueProficiency(ch,id){ensureTrainingState(ch);return Number(ch.training.proficiency[id]||0);}
function proficiencyBand(v){return v>=90?'Mastered':v>=70?'Reliable':v>=45?'Practiced':v>=20?'Familiar':'New';}
function practiceTechnique(id){const ch=activeCharacter();if(!ch)return;ensureTrainingState(ch);if(!ch.training.known.includes(id)){alert('You do not know that technique yet.');return;}if(ch.needs?.energy<12){alert('You are too tired for focused technique practice.');return;}const current=techniqueProficiency(ch,id),gain=Math.max(2,7-Math.floor(current/25));ch.training.proficiency[id]=Math.min(100,current+gain);ch.training.control=Math.min(100,ch.training.control+1);ch.training.creativity=Math.min(100,ch.training.creativity+(Math.random()<.35?1:0));gainTrainingXp(ch,4,'Technique refinement');trainingEntry(ch,'Technique practiced',`${id} proficiency improved to ${ch.training.proficiency[id]}%.`);applyNeeds(ch,{energy:-12,hunger:6,morale:3});advanceHours(2);}
function deriveStyle(ch){ensureTrainingState(ch);const traits=[];if(ch.training.control>=35)traits.push('Precise');if(ch.training.conditioning>=35)traits.push('Forceful');if(ch.training.creativity>=35)traits.push('Inventive');if(ch.training.known.length>=7)traits.push('Versatile');if(Object.values(ch.training.proficiency).some(v=>v>=70))traits.push('Refined');ch.training.style.traits=traits.slice(0,3);ch.training.style.name=traits.length?`${traits.slice(0,2).join(' ')} ${trainingPath(ch)==='none'?'Martial':'Bending'} Style`:'Developing Style';}
function attemptSignatureTechnique(){const ch=activeCharacter();if(!ch)return;ensureTrainingState(ch);deriveStyle(ch);if(!['Expert','Master'].includes(ch.training.mastery)){alert('Signature techniques require Expert or Master-level experience.');return;}if(ch.training.creativity<35||ch.training.known.length<5){alert('You need more creative practice and a broader repertoire first.');return;}const name=prompt('Name your signature technique:');if(!name)return;const desc=prompt('Describe what the technique tries to accomplish using abilities you already know:');if(!desc)return;const sig={id:uid('sig'),name,desc,createdAt:worldDate(),proficiency:10,path:trainingPath(ch),components:ch.training.known.slice(-3)};ch.training.style.signatureTechniques.push(sig);ch.training.creativity=Math.min(100,ch.training.creativity+5);trainingEntry(ch,'Signature technique developed',`${name}: ${desc}`);world.events.push(makeEvent('Original technique developed',`${ch.name} developed a personal technique known as ${name}.`,[ch.id]));saveWorld();}
function hasTrainingTeacher(ch){return world.npcs.some(n=>n.active&&n.settlementId===ch.homeSettlementId&&(n.role||'').toLowerCase().match(/instructor|master|fighter|guard|healer|scholar/));}
function ensureLocalTeacher(ch){const town=currentSettlement(ch);let teacher=world.npcs.find(n=>n.settlementId===town.id&&n.trainingTeacher);if(teacher)return teacher;const path=trainingPath(ch);const labels={water:'Waterbending instructor',earth:'Earthbending instructor',fire:'Firebending instructor',air:'Airbending instructor',none:'Martial arts instructor'};teacher={id:uid('npc'),name:firstNames[Math.floor(Math.random()*firstNames.length)],role:labels[path],age:28+Math.floor(Math.random()*30),nation:ch.nation,active:true,settlementId:town.id,homeLocationKey:'home',schedule:makeSchedule('home','training'),personality:['Disciplined','Patient'],trainingTeacher:true,teachesPath:path,socialProfile:{romanceAvailable:false,pace:'guarded',values:['Disciplined','Patient']}};world.npcs.push(teacher);town.localNpcIds.push(teacher.id);return teacher;}
function practiceTraining(kind){const ch=activeCharacter();if(!ch)return;ensureTrainingState(ch);if(ch.needs?.energy<15){alert('You are too exhausted for useful training right now.');return;}let xp=8,insight=0,hours=2,detail='';if(kind==='conditioning'){xp=5;insight=1;ch.training.conditioning=Math.min(100,ch.training.conditioning+2);detail='Conditioning improves balance, stamina, footwork, and control.';}else if(kind==='study'){xp=3;insight=5;ch.training.control=Math.min(100,ch.training.control+1);detail='Study turns observation and theory into usable insight.';}else{xp=8;insight=2;ch.training.control=Math.min(100,ch.training.control+1);ch.training.creativity=Math.min(100,ch.training.creativity+(Math.random()<.4?1:0));detail=trainingPath(ch)==='none'?'Fundamental drills reinforce timing, movement, and discipline.':`Fundamental ${bendingLabel(ch.bending.element).toLowerCase()} forms reinforce control without skipping ahead to advanced techniques.`;}ch.training.insight+=insight;gainTrainingXp(ch,xp,kind==='study'?'Technique study':kind==='conditioning'?'Conditioning session':'Fundamentals practice');ch.lifeStats.trainingSessions++;applyNeeds(ch,{energy:kind==='study'?-6:-15,hunger:kind==='study'?4:9,morale:4});addLifeLog(ch,'Training',detail);advanceHours(hours);}
function learnTechnique(id){const ch=activeCharacter();if(!ch)return;ensureTrainingState(ch);const t=(trainingCatalog[trainingPath(ch)]||[]).find(x=>x.id===id);if(!t||ch.training.known.includes(id))return;const a=techniqueAvailable(ch,t);if(!a.ok){alert(a.reason);return;}ch.training.insight-=t.cost;ch.training.known.push(t.id);ch.training.proficiency[t.id]=Math.max(5,ch.training.proficiency[t.id]||0);deriveStyle(ch);trainingEntry(ch,'Technique learned',`${t.name}: ${t.desc}`);world.events.push(makeEvent('Technique learned',`${ch.name} learned ${t.name}.`,[ch.id]));applyNeeds(ch,{energy:-8,hunger:5,morale:8});advanceHours(2);}
function renderTraining(){
 if(!$('trainingView')||!world)return;const ch=activeCharacter();$('noTrainingLife').classList.toggle('hidden',!!ch);$('trainingGame').classList.toggle('hidden',!ch);if(!ch)return;
 ensureTrainingState(ch);ensureLocalTeacher(ch);deriveStyle(ch);const path=trainingPath(ch),cat=trainingCatalog[path]||trainingCatalog.none,next=nextMastery(ch);
 $('trainingTitle').textContent=path==='none'?'Nonbender Training':`${bendingLabel(ch.bending.element)} Training`;$('trainingMasteryPill').textContent=ch.training.mastery;
 const pct=ch.training.mastery==='Master'?100:Math.min(100,Math.round((ch.training.xp/(next.min||420))*100));
 $('trainingProgress').innerHTML=`<div class="mastery-block"><strong>${escapeHtml(ch.training.mastery)}</strong> · ${ch.training.xp} XP · ${ch.training.insight} insight<div class="progress-track"><span style="width:${pct}%"></span></div><small class="muted">${ch.training.mastery==='Master'?'Mastery reached. Growth continues through refinement and personal style.':`Next: ${next.name} at ${next.min} XP`}</small></div>`;
 $('knownTechniques').innerHTML=ch.training.known.map(id=>{const tech=cat.find(x=>x.id===id);if(!tech)return'';const prof=techniqueProficiency(ch,id);return `<div class="technique-row"><div><strong>${escapeHtml(tech.name)}</strong><small>${proficiencyBand(prof)} · ${prof}% proficiency</small></div><div><span>Tier ${tech.tier}</span><button data-practice-tech="${tech.id}">Practice</button></div></div>`}).join('')||'<p class="muted">No formal techniques recorded yet.</p>';
 $('knownTechniques').querySelectorAll('[data-practice-tech]').forEach(b=>b.addEventListener('click',()=>practiceTechnique(b.dataset.practiceTech)));
 $('techniqueTree').innerHTML=cat.map(tech=>{const known=ch.training.known.includes(tech.id),a=known?{ok:false,reason:'Known'}:techniqueAvailable(ch,tech);return `<article class="technique-card ${known?'known':a.ok?'':'locked'}"><p class="eyebrow">TIER ${tech.tier}${tech.rare?' · RARE':''}</p><h3>${escapeHtml(tech.name)}</h3><p>${escapeHtml(tech.desc)}</p><small>${escapeHtml(known?'Known':a.reason)}</small>${!known?`<div class="actions compact"><button data-learn-tech="${tech.id}" ${a.ok?'':'disabled'}>Learn · ${tech.cost} insight</button></div>`:''}</article>`}).join('');
 $('techniqueTree').querySelectorAll('[data-learn-tech]').forEach(b=>b.addEventListener('click',()=>learnTechnique(b.dataset.learnTech)));
 const teachers=world.npcs.filter(n=>n.active&&n.settlementId===ch.currentSettlementId&&(n.trainingTeacher||/instructor|master|fighter|guard|healer|scholar/i.test(n.role||'')));
 $('teacherList').innerHTML=teachers.length?teachers.map(n=>`<div class="person-row"><div><strong>${escapeHtml(n.name)}</strong><small>${escapeHtml(n.role||'Teacher')}</small></div></div>`).join(''):'<p class="muted">No obvious qualified teacher is available here.</p>';
 $('styleProfile').innerHTML=`<div class="rel-metrics"><span>Conditioning <b>${ch.training.conditioning}</b></span><span>Control <b>${ch.training.control}</b></span><span>Creativity <b>${ch.training.creativity}</b></span><span>Style <b>${escapeHtml(ch.training.style.name)}</b></span></div><p class="muted">${escapeHtml(ch.training.style.traits.join(' · ')||'Your style is still taking shape through practice.')}</p><div class="actions"><button id="signatureTechniqueBtn" ${!['Expert','Master'].includes(ch.training.mastery)?'disabled':''}>Develop Signature Technique</button></div>${ch.training.style.signatureTechniques.map(x=>`<div class="technique-row"><div><strong>${escapeHtml(x.name)}</strong><small>${escapeHtml(x.desc)}</small></div><span>Original</span></div>`).join('')}`;
 $('signatureTechniqueBtn')?.addEventListener('click',attemptSignatureTechnique);
 const rows=[...ch.training.journal].reverse().slice(0,20);$('trainingJournal').innerHTML=rows.length?rows.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)} · ${String(x.hour).padStart(2,'0')}:00</small></div>`).join(''):'<p class="muted">Your training history begins with practice.</p>';
}
function starterInventory(c){const rows=[{itemId:'work_clothes',qty:1}];if(c.wealth!=='Struggling')rows.push({itemId:'travel_rations',qty:2});if(['Merchant','Courier','Sailor','Hunter'].includes(c.occupation))rows.push({itemId:'waterskin',qty:1});return rows;}
function ensurePossessionState(ch){if(!ch)return;ch.inventory=Array.isArray(ch.inventory)?ch.inventory:[];ch.equipment=ch.equipment||{outfit:null,tool:null,weapon:null,travel:null};ch.properties=Array.isArray(ch.properties)?ch.properties:[];ch.ownershipLog=Array.isArray(ch.ownershipLog)?ch.ownershipLog:[];ch.lodging=ch.lodging||null;if(!ch.inventory.length&&ch.createdAt)ch.inventory.push({itemId:'work_clothes',qty:1});}
function itemDef(id){return itemCatalog.find(x=>x.id===id);}
function itemQty(ch,id){return ch.inventory.find(x=>x.itemId===id)?.qty||0;}
function addItem(ch,id,qty=1){ensurePossessionState(ch);let row=ch.inventory.find(x=>x.itemId===id);if(row)row.qty+=qty;else ch.inventory.push({itemId:id,qty});}
function removeItem(ch,id,qty=1){let row=ch.inventory.find(x=>x.itemId===id);if(!row||row.qty<qty)return false;row.qty-=qty;if(row.qty<=0)ch.inventory=ch.inventory.filter(x=>x!==row);Object.keys(ch.equipment||{}).forEach(k=>{if(ch.equipment[k]===id&&!itemQty(ch,id))ch.equipment[k]=null});return true;}
function ownershipEntry(ch,title,detail){ensurePossessionState(ch);ch.ownershipLog.push({id:uid('own'),title,detail,worldDate:worldDate(),hour:world.clock.hour});if(ch.ownershipLog.length>100)ch.ownershipLog=ch.ownershipLog.slice(-100);addLifeLog(ch,title,detail);}
function localMarketItems(ch,town){let rows=[...itemCatalog];if(world.era==='kyoshi'||world.era==='roku')rows=rows.filter(x=>x.id!=='field_pack');if(ch.nation.includes('Air'))rows=rows.filter(x=>x.id!=='practice_sword'||world.era==='korra'||world.era==='future');return rows;}
function buyItem(id){const ch=activeCharacter(),town=currentSettlement(ch),it=itemDef(id);if(!ch||!town||!it)return;const price=Math.max(1,Math.round(it.price*(town.economy?.marketModifier||1)));if(ch.currency<price){alert('You do not have enough coins for that.');return;}ch.currency-=price;addItem(ch,id,1);ownershipEntry(ch,'Purchased '+it.name,`${ch.name} bought ${it.name} in ${town.name} for ${price} coins.`);advanceHours(1);}
function useItem(id){const ch=activeCharacter(),it=itemDef(id);if(!ch||!it||!itemQty(ch,id))return;if(it.use==='ration'){removeItem(ch,id);applyNeeds(ch,{energy:3,hunger:-32,morale:2});ownershipEntry(ch,'Ate travel rations','A practical meal restored some strength without requiring a shop or kitchen.');advanceHours(1);return;}if(it.use==='tea'){removeItem(ch,id);applyNeeds(ch,{energy:2,hunger:-5,morale:5});ownershipEntry(ch,'Prepared tea','A quiet cup of tea made the day feel a little more settled.');advanceHours(1);return;}if(it.equip){ch.equipment[it.equip]=ch.equipment[it.equip]===id?null:id;ownershipEntry(ch,ch.equipment[it.equip]===id?'Equipped '+it.name:'Put away '+it.name,`${it.name} is ${ch.equipment[it.equip]===id?'now equipped':'no longer equipped'}.`);saveWorld();}}
function housingOptions(town){const room=town.economy?.roomPrice||5;return [
 {id:'inn',name:'Rent an Inn Room',cost:room,kind:'lodging',desc:'A safe bed for one night. Resting here restores more energy than sleeping rough.'},
 {id:'long_room',name:'Lease a Small Room',cost:room*12,kind:'lease',desc:'A modest local room kept for thirty in-game days.'},
 {id:'small_home',name:'Purchase a Small Home',cost:Math.max(120,room*35),kind:'property',desc:'A permanent private residence in this settlement.'},
 {id:'shop_home',name:'Purchase Home & Workshop',cost:Math.max(230,room*65),kind:'property',desc:'A combined residence and work space suitable for a trade or future business.'}
];}
function acquireHousing(id){const ch=activeCharacter(),town=currentSettlement(ch);if(!ch||!town)return;ensurePossessionState(ch);const opt=housingOptions(town).find(x=>x.id===id);if(!opt)return;if(opt.kind==='property'&&ch.properties.some(p=>p.settlementId===town.id&&p.type===id)){alert('You already own this property here.');return;}if(ch.currency<opt.cost){alert('You do not have enough coins.');return;}ch.currency-=opt.cost;if(opt.kind==='lodging'){ch.lodging={settlementId:town.id,type:'inn',expiresDay:world.clock.day+1};applyNeeds(ch,{energy:28,hunger:4,morale:6});ownershipEntry(ch,'Rented an inn room',`${ch.name} paid ${opt.cost} coins for a safe night in ${town.name}.`);advanceHours(8);}else if(opt.kind==='lease'){ch.lodging={settlementId:town.id,type:'leased room',expiresDay:world.clock.day+30};ownershipEntry(ch,'Leased a room',`${ch.name} leased a small room in ${town.name} for ${opt.cost} coins.`);advanceHours(1);}else{ch.properties.push({id:uid('property'),type:id,name:opt.name.replace('Purchase ','').replace('a ','').replace('A ',''),settlementId:town.id,settlementName:town.name,purchasedAt:worldDate(),price:opt.cost});ownershipEntry(ch,'Purchased property',`${ch.name} purchased ${opt.name.toLowerCase().replace('purchase ','')} in ${town.name} for ${opt.cost} coins.`);world.events.push(makeEvent('Property changed hands',`${ch.name} became a property owner in ${town.name}.`,[ch.id]));advanceHours(2);}}
function renderInventory(){if(!$('inventoryView')||!world)return;const ch=activeCharacter();$('noInventoryLife').classList.toggle('hidden',!!ch);$('inventoryGame').classList.toggle('hidden',!ch);if(!ch)return;ensureCharacterLifeState(ch);ensurePossessionState(ch);const town=currentSettlement(ch)||ensureHomeSettlement(ch);$('inventoryCoinPill').textContent=`${ch.currency} ◈`;$('shopTitle').textContent=`Market in ${town.name}`;
 $('inventoryList').innerHTML=ch.inventory.length?ch.inventory.map(r=>{const it=itemDef(r.itemId)||{name:r.itemId,type:'item',desc:'Personal possession.'};const eq=Object.values(ch.equipment).includes(r.itemId);return `<div class="inventory-row"><div><span class="item-tag">${escapeHtml(it.type)}</span><strong>${escapeHtml(it.name)} ×${r.qty}</strong><small>${escapeHtml(it.desc)}</small></div><div>${eq?'<span class="equipped-badge">Equipped</span>':''}${it.use||it.equip?`<button data-use-item="${it.id}">${it.use?'Use':eq?'Unequip':'Equip'}</button>`:''}</div></div>`}).join(''):'<p class="muted">You are carrying almost nothing.</p>';
 $('inventoryList').querySelectorAll('[data-use-item]').forEach(b=>b.addEventListener('click',()=>useItem(b.dataset.useItem)));
 const slots=[['outfit','Outfit'],['tool','Tool'],['weapon','Weapon'],['travel','Travel gear']];$('equipmentList').innerHTML=slots.map(([k,label])=>{const it=itemDef(ch.equipment[k]);return `<div class="equipment-row"><div><strong>${label}</strong><small>${it?escapeHtml(it.name):'Nothing equipped'}</small></div></div>`}).join('');
 $('shopList').innerHTML=localMarketItems(ch,town).map(it=>{const price=Math.max(1,Math.round(it.price*(town.economy?.marketModifier||1)));return `<article class="shop-card"><span class="item-tag">${escapeHtml(it.type)}</span><h3>${escapeHtml(it.name)}</h3><small>${escapeHtml(it.desc)}</small><div class="actions compact"><strong>${price} ◈</strong><button data-buy-item="${it.id}" ${ch.currency<price?'disabled':''}>Buy</button></div></article>`}).join('');$('shopList').querySelectorAll('[data-buy-item]').forEach(b=>b.addEventListener('click',()=>buyItem(b.dataset.buyItem)));
 const props=ch.properties.filter(p=>p.settlementId===town.id);const current=ch.lodging?.settlementId===town.id?`Current lodging: ${ch.lodging.type}`:'No current lodging here.';$('housingPanel').innerHTML=`<p class="muted">${escapeHtml(current)}</p>${props.map(p=>`<div class="home-card current"><strong>${escapeHtml(p.name)}</strong><small>Owned in ${escapeHtml(p.settlementName)} · purchased ${escapeHtml(p.purchasedAt)}</small></div>`).join('')}${housingOptions(town).map(o=>`<div class="home-card"><strong>${escapeHtml(o.name)}</strong><small>${escapeHtml(o.desc)}</small><div class="actions compact"><span>${o.cost} ◈</span><button data-house="${o.id}" ${ch.currency<o.cost?'disabled':''}>${o.kind==='property'?'Buy':'Arrange'}</button></div></div>`).join('')}`;$('housingPanel').querySelectorAll('[data-house]').forEach(b=>b.addEventListener('click',()=>acquireHousing(b.dataset.house)));
 $('ownershipLog').innerHTML=ch.ownershipLog.length?[...ch.ownershipLog].reverse().slice(0,20).map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)} · ${String(x.hour).padStart(2,'0')}:00</small></div>`).join(''):'<p class="muted">No purchases or property changes have been recorded yet.</p>';}


const careerTracks={
 'Farmer':['Farmhand','Field Worker','Senior Grower','Farm Steward','Master Cultivator'],
 'Fisher':['Deckhand','Fisher','Senior Fisher','Boat Captain','Master Fisher'],
 'Tea server':['Server','Tea Brewer','Senior Brewer','Tea House Manager','Tea Master'],
 'Merchant':['Shop Assistant','Trader','Senior Merchant','Trade Manager','Merchant Principal'],
 'Messenger':['Runner','Courier','Senior Courier','Route Captain','Dispatch Master'],
 'Blacksmith':['Forge Helper','Smith','Senior Smith','Forge Master','Master Smith'],
 'Doctor':['Clinic Aide','Healer','Senior Healer','Clinic Lead','Master Healer'],
 'Scholar':['Research Aide','Scholar','Senior Scholar','Archivist','Master Scholar'],
 'Soldier':['Recruit','Soldier','Veteran','Unit Leader','Senior Officer'],
 'Artist':['Apprentice','Artist','Senior Artist','Studio Lead','Master Artist'],
 'Potter':['Clay Worker','Potter','Senior Potter','Kiln Master','Master Potter'],
 'Sailor':['Deckhand','Sailor','Senior Sailor','First Mate','Captain'],
 'Musician':['Busker','Performer','Senior Performer','Ensemble Lead','Master Musician'],
 'Mechanic':['Shop Helper','Mechanic','Senior Mechanic','Workshop Lead','Master Mechanic'],
 'Police officer':['Cadet','Officer','Senior Officer','Investigator','Precinct Captain'],
 'Detective':['Assistant','Investigator','Senior Investigator','Lead Detective','Master Investigator'],
 'Courier':['Runner','Courier','Senior Courier','Route Captain','Dispatch Master']
};
function careerRanks(ch){return careerTracks[ch.occupation]||['Apprentice',ch.occupation||'Worker','Skilled '+(ch.occupation||'Worker'),'Senior '+(ch.occupation||'Worker'),'Master '+(ch.occupation||'Worker')];}
function ensureCareerState(ch){
 if(!ch)return; ch.career=ch.career||{}; const c=ch.career;c.xp=Number(c.xp||0);c.level=Math.max(0,Math.min(4,Number(c.level||0)));c.reputation=Number(c.reputation||5);c.skill=Number(c.skill||10);c.shifts=Number(c.shifts||0);c.customers=Number(c.customers||0);c.promotions=Number(c.promotions||0);c.history=Array.isArray(c.history)?c.history:[];c.apprenticeships=Array.isArray(c.apprenticeships)?c.apprenticeships:[];c.businesses=Array.isArray(c.businesses)?c.businesses:[];c.lastShiftDay=c.lastShiftDay??null;
}
function careerEntry(ch,title,detail){ensureCareerState(ch);ch.career.history.push({title,detail,worldDate:worldDate(),hour:world.clock.hour});if(ch.career.history.length>80)ch.career.history.shift();world.lifeLog.push({characterId:ch.id,title,detail,worldDate:worldDate(),hour:world.clock.hour});}
function careerThreshold(level){return [0,70,180,360,620][level]||620;}
function careerWage(ch){ensureCareerState(ch);return Math.max(5,Math.round((7+ch.career.level*4+Math.floor(ch.career.skill/25))*balanceProfile().wage));}
function workCareerShift(){const ch=activeCharacter();if(!ch)return;ensureCharacterLifeState(ch);ensureCareerState(ch);ensureBalanceState();if(ch.needs.energy<18){alert('You are too exhausted for a full shift. Rest first.');return;}const hours=4,wage=careerWage(ch),used=dailyProgress(ch,'career'),raw=9+Math.floor(Math.random()*6),xp=diminishingGain(Math.max(1,Math.round(raw*balanceProfile().career)),used,22);ch.currency+=wage;ch.career.xp+=xp;addDailyProgress(ch,'career',xp);ch.career.skill=Math.min(100,ch.career.skill+(used<22?1:0));ch.career.reputation=Math.min(100,ch.career.reputation+(Math.random()<.45?1:0));ch.career.shifts++;ch.career.lastShiftDay=world.clock.day;applyNeeds(ch,{energy:-20,hunger:12,morale:Math.random()<.25?2:0});careerEntry(ch,'Worked a professional shift',`${ch.name} worked as a ${careerRanks(ch)[ch.career.level]}, earned ${wage} coins, and gained ${xp} career experience.`);advanceHours(hours);saveWorld();}
function requestPromotion(){const ch=activeCharacter();if(!ch)return;ensureCareerState(ch);if(ch.career.level>=4){alert('You are already at the highest career rank.');return;}const needed=careerThreshold(ch.career.level+1);if(ch.career.xp<needed||ch.career.reputation<10+ch.career.level*8){alert(`You need ${needed} career XP and stronger professional reputation before promotion.`);return;}ch.career.level++;ch.career.promotions++;careerEntry(ch,'Career promotion',`${ch.name} advanced to ${careerRanks(ch)[ch.career.level]}.`);world.events.push(makeEvent('Professional milestone',`${ch.name} became a ${careerRanks(ch)[ch.career.level]}.`,[ch.id]));advanceHours(1);saveWorld();}
function startApprenticeship(){const ch=activeCharacter();if(!ch)return;ensureCareerState(ch);if(ch.career.apprenticeships.some(a=>a.active)){alert('You already have an active apprenticeship.');return;}const town=currentSettlement(ch)||ensureHomeSettlement(ch);ch.career.apprenticeships.push({id:uid('apprentice'),field:ch.occupation,mentor:`${town.name} ${ch.occupation} mentor`,started:worldDate(),active:true,progress:0});careerEntry(ch,'Began apprenticeship',`${ch.name} began structured study with an experienced ${ch.occupation.toLowerCase()} in ${town.name}.`);saveWorld();}
function trainApprenticeship(){const ch=activeCharacter();if(!ch)return;ensureCareerState(ch);const a=ch.career.apprenticeships.find(x=>x.active);if(!a){alert('Begin an apprenticeship first.');return;}if(ch.needs.energy<12){alert('You need more energy to study your trade.');return;}a.progress+=10;ch.career.xp+=10;ch.career.skill=Math.min(100,ch.career.skill+3);applyNeeds(ch,{energy:-12,hunger:6,morale:1});careerEntry(ch,'Apprenticeship training',`${ch.name} studied under ${a.mentor}. Apprenticeship progress is now ${a.progress}%.`);if(a.progress>=100){a.active=false;ch.career.reputation=Math.min(100,ch.career.reputation+12);careerEntry(ch,'Apprenticeship completed',`${ch.name} completed formal apprenticeship training in ${a.field}.`);}advanceHours(3);saveWorld();}
const businessTypes=[['tea-house','Tea House',85],['workshop','Craft Workshop',110],['clinic','Small Clinic',120],['trading-stall','Trading Stall',70],['dojo','Training Dojo',125],['studio','Art Studio',90],['courier-office','Courier Office',100]];
function startBusiness(type){const ch=activeCharacter();if(!ch)return;ensureCareerState(ch);const town=currentSettlement(ch)||ensureHomeSettlement(ch);const def=businessTypes.find(x=>x[0]===type);if(!def)return;const cost=def[2];if(ch.currency<cost){alert(`You need ${cost} coins to establish this business.`);return;}ch.currency-=cost;const b={id:uid('business'),type,name:`${ch.name}'s ${def[1]}`,settlementId:town.id,settlementName:town.name,opened:worldDate(),reputation:5,cash:0,employees:[],customers:0,expenses:0,revenue:0};ch.career.businesses.push(b);careerEntry(ch,'Opened a business',`${b.name} opened in ${town.name} for ${cost} coins.`);world.events.push(makeEvent('New local business',`${b.name} opened in ${town.name}.`,[ch.id]));advanceHours(6);saveWorld();}
function runBusiness(id){const ch=activeCharacter();if(!ch)return;ensureCareerState(ch);ensureBalanceState();const b=ch.career.businesses.find(x=>x.id===id);if(!b)return;if(ch.needs.energy<15){alert('You need more energy to manage the business today.');return;}const market=settlementEconomy(b.settlementId),demandFactor=.75+market.prosperity/200,customers=Math.max(1,Math.floor((1+Math.random()*4+Math.floor(b.reputation/22)+b.employees.length*.6)*demandFactor)),revenue=Math.round(customers*(2+Math.random()*3)*balanceProfile().business),expenses=3+b.employees.reduce((n,e)=>n+(e.wage||2),0),profit=revenue-expenses;b.customers+=customers;b.revenue+=revenue;b.expenses+=expenses;b.cash+=profit;b.reputation=Math.min(100,Math.max(0,b.reputation+(profit>0&&Math.random()<.45?1:profit<0&&Math.random()<.35?-1:0)));ch.career.customers+=customers;ch.career.xp+=5;applyNeeds(ch,{energy:-15,hunger:8});careerEntry(ch,'Managed business',`${b.name} served ${customers} customers and ${profit>=0?'made':'lost'} ${Math.abs(profit)} coins after expenses.`);advanceHours(4);saveWorld();}
function withdrawBusiness(id){const ch=activeCharacter();if(!ch)return;const b=ch.career.businesses.find(x=>x.id===id);if(!b||b.cash<=0)return;ch.currency+=b.cash;careerEntry(ch,'Business income',`${ch.name} withdrew ${b.cash} coins from ${b.name}.`);b.cash=0;saveWorld();}
function hireEmployee(id){const ch=activeCharacter();if(!ch)return;const b=ch.career.businesses.find(x=>x.id===id);if(!b)return;if(b.employees.length>=4){alert('This small business is already fully staffed.');return;}const names=['Ari','Mina','Tao','Ren','Kira','Bo','Sela','Jin'];const name=names[Math.floor(Math.random()*names.length)]+` ${b.employees.length+1}`;b.employees.push({id:uid('employee'),name,wage:2,role:'Employee',hired:worldDate()});careerEntry(ch,'Hired employee',`${name} joined ${b.name}.`);saveWorld();}
function renderCareer(){if(!$('careerView')||!world)return;const ch=activeCharacter();$('noCareerLife').classList.toggle('hidden',!!ch);$('careerGame').classList.toggle('hidden',!ch);if(!ch)return;ensureCharacterLifeState(ch);ensureCareerState(ch);const ranks=careerRanks(ch),next=ch.career.level<4?careerThreshold(ch.career.level+1):null;$('careerTitle').textContent=`${ch.occupation} · ${ranks[ch.career.level]}`;$('careerSummary').innerHTML=`<span>Career XP <b>${ch.career.xp}${next?' / '+next:''}</b></span><span>Skill <b>${ch.career.skill}</b></span><span>Reputation <b>${ch.career.reputation}</b></span><span>Shifts <b>${ch.career.shifts}</b></span><span>Wage <b>${careerWage(ch)} ◈</b></span>`;
 $('careerRanks').innerHTML=ranks.map((r,i)=>`<div class="career-rank ${i===ch.career.level?'current':''} ${i<ch.career.level?'done':''}"><strong>${i+1}. ${escapeHtml(r)}</strong><small>${i===0?'Starting rank':careerThreshold(i)+' XP milestone'}</small></div>`).join('');
 const a=ch.career.apprenticeships.find(x=>x.active);$('careerActions').innerHTML=`<button id="careerShiftBtn" class="primary">Work 4-hour Shift</button><button id="careerPromoteBtn" ${ch.career.level>=4?'disabled':''}>Request Promotion</button>${a?`<button id="careerTrainBtn">Study with Mentor (${a.progress}%)</button>`:`<button id="careerApprenticeBtn">Find Apprenticeship</button>`}`;$('careerShiftBtn').onclick=workCareerShift;$('careerPromoteBtn').onclick=requestPromotion;if(a)$('careerTrainBtn').onclick=trainApprenticeship;else $('careerApprenticeBtn').onclick=startApprenticeship;
 const town=currentSettlement(ch)||ensureHomeSettlement(ch);$('businessMarket').innerHTML=businessTypes.map(x=>`<article class="shop-card"><h3>${x[1]}</h3><small>Establish a persistent ${x[1].toLowerCase()} in ${escapeHtml(town.name)}.</small><div class="actions compact"><strong>${x[2]} ◈</strong><button data-start-business="${x[0]}" ${ch.currency<x[2]?'disabled':''}>Open</button></div></article>`).join('');$('businessMarket').querySelectorAll('[data-start-business]').forEach(b=>b.onclick=()=>startBusiness(b.dataset.startBusiness));
 $('businessList').innerHTML=ch.career.businesses.length?ch.career.businesses.map(b=>`<article class="business-card"><div class="section-head"><div><p class="eyebrow">${escapeHtml(b.type.replace('-',' ').toUpperCase())}</p><h3>${escapeHtml(b.name)}</h3><small>${escapeHtml(b.settlementName)} · opened ${escapeHtml(b.opened)}</small></div><span class="status-pill">Rep ${b.reputation}</span></div><div class="rel-metrics"><span>Cash <b>${b.cash} ◈</b></span><span>Customers <b>${b.customers}</b></span><span>Revenue <b>${b.revenue}</b></span><span>Expenses <b>${b.expenses}</b></span><span>Employees <b>${b.employees.length}</b></span></div><div class="actions compact"><button data-run-business="${b.id}">Manage 4h</button><button data-hire-business="${b.id}">Hire</button><button data-withdraw-business="${b.id}" ${b.cash<=0?'disabled':''}>Take Earnings</button></div>${b.employees.length?`<small>Staff: ${b.employees.map(e=>escapeHtml(e.name)).join(', ')}</small>`:''}</article>`).join(''):'<p class="muted">You do not own a business yet. A quiet working life is completely valid; ownership is optional.</p>';$('businessList').querySelectorAll('[data-run-business]').forEach(b=>b.onclick=()=>runBusiness(b.dataset.runBusiness));$('businessList').querySelectorAll('[data-hire-business]').forEach(b=>b.onclick=()=>hireEmployee(b.dataset.hireBusiness));$('businessList').querySelectorAll('[data-withdraw-business]').forEach(b=>b.onclick=()=>withdrawBusiness(b.dataset.withdrawBusiness));
 $('careerHistory').innerHTML=ch.career.history.length?[...ch.career.history].reverse().slice(0,25).map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)} · ${String(x.hour).padStart(2,'0')}:00</small></div>`).join(''):'<p class="muted">Your professional history begins with your first shift.</p>';
}


const storyKinds=['community','relationship','career','travel','spirit','mystery'];
const storyTemplates={
 community:[
  ['Missing market delivery','A supply cart expected by local merchants never arrived.','market'],
  ['Repairs after the storm','Several residents need hands and materials after rough weather.','home'],
  ['Stray animal near the road','An unfamiliar hybrid animal has been lingering outside town.','outskirts']],
 relationship:[
  ['A friend needs help','Someone close to you has a private problem and may trust you enough to ask.','tea'],
  ['Old tension resurfaces','A strained relationship has reached a point where silence may make things worse.','home']],
 career:[
  ['A difficult commission','Your profession has attracted a job that could improve your reputation if handled well.','market'],
  ['Short-handed workplace','Someone in your trade needs reliable help before the day is over.','artisan']],
 travel:[
  ['Traveler carries a warning','A traveler brings uncertain news about the road ahead.','market'],
  ['Unmapped path','Locals mention an old path that does not appear on common route maps.','outskirts']],
 spirit:[
  ['Offerings disturbed','Something has been moving the offerings at a nearby shrine after dark.','shrine'],
  ['Unseasonal signs','Animals and weather around the settlement are behaving strangely.','outskirts']],
 mystery:[
  ['Lights after closing','Several people claim they saw lights in a locked building last night.','market'],
  ['Conflicting stories','Two residents describe the same recent event in completely different ways.','tea']]
};
function ensureStoryState(){
 if(!world)return;world.storyThreads=Array.isArray(world.storyThreads)?world.storyThreads:[];world.rumors=Array.isArray(world.rumors)?world.rumors:[];
}
function storyForCharacter(ch){
 ensureStoryState();return world.storyThreads.filter(q=>q.characterId===ch.id);
}
function generateRumor(){
 const ch=activeCharacter();if(!ch)return;ensureStoryState();const town=currentSettlement(ch)||ensureHomeSettlement(ch);
 const kind=storyKinds[Math.floor(Math.random()*storyKinds.length)],tpl=storyTemplates[kind][Math.floor(Math.random()*storyTemplates[kind].length)];
 const reliability=[35,50,65,80][Math.floor(Math.random()*4)];
 const r={id:uid('rumor'),characterId:ch.id,settlementId:town.id,title:tpl[0],text:tpl[1],kind,reliability,heardAt:worldDate(),source:['merchant','neighbor','traveler','coworker','tea-house patron'][Math.floor(Math.random()*5)],investigated:false};
 world.rumors.push(r);world.lifeLog.push({characterId:ch.id,title:'Heard a rumor',detail:`${r.title}: ${r.text}`,worldDate:worldDate(),hour:world.clock.hour});saveWorld();
}
function pursueRumor(id){
 const ch=activeCharacter(),r=world.rumors.find(x=>x.id===id);if(!ch||!r)return;
 r.investigated=true;
 const tpl=(storyTemplates[r.kind]||storyTemplates.community).find(x=>x[0]===r.title)||[r.title,r.text,'market'];
 const q={id:uid('thread'),characterId:ch.id,settlementId:r.settlementId,title:r.title,summary:r.text,kind:r.kind,status:'active',stage:0,createdAt:worldDate(),locationHint:tpl[2],stakes:1+Math.floor(Math.random()*3),notes:[`Originated as a ${r.reliability}% reliable rumor from a ${r.source}.`],history:[]};
 world.storyThreads.push(q);world.events.push(makeEvent('Story thread begun',`${ch.name} decided to look into “${q.title}.”`,[ch.id]));advanceHours(1);saveWorld();
}
function threadApproach(q,approach){
 const ch=activeCharacter();if(!ch||!q||q.status!=='active')return;ensureCharacterLifeState(ch);
 if(ch.needs.energy<8){alert('You are too exhausted to give this proper attention.');return;}
 const relBonus=Math.floor((ch.career?.reputation||0)/25), skillBonus=Math.floor((ch.career?.skill||0)/30);
 let chance=55+relBonus*5+skillBonus*5;
 if(approach==='careful')chance+=12;if(approach==='creative')chance+=5;
 const roll=Math.floor(Math.random()*100)+1,success=roll<=chance;
 q.history.push({worldDate:worldDate(),approach,success});
 applyNeeds(ch,{energy:-8,hunger:4,morale:success?2:-1});advanceHours(2);
 if(success){q.stage++;q.notes.push(`${worldDate()}: ${approach} approach uncovered useful progress.`);}
 else q.notes.push(`${worldDate()}: ${approach} approach hit a setback, but the thread remains open.`);
 if(q.stage>=3){
   q.status='resolved';q.resolvedAt=worldDate();const reward=6+q.stakes*5;ch.currency+=reward;
   if(ch.career){ch.career.reputation=Math.min(100,(ch.career.reputation||0)+q.stakes);}
   world.events.push(makeEvent('Local story resolved',`${ch.name} brought “${q.title}” to a conclusion.`,[ch.id]));
   world.lifeLog.push({characterId:ch.id,title:'Story resolved',detail:`${q.title} concluded. ${reward} coins were earned through the outcome.`,worldDate:worldDate(),hour:world.clock.hour});
 }
 saveWorld();
}
function abandonThread(id){const ch=activeCharacter(),q=world.storyThreads.find(x=>x.id===id);if(!ch||!q)return;q.status='abandoned';q.notes.push(`${worldDate()}: ${ch.name} chose to stop pursuing this.`);world.lifeLog.push({characterId:ch.id,title:'Story left behind',detail:`${q.title} was left unresolved. The world may continue without you.`,worldDate:worldDate(),hour:world.clock.hour});saveWorld();}
function generateContextThread(){
 const ch=activeCharacter();if(!ch)return;ensureStoryState();let kind='community';
 const rels=relationshipPeople(ch);if(rels.some(x=>(x.r.tension||0)>12)||rels.some(x=>(x.r.closeness||0)>55))kind='relationship';
 else if((ch.career?.shifts||0)>2)kind='career';
 else if((ch.knownSettlementIds||[]).length>1)kind='travel';
 const tpl=storyTemplates[kind][Math.floor(Math.random()*storyTemplates[kind].length)],town=currentSettlement(ch)||ensureHomeSettlement(ch);
 const q={id:uid('thread'),characterId:ch.id,settlementId:town.id,title:tpl[0],summary:tpl[1],kind,status:'active',stage:0,createdAt:worldDate(),locationHint:tpl[2],stakes:2,notes:['This opportunity emerged from the character’s current life and world state.'],history:[]};
 world.storyThreads.push(q);saveWorld();
}
function renderStories(){
 if(!$('storiesView')||!world)return;const ch=activeCharacter();$('noStoryLife').classList.toggle('hidden',!!ch);$('storyGame').classList.toggle('hidden',!ch);if(!ch)return;ensureStoryState();
 const threads=storyForCharacter(ch),active=threads.filter(x=>x.status==='active'),rumors=world.rumors.filter(r=>r.characterId===ch.id&&!r.investigated).slice(-12).reverse();
 $('storySummary').innerHTML=`<span>Active <b>${active.length}</b></span><span>Rumors <b>${rumors.length}</b></span><span>Resolved <b>${threads.filter(x=>x.status==='resolved').length}</b></span><span>Abandoned <b>${threads.filter(x=>x.status==='abandoned').length}</b></span>`;
 $('rumorList').innerHTML=rumors.length?rumors.map(r=>`<article class="story-card"><p class="eyebrow">${escapeHtml(r.kind.toUpperCase())} · ${r.reliability}% RELIABLE</p><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.text)}</p><small>Heard from a ${escapeHtml(r.source)} · ${escapeHtml(r.heardAt)}</small><div class="actions compact"><button data-pursue-rumor="${r.id}">Look Into It</button></div></article>`).join(''):'<p class="muted">No fresh rumors are waiting. The world does not owe you a quest.</p>';
 $('rumorList').querySelectorAll('[data-pursue-rumor]').forEach(b=>b.onclick=()=>pursueRumor(b.dataset.pursueRumor));
 $('threadList').innerHTML=active.length?active.map(q=>`<article class="story-card active-thread"><div class="section-head"><div><p class="eyebrow">${escapeHtml(q.kind.toUpperCase())} · STAGE ${q.stage+1}/3</p><h3>${escapeHtml(q.title)}</h3></div><span class="status-pill">Stakes ${q.stakes}</span></div><p>${escapeHtml(q.summary)}</p><small>Suggested area: ${escapeHtml(q.locationHint)} · begun ${escapeHtml(q.createdAt)}</small><div class="story-progress"><span style="width:${Math.min(100,q.stage/3*100)}%"></span></div><div class="actions compact"><button data-thread="${q.id}" data-approach="direct">Act Directly</button><button data-thread="${q.id}" data-approach="careful">Investigate Carefully</button><button data-thread="${q.id}" data-approach="creative">Try Something Creative</button><button data-abandon="${q.id}">Leave It</button></div><details><summary>Thread notes</summary>${q.notes.slice().reverse().map(n=>`<p>${escapeHtml(n)}</p>`).join('')}</details></article>`).join(''):'<p class="muted">You have no active story threads. Ordinary life can continue until something catches your attention.</p>';
 $('threadList').querySelectorAll('[data-thread]').forEach(b=>b.onclick=()=>threadApproach(world.storyThreads.find(q=>q.id===b.dataset.thread),b.dataset.approach));$('threadList').querySelectorAll('[data-abandon]').forEach(b=>b.onclick=()=>abandonThread(b.dataset.abandon));
 const past=threads.filter(x=>x.status!=='active').slice().reverse().slice(0,15);$('storyHistory').innerHTML=past.length?past.map(q=>`<div class="event"><strong>${escapeHtml(q.title)}</strong><div>${escapeHtml(q.status)} · ${escapeHtml(q.kind)}</div><small>${escapeHtml(q.resolvedAt||q.createdAt)}</small></div>`).join(''):'<p class="muted">No completed story threads yet.</p>';
}
function relationshipPeople(ch){return world.relationships.filter(r=>r.a===ch.id||r.b===ch.id).map(r=>{const oid=r.a===ch.id?r.b:r.a;const n=world.npcs.find(x=>x.id===oid)||world.characters.find(x=>x.id===oid);if(n)normalizeRelationship(r,ch,n);return {r,n};}).filter(x=>x.n);}
function renderRelationships(){
 if(!$('relationshipsView')||!world)return;const ch=activeCharacter();const empty=$('noRelationshipLife'),body=$('relationshipGame');empty.classList.toggle('hidden',!!ch);body.classList.toggle('hidden',!ch);if(!ch)return;ensureRelationshipSimulation();
 const rows=relationshipPeople(ch).sort((a,b)=>(b.r.closeness||0)-(a.r.closeness||0));
 $('relationshipSummary').innerHTML=`<strong>${rows.length}</strong> known relationships · <strong>${rows.filter(x=>x.r.stage==='friend'||x.r.stage==='close friend').length}</strong> friendships · <strong>${rows.filter(x=>x.r.status==='romantic').length}</strong> romantic · <strong>${rows.filter(x=>x.r.type==='former romance').length}</strong> former`;
 $('relationshipCards').innerHTML=rows.length?rows.map(({r,n})=>{const adult=ch.age>=18&&Number(n.age||0)>=18,romantic=r.status==='romantic'||r.type==='romance',former=r.type==='former romance'||r.stage==='ex-partner';return `<article class="relationship-card"><div class="section-head"><div><p class="eyebrow">${escapeHtml((r.familyRole||r.stage||r.type).toUpperCase())}</p><h3>${escapeHtml(n.name)}</h3><p class="muted">${escapeHtml(n.role||n.occupation||n.nation||'Person')}</p></div><span class="status-pill">${escapeHtml(r.stage)}</span></div><div class="rel-metrics"><span>Trust <b>${r.trust}</b></span><span>Respect <b>${r.respect}</b></span><span>Affection <b>${r.affection}</b></span><span>Tension <b>${r.tension}</b></span><span>Closeness <b>${r.closeness}</b></span><span>Compatibility <b>${r.compatibility}</b></span>${r.type!=='family'?`<span>Attraction <b>${r.attraction}</b></span><span>Security <b>${r.security}</b></span><span>Jealousy <b>${r.jealousy}</b></span><span>Distance <b>${r.distanceDays}d</b></span>`:''}</div><div class="actions compact rel-actions"><button data-relact="talk" data-npc="${n.id}">Talk</button><button data-relact="spend" data-npc="${n.id}">Spend Time</button><button data-relact="confide" data-npc="${n.id}">Confide</button>${r.tension>8?`<button data-relact="reconcile" data-npc="${n.id}">Reconcile</button>`:`<button data-relact="argue" data-npc="${n.id}">Disagree</button>`}${r.type!=='family'&&adult&&ch.romancePreference!=='friends-only'&&!romantic&&!former?`<button data-relact="flirt" data-npc="${n.id}">Flirt</button><button data-relact="express" data-npc="${n.id}">Express Feelings</button>`:''}${romantic&&adult?`<button data-dateact="date" data-npc="${n.id}">Go on Date</button><button data-dateact="expectations" data-npc="${n.id}">Discuss Expectations</button><button data-dateact="space" data-npc="${n.id}">Ask for Space</button><button data-dateact="intimacy" data-npc="${n.id}">Private Intimacy</button><button data-dateact="breakup" data-npc="${n.id}">End Relationship</button>`:''}${former&&adult?`<button data-dateact="reconcile-romance" data-npc="${n.id}">Try Again</button>`:''}</div>${romantic?`<div class="relationship-expectations"><small>Commitment: ${escapeHtml(r.commitment||r.expectations.commitment)} · Communication: ${escapeHtml(r.expectations.communication)} · Independence: ${escapeHtml(r.expectations.independence)}</small></div>`:''}<details><summary>Shared memories (${r.sharedMemories.length})</summary><div class="memory-list">${r.sharedMemories.slice(-10).reverse().map(m=>`<p>${escapeHtml(m)}</p>`).join('')||'<p class="muted">No strong shared memories yet.</p>'}</div></details></article>`}).join(''):'<p class="muted">This life has not formed any relationships yet.</p>';
 $('relationshipCards').querySelectorAll('[data-relact]').forEach(b=>b.addEventListener('click',()=>socialAction(b.dataset.npc,b.dataset.relact)));
 $('relationshipCards').querySelectorAll('[data-dateact]').forEach(b=>b.addEventListener('click',()=>datingAction(b.dataset.npc,b.dataset.dateact)));
 renderRelationshipSimulationLog(ch);
}
function renderLife(){if(!world||!$('lifeGame'))return;const ch=activeCharacter();$('noActiveLife').classList.toggle('hidden',!!ch);$('lifeGame').classList.toggle('hidden',!ch);if(!ch)return;ensureCharacterLifeState(ch);ensureRegionalWorld(ch);const town=currentSettlement(ch),place=town.places.find(p=>p.key===ch.currentLocationKey)||town.places[0];$('lifeCharacterName').textContent=ch.name;$('lifeContext').textContent=`${ch.occupation} · ${bendingLabel(ch.bending.element)} · ${worldDate()} · ${String(world.clock.hour).padStart(2,'0')}:00 · ${world.environment.weather}`;$('townName').textContent=town.name;$('townDescription').textContent=town.description;$('currentLocationPill').textContent=place.name;$('sceneLocationName').textContent=place.name;$('sceneDescription').textContent=place.desc;
 const vitals=[['Coins',ch.currency+' ◈',Math.min(100,ch.currency)],['Energy',ch.needs.energy+'%',ch.needs.energy],['Hunger',ch.needs.hunger+'%',100-ch.needs.hunger],['Morale',ch.needs.morale+'%',ch.needs.morale]];$('lifeVitals').innerHTML=vitals.map(v=>`<div class="vital"><span>${v[0]}</span><strong class="${v[0]==='Coins'?'coin':''}">${v[1]}</strong><div class="meter"><span style="width:${v[2]}%"></span></div></div>`).join('');
 $('townLocations').innerHTML=town.places.map(p=>`<button class="location-button ${p.key===ch.currentLocationKey?'current':''}" data-place="${p.key}"><strong>${p.icon} ${escapeHtml(p.name)}</strong><small>${p.key===ch.currentLocationKey?'You are here':'About 1 hour away'}</small></button>`).join('');$('townLocations').querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>travelTo(b.dataset.place)));
 const present=presentNpcs(town,ch.currentLocationKey);$('presentNpcList').innerHTML=present.length?present.map(n=>`<div class="person-row"><div><strong>${escapeHtml(n.name)}</strong><small>${escapeHtml(n.role||n.occupation||'Resident')}</small></div><button data-social="${n.id}">Talk</button></div>`).join(''):'<p class="muted">No familiar residents are here right now. Their schedules may bring them back later.</p>';$('presentNpcList').querySelectorAll('[data-social]').forEach(b=>b.addEventListener('click',()=>socialize(b.dataset.social)));
 $('localActions').innerHTML=actionsForLocation(ch.currentLocationKey).map(a=>`<button data-action="${a[0]}"><strong>${a[1]}</strong><small>${a[2]}</small></button>`).join('');$('localActions').querySelectorAll('[data-action]').forEach(b=>b.addEventListener('click',()=>doLocalAction(b.dataset.action)));
 const rels=world.relationships.filter(r=>r.a===ch.id||r.b===ch.id).map(r=>{const oid=r.a===ch.id?r.b:r.a;return {r,n:world.npcs.find(n=>n.id===oid)||world.characters.find(n=>n.id===oid)}}).filter(x=>x.n).sort((a,b)=>(b.r.trust||0)-(a.r.trust||0)).slice(0,8);$('townRelationships').innerHTML=rels.length?rels.map(x=>`<div class="relationship-row"><strong>${escapeHtml(x.n.name)} · ${escapeHtml(x.r.familyRole||x.r.type||'acquaintance')}</strong><small>Trust ${x.r.trust||0} · Respect ${x.r.respect||0} · Affection ${x.r.affection||0}</small></div>`).join(''):'<p class="muted">No relationships recorded yet.</p>';
 const opps=world.opportunities.filter(o=>o.settlementId===town.id).slice(-6).reverse();$('opportunityList').innerHTML=opps.length?opps.map(o=>{const dest=town.places.find(p=>p.key===o.locationKey);return `<div class="opportunity ${o.status}"><strong>${escapeHtml(o.title)}</strong><small>${escapeHtml(o.description)}</small><div class="actions compact" style="margin-top:8px"><span class="muted">${escapeHtml(dest?.name||'Town')} · ${o.reward} ◈</span>${o.status==='open'?`<button data-opp="${o.id}">${ch.currentLocationKey===o.locationKey?'Help':'Go there'}</button>`:'<span>Resolved</span>'}</div></div>`}).join(''):'<p class="muted">Nothing obvious is asking for your attention right now.</p>';$('opportunityList').querySelectorAll('[data-opp]').forEach(b=>b.addEventListener('click',()=>resolveOpportunity(b.dataset.opp)));
 const rows=(world.lifeLog||[]).filter(x=>x.characterId===ch.id).slice(-20).reverse();$('lifeLog').innerHTML=rows.length?rows.map(x=>`<div class="event"><strong>${escapeHtml(x.title)}</strong><div>${escapeHtml(x.detail)}</div><small>${escapeHtml(x.worldDate)} · ${String(x.hour).padStart(2,'0')}:00</small></div>`).join(''):'<div class="event"><strong>Your first morning</strong><div>The day is ordinary so far. That is exactly the point.</div><small>'+escapeHtml(worldDate())+'</small></div>';
 renderGmPanel();
}

$('createWorldBtn').addEventListener('click',newWorld);$('loadWorldBtn').addEventListener('click',loadWorld);$('saveWorldBtn').addEventListener('click',saveWorld);$('newWorldBtn').addEventListener('click',showLauncher);$('addTestEventBtn').addEventListener('click',simulateEvent);$('exportWorldBtn').addEventListener('click',exportWorld);$('charNation').addEventListener('change',()=>{updateRegions();updateBendingCompatibility();});$('charBending').addEventListener('change',updateBendingCompatibility);$('creatorBackBtn').addEventListener('click',()=>showCreatorStep(creatorStep-1));$('creatorNextBtn').addEventListener('click',()=>{if(creatorStep===0&&!$('charName').value.trim()){alert('Enter a character name first.');return;}showCreatorStep(creatorStep+1);});$('characterForm').addEventListener('submit',createCharacter);$('randomizeCharacterBtn').addEventListener('click',randomizeCharacter);document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>openTab(b.dataset.tab)));document.querySelectorAll('[data-open-creator]').forEach(b=>b.addEventListener('click',()=>openTab('creatorView')));document.querySelectorAll('[data-advance]').forEach(b=>b.addEventListener('click',()=>advanceHours(Number(b.dataset.advance))));$('importWorldInput').addEventListener('change',e=>{const f=e.target.files?.[0];if(f)importWorld(f);});if($('refreshOpportunityBtn'))$('refreshOpportunityBtn').addEventListener('click',refreshOpportunity);
if($('practiceFundamentalsBtn'))$('practiceFundamentalsBtn').addEventListener('click',()=>practiceTraining('fundamentals'));if($('conditioningBtn'))$('conditioningBtn').addEventListener('click',()=>practiceTraining('conditioning'));if($('studyBtn'))$('studyBtn').addEventListener('click',()=>practiceTraining('study'));
if($('gmSubmitBtn'))$('gmSubmitBtn').addEventListener('click',submitFreeformAction);if($('gmActionInput'))$('gmActionInput').addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter')submitFreeformAction();});if($('gmMode'))$('gmMode').addEventListener('change',e=>{world.gmSettings=world.gmSettings||{};world.gmSettings.mode=e.target.value;saveWorld();});if($('gmEndpoint'))$('gmEndpoint').addEventListener('change',e=>{world.gmSettings=world.gmSettings||{};world.gmSettings.endpoint=e.target.value.trim()||'/api/gm';saveWorld();});
$('deleteWorldBtn').addEventListener('click',()=>{if(!confirm('Delete the local world save on this device?'))return;localStorage.removeItem(STORAGE_KEY);LEGACY_STORAGE_KEYS.forEach(k=>localStorage.removeItem(k));world=null;$('exportWorldBtn').disabled=true;showLauncher();$('saveStatus').textContent='Local save deleted';});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js').catch(()=>{}));

// Sprint 2.10 story controls
$('hearRumorBtn')?.addEventListener('click',generateRumor);
$('contextStoryBtn')?.addEventListener('click',generateContextThread);



$('meditateBtn')?.addEventListener('click',meditate);$('spiritWorldBtn')?.addEventListener('click',enterSpiritWorld);$('disturbanceBtn')?.addEventListener('click',generateSpiritDisturbance);

$('authorityBtn')?.addEventListener('click',faceAuthorities);$('testCrimeBtn')?.addEventListener('click',()=>commitCrime('theft',1));

$('rentHomeBtn')?.addEventListener('click',rentHome);$('openBusinessBtn')?.addEventListener('click',openBusiness);$('publicProjectBtn')?.addEventListener('click',startPublicProject);$('damageEconomyBtn')?.addEventListener('click',damageSettlement);

$('createEmergentArcBtn')?.addEventListener('click',createEmergentArc);

$('growFamilyBtn')?.addEventListener('click',createPlayerChild);

$('saveAsSlotBtn')?.addEventListener('click',saveAsNewSlot);
document.querySelectorAll('[data-ui-setting]').forEach(el=>el.addEventListener('change',()=>updateUiSetting(el.dataset.uiSetting,el.type==='checkbox'?String(el.checked):el.value)));

$('mobileNavToggle')?.addEventListener('click',()=>document.querySelector('.tabs')?.classList.toggle('mobile-open'));
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>document.querySelector('.tabs')?.classList.remove('mobile-open')));

function alphaAdvanceYear(){if(!world)return;if(!confirm('Advance exactly one simulated year for integration testing? This changes the save.'))return;const target=world.clock.year+1;while(world.clock.year<target)advanceHours(24);renderAlphaAudit();saveWorld();}
$('runAlphaAuditBtn')?.addEventListener('click',renderAlphaAudit);
$('alphaYearTestBtn')?.addEventListener('click',alphaAdvanceYear);

$('checkAiConnectionBtn')?.addEventListener('click',checkAiConnection);
$('saveAiSettingsBtn')?.addEventListener('click',saveAiSettings);

$('dialogueSendBtn')?.addEventListener('click',sendDialogueTurn);
$('dialogueEndBtn')?.addEventListener('click',endDialogue);
$('dialogueInput')?.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='Enter')sendDialogueTurn();});
document.querySelectorAll('[data-dialogue-topic]').forEach(b=>b.addEventListener('click',()=>dialogueQuickTopic(b.dataset.dialogueTopic)));

$('combatRecoverBtn')?.addEventListener('click',()=>combatAction('recover'));
$('combatEscapeBtn')?.addEventListener('click',()=>combatAction('escape'));
$('combatSurrenderBtn')?.addEventListener('click',()=>combatAction('surrender'));
$('combatCoverBtn')?.addEventListener('click',()=>combatAction('cover'));
$('combatCloserBtn')?.addEventListener('click',()=>combatAction('closer'));
$('combatFartherBtn')?.addEventListener('click',()=>combatAction('farther'));
$('combatCaptureBtn')?.addEventListener('click',()=>combatAction('capture'));
$('combatIntent')?.addEventListener('change',e=>combatAction('intent',e.target.value));
$('combatTargetSelect')?.addEventListener('change',e=>combatAction('target',e.target.value));

$('checkImageConnectionBtn')?.addEventListener('click',checkImageConnection);

$('progressionProfile')?.addEventListener('change',e=>setBalanceProfile(e.target.value));

$('runBetaCheckBtn')?.addEventListener('click',renderBetaDiagnostics);$('repairBetaBtn')?.addEventListener('click',repairWorldIntegrity);$('downloadBetaBackupBtn')?.addEventListener('click',downloadBetaBackup);

$('enterMyLifeBtn')?.addEventListener('click',recoverEnterMyLife);
