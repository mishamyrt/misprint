/** @module Misprint */

/** URL encoded CR LF. */
const lineBreakChar = "%0D%0A"

/** Regular expression for line breaks. */
const lineBreakRegexp = /(\r\n|\n|\r)/gm

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
 * Replaces all line breaks with URL encoded version
 * @param {string} str - A string to be processed
 * @returns {string} 
 */
const toUrlMultiline = str => str.replace(lineBreakRegexp, lineBreakChar)

/**
 * Predicate to test key input
 * @name KeyPredicate
 * @param {KeyboardEvent} e - event triggered on key down
 * @returns {boolean} 
 */
const ctrlEnter = e => (e.ctrlKey || e.metaKey) && e.keyCode === 13

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
 * Bind typo detect handler to mail
 * @param {string} to - A mail Recipient
 * @param {string} subject - A mail subject
 * @param {MessageFormatter} formatter - A mail content formatter
 * @param {KeyPredicate} [keyPredicate=ctrlEnter] - A predicate keys
 * @returns {void}
 */
function bindTypoHandler(to, subject, formatter, keyPredicate = ctrlEnter) {
  document.addEventListener('keydown', function (e) {
    if (keyPredicate(e)) {
      const selection = window.getSelection()
      const text = selection.toString()
      if (text.length === 0) {
        return
      }
      const paragraph = selection.anchorNode.parentNode.textContent
      const url = window.location.href
      const message = toUrlMultiline(formatter(url, text, paragraph))
      mailTo(to, subject, message)
    }
  })
}

export { bindTypoHandler } 
