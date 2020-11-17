---
layout: default-layout
title: Dynamsoft Barcode Reader for iOS SDK - Release Notes v7.6 and below
description: This is the release notes page of Dynamsoft Barcode Reader for iOS SDK v7.6 and below.
keywords: release notes, ios, 
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for iOS SDK - 7.6 and below

## 7.6 (09/01/2020)

### NEW

- Added a new member rpmColourArgumentIndex in the struct IntermediateResult. The rpmColourArgumentIndex is the index of ForeAndBackgroundColour argument used for RegionPredetectionMode.

### IMPROVED

- Improved the decoding speed for when ScanDirectly mode is enabled for localization.
- Improved the decoding speed by utilizing SIMD (single instruction, multiple data).
- Improved the deblurring algorithm for linear barcodes.

### FIXED

- Fixed a bug where the coordinates of barcodes are calculated incorrectly under some situations.
- Fixed a crash issue which occurs under some situations.

## 7.5 (07/22/2020)

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

## 7.4.1 (05/18/2020)

### FIXED

- Fixed a bug where initWithLicenseFromServer doesn't work and will return error -10042 (EnumErrorCode_License_Dll_Missing).

## 7.4 (04/16/2020)

### NEW

- Added new barcode format support for DotCode.
- Added relative ROI (Region of Interest) detection to optimize the localization results in the high colour contrasted scenarios.
- Added a new type of output IRT_PREDETECTED_QUADRILATERAL, to identify regions with user-define HSV colour space.
- Implemented a feature for recognizing distorted DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> furtherMode -> DeformationResistingModes.
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

## 7.3 (01/02/2020)

### NEW

- Added a new barcode type Postal codes including USPS Intelligent Mail, Postnet, Planet, Australia Post barcode, RM4SCC.
- Added a new localization mode LM_STATISTICS_POSTAL_CODE in the struct PublicRuntimeSettings -> LocalizationModes to recognize Postal codes.
- Implemented the feature of recognizing distorted QR barcode. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> DeformationResistingModes.
- Implemented the feature of complementing missing parts of QR Code & DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> BarcodeComplementModes.
- Added a new setting AutoFilter to set whether to filter frames automatically in the struct FrameDecodingParameters.
- Added a new setting ScaleUpModes to set the scale-up mode for linear barcodes with small module size. It can be enabled by turning on the struct PublicRuntimeSettings -> ScaleUpModes.

### IMPROVED

- Improved the decoding accuracy for DataMatrix that has a narrow quiet zone.
- Improved the decoding accuracy for 1D barcode that has a small module size.

## 7.2.2 (11/13/2019)

### FIXED

- Fixed a bug where BarcodeBytes was null when DPM mode was enabled.

## 7.2.1 (11/12/2019)

### NEW

- Added support for GS1-128 barcode.
- Added a new argument "RecordsetSizeOfLatestImages" for "IntermediateResultSavingMode" to specify how many sets of intermediate results are kept in the library.

### IMPROVED

- Improved the decoding capability of PDF417 by identifying the start and stop patterns of PDF417.
- Improved the deblurring performance for wide 1D barcodes, which lowers the possibility of fake results.
- Improved video decoding by optimizing frame filtering.
- Optimized the automatic classification for Code 39 and Code 39 Extended.
- Optimized the implementation of region pre-detection mode "RPM_GENERAL_GRAY_CONTRAST".
- Enhanced the recognition of barcodes with small module sizes.
- Changed ExtendedBarcodeFormatIds to BarcodeFormat_2 to support more barcode formats in the future.
- Improved the setting template inside every sample. For consistency, now every sample uses one of templates of "Best Coverage", "Balance" and "Best Speed".

### FIXED

- Fixed a bug in the barcode zone type identification during general statistical localization.
- Fixed minor bugs in result outputs.
- Fixed a bug where OneDCodeDetails doesn't work.
- Fixed a memory leak issue when decoding multiple barcodes in our sample App.

## 7.2 (09/24/2019)

### NEW

- Added more barcode formats:
 - GS1 Databar (Omnidirectional, Truncated, Stacked, Stacked Omnidirectional, Limited, Expanded, Expanded Stacked)
 - PatchCode
 - Maxicode (mode 2-5)
 - Micro PDF417
 - Micro QR
 - GS1 COMPOSITE (combination of OneD and PDF417/Micro PDF 417)
 - Non-standard Barcode
- Added the capability of reading DPM code. It can be enabled by turning on the struct PublicRuntimeSettings->furtherMode-> DPMCodeReadingModes and adding LM_STATISTICS_MARKS to the PublicRuntimeSettings->localizationModes.
- Added a ReactNative package for iOS.
- Licensing is required to obtain the intermediate results, except the original image in the intermediate results.
- Added a parameter, clarity in the struct ExtendedResult, to show the clarity of the decoded-barcode zone.
- For iOS, added a method, GetModeArgument(), to get the argument value of the mode parameters.
- For Android, added a method, getModeArgument(), to get the argument value of the mode parameters.

### IMPROVED

- Improved the decoding speed for PDF417.
- Improved the capability of decoding QR and Data Matrix with cylinder-like deformation.

### FIXED

- Fixed minor bugs.

## 7.1 (08/15/2019)

### NEW

- Added automatic blurry frame filtering for the video frame decoding, reducing incorrect barcode recognition.
- Added three arguments for the CICM_GENERAL of ColourConversionModes to set the weights for the color conversion, providing more flexibility to deal with various kinds of backgrounds by using different weights of three colors: red, green and blue.
- Added two new methods, StartFrameDecodingEx(), which can be used to start a new thread to decode barcodes, and InitFrameDecodingParameters(), and a new struct, iFrameDecodingParameters.


### IMPROVED

- The output of intermediate results can be saved either directly to a folder or to memory or both, by introducing a new parameter, intermediateResultSavingMode, to the struct PublicRuntimeSettings.

### FIXED

- Fixed a bug that the deblur function might malfunction in some rare cases.
- Fixed a bug that the coordinates of barcodes may be calculated incorrectly under some situations.
- Fixed a bug that the parameter, RequireStartStopChars, might malfunction in some rare cases.
- Fixed a bug that the angle of barcodes might not be calculated correctly sometimes.

## 7.0 (07/11/2019)

### NEW

- Refactored most modules to provide a flexible barcode reading framework that allows for parameter customization suited for a variety of barcode scenarios.
- Enabled access to intermediate results (grayscale image, binarized image, text zone, etc) during the decoding process.
- Added new interfaces to support video decoding, and frame decoding to improve interactive sensitivity.
- Provided methods to terminate the decoding process at different phases such as during binarization, localization or barcode type identification.
- Added a new barcode localization method, Scan Directly, to reduce decoding time significantly for high-quality images.

### IMPROVED

- Enhanced error messages related to the license initiation failure.
- Improved detailed results for decoded barcodes, including more barcode format specification.
- Improved results output to enable outputting barcode results in the order of confidence level, barcode position or format.

### FIXED

- Fixed an issue where the barcode could be calculated incorrectly in some occasions.

## 6.5.2 (05/28/2019)

### IMPROVED

- Optimized barcode reading workflow for QRCode/DataMatrix/Aztec code recognition. A QRCode/DataMatrix/Aztec barcode zone will be submitted to the deblurring process when its decoding results vary with different binarization arguments.
- Reduced the error rate of 1D barcode recognition. Giving more chances for confirmation of a 1D barcode decoding result whose confidence isn't extreme high.
- Reduced the possibility of conflicts with neighbour barcodes. This improved the precision of the zone to be deleted when a barcode is recognized successfully.

### FIXED

- Enhanced the robustness of the image processing algorithm. This resolved segmentation faults when a 0-size image is passed to our SDK or there are a few small-size barcode zones which need to do spatial transformation.

## 6.5.1 (04/16/2019)

### IMPROVED

- Improved deblur algorithm for OneD, enhancing the recognition rate for blurry/out-of-focus barcodes.
- Improved the accuracy of border location and symbol segmentation for AZTEC.
- Optimized line scanning algorithm for OneD, decreasing the computation load for character recognition.
- DecodeBuffer now supports 48-bit and 64-bit image data.

### FIXED

- Small fixes and tweaks.

## 6.5 (02/26/2019)

### IMPROVED

- Improved average reading speed by 5-10%.
- Greatly improved the image-processing performance for blurry PDF417 codes.
- Improved decoding performance for blurry 1D, QRCode and DataMatrix codes.
- Decreased error recognition rate for Aztec codes.

### FIXED

- Small fixes and tweaks.

## 6.4.1 (11/22/2018)

### IMPROVED

- Improved the decoding performance for Aztec, increasing the recognition rate.
- Improved the decoding performance for OneD, decreasing the error recognition rate.
- Added further check points for Timeouts, enhancing the timeout control on large scale images for decoding.

### FIXED

- Small fixes and tweaks.

## 6.4 (10/15/2018)

### NEW

- Added a BatchDecode tool which helps developers evaluate the recognition performance and speed of the Dynamsoft Barcode Reader SDK.
- Added a new sample demonstrates how to use Dynamsoft Barcode Reader in multiple threads.
- Added the runtime licensing mode. 

### IMPROVED

- Improved barcode reading speed by 10%, especially for small-sized images.
- Reorganized API documentation to help you find content more easily.
- Simplified Developer's Guide to guide you through creating a HelloWorld project more quickly.

### FIXED

- Small fixes and tweaks.

## 6.3 (08/16/2018)

### NEW

- Added the support for Aztec codes.
- New developer's guide (.pdf) to cover common use cases,and re-worked existing PDF content to improve its usability.
- New API documentation (.chm) to help you find content more easily.
- Added GetRuntimeSettings and UpdateRuntimeSettings to help you adjust runtime barcode reading settings.
- Added ResetRuntimeSettings to reset runtime barcode reading settings to default values.
- Added InitRuntimeSettingsWithString and InitRuntimeSettingsWithFile to initialize barcode reading settings at runtime.
- Added OutputSettingsToString and OutputSettingsToFile to review runtime barcode reading settings.
- Added AppendTplStringToRuntimeSettings and AppendTplFileToRuntimeSettings to append a new template string/file to the current runtime settings.

### IMPROVED

- Improved the logic for ExpectedBarcodesCount. Previously the barcodes it returned may be greater than the given value of ExpectedBarcodesCount. Now as long as the expected barcodes found, it will stop continue searching and decoding barcodes.

### FIXED

- Small fixes and tweaks.

## 6.2 (06/28/2018)

### IMPROVED

- Easy and flexible to create a custom barcode reading template for your specific use case.
- Greatly improved barcode reading speed.
- Decreased misreading rate for 1D barcodes.
- Enhanced performance for reading multiple barcodes from an image.
- Optimized reading accuracy and speed for blurred QRCode and DataMatrix.
- Improved the speed for reading barcodes directly from a computer/phone screen.

### FIXED

- Small fixes and tweaks.

## 4.2 (08/09/2016)

Version 4.2 marks the initial release of Dynamsoft Barcode Reader iOS SDK. 

### NEW

- Supports reading a single barcode from images (UIImage) and mobile cameras (NV21). Both synchronous and asynchronous barcode decoding methods are provided.
- Supported barcode types include:
 - 1D Barcode – Code39, Code93, Code128, Codabar, ITF, EAN13, EAN8, UPCA, UPCE and INDUSTRIAL 2 OF 5.
 - 2D Barcode – QR Code, PDF 417, Aztec and DataMatrix.
- Supports iOS 7- 9; iPhone 4s and higher.
- Supported architectures: armv7/arm64/i386/x86_64.

### IMPROVED

- Changed 1D barcode decoding module to improve recognition accuracy.
- Improved ResultPoints Property to adjust the sequence of barcode corner points. Now the top-left corner of the barcode is the starting point (x1, y1). The results are returned in the clockwise direction.
