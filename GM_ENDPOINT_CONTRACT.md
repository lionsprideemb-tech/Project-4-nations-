# Project Four Nations — AI Endpoint Contract v2

The browser simulation is the rules authority. The AI server is a language layer.

## Health
`GET /api/health`

## Resolved-action narration
`POST /api/gm`

```json
{
  "version": 2,
  "requestType": "narrate_resolved_action",
  "context": {
    "action": "player action",
    "resolution": {"label":"Success"},
    "directives": []
  }
}
```

Response:
```json
{"narration":"...","provider":"openai","model":"...","traceId":"..."}
```

## NPC dialogue
The same `POST /api/gm` endpoint also accepts:

```json
{
  "version": 2,
  "requestType": "npc_dialogue_turn",
  "context": {
    "world": {},
    "location": {},
    "character": {},
    "npc": {
      "identity": {},
      "relationship": {},
      "memories": [],
      "facts": [],
      "promises": [],
      "secrets": [],
      "suspectedLies": []
    },
    "session": {
      "tone": "neutral",
      "emotionalState": {},
      "recentTurns": [],
      "topics": []
    },
    "playerText": "What do you know about the missing merchant?",
    "contentSettings": {},
    "directives": []
  }
}
```

Response:
```json
{"dialogue":"NPC reply only","provider":"openai","model":"...","traceId":"..."}
```

## Authority boundary
The AI never directly edits the world save and does not decide rewards, outcomes, bending access, items, relationship changes, or factual NPC knowledge. Those remain simulation-side.

## Security
API keys remain server-side only.


# Image Generation Endpoint — Phase 5.6

`POST /api/image`

Example portrait request:

```json
{
  "kind": "portrait",
  "entityId": "pc_123",
  "prompt": "Locked visual identity prompt...",
  "size": "1024x1536",
  "quality": "medium",
  "referenceAssetUrls": []
}
```

Example scene request can include up to four previously generated local assets:

```json
{
  "kind": "scene",
  "entityId": "visual_123",
  "prompt": "Visual Memory scene prompt...",
  "size": "1536x1024",
  "quality": "medium",
  "referenceAssetUrls": [
    "/generated-art/portrait_pc_123.png",
    "/generated-art/portrait_npc_456.png"
  ]
}
```

Response:

```json
{
  "assetUrl": "/generated-art/scene_visual_123.png",
  "provider": "openai",
  "model": "configured image model",
  "usedReferences": 2,
  "traceId": "img_..."
}
```

The server only accepts reference paths from its own `generated-art/` directory.
