---
layout: default-layout
title: Why are newline characters not being rendered when displaying the barcode results in a textbox?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, newline character, barcode result
description: Why are newline characters not being rendered when displaying the barcode results in a textbox?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## Why are newline characters not being rendered when displaying the barcode results in a textbox?

That is because in normal HTML, newline characters are not interpreted as they normally would, so newline characters in the barcode result will be ignored. To account for them, it’s best to either wrap the element used to display the result in a `<pre>` element, or manually replace each newline character with `<br />`. Please refer to [this article](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/?ver=latest#accounting-for-newline-characters-in-the-barcode-result) for more details.
