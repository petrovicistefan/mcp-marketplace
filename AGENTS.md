# Agent rules

1. **Pin sync** — every plugin `.mcp.json` npx argument must pin `package@version` matching `npm view <package> version`.
2. **No invented servers** — only list packages that exist and are intended for this marketplace.
3. **Local-first messaging** — do not imply cloud accounts are required for stdio plugins.
4. **English** — manifests, README and commits stay in English.

`npm run check:rules` (pin check) must stay green after any pin or publish.
