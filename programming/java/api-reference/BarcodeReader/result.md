---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Result Methods
description: This page shows BarcodeReader Result methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: getIntermediateResults, result methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResults`](#getintermediateresults) | Get intermediate results. |






## getIntermediateResults
Get intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```java
IntermediateResult[] com.dynamsoft.dbr.BarcodeReader.getIntermediateResults() throws BarcodeReaderException 
```   

**Return Value**  
An array of [`IntermediateResult`](../class/IntermediateResult.md)

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


**Code Snippet**  
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
reader.updateRuntimeSettings(settings);
TextResult[] result = reader.decodeFile("your file path", "");
IntermediateResult[] irtResult = reader.getIntermediateResults();
reader.destroy();
```



