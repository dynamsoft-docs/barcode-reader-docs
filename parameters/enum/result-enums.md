---
layout: default-layout
title: Dynamsoft Barcode Reader Enumerations - Result Enumerations
description: This article shows Result Enumerations of Dynamsoft Barcode Reader.
keywords: IMResultDataType, IntermediateResultSavingMode, IntermediateResultType, ResultCoordinateType, ResultType, TextResultOrderMode, result enumeration, enumeration
needAutoGenerateSidebar: true
needGenerateH3Content: false
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
| .Net | `enum Dynamsoft.DBR.EnumIMResultDataType` |
| JavaScript | `Dynamsoft.EnumIMResultDataType` |
| Python | `class EnumIMResultDataType(IntEnum)` |
| Java / Android | `class EnumIMResultDataType` |
| ObjC / Swift | `enum EnumIMResultDataType` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| IMRDT_IMAGE | EnumIMResultDataTypeImage | image | 0x01 | Specifies the `ImageData`. |
| IMRDT_CONTOUR | EnumIMResultDataTypeContour | contour | 0x02 | Specifies the `Contour`. |
| IMRDT_LINESEGMENT | EnumIMResultDataTypeLineSegment | lineSegment | 0x04 | Specifies the `LineSegment`. |
| IMRDT_LOCALIZATIONRESULT | EnumIMResultDataTypeLocalizationResult | localizationResult | 0x08 | Specifies the `LocalizationResult`. |
| IMRDT_REGIONOFINTEREST  | EnumIMResultDataTypeRegionOfInterest | regionOfInterest | 0x10 | Specifies the `RegionOfInterest`. |
| IMRDT_QUADRILATERAL | EnumIMResultDataTypeQuadrilateral | quadrilateral | 0x20 | Specifies the `Quadrilateral`. |  
| IMRDT_REFERENCE | EnumIMResultDataTypeReference | reference | 0x40 | Specifies the internal data format for using other Dynamsoft products, such as Dynamic Web TWAIN. |  

## IntermediateResultSavingMode

Describes the intermediate result saving mode.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultSavingMode` |
| .Net | `enum Dynamsoft.DBR.EnumIntermediateResultSavingMode` |
| JavaScript | `Dynamsoft.EnumIntermediateResultSavingMode` |
| Python | `class EnumIntermediateResultSavingMode(IntEnum)` |
| Java / Android | `class EnumIntermediateResultSavingMode` |
| ObjC / Swift | `enum EnumIntermediateResultSavingMode` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description | Valid Argument(s) |
| -------------------------- | ------------- | --------------- | ----- | ----------- | ----------------- |
| IRSM_MEMORY | EnumIntermediateResultSavingModeMemory | memory | 0x01 | Saves intermediate results in memory with public data format. | `N/A` |
| IRSM_FILESYSTEM | EnumIntermediateResultSavingModeFileSystem | fileSystem | 0x02 | Saves intermediate results in file system. | [`FolderPath`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#folderpath)<br>[`RecordsetSizeOfLatestImages`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#recordsetsizeoflatestimages) |
| IRSM_BOTH | EnumIntermediateResultSavingModeBoth | both | 0x04 | Saves intermediate results using IRSM_MEMORY and IRSM_FILESYSTEM. | [`FolderPath`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#folderpath) |
| IRSM_REFERENCE_MEMORY | EnumIntermediateResultSavingModeReferenceMemory | referenceMemory | 0x08 | Saves intermediate results in memory with internal data format. | [`FolderPath`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#folderpath)<br>[`RecordsetSizeOfLatestImages`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#recordsetsizeoflatestimages) |

## IntermediateResultType

Describes the intermediate result type.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultType` |
| .Net | `enum Dynamsoft.DBR.EnumIntermediateResultType` |
| JavaScript | `Dynamsoft.EnumIntermediateResultType` |
| Python | `class EnumIntermediateResultType(IntEnum)` |
| Java / Android | `class EnumIntermediateResultType` |
| ObjC / Swift | `enum EnumIntermediateResultType` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| IRT_NO_RESULT | EnumIntermediateResultTypeNoResult | noResult | 0x00 | No intermediate result |
| IRT_ORIGINAL_IMAGE | EnumIntermediateResultTypeOriginalImage | originalImage | 0x01 | Original image |
| IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultTypeColourClusteredImage | colourClusteredImage | 0x02 | Colour clustered image **(not supported yet)** |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE | EnumIntermediateResultTypeColourConvertedGrayScaleImage | colourConvertedGrayScaleImage | 0x04 | Colour image converted to grayscale |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE | EnumIntermediateResultTypeTransformedGrayScaleImage | transformedGrayScaleImage | 0x08 | Transformed grayscale image |
| IRT_PREDETECTED_REGION | EnumIntermediateResultTypePredetectedRegion | predetectedRegion | 0x10 | Predetected region |
| IRT_PREPROCESSED_IMAGE | EnumIntermediateResultTypePreprocessedImage | preprocessedImage | 0x20 | Preprocessed image |
| IRT_BINARIZED_IMAGE | EnumIntermediateResultTypeBinarizedImage | binarizedImage | 0x40 | Binarized image |
| IRT_TEXT_ZONE | EnumIntermediateResultTypeTextZone | textZone | 0x80 | Text zone |
| IRT_CONTOUR | EnumIntermediateResultTypeContour | contour | 0x100 | Contour |
| IRT_LINE_SEGMENT | EnumIntermediateResultTypeLineSegment | lineSegment | 0x200 | Line segment |
| IRT_FORM | EnumIntermediateResultTypeForm | form | 0x400 | Form **(not supported yet)** |
| IRT_SEGMENTATION_BLOCK | EnumIntermediateResultTypeSegmentationBlock | segmentationBlock | 0x800 | Segmentation block **(not supported yet)** |
| IRT_TYPED_BARCODE_ZONE | EnumIntermediateResultTypeTypedBarcodeZone | barcodeZone | 0x1000 | Typed barcode zone |
| IRT_PREDETECTED_QUADRILATERAL | EnumIntermediateResultTypePredetectedQuadrilateral | predetectedQuadrilateral | 0x2000  | Predetected quadrilateral |

## ResultCoordinateType

Describes the result coordinate type.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultCoordinateType` |
| .Net | `enum Dynamsoft.EnumResultCoordinateType` |
| JavaScript | `Dynamsoft.EnumResultCoordinateType` |
| Python | `class EnumResultCoordinateType(IntEnum)` |
| Java / Android | `class EnumResultCoordinateType` |
| ObjC / Swift | `enum EnumResultCoordinateType` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| RCT_PIXEL | EnumResultCoordinateTypePixel | pixel | 0x01 | Returns the coordinate in pixel value. |
| RCT_PERCENTAGE | EnumResultCoordinateTypePercentage | percentage | 0x02 | Returns the coordinate as a percentage. |

## ResultType

Describes the extended result type.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultType` |
| .Net | `enum Dynamsoft.EnumResultType` |
| JavaScript | `Dynamsoft.EnumResultType` |
| Python | `class EnumResultType(IntEnum)` |
| Java / Android | `class EnumResultType` |
| ObjC / Swift | `enum EnumResultType` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| RT_STANDARD_TEXT | EnumResultTypeStandardText | standardText | 0 | Specifies the standard text. This means the barcode value. |
| RT_RAW_TEXT | EnumResultTypeRawText | rawText | 1 | Specifies the raw text. This means the text that includes start/stop characters, check digits, etc. |
| RT_CANDIDATE_TEXT | EnumResultTypeCandidateText | candidateText | 2 | Specifies all the candidate text. This means all the standard text results decoded from the barcode. |
| RT_PARTIAL_TEXT | EnumResultTypePartialText | partialText | 3 | Specifies the partial text. This means part of the text result decoded from the barcode. |

## TextResultOrderMode

Describes the text result order mode.

### Declarations

| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextResultOrderMode` |
| .Net | `enum Dynamsoft.DBR.EnumTextResultOrderMode` |
| JavaScript | `Dynamsoft.EnumTextResultOrderMode` |
| Python | `class EnumTextResultOrderMode(IntEnum)` |
| Java / Android | `class EnumTextResultOrderMode` |
| ObjC / Swift | `enum EnumTextResultOrderMode` |

### Members

| Member (except ObjC/Swift) | Member (ObjC) |  Member (Swift) | Value | Description |
| -------------------------- | ------------- | --------------- | ----- | ----------- |
| TROM_SKIP | EnumTextResultOrderModeSkip | skip | 0x00 | Skips the result ordering operation. |
| TROM_CONFIDENCE | EnumTextResultOrderModeConfidence | confidence | 0x01 | Returns the text results in descending order by confidence. |
| TROM_POSITION | EnumTextResultOrderModePosition | position | 0x02 | Returns the text results in position order, from top to bottom, then left to right. |
| TROM_FORMAT | EnumTextResultOrderModeFormat | format | 0x04 | Returns the text results in alphabetical and numerical order by barcode format string. |
