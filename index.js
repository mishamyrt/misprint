/** @module Misprint */

/**
 * Message formatter
 * @name MessageFormatter
 * @function
 * @param {string} url - An URL of page, where typo has been detected
 * @param {string} text - A text, that user is selected
 * @param {string} paragraph - A whole paragraph containing typo
 * @returns {string} formatted message
*/

/**
 * Open mail composing in default mail client
 * @param {string} to - A mail Recipient
 * @param {string} subject - A mail subject
 * @param {string} message - A mail content
 * @returns {void}
 */
const mailTo = (to, subject, message) => {
  const a = document.createElement('a')
  a.href = `mailto:${to}?subject=${subject}&body=${message}`
  a.click()
}

/**
 * Predicate to test key input
 * @name KeyPredicate
 * @param {KeyboardEvent} e - event triggered on key down
 * @returns {boolean} 
 */
const ctrlEnter = e => (e.ctrlKey || e.metaKey) && e.keyCode === 13

/**
 * Bind typo detect handler to mail
 * @param {string} to - A mail Recipient
 * @param {string} subject - A mail subject
 * @param {MessageFormatter} formatter - A mail content formatter
 * @param {KeyPredicate} [keyPredicate=ctrlEnter] - A predicate keys
 * @returns {void}
 */
const bindTypoHandler = (
  to,
  subject,
  formatter,
  keyPredicate = ctrlEnter
) => document.addEventListener('keydown', e => {
    // Early exit if not our keys is pressed
    if (!keyPredicate(e)) return
    e.preventDefault()

    // Exit if no selection
    const selection = window.getSelection()
    const text = selection.toString()
    if (text.length === 0) return

    mailTo(to, subject, encodeURI(formatter(
      window.location.href,
      text,
      selection.anchorNode.parentNode.textContent)))
  })

export { bindTypoHandler } 
