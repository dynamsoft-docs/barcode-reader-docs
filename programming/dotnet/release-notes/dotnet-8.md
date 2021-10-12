---
layout: default-layout
title: Dynamsoft Barcode Reader for .NET SDK - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for .NET SDK v8.x.
keywords: release notes, .net
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for .NET SDK - 8.x

## 8.8.0 (10/12/2021)

### Highlights

{%- include release-notes/product-highlight-8.8.0.md -%}

### Changelog

#### New

- Added a new `LocalizationModes` item [`LM_ONED_FAST_SCAN`]({{site.parameters_reference}}localization-modes.html#lm_oned_fast_scan), which significantly improved the localization speed for 1D barcodes.

#### Improved

- Improved the confidence calculation algorithm for 2D barcode results. Users can get even more accurate results by configuring the confidence filter.
- Improved the barcode reading speed by applying the localized barcodes filter. The barcodes will be filtered according to the parameters [`BarcodeHeightRangeArray`]({{site.parameters_reference}}barcode-height-range-array.html), [`BarcodeWidthRangeArray`]({{site.parameters_reference}}barcode-width-range-array.html), [`BarcodeAngleRangeArray`]({{site.parameters_reference}}barcode-angle-range-array.html) and [`MinRatioOfBarcodeZoneWidthToHeight`]({{site.parameters_reference}}min-ratio-of-barcode-zone-width-to-height.html).
- Updated the exception message when the full license is invalid or has expired.

#### Breaking Change(s)

- The low confidence barcode results will no longer be returned by default. The default value of parameter [`minResultConfidence`]({{site.parameters_reference}}min-result-confidence.html) is preset to 30, which can filter out the majority of misreading results and keep as many correct results as possible.

## 8.6.0 (07/15/2021)

### Highlights

{%- include release-notes/product-highlight-8.6.0.md -%}

### Changelog

#### New

- Added two DeblurMode Enumerations, `DM_BASED_ON_LOC_BIN` and `DM_SHARPENING_SMOOTHING`, to support more usage scenarios.
- Added methods `InitDLSConnectionParameters` and `InitLicenseFromDLS` in `BarcodeReader` class to replace methods `InitLTSConnectionParameters` and `InitLicenseFromLTS`.
- Added class `DMDLSConnectionParameters` to replace class `DMLTSConnectionParameters`.

#### Improved

- Improved the [`confidence`]({{site.dotnet_class}}ExtendedResult.html#confidence) algorithm for 1D barcode results. Users can get even more accurate results by configuring the `confidence` filter.

## 8.4.0 (06/08/2021)

### New

- Added a new method [`GetIdleInstancesCount`]({{site.dotnet_methods}}license.html#getidleinstancescount) to return the number of available instances when using the 'per concurrent instance' licensing model.
- Added the [`organizationID`]({{site.dotnet_class}}DMLTSConnectionParameters.html#organizationid) property for license authentication.
- Added a new attribute [`isMirrored`]({{site.dotnet_class}}TextResult.html#ismirrored) to the `TextResult` class. `isMirrored` returns whether the barcode is mirrored.
- Added a new attribute [`isDPM`]({{site.dotnet_class}}TextResult.html#isdpm) to the `TextResult` class. `isDPM` returns whether the barcode is recognized by the DPM mode.
- Added a new argument, `ThresholdCompensation`, to the `BinarizationModes` mode arguments.

### Improved

- Faster recognition speeds when detecting dense QR Codes.
- Improved the performance of boundary identification for DataMatrix codes.

### Deprecated

- `ThreshValueCoefficient` is now deprecated. It still works in this version but could be removed in the near future. We recommend using ThresholdCompensation instead.

### Fixed

- Fixed a bug that may cause the error 'Failed to get the address of DBR_CreateInstance' when initializing DBR.
- Fixed an issue that happens when calling initLicenseFromLTS if [`handShakeCode`]({{site.dotnet_class}}DMLTSConnectionParameters.html#handshakecode) is not set.

## 8.2.0 (03/17/2021)

### New

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`.

### Improved

- Improved both the localization and decoding algorithms for Postal Codes. 
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.

### Fixed

- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

## 8.1.2 (01/22/2021)

### New

- Added `Mode`, `Page`, `TotalPage` and `ParityData` in the `QRCodeDetails` Class.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `BarcodeText` when using a valid trial license.
- Included native C++ DLL files in the .NET assembly files, so users don't need to manually copy these files to the specific folder.

### Fixed

- Fixed a bug where `BarcodeFormatString`, `BarcodeFormatString_2`, `RegionName` and `DocumentName` don't have value in the `IRT_TYPED_BARCODE_ZONE` intermediate result.

## 8.1.0 (01/12/2021)

### New

- Added support for MSI Code (Modified Plessey).
- Added a new member `BarcodeZoneMinDistanceToImageBorders` in the `PublicRuntimeSettings` struct to set the minimum distance (in pixels) between barcode zone and image borders. Previously, it is only available in the JSON template. It can be now configured by setting the struct `PublicRuntimeSettings` -> `BarcodeZoneMinDistanceToImageBorders`.
- Added exception error message to `TextResult` when license initialization fails or decoding authorization fails.

### Improved

- Improved the localization robustness for QR Code.
- Improved the localization for low quality 1D barcodes.
- Improved the deblurring performance and recognition rate for DataMatrix. 
- Improved the recognition rate for Aztec.

### Fixed

- Fixed a bug where Micro PDF417 may not be localized in multiple-barcode scenarios.
- Fixed a bug where the `ExpectedBarcodesCount` and `BarcodeFormat` parameters do not work in the `RegionDefinition`.

## 8.0.0 (11/17/2020)

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

### Feature Deprecated

- DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.
- The .NET assembly DLL file (Dynamsoft.BarcodeReader.dll) does not include compressed C++ DLLs. Now, users need to distribute Dynamsoft.BarcodeReader.dll, DynamsoftCommon.dll, x86/x64 folders with the application. 
