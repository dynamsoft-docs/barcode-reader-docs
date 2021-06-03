---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader
description: This page shows the BarcodeReader Class of Dynamsoft Barcode Reader JavaScript SDK.
keywords: EnumIntermediateResultType, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: false
noTitleIndex: true
breadcrumbText: EnumIntermediateResultType
---


# EnumIntermediateResultType

```ts
enum EnumIntermediateResultType {
    IRT_NO_RESULT = 0x00000000, 
    IRT_ORIGINAL_IMAGE = 0x00000001, 
    IRT_COLOUR_CLUSTERED_IMAGE = 0x00000002, 
    IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE = 0x00000004,
    IRT_TRANSFORMED_GRAYSCALE_IMAGE = 0x00000008, 
    IRT_PREDETECTED_REGION = 0x00000010, 
    IRT_PREPROCESSED_IMAGE = 0x00000020, 
    IRT_BINARIZED_IMAGE = 0x00000040,
    IRT_TEXT_ZONE = 0x00000080, 
    IRT_CONTOUR = 0x00000100, 
    IRT_LINE_SEGMENT = 0x00000200, 
    IRT_FORM = 0x00000400,
    IRT_SEGMENTATION_BLOCK = 0x00000800, 
    IRT_TYPED_BARCODE_ZONE = 0x00001000,
    IRT_PREDETECTED_QUADRILATERAL = 0x00002000
  }
```

See [C++ EnumIntermediateResultType](https://www.dynamsoft.com/barcode-reader/parameters/enum/result-enums.html?ver=latest#intermediateresulttype) for more info.