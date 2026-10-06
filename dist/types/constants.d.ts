/**
 * Names, versions and scopes shared by the server, the edge and the published package. No
 * imports from private workspace packages, so the published types stay self-contained.
 */
export declare const SERVER_NAME = "50heads";
/** Calendar version (YYYY.MDD.N). Stamped at release by scripts/release.ts; never edit by hand. */
export declare const SERVER_VERSION = "2026.1006.1";
/** Sent by the CLI on every request, so the API can tell releases apart. */
export declare const USER_AGENT = "50heads-mcp/2026.1006.1";
export declare const MCP_RESOURCE_URL = "https://mcp.50heads.com/mcp";
/** The scope each tool needs (spec: Authorization → Scopes). null: no sign-in needed. */
export declare const TOOL_SCOPES: {
    readonly estimate: "questions:write";
    readonly ask: "questions:write";
    readonly get_results: "questions:read";
    readonly wait_for_results: "questions:read";
    readonly list_questions: "questions:read";
    readonly cancel: "questions:write";
    readonly templates: null;
    readonly balance: "account:read";
    readonly upload_image: "questions:write";
    readonly get_answers: "questions:read";
    readonly add_heads: "questions:write";
    readonly flag_answer: "questions:write";
    readonly export: "questions:read";
    readonly build_ask_link: null;
    readonly list_targeting: null;
    readonly list_audiences: null;
    readonly search_help: null;
    readonly send_feedback: null;
};
export type ToolName = keyof typeof TOOL_SCOPES;
export declare const TOOL_NAMES: ToolName[];
/** Resources that need no sign-in; the rest need questions:read. */
export declare const PUBLIC_RESOURCE_PREFIXES: string[];
export declare function resourceScope(uri: string): string | null;
export declare const PROMPT_SCOPES: Record<string, string | null>;
