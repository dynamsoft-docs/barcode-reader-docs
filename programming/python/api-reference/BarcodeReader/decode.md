---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode Methods of Dynamsoft Barcode Reader for Python SDK.
keywords: decode_file, decode_buffer, decode_file_stream, decode methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---


# Python API Reference - BarcodeReader Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`decode_file`](#decode_file) | Decodes barcodes from a specified image file. |
  | [`decode_buffer`](#decode_buffer) | Decodes barcodes from the memory buffer containing image pixels in defined format.  |
  | [`decode_file_stream`](#decode_file_stream) | Decodes barcodes from an image file in memory. |
  | [`decode_buffer_manually`](#decode_buffer_manually) | Decodes barcodes from the memory buffer containing image pixels in defined format. |
  | [`init_intermediate_result`](#initintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decode_intermediate_results`](#decodeintermediateresults) | Decodes barcode from intermediate results. |


## decode_file

Decode barcodes from a specified image file.

```python
BarcodeReader.decode_file(image_file_name, template_name="")
```

**Parameters**  

- `[in] image_file_name` <*str*> :	A string defining the file name. It supports BMP, JPEG, PNG, TIFF and PDF files.  
- `[in] template_name` <*optional*><*str*> : The template name.

**Return Value**  

`text_results <*list[class TextResult]*>` : All [`TextResult`](../class/TextResult.md) structs for successfully decoded barcodes.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  

```python
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

BarcodeReader.init_license(license_key)
reader = BarcodeReader()
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
```

## decode_buffer

Decodes barcodes from the memory buffer containing image pixels in defined format.   

```python
BarcodeReader.decode_buffer(image, image_pixel_format=EnumImagePixelFormat.IPF_RGB_888, template_name="")
```   
   
**Parameters**  
`[in] image` <*class numpy.ndarray*> : The image which is processed by opencv.  
`[in] image_pixel_format` <*class EnumImagePixelFormat*> : The image pixel format used in the image byte array.  
`[in] template_name` <*optional*><*str*> : The template name.


**Return Value**  

`text_results <*list[class TextResult]*>` : All [`TextResult`](../class/TextResult.md) structs for successfully decoded barcodes.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.  

**Code Snippet**  

```python
import cv2
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

image = cv2.imread(image_file)

BarcodeReader.init_license(license_key)
reader = BarcodeReader()
try:
    text_results = reader.decode_buffer(image)
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
```

## decode_file_stream

Decodes barcodes from an image file in memory.

```python
BarcodeReader.decode_file_stream(file_stream, template_name="")
```

**Parameters**  

- `[in]	file_stream` <*bytearray*>  : The image file bytes in memory.  
- `[in] templateName` <*optional*><*str*>: The template name.

**Return Value**  

`text_results <*list[class TextResult]*>` : All [`TextResult`](../class/TextResult.md) structs for successfully decoded barcodes.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  

```python
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

with open(image_file, "rb") as fread:
    total = fread.read()

BarcodeReader.init_license(license_key)
reader = BarcodeReader()
try:
    text_results = reader.decode_file_stream(bytearray(total))
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
```


## decode_buffer_manually

Decodes barcodes from the memory buffer containing image pixels in defined format.   

```python
BarcodeReader.decode_buffer_manually(self, buffer, width, height, stride, image_pixel_format, template_name="")
```   
   
**Parameters**  
`[in] buffer` <*bytes or bytearray*> : The array of bytes which contain the image data.  
`[in] width` <*int*> : The width of the image in pixels.  
`[in] height` <*int*> : The height of the image in pixels.  
`[in] stride` <*int*> : The stride (or scan width) of the image.  
`[in] image_pixel_format` <*class EnumImagePixelFormat*> : The image pixel format used in the image byte array. Default value = EnumImagePixelFormat.IPF_RGB_888.  
`[in] template_name` <*optional*><*str*> : The template name.


**Return Value**  
text_results <*list[class TextResult]*> : All [`TextResult`](../class/TextResult.md) structs for successfully decoded barcodes.

**Exception**  
[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.  

## init_intermediate_result

Inits an intermediateResult struct with default values.

```python
BarcodeReader.init_intermediate_result(intermediate_result_type)
```

**Parameters**  

- `[in] intermediate_result_type` <*EnumIntermediateResultType*> :	The type of the intermediate result to initialize. Please see [`EnumIntermediateResultType`](../../../../parameters/enum/result-enums.md#intermediateresulttype).   

**Return Value**  

`intermediate_result <*class IntermediateResult*>` : An [`IntermediateResult`](../class/IntermediateResult.md) struct with default values.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  

```python
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

BarcodeReader.init_license(license_key)
reader = BarcodeReader()
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
```

## decode_intermediate_results

Decodes barcode from intermediate results.

```python
BarcodeReader.decode_intermediate_results(intermediate_results, template_name="")
```

**Parameters**  

- `[in] intermediate_results` <*list[class IntermediateResults]*> :	The [`IntermediateResult`](../class/IntermediateResult.md) array for decoding.
- `[in] template_name` <*optional*><*str*> : The template name.

**Return Value**  

`text_results <*list[class TextResult]*>` : All [`TextResult`](../class/TextResult.md) structs for successfully decoded barcodes.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) The exception thrown by Dynamsoft Barcode Reader.  

**Code Snippet**  

```python
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
image_file = r'C:\Program Files (x86)\Dynamsoft\{Version number}\Images\AllSupportedBarcodeTypes.tif'

BarcodeReader.init_license(license_key)
reader = BarcodeReader()
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
```

