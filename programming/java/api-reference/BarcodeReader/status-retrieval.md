---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Status Retrieval Methods
description: This page shows BarcodeReader status retrieval methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: getVersion, status retrieval methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---

# Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getVersion`](#getversion) | Get version information of SDK.|







## getVersion

Get version information of SDK.

```java
String com.dynamsoft.dbr.BarcodeReader.getVersion()	
```

**Return Value**  
The version information string.

**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
String versionInfo = reader.getVersion();
reader.destroy();
```
