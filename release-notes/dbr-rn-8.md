---
layout: default-layout
title: Release Notes v8.x - Dynamsoft Barcode Reader
description: Dynamsoft Barcode Reader SDK version 8.x. Have a close look at the recent updates with various bugs fixed and new attributes added.
keywords: release notes, dynamsoft barcode reader
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for Dynamsoft Barcode Reader - 8.x

## 8.9

> First released: 12-16-2021

### Highlights

{%- include release-notes/product-highlight-8.9.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.9.3 | [Android]({{ site.android }}release-notes/android-8.html#893-03022022) / [iOS]({{ site.oc }}release-notes/ios-8.html#893-03022022) |
| 8.9.1 | [Android]({{ site.android }}release-notes/android-8.html#891-12282021) / [iOS]({{ site.oc }}release-notes/ios-8.html#891-12282021) |
| 8.9.0 | [Android]({{ site.android }}release-notes/android-8.html#890-12162021) / [iOS]({{ site.oc }}release-notes/ios-8.html#890-12162021) |

## 8.8

> First released: 10-12-2021

### Highlights

{%- include release-notes/product-highlight-8.8.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.8.7 | [JavaScript]({{ site.js }}release-notes/js-8.html#887-01262022) |
| 8.8.5 | [JavaScript]({{ site.js }}release-notes/js-8.html#885-01262022) |
| 8.8.3 | [JavaScript]({{ site.js }}release-notes/js-8.html#883-10292021) |
| 8.8.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#880-10282021) / [C]({{ site.c}}release-notes/c-8.html#880-10122021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#880-10122021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#880-10122021) / [Python]({{ site.python_release_notes }}python-8.html#880-10222021) / [Java]({{ site.java }}release-notes/java-8.html#880-10122021) / [Android]({{ site.android }}release-notes/android-8.html#880-10192021) / [iOS]({{ site.oc }}release-notes/ios-8.html#880-10192021) |

## 8.6

> First released: 07-15-2021

### Highlights

{%- include release-notes/product-highlight-8.6.0.md -%}

| Versions | Available Editions |
| -------- | ------------------ |
| 8.6.3 | [JavaScript]({{ site.js }}release-notes/js-8.html#863-09302021) |
| 8.6.1 | [JavaScript]({{ site.js }}release-notes/js-8.html#861-09012021) |
| 8.6.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#860-08312021) / [C]({{ site.c}}release-notes/c-8.html#860-07152021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#860-07152021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#860-07152021) / [Python]({{ site.python_release_notes }}python-8.html#860-07202021) / [Java]({{ site.java }}release-notes/java-8.html#860-07152021) / [Android]({{ site.android }}release-notes/android-8.html#860-07152021) / [iOS]({{ site.oc }}release-notes/ios-8.html#860-07152021) |

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
| 8.4.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#840-06292021) / [C]({{ site.c}}release-notes/c-8.html#840-06082021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#840-06082021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#840-06082021) / [Python]({{ site.python_release_notes }}python-8.html#840-06102021) / [Java]({{ site.java }}release-notes/java-8.html#840-06082021) / [Android]({{ site.android }}release-notes/android-8.html#840-06082021) / [iOS]({{ site.oc }}release-notes/ios-8.html#840-06082021) |

## 8.2

> First released: 03-17-2021

### Highlights

- Added a new mode argument, `FindAccurateBoundary`, to [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes) that determines if the SDK attempts to find an accurate boundary when RegionPredetectionModes is set to `RPM_GENERAL_HSV_CONTRAST`.
- Improved both the localization and decoding algorithms for Postal Codes.
- LocalizationMode `LM_STATISTICS_POSTAL_CODE` will not be added automatically when enabling Postal Code in your runtime settings. Instead, users must manually add it to the LocalizationMode array if it is required.
- Resolved a bug that infrequently causes the application to crash when decoding a MicroPDF417 barcode.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.2.5 | [JavaScript]({{ site.js }}release-notes/js-8.html#825-05182021) |
| 8.2.3 | [JavaScript]({{ site.js }}release-notes/js-8.html#823-04152021) |
| 8.2.1 | [JavaScript]({{ site.js }}release-notes/js-8.html#821-03292021) / [Android]({{ site.android }}release-notes/android-8.html#821-05272021) / [iOS]({{ site.oc }}release-notes/ios-8.html#821-05272021) |
| 8.2.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#820-03172021) / [C]({{ site.c}}release-notes/c-8.html#820-03172021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#820-03172021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#820-03172021) / [Python]({{ site.python_release_notes }}python-8.html#820-03172021) / [Java]({{ site.java }}release-notes/java-8.html#820-03172021) / [Android]({{ site.android }}release-notes/android-8.html#820-03172021) / [iOS]({{ site.oc }}release-notes/ios-8.html#820-03172021) |

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
| 8.1.3 | [JavaScript]({{ site.js }}release-notes/js-8.html#813-03042021) |
| 8.1.2 | [JavaScript]({{ site.js }}release-notes/js-8.html#812-01222021) / [C]({{ site.c}}release-notes/c-8.html#812-01222021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#812-01222021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#812-01222021) / [Python]({{ site.python_release_notes }}python-8.html#812-01222021) / [Java]({{ site.java }}release-notes/java-8.html#812-01222021) / [Android]({{ site.android }}release-notes/android-8.html#812-01222021) / [iOS]({{ site.oc }}release-notes/ios-8.html#812-01222021) |
| 8.1.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#810-01192021) / [C]({{ site.c}}release-notes/c-8.html#810-01122021) / [C++]({{ site.cpp}}release-notes/cpp-8.html#810-01122021) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#810-01122021) / [Python]({{ site.python_release_notes }}python-8.html#810-01192021) / [Java]({{ site.java }}release-notes/java-8.html#810-01122021) / [Android]({{ site.android }}release-notes/android-8.html#810-01122021) / [iOS]({{ site.oc }}release-notes/ios-8.html#810-01122021) |

## 8.0

> First released: 11-17-2020

### Highlights

- Implemented the mechanism of loading libraries dynamically at runtime when [Parameter Mode Enumerations]({{ site.enumerations }}parameter-mode-enums.html) are used (except *_AUTO and *_SKIP). Use LibraryFileName and LibraryParameters to configure.
- (For IntermediateResult Advanced Module) Added support for decoding IntermediateResult. For example, users with a binarized image could use this function to skip some image preprocessing steps.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage. 
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone's range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.
- Improved the localization speed for the ScanDirectly mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.
- Fixed a crash issue that could happen when conflicts occur on Linux.
- `DeblurLevel` is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.

| Versions | Available Editions |
| -------- | ------------------ |
| 8.0.0.1 | [Python]({{ site.python_release_notes }}python-8.html#8001-01062021) |
| 8.0.0 | [JavaScript]({{ site.js }}release-notes/js-8.html#800-11252020) / [C]({{ site.c}}release-notes/c-8.html#800-11172020) / [C++]({{ site.cpp}}release-notes/cpp-8.html#800-11172020) / [DotNet]({{ site.dotnet }}release-notes/dotnet-8.html#800-11172020) / [Python]({{ site.python_release_notes }}python-8.html#800-11262020) / [Java]({{ site.java }}release-notes/java-8.html#800-11172020) / [Android]({{ site.android }}release-notes/android-8.html#800-11172020) / [iOS]({{ site.oc }}release-notes/ios-8.html#800-11172020) |

&nbsp;

<div class="fold-panel-prefix"></div>
