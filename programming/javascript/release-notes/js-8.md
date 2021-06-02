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

## 8.2.5 (05/18/2021)

### New

- Added property `organizationID` which can be used to fetch license(s) belonging to the specified organization from the License Tracking Server.
- Added a class name to the powered-by message element on the built-in UI so that it can be manipulated in CSS.

### Improved

- Removed redundant warning messages for duplicate barcodes.

### Fixed

- Fixed a bug with the API `bSaveOriCanvas` where the same canvas is reused resulting in duplicated original image for different barcodes.

## 8.2.3 (04/15/2021)

### New

- Added properties `bVibrateOnSuccessfulRead` and `vibrateDuration` to control the vibration of a device when barcodes are found.
- Added methods `showVideo()` and `decodeCurrentFrame()` to make it possible for users to show the video and manually trigger the decoding of a frame.
- Added a sample for [Vue 3](https://v3.vuejs.org/).

### Improved

- Optimized how the WASM files are created to make them smaller (18% smaller).
- When opening a camera takes too long and times out, an exception will be thrown.
- When the webpage in which a `BarcodeScanner` instance is running gets hidden (not visible to the user), the barcode scanning will stop automatically. Later when it becomes visible again, the scanning will resume automatically.

### Changed

- Added a "Powered by Dynamsoft" logo to the default Barcode Scanner UI.

## 8.2.1 (03/29/2021)

### Fixed

- Resolved a bug that returns the error as a Promise object instead of a string when calling the method loadWasm().

## 8.2 (03/17/2021)

### New

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`. 

### Improved

- Improved both the localization and decoding algorithms for Postal Codes. 
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.

### Fixed

- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

## 8.1.3 (03/04/2021)

### New

- Added support for SSR (Server-side Rendering) and 3 related samples for Nextjs, Nuxtjs and gatsby respectively.

### Fixed

- Fixed a bug where if `scanner.destroy()` is called before `scanner.show()` finishes, the camera will not be released.

## 8.1.2 (01/22/2021)

### New

- Added `mode`, `page`, `totalPage` and `parityData` in the `QRCodeDetails` Class.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `barcodeText` when using a valid trial license.
- Optimized memory usage when using WebGL for mapping color images into grayscale images which made the process faster. 

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
