# MCP Deploy Bridge

This plugin adds the mcp-deploy-bridge MCP server to Claude Code. The server gives your agent one schema for list/get/logs/redeploy/rollback across Vercel and Cloudflare Workers, using the CLIs already signed in on your machine. Write tools require `confirm: true`. It never asks for platform API keys and never returns environment variable values.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-deploy-bridge@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-deploy-bridge`, so Node.js 22.18+ must be on your PATH. Install and sign in to `vercel` and/or `wrangler` for the platforms you use.

## What data it touches

MCP Deploy Bridge runs locally and:
- Reads local project link files (`.vercel/project.json`, `wrangler.toml` / `wrangler.jsonc`)
- Spawns your signed-in platform CLIs
- Returns normalized deployment metadata and redacted log lines

No platform tokens are stored by this server. CLI output is redacted before it reaches the model.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-deploy-bridge#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-deploy-bridge/issues). The code is MIT licensed.
