# MCP Dependency Doctor

This plugin adds the mcp-dependency-doctor MCP server to Claude Code. The server reads package.json and package-lock.json to list dependencies, run an npm audit and report the health of each package, in read-only mode. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-dependency-doctor@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-dependency-doctor`, so Node.js 22 or newer must be available on your PATH.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-dependency-doctor#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-dependency-doctor/issues). The code is MIT licensed.
