import { type Rates } from "@50heads/shared";
import type { Client } from "@50heads/shared/client";
import { type Currency } from "./pricing.js";
export type Money = {
    currency: Currency;
    rates: Rates;
};
/**
 * The account's display currency and the day's rates, each fetched at most once per server
 * (one request on HTTP, one connection on stdio) and shared by every tool, resource and task.
 * The currency comes from the billing balance; when that cannot be read (signed out, no
 * account:read, or the API failed) it is UNKNOWN_CURRENCY, never a silent pound. A failed read
 * is not cached, so the next call tries again. An explicit currency argument always wins.
 */
export declare function accountMoney(api: (tag: string) => Client, canReadAccount: boolean): {
    rates: () => Promise<Rates>;
    currency: (explicit?: Currency | null) => Promise<Currency>;
    /** Both, in parallel. */
    money: (explicit?: Currency | null) => Promise<Money>;
    /** Records a currency already read (the balance tool), so no second request is made. */
    remember(c: Currency): void;
};
