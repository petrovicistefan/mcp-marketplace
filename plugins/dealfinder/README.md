# MCP DealFinder

This plugin adds the mcp-dealfinder MCP server to Claude Code. The server searches affiliate product feeds from Awin, Amazon, and other networks, and returns buy links built with your own affiliate IDs and a clear disclosure. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-dealfinder@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-dealfinder`, so Node.js 20 or newer must be available on your PATH.

## Configuration

DealFinder requires a configuration file to specify your affiliate feeds and network credentials. Set the `DEALFINDER_CONFIG` environment variable to the absolute path of your config file:

```json
{
  "mcpServers": {
    "dealfinder": {
      "command": "npx",
      "args": ["-y", "mcp-dealfinder"],
      "env": {
        "DEALFINDER_CONFIG": "/absolute/path/to/dealfinder.config.json"
      }
    }
  }
}
```

Without a config file, DealFinder runs in demo mode with fictional products so you can test it immediately.

## What data it touches

DealFinder runs entirely locally and processes:
- Your local affiliate feed files (CSV or JSON)
- Your affiliate network configuration (API keys, publisher IDs, affiliate tags)

All data stays on your machine. No information is sent to any remote service. The server only reads your feed files and builds affiliate links according to your network configurations.

## Learn more

Tools, examples and configuration details are documented in the [project README](https://github.com/petrovicistefan/mcp-dealfinder#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-dealfinder/issues). The code is MIT licensed.
