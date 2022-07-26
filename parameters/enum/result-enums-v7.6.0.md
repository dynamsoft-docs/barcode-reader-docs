---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Result Enumerations
description: This article shows Result Enumerations of Dynamsoft Barcode Reader.
keywords: IMResultDataType, IntermediateResultSavingMode, IntermediateResultType, ResultCoordinateType, ResultType, TextResultOrderMode, result enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /parameters/enum/result-enums-v7.6.0.html
---

# Result Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`IMResultDataType`](#imresultdatatype) | Describes the intermediate result data type. |
  | [`IntermediateResultSavingMode`](#intermediateresultsavingmode) | Describes the intermediate result saving mode. |
  | [`IntermediateResultType`](#intermediateresulttype) | Describes the intermediate result type. |
  | [`ResultCoordinateType`](#resultcoordinatetype) | Describes the result coordinate type. |
  | [`ResultType`](#resulttype) | Describes the extended result type. |
  | [`TextResultOrderMode`](#textresultordermode) | Describes the text result order mode. |
  


## IMResultDataType
Describes the intermediate result data type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IMResultDataType` |
| .Net | `enum Dynamsoft.Barcode.EnumIMResultDataType` |
| JavaScript | `Dynamsoft.EnumIMResultDataType` |
| Python | `class EnumIMResultDataType(IntEnum)` |
| Java / Android | `class EnumIMResultDataType` |
| ObjC / Swift | `enum EnumIMResultDataType` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| IMRDT_IMAGE | EnumIMResultDataTypeImage | 0x01 | Specifies the `ImageData`. |
| IMRDT_CONTOUR | EnumIMResultDataTypeContour | 0x02 | Specifies the `Contour`. |
| IMRDT_LINESEGMENT | EnumIMResultDataTypeLineSegment | 0x04 | Specifies the `LineSegment`. |
| IMRDT_LOCALIZATIONRESULT | EnumIMResultDataTypeLocalizationResult | 0x08 | Specifies the `LocalizationResult`. |
| IMRDT_REGIONOFINTEREST  | EnumIMResultDataTypeRegionOfInterest | 0x10 | Specifies the `RegionOfInterest`. |
| IMRDT_QUADRILATERAL | EnumIMResultDataTypeQuadrilateral | 0x20 | Specifies the `Quadrilateral`. |  



## IntermediateResultSavingMode
Describes the intermediate result saving mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultSavingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultSavingMode` |
| JavaScript | `Dynamsoft.EnumIntermediateResultSavingMode` |
| Python | `class EnumIntermediateResultSavingMode(IntEnum)` |
| Java / Android | `class EnumIntermediateResultSavingMode` |
| ObjC / Swift | `enum EnumIntermediateResultSavingMode` |

### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| IRSM_MEMORY | EnumIntermediateResultSavingModeMemory | 0x01 | Saves intermediate results in memory. |
| IRSM_FILESYSTEM | EnumIntermediateResultSavingModeFileSystem | 0x02 | Saves intermediate results in file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html) for available argument settings. |
| IRSM_BOTH | EnumIntermediateResultSavingModeBoth | 0x04 | Saves intermediate results in both memory and file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html) for available argument settings. |





## IntermediateResultType
Describes the intermediate result type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultType` |
| JavaScript | `Dynamsoft.EnumIntermediateResultType` |
| Python | `class EnumIntermediateResultType(IntEnum)` |
| Java / Android | `class EnumIntermediateResultType` |
| ObjC / Swift | `enum EnumIntermediateResultType` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| IRT_NO_RESULT | EnumIntermediateResultTypeNoResult | 0x00 | No intermediate result |
| IRT_ORIGINAL_IMAGE | EnumIntermediateResultTypeOriginalImage | 0x01 | Original image |
| IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultTypeColourClusteredImage | 0x02 | Colour clustered image **(not supported yet)** |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE | EnumIntermediateResultTypeColourConvertedGrayScaleImage | 0x04 | Colour image converted to grayscale |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE | EnumIntermediateResultTypeTransformedGrayScaleImage | 0x08 | Transformed grayscale image |
| IRT_PREDETECTED_REGION | EnumIntermediateResultTypePredetectedRegion | 0x10 | Predetected region |
| IRT_PREPROCESSED_IMAGE | EnumIntermediateResultTypePreprocessedImage | 0x20 | Preprocessed image |
| IRT_BINARIZED_IMAGE | EnumIntermediateResultTypeBinarizedImage | 0x40 | Binarized image |
| IRT_TEXT_ZONE | EnumIntermediateResultTypeTextZone | 0x80 | Text zone |
| IRT_CONTOUR | EnumIntermediateResultTypeContour | 0x100 | Contour |
| IRT_LINE_SEGMENT | EnumIntermediateResultTypeLineSegment | 0x200 | Line segment |
| IRT_FORM | EnumIntermediateResultTypeForm | 0x400 | Form **(not supported yet)** |
| IRT_SEGMENTATION_BLOCK | EnumIntermediateResultTypeSegmentationBlock | 0x800 | Segmentation block **(not supported yet)** |
| IRT_TYPED_BARCODE_ZONE | EnumIntermediateResultTypeTypedBarcodeZone | 0x1000 | Typed barcode zone |
| IRT_PREDETECTED_QUADRILATERAL | EnumIntermediateResultTypePredetectedQuadrilateral | 0x2000  | Predetected quadrilateral |





## ResultCoordinateType
Describes the result coordinate type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultCoordinateType` |
| .Net | `enum Dynamsoft.Barcode.EnumResultCoordinateType` |
| JavaScript | `Dynamsoft.EnumResultCoordinateType` |
| Python | `class EnumResultCoordinateType(IntEnum)` |
| Java / Android | `class EnumResultCoordinateType` |
| ObjC / Swift | `enum EnumResultCoordinateType` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| RCT_PIXEL | EnumResultCoordinateTypePixel | 0x01 | Returns the coordinate in pixel value. |
| RCT_PERCENTAGE | EnumResultCoordinateTypePercentage | 0x02 | Returns the coordinate as a percentage. |






## ResultType
Describes the extended result type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumResultType` |
| JavaScript | `Dynamsoft.EnumResultType` |
| Python | `class EnumResultType(IntEnum)` |
| Java / Android | `class EnumResultType` |
| ObjC / Swift | `enum EnumResultType` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| RT_STANDARD_TEXT | EnumResultTypeStandardText | 0 | Specifies the standard text. This means the barcode value. |
| RT_RAW_TEXT | EnumResultTypeRawText | 1 | Specifies the raw text. This means the text that includes start/stop characters, check digits, etc. |
| RT_CANDIDATE_TEXT | EnumResultTypeCandidateText | 2 | Specifies all the candidate text. This means all the standard text results decoded from the barcode. |
| RT_PARTIAL_TEXT | EnumResultTypePartialText | 3 | Specifies the partial text. This means part of the text result decoded from the barcode. |





## TextResultOrderMode
Describes the text result order mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextResultOrderMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextResultOrderMode` |
| JavaScript | `Dynamsoft.EnumTextResultOrderMode` |
| Python | `class EnumTextResultOrderMode(IntEnum)` |
| Java / Android | `class EnumTextResultOrderMode` |
| ObjC / Swift | `enum EnumTextResultOrderMode` |


### Members
   
| Member (except ObjC/Swift) | Member (ObjC/Swift) | Value | Description |
| -------------------------- | ------------------- | ----- | ----------- |
| TROM_SKIP | EnumTextResultOrderModeSkip | 0x00 | Skips the result ordering operation. |
| TROM_CONFIDENCE | EnumTextResultOrderModeConfidence | 0x01 | Returns the text results in descending order by confidence. |
| TROM_POSITION | EnumTextResultOrderModePosition | 0x02 | Returns the text results in position order, from top to bottom, then left to right. |
| TROM_FORMAT | EnumTextResultOrderModeFormat | 0x04 | Returns the text results in alphabetical and numerical order by barcode format string. |
