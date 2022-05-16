---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader Result Methods
description: This page shows Result methods of Dynamsoft Barcode Reader for Python SDK.
keywords: GetIntermediateResults, result methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---


# Python API Reference - BarcodeReader Result Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`get_all_intermediate_results`](#get_all_intermediate_results) | Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.  |


## get_all_intermediate_results

Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```python
BarcodeReader.get_all_intermediate_results() 
```   

**Return Value**  

`intermediate_results` <*list[class IntermediateResult]*> : A list of [`IntermediateResult`](../class/IntermediateResult.md) values.

**Code Snippet**  

```python
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

BarcodeReader.init_license(license_key)
reader = BarcodeReader()

sts = reader.get_runtime_settings()
sts.intermediate_result_saving_mode = EnumIntermediateResultSavingMode.IRSM_MEMORY
sts.intermediate_result_types = EnumIntermediateResultType.IRT_BINARIZED_IMAGE
reader.update_runtime_settings(sts)

try:
    text_results = reader.decode_file(image_file)
    if text_results != None:
        for text_result in text_results:
            print("Barcode Format :")
            print(text_result.barcode_format_string)
            print("Barcode Text :")
            print(text_result.barcode_text)
            print("Localization Points : ")
            print(text_result.localization_result.localization_points)
            print("-------------")
except BarcodeReaderError as bre:
    print(bre)

try: 
    intermediateResults = reader.get_all_intermediate_results()
    if intermediateResults != None:
        for intermediateResult in intermediateResults:
            if intermediateResult.data_type == EnumIMResultDataType.IMRDT_IMAGE
                # deal with the image
            else if intermediateResult.data_type == EnumIMResultDataType.IMRDT_LOCALIZATIONRESULT
                # analyze the localization result
            else if intermediateResult.data_type == EnumIMResultDataType.IMRDT_LINESEGMENT
                # obtain the line segment info for each line
            else if intermediateResult.data_type == EnumIMResultDataType.IMRDT_CONTOUR
                # analyze the contour data
            else if intermediateResult.data_type == EnumIMResultDataType.IMRDT_REGIONOFINTEREST
                # obtain the whole region of interest
            else
                # Quadrilateral data
except BarcodeReaderError as bre:
    print(bre)
```             
