---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - BarcodeReader Result Methods
description: This page shows BarcodeReader result methods of Dynamsoft Barcode Reader for Android SDK.
keywords: getIntermediateResults, result methods, BarcodeReader, api reference, android
needAutoGenerateSidebar: true
---


# Android API Reference - BarcodeReader Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResults`](#getintermediateresults) | Get intermediate results. |

  ---

## getIntermediateResults

Get intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```java
IntermediateResult[] com.dynamsoft.dbr.BarcodeReader.getIntermediateResults() throws BarcodeReaderException 
```   

### Return value

The intermediate results returned by the SDK.

### Exceptions

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

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
}
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
reader.updateRuntimeSettings(settings);
TextResult[] result = reader.decodeFile("your file path", "");
IntermediateResult[] irtResult = reader.getIntermediateResults();
reader.destroy();
```
