/**
 * MCP Apps (io.modelcontextprotocol/apps) views: the quote card for `estimate` (action quote) and the
 * results view for `results` (actions get and wait) and the results resource. Each is one self-contained HTML document:
 * brand tokens inline, no external requests (fonts fall back to the brand's stacks), under
 * 30 KB. A tool carries one view for all its actions, so each view draws only the result it was
 * made for (a quote, a results object) and hides itself for any other action's reply. They talk to the host over the MCP Apps postMessage protocol and also read
 * `window.openai.toolOutput` on hosts that expose it.
 */
export declare const APP_MIME_TYPE = "text/html;profile=mcp-app";
export declare const RESULTS_VIEW_URI = "ui://50heads/results.html";
export declare const QUOTE_VIEW_URI = "ui://50heads/quote.html";
/**
 * The results view: winner line (or the verdict pill for a go rule), bars with pairwise ranges,
 * confidence, who beats whom, a follow-up button. Verdict pills are Ink and Line, never Tomato
 * or Lime: Tomato asks, Lime pays.
 */
export declare function resultsViewHtml(): string;
/**
 * The quote card: cost and time in one sentence, credits and pool, fixes, an ask button. The
 * button is there (disabled) before the result lands so the card keeps its height.
 */
export declare function quoteViewHtml(): string;
/** `_meta` a tool or resource carries to declare its view. */
export declare function uiMeta(uri: string): {
    ui: {
        resourceUri: string;
    };
    "ui/resourceUri": string;
    "openai/outputTemplate": string;
};
/**
 * `_meta` each view resource carries: no outside hosts and a border. ChatGPT also reads its own
 * keys and shows "CSP off" without them; `ui.domain` is left to each host (its format differs).
 */
export declare const VIEW_RESOURCE_META: {
    ui: {
        csp: {
            connectDomains: never[];
            resourceDomains: never[];
        };
        prefersBorder: boolean;
    };
    "openai/widgetCSP": {
        connect_domains: never[];
        resource_domains: never[];
    };
    "openai/widgetDomain": string;
    "openai/widgetPrefersBorder": boolean;
};
