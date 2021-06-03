---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: ScannerPlayCallbackInfo, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: false
noTitleIndex: true
breadcrumbText: ScannerPlayCallbackInfo
---


# ScannerPlayCallbackInfo

`interface` ScannerPlayCallbackInfo

* width: *number*

* height: *number*

```js
scanner.onplayed = rsl=>{ console.log(rsl.width+'x'+rsl.height) };
await scanner.show(); // or open, play, setCurrentCamera, like these.
```
