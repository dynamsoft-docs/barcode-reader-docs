---
layout: default-layout
title: Dynamsoft Barcode Reader for iOS SDK - Release Notes v8.0
description: This is the release notes page of Dynamsoft Barcode Reader for iOS SDK v8.0.
keywords: release notes, ios, 
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for iOS SDK - 8.0

## 8.0 (11/17/2020)

### New

- Implemented the mechanism of loading libraries dynamically at runtime when the following modes are used (except *_AUTO and *_SKIP). Use LibraryFileName and LibraryParameters to configure.
 - BarcodeColourMode
 - BarcodeComplementMode
 - BinarizationMode
 - ColourClusteringMode
 - ColourConversionMode
 - DeblurMode
 - DeformationResistingMode
 - DPMCodeReadingMode
 - GrayscaleTransformationMode
 - ImagePreprocessingMode
 - LocalizationMode
 - PDFReadingMode
 - RegionPredetectionMode
 - ScaleUpMode
 - TextAssistedCorrectionMode
 - TextFilterMode
 - TextureDetectionMode 
- [IntermediateResult Advanced Module] Added support for decoding IntermediateResult. Users with a binarized image could use this function to skip some image preprocessing steps.
- Implemented a new licensing tracking mechanism, License 2.0, which makes it easier for users to track license usage. 
- Added a new format control parameter, BarcodeZoneMinDistanceToImageBorders, to set the minimum distance (in pixels) between the barcode zone and image borders.
- Added a new format control parameter, MinRatioOfBarcodeZoneWidthToHeight, to set the minimum ratio (width/height) of the barcode zone.
- Added a new format control parameter, BarcodeZoneBarCountRangeArray, to set the barcode zone’s range of bar count for barcode search.
- Added a new argument, SpatialIndexBlockSize, for RPM_GENERAL_RGB_CONTRAST, RPM_GENERAL_GRAY_CONTRAST and RPM_GENERAL_HSV_CONTRAST.
- Added a new parameter, DeblurModes, so users can use different deblur algorithms for different scenarios. DeblurModes has the following enum types: DirectBinarization, ThresholdBinarization, GrayEqulization, Smoothing, and Morphing.

### Improved

- Improved the localization speed for the ScanDirectly mode.
- Improved the localization accuracy for DataMatrix codes with a narrow quiet zone.

### Fixed

- Fixed a crash issue that could happen when conflicts occur on Linux.

### Feature Deprecated

- DeblurLevel is now deprecated. It still works in this version but could be removed in the near future. We recommend using DeblurModes instead.
