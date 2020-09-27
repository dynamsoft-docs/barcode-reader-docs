---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Status Retrieval Methods
description: This page shows BarcodeReader status retrieval methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: GetVersion, status retrieval methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---

# .Net API Reference - BarcodeReader Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetVersion`](#getversion) | Get version information of SDK.|

  ---


## GetVersion

Get version information of SDK.

```C#
string Dynamsoft.Barcode.BarcodeReader.GetVersion()
```

#### Return value
The version info string. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
string version = reader.GetVersion();
```
