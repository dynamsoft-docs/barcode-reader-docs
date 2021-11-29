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

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") is designed for best accuracy and how to adjust its many settings to make the barcode reading even more accurate.

<!--
The default parameter of Dynamsoft Barcode Reader is accurate enough for general usage scenarios. However, if you are using DBR for some specified scenarios, you can still add the following configurations to further improve the accuracy of your barcode reading program.
-->

## Accuracy Settings for General Usage Scenarios

The following settings can be applied to nearly all usage scenarios to improve the barcode reading accuracy. They might sacrifice a bit of speed but hardly influence the read rate.

### Result Confidence Filter

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the `minResultConfidence` to make a filter on the barcode results by the confidence value. For Dynamsoft Barcode Reader v8.8 or higher version, the default value of the confidence is 30, which can filter the majority of misreading barcode results. A higher `minResultConfidence` setting will definitely improve the accuracy of the barcode results but reduce the read rate and speed at the same time. Therefore, please set the `minResultConfidence` according to you actual usage scenario to balance the accuracy and speed.

**Related API(s)/Parameter(s)**

- [`minResultConfidence`]({{site.parameters_reference}}min-result-confidence.html)

### Video Multi-frame Confirmation

When decoding on video streaming, there are always duplicated results decoded from multiple frames for each barcode. The duplicated results can be devoted to verifying the correctness of the barcode results. Since the misreading is not frequent, when duplicated results are output in multiple frames, we can confirm the results are correct. However, if a result has never been output for a second time in a period, the result must be incorrect and we will discard it.

**Related API(s)/Parameter(s)**

For JavaScript edition, the multi-frame confirmation is a default setting of video barcode scanning. For Android and iOS editions, you can use the following APIs to control the status of the multi-frame confirmation:

- [`enableResultVerification`]({{site.android_api}}primary-result.html#enableresultverification) (Android)
- [`enableResultVerification`]({{site.oc_api}}primary-result.html#enableresultverification) (iOS)

## Accuracy Settings for Specific Usage Scenarios

The following settings will benefit the barcode reading accuracy but also limit the read rate. When you know exactly what your usage scenario is, you can apply the following settings to improve the barcode reading accuracy on that scenario. The read rate of your program will be extremely declined and be sure to change the settings if you want to use the program to other usage scenarios.

### Format Specification

Sometimes, misreading on an OneD barcode is caused by misrecognizing the OneD barcode to another OneD type. When you have a basic understanding on the barcode formats and know exactly which formats are the targets in your usage scenario. You can let your barcode reading program focus on the target formats only and reject all the noninterest barcodes. Please be sure to change the format settings when you want to extend your usage scenarios. In addition, specifying the required barcode formats will also benefit the barcode reading speed.

**Related API(s)/Parameter(s)**

- [`BarcodeFormatIds`]({{site.parameters_reference}}barcode-format-ids.html)
- [`BarcodeFormatIds_2`]({{site.parameters_reference}}barcode-format-ids-2.html)

### Advanced Result Filter Methods

When the target barcodes are confirmed, the barcode texts might have common features that help you implement a result filter on the results text. Via `FormatSpecification` parameters, you can add barcode result text restrictions like [`regular expression`]({{site.parameters_reference}}barcode-text-regex-pattern.html) requirements and [`text length`]({{site.parameters_reference}}barcode-text-length-range-array.html) range.

**Related API(s)/Parameter(s)**

- [`BarcodeTextRegExPattern`]({{site.parameters_reference}}barcode-text-regex-pattern.html)
- [`BarcodeTextLengthRangeArray`]({{site.parameters_reference}}barcode-text-length-range-array.html)

### Skip Error-Prone Barcode

You might still get results from badly printed barcodes or blurry images. If accuracy is on the first priority, you make the following parameter configurations to skip the error-prone barcodes.

**Skip Small-Module Barcodes**

The smaller the module size of the barcodes, the lower accuracy of the results. You can use the `FormatSpecificant` parameter `ModuleSizeRangeArray` to specify the minimum acceptable module size of the barcodes. You can also increase the `scaleDownThreshold` value to ensure the barcodes are not shrunk too small.

**Skip Blurry Barcodes**

The blurry barcodes are another reason for the misreading and you can skip processing the blurry barcodes by configuring the `DeblurModes` or `DeblurLevel` parameters. When you are using `DeblurLevel`, a lower `DeblurLevel` will help you skip more blurry barcodes. When you are using `DeblurModes`, the fewer modes you set, the more blurry barcodes you will skip. When you are decoding from the video streaming, please be sure that your video streaming is clear enough for barcode decoding. Otherwise, you might skip the majority of video frames without the help of `DeblurLevel` or `DeblurModes`.

**Related API(s)/Parameter(s)**

- [`ModuleSizeRangeArray`]({{site.parameters_reference}}module-size-range-array.html)
- [`scaleDownThreshold`]({{site.parameters_reference}}scale-down-threshold.html)
- [`DeblurModes`]({{site.parameters_reference}}deblur-modes.html)
- [`DeblurLevel`]({{site.parameters_reference}}deblur-level.html)

## External Settings – Camera Enhancer Settings

Users can optimize the parameter settings to prevent misreading but this is not the only way to improve the accuracy. For the video barcode decoding scenarios, promoting the quality of the video will definitely improve the barcode decoding accuracy. Although there are no camera control APIs in Dynamsoft Barcode Reader, you can still use Dynamsoft Camera Enhancer (DCE) APIs to take control of the input video streaming. DCE is an SDK that integrates the camera control APIs and video frame pre-processing features. It can be easily bound to the Barcode Reader and enable users to optimize the input video streaming when using the Barcode Reader. You can make the following setting to improve the accuracy of barcode decoding.

### Frame Filter

When the frame filter feature DCE is enabled, a quick sharpness evaluation will be implemented on each video frame and the low sharpness frame will be discarded to ensure the barcode reader will process on high-quality frames only. Since the Barcode Reader doesn't need to process the blurry video frames, the accuracy will be highly improved.

### Enhanced focus

This feature is highly recommended to be implemented on low-end devices. Enhancing the camera focus ability will reduce the blurry frames in the video streaming, which benefits the barcode reading accuracy.

### Set Higher Resolution

A higher resolution will promote the sharpness of the video frames and also enlarge the module size of barcodes. Setting the resolution higher will definitely benefit the barcode reading accuracy but sacrifice a bit of speed. In addition, please remember to set the `scaleDownThreshold` to a higher value. When the `scaleDownThershold` is not big enough, the barcode reader will still process on the shrunken images.

**Related API(s)/Parameter(s)**

- `CameraEnhancer.enableFeatures`
- `CameraEnhancer.setResolution`
