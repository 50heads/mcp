import { type QuestionV2, type ResultFilterInput, type ResultV2 } from "@50heads/shared";
import { type Currency } from "./pricing.js";
import type { ListQuestionsOutput, ResultsOutput } from "./schemas.js";
import type { Rates } from "@50heads/shared";
/** ResultV2 (API, camelCase) → the MCP results object (snake_case). Never carries a head id. */
export declare function toResults(r: ResultV2, currency: Currency, rates?: Rates): ResultsOutput;
/** The MCP filter arguments (snake_case, `keyword`) → the API filter. */
export declare function toFilter(a: {
    option?: number;
    tier?: number;
    country?: string;
    age_band?: string;
    gender?: "woman" | "man" | "non_binary";
    keyword?: string;
}): ResultFilterInput;
/** A head's free-text answer as one quotable line: no control characters, no double quotes. */
export declare function quoteAnswer(text: string): string;
/**
 * One paragraph for hosts that only show text: "Menu B wins by 36 points (68% to 32%).
 * Confidence high. 50 of 50 answered, complete, £10.00."
 */
export declare function resultsText(r: ResultsOutput): string;
export declare function toListItem(q: QuestionV2): ListQuestionsOutput["questions"][number];
export declare function listText(items: ListQuestionsOutput["questions"]): string;
/** How long a result may be cached: seconds while live, a day once settled. */
export declare function resultsCacheHint(status: ResultsOutput["status"]): {
    ttlMs: number;
    cacheScope: "private";
};
