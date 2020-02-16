<p align="center">
    <img src="./assets/logo.png" width="472px">
<p>

Misprint — simple and tiny library, that lets you quickly add a typo notifyer to your site.

* 279 bytes (minified and gzipped). It uses [Size Limit](https://github.com/ai/size-limit) to control size.
* Only one exported function.
* Reassignable keystroke.
* Full control of the message.

```js
import { bindTypoHandler } from misprint

const messageFormatter = (url, typo, paragraph) =>
`Hi!
You made a typo: ${typo}
Whole paragraph: ${paragraph}
Link: ${url}`

bindTypoHandler(
    'misha@myrt.co',
    'Typo on your website',
    messageFormatter
)
```

## ES Modules

Misprint avaliable as ES Module, so you can install from npm and use it with any modern bundling system.

```sh
npm install misprint
```

Or even with browser from CDN in [supported browsers](https://caniuse.com/#feat=es6-module).

```html
<script type="module">
  import { bindTypoHandler } from 'https://cdn.jsdelivr.net/npm/misprint/index.js'
</script>
```

## Custom keystroke

`bindTypoHandler` accepts button predicate as 4th parameter. Default Ctrl+Enter predicate looks like this:

```js
/**
 * Predicate to test key input
 * @name KeyPredicate
 * @param {KeyboardEvent} e - event triggered on key down
 * @returns {boolean} 
 */
const ctrlEnter = e => (e.ctrlKey || e.metaKey) && e.keyCode === 13
```

If you want to assign other keystroke, pass custom predicate to function.

```js
const ctrlU = e => (e.ctrlKey || e.metaKey) && e.keyCode === 85

bindTypoHandler(
    'misha@myrt.co',
    'Typo on your website',
    messageFormatter,
    ctrlU
)
```

If you want to assign ctrl+* keystroke, dont forget to check `e.metaKey`. It's command (⌘) key in macOS. 

## Formatters

There is a [document](./formatters.md) with examples of message formatting in different languages.
