# MCP Dependency Doctor

This plugin adds the mcp-dependency-doctor MCP server to Claude Code. The server reads package.json and package-lock.json to list dependencies, run an npm audit and report the health of each package, in read-only mode. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-dependency-doctor@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-dependency-doctor`, so Node.js 22 or newer must be available on your PATH.

## What data it touches

MCP Dependency Doctor runs entirely locally and processes:
- package.json and package-lock.json files from your local filesystem
- npm audit results (read-only)
- Package health metadata from npm registry (public data)

All processing happens on your machine in read-only mode. No data is sent to any remote service except standard npm audit checks. No credentials are required.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-dependency-doctor#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-dependency-doctor/issues). The code is MIT licensed.
