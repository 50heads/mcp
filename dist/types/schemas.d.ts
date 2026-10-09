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
        click_test: "click_test";
        reaction: "reaction";
        free_text: "free_text";
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
            click_test: "click_test";
            reaction: "reaction";
            free_text: "free_text";
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
        cancelled: "cancelled";
        closed: "closed";
        live: "live";
        scheduled: "scheduled";
        draft: "draft";
        complete: "complete";
        underfilled: "underfilled";
        refused: "refused";
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
/** ask_set (private-audiences-sets.md §5.7): two to ten questions behind one link, answered in order. */
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
}, z.core.$strip>;
export type AskOutput = z.infer<typeof AskOutput>;
export declare const ResultsOutput: z.ZodObject<{
    question_id: z.ZodString;
    status: z.ZodEnum<{
        cancelled: "cancelled";
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
    }, z.core.$strip>>;
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
    }>>;
}, z.core.$strip>;
export declare const ExportOutput: z.ZodObject<{
    question_id: z.ZodString;
    format: z.ZodEnum<{
        pdf: "pdf";
        png: "png";
        csv: "csv";
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
        click_test: "click_test";
        reaction: "reaction";
        free_text: "free_text";
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
