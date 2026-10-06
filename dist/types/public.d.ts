/**
 * The published entry of @50heads/mcp (npm). Inside the monorepo, apps import src/index.ts,
 * which also exposes the internals the hosted server needs.
 *
 * ```ts
 * import { serveStdio } from "@modelcontextprotocol/server/stdio";
 * import { serverFactory } from "@50heads/mcp";
 * serveStdio(serverFactory({ apiKey: process.env.FIFTYHEADS_API_KEY }));
 * ```
 */
import type { McpServer } from "@modelcontextprotocol/server";
export { MCP_RESOURCE_URL, PROMPT_SCOPES, SERVER_NAME, SERVER_VERSION, TOOL_NAMES, TOOL_SCOPES, type ToolName, } from "./constants.js";
export { CLIENTS, configSnippets, type ClientId, type Snippet, type SnippetOptions } from "./snippets.js";
export { SKILL_BODY, SKILL_FILES, SKILL_VERSION } from "./generated/skill.js";
export { registryServerJson, serverCard } from "./manifest.js";
export type ServerFactoryOptions = {
    /** An API key (fh_live_…) or an OAuth access token for https://mcp.50heads.com/mcp. */
    apiKey?: string | null;
    /** Called before each API request when tokens rotate; wins over apiKey. */
    token?: () => Promise<string | null>;
    apiUrl?: string;
    portalUrl?: string;
    webUrl?: string;
};
/**
 * A server factory for `serveStdio` or `createMcpHandler` from @modelcontextprotocol/server:
 * the 50heads tools, resources and prompts, calling the 50heads API directly.
 */
export declare function serverFactory(options?: ServerFactoryOptions): (ctx: {
    era: "modern" | "legacy";
}) => Promise<McpServer>;
/**
 * Runs the full stdio server (tools, resources, prompts and tasks) on this process's stdin
 * and stdout: what `npx @50heads/mcp` does.
 */
export declare function serveStdioServer(options?: ServerFactoryOptions): Promise<void>;
