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

There are 3 basic metrics for measuring the performance of a barcode reader application: **speed**, **accuracy** and **read-rate**. The Dynamsoft Barcode Reader SDK (DBR) has been carefully designed to have excellent performance in all three of these metrics. In this article, we try to investigate all the possible methods you can take to let DBR focus on **read-rate**. 

As the ultimate guide on how to configure DBR to realize its full potential on read rate, we will go through 3 barcode reading processes, strengthening image features before localization, localizing barcode zones and decoding a barcode zone, and all the parameters can be customized during these processes.

> The following shows the definition of the three metrics.
>  
> $ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
>  
> $ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $
>  
> $ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $
>  
> Do bear in mind that, if one of these metrics is prioritized, the other two may not be ideal.


## Strengthen Image Features for Localization
Barcode zones are detectable by taking advantage of features of different barcode formats. For example, linear barcode is consist
of several parallel lines, finding such an area with group of lines, a liner barcode zone is detected. But in some cases, these features may not be obvious or good enough to be detectable, so DBR will firstly go through the following processes to enhance barcode zone features before localization. 

### Optimize the Conversion from Colour Image to Grayscale
If the original image is a colour image, DBR will convert it to grayscale. When doing that, the colour space and weights of each colour channel used directly affect the quality of the grayscale image. By default, DBR uses RGB space and automatically calculates the weights of three channels. To get a high quality grayscale image, you can also adjust the colour space and weight of channels by parameter [ColourConversionModes]({{ site.parameters_reference }}colour-conversion-modes.html). For example, if your image has a barcode on red background, setting `BlueChannelWeight, GreenChannelWeight and RedChannelWeight` to `0, 0 and 1000` will return a better grayscale than `300, 300 and 400`.

After the conversion, the barcode on the grayscale image is either darker or lighter than the background. For the lighter one, DBR needs to be informed with a `GTM_INVERTED` mode set in parameter [GrayscaleTransformationModes]({{ site.parameters_reference }}grayscale-transformation-modes.html) to invert the image in advance. Therefore, to insure the read rate, it is recommended to set `GTM_ORIGINAL` and `GTM_INVERTED` to cover both darker and lighter barcodes.


### Enhance the Grayscale Image Quality
[ImagePreprocessingModes]({{ site.parameters_reference }}image-preprocessing-modes.html) is a parameter to provide some image processing methods to enhance the quality of the grayscale image, for example, removing the noise, improving the contrast. To get the best read rate, you can set all supported methods. But to balance the time cost, please follow the table to identify the circumstance of your barcode image and set one or a few modes.

| Image Circumstance | Recommended Setting |
| --- | --- |
| With low contrast on barcode and background | IPM_GRAY_EQUALIZE | 
| With intensive noise or texture | IPM_GRAY_SMOOTH |
| With blurred boundaries around the barcode module | IPM_SHARPEN_SMOOTH |
| With barcode area polluted or destroyed | IPM_MORPHOLOGY |

### Generate a High Quality Binary Image
[BinarizationModes]({{ site.parameters_reference }}binarization-modes.html) is a parameter to provide some binarization methods to generate a high quality binary image. Setting it to `BM_LOCAL_BLOCK` will binarize the image for each pixel based on a threshold which is calculated based on a small region around it. It works well on image with varying illumination. When using this mode, there are arguments can be used to further improve the read rate. Setting `BlockSizeX` and `BlockSizeY` to 5 - 8 times module size if you are aware of the module size and `EnableFillBinaryVacancy` to 1 if you are reading barcodes with a large module size.

Another mode, `BM_THRESHOLD`, binarizes the image for each pixel based on a global unified threshold. It works well when the image has obvious contrast between the barcode and the background. You can adjust the threshold by setting argument `BinarizationThreshold` to find a best value for your image.

## Multiple Modes to Localize Barcode Zones
After the above processing, we have got an high quality binary image ready for barcode zone localization. DBR provides several methods to localize a barcode zone, which can be customized by parameter [LocalizationModes]({{ site.parameters_reference }}localization-modes.html) to improve the read rate.
Extremely speeking, setting all localization modes will give you the highest read rate, but it can be very time-consuming. Follow the instructions bellow to get great read rate while balancing the speed. 

### Common Usage
`LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, `LM_LINES`, `LM_STATISTICS` is the default value set in DBR and this can localize most of regular barcodes. With this setting, DBR firstly uses `LM_SCAN_DIRECTLY` to run a fast scan through the whole image, this can localize many types of barcodes, especially for liner barcodes, QR, PDF417 and postal codes, vertically or horizontally on image. As an insurance, DBR then uses `LM_CONNECTED_BLOCKS`, followed by `LM_LINES` and `LM_STATISTICS` to localize barcodes by searching for connected blocks, groups of lines and contiguous black-white regions.

### Specific Case
- If you are decoding postal codes and the read rate is in quite high priority, you can add `LM_STATISTICS_POSTAL_CODE` to the default setting, it is designed to optimize the localization for postal codes.

- If you are decoding barcodes whose modules are separate, e.g., Direct Part Marking (DPM) codes, and DotCode, `LM_STATISTICS_MARKS` is the right one you should set.

### Compromise on Speed 
For some cases, the read speed may take priority over read rate, the following options may help.
- `LM_ONED_FAST_SCAN` is designed to localize OneD barcodes very fast but the read rate may not be good enough. If the barcode type you are decoding is OneD and the image quality is relatively high, you can set this mode instead of `LM_SCAN_DIRECTLY` to save some time.

- `LM_CENTRE` works just like LM_STATISTICS but only searchs barcodes from the centre of the image. When the barcodes are in the centre of the image, using this mode other than LM_STATISTICS may save some time.

### Setting Tips 
- `LM_CONNECTED_BLOCKS` not only gives a great localization result, but also shares data with other localozation modes, e.g., LM_LINES, LM_STATISTICS, LM_STATISTICS_MARKS and LM_STATISTICS_POSTAL_CODE. So `LM_CONNECTED_BLOCKS` should always be placed before these modes.

- `LM_SCAN_DIRECTLY` can be covered by `LM_CONNECTED_BLOCKS`, so setting `LM_SCAN_DIRECTLY` after `LM_CONNECTED_BLOCKS` will give no help on read rate but slow down the speed. And setting `LM_SCAN_DIRECTLY` before `LM_CONNECTED_BLOCKS` is usually used only when `ExpectedBarcodesCount` is setting to 0.

## Endeavor to Decode a Barcode Zone
After localizing a barcode zone, DBR will go through the following processes to try its best to get a final result.

### Enlarge Barcode with Small Module Size
Barcode with a small module size may be distorted by some processing methods like rotation, binarization with inappropriate block size, etc. Enlarging the barcode zone to a larger size can enhance the ability to prevent distortion, thereby improve the possibility to decode the result. The parameter [ScaleUpModes]({{ site.parameters_reference }}scale-up-modes.html) can be used to determine whether and how to do the enlarging. For example, setting a mode `SUM_LINEAR_INTERPOLATION` with argument `ModuleSizeThreshold` setting to 2 will active the enlaring process using the linear interpolation method when barcode module size is smaller than 2px.

### Further Improve Barcode Module Features
In this procedure, DBR performs a round of image processing on the precisely partitioned barcode area to find barode modules. The parameter [DeblurModes]({{ site.parameters_reference }}deblur-modes.html), comes with 9 modes, can be used to configure how DBR runs the processings. Of the 9 modes, 2 of them are designed for relatively simple situations: 

- `DM_BASED_ON_LOC_BIN` is the most efficient mode when the barcode area is clear and clean. It reuses the binary image generated during the localization process. 
- `DM_THRESHOLD_BINARIZATION` is preferred when the barcode content modules have distinct colour contrast with the background.

The following 6 modes provides more adaptability to handle more complicated situations.
- `DM_DIRECT_BINARIZATION` is preferred when the barcode content modules have varying illumination.
- `DM_GRAY_EQUALIZATION` is preferred when the barcode content modules have low colour contrast with the background.
- `DM_SMOOTHING` is preferred when the barcode area have intensive noise or texture.
- `DM_SHARPENING` is preferred when the barcode content modules have blurred boundaries with a clear background.
- `DM_SHARPENING_SMOOTHING` is preferred when the barcode content modules have blurred boundaries with unclear backgrounds.
- `DM_MORPHING` is preferred when the barcode area is polluted or destroyed.

Last but not least, `DM_DEEP_ANALYSIS` is the most powerful way to deal with desperate situations which cannot be solved by above modes. It analyzes every pixel of the image, does a lot calculation to gather characteristics to find or build relation between each pixel, and finally find out the barcode modules.

>Note:  
>To get the best read rate, DBR by default has all above 9 modes enabled so that it covers varying situations.  
>To speed up the process, choose only one or a few optimun modes.  
>When using multiple modes, always set `DM_DEEP_ANALYSIS` after all other modes since it's relatively time-consuming.

### Enable Multiple Barcode Types
Barcode types are defined with parameter [BarcodeFormat]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat_2]({{ site.enumerations }}format-enums.html#barcodeformat_2). The more barcode types you set, the more results you may get. If the types of barcodes you are going to read is uncertain, you should enable all barcode types to insure the read rate.

### Restore Incomplete Modules
In some cases, due to misprinting, the barcodes may miss some modules, like find patterns for QR codes and border for Datamatrix. DBR is able to restore the missing modules for these barcodes by setting a `BCM_GENERAL` mode in parameter [BarcodeComplementModes]({{ site.parameters_reference }}barcode-complement-modes.html).

### Correct Deformed Barcodes
The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed. DBR is able to correct these deformed barcodes to a standard shape by setting a `DRM_GENERAL` mode in parameter [DeformationResistingModes]({{ site.parameters_reference }}deformation-resisting-modes.html).

### Support Direct Part Marking Codes 
DPM (Direct Part Marking) Codes, DataMatrix typically, are widely used in industrial part tracking, from electronics manufacturing to automotive assembly. They always come with light reflection, low contrast, complex background texture, and other distorted features. DBR is able to decode such DPM codes by setting a `DPMCRM_GENERAL` mode in parameter [DPMCodeReadingModes]({{ site.parameters_reference }}mirror-mode.html). 

### Cover Both Normal and Mirrored States 
The barcode on an image usually have two states, normal and mirrored. DBR is able to cover both normal and mirrored barcodes by setting a `MM_BOTH` mode in parameter [MirrorMode]({{ site.parameters_reference }}image.html). If the barcodes you are decoding are of the same state, setting it to `MM_NORMAL` or `MM_MIRROR` can improve the speed without affect on read rate.


### Compatible with Non-standard Barcodes
In some cases, the barcodes may not be generated or printed following the standard. DBR provides a group of parameters to support non-standard barcode formats. If the barcodes you are decoding is non-standard, setting following parameters may help the read rate.

- [StandardFormat]({{ site.parameters_reference }}standard-format.html) to specify the standard barcode format.
- [AllModuleDeviation]({{ site.parameters_reference }}all-module-deviation.html) to specify the barcode module size deviation value.
- [HeadModuleRatio]({{ site.parameters_reference }}head-module-ratio.html) to specify the module count and module size ratio of the barcode head part.
- [TailModuleRatio]({{ site.parameters_reference }}tail-module-ratio.html) to specify the module count and module size ratio of the barcode tail part.
- [FindUnevenModuleBarcode]({{ site.parameters_reference }}find-uneven-module-barcode.html) to specify whether to find barcodes with uneven barcode modules.

## Summary

In this article, we went through the complete reading process and looked at most of the parameters which might impact read rate.

Depending on the actual image you are scanning or the usage scenario you are trying to cope with, you can experiment with these parameters to find the most suitable settings for the best read rate. If you have any further questions, you can get in touch with <a href="https://www.dynamsoft.com/company/contact/" target="_blank">Dynamsoft Support</a>.

In reality, accuracy and speed matter too. Read our other documents dedicated to these two topics:

- [How to Boost Barcode Reading Accuracy](accuracy.md)
- [How to Boost Barcode Reading Speed](speed.md)

