---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Speed
description: This page shows how to adjust the settings to achieve best speed in barcode reading
keywords: speed
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: Speed
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

# How to boost barcode reading speed

In this article, we try to look at all the possible measures you can take to let the Dynamsoft Barcode Reader SDK (hereinafter referred to as "DBR") focus on [speed](#speed). Do bear in mind that [accuracy](#accuracy) and [read rate](#read-rate) may not be ideal when speed is the first priority.

Before we dig deep into the algorithm of DBR, let's first look at some common measures.

## Common ways for better speed

### Focus on the barcode types of interest

This is probably the most natural setting of all. By clearly telling DBR what we are looking for, it can quickly skip other types of barcodes.

The related parameters are [ `BarcodeFormatIds` ](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-format-ids.html?ver=latest) and [ `BarcodeFormatIds_2` ](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-format-ids-2.html?ver=latest) . The former parameter includes most of the common barcode types and the latter includes just a few unusual types.

**Recommendation**

* Always specify the type(s) of the barcodes you try to read.

### Set a upper limit to the number of barcodes per image

By default, DBR tries to find as many barcodes as possible. Assume an image is very big but has only one barcode at the top, DBR finds the barcode instantly but will spend more time scanning the rest of the image or even try more steps to find more barcodes. By telling DBR that we are only expecting one barcode, it will stop reading the image as soon as that barcode is found.

The related parameter is `ExpectedBarcodesCount` . Note that it can be set to 0 or any natural number. DBR's behaviour is as follows:

* `ExpectedBarcodesCount` is 0: DBR tries to localize barcodes with the first mode set in [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes). If barcodes are found, the rest of the modes are skipped and the recognition starts right away.
* `ExpectedBarcodesCount` is a natural number: DBR tries to find as many barcodes as defined by this number. If enough barcodes have been found, the rest of the pending operations will be skipped. On the other hand, if the number of found barcodes is less than expected. DBR will exhaust all defined operations to find more.

**Recommendation**

* Do not set the number to exceed the actual number of barcodes on the image.
* If you are not sure how many barcodes there might be, set `ExpectedBarcodesCount` to 0.
* For interactive scenarios, set `ExpectedBarcodesCount` to 1.

### Determine the appropriate binarization mode

The binary image is the basis for the localization of barcodes. Depending on the lighting conditions, we can choose either the mode [BM_THRESHOLD](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_threshold) or [BM_LOCAL_BLOCK](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_local_block) for the parameter [BinarizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/binarization-modes.html#binarizationmodes).

**Recommendation**
 
* If the images to read are of high quality (acquired with good lighting conditions) like scanned documents, use `BM_THRESHOLD` alone can significantly improve speed.
* If `BM_LOCAL_BLOCK` is used, the block size ( `BlockSizeX` & `BlockSizeY` ) should be set to an appropriate value (5 ~ 8 times the module size) and `EnableFillBinaryVacancy` should be set to `false`. 
  > * As long as the block is not too small, the smaller its size, the faster it gets.
  > * If `BlockSizeX` & `BlockSizeY` are not set manually, DBR will determine their default values based on the size of the image.
  > * If the block size is not set properly, it's likely that vacancies will appear in the barcode modules in the binarized image in which case filling up the vacancies can help with the decoding. This operation is enabled with the argument `EnableFillBinaryVacancy` . However, filling up the vacancies is a time-consuming operation and should be avoided if speed is the top priority.

* Try not to set both modes since DBR might try both and it slows things down. If you must set both, set `BM_THRESHOLD` as the first option.

### Adjust the localization modes

A barcode is localized before it gets decoded. The localization process takes up a large portion of the overall time spent. DBR comes with 8 options for the parameter [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes). We can adjust the modes to speed things up.

Of the 8 modes, 3 of them are optimized for one or a few types of barcodes:
* `LM_ONED_FAST_SCAN` works best for linear or 1D barcodes that are of relatively high quality; 
* `LM_STATISTICS_MARKS` is meant for QR or DataMatrix barcodes generated by direct part marking (DPM); 
* `LM_STATISTICS_POSTAL_CODE` is meant for postal codes.

The following 2 modes are designed for certain usage scenarios:
* `LM_SCAN_DIRECTLY` can significantly speed things up in interactive scenarios (mostly for 1D, QR or PDF417 codes); 
* `LM_STATISTICS_CENTRE` is preferred when the barcodes appear at the center of the image (mostly for QR or DataMatrix codes).

Last but not least, the following 3 modes are designed for general use:
* `LM_CONNECTED_BLOCKS` usually gives the best results and should always be used as the prioritized mode or at least as a back-up mode; 
* `LM_LINES` is a supplementary mode for `LM_CONNECTED_BLOCKS` and should always be used after `LM_CONNECTED_BLOCKS`; 
* `LM_STATISTICS` is the last resort to try finding the barcode(s) when none or not nough barcodes have been found. Therefore, it should always be used as the last mode.

**Recommendation**
 
* Do not use the first 5 modes alone.
* For interactive scenarios (reading from a video input), use `LM_SCAN_DIRECTLY` followed by `LM_CONNECTED_BLOCKS`.
* For still image reading, use a mode based on the target barcode types then add `LM_CONNECTED_BLOCKS` as the back-up mode or set `LM_CONNECTED_BLOCKS` as the first mode followed by a mode for that specific type.

**Localization Mode Customization**

If the barcodes to scan have certain characteristics, a localization mode can be further customized for better speed. For example, for the mode `LM_ONED_FAST_SCAN` , you can set a bigger `ScanStride` , set a fixed `ScanDirection` or set a higher `MinLocalizationConfidence` .

> NOTE: The internal design for speed
>  
> Although each localization mode stands for a unique algorithm, most of them ( `LM_CONNECTED_BLOCKS` , `LM_LINES` and `LM_STATISTICS` in particular) share the same design: scan the image once to find all types of barcodes. And because DBR scans for the characteristics of all types of barcodes at once, it doesn't need to process the same image twice or more times when different types of barcodes are required. In other words, whether you just need to scan barcodes of a particular type or multiple types, the time cost is almost the same.

### Configure the barcode decoding process with DeblurModes

The parameter [DeblurModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-modes.html#deblurmodes) is used to configure how DBR processes already-localized barcode zones (images cut around the barcode boundaries from the original image) to get the final results.

Deblurring is the last configurable step before a barcode is decoded. DBR by default has all deblurring algorithms enabled so that it tries its best to decode a barcode zone. However, if we put speed first, we can ask DBR to try just one or two of these modes by setting `DeblurModes` . 

**Recommendation**

* For best speed and especially for interactive scenarios like reading from a video input, set only [`DM_BASED_ON_LOC_BIN`, `DM_THRESHOLD_BINARIZATION`]. 
* If the image quality is not good enough, you can add one or a few of these modes `DM_DIRECT_BINARIZATION`, `DM_GRAY_EQUALIZATION`, `DM_SMOOTHING`, `DM_MORPHING`,  `DM_SHARPENING` and `DM_SHARPENING_SMOOTHING`. These modes will process the pixels in the barcoe zones again for better recognition.
* For speed, avoid using `DM_DEEP_ANALYSIS` which is designed for desperate scenarios where read rate is prioritized.

## Get even faster in every stage

As described in [Principles of Dynamsoft Barcode Reader Algorithm](https://www.dynamsoft.com/barcode-reader/introduction/architecture.html?ver=latest), the algorithm of DBR includes a flow of 5 stages at the top level. Let's see what can be done at each stage for better speed.

### Stage 1 Get an ROI Image

> An ROI (region of interest) image is a grayscale image ready for barcode localization. 

The purpose of this stage is to output an ROI image that originates from a variety of sources, including an existing file, the buffer of another application or the frame of a video input. The first two sources are quite static, while the last source has a lot of room for improvement.

#### Optimize frames from a video input

If you are reading barcodes from a video input in mobile or web applications, the Dynamsoft Camera Enhancer SDK (hereinafter referred to as "DCE") can be used to optimize the frames of the video input to increase the speed.

When reading barcodes from a video input, you get the best speed if:

* the camera that takes the best shot of the intended barcode(s) is used; 
* the video frames are trimmed around the barcode(s); 
* the video frames are clear; 
* the video frames are provided in a way that keeps the barcode reading engine busy.

DCE is designed to do all the above like this:

* it comes with camera control and is able to find and open the best suited camera by default; 
* it can crop the video frames with a predefined scan region so that only part of the frames are passed to DBR; 
* it has a lightspeed algorithm to detect whether a frame is blurred. Only clear frames are passed along to DBR(only supported on mobile applications at present); 
* it maintains a buffer of frames for DBR to fetch so that DBR doesn't waste time in waiting for the next image to read.

Besides the above, DCE also does the following

* if a frame is blurred, it tells the camera to adjust its focus; 
* if DBR finds the barcode too small in the frame, DCE tells the camera to zoom in.

To sum up, with the help of DCE, DBR can focus on images with clear barcodes to read.

**Recommendation**
 
* Try not to use very high resolutions unless absolutely necessary. 720P (1280 * 720) usually works fine.
* Set a scan region with DCE can significantly speed things up.
* DCE and DBR run in parallel, so it's ok to enable more DCE features without affecting the overall speed.

#### Scale down a monstrous image

<!--scaleDownThreshold-->
When locating barcodes, DBR scans the whole image, so the larger the size of the image, the more time it takes. However, a barcode usually keeps its shape and can be read correctly even when the image gets scaled down. Therefore, DBR shrinks very large images before reading them. The parameter [ScaleDownThreshold](https://www.dynamsoft.com/barcode-reader/parameters/reference/scale-down-threshold.html) can be used to determine the thredshold beyond which the scaling down happens.

**Recommendation**
 
Try not to set the threshold too low which might make the barcode too dense to be read.

<!--colourClusteringModes seems to have no effect?

### Convert the image to grayscale --ColourConversionModes

### Invert the image if the original image is inverted

-- GrayscaleTransformationModes
-->

#### Limit the need for grayscale transformation

If the original image is not a grayscale image, DBR will convert it to a grayscale image. After that, the barcode symbol is either lighter or darker than the background. We call a darker barcode a normal barcode and a lighter barcode an inverted barcode.

When locating barcodes, DBR expects the barcodes to be normal. Therefore, if an image in fact has inverted barcodes, DBR needs to invert the color of the image in advance. This process is called grayscale transformation and is controlled by the parameter [GrayscaleTransformationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/grayscale-transformation-modes.html?ver=latest).

**Recommendation**
 
DBR goes through grayscale transformation mode one by one and all subsequent steps will be applied to the resulting image of each mode. Therefore, for better speed, set only one grayscale transformation mode according to the images to read.

#### Delimit the ROI (region of interest)

When reading barcodes from a certain types of documents or from video frames, the barcode location is usually predetermined. For example, the barcode on a patient registration form is most likely located in the top 20% of the document and the barcode that a user is trying to read from a video input is usually located at the center. By telling DBR where to look, we can significantly reduce wasted time.

There are two ways to specify the region:

* manually define a region by providing the coordinates of its contours. Each region is defined by a [RegionDefinitions](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-definition/) and then specified by [RegionDefinitionNameArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-parameter/index.html#regiondefinitionnamearray); 
    > In runtime settings, the related parameter is `Region` .

* let DBR find the region based on the colour/grayscale distribution of different parts of the image, this is controlled by the parameter [RegionPredetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-predetection-modes.html#regionpredetectionmodes).

> NOTE
>  
> With a template, DBR supports defining multiple zones on one image, so even if you want to scan multiple barcodes scattered on one image, you can still speed things up by delimitting the ROIs.
> If the region is certain and can be defined manually, using the first way can save more time than the second because region predetection usually invovles processing of multiple zones and chances are only only one of these zones has the intended barcode.

**Recommendation**
 
* Set a region manually if the barcode(s) to read can always be located there.

<!--NOTE

    Seems the manually specified region takes effect after grayscaling => would it be faster to crop the region before grayscale conversion? Or will cropping be slower than the conversion?

-->

### Stage 2 Localize the barcode zones on the ROI Image

Entering this stage, DBR has a grayscale image which could have been cropped from the original image with focus on the region where the barcode is localized. 

In this stage, we first turn the grayscal image into a binary image and then localize the barcode zones.

#### Optimize the grayscale image

The grayscale image is the basis for the following steps. The better the quality, the faster the later steps can be. Use the parameter [ImagePreprocessingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-preprocessing-modes.html#imagepreprocessingmodes) to specify how the quality is enhanced.

**Recommendation**
 
DBR goes through all specified image preprocessing modes. Therefore, try to limit the mode to just one which is best suited to the target images or simply skip the grayscale enhancing.

#### Generate a good binary image

The binary image is the basis for the localization of barcodes. Depending on the lighting conditions, we can choose either the mode [BM_THRESHOLD](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_threshold) or [BM_LOCAL_BLOCK](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_local_block) for the parameter [BinarizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/binarization-modes.html#binarizationmodes).

**Recommendation**
 
* `BM_THRESHOLD` is meant for images acquired with high quality like scanned documents, etc. while `BM_LOCAL_BLOCK` handles more complicated images like the ones acquired from a video input. Using `BM_THRESHOLD` alone can significantly improve speed but the read rate might not be good if the images are not clear enough.
* For `BM_LOCAL_BLOCK` , specifying the block size ( `BlockSizeX` & `BlockSizeY` ) to an appropriate value (5 ~ 8 times the module size) can speed things up. However, if `BlockSizeX` & `BlockSizeY` are not set manually, DBR will determine their default values based on the size of the image, therefore if a barcode takes much of the image, it's very likely that vacancies will appear in the barcode lines in the binarized image. The argument `EnableFillBinaryVacancy` can be set to tell DBR to fill these vacancies but it is a time-consuming operation. Therefore, set `EnableFillBinaryVacancy` to `false` can also speed things up where `BlockSizeX` & `BlockSizeY` are already set properly.
* Try not to set both modes since DBR will try both and it slows things down. If you must set both, set `BM_THRESHOLD` as the first option.

#### Remove texture and filter text

The less the noise, the faster the localization. Use the parameters [TextureDetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/texture-detection-modes.html#texturedetectionmodes) and [TextFilterModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-filter-modes.html#textfiltermodes) to remove texture and filter the text in the resulting binary image.

**Recommendation**
 
* For images with texture (such as images taken on the screen), enable texture detection with `TextureDetectionModes`. Read more on [How to deal with image textures](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/texture-detection.html?ver=latest#).
* For images with lots of text, enable text filter with `TextFilterModes`. Read more on [How to filter text in an image](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/text-filter.html?ver=latest#)

#### Optimize the barcode zone localization

Now that we have a binary image, we can start locating the barcode zones. There are quite a few ways in locating the barcodes and the correct setting can have a big impact on speed. This has been discussed above in [Adjust the localization modes](adjust-the-localization-modes).

### Stage 3 Prepare the barcode zones for decoding

Entering this stage, we have barcode zones located on an image. In this stage, these particular zones are cut from the image precisely on its boundaries. Then these images are preprocessed before finally passed (with type information for each zone) to the next stage for decoding.

The preprocessing in this stage consists of two operations

* Detect the color of the zones and adjust it based on [BarcodeColourModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-colour-modes.html#barcodecolourmodes); 
* Detect the size of the zones and change it based on [ScaleUpModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/scale-up-modes.html?ver=latest).

**Recommendation**

Both adjusting the color and the size of the barcode zone(s) can take some time, so for interactive scenarios. Skip these two operations to save time.

### Stage 4 Decode a barcode zone

Entering this stage, we have well prepared barcode zone images that await decoding. We know the type of the barcode on each image but the image itself could be blurry, incomplete or deformed. DBR has algorithms to handle all these situations with the parameters [DeblurModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-modes.html#deblurmodes), [BarcodeComplementModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-complement-modes.html#barcodecomplementmodes) and [DeformationResistingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deformation-resisting-modes.html#deformationresistingmodes), etc.

**Recommendation**
 
* For best speed, we usually ignore images with bad qualities, therefore we skip the steps defined by `BarcodeComplementModes` and `DeformationResistingModes` .
* Also check out [Configure the barcode decoding process with DeblurModes](#configure-the-barcode-decoding-process-with-DeblurModes).

### Stage 5 Output the results

Entering this final stage, we have barcode results ready to be returned. To improve accuracy, we can tell DBR to filter and sort the results before outputing them. This process is very fast and in most cases, we don't need to adjust it for speed.

The related parameters are [BarcodeTextRegExPattern](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-regex-pattern.html), [BarcodeTextLengthRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-length-range-array.html), [TextResultOrderModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-result-order-modes.html#textresultordermodes) and [MinResultConfidence](https://www.dynamsoft.com/barcode-reader/parameters/reference/min-result-confidence.html?ver=latest), etc.

## Fine-tune the performance further with FormatSpecification

If even better speed is desired, we can set limitations on barcode searching for each type of barcodes so that DBR can quickly skip uninterested zones. The related parameters include [BarcodeAngleRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodeanglerangearray), [BarcodeHeightRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodeheightrangearray), [BarcodeWidthRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodewidthrangearray), [BarcodeZoneBarCountRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#barcodezonebarcountrangearray) and [ModuleSizeRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/format-specification/format-control.html#modulesizerangearray), etc. Click each parameter to learn more about them and when to use them.

## Other less-common ways

### Unleash the power of the CPU

The algorithm to process an image has quite a few steps and for each step, there could be multiple options to try. For processes which don’t necessary need to wait for each other, we can tell DBR to open multiple threads/workers to work on different tasks at the same time. The related parameter is `MaxAlgorithmThreadCount` . However, note that this is only meaningful on devices with a good CPU. On low-end desktops or mobile devices, it's better to limit the threads to 2 or 1.

Other than the built-in multi-threading, another way to speed things up is to create multipe DBR instances and have them all decoding at the same time.

### Avoid time-consuming exceptions

Sometimes, DBR may encoutner an image that is very challenging. The nature of DBR is to try its best at all costs, so it may take a really long time. Although the reading may eventually succeed, this probably isn’t what we want for our application. Therefore, we can tell DBR to set a timer and stops a reading process once the timer expires.

This is especially useful when it comes to continuous scanning of video frames as it makes no sense to spend too much time on one difficult frame when the next frame probably contains the same barcode(s).

The related parameter is `Timeout` .

### Finish the reading prematurely

A barcode reading usually ends with the output of the content of the barcode. However, it's not always the intended behavior. Sometimes an application could just be interested to learn the coordinates of a barcode or even knowing whether there is a barcode on an image is enough. Therefore, we can tell DBR to finish the reading prematurely and return what has been found right away.

The related parameters are `TerminatePhase` , `IntermediateResultTypes` and `IntermediateResultSavingMode` .

### Avoid disk writing operations

Writing the disk can be a time-consuming process. With DBR, disk writing happens when outputting logs, intermediate results, etc.. In most cases, keeping a log or saving intermediate results to the disk is only required during development or debugging and should be avoided for production.

The above 7 measures usually show great improvement in speed already, but if it is still not fast enough, read on to find more inconspicuous ways to boost the speed while we go through the algorithm in the barcode reading process.

## Summary

In this article, we first talked about some obvious and effective ways to improve speed, then we went through the complete reading procedure and looked at most of the parameters which might impact speed. Lastly, we mentioned the parameters to fine-tune the performance.

Depending on the actual image you are scanning or the usage scenario you are trying to cope with, you can experiement with these parameters to find the most suitable settings for the best speed. If you have any further questions, you can get in touch with [Dynamsoft Support](https://www.dynamsoft.com/company/contact/).

In reality, accuracy and read rate matter too. Read our other documents dedicated to these two topics:

* [How to boost Accuracy](https://www.dynamsoft.com/barcode-reader/performance/accuracy.html)
* [How to boost Read Rate](https://www.dynamsoft.com/barcode-reader/performance/read-rate.html)

## Definition of the performance metrics

### Speed

$ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $

### Accuracy

$ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $

### Read Rate

$ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
