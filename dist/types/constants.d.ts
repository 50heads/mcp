/**
 * Names, versions and scopes shared by the server, the edge and the published package. No
 * imports from private workspace packages, so the published types stay self-contained.
 */
export declare const SERVER_NAME = "50heads";
/** Calendar version (YYYY.MDD.N). Stamped at release by scripts/release.ts; never edit by hand. */
export declare const SERVER_VERSION = "2026.1013.2";
/** Sent by the CLI on every request, so the API can tell releases apart. */
export declare const USER_AGENT = "50heads-mcp/2026.1013.2";
export declare const MCP_RESOURCE_URL = "https://mcp.50heads.com/mcp";
/**
 * The tools and, inside each, the actions it takes, with the scope each action needs (spec:
 * Authorization → Scopes). null: no sign-in needed. A tool has at most MAX_TOOLS (10) entries
 * (decision G12): hosts choose well from few tools, so related calls are actions of one tool, and
 * every action is checked against its own scope, never the tool's.
 */
export declare const TOOL_ACTIONS: {
    readonly estimate: {
        readonly quote: "questions:write";
        readonly balance: "account:read";
        readonly templates: null;
        readonly audiences: null;
        readonly targeting: null;
    };
    readonly ask: {
        readonly ask: "questions:write";
        readonly set: "questions:write";
        readonly upload_image: "questions:write";
        readonly build_link: null;
    };
    readonly results: {
        readonly get: "questions:read";
        readonly wait: "questions:read";
        readonly answers: "questions:read";
        readonly export: "questions:read";
        readonly list: "questions:read";
    };
    readonly questions: {
        readonly cancel: "questions:write";
        readonly add_heads: "questions:write";
        readonly flag_answer: "questions:write";
        readonly file: "questions:write";
    };
    readonly projects: {
        readonly list: "questions:read";
        readonly create: "questions:write";
        readonly update: "questions:write";
        readonly delete: "questions:write";
        readonly labels: "questions:read";
    };
    readonly webhooks: {
        readonly list: "webhooks:read";
        readonly create: "webhooks:write";
        readonly update: "webhooks:write";
        readonly rotate_secret: "webhooks:write";
        readonly test: "webhooks:write";
        readonly deliveries: "webhooks:read";
        readonly events: "webhooks:read";
        readonly replay: "webhooks:write";
        readonly delete: "webhooks:write";
    };
    readonly organization: {
        readonly get: "organization:read";
        readonly domains: "organization:read";
        readonly scim: "organization:read";
        readonly member_sessions: "members:read";
        readonly service_accounts: "organization:read";
        readonly apps: "apps:read";
    };
    readonly audit: {
        readonly list: "audit:read";
        readonly export: "audit:read";
    };
    readonly help: {
        readonly search: null;
        readonly feedback: null;
        readonly status: null;
        readonly whoami: "account:read";
    };
};
export type ToolName = keyof typeof TOOL_ACTIONS;
export declare const TOOL_NAMES: ToolName[];
/** At most this many tools, ever (decision G12). A guard test fails above it. */
export declare const MAX_TOOLS = 10;
/** "tool.action" for every action: the id used in logs, tags and the tests. */
export type ActionId = {
    [T in ToolName]: `${T}.${keyof (typeof TOOL_ACTIONS)[T] & string}`;
}[ToolName];
export declare const ACTION_IDS: ActionId[];
/** The actions of a tool, in the order the tool lists them. */
export declare function actionsOf(tool: string): string[];
/**
 * The scope one action needs: a string, null when no sign-in is needed, or undefined when there
 * is no such tool or action. Per action, not per tool.
 */
export declare function actionScope(tool: string, action: unknown): string | null | undefined;
/**
 * The actions that change something of the account's: asks and spends, uploads, cancels, flags,
 * filing, projects and webhooks. Each needs a :write scope, so a read-only grant never reaches
 * one. (The estimate quote also needs questions:write, as it always has, but changes nothing.
 * Feedback opens a support ticket and needs no sign-in, so it is not an account change.)
 */
export declare const WRITE_ACTIONS: ReadonlySet<string>;
/** Resources that need no sign-in; the rest need questions:read. */
export declare const PUBLIC_RESOURCE_PREFIXES: string[];
export declare function resourceScope(uri: string): string | null;
export declare const PROMPT_SCOPES: Record<string, string | null>;
