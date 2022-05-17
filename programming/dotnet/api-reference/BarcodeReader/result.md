---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Result Methods
description: This page shows BarcodeReader Result methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: GetIntermediateResults, result methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`GetIntermediateResults`](#getintermediateresults) | Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.  |



 


## GetIntermediateResults
Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```csharp
IntermediateResult[] Dynamsoft.DBR.BarcodeReader.GetIntermediateResults() 
```   

**Return Value**  
[`IntermediateResult`](../class/IntermediateResult.md) array.

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = new PublicRuntimeSettings();
settings = reader.GetRuntimeSettings();
settings.IntermediateResultTypes = (int)(EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE);
reader.UpdateRuntimeSettings(settings);
string fileName = @"C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif";
TextResult[] textResult = demo.DecodeFile(fileName, "");
IntermediateResult[] intermediateResults = reader.GetIntermediateResults();
reader.Dispose();
```
