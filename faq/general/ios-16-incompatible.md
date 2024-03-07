---
layout: default-layout
title: Why is the Javascript SDK not recognizing any barcodes on iOS 16.4?
keywords: iOS, incompatible, JS, V7.5.0, V8.8.7
description: Why is the Javascript SDK not recognizing any barcodes on iOS 16.4?
needAutoGenerateSidebar: false
---

# Why is the Javascript SDK not recognizing any barcodes on iOS 16.4?

[<< Back to FAQ index](index.md)

## Background

iOS 16.4 was released on March 27th, 2023. In this version, all browsers on iOS have begun to support `OffscreenCanvas`. Unfortunately, Apple's implementation of the API is still incomplete and is missing the important feature "webgl context". Please see the MDN docs on [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) for more details.
 
## Impact

`OffscreenCanvas` is utilized in older versions of DBR-JS. Specifically in versions **7.5.0 ~ 8.8.7**. However, we moved away from this API as of DBR-JS v9.0.0. Therefore, all 9+ versions are not affected by this breaking change. 

If you encounter the issue, you will see the following error in the browser console:

![ios-16-incompatible](assets/ios-16-incompatible.png)
 
## Solution:
 
There are three solutions to the issue:

### Option 1: Upgrade to the latest v9.x version (Recommended Option)

If it is convenient, we recommend that you upgrade to the latest v9.x version to avoid the issue. Please refer to the [upgrade guide](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/upgrade-guide/?ver=latest).

However, if you are not able to upgrade to the v9.x, please refer to the two options below.

### Option 2: Disable the API directly before creating a `BarcodeScanner` instance

```js
window.OffscreenCanvas = null;
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
//...
```

> NOTE:
> 
> If you application, or other libraries in your application, requires the use of `OffscreenCanvas`, then this approach will not be suitable, as the `OffscreenCanvas` would be disabled globally.

### Option 3: Disable webgl context usage in DBR-JS

If you are unsure whether `OffscreenCanvas` can be disabled globally as suggested in Option 1, you can enable `ifSaveOriginalImageInACanvas` after creating the `BarcodeScanner` instance as a workaround.

```js
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
scanner.ifSaveOriginalImageInACanvas = true;
//...
```

> NOTE
> 
> This approach may slow DBR-JS down a little bit, but the difference can be ignored on devices capable of running iOS 16.4.

If none of the options work for you, please [contact us](https://www.dynamsoft.com/contact/).
