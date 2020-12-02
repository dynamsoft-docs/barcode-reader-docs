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

  ---

## get_all_intermediate_results

Returns intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```python
BarcodeReader.get_all_intermediate_results() 
```   

### Return value

`intermediate_results <*list[class IntermediateResult]*>` : All intermediate results.

### Code Snippet

```python
from dbr import *
license_key = 't0260NwAAAHV***************'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

reader = BarcodeReader()
reader.init_license(license_key)
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

intermediateResults = reader.get_all_intermediate_results()
```
