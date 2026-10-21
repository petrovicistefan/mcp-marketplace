# MCP Cost Optimizer

This plugin adds the mcp-cost-optimizer MCP server to Claude Code. The server analyzes LLM usage records against the per-token prices you provide, reports where the spend goes, and estimates the saving from moving workloads to a cheaper model. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-cost-optimizer@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-cost-optimizer`, so Node.js 22 or newer must be available on your PATH.

## What data it touches

MCP Cost Optimizer runs entirely locally and processes:
- LLM usage records you provide (token counts, model names, timestamps)
- Pricing information you configure
- Cost analysis results

All processing happens on your machine. No data is sent to any remote service. No credentials or API keys are required.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-cost-optimizer#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-cost-optimizer/issues). The code is MIT licensed.
