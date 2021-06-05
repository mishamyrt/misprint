/**
 * Email message formatter
 * @param url - An URL of page, where typo has been detected
 * @param text - A text, that user is selected
 * @param paragraph - A whole paragraph containing typo
*/
declare interface MessageFormatter {
  (url: string, text: string, paragraph: string): string;
}

/**
 * Predicate to test key input
 * @param {KeyboardEvent} e - event triggered on key down
 */
declare interface KeyPredicate {
  (e: KeyboardEvent): boolean;
}
