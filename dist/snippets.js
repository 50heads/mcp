// src/snippets.ts
var CLIENTS = ["claude-desktop", "claude-code", "cursor", "chatgpt", "vscode", "windsurf", "generic"];
var json = (v) => JSON.stringify(v, null, 2);
function configSnippets(options = {}) {
  const url = options.url ?? "https://mcp.50heads.com/mcp";
  const key = options.apiKey ?? "fh_live_\u2026";
  const npx = { command: "npx", args: ["-y", "@50heads/mcp"], env: { FIFTYHEADS_API_KEY: key } };
  return [
    {
      client: "claude-desktop",
      title: "Claude (claude.ai and Claude Desktop)",
      where: "Settings, Connectors, Add custom connector. Paste the URL and sign in when asked. On Team and Enterprise plans an owner adds it for the organisation first.",
      auth: "oauth",
      format: "text",
      body: url,
      alternative: {
        where: "Or with an API key, in claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/, Windows: %APPDATA%\\Claude\\).",
        format: "json",
        body: json({ mcpServers: { "50heads": npx } })
      }
    },
    {
      client: "claude-code",
      title: "Claude Code",
      where: "Run in a terminal, then /mcp in Claude Code to sign in.",
      auth: "oauth",
      format: "shell",
      body: `claude mcp add --transport http 50heads ${url}`,
      alternative: {
        where: "Or with an API key (CI and scripts):",
        format: "shell",
        body: `claude mcp add --transport http 50heads ${url} --header "Authorization: Bearer ${key}"`
      }
    },
    {
      client: "cursor",
      title: "Cursor",
      where: "~/.cursor/mcp.json (or .cursor/mcp.json in a project). Cursor opens the sign-in page.",
      auth: "oauth",
      format: "json",
      body: json({ mcpServers: { "50heads": { url } } }),
      alternative: {
        where: "Or with an API key:",
        format: "json",
        body: json({ mcpServers: { "50heads": { url, headers: { Authorization: `Bearer ${key}` } } } })
      }
    },
    {
      client: "chatgpt",
      title: "ChatGPT",
      where: "Settings, Apps and Connectors, Advanced settings, turn on Developer mode, then Create. Paste the URL and choose OAuth. On Business and Enterprise plans an admin turns on Developer mode first.",
      auth: "oauth",
      format: "text",
      body: url
    },
    {
      client: "vscode",
      title: "VS Code",
      where: ".vscode/mcp.json in the workspace, or MCP: Add Server from the command palette.",
      auth: "oauth",
      format: "json",
      body: json({ servers: { "50heads": { type: "http", url } } }),
      alternative: {
        where: "Or from a terminal:",
        format: "shell",
        body: `code --add-mcp '${JSON.stringify({ name: "50heads", type: "http", url })}'`
      }
    },
    {
      client: "windsurf",
      title: "Windsurf",
      where: "~/.codeium/windsurf/mcp_config.json, or Windsurf Settings, Cascade, MCP servers, View raw config.",
      auth: "key",
      format: "json",
      body: json({ mcpServers: { "50heads": npx } }),
      alternative: {
        where: "Or the hosted server with an API key:",
        format: "json",
        body: json({ mcpServers: { "50heads": { serverUrl: url, headers: { Authorization: `Bearer ${key}` } } } })
      }
    },
    {
      client: "generic",
      title: "Any other host",
      where: "Hosts that launch a local command. Needs Node 20 or later and an API key from the dashboard.",
      auth: "key",
      format: "shell",
      body: `FIFTYHEADS_API_KEY=${key} npx -y @50heads/mcp`,
      alternative: {
        where: `Hosts that speak Streamable HTTP: ${url} with the header "Authorization: Bearer ${key}", or OAuth.`,
        format: "json",
        body: json({ mcpServers: { "50heads": { url, headers: { Authorization: `Bearer ${key}` } } } })
      }
    }
  ];
}
export {
  CLIENTS,
  configSnippets
};
