import type { QuestionV2 } from "@50heads/shared";
import type { Client } from "@50heads/shared/client";
import type { Currency } from "./pricing.js";
/**
 * Tasks (io.modelcontextprotocol/tasks): a fifty-answer question is a long-running operation.
 * `ask` returns a task whose id is the question_id, so the task state lives in the API and a
 * results object stays fetchable for ever after the task is gone. The server keeps nothing.
 *
 * Methods: tasks/get (progress, and the results once done), tasks/update (min_answers to
 * complete early), tasks/cancel (maps to cancel), and tasks/result for 2025-11-25 clients.
 * There is no tasks/list.
 */
export declare const TASKS_EXTENSION = "io.modelcontextprotocol/tasks";
export declare const TASK_POLL_INTERVAL_MS = 5000;
export declare const TASK_METHODS: readonly ["tasks/get", "tasks/update", "tasks/cancel", "tasks/result", "tasks/list"];
export type TaskMethod = (typeof TASK_METHODS)[number];
export declare function isTaskMethod(method: unknown): method is TaskMethod;
/** The scope each task method needs (spec: questions:read for tasks/get, write for cancel). */
export declare const TASK_SCOPES: Record<TaskMethod, string | null>;
export type TaskStatus = "working" | "input_required" | "completed" | "failed" | "cancelled";
export type TaskObject = {
    taskId: string;
    /** The 2026-07-28 extension names it `id`; 2025-11-25 names it `taskId`. Same value. */
    id: string;
    status: TaskStatus;
    statusMessage: string;
    createdAt: string;
    lastUpdatedAt: string;
    /** Results are kept for ever; the task handle never expires. */
    ttl: null;
    pollInterval: number;
};
export declare function isTerminal(status: TaskStatus): boolean;
/** "12 of 50 answered · about 6 minutes left" */
export declare function statusMessage(q: Pick<QuestionV2, "status" | "answered" | "n" | "etaMinutes" | "refusedCategory">): string;
export declare function toTask(q: QuestionV2, now?: string): TaskObject;
export type TaskDeps = {
    /** A client for the calling principal, tagged with the task method. */
    api: (method: string) => Client;
    portalUrl: string;
    /** Overrides the account's display currency; by default it is read from the balance. */
    currency?: Currency;
    traceId?: string;
    /** Aborts the tasks/result long-poll when the caller goes away. */
    signal?: AbortSignal;
    /** Longest tasks/result waits, in ms (the HTTP host's request budget). */
    maxWaitMs?: number;
};
type RpcRequest = {
    jsonrpc: "2.0";
    id: string | number;
    method: string;
    params?: Record<string, unknown>;
};
type RpcResponse = {
    jsonrpc: "2.0";
    id: string | number;
    result: Record<string, unknown>;
} | {
    jsonrpc: "2.0";
    id: string | number;
    error: {
        code: number;
        message: string;
        data?: unknown;
    };
};
/** True when the request carries the 2026-07-28 per-request envelope. */
export declare function isModernMessage(msg: {
    params?: Record<string, unknown>;
}): boolean;
/**
 * Serves one tasks/* JSON-RPC request end to end (the SDK has no task runtime for the
 * 2026-07-28 extension, so the HTTP edge and the stdio transport both route here).
 */
export declare function serveTaskMessage(msg: RpcRequest, deps: TaskDeps & {
    serverInfo: {
        name: string;
        version: string;
    };
}): Promise<RpcResponse>;
/**
 * Serves one tasks/* request. Throws McpToolError (not_found → -32602, and so on); an unknown
 * method or tasks/list throws a -32601.
 */
export declare function handleTaskRequest(method: string, rawParams: unknown, deps: TaskDeps): Promise<Record<string, unknown>>;
export {};
