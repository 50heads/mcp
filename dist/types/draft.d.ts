import { type FollowUpInput as ApiFollowUp, type GoRule, type QuestionDraftInput, type QuestionOption } from "@50heads/shared";
import type { z } from "zod";
import type { FollowUpInput, QuestionInput, VariantInput } from "./schemas.js";
/** The MCP question object → the API's draft. `language` must be settled by the caller. */
export declare function toDraft(q: QuestionInput, language: string): QuestionDraftInput;
/**
 * The MCP go rule → the API's. Answers needed defaults to 80% of the heads asked, rounded down,
 * at least the floor (the composer's default).
 */
export declare function toGoRule(g: {
    go_above: number;
    min_answers?: number;
}, n: number): GoRule;
/** A variant is the same question with translated text and options. */
export declare function variantDraft(base: QuestionDraftInput, v: z.infer<typeof VariantInput>): QuestionDraftInput;
export declare function toFollowUp(f: z.infer<typeof FollowUpInput>): ApiFollowUp;
/** Image count for the pricing line: option images plus a stimulus image. */
export declare function imageCount(d: QuestionDraftInput): number;
/** API draft → the MCP question object (templates). */
export declare function fromDraft(d: {
    type: string;
    text: string;
    context?: string;
    language: string;
    options: QuestionOption[];
    n: number;
    tier: number;
    rush?: boolean;
    neither?: boolean;
    reason?: string;
    goRule?: GoRule;
}): Record<string, unknown>;
