/**
 * Spend approvals in the MCP server (E16): an ask that an organization's policy holds is not an
 * error. The credits are held, a person is asked, and the tool returns the question as a task in
 * `input_required` with the approval's address and deadline. Everything here is a pure function,
 * so server.ts only has to catch the API's `approval_required` answer and call it.
 */
import type { ApprovalRequired } from "@50heads/shared";
import type { AskOutput } from "./schemas.js";
/** The tool's structured output for an ask that waits. */
export declare function heldOutput(held: ApprovalRequired, etaMinutes: number): AskOutput & {
    approval: NonNullable<AskOutput["approval"]>;
};
/** What to tell the model: it waits, nothing goes to heads yet, and where a person decides. */
export declare function heldSummary(held: ApprovalRequired, waitingOnTask: boolean): string;
