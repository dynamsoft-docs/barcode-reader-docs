---
layout: default-layout
title: Dynamsoft Barcode Reader for Python SDK - Release Notes v7.x
description: This is the release notes page of Dynamsoft Barcode Reader for Python SDK v7.x.
keywords: release notes, python
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for Python SDK - 7.x

## 7.6.0 (09/01/2020)

### NEW

- Added a new member rpmColourArgumentIndex in the struct IntermediateResult. The rpmColourArgumentIndex is the index of ForeAndBackgroundColour argument used for RegionPredetectionMode.

### IMPROVED

- Improved the decoding speed for when ScanDirectly mode is enabled for localization.
- Improved the decoding speed by utilizing SIMD (single instruction, multiple data).
- Improved the deblurring algorithm for linear barcodes.

### FIXED

- Fixed a bug where the coordinates of barcodes are calculated incorrectly under some situations.
- Fixed a crash issue which occurs under some situations.

## 7.5.0 (07/22/2020)

### NEW

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

### IMPROVED

- Optimized the binarization process for 1D barcode zones.
- Improved the decoding accuracy for 1D barcodes.
- Improved the decoding speed by 5%-20%.
- Improved the decoding accuracy for Data Matrix code with broken finder pattern.

### FIXED

- Fixed a bug where the coordinates of barcodes are calculated incorrectly under some situations.

## 7.4.0 (04/16/2020)

Version 7.4 marks the initial release of Dynamsoft Barcode Reader Python SDK. 

### NEW

- Added new barcode format support for DotCode.
- Added relative ROI (Region of Interest) detection to optimize the localization results in the high colour contrasted scenarios.
- Added a new type of output IRT_PREDETECTED_QUADRILATERAL, to identify regions with user-define HSV colour space.
- Implemented a feature for recognizing distorted DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> furtherMode -> DeformationResistingModes.
- Added an optimized decoding method for linear barcodes in vector PDF files. The vector PDF file can be decoded without rasterizing, increase decoding efficiency.
- Added two Enumerations for FrameDecodingParameters: ClarityCalculationMethod and ClarityFilterMode, to improve input image quality.
- Added a new image pre-processing mode IPM_MORPHOLOGY for barcodes with wide data bar or data cell gaps.

### IMPROVED

- Enhanced QR Code deformation, resistance, to improve the success rate of decoding the QR code with square symbol at the center.
- Optimized the algorithm for decoding large and dense QR and DataMatrix codes.
- Optimized deblurring algorithm for linear barcodes.
- Improved a character display issue on some platforms where BarcodeText returns an extra "\uFEFF" if the barcode is encoded in UTF-8 with BOM (Byte Order Mark).
- Simplified the process to enable DPM, DotCode and Postal Codes. Now the library will automatically turn on the corresponding localization mode while following settings are applied:
 - DPMCRM_GENEARL
 - BF2_DOTCODE
 - BF2_POSTALCODE

### FIXED

- Fixed a bug where the BinarizationModes settings do not work in the DPM mode.
- Fixed a bug where the barcode location returns incorrect when the barcode is close to the border of the scanning region.
- Fixed a bug in the calculation of deblur confidence.
- Fixed a bug where the ColourConversionModes RGB weights setting does not work when CICM_GENERAL is enabled.
- Other small fixes and tweaks.

