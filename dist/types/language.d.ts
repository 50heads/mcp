import { QUESTION_LANGUAGES } from "@50heads/shared";
/**
 * A small, conservative language guess for questions that arrive without `language`. It only
 * answers when the text is clearly one of the languages heads answer in; otherwise the server
 * asks the caller (elicitation) rather than guess.
 */
type Lang = (typeof QUESTION_LANGUAGES)[number];
/** A language its script alone gives away: kana is Japanese, Hangul Korean, Han without kana Chinese. */
export type ScriptLanguage = "ja" | "ko" | "zh";
/**
 * The language of a text written in a script heads can only mean one way. Japanese is any kana
 * (Han alone is ambiguous with Chinese, kana is not); Korean is Hangul; Chinese is Han with no
 * kana. Null for every other script, including Latin, where stopwords decide.
 */
export declare function detectScriptLanguage(text: string): ScriptLanguage | null;
/**
 * A language code, or null when the text is not clearly one language. Script decides first:
 * kana, Hangul and Han name ja, ko and zh outright, but only once that code is a question
 * language (QUESTION_LANGUAGES); until then such text is null and the caller asks, as it does
 * today. Latin text goes to the stopword count.
 */
export declare function detectLanguage(text: string): Lang | null;
export {};
