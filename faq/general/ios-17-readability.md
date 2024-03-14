---
layout: default-layout
title: How do I resolve the issue of the Barcode Reader not recognizing any barcodes via video in iOS 16.7 or 17?
keywords: iOS, incompatible, JS, 16.7, 17
description: How do I resolve the issue of the Barcode Reader not recognizing any barcodes via video in iOS 16.7 or 17?
needAutoGenerateSidebar: false
---

# How do I resolve the issue of the Barcode Reader not recognizing any barcodes via video in iOS 16.7 or 17?

iOS 17 and iOS 16.7 were released by Apple on September 18, 2023 and September 21, 2023 respectively. Our team has found that with these most recent iOS releases, **some** iPhones and iPads will run into an issue where it seems like no barcode can be read under any condition.

We found that this issue is inconsistent across all iPhones and iPads on iOS 17 or 16.7. However, if you find that this issue is occurring to a subset of your users, please implement the following workaround in the code:

If you use version 9.x:

```js
scanner._dce._bWebGLSupported=false;
//...
await scanner.show();
```

If you use version 8.8.0 ~ 8.8.7:

```js
scanner.ifSaveOriginalImageInACanvas= true;
//...
await scanner.show();
```

If you use version 8.0.0 ~ 8.6.3

```js
scanner._bUseWebgl=false;
//...
await scanner.show();
```

If you are unsure which version it is, you can use the following that works for version 8.0.0 ~ 9.6.30

```js
scanner.dce && (scanner.dce._bWebGLSupported = false);
scanner.ifSaveOriginalImageInACanvas= true; 
scanner._bUseWebgl = false;
//...
await scanner.show();
```

Once implemented, all iOS devices using iOS 17 or 16.7 should not encounter this issue anymore. For a quick test, please use the [online demo](https://demo.dynamsoft.com/barcode-reader-js/).

Dynamsoft has released a patch version 9.6.31 to work around this iOS bug on Oct 11th, 2023.

If you have any questions, please contact the [Dynamsoft Support team](https://www.dynamsoft.com/contact/).