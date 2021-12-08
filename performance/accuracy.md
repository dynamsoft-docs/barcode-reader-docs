---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Accuracy
description: This page illustrates how to maximize the accuracy of Dynamsoft Barcode Reader
Keywords: accuracy
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: Accuracy
---

<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

<script type="text/x-mathjax-config">

    MathJax.Hub.Config({

        tex2jax: {

        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],

        inlineMath: [['$','$']]

        }

    });

</script>

# How to create a High-Accuracy barcode reader

This article illustrates how Dynamsoft Barcode Reader (hereafter referred to as "DBR") is designed to ensure the accuracy of barcode results and how you can add settings to further improve the accuracy.

## Definitions

The accuracy of the barcode reader is defined as follow:

$ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $

Accuracy is the ability to ensure the correctness of output results. Some accuracy protections are enabled as the default settings of DBR. However, you can further improve the accuracy when the usage scenario has the following features:

- Highly automated barcode processing without manual verification.
- Most of the target barcodes are badly printed.

The speed and the read rate are the other two dimensions of performance and they are defined as follows. They might be sacrificed if you are trying to improve the accuracy.

$ Speed = \frac{Total~Time~Consumption}{Number~of~All~decoded~Barcode~Results} $

$ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $

## General Settings

The following settings can be applied to nearly all usage scenarios to improve the barcode reading accuracy. They might sacrifice a bit of speed but hardly influence the read rate.

### Result Confidence Filter

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the `minResultConfidence` to make a filter on the barcode results by the confidence value. For Dynamsoft Barcode Reader v8.8 or higher version, the default value of the confidence is 30, which can filter the majority of misreading barcode results. A higher `minResultConfidence` setting will definitely improve the accuracy of the barcode results but reduce the read rate and speed at the same time. Therefore, please set the `minResultConfidence` according to your actual usage scenario to balance the accuracy and speed.

**Related API(s)/Parameter(s)**

- [`minResultConfidence`]({{site.parameters_reference}}min-result-confidence.html)

### Multi-frame Verification

When using video barcode decoding, a barcode can be processed multiple times in consecutive video frames, which produces duplicate results. These duplicate results can be applied to verify the result's correctness. When a barcode result has been decoded more than once within a short period of time, we can confirm it is a correct result and output it. However, if a barcode result has never been decoded a second time within a period of time, we consider it a misread result and discard it.

**Related API(s)/Parameter(s)**

For JavaScript edition, multi-frame verification is enabled when using video barcode scanning. For Android and iOS editions, you have to use the following APIs to control the status of the multi-frame verification:

- [`enableResultVerification`]({{site.android_api}}primary-result.html#enableresultverification) (Android)
- [`enableResultVerification`]({{site.oc_api}}primary-result.html#enableresultverification) (iOS)

## Specific Settings

The following settings will benefit the barcode reading accuracy but also limit the read rate. When you know exactly what your usage scenario is, you can apply the following settings to improve the barcode reading accuracy on that scenario. The read rate of your program will be extremely declined and be sure to change the settings if you want to use the program to other usage scenarios.

### Format Specification

Sometimes, misreading on an OneD barcode is caused by misrecognizing the OneD barcode to another OneD type. When you have a basic understanding on the barcode formats and know exactly which formats are the targets in your usage scenario. You can let your barcode reading program focus on the target formats only and reject all the noninterest barcodes. Please be sure to change the format settings when you want to extend your usage scenarios. In addition, specifying the required barcode formats will also benefit the barcode reading speed.

**Related API(s)/Parameter(s)**

- [`BarcodeFormatIds`]({{site.parameters_reference}}barcode-format-ids.html)
- [`BarcodeFormatIds_2`]({{site.parameters_reference}}barcode-format-ids-2.html)

### Result Text Filter Methods

When the target barcodes are confirmed, the barcode texts might have common features that help you implement a result filter on the results text. Via `FormatSpecification` parameters, you can add barcode result text restrictions like [`regular expression`]({{site.parameters_reference}}barcode-text-regex-pattern.html) requirements and [`text length`]({{site.parameters_reference}}barcode-text-length-range-array.html) range.

**Related API(s)/Parameter(s)**

- [`BarcodeTextRegExPattern`]({{site.parameters_reference}}barcode-text-regex-pattern.html)
- [`BarcodeTextLengthRangeArray`]({{site.parameters_reference}}barcode-text-length-range-array.html)

### Balance the Accuracy and Read Rate on Error Prone Barcodes

**Skip Small-Module Barcodes**

The smaller the module size of the barcodes, the lower accuracy of the results. You can use the `FormatSpecificant` parameter `ModuleSizeRangeArray` to specify the minimum acceptable module size of the barcodes. You can also increase the `scaleDownThreshold` value to ensure the barcodes are not shrunk too small.

**Strategies on Blurry Barcodes**

`DeblurModes` is the parameter that controls the ability to decode blurry barcodes. There are multiple modes available under the index of `DeblurModes`. The more modes you enable, the more effort the library will spend to decode images. However, the blurry images are error-prone. Therefore, the risk of misreading is increased at the same time when the read rate on blurry images is improved.

- Simplify `DeblurModes` settings for video barcode scanning

Since there are multiple video frames for the barcode reader to process, it is not such important to decode successfully on a blurry barcode. Generally, you can reduce the enabled `DeblurModes` to improve both the speed and accuracy of the barcode decoding. However, if the target barcodes are badly printed or the working environment is terrible, a low-level `DeblurModes` setting might unable to read the barcodes. On this occasion, to keep the read rate at an acceptable level, it is recommended to enable more `DeblurModes` and configure the other settings like confidence and multi-frame verification to ensure accuracy.

- Keep high-level `DeblurModes` settings for image barcode decoding

For image barcode decoding, it is necessary to keep both the accuracy and the read rate at a high level to ensure that you can get the correct barcode result from the image. As a result, the lowest level of `DeblurModes` might not cover the usage scenarios. It is recommended to enhance the other accuracy-friendly parameter settings and enable a high-level `DeblurModes` setting.

**Related API(s)/Parameter(s)**

- [`ModuleSizeRangeArray`]({{site.parameters_reference}}module-size-range-array.html)
- [`scaleDownThreshold`]({{site.parameters_reference}}scale-down-threshold.html)
- [`DeblurModes`]({{site.parameters_reference}}deblur-modes.html)

<!--

## Optional Settings

The following parameter settings do not have obvious effects but still benefit the barcode decoding accuracy.

### Remove the Texture

`TextureDetectionModes` is designed for detecting and removing the texture on the image. When `TextureDetecttionModes` is set to `TDM_GENERAL_WIDTH_CONCENTRATION`, you can set the sensitivity level of texture detection. The value range is between 1 to 9 and the larger the value of this parameter, the more obvious the texture detection effect is.

If there exists texture area on the image, the `TextureDetectionModes` will definitely improve both the barcode decoding speed and accuracy. However, if there doesn't exist a texture area, the barcode decoding speed will be declined.

### Filter out the Text

`TextFilterModes` is designed for filtering the text on the image. Set the `TextFilterModes` to `TFM_GENERAL_CONTOUR` to make the text filter. The text filter is also available for sensitivity level settings from 1 to 9. Please note, the text filter will have no effects when you are using localization modes `LM_CONNECTED_BLOCKS` and `LM_SCAN_DIRECTLY`.

If there exists a text area on the image, the `TextFilterModes` will definitely improve both the barcode decoding speed and accuracy. However, if there doesn't exist a text area, the barcode decoding speed will be declined.

-->

## External Settings – Camera Enhancer Settings

Users can optimize the parameter settings to prevent misreading but this is not the only way to improve the accuracy. For the video barcode decoding scenarios, promoting the quality of the video will definitely improve the barcode decoding accuracy. Although there are no camera control APIs in Dynamsoft Barcode Reader, you can still use Dynamsoft Camera Enhancer (DCE) APIs to take control of the input video streaming. DCE is an SDK that integrates the camera control APIs and video frame pre-processing features. It can be easily bound to the Barcode Reader and enable users to optimize the input video streaming when using the Barcode Reader. You can make the following setting to improve the accuracy of barcode decoding.

### Frame Filter

When the frame filter feature DCE is enabled, a quick sharpness evaluation will be implemented on each video frame and the low sharpness frame will be discarded to ensure the barcode reader will process on high-quality frames only. Since the Barcode Reader doesn't need to process the blurry video frames, the accuracy will be highly improved.

### Enhanced focus

This feature is highly recommended to be implemented on low-end devices. Enhancing the camera focus ability will reduce the blurry frames in the video streaming, which benefits the barcode reading accuracy.

### Set Higher Resolution

A higher resolution will promote the sharpness of the video frames and also enlarge the module size of barcodes. Setting the resolution higher will definitely benefit the barcode reading accuracy but sacrifice a bit of speed. In addition, please remember to set the `scaleDownThreshold` to a higher value. When the `scaleDownThershold` is not big enough, the barcode reader will still process on the shrunken images.

**Related API(s)/Parameter(s)**

- <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#enablefeatures" target="_blank">`CameraEnhancer.enableFeatures`</a>
- <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#setresolution" target="_blank">`CameraEnhancer.setResolution`</a>

### Set the Scan Region

You can specify the scan region via DCE to remove the noninterest areas. The video frames will be cropped before barcode decoding so that the barcode reader will not be disturbed by the noninterest information and process even more fast and accurate.
