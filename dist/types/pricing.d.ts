import { DISPLAY_CURRENCIES, type Rates } from "@50heads/shared";
export type Currency = (typeof DISPLAY_CURRENCIES)[number];
export type Price = {
    amount: number;
    currency: Currency;
};
export declare function isCurrency(value: unknown): value is Currency;
/**
 * The currency to show when the account's is unknown (signed out, or the balance could not be
 * read). US dollars, so nothing reads as UK-only; a signed-in account always sees its own.
 */
export declare const UNKNOWN_CURRENCY: Currency;
/**
 * The locale an amount in a currency is written in, so each reads the way a banking app in its
 * home market writes it: "£10.00", "$12.70" (US and Canadian dollars alike), "11,80 €".
 */
export declare const MONEY_LOCALES: Record<Currency, string>;
export declare function moneyLocale(currency: string): string;
/** Credits as money in a display currency, to the cent. The ledger stays in credits. */
export declare function price(credits: number, currency: Currency, rates?: Rates): Price;
/** "£17.00", "$21.59", "20,06 €", in the currency's own locale (moneyLocale). */
export declare function formatPrice(p: {
    amount: number;
    currency: string;
}, locale?: string): string;
/**
 * Opening line of the package README. Generated into README.md so the published credit
 * total stays the Tier 1 price from packages/shared (50 × per-answer credits).
 */
export declare function readmeLead(): string;
/** "about 10 minutes", "about 2 hours". */
export declare function aboutMinutes(minutes: number): string;
/** Cost and time in one sentence, per BRAND.md: "50 answers, about 10 minutes, $12.70." */
export declare function costLine(n: number, etaMinutes: number, p: {
    amount: number;
    currency: string;
}): string;
/** The pricing document: tier bases, multipliers and image bands, in one currency. */
export declare function pricingTable(currency: Currency, rates?: Rates): {
    currency: "GBP" | "USD" | "EUR" | "CAD";
    creditValue: Price;
    tiers: {
        tier: 1 | 2 | 3;
        name: string;
        verified: string;
        goodFor: string;
        creditsPerAnswer: number;
        pricePerAnswer: Price;
        priceFor50: Price;
    }[];
    length: {
        upToCharacters: number;
        multiplier: number;
    }[];
    format: {
        [k: string]: number;
    };
    reason: {
        optional: number;
        required: number;
        note: string;
    };
    images: {
        creditsPerImagePerAnswer: number;
        creditsPerAudioPerAnswer: number;
        note: string;
    };
    rush: {
        multiplier: number;
        note: string;
    };
    fiveSecond: {
        multiplier: number;
        note: string;
    };
    targeting: {
        creditsPerTraitPerAnswer: number;
        maxTraits: number;
        note: string;
    };
    heads: {
        min: 10;
        max: 5000;
        default: number;
    };
    /** Caps are in credits, so they never move with exchange rates. */
    connectionDailyCapDefaultCredits: number;
    formula: string;
};
/**
 * The pricing reference as markdown (the skill's references/pricing.md). A static file read by
 * every account, so it is in credits; `estimate`, `balance` and 50heads://pricing give money
 * in the account's own currency.
 */
export declare function pricingMarkdown(): string;
