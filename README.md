# MCP marketplace for Claude Code

Local-first MCP servers for AI coding agents, by [Stefan Petrovici](https://github.com/petrovicistefan). Everything runs on your machine over stdio; no accounts or API keys.

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-api-guardian@petrovicistefan-mcp
```

| MCP | What it does | Support |
| --- | --- | --- |
| [`mcp-api-guardian`](https://github.com/petrovicistefan/mcp-api-guardian) | OpenAPI contract checks and breaking-change detection | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-api-guardian) |
| [`mcp-cost-optimizer`](https://github.com/petrovicistefan/mcp-cost-optimizer) | LLM cost analysis and model-switch savings estimates | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-cost-optimizer) |
| [`mcp-database-doctor`](https://github.com/petrovicistefan/mcp-database-doctor) | Offline PostgreSQL SQL, migration and EXPLAIN diagnostics | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-database-doctor) |
| [`mcp-dependency-doctor`](https://github.com/petrovicistefan/mcp-dependency-doctor) | Read-only npm dependency inventory, audit and health | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-dependency-doctor) |
| [`mcp-seo-auditor`](https://github.com/petrovicistefan/mcp-seo-auditor) | Read-only static SEO audits (needs Python 3.11+) | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-seo-auditor) |
| [`mcp-security-guard`](https://github.com/petrovicistefan/mcp-security-guard) | Security scanning of MCP servers and agent integrations | [⭐ Star on GitHub](https://github.com/petrovicistefan/mcp-security-guard) |


Security Guard can also be added with `/plugin marketplace add petrovicistefan/mcp-security-guard`.

All servers are also on npm and in the official MCP Registry, so any MCP client can run them with `npx -y <package>`.

MIT licensed.
