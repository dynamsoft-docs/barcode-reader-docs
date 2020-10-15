---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Result Methods
description: This page shows BarcodeReader Result methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: GetIntermediateResults, result methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# .Net API Reference - BarcodeReader Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetIntermediateResults`](#getintermediateresults) | Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.  |

  ---


&nbsp; 


## GetIntermediateResults
Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```C#
IntermediateResult[] Dynamsoft.Barcode.BarcodeReader.GetIntermediateResults() 
```   

#### Return value
Intermediate results. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings = new PublicRuntimeSettings();
settings = reader.GetRuntimeSettings();
settings.IntermediateResultTypes = (int)(EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE);
reader.UpdateRuntimeSettings(settings);
string fileName = @"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif";
TextResult[] textResult = demo.DecodeFile(fileName, "");
IntermediateResult[] intermediateResults = reader.GetIntermediateResults();
reader.Dispose();
```

#### See Also
[`IntermediateResult`](../class/IntermediateResult.md)