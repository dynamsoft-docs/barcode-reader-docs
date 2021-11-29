---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Accuracy
description: This page illustrates how to maximize the accuracy of Dynamsoft Barcode Reader
Keywords: accuracy
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: Accuracy
---

# How to create a High-Accuracy barcode reader

## Confidence

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the `minResultConfidence` to make a filter on the barcode results by the confidence value.  For Dynamsoft Barcode Reader v8.8 or higher version, the default value of the confidence is 30, which can filter the majority of misreading barcode results.

**Related API(s)/Parameter(s)**

- minResultConfidence

## Multi-frame Confirmation

When decoding on video streaming, there are always duplicated results decoded from multiple frames for each barcode. The duplicated results can be devoted to verifying the correctness of the barcode results. Since the misreading is not frequent, when duplicated results are output in multiple frames, we can confirm the results are correct. However, if a result has never been output for a second time in a period, the result must be incorrect and we will discard it.

**Available Editions**

- Mobile
  - For mobile efitions, please use `BarcodeReader.enableResultVerification` to enable/disable the Muti-frame confirmation.
- JavaScript
  - For the JavaScript edition, the multi-frame confirmation is enabled by default.

**Related API(s)/Parameter(s)**

## Other Result Filter Methods

When the barcodes to be processed are confirmed, the barcode texts might have common features that can help you on filtering the incorrect results. Via `FormatSpecification` parameters, you can add barcode result text restrictions like regular expression requirements and text length range. ()

**Related API(s)/Parameter(s)**

- `BarcodeTextRegExPattern`
- `BarcodeTextLengthRangeArray`

## Format Specification

Sometimes, misreading on an OneD barcode is caused by misrecognizing the barcode to another type. If your program is not going to process all kinds of barcodes, please be sure that you have specified the barcode formats to avoid misrecognizing. In addition, specifying the required barcode formats will also benefit the barcode reading speed.

## Skip Error-Prone Barcode

When the barcode is badly printed or the input image is blurry, you might still get results from these error-prone barcodes but the correctness of the barcode result is hard to guarantee. On this occasion, you would better skip decoding on the error-prone barcodes to ensure the result accuracy even if the read rate is declined. For small-module barcodes, you can use the `FormatSpecificant` parameter `ModuleSizeRangeArray` to specify the minimum acceptable module size of the barcodes. You can also increase the `scaleDownThreshold` value to ensure the barcodes are not shrunk too small. The blurry barcodes are another reason for the misreading and you can skip processing the blurry barcodes by configuring the `DeblurModes` or `DeblurLevel` parameters.

**Related API(s)/Parameter(s)**

- `ModuleSizeRangeArray`
- `scaleDownThreshold`
- `DeblurModes`
- `DeblurLevel`

## External settings – DCE Settings

Users can optimize the parameter settings to prevent misreading but this is not the only way to improve the accuracy. For the video barcode decoding scenarios, promoting the quality of the video will definitely improve the barcode decoding accuracy. Although there are no camera control APIs in Dynamsoft Barcode Reader, you can still use Dynamsoft Camera Enhancer (DCE) APIs to take control of the input video streaming. DCE is an SDK that integrates the camera control APIs and video frame pre-processing features. It can be easily bound to the Barcode Reader and enable users to optimize the input video streaming when using the Barcode Reader. You can make the following setting to improve the accuracy of barcode decoding.

**Enable the Frame Filter Feature of DCE**

When the frame filter feature DCE is enabled, a quick sharpness evaluation will be implemented on each video frame and the low sharpness frame will be discarded to ensure the barcode reader will process on high-quality frames only. Since the Barcode Reader doesn't need to process the blurry video frames, the accuracy will be highly improved.

**Enable Enhanced focus**

This feature is highly recommended to be implemented on low-end devices. Enhancing the camera focus ability will reduce the blurry frames in the video streaming, which benefits the barcode reading accuracy.

**Set Higher Resolution**

A higher resolution will promote the sharpness of the video frames and also enlarge the module size of barcodes. Setting the resolution higher will definitely benefit the barcode reading accuracy but sacrifice a bit of speed. In addition, please remember to set the `scaleDownThreshold` to a higher value. When the `scaleDownThershold` is not big enough, the barcode reader will still process on the shrunken images.

**Related API(s)/Parameter(s)**

- `CameraEnhancer.enableFeatures`
- `CameraEnhancer.setResolution`
- `scaleDownThreshold`
