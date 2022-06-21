---
layout: default-layout
title: Dynamsoft Barcode Reader SDK - Release Notes
description: This is the release notes page of Dynamsoft Barcode Reader.
keywords: release notes
needGenerateH3Content: false
---

# Release Notes

## 9.2

> First released: 06-07-2022

### Highlights

{%- include release-notes/product-highlight-9.2.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 9.2.0 | [C](../programming/c/release-notes/c-9.md#920-06072022) / [C++](../programming/cplusplus/release-notes/cpp-9.md#920-06072022) / [DotNet](../programming/dotnet/release-notes/dotnet-9.md#920-06072022) / [Java](../programming/java/release-notes/java-9.md#920-06072022) / [Python](../programming/python/release-notes/python-9.md#920-06212022) |

## 9.0

> First released: 03-15-2022

### Highlights

{%- include release-notes/product-highlight-9.0.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 9.0.2 | [JavaScript](../programming/javascript/release-notes/js-9.md#902-05062022) / [Android](../programming/android/release-notes/android-9.md#902-05262022) / [iOS](../programming/objectivec-swift/release-notes/ios-9.md#902-05262022) |
| 9.0.1 | [JavaScript](../programming/javascript/release-notes/js-9.md#901-04252022) / [Android](../programming/android/release-notes/android-9.md#901-04202022) / [iOS](../programming/objectivec-swift/release-notes/ios-9.md#901-04202022) |
| 9.0.0 | [JavaScript](../programming/javascript/release-notes/js-9.md#900-03242022) / [C](../programming/c/release-notes/c-9.md#900-03152022) / [C++](../programming/cplusplus/release-notes/cpp-9.md#900-03152022) / [DotNet](../programming/dotnet/release-notes/dotnet-9.md#900-03152022) / [Python](../programming/python/release-notes/python-9.md#900-03312022) / [Java](../programming/java/release-notes/java-9.md#900-03152022) / [Android](../programming/android/release-notes/android-9.md#900-03222022) / [iOS](../programming/objectivec-swift/release-notes/ios-9.md#900-03222022) |

## 8.9

> First released: 12-16-2021

### Highlights

{%- include release-notes/product-highlight-8.9.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.9.3 | [Android](../programming/android/release-notes/android-8.md#893-03022022) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#893-03022022) |
| 8.9.1 | [Android](../programming/android/release-notes/android-8.md#891-12282021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#891-12282021) |
| 8.9.0 | [Android](../programming/android/release-notes/android-8.md#890-12162021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#890-12162021) |

## 8.8

> First released: 10-12-2021

### Highlights

{%- include release-notes/product-highlight-8.8.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.8.7 | [JavaScript](../programming/javascript/release-notes/js-8.md#887-01262022) |
| 8.8.5 | [JavaScript](../programming/javascript/release-notes/js-8.md#885-01262022) |
| 8.8.3 | [JavaScript](../programming/javascript/release-notes/js-8.md#883-10292021) |
| 8.8.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#880-10282021) / [C](../programming/c/release-notes/c-8.md#880-10122021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#880-10122021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#880-10122021) / [Python](../programming/python/release-notes/python-8.md#880-10222021) / [Java](../programming/java/release-notes/java-8.md#880-10122021) / [Android](../programming/android/release-notes/android-8.md#880-10192021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#880-10192021) |

## 8.6

> First released: 07-15-2021

### Highlights

{%- include release-notes/product-highlight-8.6.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.6.3 | [JavaScript](../programming/javascript/release-notes/js-8.md#863-09302021) |
| 8.6.1 | [JavaScript](../programming/javascript/release-notes/js-8.md#861-09012021) |
| 8.6.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#860-08312021) / [C](../programming/c/release-notes/c-8.md#860-07152021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#860-07152021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#860-07152021) / [Python](../programming/python/release-notes/python-8.md#860-07202021) / [Java](../programming/java/release-notes/java-8.md#860-07152021) / [Android](../programming/android/release-notes/android-8.md#860-07152021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#860-07152021) |

## 8.4

> First released: 06-08-2021

### Highlights

- Added a new method [`GetIdleInstancesCount`]({{site.c_methods}}license.html#dbr_getidleinstancescount) to return the number of available instances when using the 'per concurrent instance' licensing model.
- Added the [`organizationID`]({{site.structs}}DMLTSConnectionParameters.html#organizationid) property for license authentication.
- Added new attributes [`isMirrored`]({{site.structs}}TextResult.html#ismirrored) to the `TextResult` class. `IsMirrored` returns whether the barcode is mirrored.
- Added a new argument, `ThresholdCompensation`, to the `BinarizationModes` mode arguments.
- Faster recognition speeds when detecting dense QR Codes.
- Improved the performance of boundary identification for DataMatrix codes.
- `ThreshValueCoefficient` is now deprecated. It still works in this version but could be removed in the near future. We recommend using ThresholdCompensation instead.
- Fixed an issue that happens when calling initLicenseFromLTS if [`handShakeCode`]({{site.structs}}DMLTSConnectionParameters.html#handshakecode) is not set.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.4.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#840-06292021) / [C](../programming/c/release-notes/c-8.md#840-06082021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#840-06082021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#840-06082021) / [Python](../programming/python/release-notes/python-8.md#840-06102021) / [Java](../programming/java/release-notes/java-8.md#840-06082021) / [Android](../programming/android/release-notes/android-8.md#840-06082021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#840-06082021) |

## 8.2

> First released: 03-17-2021

### Highlights

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`.
- Improved both the localization and decoding algorithms for Postal Codes.
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.
- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.2.5 | [JavaScript](../programming/javascript/release-notes/js-8.md#825-05182021) |
| 8.2.3 | [JavaScript](../programming/javascript/release-notes/js-8.md#823-04152021) |
| 8.2.1 | [JavaScript](../programming/javascript/release-notes/js-8.md#821-03292021) / [Android](../programming/android/release-notes/android-8.md#821-05272021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#821-05272021) |
| 8.2.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#820-03172021) / [C](../programming/c/release-notes/c-8.md#820-03172021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#820-03172021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#820-03172021) / [Python](../programming/python/release-notes/python-8.md#820-03172021) / [Java](../programming/java/release-notes/java-8.md#820-03172021) / [Android](../programming/android/release-notes/android-8.md#820-03172021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#820-03172021) |

## 8.1

> First released: 01-22-2021

### Highlights

- Added support for MSI Code (Modified Plessey).
- Added a new member `barcodeZoneMinDistanceToImageBorders` in the `PublicRuntimeSettings` struct to set the minimum distance (in pixels) between barcode zone and image borders. Previously, it is only available in the JSON template. It can be now configured by setting the struct `PublicRuntimeSettings` -> `barcodeZoneMinDistanceToImageBorders`.
- Added exception error message to `TextResult` when license initialization fails or decoding authorization fails.
- Improved the localization robustness for QR Code.
- Improved the localization for low-quality 1D barcodes.
- Improved the deblurring performance and recognition rate for DataMatrix.
- Improved the recognition rate for Aztec.
- Fixed a bug where Micro PDF417 may not be localized in multiple-barcode scenarios.
- Fixed a bug where the `ExpectedBarcodesCount` and `BarcodeFormat` parameters do not work in the `RegionDefinition`.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.1.3 | [JavaScript](../programming/javascript/release-notes/js-8.md#813-03042021) |
| 8.1.2 | [JavaScript](../programming/javascript/release-notes/js-8.md#812-01222021) / [C](../programming/c/release-notes/c-8.md#812-01222021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#812-01222021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#812-01222021) / [Python](../programming/python/release-notes/python-8.md#812-01222021) / [Java](../programming/java/release-notes/java-8.md#812-01222021) / [Android](../programming/android/release-notes/android-8.md#812-01222021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#812-01222021) |
| 8.1.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#810-01192021) / [C](../programming/c/release-notes/c-8.md#810-01122021) / [C++](../programming/cplusplus/release-notes/cpp-8.md#810-01122021) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#810-01122021) / [Python](../programming/python/release-notes/python-8.md#810-01192021) / [Java](../programming/java/release-notes/java-8.md#810-01122021) / [Android](../programming/android/release-notes/android-8.md#810-01122021) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#810-01122021) |

## 8.0

> First released: 11-17-2020

### Highlights

- Implemented the mechanism of loading libraries dynamically at runtime when [Parameter Mode Enumerations]({{ site.enumerations }}parameter-mode-enums.html) are used (except *_AUTO and *_SKIP). Use LibraryFileName and LibraryParameters to configure.
- (For IntermediateResult Advanced Module) Added support for decoding IntermediateResult. For example, users with a binarized image could use this function to skip some image preprocessing steps.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage. 
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone’s range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.
- Improved the localization speed for the ScanDirectly mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.
- Fixed a crash issue that could happen when conflicts occur on Linux.
- `DeblurLevel` is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.0.0.1 | [Python](../programming/python/release-notes/python-8.md#8001-01062021) |
| 8.0.0 | [JavaScript](../programming/javascript/release-notes/js-8.md#800-11252020) / [C](../programming/c/release-notes/c-8.md#800-11172020) / [C++](../programming/cplusplus/release-notes/cpp-8.md#800-11172020) / [DotNet](../programming/dotnet/release-notes/dotnet-8.md#800-11172020) / [Python](../programming/python/release-notes/python-8.md#800-11262020) / [Java](../programming/java/release-notes/java-8.md#800-11172020) / [Android](../programming/android/release-notes/android-8.md#800-11172020) / [iOS](../programming/objectivec-swift/release-notes/ios-8.md#800-11172020) |

&nbsp;

<div class="fold-panel-prefix"></div>

## 7.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 07-11-2019

### 7.6.0

#### NEW

- Added a new member rpmColourArgumentIndex in the struct IntermediateResult. The rpmColourArgumentIndex is the index of ForeAndBackgroundColour argument used for RegionPredetectionMode.

#### IMPROVED

- Improved the decoding speed for when ScanDirectly mode is enabled for localization.
- Improved the decoding speed by utilizing SIMD (single instruction, multiple data).
- Improved the deblurring algorithm for linear barcodes.

#### FIXED

- Fixed a bug where the coordinates of barcodes are calculated incorrectly under some situations.
- Fixed a crash issue which occurs under some situations.

### 7.5.0

#### NEW

- Added support for QR Code Model 1 (an older version of the QR Code specification). It can be enabled by setting FormatSpecification.EnableQRCodeModel1 in the JSON template file.
- Added a new localization mode LM_CENTRE to localize barcodes from the centre, which can improve the localization speed if the barcode is in the centre of the image. It can be enabled by setting the struct PublicRuntimeSettings -> LocalizationModes -> LM_CENTRE.
- Added a new binarization mode BM_THRESHOLD to set the BinarizationThreshold value which is used to convert the grayscale image to binary image.
- Added startPatternRange, middlePatternRange and endPatternRange properties to the struct OneDCodeDetails for UPC_A, UPC_E, EAN_8 and EAN_13 codes.
- Added the following new arguments for RegionPredetectionMode.RPM_GENERAL_RGB_CONTRAST and RegionPredetectionMode.RPM_GENERAL_GRAY_CONTRAST:
  - RelativeBarcodeRegions: Sets the barcode regions relative to the pre-detected region.
  - ForeAndBackgroundColours: Specifies a set (or multiple sets) of the foreground and background colours used for region pre-detection algorithm.
  - AspectRatioRange: Sets the height range of the bounding rectangle of the pre-detected region.
  - HeightRange: Sets the width range of the bounding rectangle of the pre-detected region.
  - WidthRange: Sets the aspect ratio range of the bounding rectangle of the pre-detected region.

#### IMPROVED

- Optimized the binarization process for 1D barcode zones.
- Improved the decoding accuracy for 1D barcodes.
- Improved the decoding speed by 5%-20%.
- Improved the decoding accuracy for Data Matrix code with broken finder pattern.

#### FIXED

- Fixed a bug where the coordinates of barcodes are calculated incorrectly under some situations.

### 7.4.0.1

[JavaScript](../programming/javascript/release-notes/js-7.md#7401-05182020)

### 7.4.0

#### NEW

- Added new barcode format support for DotCode.
- Added relative ROI (Region of Interest) detection to optimize the localization results in the high colour contrasted scenarios.
- Added a new type of output IRT_PREDETECTED_QUADRILATERAL, to identify regions with user-define HSV colour space.
- Implemented a feature for recognizing distorted DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> furtherMode -> DeformationResistingModes.
- Added an optimized decoding method for linear barcodes in vector PDF files. The vector PDF file can be decoded without rasterizing, increase decoding efficiency.
- Added two Enumerations for FrameDecodingParameters: ClarityCalculationMethod and ClarityFilterMode, to improve input image quality.
- Added a new image pre-processing mode IPM_MORPHOLOGY for barcodes with wide data bar or data cell gaps.

#### IMPROVED

- Enhanced QR Code deformation, resistance, to improve the success rate of decoding the QR code with square symbol at the center.
- Optimized the algorithm for decoding large and dense QR and DataMatrix codes.
- Optimized deblurring algorithm for linear barcodes.
- Improved a character display issue on some platforms where BarcodeText returns an extra "\uFEFF" if the barcode is encoded in UTF-8 with BOM (Byte Order Mark).
- Simplified the process to enable DPM, DotCode and Postal Codes. Now the library will automatically turn on the corresponding localization mode while following settings are applied:
  - DPMCRM_GENEARL
  - BF2_DOTCODE
  - BF2_POSTALCODE

#### FIXED

- Fixed a bug where the BinarizationModes settings do not work in the DPM mode.
- Fixed a bug where the barcode location returns incorrect when the barcode is close to the border of the scanning region.
- Fixed a bug in the calculation of deblur confidence.
- Fixed a bug where the ColourConversionModes RGB weights setting does not work when CICM_GENERAL is enabled.
- Other small fixes and tweaks.

### 7.3.0.4

[JavaScript](../programming/javascript/release-notes/js-7.md#730-v4-7304-04022020)

### 7.3.0.2

[JavaScript](../programming/javascript/release-notes/js-7.md#730-v2-7302-02142020)

### 7.3.0.1

[JavaScript](../programming/javascript/release-notes/js-7.md#730-v1-7301-01202020)

### 7.3.0

#### NEW

- Added a new barcode type Postal codes including USPS Intelligent Mail, Postnet, Planet, Australia Post barcode, RM4SCC.
- Added a new localization mode LM_STATISTICS_POSTAL_CODE in the struct PublicRuntimeSettings -> LocalizationModes to recognize Postal codes.
- Added the capability to obtain accompanying texts at the top or bottom of a linear barcode. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> AccompanyingTextRecognitionModes.
- Implemented the feature of recognizing distorted QR barcode. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> DeformationResistingModes.
- Implemented the feature of complementing missing parts of QR Code & DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> BarcodeComplementModes.
- Added a new setting AutoFilter to set whether to filter frames automatically in the struct FrameDecodingParameters.
- Added a new setting ScaleUpModes to set the scale-up mode for linear barcodes with small module size. It can be enabled by turning on the struct PublicRuntimeSettings -> ScaleUpModes.

#### IMPROVED

- Improved the decoding accuracy for DataMatrix that has a narrow quiet zone.
- Improved the decoding accuracy for 1D barcode that has a small module size.

### 7.2.2

#### FIXED

- Fixed a bug where BarcodeBytes was null when DPM mode was enabled.

### 7.2.1

#### NEW

- Added support for GS1-128 barcode.
- Added a new argument "RecordsetSizeOfLatestImages" for "IntermediateResultSavingMode" to specify how many sets of intermediate results are kept in the library.

#### IMPROVED

- Improved the decoding capability of PDF417 by identifying the start and stop patterns of PDF417.
- Improved the deblurring performance for wide 1D barcodes, which lowers the possibility of fake results.
- Improved video decoding by optimizing frame filtering.
- Optimized the automatic classification for Code 39 and Code 39 Extended.
- Optimized the implementation of region pre-detection mode "RPM_GENERAL_GRAY_CONTRAST".
- Enhanced the recognition of barcodes with small module sizes.
- Changed ExtendedBarcodeFormatIds to BarcodeFormat_2 to support more barcode formats in the future.
- Improved the setting template inside every sample. For consistency, now every sample uses one of templates of "Best Coverage", "Balance" and "Best Speed".

#### FIXED

- Fixed a bug in the barcode zone type identification during general statistical localization.
- Fixed minor bugs in result outputs.
- Fixed a bug where OneDCodeDetails doesn't work.

### 7.2.0

#### NEW

- Added more barcode formats:
  - GS1 Databar (Omnidirectional, Truncated, Stacked, Stacked Omnidirectional, Limited, Expanded, Expanded Stacked)
  - PatchCode
  - Maxicode (mode 2-5)
  - Micro PDF417
  - Micro QR
  - GS1 COMPOSITE (combination of OneD and PDF417/Micro PDF 417)
  - Non-standard Barcode
- Added the capability of reading DPM code. It can be enabled by turning on the struct PublicRuntimeSettings->furtherMode-> DPMCodeReadingModes and adding LM_STATISTICS_MARKS to the PublicRuntimeSettings->localizationModes.
- Licensing is required to obtain the intermediate results, except the original image in the intermediate results.
- Added a parameter, clarity in the struct ExtendedResult, to show the clarity of the decoded-barcode zone.
- Added a method, DBR_GetModeArgument()/GetModeArgument(), to get the argument value of the mode parameters.

#### IMPROVED

- Improved the decoding speed for PDF417.
- Improved the capability of decoding QR and Data Matrix with cylinder-like deformation.

#### FIXED

- Fixed minor bugs

### 7.1.0

#### NEW

- Added automatic blurry frame filtering for the video frame decoding, reducing incorrect barcode recognition.
- Added three arguments for the CICM_GENERAL of ColourConversionModes to set the weights for the color conversion, providing more flexibility to deal with various kinds of backgrounds by using different weights of three colors: red, green and blue.
- Added a new struct FrameDecodingParameters, added methods DBR_InitFrameDecodingParameters()/InitFrameDecodingParameters(), and DBR_StartFrameDecodingEx()/StartFrameDecodingEx() to start a new thread to decode barcodes.

#### IMPROVED

- The output of intermediate results can be saved either directly to a folder or to memory or both, by introducing a new parameter, intermediateResultSavingMode, to the struct PublicRuntimeSettings.

#### FIXED

- Updated PDF component to v10.3.2.0806
- Fixed a bug that the deblur function might malfunction in some rare cases.
- Fixed a bug that the coordinates of barcodes may be calculated incorrectly under some situations.
- Fixed a bug that the parameter, RequireStartStopChars, might malfunction in some rare cases.
- Fixed a bug that the angle of barcodes might not be calculated correctly sometimes.

### 7.0.0

#### NEW

- Refactored most modules to provide a flexible barcode reading framework that allows for parameter customization suited for a variety of barcode scenarios.
- Enabled access to intermediate results (grayscale image, binarized image, text zone, etc) during the decoding process.
- Added new interfaces to support video decoding, and frame decoding to improve interactive sensitivity.
- Provided methods to terminate the decoding process at different phases such as during binarization, localization or barcode type identification.
- Added a new barcode localization method, Scan Directly, to reduce decoding time significantly for high-quality images.

#### IMPROVED

- Enhanced error messages related to the license initiation failure.
- Improved detailed results for decoded barcodes, including more barcode format specification.
- Improved results output to enable outputting barcode results in the order of confidence level, barcode position or format.

#### FIXED

- Fixed an issue where the barcode could be calculated incorrectly in some occasions.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 6.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 03-30-2018

### 6.5.3

#### FIXED

- Updated the license verification process for development license and desktop runtime license. The old license verification process may lead to license error on some computers.
- Small fixes and tweaks.

### 6.5.2

#### IMPROVED

- Optimized barcode reading workflow for QRCode/DataMatrix/Aztec code recognition. A QRCode/DataMatrix/Aztec barcode zone will be submitted to the deblurring process when its decoding results vary with different binarization arguments.
- Reduced the error rate of 1D barcode recognition. Giving more chances for confirmation of a 1D barcode decoding result whose confidence isn’t extreme high.
- Reduced the possibility of conflicts with neighbour barcodes. This improved the precision of the zone to be deleted when a barcode is recognized successfully.

#### FIXED

- Enhanced the robustness of the image processing algorithm. This resolved segmentation faults when a 0-size image is passed to our SDK or there are a few small-size barcode zones which need to do spatial transformation.

### 6.5.1

#### IMPROVED

- Improved deblur algorithm for OneD, enhancing the recognition rate for blurry/out-of-focus barcodes.
- Improved the accuracy of border location and symbol segmentation for AZTEC.
- Optimized line scanning algorithm for OneD, decreasing the computation load for character recognition.
- DecodeBuffer now supports 48-bit and 64-bit image data.

#### FIXED

- Small fixes and tweaks.

### 6.5.0

#### IMPROVED

- Improved average reading speed by 5-10%.
- Greatly improved the image-processing performance for blurry PDF417 codes.
- Improved decoding performance for blurry 1D, QRCode and DataMatrix codes.
- Decreased error recognition rate for Aztec codes.

#### FIXED

- Small fixes and tweaks.

### 6.4.1

#### IMPROVED

- Improved the decoding performance for Aztec, increasing the recognition rate.
- Improved the decoding performance for OneD, decreasing the error recognition rate.
- Added further check points for Timeouts, enhancing the timeout control on large scale images for decoding.

#### FIXED

- Small fixes and tweaks.

### 6.4.0

#### NEW

- Added a BatchDecode tool which helps developers evaluate the recognition performance and speed of the Dynamsoft Barcode Reader SDK.
- Added a new sample demonstrates how to use Dynamsoft Barcode Reader in multiple threads.

#### IMPROVED

- Improved barcode reading speed by 10%, especially for small-sized images.
- Reorganized API documentation to help you find content more easily.
- Simplified Developer's Guide to guide you through creating a HelloWorld project more quickly.

#### FIXED

- Small fixes and tweaks.

### 6.3.0

#### NEW

- Added the support for Aztec codes.
- New developer's guide (.pdf) to cover common use cases,and re-worked existing PDF content to improve its usability.
- New API documentation (.chm) to help you find content more easily.
- Added GetRuntimeSettings and UpdateRuntimeSettings to help you adjust runtime barcode reading settings.
- Added ResetRuntimeSettings to reset runtime barcode reading settings to default values.
- Added InitRuntimeSettingsWithString and InitRuntimeSettingsWithFile to initialize barcode reading settings at runtime.
- Added OutputSettingsToString and OutputSettingsToFile to review runtime barcode reading settings.
- Added AppendTplStringToRuntimeSettings and AppendTplFileToRuntimeSettings to append a new template string/file to the current runtime settings.

#### IMPROVED

- Improved the logic for ExpectedBarcodesCount. Previously the barcodes it returned may be greater than the given value of ExpectedBarcodesCount. Now as long as the expected barcodes found, it will stop continue searching and decoding barcodes.

#### FIXED

- Small fixes and tweaks.

### 6.2.0

#### IMPROVED

- Decreased misreading rate for 1D barcodes.
- Enhanced performance for reading multiple barcodes from an image.
- Greatly improved recognition rate for QR Code and DataMatrix on complicated backgrounds.
- Greatly improved recognition rate for barcodes on grid background.
- Optimized localization for PDF417 without enough quiet zone.

#### NEW RESOURCES

- New console samples – Decode Single Barcode, Decode Multi-Barcodes, Read Barcode from Region, Trigger Event after Decoding - are now available in the installer.

#### FIXED

- Small fixes and tweaks.

### 6.1.0

#### NEW

- Added GetTemplateSettings and SetTemplateSettings methods which allow you to review and adjust barcode reading settings at runtime.

#### IMPROVED

- Improved localization algorithm for barcodes rotated in a degree or with poor perspective.
- Faster read speed for QR, Data Matrix and PDF417 barcodes.

### 6.0.0

#### NEW

- Easy and flexible to create a custom barcode reading template for your specific use case.

#### IMPROVED

- Improved average reading speed by 50% in a four-core CPU environment.
- Improved the reading accuracy and speed for blurred QRCode and DataMatrix.
- Improved the speed for reading barcodes directly from a computer/phone screen.
- Improved reading speed for small barcodes in high-resolution images.

#### FIXED

- Small fixes and tweaks.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 5.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 03-07-2017

### 5.2.0

#### IMPROVED

- Improved the localization and recognition algorithms for PDF417 barcodes.
- Optimized the de-blur algorithm for 1D barcodes to improve the recognition accuracy.
- Optimized the timeout support. Now it is possible to stop barcode recognition by timeout.
- Increased QR Code and DataMatrix barcode recognition speed for B&W images.

#### FIXED

- Small fixes and tweaks.

### 5.1.0

#### FIXED

- Fixed a bug that caused incorrect result points if de-blur algorithm is used when reading 1D barcodes.
- Other small fixes and tweaks.

### 5.0.0

#### NEW

- New de-blur algorithm for 1D barcodes to improve the accuracy when scanning linear barcodes from out-of-focus, blurred images.
- New multi-thread processing to improve the scanning accuracy and speed of 1D and PDF417 barcodes.
- Added new APIs that enable you to specify page numbers, barcode regions, barcode width, barcode height, barcode module size and barcode angles for barcode detection. These greatly improve the decoding workflow and barcode reading efficiency.
- Added ImageCaptureDevice API to set the capture device (scanner, camera or fax) being used to scan barcode images. When set, it will use a better and more appropriate image processing technique to the images captured from that device.
- Added TimeoutPerPage API to set the maximum amount of time for reading barcodes on one page.
- Added BarcodeColorMode API to set the ink color for barcodes searching.
- Added BarcodeTextEncoding API to set barcode text encoding mode so that you can display special characters properly.
- Added ReturnUnrecognizedBarcode API to set whether to return unrecognized barcodes.
- Added LoadSetting API so that you can now load the settings to be used in recognizing barcodes from a JSON string.
- Added Angle API to set the angle ranges of barcodes for scanning.
- Added Angle property to return the rotation angle of a detected barcode.

#### IMPROVED

- Combined C and C++ header files into one to simplify the reference of the header file.

#### FIXED

- Fixed an issue where the DLL crashes when reading DataMatrix in multiple threads.
- Other small fixes and tweaks.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 4.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 11-03-2015

### 4.3.0

#### NEW

- New localization algorithm was implemented for 1D barcode scanning to improve barcode reading speed.
- New multi-thread processing was implemented for 2D barcode reading to improve decoding accuracy.

#### IMPROVED

- Improved recognition for perspective QR Codes.
- Optimized decoding performance for large size, special angle and multiple 1D barcodes.
- Improved sample applications to support Visual Studio 2015.
- Other small fixes and tweaks.

#### NEW RESOURCES

- New samples are now available in the Code Gallery:
- RESTful Web Service - implements server-side RESTful web service in C# for barcode reading.

### 4.2.0

#### IMPROVED

- Changed 1D barcode decoding module to improve recognition accuracy.
- Improved ResultPoints Property to adjust the sequence of barcode corner points. Now the top-left corner of the barcode is the starting point (x1, y1). The results are returned in the clockwise direction.
- Improved ResultPoints Property to adjust the sequence of barcode corner points.

### 4.1.0

#### NEW

- Added new APIs DecodeStream, DecodeStreamRect, DecodeBase64String and DecodeBase64StringRect for C, C++ DLL.
- Added Error Code -10022: "PDF Rasterizer DLL Missing".

#### IMPROVED

- Improved positioning algorithm to better identify and localize DataMatrix barcodes.

### 4.0.0

#### NEW

- Added support for reading PDF417 and DataMatrix.
- Added reading barcode from all types of PDF file.
- A user-friendly demo guide program – "Dynamsoft Barcode Reader SDK" - is now available. You can run it from the shortcut icon on the desktop and have an overall view of all demos & sample code.
- An out-of-box application - "Process documents with barcode" - is now available. It can rename, split or classify documents via barcodes on images and we provide overall view of all demos & sample code.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 3.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 08-13-2015

### 3.0.0

#### NEW

- Added 2D Barcode Reader to support reading QR Code.
- Added new APIs DBR_GetVersion and DBR_GetErrorString for the Windows Edition's C/C++ DLL.

#### IMPROVED

- Improved 1D Barcode Reader to support reading Industrial 2 of 5.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 2.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 05-12-2015

### 2.1.0

#### NEW

- Reading image format of GIF is supported.

#### IMPROVED

- Improved CODE128 decoding
- Improved recognition of CODE39, CODE93, etc.
- Improved the ASP.NET sample's user interface.

### 2.0.0

#### NEW

- Dynamsoft Barcode Reader is now made available as a standalone product, in addition to working as an add-on for Dynamic Web TWAIN and Dynamic .NET TWAIN SDKs.
- Windows Edition: provides C, C++, ActiveX / COM and .NET APIs
- Supported barcode types now include:
 Code39, Code128, Code93, Codabar, ITF, EAN13, EAN8, UPCA and UPCE
- Supported image formats include BMP, JPG, PNG, (single or multi-page) TIFF, Windows DIB and .NET Bitmap
- Various code samples (in C/C++/C#/Java/VB/VB.NET) are available.

&nbsp;

<div class="fold-panel-end"></div>

<div class="fold-panel-prefix"></div>

## 1.x Versions <i class="fa fa-caret-down"></i>

<div class="fold-panel-start"></div>

> First released: 01-20-2015

### 1.0.0

#### NEW

- Dynamsoft’s barcode recognition engine has been in existence since April 2012. It works as an add-on to our Dynamic Web TWAIN and Dynamic .NET TWAIN SDKs. In this new release, we are changing the product name to Dynamic Barcode Reader and the version to 1.0.
- Updates in this version include 1D barcode improvements in accuracy and performance for Code 39 and Code128 recognition. Also, image preprocessing is improved. For Code 128, the recognition ratio and speed have jumped up by as much as 30 percent.

<div class="fold-panel-end"></div>
