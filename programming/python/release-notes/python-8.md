---
layout: default-layout
title: Dynamsoft Barcode Reader for Python SDK - Release Notes v8.x
description: This is the release notes page of Dynamsoft Barcode Reader for Python SDK v8.x.
keywords: release notes, python
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for Python SDK - 8.x

## 8.8.0 (10/22/2021)

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

## 8.6.0 (07/20/2021)

### Highlights

{%- include release-notes/product-highlight-8.6.0.md -%}

### Changelog

#### New

- Added two DeblurMode Enumerations, `DM_BASED_ON_LOC_BIN` and `DM_SHARPENING_SMOOTHING`, to support more usage scenarios.
- Added methods `init_license_from_dls` and `init_dls_connection_parameters` in `BarcodeReader` class to replace `init_license_from_lts` and `init_lts_connection_parameters`.
- Added class `DMDLSConnectionParameters` to replace class `DMLTSConnectionParameters`.

#### Improved

- Improved the [`confidence`]({{site.python_class}}ExtendedResult.html#confidence) algorithm for 1D barcode results. Users can get even more accurate results by configuring the `confidence` filter.

## 8.4.0 (06/10/2021)

### New

- Added a new method [`get_idle_instances_count`]({{site.python_methods}}license.html#get_idle_instances_count) to return the number of available instances when using the 'per concurrent instance' licensing model.
- Added the [`organizationID`]({{site.python_class}}DMLTSConnectionParameters.html#organization_id) property for license authentication.
- Added a new attribute [`is_mirrored`]({{site.python_class}}TextResult.html#is_mirrored) to the `TextResult` class. `is_mirrored` returns whether the barcode is mirrored.
- Added a new attribute [`is_dpm`]({{site.python_class}}TextResult.html#is_dpm) to the `TextResult` class. `is_dpm` returns whether the barcode is recognized by the DPM mode.
- Added a new argument, [`ThresholdCompensation`]({{site.parameters_reference}}binarization-modes.html#thresholdcompensation), to the `BinarizationModes` mode arguments.

### Improved

- Faster recognition speeds when detecting dense QR Codes.
- Improved the performance of boundary identification for DataMatrix codes.

### Deprecated

- `ThreshValueCoefficient` is now deprecated. It still works in this version but could be removed in the near future. We recommend using `ThresholdCompensation` instead.

### Fixed

- Fixed an issue that happens when calling initLicenseFromLTS if `handshake_code` is not set.

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

- Added `mode`, `page`, `totalPage` and `parityData` in the `QRCodeDetails` Class.
- Added support for Python 3.9.

### Improved

- Improved the recognition accuracy for GS1 Databar.
- Removed the exception code from `barcodeText` when using a valid trial license.

### Fixed

- Fixed a bug where `barcodeFormatString`, `barcodeFormatString_2`, `regionName` and `documentName` don't have value in the `IRT_TYPED_BARCODE_ZONE` intermediate result.

## 8.1.0 (01/19/2021)

### NEW

- Added support for MSI Code (Modified Plessey).
- Added a new member `barcode_zone_min_distance_to_image_borders` in the `PublicRuntimeSettings` class to set the minimum distance (in pixels) between barcode zone and image borders. Previously, it is only available in the JSON template. It can be now configured by setting the class `PublicRuntimeSettings` -> `barcode_zone_min_distance_to_image_borders`.
- Added exception error message to `TextResult` when license initialization fails or decoding authorization fails.
- Added a new abstract class `TextResultResultCallBack` which includes a abstract method `text_results_callback_func`. This method can be implemented in a subclass as a callback function to process text results generated during frame decoding.
- Added a new abstract class `IntermediateResultCallBack` which includes a abstract method `intermediate_results_callback_func`. This method can be implemented in a subclass as a callback function to process intermediate results generated during frame decoding.
- Added a new abstract class `ErrorCallBack` which includes a abstract method `error_callback_func`. This method can be implemented in a subclass as a callback function to process errors generated during frame decoding.
- Redesigned the `start_video_mode` interface so that you can use callback functions for `TextResult`, `IntermediateResult` and handling errors. Previously, it only worked with `TextResult` callback function.


### IMPROVED

- Improved the localization robustness for QR Code.
- Improved the localization for low quality 1D barcodes.
- Improved the deblurring performance and recognition rate for DataMatrix.
- Improved the recognition rate for Aztec.


### FIXED

- Fixed a bug where Micro PDF417 may not be localized in multiple-barcode scenarios.
- Fixed a bug where the `ExpectedBarcodesCount` and `BarcodeFormat` parameters do not work in the `RegionDefinition`.

## 8.0.0.1 (01/06/2021)

### FIXED

- Fixed a typo in `init_license_from_lts`.

## 8.0.0 (11/26/2020)

### NEW

- Implemented the mechanism of loading libraries dynamically at runtime when Parameter Mode Enumerations are used (except *_AUTO and *_SKIP). Use LibraryFileName and LibraryParameters to configure.
- (For IntermediateResult Advanced Module) Added support for decoding IntermediateResult. For example, users with a binarized image could use this function to skip some image preprocessing steps.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage.
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone’s range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.


### IMPROVED

- Improved the localization speed for the ScanDirectly mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.

### FIXED

- Fixed a crash issue that could happen when conflicts occur on Linux.

### Feature Deprecated

- DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.
