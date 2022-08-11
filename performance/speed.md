---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Speed
description: This page shows how to adjust the settings to achieve best speed in barcode reading
keywords: speed
needAutoGenerateSidebar: true
noTitleIndex: false
breadcrumbText: Speed
permalink: /performance/speed.html
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

# How to Boost Barcode Reading Speed

There are 3 basic metrics for measuring the performance of a barcode reader application: **speed**, **accuracy** and **read-rate**. The Dynamsoft Barcode Reader SDK (DBR) has been carefully designed to offer excellent performance in all three of these metrics. In this article, we investigate all the possible ways in which you can configure DBR to focus on **speed**. 

This guide explores how DBR can be used to its full-speed potential, and it will be divided into three sections: The first section addresses some of the common and simple methods you can use to effectively increase speed metrics. The second section delves into the various stages of DBR's algorithm and how we can improve the speed at each of the crucial stages. The third and last section will cover some of the much less popular and used methods that our SDK can use to potentially increase the speed metric should the other methods not be sufficient.

> The following shows the definition of the three metrics.
>  
> $ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
>  
> $ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $
>  
> $ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
>  
> Do bear in mind that, if one of these metrics is prioritized, the other two may not be ideal.

## Explore the common methods for better speed

### Focus on the barcode types of interest

This is probably the most natural setting to start with. By clearly telling DBR what it is looking for, it can quickly skip other types of barcodes that can potentially be on the same image or frame.

The related parameters are [ `BarcodeFormatIds` ](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-format-ids.html?ver=latest) and [ `BarcodeFormatIds_2` ](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-format-ids-2.html?ver=latest) . The former parameter includes the most common barcode types and the latter includes the few unusual types that the SDK supports.

**Recommendation**

* Always specify the type(s) of the barcodes you are trying to read.

### Set an upper limit to the number of barcodes per image

By default, DBR tries to find as many barcodes as possible from a given image. Assume the image is very big but has only one barcode at the top, DBR finds the barcode instantly but will spend more time scanning the rest of the image or even try more steps to find more barcodes. By telling DBR that we are only expecting one barcode, it will stop reading the image as soon as that barcode is found.

The related parameter is [`ExpectedBarcodesCount`](https://www.dynamsoft.com/barcode-reader/parameters/reference/expected-barcodes-count.html?ver=latest) . Note that it can be set to 0 or any natural number. DBR's behaviour is as follows:

* `ExpectedBarcodesCount` is 0: DBR tries to localize barcodes with the first mode set in [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes). If barcodes are found, the rest of the modes are skipped and the recognition starts right away.
* `ExpectedBarcodesCount` is > 0: DBR tries to find as many barcodes as defined by this number. If enough barcodes have been found, the rest of the pending operations will be skipped. On the other hand, if the number of found barcodes is less than expected, DBR will exhaust all defined operations to find more until it times out.

**Recommendation**

* Do not set the number to exceed the actual number of barcodes on the image.
* If you are not sure how many barcodes there might be, set `ExpectedBarcodesCount` to 0.
* For interactive scenarios, set `ExpectedBarcodesCount` to 1.

### Determine the appropriate binarization mode

The binarization of the image is the basis for the localization of barcodes. Depending on the lighting conditions, we can choose either the mode [BM_THRESHOLD](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_threshold) or [BM_LOCAL_BLOCK](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_local_block) for the parameter [BinarizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/binarization-modes.html#binarizationmodes).

**Recommendation**
 
* If the images to be read are of high quality (acquired with good lighting conditions) like scanned documents, use `BM_THRESHOLD`. Otherwise, use `BM_LOCAL_BLOCK`.
* Try not to set both modes since DBR might try both and it slows things down. If you must set both, set `BM_THRESHOLD` as the first option.

### Adjust the localization modes

A barcode is localized before it gets decoded. The localization process takes up a large portion of the overall time spent. We can adjust the localization modes to speed things up with its corresponding parameter [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes).

**Recommendation**
 
* For interactive scenarios (reading from a video input), set `LM_SCAN_DIRECTLY` as the top priority, followed by `LM_CONNECTED_BLOCKS`.
* For still image reading, use a mode based on the target barcode types then add `LM_CONNECTED_BLOCKS` as the back-up mode or set `LM_CONNECTED_BLOCKS` as the first mode followed by a mode for that specific barcode type. Read more on which mode matches up with which barcode types and how to tune up a mode at [Choose the optimum localization modes](#choose-the-optimum-localization-modes).

### Configure the final decoding process with DeblurModes

The parameter [DeblurModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-modes.html#deblurmodes) is used to configure how DBR processes already-localized barcode zones (images cut around the barcode boundaries from the original image) to get the final results.

Deblurring is the last configurable step before a barcode is decoded. DBR by default has all deblurring algorithms enabled so that it tries its best to decode each localized barcode zone. When speed is the priority over the other metrics, we can ask DBR to try just one or two of these modes by setting `DeblurModes`.

**Recommendation**

* For best speed and especially for interactive scenarios like reading from a video input, include only `DM_BASED_ON_LOC_BIN` and `DM_THRESHOLD_BINARIZATION` in the `DeblurModes` array. 
* If the image quality is not good enough, you can add one or a few of these modes `DM_DIRECT_BINARIZATION`, `DM_GRAY_EQUALIZATION`, `DM_SMOOTHING`, `DM_MORPHING`, `DM_SHARPENING` and `DM_SHARPENING_SMOOTHING` after the initial entries of the array. These modes will process the pixels in the localized barcode zones again for better recognition.
* Avoid using the most time-consuming mode `DM_DEEP_ANALYSIS` which is designed for desperate scenarios where read rate is prioritized.

### Optimize frames from a video input

For interactive barcode reading from a video input, you get better speed if:

* the camera that takes the best shot of the intended barcode(s) is used; 
* the video frames are clear; 
* the video frames are trimmed around the barcode(s) before submitted for barcode reading; 
* the video frames are provided in a way that reduces the waiting time of the barcode reading engine.

The [Dynamsoft Camera Enhancer SDK](https://www.dynamsoft.com/camera-enhancer/docs/introduction/) (DCE) is designed to do all the above like this:

> NOTE: DCE is available in the SDK packages of DBR iOS v8.2.1+, DBR Android v8.2.1+ and DLR ([Dynamsoft Label Recognizer](https://www.dynamsoft.com/label-recognition/programming/javascript/user-guide.html?ver=latest)) JavaScript v2.2+. Also, the logic is built into the `BarcodeScanner` class of DBR JavaScript v8.6.0+.

* it comes with camera control and is able to find and open the best suited camera by default (with support for manual adjustment too); 
* it has a lightspeed algorithm to detect whether a frame is blurry. Only clear frames are passed along to DBR (only supported on iOS & Android at present); 
* it can crop the video frames with a predefined scan region so that only the relevant part of the frames are passed to DBR; 
* it maintains a buffer of frames for DBR to fetch. This reduces the wait time to almost zero.

In addition to the above, DCE also does the following (only supported on iOS & Android at present):

* if a frame is blurred, it tells the camera to adjust its focus; 
* if DBR finds the barcode too small in the frame, DCE tells the camera to zoom in.

**Recommendation**

* Take advantage of DCE in interactive barcode reading.
* Set a scan region with DCE and show an indicator of the region so that users know where to focus.
* Try not to use very high resolutions unless absolutely necessary. The default 720P (1280 * 720) usually works fine for most scenarios.

> Note that DCE and DBR run in parallel, so it's ok to enable more DCE features without affecting the overall speed.

## Delve into the algorithm

### Reduce the size of the image

When locating barcodes, DBR scans the whole image, so the larger the size of the image, the more time it takes. To speed things up, we can reduce the size of the original image. Usually the reduction is done by scaling down a large image, or delimiting the region of interest. Let's explore each of those methods:

#### Scale down a monstrous image

A barcode normally keeps its shape and can be read correctly even when the image gets scaled down. Therefore, DBR shrinks very large images before reading them. The parameter [ScaleDownThreshold](https://www.dynamsoft.com/barcode-reader/parameters/reference/scale-down-threshold.html) can be used to determine the threshold beyond which the scale down happens.

**Recommendation**
 
Try not to set the threshold much lower than the default value as that might make the barcode too dense to be read.

#### Delimit the region of interest

When reading barcodes from a certain type of documents or from a video input, the barcode location can usually be predetermined. For example, the barcode on a patient registration form is most likely located in the top 20% of the document and the barcode that a user is trying to read from a video input is usually located at the center. In such cases, we can tell DBR to only read the specific region(s) of interest (ROIs).

There are two ways to specify the region:

* manually define a region by providing the coordinates of its contours. Each region is defined by a [RegionDefinition](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-definition/) and then specified by [RegionDefinitionNameArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-parameter/index.html#regiondefinitionnamearray); 
    > In runtime settings, the related parameter is [`Region`](https://www.dynamsoft.com/barcode-reader/parameters/reference/region.html?ver=latest) .

* let DBR find the region based on the colour/grayscale distribution of different parts of the image, this is controlled by the parameter [RegionPredetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-predetection-modes.html#regionpredetectionmodes).

**Recommendation**

Set a region manually if it is known that the barcode(s) will be in the general vicinity of the specified region.

> NOTE
>  
> * With a template, DBR supports defining multiple zones on one image, so even if you want to scan multiple barcodes scattered on one image, you can still speed things up by delimiting the ROIs.
> * If the region is certain and can be defined manually, manually defining the region can save more time than doing region predetection as that usually involves processing of multiple zones and chances are only one of these zones has the intended barcode.
> * When reading barcodes from a video input, DCE can define the scan region itself. In this case, DBR no longer needs to specify a region. Read more on [Optimize frames from a video input](#optimize-frames-from-a-video-input).

<!--colourClusteringModes seems to have no effect?

### Convert the image to grayscale --ColourConversionModes

### Invert the image if the original image is inverted

-- GrayscaleTransformationModes
-->

### Accelerate the image conversion

The goal of preprocessing the original image is to convert it into a binarized image on which the barcodes are much easier to locate. In most cases, the original image is in color and it first gets converted into a grayscale image and then gets binarized.

There are a few things we can do to speed things up in the preprocessing phase. Here are three of them:

#### Select exact operation options

DBR provides multiple options for each preprocessing operation and will go through all set options. For better speed, we should try to specify just one option for each of the following operations.

*Convert the image to grayscale*

If the original image is not a grayscale image, DBR will convert it to a grayscale image. After that, the barcode symbol is either lighter or darker than the background. We call a darker barcode a normal barcode and a lighter barcode an inverted barcode. When locating barcodes, DBR expects the barcodes to be normal. Therefore, if an image in fact has inverted barcodes, DBR needs to invert the color of the image in advance. This is controlled by the parameter [GrayscaleTransformationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/grayscale-transformation-modes.html?ver=latest).

**Recommendation**

Depending on the images to read, specify either `GTM_ORIGINAL` or `GTM_INVERTED` . Do not specify both.

*Enhance the grayscale image quality*

The grayscale image converted from the original image can usually be used directly. But suppose your image has some distortion that can be solved by common image processing methods, the parameter [ImagePreprocessingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-preprocessing-modes.html#imagepreprocessingmodes) can be set to allow extra operations for getting a higher-quality grayscale image.

**Recommendation**

In most cases, just use the default `IPM_GENERAL` mode. If necessary, specify only one out of the 5 available values `IPM_GENERAL` , `IPM_GRAY_EQUALIZE` , `IPM_GRAY_SMOOTH` , `IPM_SHARPEN_SMOOTH` , `IPM_MORPHOLOGY` based on your images. The more image preprocessing modes you specify, the worse that the speed might get.

#### Remove texture and filter text

The less the noise, the faster the localization. Use the parameters [TextureDetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/texture-detection-modes.html#texturedetectionmodes) and [TextFilterModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-filter-modes.html#textfiltermodes) to remove texture and filter text in the binarized image.

**Recommendation**
 
* For images with texture (such as images taken on the screen), enable texture detection with `TextureDetectionModes`. Read more on [How to deal with image textures](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/texture-detection.html?ver=latest#).
* For images with lots of text, enable text filter with `TextFilterModes`. Read more on [How to filter text in an image](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/text-filter.html?ver=latest#)

#### Adapt image binarization for speed

The image binarization is controlled by the parameter [BinarizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/binarization-modes.html#binarizationmodes). This has been discussed briefly above in [Determine the appropriate binarization mode](#determine-the-appropriate-binarization-mode) where the recommendation is to use either `BM_THRESHOLD` or `BM_LOCAL_BLOCK` . Here, we will examine some mode arguments that allow the modes to adapt to a speed-first application. For a quick look on the relationship between modes and mode arguments, please refer to this [page](https://www.dynamsoft.com/barcode-reader/parameters/enum/parameter-mode-enums.html?ver=latest).

* For `BM_THRESHOLD`, we can explicitly set a value to the argument `BinarizationThreshold` which dictates at which point a pixel is regarded as black/white. Generally we can just use the default value `-1` which allows DBR to calculate a proper threshold itself.

* For `BM_LOCAL_BLOCK`, the block size should be set to an appropriate value (5 ~ 8 times the module size) with the arguments  `BlockSizeX` & `BlockSizeY` and `EnableFillBinaryVacancy` should be set to `false`. 
  + As long as the block is not too small, the smaller its size, the faster it gets.
  + If `BlockSizeX` & `BlockSizeY` are not set manually, DBR will determine their default values based on the size of the image.
  + If the block size is NOT set properly, it's likely that vacancies will appear in the barcode modules in the binarized image in which case filling up the vacancies can help with the decoding. This operation is enabled with the argument `EnableFillBinaryVacancy` . However, filling up the vacancies is a time-consuming operation and should be avoided if speed is the top priority.

### Choose the optimum localization modes

Now that we have a binarized image processed from the original image, we can start localizing the barcode zones. DBR comes with 8 options for the parameter [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes) which determines how the localization is done. Of the 8 modes, 3 of them are designed for one or a few types of barcodes:

* `LM_ONED_FAST_SCAN` works best for linear or 1D barcodes that are of relatively high quality; 
* `LM_STATISTICS_MARKS` is meant for QR or DataMatrix barcodes generated by direct part marking (DPM); 
* `LM_STATISTICS_POSTAL_CODE` is meant for postal codes.

The following 2 modes are designed for certain usage scenarios:
* `LM_SCAN_DIRECTLY` can significantly speed things up in interactive scenarios (mostly for 1D, QR or PDF417 codes); 
* `LM_STATISTICS_CENTRE` is preferred when the barcodes appear at the center of the image (mostly for QR or DataMatrix codes).

Last but not least, the following 3 modes are designed for general use:
* `LM_CONNECTED_BLOCKS` usually gives the best results and should always be used as the top priority mode or at least as a back-up mode; 
* `LM_LINES` is a supplementary mode for `LM_CONNECTED_BLOCKS` and should always be used after `LM_CONNECTED_BLOCKS`; 
* `LM_STATISTICS` is the last resort to try finding the barcode(s) when none or not enough barcodes have been found. Therefore, it should always be used as the last mode.

> NOTE: 
>  
> * None of the first 5 modes should be used alone.
> * The last 3 modes can be used for all types of barcodes and they all share the same design: scan the image once to find all types of barcodes. And because DBR scans for the characteristics of all types of barcodes at once, it doesn't need to process the same image twice or more times when different types of barcodes are required. In other words, whether you just need to scan barcodes of a particular type or multiple types, the time cost is almost the same.

For certain barcode type(s) or usage scenarios, choosing one or two localization modes can significantly speed things up, check out [Adjust the localization modes](#adjust-the-localization-modes) on our recommended settings. In addition, when the target barcode shows more distinctive characteristics, a localization mode can be further customized for even better speed. 

* For `LM_ONED_FAST_SCAN` and `LM_SCAN_DIRECTLY`, you can set a bigger `ScanStride` and a fixed `ScanDirection`. For the former, you can also set a higher `MinLocalizationConfidence` .
* For all modes, if the default algorithm doesn't seem fast enough, you can change how it is done by specifying an alternative library with `LibraryFileName` and set it up with `LibraryParameters`.

### Further improve the barcode zones for decoding

After the localization, we have barcode zones located on an image. In this stage, these particular zones are cut from the image precisely on its boundaries. Then these images are preprocessed again before finally being passed (with barcode type information for each zone) to the next stage for decoding.

The preprocessing consists of two operations

* Detect the color of the zones and adjust it based on [BarcodeColourModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-colour-modes.html#barcodecolourmodes); 
* Detect the size of the zones and change it based on [ScaleUpModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/scale-up-modes.html?ver=latest).

**Recommendation**

Both adjusting the color and the size of the barcode zone(s) can take some time. For interactive scenarios it is recommended to skip these two operations to save time.

### Expedite the actual barcode decoding

After barcode zones have been preprocessed, we have well-partitioned images awaiting decoding. We know the type of the barcode on each partitioned image but the image itself could still be blurry, incomplete, or deformed. DBR has algorithms to handle all these situations with the parameters [DeblurModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-modes.html#deblurmodes), [BarcodeComplementModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-complement-modes.html#barcodecomplementmodes), and [DeformationResistingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deformation-resisting-modes.html#deformationresistingmodes).

**Recommendation**
 
* For best speed, we usually ignore images with bad quality, therefore we skip the steps defined by `BarcodeComplementModes` and `DeformationResistingModes`. Therefore, it is best to not use those parameters if you are looking for the best speed.
* Also check out [Configure the last decoding process with DeblurModes](#configure-the-last-decoding-process-with-deblurmodes).

<!--

### Output the results

Entering this final stage, we have barcode results ready to be returned. To improve accuracy, we can tell DBR to filter and sort the results before outputing them. This process is very fast and in most cases, we don't need to adjust it for speed.

The related parameters are [BarcodeTextRegExPattern](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-regex-pattern.html), [BarcodeTextLengthRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-length-range-array.html), [TextResultOrderModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-result-order-modes.html#textresultordermodes) and [MinResultConfidence](https://www.dynamsoft.com/barcode-reader/parameters/reference/min-result-confidence.html?ver=latest), etc.
-->

## Alternative methods to help the speed

### Unleash the power of the CPU

The algorithm to process an image has quite a few steps and for each step, there could be multiple options to try. For processes that don't necessary need to wait for each other, we can tell DBR to open multiple threads/workers to work on different tasks at the same time. The related parameter is [`MaxAlgorithmThreadCount`](https://www.dynamsoft.com/barcode-reader/parameters/reference/max-algorithm-thread-count.html). However, note that this is only meaningful on devices with a good CPU. On low-end desktops or mobile devices, it's better to limit the threads to 2 or even 1.

Other than the built-in multi-threading, another way to speed things up is to create multiple DBR instances and have them decoding different images at the same time.

### Bypass time-consuming exceptions

Sometimes, DBR may encoutner an image that is very challenging. The nature of DBR is to try its best at all costs, so it may take a really long time. Although the reading may eventually succeed, this probably isn't what we want for our application. Therefore, we can tell DBR to set a timer and stops a reading process once the timer expires.

This is especially useful when it comes to continuous scanning of video frames as it makes no sense to spend too much time on one difficult frame when the next frame probably contains the same barcode(s).

The parameter that controls that is [`Timeout`](https://www.dynamsoft.com/barcode-reader/parameters/reference/time-out.html?ver=latest).

**Recommendation**

By default, the timeout is set to 10,000 milliseconds. By setting it to a smaller value (e.g. 1,000 milliseconds), we allow the SDK to move on to the next frame or image more quickly should the process be too time consuming.

### Finish the reading prematurely

Barcode reading usually ends with the output of the content of the barcode. However, it's not always the intended behavior. Sometimes an application could just be interested to learn the coordinates of a barcode or even just know that a barcode exists on the image or frame. Therefore, we can tell DBR to finish the reading prematurely and return what has been found right away.

**Recommendation**

[`TerminatePhase`](https://www.dynamsoft.com/barcode-reader/parameters/reference/terminate-phase.html) controls when the algorithm should stop. If, for instance, the purpose is to only locate the barcode, but not decode it, then you can set the `TerminatePhase` parameter to `TP_BARCODE_LOCALIZED`. This would skip the steps needed to determine the barcode type and decode it, thus saving you time in the long run.

### Avoid disk writing operations

Writing to the disk can be a time-consuming process. With DBR, disk writing happens when outputting logs, saving intermediate results, etc. In most cases, keeping a log or saving intermediate results to the disk is only required during development or debugging and should be avoided for production.

**Recommendation**

To control whether or not intermediate results should be collected, please set the [`IntermediateResultTypes`](https://www.dynamsoft.com/barcode-reader/parameters/reference/intermediate-result-types.html) to `IRT_NO_RESULT` (the default value). Should you choose to collect intermediate results, then the [`IntermediateResultSavingMode`](https://www.dynamsoft.com/barcode-reader/parameters/reference/intermediate-result-saving-mode.html) should be set to `IRSM_MEMORY` as it is less time consuming than `IRSM_FILESYSTEM`.

### Fine-tune the performance further with FormatSpecification

If even better speed is desired, we can set limitations on barcode searching for each type of barcodes so that DBR can quickly skip uninterested zones. The related parameters include [BarcodeAngleRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodeanglerangearray), [BarcodeHeightRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodeheightrangearray), [BarcodeWidthRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodewidthrangearray), [BarcodeZoneBarCountRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodezonebarcountrangearray) and [ModuleSizeRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#modulesizerangearray), etc. Click each parameter to learn more about them and when to use them.

## Summary

In this article, we first talked about some obvious and effective ways to improve speed, then we went through the complete reading process and looked at most of the parameters that could impact speed. Lastly, we mentioned a few of the less traditional ways to speed things up.

Depending on the actual image you are scanning or the usage scenario you are trying to cope with, you can experiment with these parameters to find the most suitable settings for the best speed. If you have any further questions, you can get in touch with [Dynamsoft Support](https://www.dynamsoft.com/company/contact/).

In reality, accuracy and read rate matter too. Read our other documents dedicated to these two topics:

* [How to boost Accuracy](https://www.dynamsoft.com/barcode-reader/performance/accuracy.html)
* [How to boost Read Rate](https://www.dynamsoft.com/barcode-reader/performance/read-rate.html)
