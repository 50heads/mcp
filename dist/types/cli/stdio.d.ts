import { type JSONRPCMessage, type Transport, type TransportSendOptions } from "@modelcontextprotocol/server";
/**
 * The stdio server: the same tools, resources, prompts and tasks as the hosted server, run
 * in-process against the 50heads API with an API key or the `login` token.
 */
export type StdioOptions = {
    apiUrl: string;
    portalUrl: string;
    webUrl: string;
    /** Resolves the bearer token for each API call (refreshes OAuth tokens as they expire). */
    token: () => Promise<string | null>;
    /** A stable token for idempotency derivation (the API key, or the OAuth client id). */
    principalSeed: string | null;
};
/** Wraps a transport so tasks/* requests are answered here, everything else by the SDK. */
export declare class TaskInterceptingTransport implements Transport {
    onclose?: () => void;
    onerror?: (error: Error) => void;
    onmessage?: Transport["onmessage"];
    sessionId?: string;
    private readonly inner;
    private readonly handle;
    constructor(inner: Transport, handle: TaskInterceptingTransport["handle"]);
    start(): Promise<void>;
    send(message: JSONRPCMessage, options?: TransportSendOptions): Promise<void>;
    close(): Promise<void>;
}
export declare function makeApi(opts: StdioOptions): (tool: string, client?: string, protocol?: string) => {
    config: () => Promise<{
        rates: Record<"GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY", number>;
        ratesDate: string;
        countries: Record<string, {
            minWithdrawalPence: number;
            payoutRails: string[];
            otpChannel: "sms" | "whatsapp";
            taxFields: string[];
            tier2Available: boolean;
            currency: "GBP" | "USD" | "EUR" | "CAD";
            displayCurrency?: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | undefined;
            wiseFields?: {
                key: string;
                label: string;
                example?: string | undefined;
                pattern?: string | undefined;
            }[] | undefined;
            requesterRails?: ("card" | "bank_transfer" | "pix" | "swish" | "vipps" | "mobilepay" | "pse")[] | undefined;
            locale?: string | undefined;
            questionLanguages?: string[] | undefined;
            legalPack?: "uk" | "gdpr-eu" | "gdpr-eea" | "us" | "ca" | "lgpd" | "appi" | "pipa" | "kvkk" | "cl" | "co" | "ar" | "pe" | "uy" | "other" | undefined;
            legalPackVersion?: string | undefined;
            payoutProvenAt?: string | undefined;
            minAge?: number | undefined;
            state?: "known" | "answering" | "launched" | undefined;
        }>;
        defaultCountry: {
            minWithdrawalPence: number;
            payoutRails: string[];
            otpChannel: "sms" | "whatsapp";
            taxFields: string[];
            tier2Available: boolean;
            currency: "GBP" | "USD" | "EUR" | "CAD";
            displayCurrency?: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | undefined;
            wiseFields?: {
                key: string;
                label: string;
                example?: string | undefined;
                pattern?: string | undefined;
            }[] | undefined;
            requesterRails?: ("card" | "bank_transfer" | "pix" | "swish" | "vipps" | "mobilepay" | "pse")[] | undefined;
            locale?: string | undefined;
            questionLanguages?: string[] | undefined;
            legalPack?: "uk" | "gdpr-eu" | "gdpr-eea" | "us" | "ca" | "lgpd" | "appi" | "pipa" | "kvkk" | "cl" | "co" | "ar" | "pe" | "uy" | "other" | undefined;
            legalPackVersion?: string | undefined;
            payoutProvenAt?: string | undefined;
            minAge?: number | undefined;
            state?: "known" | "answering" | "launched" | undefined;
        };
        questionLanguages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
        reverifyDays: number;
        tier1PayPence: number;
        tier2PayMultiplier: number;
        answeringCountries?: string[] | undefined;
        webTopUpStorefronts?: string[] | undefined;
    }>;
    estimate: (input: import("@50heads/shared").EstimateInput) => Promise<{
        estimate: import("@50heads/shared").Estimate;
        line: string;
    }>;
    auth: {
        email: {
            start: (input: import("@50heads/shared").EmailStartInput) => Promise<{
                ok: true;
                resendAfterSeconds: number;
            }>;
            verify: <T extends import("@50heads/shared").Session | import("@50heads/shared").AppSession = {
                token: string;
                expiresAt: string;
                user: {
                    id: string;
                    email: string;
                    name: string | null;
                    tier: 0 | 1 | 2 | 3;
                    country: string | null;
                    phone: string | null;
                    displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                    languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                    locale: string | null;
                    creditsPence: number;
                    earningsPence: number;
                    pendingPence: number;
                    providers: ("apple" | "google" | "email")[];
                    createdAt: string;
                };
                isNew: boolean;
            }>(input: import("@50heads/shared").EmailVerifyInput) => Promise<T>;
        };
        apple: (input: import("@50heads/shared").AppleAuthInput) => Promise<{
            accessToken: string;
            accessExpiresAt: string;
            refreshToken: string;
            refreshExpiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
            newDevice: boolean;
        }>;
        appleWebUrl: (deviceId?: string) => string;
        appleTicket: (input: import("@50heads/shared").AppleTicketInput) => Promise<{
            accessToken: string;
            accessExpiresAt: string;
            refreshToken: string;
            refreshExpiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
            newDevice: boolean;
        }>;
        google: (input: import("@50heads/shared").GoogleAuthInput) => Promise<{
            accessToken: string;
            accessExpiresAt: string;
            refreshToken: string;
            refreshExpiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
            newDevice: boolean;
        }>;
        link: <T extends import("@50heads/shared").Session | import("@50heads/shared").AppSession = {
            accessToken: string;
            accessExpiresAt: string;
            refreshToken: string;
            refreshExpiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
            newDevice: boolean;
        }>(input: import("@50heads/shared").LinkInput) => Promise<T>;
        refresh: (refreshToken: string) => Promise<{
            accessToken: string;
            accessExpiresAt: string;
            refreshToken: string;
            refreshExpiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
            newDevice: boolean;
        }>;
        signOut: (refreshToken?: string) => Promise<{
            ok: true;
        }>;
        googleWeb: (input: import("zod").infer<typeof import("@50heads/shared").GoogleWebAuthInput>) => Promise<{
            token: string;
            expiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
        }>;
        appleWebNonce: () => Promise<{
            nonce: string;
            state: string;
        }>;
        appleWeb: (input: import("zod").infer<typeof import("@50heads/shared").AppleWebAuthInput>) => Promise<{
            token: string;
            expiresAt: string;
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            isNew: boolean;
        }>;
        reauthEmail: () => Promise<{
            ok: true;
        }>;
        passkey: {
            options: () => Promise<{
                challengeId: string;
                options: Record<string, unknown>;
            }>;
            signIn: <T extends import("@50heads/shared").Session | import("@50heads/shared").AppSession = {
                token: string;
                expiresAt: string;
                user: {
                    id: string;
                    email: string;
                    name: string | null;
                    tier: 0 | 1 | 2 | 3;
                    country: string | null;
                    phone: string | null;
                    displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                    languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                    locale: string | null;
                    creditsPence: number;
                    earningsPence: number;
                    pendingPence: number;
                    providers: ("apple" | "google" | "email")[];
                    createdAt: string;
                };
                isNew: boolean;
            }>(input: import("@50heads/shared").PasskeySignInInput) => Promise<T>;
        };
        passkeys: {
            list: () => Promise<{
                passkeys: import("@50heads/shared").Passkey[];
            }>;
            registerOptions: (reauthToken: string) => Promise<{
                challengeId: string;
                options: Record<string, unknown>;
            }>;
            register: (input: import("@50heads/shared").PasskeyRegisterInput) => Promise<{
                passkey: import("@50heads/shared").Passkey;
            }>;
            rename: (id: string, name: string) => Promise<{
                passkey: import("@50heads/shared").Passkey;
            }>;
            remove: (id: string, reauthToken: string) => Promise<{
                ok: true;
                status: import("@50heads/shared").MfaStatus;
            }>;
            reauthOptions: () => Promise<{
                challengeId: string;
                options: Record<string, unknown>;
            }>;
        };
        mfa: {
            verify: <T extends import("@50heads/shared").Session | import("@50heads/shared").AppSession = {
                token: string;
                expiresAt: string;
                user: {
                    id: string;
                    email: string;
                    name: string | null;
                    tier: 0 | 1 | 2 | 3;
                    country: string | null;
                    phone: string | null;
                    displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                    languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                    locale: string | null;
                    creditsPence: number;
                    earningsPence: number;
                    pendingPence: number;
                    providers: ("apple" | "google" | "email")[];
                    createdAt: string;
                };
                isNew: boolean;
                rememberToken?: string | undefined;
                rememberExpiresAt?: string | undefined;
            }>(input: import("@50heads/shared").MfaVerifyInput) => Promise<T>;
            passkeyOptions: (mfaToken: string) => Promise<{
                challengeId: string;
                options: Record<string, unknown>;
            }>;
            status: () => Promise<{
                enabled: boolean;
                enabledAt: string | null;
                totp: boolean;
                totpAddedAt: string | null;
                passkeys: number;
                recoveryCodesLeft: number;
                rememberedDevices: number;
            }>;
            totpSetup: (reauthToken: string) => Promise<{
                secret: string;
                otpauthUri: string;
                issuer: string;
                account: string;
            }>;
            totpConfirm: (code: string) => Promise<{
                status: {
                    enabled: boolean;
                    enabledAt: string | null;
                    totp: boolean;
                    totpAddedAt: string | null;
                    passkeys: number;
                    recoveryCodesLeft: number;
                    rememberedDevices: number;
                };
                recoveryCodes?: string[] | undefined;
            }>;
            totpRemove: (reauthToken: string) => Promise<{
                status: import("@50heads/shared").MfaStatus;
            }>;
            enable: (reauthToken: string) => Promise<{
                status: {
                    enabled: boolean;
                    enabledAt: string | null;
                    totp: boolean;
                    totpAddedAt: string | null;
                    passkeys: number;
                    recoveryCodesLeft: number;
                    rememberedDevices: number;
                };
                recoveryCodes?: string[] | undefined;
            }>;
            disable: (reauthToken: string) => Promise<{
                status: import("@50heads/shared").MfaStatus;
            }>;
            recoveryCodes: (reauthToken: string) => Promise<{
                recoveryCodes: string[];
            }>;
            forgetDevices: () => Promise<{
                ok: true;
                forgotten: number;
            }>;
            reauth: (input: import("@50heads/shared").MfaReauthInput) => Promise<{
                reauthToken: string;
                expiresAt: string;
                strength: "basic" | "mfa";
            }>;
        };
    };
    interestAudiences: {
        list: (query?: Partial<import("@50heads/shared").AudienceListQuery>) => Promise<{
            audiences: import("@50heads/shared").AudienceCard[];
        }>;
        get: (slug: string) => Promise<{
            audience: import("@50heads/shared").PublicAudience;
        }>;
        ref: (code: string) => Promise<{
            slug: string;
        }>;
        view: (slug: string, input: import("zod").input<typeof import("@50heads/shared").AudienceViewInput>) => Promise<{
            ok: true;
        }>;
        join: (slug: string, input?: import("zod").input<typeof import("@50heads/shared").JoinStartInput>) => Promise<{
            pj: string;
            secret: string;
        }>;
        state: (slug: string, pj: string, secret: string, gpc?: boolean) => Promise<{
            state: import("@50heads/shared").JoinState;
        }>;
        consent: (slug: string, pj: string, input: {
            s: string;
            measure: boolean;
        }, gpc?: boolean) => Promise<{
            ok: true;
        }>;
        answer: (slug: string, pj: string, input: {
            s: string;
            itemId: string;
            answer: number;
        }) => Promise<{
            step: import("@50heads/shared").JoinState["step"];
        }>;
        claim: (slug: string, pj: string, secret: string) => Promise<{
            membership: import("@50heads/shared").MyMembership;
        }>;
        mine: () => Promise<{
            memberships: import("@50heads/shared").MyMembership[];
        }>;
        gradeUp: (slug: string) => Promise<{
            pj: string;
            secret: string;
        }>;
        workEmail: (slug: string, email: string) => Promise<{
            domain: string;
        }>;
        workEmailVerify: (slug: string, code: string) => Promise<{
            membership: import("@50heads/shared").MyMembership;
        }>;
        orgCode: (slug: string, code: string) => Promise<{
            membership: import("@50heads/shared").MyMembership;
        }>;
        requestReview: (slug: string) => Promise<{
            membership: import("@50heads/shared").MyMembership;
        }>;
        membership: (slug: string) => Promise<{
            membership: import("@50heads/shared").MyMembership;
        }>;
        leave: (slug: string) => Promise<{
            ok: true;
        }>;
    };
    me: () => Promise<{
        user: import("@50heads/shared").User;
    }>;
    deleteAccount: (reauth: import("@50heads/shared").Reauth) => Promise<{
        ok: true;
        erasesAt: string;
    }>;
    reauthEmail: () => Promise<{
        ok: true;
    }>;
    addIdentity: (input: import("@50heads/shared").AddIdentityInput) => Promise<{
        user: import("@50heads/shared").User;
    }>;
    questions: {
        ask: (input: import("@50heads/shared").AskInput, idempotencyKey?: string) => Promise<{
            question: import("@50heads/shared").Question;
        }>;
        list: () => Promise<{
            questions: import("@50heads/shared").Question[];
        }>;
        get: (id: string) => Promise<{
            question: import("@50heads/shared").Question;
        }>;
        result: (id: string) => Promise<{
            result: import("@50heads/shared").Result;
        }>;
        wait: (id: string, seconds?: number) => Promise<{
            result: import("@50heads/shared").Result;
            done: boolean;
        }>;
        cancel: (id: string) => Promise<{
            question: import("@50heads/shared").Question;
        }>;
    };
    worker: {
        state: () => Promise<{
            user: {
                id: string;
                email: string;
                name: string | null;
                tier: 0 | 1 | 2 | 3;
                country: string | null;
                phone: string | null;
                displayCurrency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY" | null;
                languages: ("en" | "fr" | "es" | "pt" | "it" | "de" | "nl" | "pl" | "ja" | "ko" | "sv" | "da" | "nb" | "cs" | "ro" | "fi" | "tr")[];
                locale: string | null;
                creditsPence: number;
                earningsPence: number;
                pendingPence: number;
                providers: ("apple" | "google" | "email")[];
                createdAt: string;
            };
            reverifyDue: boolean;
            warmup: {
                total: number;
                answered: number;
            };
            earning: "open" | "limited";
        }>;
        update: (input: import("@50heads/shared").WorkerUpdateInput) => Promise<{
            user: import("@50heads/shared").User;
        }>;
        feed: () => Promise<{
            questions: import("@50heads/shared").FeedItem[];
        }>;
        say: (questionId: string, input: import("@50heads/shared").SayInput, idempotencyKey: string) => Promise<{
            earnedPence: number;
            pending: boolean;
            user: import("@50heads/shared").User;
        }>;
        warmup: () => Promise<{
            total: number;
            answered: number;
            next: {
                id: string;
                position: number;
                prompt: string;
                options: string[];
                payPence: number;
            } | null;
        }>;
        warmupAnswer: (questionId: string, optionIndex: number, idempotencyKey: string) => Promise<{
            earnedPence: number;
            pending: boolean;
            state: import("@50heads/shared").WarmupState;
        }>;
        phoneStart: (input: import("@50heads/shared").PhoneStartInput) => Promise<{
            channel: "sms" | "whatsapp";
            phone: string;
            resendAfterSeconds: number;
        }>;
        phoneVerify: (input: import("@50heads/shared").PhoneVerifyInput) => Promise<{
            user: import("@50heads/shared").User;
        }>;
        earnings: (cursor?: string) => Promise<{
            availablePence: number;
            pendingPence: number;
            entries: {
                id: string;
                kind: string;
                amountPence: number;
                ref: string | null;
                createdAt: string;
            }[];
            nextCursor: string | null;
        }>;
        withdrawQuote: () => Promise<{
            availablePence: number;
            minimumPence: number;
            currency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY";
            receiveAmount: number | null;
            rails: string[];
            available: boolean;
            reason: string | null;
            receiveCurrency?: string | undefined;
        }>;
        pushToken: (token: string, timezone?: string) => Promise<{
            ok: true;
        }>;
    };
    keys: {
        list: () => Promise<{
            keys: import("@50heads/shared").ApiKey[];
        }>;
        create: (name: string) => Promise<{
            key: import("@50heads/shared").ApiKey;
            secret: string;
        }>;
        revoke: (id: string) => Promise<{
            ok: true;
        }>;
    };
    public: {
        stats: () => Promise<{
            headsOnlineNow: number;
            answersThisWeek: number;
            medianMinutesTo50: number;
            headEarningsPerHour: {
                low: number;
                high: number;
            };
            updatedAt: string;
        }>;
        results: (code: string) => Promise<{
            question: import("@50heads/shared").QuestionV2;
            result: import("@50heads/shared").ResultV2;
        }>;
        shared: (token: string) => Promise<{
            question: {
                type: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                text: string;
                language: string;
                options: {
                    label: string;
                    imageUrl?: string | undefined;
                }[];
                neither: boolean;
                n: number;
                tier: 1 | 2 | 3;
                rush: boolean;
                publicResults: boolean;
                reason: "off" | "optional" | "required";
                answeredBy: "heads" | "private";
                openForDays: 1 | 14 | 7 | 30;
                id: string;
                status: "cancelled" | "closed" | "live" | "scheduled" | "draft" | "complete" | "underfilled" | "refused";
                source: "app" | "portal" | "api" | "mcp";
                answered: number;
                creditsPerAnswer: number;
                creditsReserved: number;
                creditsSpent: number;
                etaMinutes: number;
                leaderLine: string | null;
                refusedCategory: string | null;
                publicCode: string | null;
                createdAt: string;
                liveAt: string | null;
                closedAt: string | null;
                context?: string | undefined;
                stimulus?: {
                    imageUrl?: string | undefined;
                    audioUrl?: string | undefined;
                    text?: string | undefined;
                    exposureMs?: number | undefined;
                } | undefined;
                targeting?: {
                    countries: string[];
                    tags: string[];
                    ageBands?: ("18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+")[] | undefined;
                    genders?: ("woman" | "man" | "non_binary")[] | undefined;
                    verifiedAge?: boolean | undefined;
                } | undefined;
                clickTest?: {
                    maxTaps: number;
                } | undefined;
                scheduledFor?: string | undefined;
                contentFlag?: "medical" | "violence" | "distressing" | "alcohol_gambling" | "political" | "none" | undefined;
                interestAudienceId?: string | undefined;
                minGrade?: 1 | 2 | 3 | undefined;
                interestPrice?: {
                    perAnswerPence: number;
                    headShareBps: number;
                } | undefined;
                shownAs?: string | undefined;
                teamId?: string | null | undefined;
                askedBy?: {
                    id: string;
                    name: string | null;
                } | null | undefined;
                projectId?: string | null | undefined;
                labels?: string[] | undefined;
                archived?: boolean | undefined;
                bookmarked?: boolean | undefined;
                externalRef?: string | null | undefined;
                link?: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null | undefined;
                setId?: string | null | undefined;
                setPosition?: number | null | undefined;
                setCount?: number | null | undefined;
            };
            result: {
                questionId: string;
                status: "cancelled" | "complete" | "underfilled" | "in_progress";
                nRequested: number;
                nAccepted: number;
                distribution: {
                    option: string;
                    count: number;
                    share: number;
                    averageRank?: number | undefined;
                    appearances?: number | undefined;
                    strength?: number | undefined;
                    rank?: number | undefined;
                }[];
                mean: number | null;
                summary: {
                    winner: string | null;
                    margin: number | null;
                    confidence: "low" | "medium" | "high" | null;
                    note: string;
                    suggestedFollowUp: string | null;
                };
                tier: number | null;
                language: string;
                verificationLine: string;
                medianSeconds: number | null;
                creditsSpent: number;
                answers: {
                    option: string | null;
                    text: string | null;
                    tier: number | null;
                    attestationRef: string | null;
                    answeredAt: string;
                    translatedText?: string | null | undefined;
                    reason?: string | null | undefined;
                    translatedReason?: string | null | undefined;
                    pinned?: boolean | undefined;
                    flag?: {
                        reason: "automated" | "off_topic" | "low_effort" | "abusive";
                        status: "open" | "upheld" | "dismissed";
                        refundCredits: number;
                        createdAt: string;
                        decidedAt: string | null;
                    } | null | undefined;
                    taps?: {
                        x: number;
                        y: number;
                    }[] | undefined;
                }[];
                refundCredits: number;
                provenance?: {
                    answeredBy: "heads" | "private";
                    access: "app" | "shared_link";
                    verified: boolean;
                    answers: number;
                    issued: number | null;
                    denominator: "unknown" | "known";
                } | undefined;
                breakdown?: {
                    tagId: string;
                    label: string;
                    n: number;
                    distribution: {
                        option: string;
                        count: number;
                        share: number;
                        averageRank?: number | undefined;
                        appearances?: number | undefined;
                        strength?: number | undefined;
                        rank?: number | undefined;
                    }[];
                }[] | undefined;
                breakdowns?: {
                    dimension: "country" | "tier" | "language" | "gender" | "age_band" | "tag";
                    segments: {
                        label: string;
                        n: number;
                        distribution: {
                            option: string;
                            count: number;
                            share: number;
                            averageRank?: number | undefined;
                            appearances?: number | undefined;
                            strength?: number | undefined;
                            rank?: number | undefined;
                        }[];
                    }[];
                }[] | undefined;
                clicks?: {
                    imageUrl: string | null;
                    taps: number;
                    points: {
                        x: number;
                        y: number;
                    }[];
                    grid: number[];
                    gridSize: number;
                    hotspots: {
                        x: number;
                        y: number;
                        w: number;
                        h: number;
                        count: number;
                        share: number;
                    }[];
                    heatmapUrl: string | null;
                } | undefined;
                sentiment?: {
                    positive: number;
                    neutral: number;
                    negative: number;
                } | undefined;
                translationLanguage?: string | null | undefined;
                insights?: {
                    questionId: string;
                    language: string;
                    sourceLanguage: string;
                    takeaway: string;
                    themes: {
                        label: string;
                        count: number;
                        share: number;
                        sentiment: "positive" | "neutral" | "negative";
                        option: string | null;
                        quotes: string[];
                    }[];
                    sentiment: {
                        positive: number;
                        neutral: number;
                        negative: number;
                    };
                    basedOn: number;
                    answersAtTime: number;
                    original: {
                        takeaway: string;
                        themes: {
                            label: string;
                            quotes: string[];
                        }[];
                    } | null;
                    kind: "interim" | "final";
                    generatedAt: string;
                    refreshAfter: string | null;
                    engine: string;
                } | null | undefined;
                filter?: {
                    option?: number | undefined;
                    tier?: number | undefined;
                    country?: string | undefined;
                    ageBand?: string | undefined;
                    gender?: "woman" | "man" | "non_binary" | undefined;
                    q?: string | undefined;
                } | undefined;
                nUnfiltered?: number | undefined;
                suppressed?: boolean | undefined;
                facets?: {
                    tiers: {
                        tier: number;
                        n: number;
                    }[];
                    countries: {
                        code: string;
                        label: string;
                        n: number;
                    }[];
                    ageBands: {
                        band: string;
                        n: number;
                    }[];
                    genders?: {
                        gender: string;
                        n: number;
                    }[] | undefined;
                } | undefined;
            };
            expiresAt: string;
        }>;
        link: (code: string) => Promise<{
            kind: "set" | "question";
            state: "closed" | "live" | "scheduled" | "full" | "paused";
            shownAs: string | null;
            language: string;
            question: {
                type: string;
                text: string;
                context: string | null;
                language: string;
                options: {
                    label: string;
                    imageUrl: string | null;
                }[];
                neither: boolean;
                stimulus: {
                    imageUrl: string | null;
                    audioUrl: string | null;
                    text: string | null;
                } | null;
                maxTaps: number | null;
                pair: [number, number] | null;
            } | null;
            opensAt: string | null;
            showResult: boolean;
            resultCode: string | null;
            set: {
                count: number;
                questions: {
                    position: number;
                    state: "closed" | "live" | "scheduled" | "full" | "paused";
                    question: {
                        type: string;
                        text: string;
                        context: string | null;
                        language: string;
                        options: {
                            label: string;
                            imageUrl: string | null;
                        }[];
                        neither: boolean;
                        stimulus: {
                            imageUrl: string | null;
                            audioUrl: string | null;
                            text: string | null;
                        } | null;
                        maxTaps: number | null;
                        pair: [number, number] | null;
                    } | null;
                }[];
            } | null;
        }>;
        answerLink: (code: string, input: import("@50heads/shared").PublicLinkAnswerInput) => Promise<{
            accepted: boolean;
            state: "closed" | "live" | "scheduled" | "full" | "paused";
            showResult: boolean;
            resultCode: string | null;
            visit: string | null;
            remaining: number[];
            answered: {
                position: number;
                resultCode: string | null;
            }[];
        }>;
        linkStarted: (code: string, input: {
            nonce: string;
        }) => Promise<{
            ok: true;
        }>;
        templates: () => Promise<{
            templates: import("@50heads/shared").Template[];
        }>;
        tags: () => Promise<{
            groups: {
                id: "life_stage" | "household" | "income" | "education" | "occupation" | "interests" | "habits" | "shopping" | "health" | "media" | "pets" | "tech";
                label: string;
                why: string;
                max: number;
            }[];
            tags: {
                id: string;
                group: "life_stage" | "household" | "income" | "education" | "occupation" | "interests" | "habits" | "shopping" | "health" | "media" | "pets" | "tech";
                label: string;
            }[];
        }>;
        countries: () => Promise<{
            countries: import("@50heads/shared").CountryAvailability[];
            updatedAt: string;
        }>;
    };
    quote: (draft: import("@50heads/shared").QuestionDraftInput, surface?: "app" | "web") => Promise<import("@50heads/shared").Quote & {
        poolSize: number | null;
        price?: {
            amount: number;
            currency: string;
        };
    }>;
    events: (input: import("zod").infer<typeof import("@50heads/shared").EventsInput>) => Promise<{
        ok: true;
    }>;
    account: {
        profile: () => Promise<{
            firstName: string | null;
            initial: string;
            avatarUrl: string | null;
            headSince: string;
            answers: number;
            autoPayout: boolean;
        }>;
        update: (input: {
            name?: string;
            locale?: string;
            displayCurrency?: string;
            languages?: import("@50heads/shared").QuestionLanguage[];
        }) => Promise<{
            user: import("@50heads/shared").User;
        }>;
        notifications: () => Promise<{
            questionsWaiting: boolean;
            money: boolean;
            results: boolean;
            tips: boolean;
            activeHours: {
                from: number;
                to: number;
            };
            emailResults: boolean;
            emailLowCredits: boolean;
            emailWeeklyDigest: boolean;
            quietDays?: number[] | undefined;
            emailExpiringCredits?: boolean | undefined;
            emailAudiences?: boolean | undefined;
            emailLifecycle?: boolean | undefined;
        }>;
        setNotifications: (prefs: import("@50heads/shared").NotificationPrefs) => Promise<{
            questionsWaiting: boolean;
            money: boolean;
            results: boolean;
            tips: boolean;
            activeHours: {
                from: number;
                to: number;
            };
            emailResults: boolean;
            emailLowCredits: boolean;
            emailWeeklyDigest: boolean;
            quietDays?: number[] | undefined;
            emailExpiringCredits?: boolean | undefined;
            emailAudiences?: boolean | undefined;
            emailLifecycle?: boolean | undefined;
        }>;
        prompts: () => Promise<{
            due: ("verify_phone" | "verify_id" | "rating_first_payout" | "rating_tier2" | "rating_milestone_100" | "rating_milestone_500" | "rating_first_result" | "notifications" | "add_tags" | "invite_friend" | "set_payout_method" | "feed_first" | "feed_tier2_pays")[];
        }>;
        promptEvent: (input: import("zod").infer<typeof import("@50heads/shared").PromptEvent>) => Promise<{
            ok: true;
        }>;
        referral: () => Promise<{
            code: string;
            link: string;
            termsLine: string;
            friends: {
                name: string;
                state: "tier1" | "tier2" | "installed";
                paidPence: number;
                says?: number | undefined;
                outcome?: "paid" | "expired" | "waiting" | "not_eligible" | undefined;
            }[];
            bonusPence?: number | undefined;
            refereePence?: number | undefined;
            saysNeeded?: number | undefined;
            withinDays?: number | undefined;
        }>;
        applyInvite: (code: string) => Promise<{
            ok: true;
        }>;
        sessions: () => Promise<{
            sessions: import("zod").infer<typeof import("@50heads/shared").SessionInfo>[];
        }>;
        revokeSession: (id: string) => Promise<{
            ok: true;
        }>;
        reauth: (input: import("@50heads/shared").Reauth) => Promise<{
            reauthToken: string;
            expiresAt: string;
        }>;
        support: (input: {
            subject: string;
            body: string;
            appVersion?: string;
        }) => Promise<{
            ticketId: string;
        }>;
        tickets: () => Promise<{
            tickets: import("@50heads/shared").SupportTicket[];
        }>;
        ticket: (id: string) => Promise<{
            ticket: import("@50heads/shared").SupportTicket;
        }>;
        replyTicket: (id: string, body: string) => Promise<{
            ticket: import("@50heads/shared").SupportTicket;
        }>;
        dataExport: () => Promise<{
            ok: true;
        }>;
        signOutEverywhere: () => Promise<{
            ok: true;
            revoked: number;
        }>;
    };
    attest: {
        nonce: () => Promise<import("@50heads/shared").AttestNonce>;
        verify: (input: import("@50heads/shared").AttestRequest) => Promise<import("@50heads/shared").AttestResult>;
        rotateKey: (input: import("zod").input<typeof import("@50heads/shared").DeviceKeyRotateInput>) => Promise<{
            ok: true;
        }>;
    };
    deviceCheck: {
        nonce: (device: import("zod").infer<typeof import("@50heads/shared").DeviceCheckNonceInput>["device"]) => Promise<import("@50heads/shared").AttestNonce>;
        verify: (input: import("@50heads/shared").DeviceCheckRequest) => Promise<{
            ok: true;
        }>;
    };
    uploads: {
        create: (input: {
            kind: "image" | "audio";
            contentType: string;
            bytes: number;
        }) => Promise<{
            uploadUrl: string;
            publicUrl: string;
            headers: Record<string, string>;
        }>;
        put: (uploadUrl: string, bytes: Uint8Array, contentType: string) => Promise<{
            ok: true;
            publicUrl: string;
            width: number | null;
            height: number | null;
        } & {
            error?: {
                code: string;
                message: string;
            };
        }>;
        importUrl: (url: string) => Promise<{
            publicUrl: string;
            width: number | null;
            height: number | null;
        }>;
    };
    reviews: {
        start: (draft: import("@50heads/shared").QuestionDraftInput) => Promise<{
            inputHash: string;
            status: "pending" | "failed" | "skipped" | "ready";
            review?: {
                status: "ok" | "unavailable" | "skipped";
                rubricVersion: string;
                model?: string | undefined;
                inputHash?: string | undefined;
                overall?: "pass" | "suggest" | undefined;
                scores?: {
                    clarity: number;
                    singleIdea: number;
                    neutral: number;
                    options: number;
                    answerable: number;
                    length: number;
                } | undefined;
                suggestions?: {
                    id: string;
                    code: string;
                    severity: "info" | "suggest" | "strong";
                    field: string;
                    reason: string;
                    op?: {
                        type: "replace_text";
                        text: string;
                    } | {
                        type: "replace_context";
                        context: string;
                    } | {
                        type: "replace_stimulus_text";
                        text: string;
                    } | {
                        type: "replace_option";
                        index: number;
                        label: string;
                    } | {
                        type: "add_option";
                        label: string;
                        index?: number | undefined;
                    } | {
                        type: "remove_option";
                        index: number;
                    } | {
                        type: "reorder_options";
                        order: number[];
                    } | {
                        type: "set_neither";
                        neither: boolean;
                    } | {
                        type: "set_type";
                        questionType: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                    } | {
                        type: "tidy";
                        text?: string | undefined;
                        context?: string | undefined;
                        stimulusText?: string | undefined;
                        options?: string[] | undefined;
                    } | undefined;
                }[] | undefined;
                skippedReason?: "flag_off" | "incomplete" | "no_text" | "content_refused" | "ai_off" | "asks_killed" | undefined;
            } | undefined;
            retryMs?: number | undefined;
        }>;
        get: (inputHash: string) => Promise<{
            inputHash: string;
            status: "pending" | "failed" | "skipped" | "ready";
            review?: {
                status: "ok" | "unavailable" | "skipped";
                rubricVersion: string;
                model?: string | undefined;
                inputHash?: string | undefined;
                overall?: "pass" | "suggest" | undefined;
                scores?: {
                    clarity: number;
                    singleIdea: number;
                    neutral: number;
                    options: number;
                    answerable: number;
                    length: number;
                } | undefined;
                suggestions?: {
                    id: string;
                    code: string;
                    severity: "info" | "suggest" | "strong";
                    field: string;
                    reason: string;
                    op?: {
                        type: "replace_text";
                        text: string;
                    } | {
                        type: "replace_context";
                        context: string;
                    } | {
                        type: "replace_stimulus_text";
                        text: string;
                    } | {
                        type: "replace_option";
                        index: number;
                        label: string;
                    } | {
                        type: "add_option";
                        label: string;
                        index?: number | undefined;
                    } | {
                        type: "remove_option";
                        index: number;
                    } | {
                        type: "reorder_options";
                        order: number[];
                    } | {
                        type: "set_neither";
                        neither: boolean;
                    } | {
                        type: "set_type";
                        questionType: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                    } | {
                        type: "tidy";
                        text?: string | undefined;
                        context?: string | undefined;
                        stimulusText?: string | undefined;
                        options?: string[] | undefined;
                    } | undefined;
                }[] | undefined;
                skippedReason?: "flag_off" | "incomplete" | "no_text" | "content_refused" | "ai_off" | "asks_killed" | undefined;
            } | undefined;
            retryMs?: number | undefined;
        }>;
    };
    drafts: {
        list: () => Promise<{
            drafts: import("@50heads/shared").Draft[];
        }>;
        save: (draft: Partial<import("@50heads/shared").QuestionDraftInput> & {
            type: import("@50heads/shared").QuestionDraftInput["type"];
        }, id?: string) => Promise<{
            id: string;
            draft: {
                type: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                text?: string | undefined;
                context?: string | undefined;
                language?: string | undefined;
                options?: {
                    label: string;
                    imageUrl?: string | undefined;
                }[] | undefined;
                neither?: boolean | undefined;
                stimulus?: {
                    imageUrl?: string | undefined;
                    audioUrl?: string | undefined;
                    text?: string | undefined;
                    exposureMs?: number | undefined;
                } | undefined;
                n?: number | undefined;
                tier?: 1 | 2 | 3 | undefined;
                rush?: boolean | undefined;
                targeting?: {
                    countries: string[];
                    tags: string[];
                    ageBands?: ("18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+")[] | undefined;
                    genders?: ("woman" | "man" | "non_binary")[] | undefined;
                    verifiedAge?: boolean | undefined;
                } | undefined;
                clickTest?: {
                    maxTaps: number;
                } | undefined;
                scheduledFor?: string | undefined;
                publicResults?: boolean | undefined;
                reason?: "off" | "optional" | "required" | undefined;
                contentFlag?: "medical" | "violence" | "distressing" | "alcohol_gambling" | "political" | "none" | undefined;
                interestAudienceId?: string | undefined;
                minGrade?: 1 | 2 | 3 | undefined;
                interestPrice?: {
                    perAnswerPence: number;
                    headShareBps: number;
                } | undefined;
                answeredBy?: "heads" | "private" | undefined;
                openForDays?: 1 | 14 | 7 | 30 | undefined;
                shownAs?: string | undefined;
            };
            updatedAt: string;
        }>;
        remove: (id: string) => Promise<{
            ok: true;
        }>;
    };
    sets: {
        create: (input: import("@50heads/shared").SetCreateInputInput, idempotencyKey: string) => Promise<{
            set: {
                id: string;
                status: "open" | "closed";
                shownAs: string | null;
                maxAnswers: number;
                openForDays: 1 | 14 | 7 | 30;
                publicResults: boolean;
                expiresAt: string;
                questionIds: string[];
                answered: number;
                creditsReserved: number;
                creditsSpent: number;
                link: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null;
                teamId: string | null;
                createdAt: string;
                closedAt: string | null;
            };
            questions: {
                type: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                text: string;
                language: string;
                options: {
                    label: string;
                    imageUrl?: string | undefined;
                }[];
                neither: boolean;
                n: number;
                tier: 1 | 2 | 3;
                rush: boolean;
                publicResults: boolean;
                reason: "off" | "optional" | "required";
                answeredBy: "heads" | "private";
                openForDays: 1 | 14 | 7 | 30;
                id: string;
                status: "cancelled" | "closed" | "live" | "scheduled" | "draft" | "complete" | "underfilled" | "refused";
                source: "app" | "portal" | "api" | "mcp";
                answered: number;
                creditsPerAnswer: number;
                creditsReserved: number;
                creditsSpent: number;
                etaMinutes: number;
                leaderLine: string | null;
                refusedCategory: string | null;
                publicCode: string | null;
                createdAt: string;
                liveAt: string | null;
                closedAt: string | null;
                context?: string | undefined;
                stimulus?: {
                    imageUrl?: string | undefined;
                    audioUrl?: string | undefined;
                    text?: string | undefined;
                    exposureMs?: number | undefined;
                } | undefined;
                targeting?: {
                    countries: string[];
                    tags: string[];
                    ageBands?: ("18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+")[] | undefined;
                    genders?: ("woman" | "man" | "non_binary")[] | undefined;
                    verifiedAge?: boolean | undefined;
                } | undefined;
                clickTest?: {
                    maxTaps: number;
                } | undefined;
                scheduledFor?: string | undefined;
                contentFlag?: "medical" | "violence" | "distressing" | "alcohol_gambling" | "political" | "none" | undefined;
                interestAudienceId?: string | undefined;
                minGrade?: 1 | 2 | 3 | undefined;
                interestPrice?: {
                    perAnswerPence: number;
                    headShareBps: number;
                } | undefined;
                shownAs?: string | undefined;
                teamId?: string | null | undefined;
                askedBy?: {
                    id: string;
                    name: string | null;
                } | null | undefined;
                projectId?: string | null | undefined;
                labels?: string[] | undefined;
                archived?: boolean | undefined;
                bookmarked?: boolean | undefined;
                externalRef?: string | null | undefined;
                link?: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null | undefined;
                setId?: string | null | undefined;
                setPosition?: number | null | undefined;
                setCount?: number | null | undefined;
            }[];
        }>;
        list: (filter?: {
            status?: import("@50heads/shared").SetStatus;
            limit?: number;
            cursor?: string;
        }) => Promise<{
            sets: import("@50heads/shared").SetV2[];
            nextCursor: string | null;
        }>;
        get: (id: string) => Promise<{
            set: {
                id: string;
                status: "open" | "closed";
                shownAs: string | null;
                maxAnswers: number;
                openForDays: 1 | 14 | 7 | 30;
                publicResults: boolean;
                expiresAt: string;
                questionIds: string[];
                answered: number;
                creditsReserved: number;
                creditsSpent: number;
                link: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null;
                teamId: string | null;
                createdAt: string;
                closedAt: string | null;
            };
            questions: {
                type: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                text: string;
                language: string;
                options: {
                    label: string;
                    imageUrl?: string | undefined;
                }[];
                neither: boolean;
                n: number;
                tier: 1 | 2 | 3;
                rush: boolean;
                publicResults: boolean;
                reason: "off" | "optional" | "required";
                answeredBy: "heads" | "private";
                openForDays: 1 | 14 | 7 | 30;
                id: string;
                status: "cancelled" | "closed" | "live" | "scheduled" | "draft" | "complete" | "underfilled" | "refused";
                source: "app" | "portal" | "api" | "mcp";
                answered: number;
                creditsPerAnswer: number;
                creditsReserved: number;
                creditsSpent: number;
                etaMinutes: number;
                leaderLine: string | null;
                refusedCategory: string | null;
                publicCode: string | null;
                createdAt: string;
                liveAt: string | null;
                closedAt: string | null;
                context?: string | undefined;
                stimulus?: {
                    imageUrl?: string | undefined;
                    audioUrl?: string | undefined;
                    text?: string | undefined;
                    exposureMs?: number | undefined;
                } | undefined;
                targeting?: {
                    countries: string[];
                    tags: string[];
                    ageBands?: ("18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+")[] | undefined;
                    genders?: ("woman" | "man" | "non_binary")[] | undefined;
                    verifiedAge?: boolean | undefined;
                } | undefined;
                clickTest?: {
                    maxTaps: number;
                } | undefined;
                scheduledFor?: string | undefined;
                contentFlag?: "medical" | "violence" | "distressing" | "alcohol_gambling" | "political" | "none" | undefined;
                interestAudienceId?: string | undefined;
                minGrade?: 1 | 2 | 3 | undefined;
                interestPrice?: {
                    perAnswerPence: number;
                    headShareBps: number;
                } | undefined;
                shownAs?: string | undefined;
                teamId?: string | null | undefined;
                askedBy?: {
                    id: string;
                    name: string | null;
                } | null | undefined;
                projectId?: string | null | undefined;
                labels?: string[] | undefined;
                archived?: boolean | undefined;
                bookmarked?: boolean | undefined;
                externalRef?: string | null | undefined;
                link?: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null | undefined;
                setId?: string | null | undefined;
                setPosition?: number | null | undefined;
                setCount?: number | null | undefined;
            }[];
        }>;
        close: (id: string) => Promise<{
            set: {
                id: string;
                status: "open" | "closed";
                shownAs: string | null;
                maxAnswers: number;
                openForDays: 1 | 14 | 7 | 30;
                publicResults: boolean;
                expiresAt: string;
                questionIds: string[];
                answered: number;
                creditsReserved: number;
                creditsSpent: number;
                link: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null;
                teamId: string | null;
                createdAt: string;
                closedAt: string | null;
            };
            questions: {
                type: "single_choice" | "multi_choice" | "ab_image" | "pairwise" | "scale_1_5" | "ranking" | "yes_no" | "yes_mostly_no" | "click_test" | "reaction" | "free_text";
                text: string;
                language: string;
                options: {
                    label: string;
                    imageUrl?: string | undefined;
                }[];
                neither: boolean;
                n: number;
                tier: 1 | 2 | 3;
                rush: boolean;
                publicResults: boolean;
                reason: "off" | "optional" | "required";
                answeredBy: "heads" | "private";
                openForDays: 1 | 14 | 7 | 30;
                id: string;
                status: "cancelled" | "closed" | "live" | "scheduled" | "draft" | "complete" | "underfilled" | "refused";
                source: "app" | "portal" | "api" | "mcp";
                answered: number;
                creditsPerAnswer: number;
                creditsReserved: number;
                creditsSpent: number;
                etaMinutes: number;
                leaderLine: string | null;
                refusedCategory: string | null;
                publicCode: string | null;
                createdAt: string;
                liveAt: string | null;
                closedAt: string | null;
                context?: string | undefined;
                stimulus?: {
                    imageUrl?: string | undefined;
                    audioUrl?: string | undefined;
                    text?: string | undefined;
                    exposureMs?: number | undefined;
                } | undefined;
                targeting?: {
                    countries: string[];
                    tags: string[];
                    ageBands?: ("18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+")[] | undefined;
                    genders?: ("woman" | "man" | "non_binary")[] | undefined;
                    verifiedAge?: boolean | undefined;
                } | undefined;
                clickTest?: {
                    maxTaps: number;
                } | undefined;
                scheduledFor?: string | undefined;
                contentFlag?: "medical" | "violence" | "distressing" | "alcohol_gambling" | "political" | "none" | undefined;
                interestAudienceId?: string | undefined;
                minGrade?: 1 | 2 | 3 | undefined;
                interestPrice?: {
                    perAnswerPence: number;
                    headShareBps: number;
                } | undefined;
                shownAs?: string | undefined;
                teamId?: string | null | undefined;
                askedBy?: {
                    id: string;
                    name: string | null;
                } | null | undefined;
                projectId?: string | null | undefined;
                labels?: string[] | undefined;
                archived?: boolean | undefined;
                bookmarked?: boolean | undefined;
                externalRef?: string | null | undefined;
                link?: {
                    url: string;
                    qrSvgUrl: string;
                    qrPngUrl: string;
                    closesAt: string | null;
                    views: number;
                    started: number;
                } | null | undefined;
                setId?: string | null | undefined;
                setPosition?: number | null | undefined;
                setCount?: number | null | undefined;
            }[];
        } & {
            refundCredits: number;
        }>;
        linkQrUrl: (id: string, format: "svg" | "png") => string;
        exportCsvUrl: (id: string) => string;
    };
    asks: {
        create: (draft: import("@50heads/shared").QuestionDraftInput, idempotencyKey: string, fromDraftId?: string) => Promise<{
            question: import("@50heads/shared").QuestionV2;
        }>;
        list: (filter?: {
            status?: import("@50heads/shared").QuestionStatusV2;
            since?: string;
            limit?: number;
            cursor?: string;
        } & import("zod").input<typeof import("@50heads/shared").QuestionListFilter>) => Promise<{
            questions: import("@50heads/shared").QuestionV2[];
            nextCursor: string | null;
        }>;
        get: (id: string) => Promise<{
            question: import("@50heads/shared").QuestionV2;
        }>;
        result: (id: string, filter?: import("@50heads/shared").ResultFilterInput) => Promise<{
            result: import("@50heads/shared").ResultV2;
        }>;
        answers: (id: string, filter?: import("@50heads/shared").ResultFilterInput, page?: {
            limit?: number;
            cursor?: string | null;
        }) => Promise<{
            questionId: string;
            filter: {
                option?: number | undefined;
                tier?: number | undefined;
                country?: string | undefined;
                ageBand?: string | undefined;
                gender?: "woman" | "man" | "non_binary" | undefined;
                q?: string | undefined;
            };
            total: number;
            nUnfiltered: number;
            suppressed: boolean;
            answers: {
                option: string | null;
                text: string | null;
                tier: number | null;
                attestationRef: string | null;
                answeredAt: string;
                translatedText?: string | null | undefined;
                reason?: string | null | undefined;
                translatedReason?: string | null | undefined;
                pinned?: boolean | undefined;
                flag?: {
                    reason: "automated" | "off_topic" | "low_effort" | "abusive";
                    status: "open" | "upheld" | "dismissed";
                    refundCredits: number;
                    createdAt: string;
                    decidedAt: string | null;
                } | null | undefined;
                taps?: {
                    x: number;
                    y: number;
                }[] | undefined;
            }[];
            translationLanguage: string | null;
            nextCursor: string | null;
        }>;
        insights: (id: string) => Promise<{
            insights: import("@50heads/shared").ResultInsights | null;
        }>;
        summarise: (id: string) => Promise<{
            insights: import("@50heads/shared").ResultInsights | null;
        }>;
        wait: (id: string, seconds?: number, minAnswers?: number) => Promise<{
            result: import("@50heads/shared").ResultV2;
            done: boolean;
        }>;
        cancel: (id: string) => Promise<{
            question: import("@50heads/shared").QuestionV2;
            refundCredits: number;
        }>;
        dispute: (id: string, reason: string) => Promise<{
            ok: true;
        }>;
        share: (id: string, isPublic: boolean) => Promise<{
            publicCode: string | null;
            url: string | null;
        }>;
        exportCsvUrl: (id: string, filter?: import("@50heads/shared").ResultFilterInput) => string;
        heatmapUrl: (id: string) => string;
        linkQrUrl: (id: string, format: "svg" | "png") => string;
        rate: (id: string, usefulness: number) => Promise<{
            ok: true;
        }>;
        createWith: (draft: import("@50heads/shared").QuestionDraftInput, idempotencyKey: string, extras: import("@50heads/shared").AskExtrasInput & {
            fromDraftId?: string;
        }) => Promise<{
            question: import("@50heads/shared").QuestionV2;
        }>;
        update: (id: string, input: import("@50heads/shared").QuestionUpdateInput) => Promise<{
            question: import("@50heads/shared").QuestionV2;
        }>;
        flagAnswer: (id: string, attestationRef: string, input: import("@50heads/shared").AnswerFlagInput) => Promise<{
            flag: import("@50heads/shared").AnswerFlagState & {
                id: string;
                attestationRef: string;
            };
        }>;
        pinAnswer: (id: string, attestationRef: string, pinned: boolean) => Promise<{
            pinned: boolean;
        }>;
        quoteAddHeads: (id: string, n: number) => Promise<{
            quote: import("@50heads/shared").AddHeadsQuote;
        }>;
        addHeads: (id: string, n: number, idempotencyKey: string) => Promise<{
            question: import("@50heads/shared").QuestionV2;
            quote: import("@50heads/shared").AddHeadsQuote;
            creditsReserved: number;
        }>;
        export: (id: string, input: import("@50heads/shared").ExportInput) => Promise<{
            export: import("@50heads/shared").ExportLink;
        }>;
        shareLinks: {
            list: (id: string) => Promise<{
                links: import("@50heads/shared").ShareLink[];
            }>;
            create: (id: string, input?: import("@50heads/shared").ShareLinkInput) => Promise<{
                link: import("@50heads/shared").ShareLink;
            }>;
            revoke: (id: string, linkId: string) => Promise<{
                link: import("@50heads/shared").ShareLink;
            }>;
        };
        exportUrl: (id: string, format: import("@50heads/shared/client").ExportFormat, params?: Record<string, string | number | undefined>) => string;
        labels: () => Promise<{
            labels: {
                label: string;
                count: number;
            }[];
        }>;
    };
    projects: {
        list: (filter?: {
            archived?: boolean;
        }) => Promise<{
            projects: import("@50heads/shared").Project[];
        }>;
        create: (input: import("zod").input<typeof import("@50heads/shared").ProjectInput>) => Promise<{
            project: import("@50heads/shared").Project;
        }>;
        update: (id: string, input: import("zod").input<typeof import("@50heads/shared").ProjectUpdateInput>) => Promise<{
            project: import("@50heads/shared").Project;
        }>;
        remove: (id: string) => Promise<{
            ok: true;
        }>;
    };
    billing: {
        balance: () => Promise<{
            credits: number;
            reserved: number;
            expiring: {
                credits: number;
                expiresAt: string;
            }[];
            currency: "GBP" | "USD" | "EUR" | "CAD" | "JPY" | "KRW" | "SEK" | "DKK" | "NOK" | "PLN" | "BRL" | "CZK" | "RON" | "TRY";
            capRemaining: number | null;
            freeQuestionToday: boolean;
            privateDeclaredAt?: string | null | undefined;
        }>;
        packs: (currency: string) => Promise<{
            packs: {
                id: string;
                credits: number;
                bonusCredits: number;
                price: number;
                currency: string;
                bankTransfer: boolean;
            }[];
        }>;
        checkout: (input: import("zod").infer<typeof import("@50heads/shared").CheckoutInput>) => Promise<{
            method: "card";
            url: string;
            sessionId: string;
        } | {
            method: "bank_transfer";
            reference: string;
            amount: number;
            currency: "GBP" | "USD" | "EUR" | "CAD";
            details: Record<string, string>;
            expiresAt: string;
        }>;
        autoTopUp: () => Promise<{
            enabled: boolean;
            thresholdCredits: number;
            pack: string;
            paymentMethodLast4: string | null;
        }>;
        setAutoTopUp: (input: import("zod").infer<typeof import("@50heads/shared").AutoTopUp>) => Promise<{
            enabled: boolean;
            thresholdCredits: number;
            pack: string;
            paymentMethodLast4: string | null;
        }>;
        invoices: () => Promise<{
            invoices: import("@50heads/shared").Invoice[];
        }>;
        profile: () => Promise<{
            legalName: string | null;
            address: string | null;
            country: string | null;
            vatNumber: string | null;
            vatValid: boolean | null;
        }>;
        setProfile: (input: Partial<import("zod").infer<typeof import("@50heads/shared").BillingProfile>>) => Promise<{
            legalName: string | null;
            address: string | null;
            country: string | null;
            vatNumber: string | null;
            vatValid: boolean | null;
        }>;
        ledger: (cursor?: string) => Promise<{
            rows: import("@50heads/shared").LedgerRow[];
            nextCursor: string | null;
        }>;
        statements: () => Promise<{
            statements: import("zod").infer<typeof import("@50heads/shared").Statement>[];
        }>;
        transfers: () => Promise<{
            transfers: import("@50heads/shared").BankTransfer[];
        }>;
        invoiceTerms: () => Promise<{
            status: "none" | "pending" | "approved" | "declined";
            termsDays: number | null;
            decidedAt: string | null;
        }>;
        requestInvoiceTerms: (input: import("zod").infer<typeof import("@50heads/shared").InvoiceTermsInput>) => Promise<{
            status: "none" | "pending" | "approved" | "declined";
            termsDays: number | null;
            decidedAt: string | null;
        }>;
        disputes: () => Promise<{
            disputes: import("@50heads/shared").Dispute[];
        }>;
    };
    audiences: {
        list: () => Promise<{
            audiences: import("@50heads/shared").SavedAudience[];
        }>;
        save: (input: import("zod").infer<typeof import("@50heads/shared").SavedAudienceInput>) => Promise<{
            audience: import("@50heads/shared").SavedAudience;
        }>;
        update: (id: string, input: import("zod").infer<typeof import("@50heads/shared").SavedAudienceInput>) => Promise<{
            audience: import("@50heads/shared").SavedAudience;
        }>;
        remove: (id: string) => Promise<{
            ok: true;
        }>;
    };
    file: (url: string) => Promise<Response>;
    earn: {
        queue: () => Promise<{
            summary: import("@50heads/shared").QueueSummary;
            items: import("@50heads/shared").FeedItemV2[];
        }>;
        say: (questionId: string, input: import("@50heads/shared").SayInputV2, idempotencyKey: string) => Promise<{
            earnedPence: number;
            pending: boolean;
            summary: import("@50heads/shared").QueueSummary;
        }>;
        skip: (questionId: string, input: {
            dwellMs: number;
            reason: "skip" | "close" | "stale" | "warning";
            flag?: "unclear" | "media_broken" | "offensive" | "not_for_me";
        }) => Promise<{
            ok: true;
        }>;
        earnings: () => Promise<{
            available: number;
            pending: number;
            pendingClearsInDays: number;
            thisMonth: number;
            minimumWithdrawal: number;
            autoPayout: {
                enabled: boolean;
                nextRunAt: string | null;
            };
            recent: {
                id: string;
                at: string;
                kind: "clawback" | "not_paid" | "say" | "ask" | "purchase" | "refund" | "bonus" | "referral" | "payout" | "payout_returned" | "fee" | "expiry" | "adjustment" | "tier2_fee" | "founder_credits";
                title: string;
                state: "not_paid" | "available" | "pending" | "in_flight" | "paid" | "reversed";
                amount: number;
                ref: string | null;
                notPaid?: {
                    id: string;
                    source: "rejected" | "clawback";
                    reason: "too_fast" | "repeat" | "check_question" | "automated" | "linked_accounts" | "shared_payout_method" | "confirmed_fraud";
                    amount: number;
                    status: "not_paid" | "appealed" | "upheld" | "not_upheld";
                    appealBy: string | null;
                    decisionBy: string | null;
                } | null | undefined;
                by?: string | null | undefined;
                releaseAt?: string | null | undefined;
            }[];
            nextCursor: string | null;
            pendingClearsInHours?: number | undefined;
            nextReleaseAt?: string | null | undefined;
            founding?: {
                holdHours: number;
                until: string;
                weeklyCapPence?: number | undefined;
                weeklyLeftPence?: number | undefined;
            } | null | undefined;
            welcomeBonus?: {
                amountPence: number;
                saysNeeded: number;
                saysDone: number;
                state: "closed" | "in_progress" | "paid";
            } | null | undefined;
            founderCredits?: number | null | undefined;
            founderCreditsPending?: number | null | undefined;
            accepted?: {
                rate: number | null;
                accepted: number;
                total: number;
                days: number;
            } | undefined;
            answering?: {
                today: {
                    earned: number;
                    seconds: number;
                };
                week: {
                    earned: number;
                    seconds: number;
                };
            } | undefined;
            country?: {
                country: string | null;
                open: boolean;
                notify: boolean;
                heldPence: number;
            } | undefined;
        }>;
        ledger: (filter?: {
            cursor?: string;
            month?: string;
        }) => Promise<{
            rows: import("@50heads/shared").LedgerRow[];
            nextCursor: string | null;
        }>;
        ledgerCsvUrl: (month?: string) => string;
        withdrawQuote: (input?: {
            amount?: number;
            methodId?: string;
        }) => Promise<{
            amount: number;
            available: number;
            minimum: number;
            maximum: number;
            methodId: string | null;
            fee: number;
            feeLabel: string;
            fx: {
                from: string;
                to: string;
                rate: number;
                validUntil: string;
            } | null;
            receive: {
                amount: number;
                currency: string;
            };
            arrives: string;
            blocker: "tax_details_required" | "no_method" | "below_minimum" | "reverify_required" | "frozen" | "method_cooling_off" | "method_unavailable" | "integrity_limited" | null;
            quoteId: string;
            usableFrom?: string | null | undefined;
        }>;
        withdraw: (quoteId: string, idempotencyKey: string) => Promise<{
            withdrawal: import("@50heads/shared").Withdrawal;
        }>;
        withdrawals: () => Promise<{
            withdrawals: import("@50heads/shared").Withdrawal[];
        }>;
        payoutMethods: () => Promise<{
            methods: {
                id: string;
                rail: "wise" | "paypal" | "bank_uk" | "venmo";
                masked: string;
                holderName: string | null;
                currency: string;
                isDefault: boolean;
                status: "active" | "failed" | "pending_confirmation";
                copResult: "match" | "close_match" | "no_match" | "unavailable" | null;
                unavailableReason: string | null;
                usableFrom?: string | null | undefined;
                label?: string | undefined;
            }[];
            available: string[];
            offered?: {
                rail: "wise" | "paypal" | "bank_uk" | "venmo";
                label: string;
                line: string;
                currency: string;
                lockedReason: string | null;
            }[] | undefined;
            addDefault?: "wise" | "paypal" | "bank_uk" | "venmo" | undefined;
            withdrawDefault?: string | null | undefined;
        }>;
        wiseRequirements: (currency: string) => Promise<{
            currency: string;
            source: "wise" | "fallback";
            requirement: {
                type: string;
                title: string;
                fields: {
                    key: string;
                    label: string;
                    required: boolean;
                    example?: string | undefined;
                    pattern?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    options?: {
                        value: string;
                        label: string;
                    }[] | undefined;
                    refresh?: boolean | undefined;
                }[];
            } | null;
            others: {
                type: string;
                title: string;
                fields: {
                    key: string;
                    label: string;
                    required: boolean;
                    example?: string | undefined;
                    pattern?: string | undefined;
                    minLength?: number | undefined;
                    maxLength?: number | undefined;
                    options?: {
                        value: string;
                        label: string;
                    }[] | undefined;
                    refresh?: boolean | undefined;
                }[];
            }[];
        }>;
        addPayoutMethod: (input: import("@50heads/shared").AddPayoutMethodInput, reauthToken: string) => Promise<{
            method: import("@50heads/shared").PayoutMethod;
        }>;
        confirmPayoutMethod: (id: string, code: string) => Promise<{
            method: import("@50heads/shared").PayoutMethod;
        }>;
        setDefaultPayoutMethod: (id: string) => Promise<{
            ok: true;
        }>;
        removePayoutMethod: (id: string, reauthToken: string) => Promise<{
            ok: true;
        }>;
        acknowledgeNotice: (version: string) => Promise<{
            ok: true;
            version: string;
        }>;
        decisions: () => Promise<{
            decisions: import("@50heads/shared").HeadDecision[];
        }>;
        setAutoPayout: (enabled: boolean) => Promise<{
            ok: true;
        }>;
        taxStatus: () => Promise<{
            required: boolean;
            complete: boolean;
            fields: string[];
            reason: string;
            saved: Record<string, string> | null;
            authority?: string | undefined;
            selfBilling?: {
                required: boolean;
                acceptedAt: string | null;
                renewBy: string | null;
            } | undefined;
            w9?: {
                classification: "individual" | "single_member_llc";
                tinType: "ssn" | "ein";
                certifiedAt: string;
                signature: string;
                version: string;
            } | null | undefined;
            forms1099?: {
                year: number;
                amountCents: number;
                pdfUrl: string;
            }[] | undefined;
        }>;
        setTax: (input: import("@50heads/shared").TaxDetails, reauthToken: string) => Promise<{
            required: boolean;
            complete: boolean;
            fields: string[];
            reason: string;
            saved: Record<string, string> | null;
            authority?: string | undefined;
            selfBilling?: {
                required: boolean;
                acceptedAt: string | null;
                renewBy: string | null;
            } | undefined;
            w9?: {
                classification: "individual" | "single_member_llc";
                tinType: "ssn" | "ein";
                certifiedAt: string;
                signature: string;
                version: string;
            } | null | undefined;
            forms1099?: {
                year: number;
                amountCents: number;
                pdfUrl: string;
            }[] | undefined;
        }>;
        statements: () => Promise<{
            statements: import("zod").infer<typeof import("@50heads/shared").Statement>[];
        }>;
        tier: () => Promise<{
            tier: number;
            label: string;
            progress: number;
            nextStep: {
                action: "verify_phone" | "verify_id" | "keep_answering";
                line: string;
                payMultiple: number;
            } | null;
            tier2Available: boolean;
            verification: {
                status: "approved" | "declined" | "not_started" | "checking" | "resubmit";
                updatedAt: string;
            } | null;
        }>;
        startTier2: (input: import("zod").infer<typeof import("@50heads/shared").Tier2Consent>) => Promise<{
            vendor: "stripe_identity" | "veriff" | "onfido";
            sessionId: string;
            clientSecret: string;
            url: string | null;
            kind: "tier2" | "recheck";
            feePence: number;
        }>;
        startRecheck: () => Promise<{
            vendor: "stripe_identity" | "veriff" | "onfido";
            sessionId: string;
            clientSecret: string;
            url: string | null;
            kind: "tier2" | "recheck";
            feePence: number;
        }>;
        tags: () => Promise<{
            tagIds: string[];
            ageBand: string | null;
            declaredAgeBand?: "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+" | null | undefined;
            gender?: "woman" | "man" | "non_binary" | null | undefined;
            answers?: Record<string, "none" | "not_sure" | "prefer_not"> | undefined;
        }>;
        setTags: (tagIds: string[], about?: Omit<import("@50heads/shared").MyTagsInput, "tagIds">) => Promise<{
            tagIds: string[];
            ageBand: string | null;
            declaredAgeBand?: "18-24" | "25-34" | "35-44" | "45-54" | "55-64" | "65+" | null | undefined;
            gender?: "woman" | "man" | "non_binary" | null | undefined;
            answers?: Record<string, "none" | "not_sure" | "prefer_not"> | undefined;
        }>;
        appeals: () => Promise<{
            appeals: import("@50heads/shared").Appeal[];
            canAppeal: boolean;
            nextAllowedAt: string | null;
        }>;
        appeal: (text: string) => Promise<{
            appeal: import("@50heads/shared").Appeal;
        }>;
        appealNotPaid: (notPaidId: string, text: string) => Promise<{
            appeal: import("@50heads/shared").Appeal;
        }>;
        answering: () => Promise<{
            country: string | null;
            open: boolean;
            notify: boolean;
            heldPence: number;
        }>;
        setAnsweringNotify: (notify: boolean) => Promise<{
            country: string | null;
            open: boolean;
            notify: boolean;
            heldPence: number;
        }>;
        contentPrefs: () => Promise<{
            optedIn: ("medical" | "violence" | "distressing" | "alcohol_gambling" | "political")[];
        }>;
        setContentPrefs: (input: import("@50heads/shared").ContentPrefs) => Promise<{
            optedIn: ("medical" | "violence" | "distressing" | "alcohol_gambling" | "political")[];
        }>;
    };
    developer: {
        keys: () => Promise<{
            keys: import("@50heads/shared").ApiKeyV2[];
        }>;
        createKey: (input: import("zod").infer<typeof import("@50heads/shared").CreateApiKeyInput>, reauthToken: string) => Promise<{
            key: import("@50heads/shared").ApiKeyV2;
            secret: string;
        }>;
        updateKey: (id: string, input: import("zod").infer<typeof import("@50heads/shared").UpdateApiKeyInput>) => Promise<{
            key: import("@50heads/shared").ApiKeyV2;
        }>;
        rotateKey: (id: string, reauthToken: string) => Promise<{
            key: import("@50heads/shared").ApiKeyV2;
            secret: string;
        }>;
        revokeKey: (id: string) => Promise<{
            ok: true;
        }>;
        connections: () => Promise<{
            connections: import("@50heads/shared").Connection[];
        }>;
        connection: (id: string) => Promise<{
            connection: import("@50heads/shared").Connection;
        }>;
        updateConnection: (id: string, input: import("zod").infer<typeof import("@50heads/shared").UpdateConnectionInput>) => Promise<{
            connection: import("@50heads/shared").Connection;
        }>;
        revokeConnection: (id: string) => Promise<{
            ok: true;
        }>;
        revokeAllConnections: () => Promise<{
            ok: true;
        }>;
        usage: (days?: number) => Promise<{
            days: {
                date: string;
                tool: string;
                calls: number;
                credits: number;
                errors: number;
            }[];
        }>;
        logs: (filter?: {
            connectionId?: string;
            cursor?: string;
        }) => Promise<{
            calls: import("zod").infer<typeof import("@50heads/shared").McpCallLog>[];
            nextCursor: string | null;
        }>;
        webhooks: () => Promise<{
            endpoints: import("zod").infer<typeof import("@50heads/shared").WebhookEndpoint>[];
        }>;
        createWebhook: (input: import("zod").infer<typeof import("@50heads/shared").CreateWebhookInput>) => Promise<{
            endpoint: import("zod").infer<typeof import("@50heads/shared").WebhookEndpoint>;
        }>;
        deleteWebhook: (id: string) => Promise<{
            ok: true;
        }>;
        deliveries: (endpointId?: string) => Promise<{
            deliveries: import("zod").infer<typeof import("@50heads/shared").WebhookDelivery>[];
        }>;
        replay: (deliveryId: string) => Promise<{
            ok: true;
        }>;
        testToken: () => Promise<{
            token: string;
            expiresAt: string;
        }>;
        updateWebhook: (id: string, input: import("zod").infer<typeof import("@50heads/shared").UpdateWebhookInput>) => Promise<{
            endpoint: import("zod").infer<typeof import("@50heads/shared").WebhookEndpoint>;
        }>;
        rotateWebhookSecret: (id: string) => Promise<{
            endpoint: import("zod").infer<typeof import("@50heads/shared").WebhookEndpoint>;
        }>;
        deliveryAttempts: (deliveryId: string) => Promise<{
            attempts: import("zod").infer<typeof import("@50heads/shared").WebhookAttempt>[];
        }>;
        usageCsvUrl: (days?: number) => string;
        alerts: () => Promise<{
            capWarning: boolean;
            errorSpike: boolean;
            newClient: boolean;
        }>;
        setAlerts: (input: import("@50heads/shared").DeveloperAlerts) => Promise<{
            capWarning: boolean;
            errorSpike: boolean;
            newClient: boolean;
        }>;
        limits: () => Promise<{
            perMinute: number;
            usedThisMinute: number;
            askPerMinute: number;
            askUsedThisMinute: number;
            limitedLastDay: number;
        }>;
        currentConnection: () => Promise<{
            connection: import("@50heads/shared").Connection;
        }>;
    };
    mcp: {
        logCalls: (input: import("zod").infer<typeof import("@50heads/shared").McpCallsInput>) => Promise<{
            ok: true;
        }>;
        platformConfig: () => Promise<{
            killSwitch: import("zod").infer<typeof import("@50heads/shared").KillSwitch>;
            appVersions: {
                minimumIos: string;
                minimumAndroid: string;
            };
            mcp: {
                pauseAsk: boolean;
                pausedClients: string[];
                minProtocolVersion: string | null;
                message: string | null;
            };
            flags: Record<string, unknown>;
        }>;
        connection: () => Promise<{
            connection: import("@50heads/shared").Connection;
        }>;
    };
    support: {
        create: (input: import("zod").infer<typeof import("@50heads/shared").SupportTicketInput>) => Promise<{
            ticketId: string;
        }>;
        list: () => Promise<{
            tickets: import("@50heads/shared").SupportTicket[];
        }>;
        get: (id: string) => Promise<{
            ticket: import("@50heads/shared").SupportTicket;
        }>;
        reply: (id: string, body: string) => Promise<{
            ticket: import("@50heads/shared").SupportTicket;
        }>;
    };
    team: {
        get: () => Promise<{
            team: import("@50heads/shared").Team | null;
            memberships: import("@50heads/shared").Team[];
        }>;
        create: (input: import("zod").infer<typeof import("@50heads/shared").CreateTeamInput>) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        rename: (input: import("zod").infer<typeof import("@50heads/shared").CreateTeamInput>) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        invite: (input: import("zod").infer<typeof import("@50heads/shared").TeamInviteInput>) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        accept: (token: string) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        setRole: (memberId: string, input: import("zod").infer<typeof import("@50heads/shared").TeamRoleInput>) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        remove: (memberId: string) => Promise<{
            team: import("@50heads/shared").Team | null;
        }>;
        accounts: () => Promise<{
            accounts: import("@50heads/shared").WorkspaceAccount[];
        }>;
        setCap: (memberId: string, input: import("zod").infer<typeof import("@50heads/shared").TeamMemberCapInput>) => Promise<{
            team: import("@50heads/shared").Team;
        }>;
        usage: (month?: string) => Promise<{
            teamId: string;
            month: string;
            totalSpentPence: number;
            totalQuestions: number;
            members: {
                memberId: string;
                userId: string | null;
                name: string | null;
                email: string;
                role: "owner" | "admin" | "member" | "viewer" | "billing";
                questions: number;
                spentPence: number;
                monthlyCapPence: number | null;
            }[];
        }>;
        audit: (cursor?: string) => Promise<{
            rows: import("@50heads/shared").TeamAuditRow[];
            nextCursor: string | null;
        }>;
    };
    oauth: {
        request: (id: string) => Promise<{
            id: string;
            clientName: string;
            clientId: string;
            clientUri: string | null;
            logoUri: string | null;
            redirectHost: string;
            scopes: ("questions:read" | "questions:write" | "templates:read" | "account:read")[];
            scopeLines: string[];
            defaultCapDailyPence: number;
            grantedScopes?: ("questions:read" | "questions:write" | "templates:read" | "account:read")[] | undefined;
            teams?: {
                id: string;
                name: string;
            }[] | undefined;
            applicationType?: "web" | "native" | undefined;
            verified?: boolean | undefined;
            defaultCapPerQuestionPence?: number | undefined;
            defaultCapMonthlyPence?: number | undefined;
            expiresAt?: string | undefined;
        }>;
        approve: (id: string, input: import("zod").infer<typeof import("@50heads/shared").OAuthApproveInput>) => Promise<{
            redirectTo: string;
        }>;
        deny: (id: string) => Promise<{
            redirectTo: string;
        }>;
    };
};
export declare function runStdio(opts: StdioOptions): Promise<void>;
