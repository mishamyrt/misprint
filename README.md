# Misprint

<p align="center">
    <img src="./logo.png" width="442px">
<p>

The tiny library that lets you quickly add a typo handler to your site.

## Install

```sh
npm install misprint
```

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
