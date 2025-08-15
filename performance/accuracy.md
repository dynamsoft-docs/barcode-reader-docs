---
layout: default-layout
title: Accuracy - Dynamsoft Barcode Reader Performance
description: This page illustrates how to maximize the accuracy of Dynamsoft Barcode Reader
Keywords: accuracy
needAutoGenerateSidebar: true
noTitleIndex: false
breadcrumbText: Accuracy
permalink: /performance/accuracy.html
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

As the ultimate guide on how to configure DBR to realize its full accuracy potential, we will start with some general methods that are both simple and effective, and then delve into some of the more niche or specific methods to achieve higher accuracy. Lastly, we'll cover some external settings such as those of the Camera Enhancer SDK which can be useful in certain situations.

> The following shows the definition of the three metrics.
>
>$ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $
>
>$ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
>
>$ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
>
>Do bear in mind that if one of these metrics is prioritized, the other two may not be ideal.

## General Settings

The following settings can be applied to nearly all usage scenarios to improve the barcode reading accuracy.

### Filter the Result by Confidence

The confidence attribute of the barcode results is determined by the reliability of that result. Users can set the [`MinResultConfidence`]({{site.dcvb_parameters_reference}}barcode-format-specification/min-result-confidence.html) to make a filter on the barcode results by the confidence value. For Dynamsoft Barcode Reader v8.8 or later, the default value of the confidence is optimized to 30, which can filter out the majority of misread barcode results. A higher `MinResultConfidence` setting will definitely improve the accuracy of the barcode results but reduce the read rate and speed at the same time. Therefore, please set the `MinResultConfidence` according to your actual usage scenario to balance the accuracy, speed read rate.


### Enable Multi-frame Verification

For interactive video scenarios, it is possible to receive duplicate results for a single barcode across multiple frames. By adding a `CMultiFrameResultCrossFilter` and enabling result cross-verification, the result is verified and output only if a certain barcode result appears twice or more within the past few frames. Otherwise, it is considered a misread result and discarded.

## Specific Settings

When configuring the specific settings, you have to know some basic information about your usage scenario. This type of information will help exclude undesired barcode results or put a filter on the barcode results.

### Specify the Barcode Formats

The barcode format specification is the most basic decode setting that affects all three metrics of the performance. Sometimes, misreading a 1D barcode is caused by misrecognizing the 1D barcode as another 1D barcode type. If the targeted 1D barcodes are scoped, you can specify the barcode format in your project to lower the probability of misread results. 

The related parameters are [ `BarcodeFormatIds` ]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/barcode-format-ids.html).

### Enable Result Text Filter

When the target barcodes are confirmed, the barcode texts might have common features that help you implement a result filter on the result text. Using the [`BarcodeFormatSpecification`]({{site.dcvb_parameters}}file/auxiliary/barcode-format-specification.html) parameters, you can add barcode result text restrictions like [`regular expression`]({{site.dcvb_parameters_reference}}barcode-format-specification/barcode-text-regex-pattern.html) requirements and [`text length`]({{site.dcvb_parameters_reference}}barcode-format-specification/barcode-text-length-range-array.html) range.


### Exclude Small-Module Barcodes

The module size of the barcode refers to the pixel size of the barcode modules (e.g. the pixel width of a 1D barcode line or the smallest cell size of a QR code). The smaller the module size of the barcodes, the higher risk of a misread. If it is not necessary to decode all the small-size barcodes in the scenario, you can skip the small-module barcodes by specifying the minimum acceptable module size of the barcodes via parameter [`ModuleSizeRangeArray`]({{site.dcvb_parameters_reference}}barcode-format-specification/module-size-range-array.html).

When processing large-size images, DBR scales down the images based on the [`ScaleDownThreshold`]({{site.dcvb_parameters_reference}}scale-down-threshold.html) before decoding. However, sometimes the barcode on the image might be shrunk too small. You can increase the [`scaleDownThreshold`]({{site.dcvb_parameters_reference}}image-parameter/scale-down-threshold.html) value to ensure the module size of the barcodes is big enough to get the correct barcode results.

**Recommendation**

By increasing the `MinValue` of the `ModuleSizeRangeArray`, the SDK can skip the small-module barcodes and their potential misreads, thus ensuring a higher accuracy. Increasing the value of `ScaleDownThreshold` can also potentially lead to better accuracy, while lowering it offers better speed.

### Optimize DeblurModes Settings

[`DeblurModes`]({{site.dcvb_parameters_reference}}barcode-reader-task-settings/deblur-modes.html) is the parameter that controls how much effort DBR will spend in processing the located barcodes. It is set to the highest level by default so that DBR will try its best to process every localized barcode even if they are highly blurred. However, the blurriness of the barcodes and the accuracy of the barcode results are inversely proportional. As a result, when the read rate is high enough with the current settings, you can try to simplify the `DeblurModes` array to reduce the possibility of any misreads.

Generally, the simpler the `DeblurModes` array is, the higher the accuracy. As a result, when accuracy is prioritized, the aim is to find the simplest `DeblurModes` configuration that covers the requirements. To find the simplest configuration, it is recommended to approach this from a trial and error standpoint and continuously test each configuration. For this approach, you can start with the full `DeblurModes` array and incrementally reduce the enabled `DeblurModes` till the read rate is no longer acceptable. 

**Recommendation**

Please note, `DM_DEEP_ANALYSIS` is the most effective, but most complicated, mode to process blurry barcodes and you can remove this mode first with this approach. `DM_BASED_ON_LOC_BIN` and `DM_THRESHOLD_BINARIZATION` are the most basic `DeblurModes`, and should be kept to retain the minimum barcode decoding capability.

## External Settings – Camera Enhancer Settings

For the interactive video scenarios, promoting the quality of the video will definitely improve the barcode decoding accuracy. Although there is no camera control APIs within the Dynamsoft Barcode Reader API, Dynamsoft Camera Enhancer (DCE) APIs offer the ability to take control of the input video streaming. DCE is an SDK that integrates the camera control API and video frame pre-processing features. It can be easily bound to the Barcode Reader and enables users to optimize the input video streaming when using the Barcode Reader. The following DCE settings and functions can help improve the accuracy of barcode decoding:

### Filter Out the Blurry Frames

When the frame filter feature of DCE is enabled, a quick sharpness evaluation will be implemented on each video frame - low sharpness frames will be discarded to ensure the barcode reader will process high-quality frames only. Since the Barcode Reader doesn't need to process the blurry video frames, the accuracy will be highly improved. 

**Recommendation**

The frame-filter feature of DCE can be enabled via the <a href="https://www.dynamsoft.com/camera-enhancer/docs/mobile/programming/android/primary-api/camera-enhancer.html#enableenhancedfeatures" target="_blank">`enableEnhancedFeatures`</a> method.

### Enhance the Camera Focus

It is highly recommended that this feature be implemented on low-end devices. Enhancing the camera focus ability will reduce the blurry frames in the video streaming, which benefits the barcode reading accuracy. 


**Recommendation**

To enable the enhanced-focus feature of DCE, please use <a href="https://www.dynamsoft.com/camera-enhancer/docs/mobile/programming/android/primary-api/camera-enhancer.html#enableenhancedfeatures" target="_blank">`enableEnhancedFeatures`</a>.

### Set Higher Resolution

A higher resolution will promote the sharpness of the video frames and enlarge the module size of barcodes. Increasing the resolution will definitely benefit the barcode reading accuracy while sacrificing speed. In addition, please remember to set the `MinValue` of `ScaleDownThreshold` to a higher value if you want to decode on high-resolution video streaming. If the `ScaleDownThershold` is smaller than the size of video frames, the video frames will be shrunk to a smaller size before being decoded. 

**Recommendation**

To configure the resolution, please use the <a href="https://www.dynamsoft.com/camera-enhancer/docs/mobile/programming/android/primary-api/camera-enhancer.html#setresolution" target="_blank">`setResolution`</a> method.

### Define the Scan Region

Using DCE, you can specify the scan region so that the SDK only works with a specific area of the image or frame. The video frames will be cropped before barcode decoding so that the barcode reader will ignore the areas that are of no interest to the decoding process, thus resulting in faster and more accurate results. 

**Recommendation**

You can specify the scan region via the DCE method <a href="https://www.dynamsoft.com/camera-enhancer/docs/mobile/programming/android/primary-api/camera-enhancer.html#setscanregion" target="_blank">`setScanRegion`</a>.

## Summary

In this article, we explored the accuracy-friendly settings. In summary, the methods that improve the accuracy can be categorized as follows:

- Enhance the image/video source before decoding
- Exclude the areas of the image or frame that are not related to the barcode when decoding
- Filter out the incorrect results after decoding

Some of the accuracy-friendly settings may benefit the speed or read rate at the same time. For example, when the non-supported barcode formats are excluded, both the processing speed and the accuracy are improved. Hardly does this setting affect the read rate metric. However, some other accuracy-friendly settings, for example, the confidence filter (increasing the `MinResultConfidence`), may worsen both the processing speed and read rate. To adjust the parameter setting to fit your usage scenario, you might need to find the balance between the 3 dimensions of performance.

The following links are the article that explains how to make settings when either speed or read rate is prioritized. Reading the articles will help you further understand the parameter settings and measure how to configure the setting for your own project.

- [How to boost Speed]({{ site.performance }}speed.html)
- [How to boost Read Rate]({{ site.performance }}read-rate.html)

If you are not sure where to start regarding which dimension of the performance should be prioritized or you are still puzzled by the parameter settings, please feel free to [contact us](https://www.dynamsoft.com/contact/) to get support from our technical support team. Our team can give you professional suggestions on the parameter settings that best fulfill your requirements.
