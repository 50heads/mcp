import type { Client } from "@50heads/shared/client";
import { type HelpSearchEntry } from "@50heads/shared/help-search";
import { type BuildAskLinkInput, type GetAnswersOutput } from "./schemas.js";
/**
 * Helpers behind the tools added for PickFu parity: image upload, answer pages, the pre-filled
 * ask link, the help index and targeting. Pure where possible, so they are tested directly.
 */
/** The real image type of some bytes, or null (JPEG, PNG and WebP only, like the API). */
export declare function sniffImage(b: Uint8Array): "image/jpeg" | "image/png" | "image/webp" | null;
/** base64 (or a data: URL) → bytes and type, with the reason in plain words when it fails. */
export declare function decodeImage(data: string, declared?: string): {
    bytes: Uint8Array;
    contentType: string;
};
export type AnswerFilter = {
    option?: number;
    tier?: number;
    country?: string;
    age_band?: string;
    gender?: string;
    q?: string;
};
/** The filter as the API's query names (analysis.ts RESULT_FILTER_PARAMS). */
export declare function filterParams(f: AnswerFilter): Record<string, string>;
/**
 * A page of answers. Uses the API's filtered, paginated answers endpoint when this API has it;
 * otherwise reads the result and filters and pages here (option, tier and keyword; country and
 * age band need the server, which can check that a segment is big enough to show).
 */
export declare function answersPage(api: Client, questionId: string, filter: AnswerFilter, page: {
    limit: number;
    cursor?: string;
}): Promise<GetAnswersOutput>;
/**
 * The portal composer's query parameters (apps/web/app/lib/portal/composer.ts draftFromForm and
 * the ask loader). Documented in the help centre and on /docs/mcp; keep the three in step.
 */
export declare function buildAskLink(portalUrl: string, input: BuildAskLinkInput): {
    url: string;
    params: {
        name: string;
        value: string;
    }[];
    notes: string[];
};
/** The published help index for a locale (/search/<locale>.json), cached for an hour. */
export declare function helpIndex(webUrl: string, locale: string, fetchImpl: typeof fetch): Promise<HelpSearchEntry[]>;
export declare function searchHelp(entries: HelpSearchEntry[], query: string, limit: number, webUrl: string): {
    title: string;
    section: string;
    excerpt: string;
    url: string;
}[];
