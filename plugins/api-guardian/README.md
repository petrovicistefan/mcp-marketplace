# MCP API Guardian

This plugin adds the mcp-api-guardian MCP server to Claude Code. The server compares two OpenAPI specs and reports breaking changes, and checks a spec for contract problems, so an agent can review API changes before they ship. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-api-guardian@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-api-guardian`, so Node.js 22 or newer must be available on your PATH.

## What data it touches

MCP API Guardian runs entirely locally and processes:
- OpenAPI specification files from your local filesystem or URLs you provide
- API contract analysis results

All processing happens on your machine. No data is sent to any remote service. The server only reads and analyzes OpenAPI spec files.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-api-guardian#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-api-guardian/issues). The code is MIT licensed.
