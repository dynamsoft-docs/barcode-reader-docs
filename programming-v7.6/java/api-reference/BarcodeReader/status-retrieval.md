---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Status Retrieval Methods
description: This page shows BarcodeReader status retrieval methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: getVersion, status retrieval methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---

# Java API Reference - BarcodeReader Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getVersion`](#getversion) | Get version information of SDK.|

  ---






## getVersion

Get version information of SDK.

```java
String com.dynamsoft.barcode.BarcodeReader.getVersion()	
```

#### Return value
The version information string.

#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
String versionInfo = reader.getVersion();
reader.destroy();
```
