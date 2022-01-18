---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Accuracy
description: This page illustrates how to maximize the accuracy of Dynamsoft Barcode Reader
Keywords: accuracy
needAutoGenerateSidebar: true
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

# How to Boost Barcode Reading Accuracy

There are 3 basic metrics for measuring the performance of a barcode reader application: **speed**, **accuracy** and **read-rate**. The Dynamsoft Barcode Reader SDK (DBR) has been carefully designed to have excellent performance in all three of these metrics. In this article, we try to investigate all the possible methods you can take to let DBR focus on **accuracy**.

As the ultimate guide on how to configure DBR to realize its full accuracy potential, we will start with some common methods that are both simple and effective, and then delve into the various aspects of the barcode reading process defined by its algorithm. Lastly, we’ll cover some less-common methods which are useful in certain situations.

> The following shows the definition of the three metrics.
>
>$ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $
>
>$ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
>
>$ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
>
>Do bear in mind that, if one of these metrics is prioritized, the other two may not be ideal.

## General Settings

The following settings can be applied to nearly all usage scenarios to improve the barcode reading accuracy.

### Filter the Result by Confidence

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the [`minResultConfidence`]({{site.parameters_reference}}min-result-confidence.html) to make a filter on the barcode results by the confidence value. For Dynamsoft Barcode Reader v8.8 or higher version, the default value of the confidence is optimized to 30, which can filter out the majority of misreading barcode results. A higher `minResultConfidence` setting will definitely improve the accuracy of the barcode results but reduce the read rate and speed at the same time. Therefore, please set the `minResultConfidence` according to your actual usage scenario to balance the accuracy and speed.

### Enable Multi-frame Verification

When using video barcode decoding, a barcode can be processed multiple times in consecutive video frames, which produces duplicate results. These duplicate results can be applied to verify the result's correctness. When a barcode result has been decoded more than once within a short period of time, we can confirm it is a correct result and output it. However, if a barcode result has never been decoded a second time within a period of time, we consider it a misread result and discard it.

**Remarks**

For **JavaScript** edition, multi-frame verification is enabled when using video barcode scanning. For **Android** and **iOS** editions, you have to use the following APIs to control the status of the multi-frame verification:

- [`enableResultVerification (Android)`]({{site.android_api}}primary-result.html#enableresultverification)
- [`enableResultVerification (iOS)`]({{site.oc_api}}primary-result.html#enableresultverification)

## Specific Settings

When configuring the specific settings, you have to know some basic information about your usage scenario. The information will help to exclude the uninterest or make filters on the barcode results.

### Specify the Barcode Formats

The barcode format specification is the most basic decode setting that affects all three metrics of the performance. Sometimes, misreading on an OneD barcode is caused by misrecognizing the OneD barcode to another OneD type. If the targeting OneD barcodes are scoped, you can specify the barcode format in your project to avoid this kind of misreading. In addition, specifying the required barcode formats will also benefit the barcode reading speed.

### Enable Result Text Filter

When the target barcodes are confirmed, the barcode texts might have common features that help you implement a result filter on the results text. Via `FormatSpecification` parameters, you can add barcode result text restrictions like [`regular expression`]({{site.parameters_reference}}barcode-text-regex-pattern.html) requirements and [`text length`]({{site.parameters_reference}}barcode-text-length-range-array.html) range.

### Exclude Small-Module Barcodes

The module size of the barcode refers to the pixel size of the barcode modules (e.g. the pixel width of an OneD barcodes lines or the smallest cell size of a QR code). The smaller the module size of the barcodes, the higher risk of misreading. If it is not necessary to decode all the small-size barcodes in the scenario, you can skip the small-module barcodes by specifying the minimum acceptable module size of the barcodes via parameter [`ModuleSizeRangeArray`]({{site.parameters_reference}}module-size-range-array.html).

To speed up when processing large-size images, DBR always scales down the images based on the [`scaleDownThreshold`]({{site.parameters_reference}}scale-down-threshold.html) before decoding. However, sometimes the barcode on the image might be shrunk too small. You can also increase the [`scaleDownThreshold`]({{site.parameters_reference}}scale-down-threshold.html) value to ensure the module size of the barcodes are big enough to get correct barcode results.

### Optimize DeblurModes Settings

[`DeblurModes`]({{site.parameters_reference}}deblur-modes.html) is the parameter that controls how much effort DBR will spend to process the located barcodes. It is set to the highest level by default so that DBR will try its best to process every localized barcode even if they are highly blurred. However, the blurry level of the barcodes and the accuracy of the barcode results are inversely proportional. As a result, when the read rate is high enough for the current settings, you can try to simplify the `DeblurModes` settings to reduce the risk of misreading.

Generally, the simpler `DeblurModes` setting is the higher accuracy. As a result, when accuracy is prioritized, the core of `DeblurModes` settings is to find the simplest `DeblurModes` configuration that covers the requirements. To find the simplest configuration, you are recommended to implement a constant performance test. In the performance test, you can reduce the enabled `DeblurModes` continuously from your settings until the read rate is no longer satisfying. Please note, `DM_DEEP_ANALYSIS` is the most effective mode to process blurry barcodes and you can remove this mode first in your performance test. `DM_BASED_ON_LOC_BIN` and `DM_THRESHOLD_BINARIZATION` are the most basic `DeblurModes`, which should be kept to retain the minimum barcode decoding capability.

## External Settings – Camera Enhancer Settings

Users can optimize the parameter settings to prevent misreading but this is not the only way to improve the accuracy. For the video barcode decoding scenarios, promoting the quality of the video will definitely improve the barcode decoding accuracy. Although there is no camera control APIs in Dynamsoft Barcode Reader, you can still use Dynamsoft Camera Enhancer (DCE) APIs to take control of the input video streaming. DCE is an SDK that integrates the camera control APIs and video frame pre-processing features. It can be easily bound to the Barcode Reader and enable users to optimize the input video streaming when using the Barcode Reader. You can make the following setting to improve the accuracy of barcode decoding.

### Filter Out the Blurry Frames

When the frame filter feature DCE is enabled, a quick sharpness evaluation will be implemented on each video frame and the low sharpness frame will be discarded to ensure the barcode reader will process on high-quality frames only. Since the Barcode Reader doesn't need to process the blurry video frames, the accuracy will be highly improved. You can enable the frame-filter feature of DCE via method <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#enablefeatures" target="_blank">`enableFeatures`</a>

### Enhance the Camera Focus

This feature is highly recommended to be implemented on low-end devices. Enhancing the camera focus ability will reduce the blurry frames in the video streaming, which benefits the barcode reading accuracy. You can enable the enhanced-focus feature of DCE via method <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#enablefeatures" target="_blank">`enableFeatures`</a>

### Set Higher Resolution

A higher resolution will promote the sharpness of the video frames and also enlarge the module size of barcodes. Setting the resolution higher will definitely benefit the barcode reading accuracy but sacrifice a bit of speed. In addition, please remember to set the `scaleDownThreshold` to a higher value if you want to decode on high-resolution video streaming. If the `scaleDownThershold` is smaller than the size of video frames, the video frames will be shrunk to a smaller size before being decoded. You can configure resolution settings via method <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#setresolution" target="_blank">`setResolution`</a>

### Define the Scan Region

You can specify the scan region via DCE to remove the noninterest areas. The video frames will be cropped before barcode decoding so that the barcode reader will not be disturbed by the noninterest information and process even more fast and accurate. You can specify the scan region via method <a href="https://www.dynamsoft.com/camera-enhancer/docs/programming/android/primary-api/camera-enhancer.html?ver=latest#setscanregion" target="_blank">`setScanRegion`</a>

## Summary

In this article, the accuracy-friendly settings are listed and parsed. In summary, the measurements that improve the accuracy can be categorized as follow:

- Enhance the image/video source before decoding
- Exclude the uninterest when decoding
- Filter out the incorrect after decoding

Some of the accuracy-friendly settings may benefit the speed or read rate at the same time. For example, when the uninterested barcode formats are excluded, both the processing speed and the accuracy are improved and hardly do this setting affects the read rate. However, some other accuracy-friendly settings, for example, confidence filter, may decrease both the processing speed and read rate. To adjust the parameter setting to fit your usage scenario, you might need to find the balance between the 3 dimensions of the performance.

The following links are the article that explains how to make settings when speed or read rate is prioritized. Reading the articles will help you to further understand the parameter settings and measure how to configure the setting for your own project.

- [How to boost Speed](speed.md)
- [How to boost Read Rate](read-rate.md)

If you don't have ideas about which dimension of the performance should be prioritized or you are still puzzled by the parameter settings, please feel free to <a href="https://www.dynamsoft.com/company/contact/" target="_blank">contact us</a> to get support from our technical support team. Our teams can give you professional suggestions on the parameter settings to fulfill your requirements.
