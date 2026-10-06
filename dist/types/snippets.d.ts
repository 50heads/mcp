/**
 * Config snippets per host: the one source for install instructions. Printed by
 * `npx @50heads/mcp config`, written into README.md by scripts/generate.ts, and rendered by the
 * website's MCP docs page and For agents page (apps/web imports @50heads/mcp/snippets).
 * Hosted URL plus OAuth for the hosts that support it; the npx line for the rest.
 */
export declare const CLIENTS: readonly ["claude-desktop", "claude-code", "cursor", "chatgpt", "vscode", "windsurf", "generic"];
export type ClientId = (typeof CLIENTS)[number];
export type SnippetOptions = {
    /** The hosted endpoint. */
    url?: string;
    /** An API key to show, or the placeholder. */
    apiKey?: string;
};
export type Snippet = {
    client: ClientId;
    title: string;
    /** Where the snippet goes, in a sentence. */
    where: string;
    /** "oauth": the hosted URL with a browser sign-in. "key": the npx line with an API key. */
    auth: "oauth" | "key";
    format: "json" | "shell" | "text";
    body: string;
    /** A second way in, when the host offers one. */
    alternative?: {
        where: string;
        format: "json" | "shell";
        body: string;
    };
};
export declare function configSnippets(options?: SnippetOptions): Snippet[];
