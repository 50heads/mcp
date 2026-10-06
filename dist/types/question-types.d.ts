import { type QuestionType } from "@50heads/shared";
/**
 * Per-type rules and examples. One source for the 50heads://question-types resource, the skill's
 * references/question-types.md (generated) and the tool descriptions.
 */
export type QuestionTypeGuide = {
    type: QuestionType;
    title: string;
    use: string;
    options: string;
    minTier: 1 | 2;
    /** How a head answers, and what the distribution counts. */
    answer: string;
    example: Record<string, unknown>;
};
export declare const QUESTION_TYPE_GUIDES: Record<QuestionType, QuestionTypeGuide>;
/** The markdown for the question-types resource and the skill reference. */
export declare function questionTypesMarkdown(): string;
