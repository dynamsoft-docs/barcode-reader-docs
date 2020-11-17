---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader Result Methods
description: This page shows BarcodeReader Result methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: getIntermediateResults, result methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Java API Reference - BarcodeReader Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`getIntermediateResults`](#getintermediateresults) | Get intermediate results. |

  ---





## getIntermediateResults
Get intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```java
IntermediateResult[] com.dynamsoft.barcode.BarcodeReader.getIntermediateResults() throws BarcodeReaderException 
```   

#### Return value
The intermediate results returned by the SDK.


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
reader.updateRuntimeSettings(settings);
TextResult[] result = reader.decodeFile("your file path", "");
IntermediateResult[] irtResult = reader.getIntermediateResults();
reader.destroy();
```

&nbsp;

