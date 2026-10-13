import { z } from "zod";
/**
 * The MCP-facing schemas (snake_case, JSON Schema 2020-12 via zod). The question object uses
 * `oneOf` on `type`, per the MCP spec. These are the single definition the hosted server and the
 * stdio package share; tools/list is generated from them.
 */
export declare const LANGUAGE_PATTERN: RegExp;
/** Hosts on private networks: images are fetched server-side, so these are refused. */
export declare function isPrivateHost(hostname: string): boolean;
export declare const OptionInput: z.ZodObject<{
    label: z.ZodString;
    image_url: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export declare const StimulusInput: z.ZodObject<{
    image_url: z.ZodOptional<z.ZodURL>;
    text: z.ZodOptional<z.ZodString>;
    exposure_ms: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const TargetingInput: z.ZodObject<{
    country: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        "18-24": "18-24";
        "25-34": "25-34";
        "35-44": "35-44";
        "45-54": "45-54";
        "55-64": "55-64";
        "65+": "65+";
    }>>>;
    genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>>;
    verified_age: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
/** Ask-schema copy for `tier`. Built from `packages/shared` so it cannot drift from the price charged. */
export declare function tierFieldDescription(): string;
export declare const AudienceInput: z.ZodObject<{
    id: z.ZodString;
    min_grade: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
/** A go line on a yes-or-no question (structured.ts): set at ask time, fixed once live. */
export declare const GoRuleInput: z.ZodObject<{
    go_above: z.ZodNumber;
    min_answers: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const QuestionInput: z.ZodDiscriminatedUnion<[z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>;
    neither: z.ZodOptional<z.ZodBoolean>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"single_choice">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"multi_choice">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodDefault<z.ZodString>;
        image_url: z.ZodURL;
    }, z.core.$strip>>;
    neither: z.ZodOptional<z.ZodBoolean>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"ab_image">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>;
    neither: z.ZodOptional<z.ZodBoolean>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"pairwise">;
}, z.core.$strip>, z.ZodObject<{
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"scale_1_5">;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"ranking">;
}, z.core.$strip>, z.ZodObject<{
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodObject<{
        go_above: z.ZodNumber;
        min_answers: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"yes_no">;
}, z.core.$strip>, z.ZodObject<{
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
    go_rule: z.ZodOptional<z.ZodObject<{
        go_above: z.ZodNumber;
        min_answers: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"yes_mostly_no">;
}, z.core.$strip>, z.ZodObject<{
    tier: z.ZodOptional<z.ZodNumber>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"free_text">;
}, z.core.$strip>, z.ZodObject<{
    stimulus: z.ZodObject<{
        image_url: z.ZodURL;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    max_taps: z.ZodOptional<z.ZodNumber>;
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"click_test">;
}, z.core.$strip>, z.ZodObject<{
    go_rule: z.ZodOptional<z.ZodNever>;
    text: z.ZodString;
    content_flag: z.ZodOptional<z.ZodEnum<{
        medical: "medical";
        violence: "violence";
        distressing: "distressing";
        alcohol_gambling: "alcohol_gambling";
        political: "political";
        none: "none";
    }>>;
    answered_by: z.ZodOptional<z.ZodEnum<{
        heads: "heads";
        private: "private";
    }>>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
        exposure_ms: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    audience: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        min_grade: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    type: z.ZodLiteral<"reaction">;
}, z.core.$strip>], "type">;
export type QuestionInput = z.infer<typeof QuestionInput>;
export declare const FollowUpInput: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        single_choice: "single_choice";
        multi_choice: "multi_choice";
        ab_image: "ab_image";
        pairwise: "pairwise";
        scale_1_5: "scale_1_5";
        ranking: "ranking";
        yes_no: "yes_no";
        yes_mostly_no: "yes_mostly_no";
        free_text: "free_text";
        click_test: "click_test";
        reaction: "reaction";
    }>>;
    text: z.ZodString;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    min_confidence: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    reason: z.ZodOptional<z.ZodEnum<{
        off: "off";
        optional: "optional";
        required: "required";
    }>>;
}, z.core.$strip>;
export declare const VariantInput: z.ZodObject<{
    language: z.ZodString;
    text: z.ZodString;
    context: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const EstimateInput: z.ZodObject<{
    question: z.ZodDiscriminatedUnion<[z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"single_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"multi_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodDefault<z.ZodString>;
            image_url: z.ZodURL;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ab_image">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"pairwise">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"scale_1_5">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ranking">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_no">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_mostly_no">;
    }, z.core.$strip>, z.ZodObject<{
        tier: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"free_text">;
    }, z.core.$strip>, z.ZodObject<{
        stimulus: z.ZodObject<{
            image_url: z.ZodURL;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        max_taps: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"click_test">;
    }, z.core.$strip>, z.ZodObject<{
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"reaction">;
    }, z.core.$strip>], "type">;
    currency: z.ZodOptional<z.ZodEnum<{
        GBP: "GBP";
        USD: "USD";
        EUR: "EUR";
        CAD: "CAD";
    }>>;
}, z.core.$strip>;
export declare const AskInput: z.ZodObject<{
    question: z.ZodDiscriminatedUnion<[z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"single_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"multi_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodDefault<z.ZodString>;
            image_url: z.ZodURL;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ab_image">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"pairwise">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"scale_1_5">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ranking">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_no">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_mostly_no">;
    }, z.core.$strip>, z.ZodObject<{
        tier: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"free_text">;
    }, z.core.$strip>, z.ZodObject<{
        stimulus: z.ZodObject<{
            image_url: z.ZodURL;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        max_taps: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"click_test">;
    }, z.core.$strip>, z.ZodObject<{
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"reaction">;
    }, z.core.$strip>], "type">;
    idempotency_key: z.ZodUUID;
    template_id: z.ZodOptional<z.ZodString>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        text: z.ZodString;
        context: z.ZodOptional<z.ZodString>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    then: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<{
            single_choice: "single_choice";
            multi_choice: "multi_choice";
            ab_image: "ab_image";
            pairwise: "pairwise";
            scale_1_5: "scale_1_5";
            ranking: "ranking";
            yes_no: "yes_no";
            yes_mostly_no: "yes_mostly_no";
            free_text: "free_text";
            click_test: "click_test";
            reaction: "reaction";
        }>>;
        text: z.ZodString;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        min_confidence: z.ZodOptional<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
    }, z.core.$strip>>>;
    project_id: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    external_ref: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const QuestionIdInput: z.ZodObject<{
    question_id: z.ZodString;
}, z.core.$strip>;
export declare const ResultFilterInput: {
    option: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    country: z.ZodOptional<z.ZodString>;
    age_band: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>;
    keyword: z.ZodOptional<z.ZodString>;
};
export declare const GetResultsInput: z.ZodObject<{
    question_id: z.ZodString;
    option: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    country: z.ZodOptional<z.ZodString>;
    age_band: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>;
    keyword: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodEnum<{
        GBP: "GBP";
        USD: "USD";
        EUR: "EUR";
        CAD: "CAD";
    }>>;
}, z.core.$strip>;
export declare const WaitInput: z.ZodObject<{
    question_id: z.ZodString;
    min_answers: z.ZodOptional<z.ZodNumber>;
    timeout_seconds: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ListQuestionsInput: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        canceled: "canceled";
        closed: "closed";
        live: "live";
        scheduled: "scheduled";
        draft: "draft";
        complete: "complete";
        underfilled: "underfilled";
        refused: "refused";
        pending_approval: "pending_approval";
    }>>;
    since: z.ZodOptional<z.ZodISODateTime>;
    limit: z.ZodOptional<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
    project_id: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    external_ref: z.ZodOptional<z.ZodString>;
    archived: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        only: "only";
        include: "include";
    }>>;
    bookmarked: z.ZodOptional<z.ZodBoolean>;
    set_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const EmptyInput: z.ZodObject<{}, z.core.$strip>;
export declare const PriceOutput: z.ZodObject<{
    amount: z.ZodNumber;
    currency: z.ZodString;
}, z.core.$strip>;
export declare const EstimateOutput: z.ZodObject<{
    credits_per_answer: z.ZodNumber;
    credits_total: z.ZodNumber;
    price: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodString;
    }, z.core.$strip>;
    eta_minutes: z.ZodNumber;
    breakdown: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    validation: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        code: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>>;
    pool_size: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    traits: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type EstimateOutput = z.infer<typeof EstimateOutput>;
/** ask, action set (private-audiences-sets.md §5.7): two to ten questions behind one link, answered in order. */
export declare const AskSetInput: z.ZodObject<{
    questions: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"single_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"multi_choice">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodDefault<z.ZodString>;
            image_url: z.ZodURL;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ab_image">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"pairwise">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"scale_1_5">;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>;
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"ranking">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_no">;
    }, z.core.$strip>, z.ZodObject<{
        reason: z.ZodOptional<z.ZodEnum<{
            off: "off";
            optional: "optional";
            required: "required";
        }>>;
        go_rule: z.ZodOptional<z.ZodObject<{
            go_above: z.ZodNumber;
            min_answers: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"yes_mostly_no">;
    }, z.core.$strip>, z.ZodObject<{
        tier: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"free_text">;
    }, z.core.$strip>, z.ZodObject<{
        stimulus: z.ZodObject<{
            image_url: z.ZodURL;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        max_taps: z.ZodOptional<z.ZodNumber>;
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"click_test">;
    }, z.core.$strip>, z.ZodObject<{
        go_rule: z.ZodOptional<z.ZodNever>;
        text: z.ZodString;
        content_flag: z.ZodOptional<z.ZodEnum<{
            medical: "medical";
            violence: "violence";
            distressing: "distressing";
            alcohol_gambling: "alcohol_gambling";
            political: "political";
            none: "none";
        }>>;
        answered_by: z.ZodOptional<z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>>;
        open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
        shown_as: z.ZodOptional<z.ZodString>;
        public_results: z.ZodOptional<z.ZodBoolean>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
            exposure_ms: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        audience: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            min_grade: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        type: z.ZodLiteral<"reaction">;
    }, z.core.$strip>], "type">>;
    max_answers: z.ZodOptional<z.ZodNumber>;
    open_for_days: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<14>, z.ZodLiteral<30>]>>;
    shown_as: z.ZodOptional<z.ZodString>;
    public_results: z.ZodOptional<z.ZodBoolean>;
    idempotency_key: z.ZodUUID;
    project_id: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type AskSetInput = z.infer<typeof AskSetInput>;
export declare const AskSetOutput: z.ZodObject<{
    set_id: z.ZodString;
    link: z.ZodObject<{
        url: z.ZodString;
        closes_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    question_ids: z.ZodArray<z.ZodString>;
    credits_reserved: z.ZodNumber;
    max_answers: z.ZodNumber;
}, z.core.$strip>;
export type AskSetOutput = z.infer<typeof AskSetOutput>;
export declare const AskOutput: z.ZodObject<{
    question_id: z.ZodString;
    credits_reserved: z.ZodNumber;
    eta_minutes: z.ZodNumber;
    status: z.ZodString;
    link: z.ZodOptional<z.ZodObject<{
        url: z.ZodString;
        closes_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    variants: z.ZodOptional<z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        question_id: z.ZodString;
        credits_reserved: z.ZodNumber;
    }, z.core.$strip>>>;
    approval: z.ZodOptional<z.ZodObject<{
        approval_id: z.ZodString;
        approve_url: z.ZodString;
        expires_at: z.ZodString;
        quorum: z.ZodNumber;
        approver_roles: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AskOutput = z.infer<typeof AskOutput>;
export declare const ResultsOutput: z.ZodObject<{
    question_id: z.ZodString;
    status: z.ZodEnum<{
        canceled: "canceled";
        complete: "complete";
        underfilled: "underfilled";
        in_progress: "in_progress";
    }>;
    n_requested: z.ZodNumber;
    n_accepted: z.ZodNumber;
    distribution: z.ZodArray<z.ZodObject<{
        option: z.ZodString;
        count: z.ZodNumber;
        share: z.ZodNumber;
        average_rank: z.ZodOptional<z.ZodNumber>;
        appearances: z.ZodOptional<z.ZodNumber>;
        strength: z.ZodOptional<z.ZodNumber>;
        rank: z.ZodOptional<z.ZodNumber>;
        low: z.ZodOptional<z.ZodNumber>;
        high: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    mean: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    summary: z.ZodObject<{
        winner: z.ZodNullable<z.ZodString>;
        margin: z.ZodNullable<z.ZodNumber>;
        confidence: z.ZodNullable<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        note: z.ZodString;
        suggested_follow_up: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    verdict: z.ZodOptional<z.ZodObject<{
        verdict: z.ZodEnum<{
            go: "go";
            no_go: "no_go";
            unclear: "unclear";
        }>;
        reason: z.ZodNullable<z.ZodEnum<{
            too_few: "too_few";
            too_close: "too_close";
        }>>;
        yes_share: z.ZodNumber;
        low: z.ZodNumber;
        high: z.ZodNumber;
        go_above: z.ZodNumber;
        min_answers: z.ZodNumber;
        n: z.ZodNumber;
    }, z.core.$strip>>;
    head_to_head: z.ZodOptional<z.ZodObject<{
        options: z.ZodArray<z.ZodString>;
        share: z.ZodArray<z.ZodArray<z.ZodNullable<z.ZodNumber>>>;
        n: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>>;
    tier: z.ZodNullable<z.ZodNumber>;
    language: z.ZodString;
    provenance: z.ZodOptional<z.ZodObject<{
        answered_by: z.ZodEnum<{
            heads: "heads";
            private: "private";
        }>;
        access: z.ZodEnum<{
            app: "app";
            shared_link: "shared_link";
        }>;
        verified: z.ZodBoolean;
        answers: z.ZodNumber;
        issued: z.ZodNullable<z.ZodNumber>;
        denominator: z.ZodEnum<{
            unknown: "unknown";
            known: "known";
        }>;
    }, z.core.$strip>>;
    answers: z.ZodArray<z.ZodObject<{
        option: z.ZodNullable<z.ZodString>;
        tier: z.ZodNullable<z.ZodNumber>;
        attestation_ref: z.ZodNullable<z.ZodString>;
        answered_at: z.ZodString;
        text: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        translated_text: z.ZodOptional<z.ZodString>;
        translated_reason: z.ZodOptional<z.ZodString>;
        taps: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>>;
        pinned: z.ZodOptional<z.ZodBoolean>;
        flag: z.ZodOptional<z.ZodEnum<{
            open: "open";
            upheld: "upheld";
            dismissed: "dismissed";
        }>>;
        choice: z.ZodOptional<z.ZodObject<{
            index: z.ZodOptional<z.ZodNumber>;
            indexes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            order: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            pair: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    cohort_hash: z.ZodOptional<z.ZodString>;
    clicks: z.ZodOptional<z.ZodObject<{
        taps: z.ZodNumber;
        hotspots: z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
            w: z.ZodNumber;
            h: z.ZodNumber;
            count: z.ZodNumber;
            share: z.ZodNumber;
        }, z.core.$strip>>;
        heatmap_url: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    sentiment: z.ZodOptional<z.ZodObject<{
        positive: z.ZodNumber;
        neutral: z.ZodNumber;
        negative: z.ZodNumber;
    }, z.core.$strip>>;
    credits_spent: z.ZodNumber;
    refund_credits: z.ZodNumber;
    price: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodString;
    }, z.core.$strip>;
    verification: z.ZodOptional<z.ZodString>;
    median_seconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    breakdowns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dimension: z.ZodString;
        segments: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            n: z.ZodNumber;
            distribution: z.ZodArray<z.ZodObject<{
                option: z.ZodString;
                count: z.ZodNumber;
                share: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    insights: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        takeaway: z.ZodString;
        themes: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            count: z.ZodNumber;
            share: z.ZodNumber;
            sentiment: z.ZodEnum<{
                positive: "positive";
                neutral: "neutral";
                negative: "negative";
            }>;
            option: z.ZodNullable<z.ZodString>;
            quotes: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        sentiment: z.ZodObject<{
            positive: z.ZodNumber;
            neutral: z.ZodNumber;
            negative: z.ZodNumber;
        }, z.core.$strip>;
        based_on: z.ZodNumber;
        language: z.ZodString;
        kind: z.ZodEnum<{
            interim: "interim";
            final: "final";
        }>;
        generated_at: z.ZodString;
    }, z.core.$strip>>>;
    filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>>;
    n_unfiltered: z.ZodOptional<z.ZodNumber>;
    suppressed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ResultsOutput = z.infer<typeof ResultsOutput>;
/** One question as results (action list) and questions (action file) return it. */
export declare const QuestionSummary: z.ZodObject<{
    question_id: z.ZodString;
    status: z.ZodString;
    type: z.ZodString;
    text: z.ZodString;
    language: z.ZodString;
    tier: z.ZodNumber;
    n_requested: z.ZodNumber;
    n_accepted: z.ZodNumber;
    leader: z.ZodNullable<z.ZodString>;
    credits_spent: z.ZodNumber;
    created_at: z.ZodString;
    project_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    external_ref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    archived: z.ZodOptional<z.ZodBoolean>;
    bookmarked: z.ZodOptional<z.ZodBoolean>;
    team_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    set_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    set_position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    set_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type QuestionSummary = z.infer<typeof QuestionSummary>;
export declare const ListQuestionsOutput: z.ZodObject<{
    questions: z.ZodArray<z.ZodObject<{
        question_id: z.ZodString;
        status: z.ZodString;
        type: z.ZodString;
        text: z.ZodString;
        language: z.ZodString;
        tier: z.ZodNumber;
        n_requested: z.ZodNumber;
        n_accepted: z.ZodNumber;
        leader: z.ZodNullable<z.ZodString>;
        credits_spent: z.ZodNumber;
        created_at: z.ZodString;
        project_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
        external_ref: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        archived: z.ZodOptional<z.ZodBoolean>;
        bookmarked: z.ZodOptional<z.ZodBoolean>;
        team_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        set_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        set_position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        set_count: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>;
    next_cursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListQuestionsOutput = z.infer<typeof ListQuestionsOutput>;
export declare const CancelOutput: z.ZodObject<{
    question_id: z.ZodString;
    status: z.ZodString;
    refund_credits: z.ZodNumber;
}, z.core.$strip>;
export declare const TemplatesOutput: z.ZodObject<{
    templates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        credits: z.ZodNumber;
        price: z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodString;
        }, z.core.$strip>;
        n: z.ZodNumber;
        tier: z.ZodNumber;
        question: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TemplatesOutput = z.infer<typeof TemplatesOutput>;
export declare const BalanceOutput: z.ZodObject<{
    credits: z.ZodNumber;
    currency: z.ZodString;
    reserved: z.ZodNumber;
    cap_remaining: z.ZodNullable<z.ZodNumber>;
    price: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type BalanceOutput = z.infer<typeof BalanceOutput>;
export declare const ServiceStatusOutput: z.ZodObject<{
    status: z.ZodEnum<{
        paused: "paused";
        operational: "operational";
        degraded: "degraded";
        outage: "outage";
    }>;
    components: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodString;
        note: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    message: z.ZodNullable<z.ZodString>;
    until: z.ZodNullable<z.ZodString>;
    page: z.ZodString;
}, z.core.$strip>;
export type ServiceStatusOutput = z.infer<typeof ServiceStatusOutput>;
export declare const LimitOutput: z.ZodObject<{
    id: z.ZodString;
    applies_to: z.ZodString;
    per: z.ZodEnum<{
        account: "account";
        connection: "connection";
    }>;
    limit: z.ZodNumber;
    window_seconds: z.ZodNumber;
    used: z.ZodNullable<z.ZodNumber>;
    remaining: z.ZodNullable<z.ZodNumber>;
    reset_seconds: z.ZodNumber;
}, z.core.$strip>;
export declare const WhoAmIOutput: z.ZodObject<{
    principal: z.ZodObject<{
        type: z.ZodEnum<{
            person: "person";
            service_account: "service_account";
        }>;
        id: z.ZodString;
        email: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    auth: z.ZodString;
    scopes: z.ZodNullable<z.ZodArray<z.ZodString>>;
    connection: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        client_name: z.ZodString;
        cap_daily_credits: z.ZodNumber;
        spent_today_credits: z.ZodNumber;
        cap_question_credits: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    account: z.ZodObject<{
        kind: z.ZodEnum<{
            personal: "personal";
            team: "team";
        }>;
        team_id: z.ZodNullable<z.ZodString>;
        team_name: z.ZodNullable<z.ZodString>;
        role: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    organization: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        admin: z.ZodBoolean;
    }, z.core.$strip>>;
    limits: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        applies_to: z.ZodString;
        per: z.ZodEnum<{
            account: "account";
            connection: "connection";
        }>;
        limit: z.ZodNumber;
        window_seconds: z.ZodNumber;
        used: z.ZodNullable<z.ZodNumber>;
        remaining: z.ZodNullable<z.ZodNumber>;
        reset_seconds: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type WhoAmIOutput = z.infer<typeof WhoAmIOutput>;
/** Largest decoded upload the API takes (apps/api/src/lib/uploads.ts LIMITS.imageBytes). */
export declare const MAX_UPLOAD_BYTES: number;
export declare const UPLOAD_IMAGE_TYPES: readonly ["image/jpeg", "image/png", "image/webp"];
export declare const UploadImageInput: z.ZodObject<{
    image_url: z.ZodOptional<z.ZodURL>;
    data: z.ZodOptional<z.ZodString>;
    content_type: z.ZodOptional<z.ZodEnum<{
        "image/jpeg": "image/jpeg";
        "image/png": "image/png";
        "image/webp": "image/webp";
    }>>;
}, z.core.$strip>;
export declare const UploadImageOutput: z.ZodObject<{
    image_url: z.ZodString;
    width: z.ZodNullable<z.ZodNumber>;
    height: z.ZodNullable<z.ZodNumber>;
    bytes: z.ZodNullable<z.ZodNumber>;
    source: z.ZodEnum<{
        url: "url";
        upload: "upload";
    }>;
}, z.core.$strip>;
/** Result filters, the same names as the API query and the portal URL. */
export declare const AnswerFilterInput: {
    option: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    country: z.ZodOptional<z.ZodString>;
    age_band: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>;
    q: z.ZodOptional<z.ZodString>;
};
export declare const GetAnswersInput: z.ZodObject<{
    question_id: z.ZodString;
    limit: z.ZodOptional<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
    option: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    country: z.ZodOptional<z.ZodString>;
    age_band: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>;
    q: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const GetAnswersOutput: z.ZodObject<{
    question_id: z.ZodString;
    total: z.ZodNumber;
    n_unfiltered: z.ZodNumber;
    suppressed: z.ZodBoolean;
    answers: z.ZodArray<z.ZodObject<{
        option: z.ZodNullable<z.ZodString>;
        text: z.ZodNullable<z.ZodString>;
        reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        translated_text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        translated_reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tier: z.ZodNullable<z.ZodNumber>;
        attestation_ref: z.ZodNullable<z.ZodString>;
        answered_at: z.ZodString;
        choice: z.ZodOptional<z.ZodObject<{
            index: z.ZodOptional<z.ZodNumber>;
            indexes: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            order: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            pair: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    next_cursor: z.ZodNullable<z.ZodString>;
    filter: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
}, z.core.$strip>;
export type GetAnswersOutput = z.infer<typeof GetAnswersOutput>;
export declare const AddHeadsInput: z.ZodObject<{
    question_id: z.ZodString;
    n: z.ZodNumber;
    idempotency_key: z.ZodUUID;
}, z.core.$strip>;
export declare const AddHeadsOutput: z.ZodObject<{
    question_id: z.ZodString;
    n_added: z.ZodNumber;
    n_requested: z.ZodNumber;
    credits_reserved: z.ZodNumber;
    status: z.ZodString;
}, z.core.$strip>;
export declare const FlagAnswerInput: z.ZodObject<{
    question_id: z.ZodString;
    attestation_ref: z.ZodString;
    reason: z.ZodEnum<{
        automated: "automated";
        off_topic: "off_topic";
        low_effort: "low_effort";
        abusive: "abusive";
    }>;
    note: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const FlagAnswerOutput: z.ZodObject<{
    flag_id: z.ZodString;
    status: z.ZodString;
    attestation_ref: z.ZodString;
}, z.core.$strip>;
export declare const ExportInput: z.ZodObject<{
    question_id: z.ZodString;
    option: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    country: z.ZodOptional<z.ZodString>;
    age_band: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<{
        woman: "woman";
        man: "man";
        non_binary: "non_binary";
    }>>;
    q: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodEnum<{
        pdf: "pdf";
        png: "png";
        csv: "csv";
        jsonl: "jsonl";
    }>>;
}, z.core.$strip>;
export declare const ExportOutput: z.ZodObject<{
    question_id: z.ZodString;
    format: z.ZodEnum<{
        pdf: "pdf";
        png: "png";
        csv: "csv";
        jsonl: "jsonl";
    }>;
    filename: z.ZodString;
    content_type: z.ZodString;
    bytes: z.ZodNumber;
    rows: z.ZodNullable<z.ZodNumber>;
    truncated: z.ZodBoolean;
    url: z.ZodString;
}, z.core.$strip>;
export declare const BuildAskLinkInput: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<{
        single_choice: "single_choice";
        multi_choice: "multi_choice";
        ab_image: "ab_image";
        pairwise: "pairwise";
        scale_1_5: "scale_1_5";
        ranking: "ranking";
        yes_no: "yes_no";
        yes_mostly_no: "yes_mostly_no";
        free_text: "free_text";
        click_test: "click_test";
        reaction: "reaction";
    }>>;
    text: z.ZodOptional<z.ZodString>;
    context: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodOptional<z.ZodString>;
        image_url: z.ZodOptional<z.ZodURL>;
    }, z.core.$strip>>>;
    stimulus: z.ZodOptional<z.ZodObject<{
        image_url: z.ZodOptional<z.ZodURL>;
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    neither: z.ZodOptional<z.ZodBoolean>;
    n: z.ZodOptional<z.ZodNumber>;
    tier: z.ZodOptional<z.ZodNumber>;
    rush: z.ZodOptional<z.ZodBoolean>;
    targeting: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            "18-24": "18-24";
            "25-34": "25-34";
            "35-44": "35-44";
            "45-54": "45-54";
            "55-64": "55-64";
            "65+": "65+";
        }>>>;
        genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            woman: "woman";
            man: "man";
            non_binary: "non_binary";
        }>>>;
        verified_age: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    template_id: z.ZodOptional<z.ZodString>;
    follow_up_of: z.ZodOptional<z.ZodString>;
    reask: z.ZodOptional<z.ZodString>;
    bulk: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type BuildAskLinkInput = z.infer<typeof BuildAskLinkInput>;
/** ask, action build_link: the draft to fill in, or a template, follow-up, re-ask or the bulk composer. */
export declare const BuildLinkInput: z.ZodObject<{
    draft: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<{
            single_choice: "single_choice";
            multi_choice: "multi_choice";
            ab_image: "ab_image";
            pairwise: "pairwise";
            scale_1_5: "scale_1_5";
            ranking: "ranking";
            yes_no: "yes_no";
            yes_mostly_no: "yes_mostly_no";
            free_text: "free_text";
            click_test: "click_test";
            reaction: "reaction";
        }>>;
        text: z.ZodOptional<z.ZodString>;
        context: z.ZodOptional<z.ZodString>;
        language: z.ZodOptional<z.ZodString>;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            label: z.ZodOptional<z.ZodString>;
            image_url: z.ZodOptional<z.ZodURL>;
        }, z.core.$strip>>>;
        stimulus: z.ZodOptional<z.ZodObject<{
            image_url: z.ZodOptional<z.ZodURL>;
            text: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        neither: z.ZodOptional<z.ZodBoolean>;
        n: z.ZodOptional<z.ZodNumber>;
        tier: z.ZodOptional<z.ZodNumber>;
        rush: z.ZodOptional<z.ZodBoolean>;
        targeting: z.ZodOptional<z.ZodObject<{
            country: z.ZodOptional<z.ZodArray<z.ZodString>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            age_bands: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                "18-24": "18-24";
                "25-34": "25-34";
                "35-44": "35-44";
                "45-54": "45-54";
                "55-64": "55-64";
                "65+": "65+";
            }>>>;
            genders: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                woman: "woman";
                man: "man";
                non_binary: "non_binary";
            }>>>;
            verified_age: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    template_id: z.ZodOptional<z.ZodString>;
    follow_up_of: z.ZodOptional<z.ZodString>;
    reask: z.ZodOptional<z.ZodString>;
    bulk: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const BuildAskLinkOutput: z.ZodObject<{
    url: z.ZodString;
    params: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>;
    notes: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const ListAudiencesInput: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListAudiencesOutput: z.ZodObject<{
    audiences: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
        summary: z.ZodString;
        countries: z.ZodArray<z.ZodString>;
        pool_band: z.ZodString;
        credits_per_answer: z.ZodObject<{
            member: z.ZodNumber;
            verified: z.ZodNumber;
            trusted: z.ZodNumber;
        }, z.core.$strip>;
        page_url: z.ZodString;
    }, z.core.$strip>>;
    rules: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const ListTargetingInput: z.ZodObject<{
    language: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ListTargetingOutput: z.ZodObject<{
    countries: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        name: z.ZodString;
        languages: z.ZodArray<z.ZodString>;
        tier2_available: z.ZodBoolean;
        pool_bands: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
    }, z.core.$strip>>;
    tag_groups: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        why: z.ZodString;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    tags: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        group: z.ZodString;
        label: z.ZodString;
    }, z.core.$strip>>;
    age_bands: z.ZodArray<z.ZodString>;
    genders: z.ZodArray<z.ZodString>;
    traits: z.ZodObject<{
        max: z.ZodNumber;
        credits_per_answer: z.ZodNumber;
    }, z.core.$strip>;
    rules: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const SearchHelpInput: z.ZodObject<{
    query: z.ZodString;
    locale: z.ZodOptional<z.ZodEnum<{
        fr: "fr";
        es: "es";
        pt: "pt";
        it: "it";
        de: "de";
        nl: "nl";
        pl: "pl";
        ja: "ja";
        ko: "ko";
        sv: "sv";
        da: "da";
        nb: "nb";
        cs: "cs";
        ro: "ro";
        fi: "fi";
        tr: "tr";
        "en-gb": "en-gb";
        "en-us": "en-us";
        "pt-br": "pt-br";
    }>>;
    limit: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const SearchHelpOutput: z.ZodObject<{
    query: z.ZodString;
    locale: z.ZodString;
    results: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        section: z.ZodString;
        excerpt: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const SendFeedbackInput: z.ZodObject<{
    message: z.ZodString;
    subject: z.ZodOptional<z.ZodString>;
    kind: z.ZodOptional<z.ZodEnum<{
        other: "other";
        billing: "billing";
        question: "question";
        bug: "bug";
        idea: "idea";
    }>>;
    email: z.ZodOptional<z.ZodEmail>;
}, z.core.$strip>;
export declare const SendFeedbackOutput: z.ZodObject<{
    ticket_id: z.ZodString;
    status: z.ZodLiteral<"received">;
}, z.core.$strip>;
export declare const WebhookFilterInput: z.ZodObject<{
    project_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const WebhookEndpointOut: z.ZodObject<{
    id: z.ZodString;
    url: z.ZodString;
    events: z.ZodArray<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    enabled: z.ZodBoolean;
    disabled_reason: z.ZodNullable<z.ZodString>;
    team_id: z.ZodNullable<z.ZodString>;
    api_version: z.ZodNullable<z.ZodString>;
    filter: z.ZodNullable<z.ZodObject<{
        project_ids: z.ZodArray<z.ZodString>;
        labels: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    secret: z.ZodString;
    previous_secret: z.ZodNullable<z.ZodObject<{
        secret: z.ZodString;
        expires_at: z.ZodString;
    }, z.core.$strip>>;
    created_at: z.ZodString;
    last_delivery_at: z.ZodNullable<z.ZodString>;
    last_status: z.ZodNullable<z.ZodNumber>;
    last_success_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type WebhookEndpointOut = z.infer<typeof WebhookEndpointOut>;
export declare const WebhookDeliveryOut: z.ZodObject<{
    id: z.ZodString;
    endpoint_id: z.ZodString;
    event: z.ZodString;
    event_id: z.ZodNullable<z.ZodString>;
    state: z.ZodNullable<z.ZodEnum<{
        pending: "pending";
        delivering: "delivering";
        succeeded: "succeeded";
        failed: "failed";
    }>>;
    status: z.ZodNullable<z.ZodNumber>;
    attempts: z.ZodNumber;
    last_error: z.ZodNullable<z.ZodString>;
    next_attempt_at: z.ZodNullable<z.ZodString>;
    delivered_at: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    replay_of: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type WebhookDeliveryOut = z.infer<typeof WebhookDeliveryOut>;
export declare const ListWebhooksOutput: z.ZodObject<{
    endpoints: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
        events: z.ZodArray<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        disabled_reason: z.ZodNullable<z.ZodString>;
        team_id: z.ZodNullable<z.ZodString>;
        api_version: z.ZodNullable<z.ZodString>;
        filter: z.ZodNullable<z.ZodObject<{
            project_ids: z.ZodArray<z.ZodString>;
            labels: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        secret: z.ZodString;
        previous_secret: z.ZodNullable<z.ZodObject<{
            secret: z.ZodString;
            expires_at: z.ZodString;
        }, z.core.$strip>>;
        created_at: z.ZodString;
        last_delivery_at: z.ZodNullable<z.ZodString>;
        last_status: z.ZodNullable<z.ZodNumber>;
        last_success_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateWebhookInput: z.ZodObject<{
    url: z.ZodURL;
    events: z.ZodArray<z.ZodEnum<{
        "question.reserved": "question.reserved";
        "question.completed": "question.completed";
        "question.underfilled": "question.underfilled";
        "question.canceled": "question.canceled";
        "question.refused": "question.refused";
        "credits.purchased": "credits.purchased";
        "credits.low": "credits.low";
        "credits.expiring": "credits.expiring";
        "dispute.resolved": "dispute.resolved";
        "connection.cap_warning": "connection.cap_warning";
        "member.provisioned": "member.provisioned";
        "member.deprovisioned": "member.deprovisioned";
        "policy.changed": "policy.changed";
        "approval.requested": "approval.requested";
        "approval.decided": "approval.decided";
        "approval.expired": "approval.expired";
        "approval.refused": "approval.refused";
    }>>;
    description: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodObject<{
        project_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateWebhookOutput: z.ZodObject<{
    endpoint: z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
        events: z.ZodArray<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        disabled_reason: z.ZodNullable<z.ZodString>;
        team_id: z.ZodNullable<z.ZodString>;
        api_version: z.ZodNullable<z.ZodString>;
        filter: z.ZodNullable<z.ZodObject<{
            project_ids: z.ZodArray<z.ZodString>;
            labels: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        secret: z.ZodString;
        previous_secret: z.ZodNullable<z.ZodObject<{
            secret: z.ZodString;
            expires_at: z.ZodString;
        }, z.core.$strip>>;
        created_at: z.ZodString;
        last_delivery_at: z.ZodNullable<z.ZodString>;
        last_status: z.ZodNullable<z.ZodNumber>;
        last_success_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    secret: z.ZodString;
}, z.core.$strip>;
export declare const UpdateWebhookInput: z.ZodObject<{
    id: z.ZodString;
    url: z.ZodOptional<z.ZodURL>;
    events: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        "question.reserved": "question.reserved";
        "question.completed": "question.completed";
        "question.underfilled": "question.underfilled";
        "question.canceled": "question.canceled";
        "question.refused": "question.refused";
        "credits.purchased": "credits.purchased";
        "credits.low": "credits.low";
        "credits.expiring": "credits.expiring";
        "dispute.resolved": "dispute.resolved";
        "connection.cap_warning": "connection.cap_warning";
        "member.provisioned": "member.provisioned";
        "member.deprovisioned": "member.deprovisioned";
        "policy.changed": "policy.changed";
        "approval.requested": "approval.requested";
        "approval.decided": "approval.decided";
        "approval.expired": "approval.expired";
        "approval.refused": "approval.refused";
    }>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        project_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const WebhookEndpointResult: z.ZodObject<{
    endpoint: z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
        events: z.ZodArray<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        disabled_reason: z.ZodNullable<z.ZodString>;
        team_id: z.ZodNullable<z.ZodString>;
        api_version: z.ZodNullable<z.ZodString>;
        filter: z.ZodNullable<z.ZodObject<{
            project_ids: z.ZodArray<z.ZodString>;
            labels: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        secret: z.ZodString;
        previous_secret: z.ZodNullable<z.ZodObject<{
            secret: z.ZodString;
            expires_at: z.ZodString;
        }, z.core.$strip>>;
        created_at: z.ZodString;
        last_delivery_at: z.ZodNullable<z.ZodString>;
        last_status: z.ZodNullable<z.ZodNumber>;
        last_success_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const RotateWebhookSecretInput: z.ZodObject<{
    id: z.ZodString;
    overlap_hours: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const RotateWebhookSecretOutput: z.ZodObject<{
    endpoint: z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
        events: z.ZodArray<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        enabled: z.ZodBoolean;
        disabled_reason: z.ZodNullable<z.ZodString>;
        team_id: z.ZodNullable<z.ZodString>;
        api_version: z.ZodNullable<z.ZodString>;
        filter: z.ZodNullable<z.ZodObject<{
            project_ids: z.ZodArray<z.ZodString>;
            labels: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        secret: z.ZodString;
        previous_secret: z.ZodNullable<z.ZodObject<{
            secret: z.ZodString;
            expires_at: z.ZodString;
        }, z.core.$strip>>;
        created_at: z.ZodString;
        last_delivery_at: z.ZodNullable<z.ZodString>;
        last_status: z.ZodNullable<z.ZodNumber>;
        last_success_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
    secret: z.ZodString;
    previous_secret_expires_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const WebhookIdInput: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const TestWebhookOutput: z.ZodObject<{
    outcome: z.ZodString;
    delivery: z.ZodObject<{
        id: z.ZodString;
        endpoint_id: z.ZodString;
        event: z.ZodString;
        event_id: z.ZodNullable<z.ZodString>;
        state: z.ZodNullable<z.ZodEnum<{
            pending: "pending";
            delivering: "delivering";
            succeeded: "succeeded";
            failed: "failed";
        }>>;
        status: z.ZodNullable<z.ZodNumber>;
        attempts: z.ZodNumber;
        last_error: z.ZodNullable<z.ZodString>;
        next_attempt_at: z.ZodNullable<z.ZodString>;
        delivered_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        replay_of: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListWebhookDeliveriesInput: z.ZodObject<{
    endpoint_id: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        delivering: "delivering";
        succeeded: "succeeded";
        failed: "failed";
    }>>;
}, z.core.$strip>;
export declare const ListWebhookDeliveriesOutput: z.ZodObject<{
    deliveries: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        endpoint_id: z.ZodString;
        event: z.ZodString;
        event_id: z.ZodNullable<z.ZodString>;
        state: z.ZodNullable<z.ZodEnum<{
            pending: "pending";
            delivering: "delivering";
            succeeded: "succeeded";
            failed: "failed";
        }>>;
        status: z.ZodNullable<z.ZodNumber>;
        attempts: z.ZodNumber;
        last_error: z.ZodNullable<z.ZodString>;
        next_attempt_at: z.ZodNullable<z.ZodString>;
        delivered_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        replay_of: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ListWebhookEventsInput: z.ZodObject<{
    type: z.ZodEnum<{
        "question.reserved": "question.reserved";
        "question.completed": "question.completed";
        "question.underfilled": "question.underfilled";
        "question.canceled": "question.canceled";
        "question.refused": "question.refused";
        "credits.purchased": "credits.purchased";
        "credits.low": "credits.low";
        "credits.expiring": "credits.expiring";
        "dispute.resolved": "dispute.resolved";
        "connection.cap_warning": "connection.cap_warning";
        "webhook.test": "webhook.test";
        "member.provisioned": "member.provisioned";
        "member.deprovisioned": "member.deprovisioned";
        "policy.changed": "policy.changed";
        "approval.requested": "approval.requested";
        "approval.decided": "approval.decided";
        "approval.expired": "approval.expired";
        "approval.refused": "approval.refused";
    }>;
    limit: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const ListWebhookEventsOutput: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        createdAt: z.ZodString;
        apiVersion: z.ZodOptional<z.ZodString>;
        data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ReplayWebhookDeliveryInput: z.ZodObject<{
    delivery_id: z.ZodString;
}, z.core.$strip>;
export declare const ReplayWebhookDeliveryOutput: z.ZodObject<{
    delivery_id: z.ZodString;
    replay_of: z.ZodString;
}, z.core.$strip>;
export declare const DeleteWebhookOutput: z.ZodObject<{
    id: z.ZodString;
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>;
/** A label on a question: up to 40 characters, no commas. */
export declare const LabelInput: z.ZodString;
export declare const MAX_LABELS = 10;
export declare const ProjectIdInput: z.ZodObject<{
    project_id: z.ZodString;
}, z.core.$strip>;
export declare const ProjectOutput: z.ZodObject<{
    project_id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    goal: z.ZodNullable<z.ZodString>;
    question_count: z.ZodNumber;
    archived: z.ZodBoolean;
    bookmarked: z.ZodBoolean;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$strip>;
export type ProjectOutput = z.infer<typeof ProjectOutput>;
export declare const ListProjectsInput: z.ZodObject<{
    include_archived: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const ListProjectsOutput: z.ZodObject<{
    projects: z.ZodArray<z.ZodObject<{
        project_id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        goal: z.ZodNullable<z.ZodString>;
        question_count: z.ZodNumber;
        archived: z.ZodBoolean;
        bookmarked: z.ZodBoolean;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateProjectInput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UpdateProjectInput: z.ZodObject<{
    project_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    archived: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const DeleteProjectOutput: z.ZodObject<{
    project_id: z.ZodString;
    deleted: z.ZodLiteral<true>;
}, z.core.$strip>;
export declare const ListLabelsOutput: z.ZodObject<{
    labels: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const FileQuestionInput: z.ZodObject<{
    question_id: z.ZodString;
    project_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString>>;
    archived: z.ZodOptional<z.ZodBoolean>;
    bookmarked: z.ZodOptional<z.ZodBoolean>;
    external_ref: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const WorkspaceAppOut: z.ZodObject<{
    app_id: z.ZodString;
    provider: z.ZodEnum<{
        teams: "teams";
        slack: "slack";
    }>;
    workspace_id: z.ZodString;
    workspace_name: z.ZodString;
    default_channel: z.ZodNullable<z.ZodString>;
    cap_daily_credits: z.ZodNumber;
    spent_today_credits: z.ZodNumber;
    installed_at: z.ZodString;
    installed_by: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<{
        active: "active";
        revoked: "revoked";
    }>;
}, z.core.$strip>;
export type WorkspaceAppOut = z.infer<typeof WorkspaceAppOut>;
export declare const ZapierConnectionOut: z.ZodObject<{
    connection_id: z.ZodString;
    connected_at: z.ZodString;
    last_used_at: z.ZodNullable<z.ZodString>;
    cap_daily_credits: z.ZodNumber;
    spent_today_credits: z.ZodNumber;
    hooks: z.ZodNumber;
    connected_by: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ZapierConnectionOut = z.infer<typeof ZapierConnectionOut>;
export declare const ListAppsOutput: z.ZodObject<{
    apps: z.ZodArray<z.ZodObject<{
        app_id: z.ZodString;
        provider: z.ZodEnum<{
            teams: "teams";
            slack: "slack";
        }>;
        workspace_id: z.ZodString;
        workspace_name: z.ZodString;
        default_channel: z.ZodNullable<z.ZodString>;
        cap_daily_credits: z.ZodNumber;
        spent_today_credits: z.ZodNumber;
        installed_at: z.ZodString;
        installed_by: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<{
            active: "active";
            revoked: "revoked";
        }>;
    }, z.core.$strip>>;
    zapier: z.ZodArray<z.ZodObject<{
        connection_id: z.ZodString;
        connected_at: z.ZodString;
        last_used_at: z.ZodNullable<z.ZodString>;
        cap_daily_credits: z.ZodNumber;
        spent_today_credits: z.ZodNumber;
        hooks: z.ZodNumber;
        connected_by: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const OrganizationOut: z.ZodObject<{
    organization_id: z.ZodString;
    name: z.ZodString;
    role: z.ZodEnum<{
        admin: "admin";
        member: "member";
    }>;
    workspaces: z.ZodArray<z.ZodObject<{
        workspace_id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>;
    default_workspace_id: z.ZodNullable<z.ZodString>;
    verified_domains: z.ZodArray<z.ZodString>;
    single_sign_on: z.ZodNullable<z.ZodObject<{
        state: z.ZodEnum<{
            enabled: "enabled";
            draft: "draft";
            tested: "tested";
        }>;
        required: z.ZodBoolean;
    }, z.core.$strip>>;
    scim_active: z.ZodNullable<z.ZodBoolean>;
    security_policies: z.ZodNullable<z.ZodObject<{
        two_step_required: z.ZodBoolean;
        max_session_age_minutes: z.ZodNullable<z.ZodNumber>;
        idle_timeout_minutes: z.ZodNullable<z.ZodNumber>;
        reauth_window_minutes: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    service_accounts_available: z.ZodBoolean;
}, z.core.$strip>;
export type OrganizationOut = z.infer<typeof OrganizationOut>;
export declare const GetOrganizationOutput: z.ZodObject<{
    organization: z.ZodObject<{
        organization_id: z.ZodString;
        name: z.ZodString;
        role: z.ZodEnum<{
            admin: "admin";
            member: "member";
        }>;
        workspaces: z.ZodArray<z.ZodObject<{
            workspace_id: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>>;
        default_workspace_id: z.ZodNullable<z.ZodString>;
        verified_domains: z.ZodArray<z.ZodString>;
        single_sign_on: z.ZodNullable<z.ZodObject<{
            state: z.ZodEnum<{
                enabled: "enabled";
                draft: "draft";
                tested: "tested";
            }>;
            required: z.ZodBoolean;
        }, z.core.$strip>>;
        scim_active: z.ZodNullable<z.ZodBoolean>;
        security_policies: z.ZodNullable<z.ZodObject<{
            two_step_required: z.ZodBoolean;
            max_session_age_minutes: z.ZodNullable<z.ZodNumber>;
            idle_timeout_minutes: z.ZodNullable<z.ZodNumber>;
            reauth_window_minutes: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        service_accounts_available: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const DomainOut: z.ZodObject<{
    domain_id: z.ZodString;
    domain: z.ZodString;
    state: z.ZodEnum<{
        verified: "verified";
        pending: "pending";
        failed: "failed";
        warning: "warning";
        revoked: "revoked";
    }>;
    txt_record_name: z.ZodString;
    txt_record_value: z.ZodString;
    verified_at: z.ZodNullable<z.ZodString>;
    checked_at: z.ZodNullable<z.ZodString>;
    last_error: z.ZodNullable<z.ZodString>;
    grace_ends_at: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type DomainOut = z.infer<typeof DomainOut>;
export declare const ListDomainsOutput: z.ZodObject<{
    domains: z.ZodArray<z.ZodObject<{
        domain_id: z.ZodString;
        domain: z.ZodString;
        state: z.ZodEnum<{
            verified: "verified";
            pending: "pending";
            failed: "failed";
            warning: "warning";
            revoked: "revoked";
        }>;
        txt_record_name: z.ZodString;
        txt_record_value: z.ZodString;
        verified_at: z.ZodNullable<z.ZodString>;
        checked_at: z.ZodNullable<z.ZodString>;
        last_error: z.ZodNullable<z.ZodString>;
        grace_ends_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ListAuditEventsInput: z.ZodObject<{
    limit: z.ZodOptional<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    actor: z.ZodOptional<z.ZodString>;
    event_action: z.ZodOptional<z.ZodString>;
    workspace_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ExportAuditEventsInput: z.ZodObject<{
    max_events: z.ZodOptional<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    actor: z.ZodOptional<z.ZodString>;
    event_action: z.ZodOptional<z.ZodString>;
    workspace_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const AuditEventOut: z.ZodObject<{
    event_id: z.ZodString;
    at: z.ZodString;
    workspace_id: z.ZodNullable<z.ZodString>;
    source: z.ZodEnum<{
        organization: "organization";
        workspace: "workspace";
    }>;
    actor_type: z.ZodEnum<{
        scim: "scim";
        system: "system";
        oauth: "oauth";
        person: "person";
        service_account: "service_account";
        api_key: "api_key";
    }>;
    actor_id: z.ZodNullable<z.ZodString>;
    actor_name: z.ZodNullable<z.ZodString>;
    action: z.ZodString;
    subject: z.ZodString;
    data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    ip: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type AuditEventOut = z.infer<typeof AuditEventOut>;
export declare const ListAuditEventsOutput: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        event_id: z.ZodString;
        at: z.ZodString;
        workspace_id: z.ZodNullable<z.ZodString>;
        source: z.ZodEnum<{
            organization: "organization";
            workspace: "workspace";
        }>;
        actor_type: z.ZodEnum<{
            scim: "scim";
            system: "system";
            oauth: "oauth";
            person: "person";
            service_account: "service_account";
            api_key: "api_key";
        }>;
        actor_id: z.ZodNullable<z.ZodString>;
        actor_name: z.ZodNullable<z.ZodString>;
        action: z.ZodString;
        subject: z.ZodString;
        data: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        ip: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    next_cursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ExportAuditEventsOutput: z.ZodObject<{
    jsonl: z.ZodString;
    events: z.ZodNumber;
    resume_cursor: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export declare const ScimStatusOutput: z.ZodObject<{
    base_url: z.ZodString;
    default_role: z.ZodString;
    default_workspace_id: z.ZodNullable<z.ZodString>;
    provisioned_people: z.ZodNumber;
    active_people: z.ZodNumber;
    groups: z.ZodNumber;
    tokens: z.ZodArray<z.ZodObject<{
        token_id: z.ZodString;
        label: z.ZodString;
        prefix: z.ZodString;
        created_at: z.ZodString;
        expires_at: z.ZodNullable<z.ZodString>;
        last_used_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const MemberSessionsInput: z.ZodObject<{
    user_id: z.ZodString;
}, z.core.$strip>;
export declare const MemberSessionsOutput: z.ZodObject<{
    user_id: z.ZodString;
    sessions: z.ZodArray<z.ZodObject<{
        session_id: z.ZodString;
        kind: z.ZodEnum<{
            app: "app";
            web: "web";
        }>;
        label: z.ZodString;
        country: z.ZodNullable<z.ZodString>;
        sign_in_method: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        last_seen_at: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const ServiceAccountOut: z.ZodObject<{
    service_account_id: z.ZodString;
    name: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        disabled: "disabled";
    }>;
    workspace_id: z.ZodString;
    workspace_name: z.ZodString;
    scopes: z.ZodArray<z.ZodString>;
    cap_daily_credits: z.ZodNumber;
    cap_per_question_credits: z.ZodNullable<z.ZodNumber>;
    spent_today_credits: z.ZodNumber;
    client_id: z.ZodString;
    auth_method: z.ZodEnum<{
        client_secret: "client_secret";
        private_key_jwt: "private_key_jwt";
    }>;
    live_secrets: z.ZodNumber;
    last_used_at: z.ZodNullable<z.ZodString>;
    created_at: z.ZodString;
    created_by: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ServiceAccountOut = z.infer<typeof ServiceAccountOut>;
export declare const ListServiceAccountsOutput: z.ZodObject<{
    service_accounts: z.ZodArray<z.ZodObject<{
        service_account_id: z.ZodString;
        name: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            disabled: "disabled";
        }>;
        workspace_id: z.ZodString;
        workspace_name: z.ZodString;
        scopes: z.ZodArray<z.ZodString>;
        cap_daily_credits: z.ZodNumber;
        cap_per_question_credits: z.ZodNullable<z.ZodNumber>;
        spent_today_credits: z.ZodNumber;
        client_id: z.ZodString;
        auth_method: z.ZodEnum<{
            client_secret: "client_secret";
            private_key_jwt: "private_key_jwt";
        }>;
        live_secrets: z.ZodNumber;
        last_used_at: z.ZodNullable<z.ZodString>;
        created_at: z.ZodString;
        created_by: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
