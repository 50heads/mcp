import { z } from "zod";
/**
 * How one tool that takes an `action` is described to a host and validated for the server.
 *
 * Every action has its own input object. The server validates a call with a discriminated union
 * on `action`, so each action's arguments are checked against that action's schema alone. Hosts
 * need a plain object at the root of a tool's input schema (several refuse oneOf or anyOf there),
 * so tools/list carries one merged object instead: `action` (an enum, required) and every
 * argument of every action, each saying which actions use it. The description lists each action
 * with its arguments, so a model can choose well without reading the schema.
 */
export type ActionSpec = {
    /** The action's name, such as "get". */
    name: string;
    /** What the action does, in plain words (its part of the tool's description). */
    description: string;
    /** The action's own arguments, without `action`. */
    input: z.ZodObject;
    /** The scope the action needs; null when it needs no sign-in. */
    scope: string | null;
    /** True when the action changes nothing. */
    readOnly: boolean;
    destructive: boolean;
    idempotent: boolean;
};
type Json = Record<string, unknown>;
/** The one plain-object JSON Schema tools/list carries for a tool. */
export declare function mergedInputSchema(tool: string, actions: ActionSpec[]): Json;
/** A Standard Schema (with JSON Schema) that validates with the union and shows hosts the merged object. */
export type PublishedInput = {
    "~standard": {
        version: 1;
        vendor: string;
        validate: (value: unknown) => unknown;
        jsonSchema: {
            input: () => Json;
            output: () => Json;
        };
    };
};
export declare function publishedInput(union: z.ZodType, merged: Json): PublishedInput;
/** The discriminated union a call is validated with. */
export declare function inputUnion(actions: ActionSpec[]): z.ZodDiscriminatedUnion<[z.ZodObject<{
    [x: string]: any;
    action: z.ZodLiteral<string>;
}, z.core.$strip>, ...z.ZodObject<{
    [x: string]: any;
    action: z.ZodLiteral<string>;
}, z.core.$strip>[]], "action">;
/** The tool's description: its purpose, then every action with its arguments and what it needs. */
export declare function toolDescription(intro: string, actions: ActionSpec[]): string;
/** The tool-level hints, true to every action in it. */
export declare function toolAnnotations(actions: ActionSpec[]): {
    readOnlyHint: boolean;
    idempotentHint: boolean;
    openWorldHint: boolean;
    destructiveHint?: undefined;
} | {
    readOnlyHint: boolean;
    destructiveHint: boolean;
    idempotentHint: boolean;
    openWorldHint: boolean;
};
export {};
