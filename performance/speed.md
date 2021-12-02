---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Speed
description: This page shows how to adjust the settings to achieve best speed in barcode reading
keywords: speed
needAutoGenerateSidebar: true
noTitleIndex: false
breadcrumbText: Speed
---

# How to boost barcode reading speed

A barcode is a method to represent data in a machine-readable form, which, essentially is meant for making workflows simpler and faster. Therefore, speed matters.

In this article, we try to look at all the possible measures you can take to let the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") focus on speed, which means returning results as quickly as possible. Before we dig deep into the algorithm of DBR, let's first look at some obvious measures.

## Obvious TIPs for better speed

### Specify the barcode types

This is probably the most natural setting of all. By clearly telling DBR what we are looking for, it can quickly identify and skip other types of barcodes.

The related parameters are `BarcodeFormatIds` and `BarcodeFormatIds_2` .

### Specify the count of barcodes per image

By default, DBR tries to find as many barcodes as possible. Assume an image is very big but has only one barcode at the top, DBR finds the barcode instantly but will spend more time scanning the rest of the image or even try more steps to find morebarcodes. By telling DBR that we are only expecting one barcode, it will stop reading the image as soon as that barcode is found.

The related parameter is `ExpectedBarcodesCount` .

### Specify the ROI (region of interest)

When reading barcodes from a certain types of documents or from video frames, the barcode location is usually predetermined. For example, the barcode on a patient registration form is most likely located in the top 20% of the document and the barcode that a user is trying to read from a video input is usually located at the center. By telling DBR where to look, we can significantly reduce wasted time.

The related parameter is `Region` in runtime settings or [RegionDefinitionNameArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-parameter/index.html#regiondefinitionnamearray) in a template.

> Extra TIP
> It's possible to specify multiple regions on one single image.

### Unleash the power of the masses

The algorithm to process an image has quite a few steps and for each step, there could be multiple options to try. For processes which don’t necessary need to wait for each other, we can tell DBR to open multiple threads/workers to work on different tasks at the same time.

The related parameter is `MaxAlgorithmThreadCount` .

### Avoid time-consuming exceptions

Sometimes, DBR may encoutner an image that is very challenging. The nature of DBR is to try its best at all costs, so it may take a really long time. Although the reading may eventually succeed, this probably isn’t what we want for our application. Therefore, we can tell DBR to set a timer and stops a reading process once the timer expires.

This is especially useful when it comes to continuous scanning of video frames as it makes no sense to spend too much time on one difficult frame when the next frame probably contains the same barcode(s).

The related parameter is `Timeout` .

### Finish the reading prematurely

A barcode reading usually ends with the output of the content of the barcode. However, it's not always the case, sometimes an application could just be interested to learn the coordinates of a barcode or even knowing whether there are barcodes on an image is enough. Therefore, we can tell DBR to finish the reading prematurely and return what has been found right away.

The related parameter is `TerminatePhase` .

If the above still isn't enough, read on to find more ways to boost the speed.

## Get even faster in every stage

As described in [Principles of Dynamsoft Barcode Reader Algorithm](https://www.dynamsoft.com/barcode-reader/introduction/architecture.html?ver=latest), the algorithm of DBR includes a flow of 5 stages at the top level. Let's see what can be done at each stage for better speed.

### Stage 1 Get an ROI Image

An ROI (region of interest) image is a grayscale image ready for barcode localization. 

The purpose of this stage is to output an ROI image that starts as an image from a variety of sources, including an existing file, the buffer of another application or the frame of a video input. The first two sources are quite static, while the last source has a lot of room for improvement.

#### Optimize the frames from a video input

If you are reading barcodes from a video input in a mobile or web application, the SDK Dynamsoft Camera Enhancer (hereafter referred to as "DCE") can be used to optimize the speed. Otherwise, you can skip this section.

When reading barcodes from a video input, you get the best speed if:

* the camera that takes the best shot of the intended barcode(s) is used; 
* the video frames are trimmed around the barcode(s); 
* the video frames are clear; 
* the video frames are provided in a way that keeps the barcode reading engine busy.

DCE is designed to do all the above like this:

* it comes with camera control and is able to find and open the best suited camera by default; 
* it can crop the video frames with a predefined scan region so that only part of the frames are passed to DBR; 
* it has a lightspeed algorithm to detect whether a frame is blurry enough to be discarded so that only clear frames are passed along (only supported on mobile applications at present); 
* it keeps a frame, which is as fresh as possible, in the buffer ready for DBR to process so that the barcode reading doesn't pause.

Besides the above, DCE also does the following

* if a frame is blurry, it tells the camera to adjust its focus; 
* if DBR finds the barcode too small in the frame, it tells the camera to zoom in.

Therefore, with the help of DCE, DBR can focus on images with clear barcodes to read.

> TIPs:
> 
> * Try not to use very high resolutions unless absolutely necessary. 720P (1280 * 720) usually works fine.
> * Set a scan region with DCE can significantly speed things up.
> * DCE and DBR run in parallel, so it's ok to enable more DCE features.

#### Scale down a monstrous image

<!--scaleDownThreshold-->
When locating barcodes, DBR scans the whole image, so the larger the size of the image, the more time it takes. However, a barcode usually keeps its shape and can be read correctly even when the image gets scaled down. Therefore, DBR shrinks very large images before reading them. The parameter [ScaleDownThreshold](https://www.dynamsoft.com/barcode-reader/parameters/reference/scale-down-threshold.html) can be used to determine the thredshold beyond which the scaling down happens.

> TIP:
> 
> Try not to set the threshold too low which might make the barcode too dense to be read.

<!--colourClusteringModes seems to have no effect?

### Convert the image to grayscale --ColourConversionModes

### Invert the image if the original image is inverted

-- GrayscaleTransformationModes
-->

#### Limit the need for grayscale transformation

If the original image is not a grayscale image, DBR will convert it to a grayscale image. After that, the barcode symbol is either lighter or darker than the background. We call a darker barcode a normal barcode and a lighter barcode an inverted barcode.

When locating barcodes, DBR expects the barcodes to be normal. Therefore, if an image in fact has inverted barcodes, DBR needs to invert the color of the image in advance. This process is called grayscale transformation and is controlled by the parameter [GrayscaleTransformationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/grayscale-transformation-modes.html?ver=latest).

> TIP:
> 
> DBR goes through grayscale transformation mode one by one and all subsequent steps will be applied to the resulting image of each mode. Therefore, for better speed, set only one grayscale transformation mode according to the images to read.

#### Detect or define the ROI

A barcode usually does not occupy the entire image. Instead, it's probably located just in a small region of the image. If that region can be specified (especially when the image is very large), much time can be saved because DBR doesn't need to scan the other parts of the image.

There are two ways to specify the region:

* as already mentioned previously in [Specify the ROI](#specify-the-roi-region-of-interest), you can manually define a region by providing the coordinates of its contours. Each region is defined by a [RegionDefinitions](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-definition/) and then specified by [RegionDefinitionNameArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-parameter/index.html#regiondefinitionnamearray); 
* let DBR find the region based on the colour/grayscale distribution of different parts of the image, this is controlled by the parameter [RegionPredetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/region-predetection-modes.html#regionpredetectionmodes).

> TIPs:
> 
> * For a very large image, region predetection helps.
> * If the region is certain and can be defined manually, using the first way can save more time than the second because region predetection usually invovles processing of multiple zones and chances are only only one of these zones has the intended barcode.

<!--NOTE

    Seems the manually specified region takes effect after grayscaling => would it be faster to crop the region before grayscale conversion? Or will cropping be slower than the conversion?

-->

### Stage 2 Localize the barcode zones on the ROI Image

Entering this stage, DBR has a grayscale image which could have been cropped from the original image with focus on the region where the barcode is located. 

In this stage, we first turn the grayscal image into a binary image and then locate the barcode zones.

#### Optimize the grayscale image

The grayscale image is the basis for the following steps. The better the quality, the faster the later steps can be. Use the parameter [ImagePreprocessingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/image-preprocessing-modes.html#imagepreprocessingmodes) to specify how the quality is enhanced.

> TIP:
> 
> DBR goes through all specified image preprocessing modes. Therefore, try to limit the mode to just one which is best suited to the target images or simply skip the grayscale enhancing.

#### Remove texture and filter text

The less the noise, the faster the localization. Use the parameters [TextureDetectionModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/texture-detection-modes.html#texturedetectionmodes) and [TextFilterModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-filter-modes.html#textfiltermodes) to remove texture and filter the text in the resulting binary image.

> TIPs:
> 
> * To speed things up, skip these two operations for images which don't show much texture nor text.
> * If the images to read do come with texture or text, enable one of the two operations can help.

#### Generate a good binary image

The binary image is the basis for the localization of barcodes. Depending on the lighting conditions, we can choose either the mode [BM_THRESHOLD](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_threshold) or [BM_LOCAL_BLOCK](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/how-to-set-binarization-modes.html?ver=latest#bm_local_block) for the parameter [BinarizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/binarization-modes.html#binarizationmodes).

> TIPs:
> 
> * `BM_THRESHOLD` is meant for images acquired with high quality like scanned documents, etc. while `BM_LOCAL_BLOCK` handles more complicated images like the ones acquired from a video input. Try not to set both modes since DBR will try both and it slows things down.
> * For `BM_LOCAL_BLOCK` , specifying the block size ( `BlockSizeX` & `BlockSizeX` ) to an appropriate value (5 ~ 8 times the module size) can speed things up.

#### Optimize the barcode zone localization

Now that we have a binary image, we can start locating the barcode zones. There are quite a few ways in locating the barcodes and the correct setting can have a big impact on speed.

The parameter to configure the localization is callded [LocalizationModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/localization-modes.html#localizationmodes). Each mode is either optmized for one or a few types of barcodes or optimized for a certain usage scenario.

> TIPs:
> 
> * If the barcodes to read are of a certain type or types or the usage scenario is certain, limit the localization modes to one or two.
> * `LM_CONNECTED_BLOCKS` is recommended as a back-up mode in all cases.
> If the barcodes to scan have certain characteristics, a localization mode can be further adjusted for better speed. For example, for the mode `LM_ONED_FAST_SCAN` , you can set a bigger `ScanStride` and set a fixed `ScanDirection` to speed things up.

> NOTE: The internal design for speed
>  
> Although each localization mode stands for a unique algorithm, they all share the same design: scan the image once to find all types of barcodes. And because DBR scans for the characteristics of all types of barcodes at once, it doesn't need to process the same image twice or more times when different types of barcodes are required. In other words, whether you just need to scan barcodes of a particular type or multiple types, the time cost is almost the same.

### Stage 3 Partition the barcode zones

Entering this stage, we have barcode zones located on an image. We can cut these particular zones from the image and try decoding the barcode symbols in stage 4. To speed things up, in this stage we make sure each barcode zone is cut precisely on its boundaries and that its format is correctly determined to pass along.

> TIPs:
> 
> * Change the colour mode with [BarcodeColourModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-colour-modes.html#barcodecolourmodes) if the intended barcodes are not in the more natural form of "dark symbol on light background".
> * Try not to specify more than one colour modes.

<!-- relation with inverted transformation?-->

### Stage 4 Decode a barcode zone

Entering this stage, we have well partitioned barcode zone images that await decoding. We know the type of the barcode on each image but the image itself could be blurry, incomplete or deformed. DBR has algorithms to handle all these situations with the parameters [DeblurModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-modes.html#deblurmodes) or [DeblurLevel](https://www.dynamsoft.com/barcode-reader/parameters/reference/deblur-level.html), [BarcodeComplementModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-complement-modes.html#barcodecomplementmodes) and [DeformationResistingModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/deformation-resisting-modes.html#deformationresistingmodes), etc.

> TIPs:
> 
> * For best speed, we usually ignore images with bad qualities, therefore we skip the steps defined by `BarcodeComplementModes` and `DeformationResistingModes` .
> * Deblurring is usally important and by default we enable all deblurring algorithms. However, if we put speed first, we can ask DBR to try just one or two of them by setting `DeblurLevel` to 0 or specifically specify one or two modes with `DeblurModes` ; 

### Stage 5 Output the results

Entering this final stage, we have barcode results ready to be returned. To improve accuracy, we can tell DBR to filter and sort the results before outputing them. This process is very fast and in most cases, we don't need to adjust it for speed.

The related parameters are [BarcodeTextRegExPattern](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-regex-pattern.html), [BarcodeTextLengthRangeArray](https://www.dynamsoft.com/barcode-reader/parameters/reference/barcode-text-length-range-array.html), [TextResultOrderModes](https://www.dynamsoft.com/barcode-reader/parameters/reference/text-result-order-modes.html#textresultordermodes) and [MinResultConfidence](https://www.dynamsoft.com/barcode-reader/parameters/reference/min-result-confidence.html?ver=latest), etc.

## Summary

In this article, we first talked about obvious and fast ways to improve speed, then we went through the complete reading procedure and looked at most of the parameters which might impact speed.

Based on the actual images you are scanning or the usage scenario you are trying to cope, you can experiment with these parameters to find the best suited settings for best speed. If you have any further questions, you can get in touch with [Dynamsoft Support](https://www.dynamsoft.com/company/contact/).

In reality, accuracy and read rate matter too. Read our other documents dedicated to these two topics:

* [How to boost Accuracy](https://www.dynamsoft.com/barcode-reader/performance/accuracy.html)
* [How to boost Read Rate](https://www.dynamsoft.com/barcode-reader/performance/read-rate.html)
