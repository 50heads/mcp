/**
 * Idempotency keys, derived per the MCP spec: the caller supplies one UUID per ask; the server
 * derives the key it sends to the API from the caller's principal, the tool and that UUID, so
 * the same UUID from two connections never collides, a retry from the same connection always
 * replays, and variants and follow-ups get stable keys of their own without the caller
 * inventing more UUIDs. Keys are opaque, fixed length and never contain the principal.
 */
export declare function sha256(text: string): Promise<string>;
/**
 * The key sent to the API as `Idempotency-Key`: "mcp_" + 43 base64url characters.
 * `parts` extend the derivation (a variant's language, a follow-up's position).
 */
export declare function deriveIdempotencyKey(principal: string, tool: string, clientKey: string, ...parts: string[]): Promise<string>;
/**
 * A stable principal for a bearer token when the connection id is not known: a hash of the
 * token itself (API keys never change for their lifetime; OAuth tokens carry `conn`).
 */
export declare function principalForToken(token: string | null | undefined): Promise<string>;
/**
 * Stable fingerprint of what was asked, to spot an idempotency key reused for a different
 * question: the API replays the first question for a repeated key, and if that question's
 * fingerprint differs from this request's, the key was reused.
 */
export declare function draftFingerprint(d: {
    type: string;
    text: string;
    language?: string;
    options?: {
        label: string;
        imageUrl?: string;
    }[];
    n?: number;
    tier?: number;
    reason?: string;
}): string;
