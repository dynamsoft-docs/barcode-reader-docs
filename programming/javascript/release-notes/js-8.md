---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript SDK - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for JavaScript SDK v8.x.
keywords: release notes, javascript
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for JavaScript SDK - 8.x

## 8.1.2 (01/22/2021)

### New

- Added `mode`, `page`, `totalPage` and `parityData` in the `QRCodeDetails` Class.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `barcodeText` when using a valid trial license.
- Included native C++ DLL files in the .NET assembly files, so users don't need to manually copy these files to the specific folder.

### Fixed

- Fixed a bug where `barcodeFormatString`, `barcodeFormatString_2`, `regionName` and `documentName` don't have value in the `IRT_TYPED_BARCODE_ZONE` intermediate result.


## 8.1 (01/19/2021)

### New 
 
- Added support for MSI Code (Modified Plessey). 
- Added a new member `BarcodeZoneMinDistanceToImageBorders` in the `PublicRuntimeSettings` struct to set the minimum distance (in pixels) between barcode zone and image borders.
- Added exception error message to `TextResult` when license initialization fails or decoding authorization fails.
 
### Improved
 
- Improved the localization robustness for QR Code.
- Improved the localization for low quality 1D barcodes.
- Improved the deblurring performance and recognition rate for DataMatrix.
- Improved the recognition rate for Aztec.
- Improved runtime setting presets to use `BarcodeZoneMinDistanceToImageBorders`.
 
### Fixed
 
- Fixed a bug where Micro PDF417 may not be localized in multiple-barcode scenarios.
- Fixed a bug where the `ExpectedBarcodesCount` and `BarcodeFormat` parameters do not work in the `RegionDefinition`.
- Fixed a memory issue in iOS Safari caused by enabling sound.
- Fixed an issue with UTF-8 character encoding.

## 8.0 (11/25/2020)

### New

- Added support for decoding barcodes from an existing video stream.
- Introduced new namespace `Dynamsoft.DBR`.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage.
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone’s range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.

### Improved

- Changed the default runtime preset setting of `BarcodeScanner` from `speed` to `single`.
- Improved the localization speed for the `ScanDirectly` mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.

### Fixed


### Feature Deprecated
- `DeblurLevel` is now deprecated. It still works in this version but could be removed in the near future. We recommend using `DeblurModes` instead.
