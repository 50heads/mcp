import { ProtocolError } from "@modelcontextprotocol/server";
import { ApiRequestError } from "@50heads/shared/client";
import type { ApiErrorDetails, ValidationIssue } from "@50heads/shared";
/**
 * The MCP error model (spec: "Safety and error model"). Every failure a model sees is a
 * JSON-RPC error with `error.data.code`, a `retryable` hint and one plain sentence it can act on.
 */
export declare const ERROR_CODES: {
    /** JSON-RPC Invalid Params: schema/content validation and unknown questions or tasks. */
    readonly invalidParams: -32602;
    /** Account and policy refusals the caller can fix (credits, caps, keys, content). */
    readonly refused: -32001;
    /** Transient: rate limits, kill switches, maintenance, upstream failures. */
    readonly transient: -32000;
    readonly internal: -32603;
};
export type McpErrorCode = "validation" | "not_found" | "insufficient_credits" | "spend_cap_exceeded" | "idempotency_conflict" | "content_refused" | "underfilled" | "unauthorised" | "insufficient_scope" | "rate_limited" | "unavailable" | "internal";
export type McpErrorData = {
    code: McpErrorCode;
    retryable: boolean;
    /** Milliseconds to wait before retrying, when known. */
    retry_after_ms?: number;
    validation?: ValidationIssue[];
    credits_required?: number;
    credits_available?: number;
    top_up_url?: string;
    cap_remaining?: number;
    resets_at?: string;
    category?: string;
    scope?: string;
    until?: string | null;
    /** W3C trace id, for support. */
    trace_id?: string;
};
/** A tool, resource, prompt or task failure, carried as a JSON-RPC error. */
export declare class McpToolError extends ProtocolError {
    readonly mcpCode: McpErrorCode;
    readonly details: McpErrorData;
    constructor(code: McpErrorCode, message: string, extra?: Omit<McpErrorData, "code" | "retryable"> & {
        retryable?: boolean;
    });
}
type Urls = {
    portalUrl: string;
};
/** Reads `{ error: { details } }` (or loose extra fields) from an API error body. */
export declare function apiErrorDetails(err: ApiRequestError): ApiErrorDetails;
/** Next UTC midnight, when daily caps reset. */
export declare function nextUtcMidnight(now?: number): string;
/**
 * Maps an API error onto the MCP error model. The API speaks `{ error: { code, message } }`
 * with an HTTP status; codes are matched first, statuses second, so a new API code still lands
 * somewhere sensible.
 */
export declare function fromApiError(err: ApiRequestError, urls: Urls, traceId?: string): McpToolError;
/** Any thrown value as an McpToolError. */
export declare function toMcpError(err: unknown, urls: Urls, traceId?: string): McpToolError;
export {};
