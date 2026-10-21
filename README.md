# MCP Marketplace – Local-first guardrails for AI coding agents

**Claude Code plugin marketplace: 7 local-first MCP servers for safer AI coding — MCP security, Postgres migrations, OpenAPI breaking changes, npm deps, LLM costs, SEO, affiliate deals.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/petrovicistefan/mcp-marketplace?style=social)](https://github.com/petrovicistefan/mcp-marketplace)

All tools run locally over stdio. No API keys. No accounts. No external dependencies.

---

## 🚀 Quickstart

Install the entire marketplace in Claude Code:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
```

Then install individual plugins:

```
/plugin install mcp-api-guardian@petrovicistefan-mcp
/plugin install mcp-cost-optimizer@petrovicistefan-mcp
/plugin install mcp-database-doctor@petrovicistefan-mcp
/plugin install mcp-dealfinder@petrovicistefan-mcp
/plugin install mcp-dependency-doctor@petrovicistefan-mcp
/plugin install mcp-seo-auditor@petrovicistefan-mcp
/plugin install mcp-security-guard@petrovicistefan-mcp
```

Or install everything at once:

```bash
/plugin install mcp-api-guardian@petrovicistefan-mcp mcp-cost-optimizer@petrovicistefan-mcp mcp-database-doctor@petrovicistefan-mcp mcp-dealfinder@petrovicistefan-mcp mcp-dependency-doctor@petrovicistefan-mcp mcp-seo-auditor@petrovicistefan-mcp mcp-security-guard@petrovicistefan-mcp
```

<!-- TODO: Add demo GIF showing installation and usage -->

---

## 📦 What's Included

| Plugin | What it does | Version | Links |
| --- | --- | --- | --- |
| [`mcp-security-guard`](https://github.com/petrovicistefan/mcp-security-guard) | Security scanning of MCP servers and agent integrations | 0.9.1 | [![petrovicistefan/mcp-security-guard MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-security-guard/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-security-guard) · [⭐ Star](https://github.com/petrovicistefan/mcp-security-guard) · [npm](https://www.npmjs.com/package/mcp-security-guard) |
| [`mcp-api-guardian`](https://github.com/petrovicistefan/mcp-api-guardian) | OpenAPI contract checks and breaking-change detection | 0.1.2 | [![petrovicistefan/mcp-api-guardian MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-api-guardian/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-api-guardian) · [⭐ Star](https://github.com/petrovicistefan/mcp-api-guardian) · [npm](https://www.npmjs.com/package/mcp-api-guardian) |
| [`mcp-database-doctor`](https://github.com/petrovicistefan/mcp-database-doctor) | Offline PostgreSQL SQL, migration and EXPLAIN diagnostics | 0.1.2 | [![petrovicistefan/mcp-database-doctor MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-database-doctor/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-database-doctor) · [⭐ Star](https://github.com/petrovicistefan/mcp-database-doctor) · [npm](https://www.npmjs.com/package/mcp-database-doctor) |
| [`mcp-dealfinder`](https://github.com/petrovicistefan/mcp-dealfinder) | Local affiliate product search with tracked links and disclosure | 0.1.1 | [![petrovicistefan/mcp-dealfinder MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-dealfinder/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-dealfinder) · [⭐ Star](https://github.com/petrovicistefan/mcp-dealfinder) · [npm](https://www.npmjs.com/package/mcp-dealfinder) |
| [`mcp-dependency-doctor`](https://github.com/petrovicistefan/mcp-dependency-doctor) | Read-only npm dependency inventory, audit and health | 0.1.2 | [![petrovicistefan/mcp-dependency-doctor MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-dependency-doctor/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-dependency-doctor) · [⭐ Star](https://github.com/petrovicistefan/mcp-dependency-doctor) · [npm](https://www.npmjs.com/package/mcp-dependency-doctor) |
| [`mcp-cost-optimizer`](https://github.com/petrovicistefan/mcp-cost-optimizer) | LLM cost analysis and model-switch savings estimates | 0.1.2 | [![petrovicistefan/mcp-cost-optimizer MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-cost-optimizer/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-cost-optimizer) · [⭐ Star](https://github.com/petrovicistefan/mcp-cost-optimizer) · [npm](https://www.npmjs.com/package/mcp-cost-optimizer) |
| [`mcp-seo-auditor`](https://github.com/petrovicistefan/mcp-seo-auditor) | Read-only static SEO audits (requires Python 3.11+) | 0.1.2 | [![petrovicistefan/mcp-seo-auditor MCP server](https://glama.ai/mcp/servers/petrovicistefan/mcp-seo-auditor/badges/score.svg)](https://glama.ai/mcp/servers/petrovicistefan/mcp-seo-auditor) · [⭐ Star](https://github.com/petrovicistefan/mcp-seo-auditor) · [npm](https://www.npmjs.com/package/mcp-seo-auditor) |

All plugins are also available on npm and in the [official MCP Registry](https://github.com/modelcontextprotocol/servers), so any MCP client can run them with `npx -y <package>`.

---

## 💡 Why Local-First?

**Privacy by Design**: All analysis runs on your machine. No code leaves your laptop. No telemetry. No API keys to manage.

**Zero Dependencies**: No cloud services, no external APIs, no accounts. Just install and run.

**Works Offline**: Full functionality without internet. Perfect for airgapped environments and secure workspaces.

**Developer-Friendly**: Built on the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), so they work with Claude Code, Cursor, Claude Desktop, and any other MCP-compatible client.

---

## 🎯 Use Cases

### Before You Push
```
"Check this OpenAPI spec for breaking changes compared to main"
"Analyze potential cost of adding GPT-4o to this feature"
"Review this Postgres migration for risks"
```

### During Code Review
```
"Audit npm dependencies for security issues"
"Check if this MCP server follows security best practices"
"Run SEO audit on the staging deployment"
```

### Refactoring & Optimization
```
"Find missing indexes in these SQL queries"
"Estimate cost savings if we switch from GPT-4 to Claude Sonnet"
"Identify unused dependencies we can remove"
```

---

## 🔧 Alternative MCP Clients

While optimized for Claude Code, all plugins work with any MCP client:

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "mcp-security-guard": {
      "command": "npx",
      "args": ["-y", "mcp-security-guard"]
    },
    "mcp-api-guardian": {
      "command": "npx",
      "args": ["-y", "mcp-api-guardian"]
    }
  }
}
```

### Cursor

Add to `.cursorrules` or Cursor settings:

```json
{
  "mcp": {
    "servers": {
      "mcp-security-guard": {
        "command": "npx",
        "args": ["-y", "mcp-security-guard"]
      }
    }
  }
}
```

### Other MCP Clients

Any client supporting stdio-based MCP servers can run these tools via `npx`:

```bash
npx -y mcp-security-guard
npx -y mcp-api-guardian
npx -y mcp-database-doctor
# ... etc
```

---

---

## 📝 License

MIT © [Stefan Petrovici](https://github.com/petrovicistefan)

---

## ⭐ Support

If these tools help you build safer AI-powered apps, please star the repos to help others discover them:

- ⭐ [mcp-marketplace](https://github.com/petrovicistefan/mcp-marketplace)
- ⭐ [mcp-security-guard](https://github.com/petrovicistefan/mcp-security-guard)
- ⭐ [mcp-api-guardian](https://github.com/petrovicistefan/mcp-api-guardian)
- ⭐ [mcp-database-doctor](https://github.com/petrovicistefan/mcp-database-doctor)
- ⭐ [mcp-dealfinder](https://github.com/petrovicistefan/mcp-dealfinder)
- ⭐ [mcp-dependency-doctor](https://github.com/petrovicistefan/mcp-dependency-doctor)
- ⭐ [mcp-cost-optimizer](https://github.com/petrovicistefan/mcp-cost-optimizer)
- ⭐ [mcp-seo-auditor](https://github.com/petrovicistefan/mcp-seo-auditor)

---

**Part of the petrovicistefan MCP suite** – [Browse all tools →](https://github.com/petrovicistefan/mcp-marketplace)
