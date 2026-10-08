# MCP SEO Auditor

This plugin adds the mcp-seo-auditor MCP server to Claude Code. The server audits the on-page SEO of a page you point it at, such as titles, headings, meta tags and links, with a bounded crawler; it needs Python 3.11 or newer. It runs entirely on your own machine over stdio, sends nothing to any remote service, and needs no account, sign-in or API key.

## Install

Add this marketplace and install the plugin:

```
/plugin marketplace add petrovicistefan/mcp-marketplace
/plugin install mcp-seo-auditor@petrovicistefan-mcp
```

Claude Code starts the server with `npx -y mcp-seo-auditor`, so Node.js 22 or newer must be available on your PATH.

## Learn more

Tools, examples and limits are documented in the [project README](https://github.com/petrovicistefan/mcp-seo-auditor#readme). Report problems in the [issue tracker](https://github.com/petrovicistefan/mcp-seo-auditor/issues). The code is MIT licensed.
