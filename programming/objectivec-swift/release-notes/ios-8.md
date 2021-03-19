---
layout: default-layout
title: Dynamsoft Barcode Reader for iOS SDK - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for iOS SDK v8.x.
keywords: release notes, ios, 
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for iOS SDK - 8.x

## 8.2 (03/17/2021)

### New

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`. 
- Added a new an attribute, `organizationID` (string) to `iDMLTSConnectionParameters`. The attribute adds a new layer of security for both full and trial licenses.

### Improved

- Improved both the localization and decoding algorithms for Postal Codes. 
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.

### Fixed

- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

## 8.1.2 (01/22/2021)

### New

- Added `mode`, `page`, `totalPage` and `parityData` in the `iQRCodeDetails` Class.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `barcodeText` when using a valid trial license.

### Fixed

- Fixed a bug where `barcodeFormatString`, `barcodeFormatString_2`, `regionName` and `documentName` don't have value in the `IRT_TYPED_BARCODE_ZONE` intermediate result.


## 8.1 (01/12/2021)

### New

- Added support for MSI Code (Modified Plessey).
- Added a new member `barcodeZoneMinDistanceToImageBorders` in the `iPublicRuntimeSettings` Class to set the minimum distance (in pixels) between barcode zone and image borders. Previously, it is only available in the JSON template. It can be now configured by setting `iPublicRuntimeSettings` -> `barcodeZoneMinDistanceToImageBorders`.
- Added exception error message to `iTextResult` when license initialization fails or decoding authorization fails.

### Improved

- Improved the localization robustness for QR Code.
- Improved the localization for low quality 1D barcodes.
- Improved the deblurring performance and recognition rate for DataMatrix. 
- Improved the recognition rate for Aztec.

### Fixed

- Fixed a bug where Micro PDF417 may not be localized in multiple-barcode scenarios.
- Fixed a bug where the `ExpectedBarcodesCount` and `BarcodeFormat` parameters do not work in the `RegionDefinition`.

## 8.0 (11/17/2020)

### New

- (For IntermediateResult Advanced Module) Added support for decoding IntermediateResult. For example, users with a binarized image could use this function to skip some image preprocessing steps.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage. 
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone’s range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.

### Improved

- Improved the localization speed for the ScanDirectly mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.

### Feature Deprecated

- DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.
