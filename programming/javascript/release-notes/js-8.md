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

## 8.0 (11/25/2020)

### New

- Added support for decoding barcodes from an existing video stream.
- Introduced new namespace `Dynamsoft.DBR`.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, Morphing, DeepAnalysis and Sharpening.

### Improved

- Changed the default runtime preset setting of `BarcodeScanner` from `speed` to `single`.
- Improved the localization speed for the `ScanDirectly` mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.

### Fixed


### Feature Deprecated
- `DeblurLevel` is now deprecated. It still works in this version but could be removed in the near future. We recommend using `DeblurModes` instead.
