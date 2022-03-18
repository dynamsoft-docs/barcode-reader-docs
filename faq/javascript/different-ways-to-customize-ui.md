---
layout: default-layout
title: What are the different ways to customize the UI?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, customize ui
description: What are the different ways to customize the UI?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What are the different ways to customize the UI?

There are three different ways to customize the UI -

- The first is to modify the `dist/dbr.scanner.html` file directly. However, this means that the resource files should be hosted on your own server, rather than using the CDN.

- The second is to make a copy of the `dist/dbr.scanner.html` and include it in your application, modifying the copy as you wish. Afterwards, you can tell the SDK to use the modified copy using the `defaultUIElement` property:

```javascript
Dynamsoft.DBR.BarcodeScanner.defaultUIElementURL = "THE-URL-TO-THE-FILE";
```

> Note - This needs to be set before `createInstance` is called.

- The third way is to build the UI element by incorporating the HTML element yourself, and then point to those HTML element(s) during initialization using the `setUIElement(HTMLElement)` method.
  1. The first part of this is to embed the video element. Please note that the classnames of the different sub-elements must match the ones in `dist/dbr.scanner.html`.
  2. The second part is to add the camera list and resolution list and as before, the classnames must match the ones listed in `dist/dbr.scanner.html`

> Note - For more info on how to customize the UI, please refer to this [section](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/?ver=latest#customize-the-ui) of the user guide.
