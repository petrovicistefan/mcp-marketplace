# MCP marketplace for Claude Code

Local-first MCP servers for AI coding agents, by [Stefan Petrovici](https://github.com/petrovicistefan). Everything runs on your machine over stdio; no accounts or API keys.

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install api-guardian@petrovicistefan-mcp
```

| Plugin | What it does |
| --- | --- |
| `api-guardian` | OpenAPI contract checks and breaking-change detection |
| `cost-optimizer` | LLM cost analysis and model-switch savings estimates |
| `database-doctor` | Offline PostgreSQL SQL, migration and EXPLAIN diagnostics |
| `dependency-doctor` | Read-only npm dependency inventory, audit and health |
| `seo-auditor` | Read-only static SEO audits (needs Python 3.11+) |

Looking for security scanning of the MCP servers you use? See [mcp-security-guard](https://github.com/petrovicistefan/mcp-security-guard) (`/plugin marketplace add petrovicistefan/mcp-security-guard`).

All servers are also on npm and in the official MCP Registry, so any MCP client can run them with `npx -y <package>`.

MIT licensed.
