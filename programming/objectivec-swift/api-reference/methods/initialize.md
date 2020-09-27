---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Initialize Methods
description: This page shows Initialize methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: init, initialize methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: true
---


# Objective-C API Reference - Initialize Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`init`](#init) | Create an instance of Dynamsoft Barcode Reader. |
  
  ---
  

## init

Initializes DynamsoftBarcodeReader.

```objc
- (instancetype _Nonnull)init;
```

### Return value

The instance of DynamsoftBarcodeReader.

### Remark

Partial of the decoding result will be masked with "*" without a valid license key.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
BarcodeReader = [[DynamsoftBarcodeReader alloc] init];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init()
```


