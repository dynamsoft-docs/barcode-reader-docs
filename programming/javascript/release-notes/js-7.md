---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript SDK - Release Notes v7.x
description: This is the release notes page of Dynamsoft Barcode Reader for JavaScript SDK v7.x.
keywords: release notes, javascript
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# Release Notes for JavaScript SDK - 7.x

## 7.6 (09/01/2020)

### IMPROVED

- Upgraded to the latest barcode engine.

## 7.5 (08/03/2020)

### NEW

- Added GPU acceleration on browsers supporting WebGL and OffscreenCanvas. GPU acceleration is enabled by default for browsers that support it.
- Added an experimental 'single' option for 'BarcodeScanner' 'updateRuntimeSettings' to optimize decoding speeds when reading only one barcode at a time.

### IMPROVED

- Upgraded to the latest algorithm.

### FIXED

- Fixed an issue where decoding a URL did not work on iOS Safari.
- Fixed a module loading issue on MacOS 10.15 x Safari 13.0.2.

## 7.4.0.1 (05/18/2020)

### IMPROVED

- Improved error handling for decoding methods.

### FIXED

- Fixed a bug where decoding MaxiCode barcodes could cause an out of memory exception.
- Fixed a bug where partial DotCode and Postal Code results were not returned when using an expired license.

## 7.4 (05/12/2020)

### NEW

- Added a new barcode type Dotcode.
- Added the morphology algorithm for image preprocessing.
- Added the pixel formats IPF_ABGR_8888, IPF_ABGR_16161616 and IPF_BGR_888 to support more image buffer types.
- Added a new intermediate result type IRT_PREDETECTED_QUADRILATERAL.
- Added a new result data type IMRDT_QUADRILATERAL.
- Added a new sample for PWA.
- Added deformation resistance to DataMatrix.

### IMPROVED

- The method decodebuffer now uses the pixel format IPF_ABGR_8888 by default.
- Enhanced deformation resistance for QR.
- Optimized the algorithm for reading large-size dense QR and DataMatrix.
- Optimized the algorithm for 1D barcode deblurring.
- Simplified DPM configuration so that you only need to set DPMCodeReadingMode to enable it.

### FIXED

- Fixed a bug where Safari fails to open the video stream on some iPhones running iOS 12.

## 7.3.0-v4 (7.3.0.4) (04/02/2020)

### NEW

- Added support for Electron and NW.js. Official samples now provided.
- Added an official sample for Nuxt.js.
- Added error checking for unsupported symbologies for the compact edition.

### IMPROVED

- Improved the error messages for the scenario where no camera can be found.

### FIXED

- Fixed the bug in previous versions where an Android device may be miscounted as a Linux device.

## 7.3.0-v2 (7.3.0.2) (02/14/2020)

### IMPROVED

- Improved the process to release a camera in use. This makes it easier to destroy a Barcode Scanner instance in a component (Angular, Vue, React, etc.)

### FIXED

- Fixed the bug on iOS 12 where 1D barcode can't be read by a Barcode Scanner instance when the default "speed" template is used by fixing the localization mode "LM_CONNECTED_BLOCKS" and restoring it as the default mode.

## 7.3.0-v1 (7.3.0.1) (01/20/2020)

### FIXED

- Fixed a bug on iOS 12 where 1D barcode can't be read by a Barcode Scanner instance when the default "speed" template is used by changing the default localization mode from "LM_CONNECTED_BLOCKS" to "LM_SCAN_DIRECTLY". "LM_CONNECTED_BLOCKS" is the mode with the bug.

## 7.3 (01/14/2020)

### NEW

- Added a new barcode type Postal codes including USPS Intelligent Mail, Postnet, Planet, Australia Post barcode, RM4SCC.
Added a new localization mode LM_STATISTICS_POSTAL_CODE in the struct PublicRuntimeSettings -> LocalizationModes to recognize Postal codes.
- Implemented the feature of recognizing distorted QR barcode. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> DeformationResistingModes.
- Implemented the feature of complementing missing parts of QR Code & DataMatrix barcodes. It can be enabled by turning on the struct PublicRuntimeSettings -> FurtherModes -> BarcodeComplementModes.
- Added a new setting ScaleUpModes to set the scale-up mode for linear barcodes with small module size. It can be enabled by turning on the struct PublicRuntimeSettings -> ScaleUpModes.
- Added a new API Dynamsoft.BarcodeReader.detectEnvironment() that returns information like the OS type, browser type, WASM support, camera support, etc.
- Added an instance property singleFrameMode, which when enabled, allows the user to open a UI to snap a single frame from the camera instead of showing its video stream in the browser for barcode reading.
- Added two new APIs pauseScan() and resumeScan() to better handle the scanning process while showing the video stream.
- Built-in several customizable UI elements and instruction sounds so that users can easily distinguish the following
 - Whether the BarcodeScanner instance is scanning
 - Which region the BarcodeScanner instance is scanning
 - Where the found barcode symbols are

### IMPROVED

- Improved the decoding accuracy for DataMatrix that has a narrow quiet zone.
- Improved the decoding accuracy for 1D barcode that has a small module size.
- Improved the logic for camera selecting so that a better camera may be selected by default in the case of having multiple cameras available.
- Improved the method updateRuntimeSettings so that it accepts three default profiles namely "speed", "coverage" & "balance" thus making it easier to use. Note that "speed" is the default profile for each BarcodeScanner instance and "coverage" for each BarcodeReader instance.

## 7.2.2 (11/27/2019)

### NEW

- Added frame filtering feature so that out-of-focus frames are discarded during the scanning operation.

### IMPROVED

- Updated algorithm to 7.2.2.
- Improved the accuracy for OneD barcode decoding.
- Two WASMs are provided for deployment
 1. Compact WASM: Default. Smaller but only supports OneD, PDF417, QR and DataMatrix codes.
 2. Full WASM: Bigger but has all features.

## 7.1 (08/29/2019)

### IMPROVED

- Updated algorithm to 7.1.
- Improved the speed to download, build and initialize the library
- Improved the readability of barcode result text by using UTF-8 encoding
- Improved developer’s guide to be clearer and more precise
- Renamed setScanSettings for updateScanSettings for naming consistence.

## 7.0 (08/09/2019)

### NEW

- Added the capability to enable/disable the torch/flashlight of a mobile device (when available, only Chrome on Android).
- Added APIs for finer video control. These APIs are getAllCameras, getCurrentCamera, setCurrentCamera, getResolution, setResolution.

### IMPROVED

- Updated algorithm to 7.0.
- Updated default runtimeSettings for BarcodeScanner.
- Improved 1D barcode decoding accuracy by comparing results from multiple frames.
- Improved the namespace and overall structure of the APIs while maintaining backward compliance.

### FIXED

- Fixed a bug that the camera source changes when changing resolution.
- Fixed a bug in Edge that resolution changes incorrectly.
- Small fixes and tweaks.

## 6.5.2 (06/12/2019)

### NEW

- Added compatibility for CSP (Content Security Policy).
- Added samples for Vue, React and Angular.

### IMPROVED

- Optimized workflow for QRCode/DataMatrix/Aztec code recognition. A QRCode/DataMatrix/Aztec barcode zone will be submitted to the deblurring process when its decoding results vary with different binarization arguments.
- Reduced the error rate of 1D barcode recognition, resulting in a higher chance to successfully confirm a 1D barcode result whose confidence is not extremely high.
- Reduced the possibility of conflicts with neighbour barcodes, improving the precision of the zone to be deleted when a barcode is recognized successfully.
- Super large-size (4096x4096 pixels) images can be processed and decoded.
The license key can be written in the script label.

### FIXED

- Enhanced the robustness of the image processing algorithm. This resolved segmentation faults when a 0-size image is passed to our SDK or when there are a few small barcode zones which require spatial transformation.
- Small fixes and tweaks.

## 6.5.1 (04/28/2019)

### NEW

- Added d.ts file to support typescript.
- Added the UMS/ESM export for Node.js.
- Added a built-in scanner construct to support video settings.

### IMPROVED

- Moved the configuration from dynamsoft.dbrEnv to dynamsoft.BarcodeReader so you can export the dbr object.
- Changed the logic to check if worker is needed automatically in the environment.
- Improved deblur algorithm for OneD, enhancing the recognition rate for blurry/out-of-focus barcodes.
- Improved the accuracy of border location and symbol segmentation for AZTEC.
- Optimized line scanning algorithm for OneD, decreasing the computation load for character recognition.
- DecodeBuffer now supports 48-bit and 64-bit image data.

### FIXED

- Small fixes and tweaks.

## 6.5 (03/14/2019)

### IMPROVED

- Reduced the library file (.WASM) size to around 2MB.
- Reduced build time by 106% and Improved decoding time by 98%.
- Improved the recognition rate of 1D codes with a new verification algorithm.
- Greatly improved the image-processing performance for blurry PDF 417 codes and decoding performance for blurry 1D, QR, and Data Matrix codes.
- Decreased error recognition rate for Aztec Codes.

### FIXED

- Small fixes and tweaks.

## 6.4.1 (12/11/2018)

### IMPROVED

- Fast loading and initialization and support of Web Worker to ensure seamless and smooth barcode scanning instantly.
- Improved the decoding performance for Aztec, increasing the recognition rate.
- Improved the decoding performance for OneD, decreasing the error recognition rate.
- Added further check points for Timeouts, enhancing the timeout control on large scale images for decoding.

### FIXED

- Small fixes and tweaks.

## 6.3 (08/16/2018)

### NEW

- New JavaScript Preview Edition - a JavaScript API for barcode scanning based on the WebAssembly technology - is now available.

## 5.2 (09/18/2017)

### IMPROVED

- Optimized the de-blur algorithm for 1D barcodes to improve the recognition accuracy.
- Optimized the timeout support. Now it is possible to stop barcode recognition by timeout.
- Increased QR Code and DataMatrix barcode recognition speed for B&W images.

### FIXED

- Small fixes and tweaks.

## 5.1 (05/25/2017)

### NEW

- Added the JavaScript Edition to support reading barcodes in JavaScript on the client side. It used to act as an add-on to our browser-based document scanning SDK - Dynamic Web TWAIN. It is now a separate edition, which enables you to seamlessly embed barcode reading functionality with Dynamic Web TWAIN for online document scanning and Dynamsoft Camera SDK for webcam capture in your application.

### FIXED

- Small fixes and tweaks.
