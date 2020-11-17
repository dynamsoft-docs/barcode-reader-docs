---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - Global Interfaces
description: This page shows Global Interfaces of Dynamsoft Barcode Reader JavaScript SDK.
keywords: BarcodeReaderException, FurtherModes, LocalizationResult, RegionDefinition, RuntimeSettings, TextResult, global interfaces, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - Global Interfaces

| Interface            | Description |
|----------------------|-------------|
| [`BarcodeReaderException`](#barcodereaderexception) | Exceptions raised for Barcode Reader errors. |
| [`FurtherModes`](#furthermodes) | Stores additional modes. |
| [`LocalizationResult`](#localizationresult) | Stores the localization result of the detected barcode. |
| [`RegionDefinition`](#regiondefinition) | Stores the barcode region information.|  
| [`RuntimeSettings`](#runtimesettings) | Stores the barcode reading runtime settings. | 
| [`TextResult`](#textresult) | Stores the decoded barcode text results. | 

---

## BarcodeReaderException

Exceptions raised for Barcode Reader errors. 

### Properties

| Property           | Type | Description |
|----------------------|------|-------------|
| `Error` | *ErrorConstructor* |  | 
| `code`<sub>optional</sub> | [`EnumErrorCode`]({{ site.enumerations }}error-code.html) | The error code. | 
| `message` | *string* | Error message describing the current exception inherited from `Error.message`. | 
| `name` | *string* | Error name of the current exception inherited from `Error.name`. | 
| `stack`<sub>optional</sub> | *string* | Call stack at the time the current exception was thrown inherited from `Error.stack`. | 

## FurtherModes

Stores the FurtherModes.

### Properties

| Property           | Type | Description |
|----------------------|------|-------------|
| `accompanyingTextRecognitionModes` | [*`AccompanyingTextRecognitionMode`*]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) | Sets the mode and priority to recognize accompanying text. **Currently unsupported.** | 
| `barcodeColourModes` | [*`BarcodeColourMode`*]({{ site.enumerations }}parameter-mode-enums.html#barcodecolourmode) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. | 
| `barcodeComplementModes` | [*`BarcodeComplementMode`*]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) | Sets the mode and priority to complement the missing parts in the barcode. | 
| `colourClusteringModes` | [*`ColourClusteringMode`*]({{ site.enumerations }}parameter-mode-enums.html#colourclusteringmode) | Sets the mode and priority for colour categorization. | 
| `colourConversionModes` | [*`ColourConversionMode`*]({{ site.enumerations }}parameter-mode-enums.html#colourconversionmode) | Sets the mode and priority for converting a colour image to a grayscale image. | 
| `deformationResistingModes` | [*`DeformationResistingMode`*]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) | Sets the mode and priority for deformation resisting. | 
| `dpmCodeReadingModes` | [*`DPMCodeReadingMode`*]({{ site.enumerations }}parameter-mode-enums.html#dpmcodereadingmode) | Sets the mode and priority for DPM code reading. | 
| `grayscaleTransformationModes` | [*`GrayscaleTransformationMode`*]({{ site.enumerations }}parameter-mode-enums.html#grayscaletransformationmode) | Sets the mode and priority for the grayscale image conversion. | 
| `imagePreprocessingModes` | [*`ImagePreprocessingMode`*]({{ site.enumerations }}parameter-mode-enums.html#imagepreprocessingmode) | Sets the mode and priority for image preprocessing algorithms. | 
| `regionPredetectionModes` | [*`RegionPredetectionMode`*]({{ site.enumerations }}parameter-mode-enums.html#regionpredetectionmode) | Sets the region pre-detection mode for barcodes search. | 
| `textAssistedCorrectionMode` | [*`TextAssistedCorrectionMode`*]({{ site.enumerations }}parameter-mode-enums.html#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. | 
| `textFilterModes` | [*`TextFilterMode`*]({{ site.enumerations }}parameter-mode-enums.html#textfiltermode) | Sets the mode and priority for text filter. | 
| `textureDetectionModes` | [*`TextureDetectionMode`*]({{ site.enumerations }}parameter-mode-enums.html#texturedetectionmode) | Sets the mode and priority for texture detection. | 

## LocalizationResult

Stores the localization result of the detected barcode.

### Properties

| Property         | Type | Description |
|------------------|------|-------------|
| angle | *number* | The angle of a barcode. Values range from 0 to 360. | 
| x1 | *number* | The X coordinate of the left-most point. |
| x2 | *number* | The X coordinate of the second point in a clockwise direction. |
| x3 | *number* | The X coordinate of the third point in a clockwise direction. |
| x4 | *number* | The X coordinate of the fourth point in a clockwise direction. |
| y1 | *number* | The Y coordinate of the left-most point. |
| y2 | *number* | The Y coordinate of the second point in a clockwise direction. |
| y3 | *number* | The Y coordinate of the third point in a clockwise direction. |
| y4 | *number* | The Y coordinate of the fourth point in a clockwise direction. |


#### :+1: Tips and Tricks

* The left-most corner of the barcode is the starting point (x1, y1). The following corner points (x2, y2), (x3, y3), (x4, y4) will be returned in the clockwise direction.

![Barcode coordinates](assets/global-interfaces/DWT_BarcodeSample.png)

## RegionDefinition

Stores the region information.

### Properties

| Property           | Type | Default Value | Description |
|--------------------|------|---------------|-------------|
| `regionBottom` | *number* | `0` | The bottom-most coordinate or percentage of the region. | 
| `regionLeft` | *number* | `0` | The left-most coordinate or percentage of the region. | 
| `regionRight` | *number* | `0` | The right-most coordinate or percentage of the region. | 
| `regionTop` | *number* | `0` | The top-most coordinate or percentage of the region. | 
| `regionMeasuredByPercentage` | *number \| boolean* | `0` | Set measure of region by percentage or coordinate. <br/>`0` by coordinate <br/>`1` by percentage| 

## RuntimeSettings

Stores the barcode reading runtime settings. These settings control the barcode recognition process.  

### Properties

| Property           | Type | Default Value | Description |
|--------------------|------|---------------|-------------|
| [`barcodeFormatIds`]({{ site.enumerations }}format-enums.html#barcodeformat) | *number* | `BF_ALL (-32505857)` | The selected barcode formats to be read from group 1 of 2. |
| [`barcodeFormatIds_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) | *number* | `BF2_NULL (0)` | The selected barcode formats to be read from group 2 of 2.  |
| `binarizationModes` | [`EnumBinarizationMode[]`]({{ site.enumerations }}parameter-mode-enums.html#binarizationmode) | `[BM_LOCAL_BLOCK, BM_SKIP, BM_SKIP, BM_SKIP, BM_SKIP, BM_SKIP, BM_SKIP, BM_SKIP]` | The mode and priority for binarization. |
| `deblurLevel`<sup>[1](#1-tips-and-tricks)</sup> | *number* | `BarcodeReader`: `9` <br/>`BarcodeScanner`: `0` | The degree of blurriness of the barcode. <br/>Value range: `[0, 9]`|
| `expectedBarcodesCount`<sup>[2](#1-tips-and-tricks)</sup> | *number* | `BarcodeReader`: `512` <br/>`BarcodeScanner`: `0` | The number of barcodes expected to be detected for each image. <br/>Value range: `[0, 0x7fffffff]` |
| [`furtherModes`](#FurtherModes) | *strong* |  | Additional modes. |
| `intermediateResultSavingMode` | [`EnumIntermediateResultSavingMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) | `IRSM_MEMORY (1)` | The mode for saving intermediate result. |
| `intermediateResultTypes` | [`EnumIntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) | `IRT_NO_RESULT (0)` | The types of intermediate result to be kept for further reference. |
| [`localizationModes`]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) | *number[]* | `BarcodeReader`: `[LM_CONNECTED_BLOCKS, LM_SCAN_DIRECTLY, LM_STATISTICS, LM_LINES, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP]`<br/>`BarcodeScanner`: `[LM_CONNECTED_BLOCKS, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP, LM_SKIP]` | The mode and priority for localization algorithms. |
| `minBarcodeTextLength`<sup>[3](#1-tips-and-tricks)</sup> | *number* | `0` | The range of barcode text length for barcodes search. <br/>Value range: `[0, 0x7fffffff]`|
| `minResultConfidence`<sup>[4](#1-tips-and-tricks)</sup> | *number* | `0` | The minimum confidence of the result. <br/>Value range: `[0, 100]`|
| `region` | [`RegionDefinition`](#RegionDefinition) |  | The barcode region definition.  |
| [`resultCoordinateType`]({{ site.enumerations }}result-enums.html#resultcoordinatetype) | *number* | `RCT_PIXEL (1)` | The format for the coordinates returned. |
| `returnBarcodeZoneClarity` | *number* | `0` | Whether to report the clarity of the barcode zone. <br/>Value range: `[0, 1]`|
| `scaleDownThreshold`<sup>[5](#1-tips-and-tricks)</sup> | *number* | `BarcodeReader`: `100000`<br/>`BarcodeScanner`: `2300` | The threshold for the image shrinking. <br/>Value range: `[512, 0x7fffffff]` |
| `scaleUpModes` | [`EnumScaleUpMode[]`]({{ site.enumerations }}parameter-mode-enums.html#scaleupmode) | `[SUM_AUTO, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP, SUM_SKIP]` | The mode and priority to control the sampling methods of scale-up for linear barcode with small module sizes. |
| `terminatePhase`<sup>[6](#1-tips-and-tricks)</sup> | [`EnumTerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) | `TP_BARCODE_RECOGNIZED (32)` | The phase where the algorithm stops. |
| `textResultOrderModes` | [`EnumTextResultOrderMode[]`]({{ site.enumerations }}result-enums.html#textresultordermode) | `[TROM_CONFIDENCE, TROM_POSITION, TROM_FORMAT, TROM_SKIP, TROM_SKIP, TROM_SKIP, TROM_SKIP, TROM_SKIP]` | The mode and priority for the order of the text results returned. |
| `timeout` | *number* | `BarcodeReader`: `100000` <br/>`BarcodeScanner`: `10000` | The maximum amount of time measured in ms to be spent searching for a barcode per page. It does not include the time taken to load/decode an image from disk into memory. <br/>Value range: `[0, 0x7fffffff]` |

#### :+1: Tips and Tricks 

* `1` : If you have a blurry image, you can set `deblurLevel` to a larger value. The higher the value, the more effort the library will spend to decode images, but it may also slow down the recognition process. 

* `2` : Setting `expectedBarcodesCount` to `0` represents an "unknown" count and the library will try to find *at least* one barcode. `1` will result in trying to find exactly one barcode. Once a barcode is found, the library will stop the localization process and perform barcode decoding. `n` means the library will try to find `n` barcodes. If the library only finds `m` where `m < n` barcode(s), it will try a different [localization algorithm]({{ site.enumerations }}parameter-mode-enums.html#localizationmode) until `n` barcodes are located, or all algorithms are tried. 

* `3` : `0` means no limitation on the barcode text length.

* `4` : `0` means no limitation on the result confidence.

* `5` : If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

* `6` : When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.

* `coverage` is the default setting for `BarcodeReader` and `speed` for `BarcodeScanner`. See [`updateRuntimeSettings`](BarcodeReader/methods/parameter-and-runtime-settings.md#updateRuntimeSettings)

## TextResult

Stores the decoded barcode text results.

### Properties

| Property           | Type | Description |
|----------------------|------|-------------|
| `barcodeBytes` | *number[]* | Barcode result content in a byte array. | 
| `barcodeFormat` | *number* \| [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) | The barcode format. | 
| `barcodeFormatString` | *string* | Barcode type as a string. | 
| `barcodeText` | *string* | The barcode result text. | 
| `localizationResult` | [`LocalizationResult`](#localizationresult) | The corresponding localization result. |