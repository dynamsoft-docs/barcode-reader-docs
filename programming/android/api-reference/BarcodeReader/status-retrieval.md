---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - BarcodeReader Status Retrieval Methods
description: This page shows BarcodeReader status retrieval methods of Dynamsoft Barcode Reader for Android SDK.
keywords: getVersion, status retrieval methods, BarcodeReader, api reference, android
needAutoGenerateSidebar: true
---

# Android API Reference - BarcodeReader Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getVersion`](#getversion) | Get version information of SDK.|

  ---

## getVersion

Get version information of SDK.

```java
String com.dynamsoft.dbr.BarcodeReader.getVersion()	
```

### Return value

The version information string.

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader();
DMLTSConnectionParameters info = new DMLTSConnectionParameters();
info.organizationID = "200001";
info.sessionPassword = "******";
reader.initLicenseFromLTS(info, new DBRLTSLicenseVerificationListener() {
   @Override
   public void LTSLicenseVerificationCallback(boolean b, Exception e) {
      if (!b && e != null) {
         e.printStackTrace();
      }
   }
});
String versionInfo = reader.getVersion();
reader.destroy();
```
