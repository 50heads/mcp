import { QUESTION_LANGUAGES } from "@50heads/shared";
/**
 * A small, conservative language guess for questions that arrive without `language`. It only
 * answers when the text is clearly one of the languages heads answer in; otherwise the server
 * asks the caller (elicitation) rather than guess.
 */
type Lang = (typeof QUESTION_LANGUAGES)[number];
/** A language code, or null when the text is not clearly one language. */
export declare function detectLanguage(text: string): Lang | null;
export {};
