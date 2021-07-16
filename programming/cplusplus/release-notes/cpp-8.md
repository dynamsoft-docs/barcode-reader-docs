---
layout: default-layout
title: Dynamsoft Barcode Reader for C++ - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for C++ v8.x.
keywords: release notes, cpp
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for C++ SDK - 8.x

## 8.6 (07/15/2021)

### New

- Added two DeblurMode Enumerations, `DM_BASED_ON_LOC_BIN` and `DM_SHARPENING_SMOOTHING`, to support more usage scenarios.
- Added methods `InitDLSConnectionParameters` and `InitLicenseFromDLS` in `CBarcodeReader` class to replace methods `InitLTSConnectionParameters` and `InitLicenseFromLTS`.
- Added class `DM_DLSConnectionParameters` to replace class `DM_LTSConnectionParameters`.

### Improved

- Improved the [`confidence`]({{site.android_api}}auxiliary-ExtendedResult.html#confidence) algorithm for 1D barcode results. Users can get even more accurate results by configuring the `confidence` filter.

## 8.4 (06/08/2021)

### New

- Added a new method [`GetIdleInstancesCount`]({{site.cpp_methods}}license.html#getidleinstancescount) to return the number of available instances when using the 'per concurrent instance' licensing model.
- Added the [`organizationID`]({{site.structs}}DMLTSConnectionParameters.html?src=cpp#organizationid) property for license authentication.
- Added new attributes [`isMirrored`]({{site.structs}}TextResult.html?src=cpp#ismirrored) to the `TextResult` class. `IsMirrored` returns whether the barcode is mirrored.
- Added a new argument, `ThresholdCompensation`, to the `BinarizationModes` mode arguments.

### Improved

- Faster recognition speeds when detecting dense QR Codes.
- Improved the performance of boundary identification for DataMatrix codes.

### Deprecated

- `ThreshValueCoefficient` is now deprecated. It still works in this version but could be removed in the near future. We recommend using ThresholdCompensation instead.

### Fixed

- Fixed an issue that happens when calling initLicenseFromLTS if [`handShakeCode`]({{site.structs}}DMLTSConnectionParameters.html?src=cpp#handshakecode) is not set.

## 8.2 (03/17/2021)

### New

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`. 

### Improved

- Improved both the localization and decoding algorithms for Postal Codes. 
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.

### Fixed

- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

## 8.1.2 (01/22/2021)

### New

- Added `mode`, `page`, `totalPage` and `parityData` in the `QRCodeDetails` Struct.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `barcodeText` when using a valid trial license.

### Fixed

- Fixed a bug where `barcodeFormatString`, `barcodeFormatString_2`, `regionName` and `documentName` don't have value in the `IRT_TYPED_BARCODE_ZONE` intermediate result.

## 8.1 (01/12/2021)

### New

- Added support for MSI Code (Modified Plessey).
- Added a new member `barcodeZoneMinDistanceToImageBorders` in the `PublicRuntimeSettings` struct to set the minimum distance (in pixels) between barcode zone and image borders. Previously, it is only available in the JSON template. It can be now configured by setting the struct `PublicRuntimeSettings` -> `barcodeZoneMinDistanceToImageBorders`.
- Added exception error message to `TextResult` when license initialization fails or decoding authorization fails.

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

- Implemented the mechanism of loading libraries dynamically at runtime when [Parameter Mode Enumerations]({{ site.enumerations }}parameter-mode-enums.html) are used (except *_AUTO and *_SKIP). Use LibraryFileName and LibraryParameters to configure.
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

### Fixed

- Fixed a crash issue that could happen when conflicts occur on Linux.

### Feature Deprecated

- DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.
