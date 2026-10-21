# MCP Database Doctor

This plugin adds the mcp-database-doctor MCP server to Claude Code. The server reviews SQL for common performance and safety problems, flags risky migrations, suggests candidate indexes and reads EXPLAIN JSON plans, all offline and without any database credentials. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-database-doctor@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-database-doctor`, so Node.js 22 or newer must be available on your PATH.

## What data it touches

MCP Database Doctor runs entirely locally and processes:
- SQL queries you provide for analysis
- PostgreSQL migration files from your local filesystem
- EXPLAIN JSON plans you provide

All processing happens on your machine. No database credentials are required or used. No data is sent to any remote service. The server performs static analysis only.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-database-doctor#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-database-doctor/issues). The code is MIT licensed.
