---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Read Rate
description: This page shows how the Dynamsoft Barcode Reader SDK is designed to improve read rate
keywords: Read Rate
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

# How to Boost Barcode Read Rate

There are 3 basic metrics for measuring the performance of a barcode reader application: **speed**, **accuracy** and **read-rate**. The Dynamsoft Barcode Reader SDK (DBR) has been carefully designed to offer excellent performance in all three of these metrics. In this article, we try to investigate all the possible methods you can take to let DBR focus on **read-rate**. 

As the ultimate guide on how to configure DBR to realize its full potential on read rate, we will go through all the parameters that can be customized during barcode reading process. With these customizations, DBR tries its best to strengthen image features before localization, and then try to improve barcode localization with multiple modes, followed by decoding the barcode zone, and lastly, optimize circumstances during decoding to get final results.

> The following shows the definition of the three metrics.
>  
> $ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
>  
> $ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $
>  
> $ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
>  
> Do bear in mind that if one metric is prioritized, the other two may be negatively affected.


## Strengthen Image Features for Localization
Barcode zones are detectable by taking advantage of features of different barcode formats. A linear barcode, for example, consists of several parallel lines, so the first step of locating the barcode is to find a group of parallel lines, at which a linear barcode zone (defining feature) is detected. But in some cases, these defining features may not be obvious or of good enough quality to be detectable, so DBR will go through the following processes to enhance barcode zone features before localization. 

### Optimize the Conversion from Colour Image to Grayscale
If the original image is a colour image, DBR will convert it to grayscale. During that process, the colour space and weights of each colour channel used directly affects the quality of the grayscale image. By default, DBR uses RGB space and automatically calculates the weights of the three channels (red, green, blue). To get a high quality grayscale image, you can also adjust the colour space and weight of the channels using the [ColourConversionModes]({{ site.parameters_reference }}colour-conversion-modes.html) setting. For example, if your image has a barcode with a red background, setting `BlueChannelWeight, GreenChannelWeight`,  and `RedChannelWeight` to `0`, `0`, and `1000` respectively will return a better grayscale image than the values `300`, `300`, and `400` respectively.

After the conversion, the barcode on the grayscale image is either darker or lighter than the background. If it is the latter, the barcode image is then considered to be inverted and so DBR needs to set the `GTM_INVERTED` mode in [GrayscaleTransformationModes]({{ site.parameters_reference }}grayscale-transformation-modes.html) to invert the image in advance. Therefore, to ensure a good read rate, it is recommended to set both `GTM_ORIGINAL` and `GTM_INVERTED` in the `GrayscaleTransformationModes` to cover both the darker and lighter backgrounds, respectively.


### Enhance the Grayscale Image Quality
[ImagePreprocessingModes]({{ site.parameters_reference }}image-preprocessing-modes.html) provides some image processing methods to enhance the quality of the grayscale image by removing the noise, improving the contrast, and more. To get the best read rate, you can set all of the supported preprocessing modes. But to balance the time cost, please refer to the following table to identify the circumstance of your barcode image and set one or a few modes.

| Image Circumstance | Recommended Setting |
| --- | --- |
| With low contrast on barcode and background | IPM_GRAY_EQUALIZE | 
| With intensive noise or texture | IPM_GRAY_SMOOTH |
| With blurred boundaries around the barcode module | IPM_SHARPEN_SMOOTH |
| With barcode area polluted or destroyed | IPM_MORPHOLOGY |

### Generate a High Quality Binary Image
[BinarizationModes]({{ site.parameters_reference }}binarization-modes.html) provides some binarization methods to generate a high quality binary image. Setting the priority to `BM_LOCAL_BLOCK` will binarize each pixel of the image based on a threshold which is calculated based on a small region around said pixel. It works well on images with varying illumination. When using this mode, there are arguments that can be used to further improve the read rate. Setting `BlockSizeX` and `BlockSizeY` to 5 - 8 times the module size (should it be known) and setting `EnableFillBinaryVacancy` to 1 if you are reading barcodes with a large module size.

The second binarization mode, `BM_THRESHOLD`, binarizes the image for each pixel based on a global unified threshold. It works well when the image has obvious contrast between the barcode and the background. You can adjust the threshold by setting argument `BinarizationThreshold` to find a best value for your image.

## Improve Barcode Localization with Multiple Modes
After the above process, we have a high quality binarized image ready for barcode zone localization. DBR provides several methods to localize a barcode zone, which can be customized by the parameter [LocalizationModes]({{ site.parameters_reference }}localization-modes.html). Each single method can be used for certain barcode type(s) or usage scenarios, but considering the read rate as the first priority, it is recommended to combine multiple modes following the instructions below.  

### Common Usage
To localize most barcodes, it is recommended to use DBR's default localization modes, which includes `LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, `LM_LINES`, `LM_STATISTICS` in that priority order. Firstly, DBR uses `LM_SCAN_DIRECTLY` mode to run a fast scan through the whole image. That usually gives a great localization result with vertical and horizontal OneD barcodes. If not enough barcodes have been found, DBR then uses `LM_CONNECTED_BLOCKS` which covers most of the barcode types and gives the best result most of the time. `LM_LINES` is a supplementary mode to `LM_CONNECTED_BLOCKS` which may help localizing OneD and PDF417 codes. DBR then tries `LM_STATISTICS` mode as the last resort to cover barcode types that may be missed by the above modes.


### Specific Case Modes
- If you are decoding postal codes and the read rate is in quite high priority, you can add `LM_STATISTICS_POSTAL_CODE` to the default setting, it is designed to optimize the localization for postal codes.

- If you are decoding barcodes whose modules are separate, e.g., Direct Part Marking (DPM) codes, and DotCode, `LM_STATISTICS_MARKS` is the right one you should add.

### Additional Tips when Setting the Modes
- When using multiple modes, `LM_CONNECTED_BLOCKS` should always be placed ahead of `LM_LINES`, `LM_STATISTICS`, `LM_STATISTICS_MARKS` and `LM_STATISTICS_POSTAL_CODE` since they are supplementary modes to `LM_CONNECTED_BLOCKS`.

- `LM_SCAN_DIRECTLY` is covered by `LM_CONNECTED_BLOCKS`, so setting `LM_SCAN_DIRECTLY` after `LM_CONNECTED_BLOCKS` will give no help on read rate but slow down the speed.

## Refine the Decoding Process
Next in the algorithm, DBR performs a round of image processing on the precisely partitioned barcode area to get final barcode result. The parameter [DeblurModes]({{ site.parameters_reference }}deblur-modes.html) comes with 9 modes in total which can be used individually or together to configure how DBR runs this part of the algorithm. Of the 9 modes, 2 of them are designed for relatively simple situations: 

- `DM_BASED_ON_LOC_BIN` is the most efficient mode when the barcode area is clear and clean. It reuses the binary image generated during the localization process. 
- `DM_THRESHOLD_BINARIZATION` is preferred when the barcode content modules have distinct colour contrast with the background.

The following 6 modes provide more adaptability to handle more complicated situations.
- `DM_DIRECT_BINARIZATION` is preferred when the barcode content modules have varying illumination levels.
- `DM_GRAY_EQUALIZATION` is preferred when the barcode content modules have low colour contrast with the background.
- `DM_SMOOTHING` is preferred when the barcode area has intensive noise or textures.
- `DM_SHARPENING` is preferred when the barcode content modules have blurred boundaries with a clear background.
- `DM_SHARPENING_SMOOTHING` is preferred when the barcode content modules have blurred boundaries with unclear backgrounds.
- `DM_MORPHING` is preferred when the barcode area is polluted or damaged.

Last but not least, `DM_DEEP_ANALYSIS` is the most powerful way to deal with desperate situations which cannot be solved by above modes. It analyzes every pixel of the image, does a lot of calculation to gather characteristics to find or build relation between pixels before finally find out the barcode modules and final result.

>Note:  
>To get the best read rate, DBR by default has all 9 modes enabled so that it covers varying situations.  
>To speed up the process, choose only one or a few optimum modes.  
>When `DM_DEEP_ANALYSIS` is used, make sure it is the last one since it's most time-consuming.

## Optimize Particular Circumstances while Decoding

### Enlarge Barcodes with Small Module Sizes
Barcodes with a small module size may be distorted by some processing methods like rotation, binarization with inappropriate block size, etc. Enlarging the barcode area to a larger size can enhance the ability to prevent distortion, thereby improving the likelihood of decoding results. The parameter [ScaleUpModes]({{ site.parameters_reference }}scale-up-modes.html) can be used to determine how the enlarging should be done, if at all. For example, using `SUM_LINEAR_INTERPOLATION` with argument `ModuleSizeThreshold` set to 2 will activate the enlaring process using the linear interpolation method when the barcode module size is smaller than 2px.

### Enable All Wanted Barcode Types
Barcode types are defined with the parameters [BarcodeFormat]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat_2]({{ site.enumerations }}format-enums.html#barcodeformat_2). A barcode can be detected only when its type is enabled. When the barcode type is uncertain, you should enable all barcode types to ensure the read rate.

### Restore Incomplete Modules
In some cases, due to misprinting, the barcodes may miss some modules, like the patterns of a QR code or the border of a Datamatrix. DBR is able to restore the missing modules for these barcodes by setting `BCM_GENERAL` mode in the parameter [BarcodeComplementModes]({{ site.parameters_reference }}barcode-complement-modes.html).

### Correct Deformed Barcodes
The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted or deformed. DBR is able to correct these deformed barcodes to a standard shape by setting `DRM_GENERAL` mode in parameter [DeformationResistingModes]({{ site.parameters_reference }}deformation-resisting-modes.html).

### Support Direct Part Marking Codes 
DPM (Direct Part Marking) Codes, DataMatrix typically, are widely used in industrial part tracking, from electronics manufacturing to automotive assembly. They always come with light reflection, low contrast, complex background texture, and other distorted features. DBR is able to decode such DPM codes by setting `DPMCRM_GENERAL` mode in parameter [DPMCodeReadingModes]({{ site.parameters_reference }}mirror-mode.html). 

### Cover Both Normal and Mirrored States 
Sometimes, barcodes can come out in a mirrored orientation compared to the normal orientation (left to right). DBR is able to cover both normal and mirrored barcodes by setting `MM_BOTH` mode in parameter [MirrorMode]({{ site.parameters_reference }}image.html). If the barcodes you are decoding are of the same state, setting it to only `MM_NORMAL` or `MM_MIRROR` can improve the speed without affecting the read rate.

### Comply with Non-standard Barcodes
In some cases, the barcode may not be generated or printed following the standard. DBR is able to decode such non-standard barcodes by setting the following parameters to provide information about the non-standard part.

- [StandardFormat]({{ site.parameters_reference }}standard-format.html) to specify the standard barcode format.
- [AllModuleDeviation]({{ site.parameters_reference }}all-module-deviation.html) to specify the barcode module size deviation value.
- [HeadModuleRatio]({{ site.parameters_reference }}head-module-ratio.html) to specify the module count and module size ratio of the barcode head part.
- [TailModuleRatio]({{ site.parameters_reference }}tail-module-ratio.html) to specify the module count and module size ratio of the barcode tail part.
- [FindUnevenModuleBarcode]({{ site.parameters_reference }}find-uneven-module-barcode.html) to specify whether to find barcodes with uneven barcode modules.

## Summary

In this article, we went through the complete reading process and looked at most of the parameters which might impact read rate.

Depending on the actual image you are scanning or the usage scenario you are trying to adapt to, you can experiment with these parameters to find the most suitable settings for the best read rate. If you have any further questions, you can get in touch with <a href="https://www.dynamsoft.com/company/contact/" target="_blank">Dynamsoft Support</a>.

In reality, accuracy and speed matter too. Read our other documents dedicated to these two topics:

- [How to Boost Barcode Reading Accuracy](accuracy.md)
- [How to Boost Barcode Reading Speed](speed.md)

