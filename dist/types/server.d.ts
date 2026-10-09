import { McpServer, type ServerContext } from "@modelcontextprotocol/server";
import { type Client } from "@50heads/shared/client";
export { MCP_RESOURCE_URL, PROMPT_SCOPES, PUBLIC_RESOURCE_PREFIXES, SERVER_NAME, SERVER_VERSION, TOOL_NAMES, TOOL_SCOPES, resourceScope, type ToolName, } from "./constants.js";
export type CallLog = {
    kind: "tool" | "resource" | "prompt";
    name: string;
    questionId?: string;
    outcome: "ok" | "input_required" | string;
    latencyMs: number;
};
export type Era = "modern" | "legacy";
export type ServerOptions = {
    /** A typed API client for the calling principal, tagged with what it serves (for logs). */
    api: (tool: string) => Client;
    /** 2026-07-28 (per-request envelope) or 2025-11-25 (initialize handshake). */
    era: Era;
    /** Stable id of the caller for idempotency derivation (connection id or token hash). */
    principal: string;
    /** Granted scopes; null when unknown (the API enforces them). */
    scopes: readonly string[] | null;
    /** False when the request carried no token (only public tools and resources work). */
    authenticated: boolean;
    portalUrl: string;
    webUrl: string;
    /** Protected resource metadata URL, advertised in the com.50heads/auth extension. */
    resourceMetadataUrl?: string;
    traceId?: string;
    /** Longest a single call may block (wait_for_results), in ms. Default 600 s. */
    maxWaitMs?: number;
    onCall?: (log: CallLog) => void;
    /** Fetches public files from webUrl (the help index for search_help). Default: global fetch. */
    fetchWeb?: typeof fetch;
    /** Sent with feedback so support can tell hosts and versions apart, such as "mcp/2026.924.1". */
    source?: string;
};
/** The extensions the server declares (server/discover and initialize). */
export declare function serverExtensions(opts: Pick<ServerOptions, "resourceMetadataUrl" | "webUrl">): {
    "io.modelcontextprotocol/tasks": {
        methods: string[];
        tools: string[];
        pollIntervalMs: number;
    };
    "io.modelcontextprotocol/apps": {
        mimeTypes: string[];
        views: string[];
    };
    "com.50heads/skills": {
        skillVersion: string;
        skills: {
            name: string;
            version: string;
            uri: string;
            files: string[];
            download: string;
        }[];
    };
    "com.50heads/auth": {
        authorizationServer: string;
        apiKeys: string;
        resourceMetadata?: string | undefined;
    };
};
export declare const INSTRUCTIONS: string;
export declare function clientName(ctx: ServerContext): string | undefined;
/** Creates the 50heads MCP server for one request (HTTP) or one connection (stdio). */
export declare function createServer(opts: ServerOptions): McpServer;
/**
 * A first draft from a goal and assets: two image URLs make an A or B question; listed
 * options make a single choice; otherwise a yes or no check. The model refines it. Mostly is
 * yes_mostly_no, and only when the asker asks for that middle answer.
 */
export declare function draftFromGoal(goal: string, assets?: string): Record<string, unknown>;
