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

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") is designed and how to adjust parameters to achieve a high barcode [read rate](#read-rate). Do bear in mind that [accuracy](#accuracy) and [speed](#speed) may not be ideal when read rate is the first priority.


## Strengthen Image Features for Localization
Barcode zones are detectable by taking advantage of features of different barcode formats. For example, linear barcode is consist
of several parallel lines, finding such an area with group of lines, a liner barcode zone is detected. But in some cases, these features may not be obvious or good enough to be detectable, we can customize the following processings to enhance barcode zone features before localization. 

### Optimize the Conversion from Colour Image to Grayscale
When converting a colour image to grayscale, the colour space and weights of each colour channel used directly affect the quality of the grayscale image. 
By default, DBR uses RGB space and automatically calculates the weights of three channels. To get a high quality grayscale image, you can also adjust the colour space and weight of channels by parameter [ColourConversionModes]({{ site.parameters_reference }}colour-conversion-modes.html). For example, if your image has a barcode on red background, setting `BlueChannelWeight, GreenChannelWeight and RedChannelWeight` to `0, 0 and 1000` will return a better grayscale than `300, 300 and 400`.


[GrayscaleTransformationModes]({{ site.parameters_reference }}grayscale-transformation-modes.html) is a parameter to control the colour mode of the barcode on grayscale image. The barcode on an image usually have two types, dark barcode on light background and light barcode on dark background. If the barcodes you are decoding are of the same colour mode, setting this mode correspondly to `GTM_ORIGINAL` or `GTM_INVERTED` can improve the speed without affecting on read rate. If not, setting it to `GTM_ORIGINAL` and `GTM_INVERTED` will cover both types to insure the read rate.

### Enhance the Grayscale Image Quality
[ImagePreprocessingModes]({{ site.parameters_reference }}image-preprocessing-modes.html) is a parameter to provide some image processing methods to enhance the quality of the grayscale image, for example, removing the noise, improving the contrast. By default, it is set to `IPM_GENERAL` which means no image processing. Follow the table to identify the circumstance of your barcode image and set the appropriate image preprocessing mode.

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
After getting a barcode zone, DBR applies a variety of further process before decoding the barcode. [DeblurModes]({{ site.parameters_reference }}deblur-modes.html) is a parameter can be customized in this procedure, which provides several methods to perform a round of image processing on the barcode zone, aiming to deal with varying image blurness situations may lead to low read rate. These methods can be divided into following three groups considering the effort and time cost. You can set one or more modes according to your barcode area situation to balance read rate and speed.

### Efficient 
Methods in this group focus on the process of binarizing the barcode area to handle relatively simple situations.
- Set `DM_BASED_ON_LOC_BIN` when the barcode area is clear and clean. It is the most effective method since it crop the barcode area directly from the binary image generated during the localization process. 
- Set `DM_DIRECT_BINARIZATION` when the barcode content modules have varying illumination.
- Set `DM_THRESHOLD_BINARIZATION` when the barcode content modules have distinct colour contrast with the background.

### Effective
Methods in this group will take further process before or after binarization to handle more complicated situations.

- Set `DM_GRAY_EQUALIZATION` when the barcode content modules have low colour contrast with the background.
- Set `DM_SMOOTHING` when the barcode area have intensive noise or texture.
- Set `DM_SHARPENING` when the barcode content modules have blurred boundaries with a clear background.
- Set `DM_SHARPENING_SMOOTHING` when the barcode content modules have blurred boundaries with unclear backgrounds.
- Set `DM_MORPHING` when the barcode area is polluted or destroyed.

### Last Resort
`DM_DEEP_ANALYSIS` is the most powerful way to deal with complicated situations which cannot be solved by above processing methods. It analyzes every pixel of the image, does a lot calculation to gather characteristics to find or build relation between each pixel, and finally find out the barcode modules. The process is relatively time-consuming, so it is recommended to set `DM_DEEP_ANALYSIS` after all other modes. 

## Supporting Particular Circumstances During Decoding
After removing blurness on barcode zones, DBR starts decoding the barcode. There are many parameters can be used during this procedure to deal with following circumstances to insure the read rate.

### Uncertain Barcode Types
If the barcode types you are decoding is uncertain, it is recommended to set all barcode types defined in [BarcodeFormat]({{ site.enumerations }}format-enums.html#barcodeformat) and [BarcodeFormat_2]({{ site.enumerations }}format-enums.html#barcodeformat_2). Otherwise, you can set a specific barcode type to improve the read speed.

### Small Module Size
[ScaleUpModes]({{ site.parameters_reference }}scale-up-modes.html) is a parameter to deal with barcodes with small module size. Barcode with a small module size may be distorted by some processing methods like rotation, binarization with inappropriate block size, etc. Enlarging the barcode zone to a larger size can enhance the ability to prevent distortion, thereby improve the possibility to be read. 

### Incomplete Barcodes
[BarcodeComplementModes]({{ site.parameters_reference }}barcode-complement-modes.html) is a parameter to deal with incomplete barcodes. In some cases, due to misprinting, the barcodes may miss some modules which contain no text data, like find patterns for QR codes and border for Datamatrix. DBR is able to complete and correct these barcodes by setting a `BCM_GENERAL` mode.

### Deformed Barcodes
[DeformationResistingModes]({{ site.parameters_reference }}deformation-resisting-modes.html) is a parameter to deal with deformed barcodes. The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed. DBR is able to correct these deformed barcodes to a standard shape by setting a `DRM_GENERAL` mode.

### DPM Codes 
[DPMCodeReadingModes]({{ site.parameters_reference }}mirror-mode.html) is a parameter to deal with DPM (Direct Part Marking) codes. DPM Codes, DataMatrix typically, are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. They always come with light reflection, low contrast, complex background texture, and other distorted features. If you are reading these barcodes, please set a `DPMCRM_GENERAL` mode. 

### Mirror State

[MirrorMode]({{ site.parameters_reference }}image.html) is a parameter to deal with mirrored barcodes. The barcode on an image usually have two states, normal and mirrored. If the barcodes you are decoding are of the same mirror state, setting this mode to `MM_NORMAL` or `MM_MIRROR` can improve the speed without affect on read rate. If not, setting it to `MM_BOTH` will cover both normal and mirrored barcodes to insure the read rate.


### Non-standard Barcodes
In some cases, the barcodes may not be generated or printed following the standard. DBR provides a group of parameters to support non-standard barcode formats. If the barcodes you are decoding is non-standard, setting following parameters may help the read rate.

- [StandardFormat]({{ site.parameters_reference }}standard-format.html) to specify the standard barcode format.
- [AllModuleDeviation]({{ site.parameters_reference }}all-module-deviation.html) to specify the barcode module size deviation value.
- [HeadModuleRatio]({{ site.parameters_reference }}head-module-ratio.html) to specify the module count and module size ratio of the barcode head part.
- [TailModuleRatio]({{ site.parameters_reference }}tail-module-ratio.html) to specify the module count and module size ratio of the barcode tail part.
- [FindUnevenModuleBarcode]({{ site.parameters_reference }}find-uneven-module-barcode.html) to specify whether to find barcodes with uneven barcode modules.

## Related Articles
- [How to boost barcode reading Accuracy](accuracy.md)
- [How to boost barcode reading Speed](speed.md)

## Definition of Performance Metrics

### Read Rate
$ Read~Rate = \frac{Number~of~All~Decoded~Barcode~Results}{Number~of~All~Target~Barcodes} $

### Accuracy
$ Accuracy = \frac{Number~of~Correctly~Decoded~Barcode~Results}{Number~of~All~Decoded~Barcode~Results} $

### Speed
$ Speed = \frac{Number~of~All~Decoded~Barcode~Results}{Total~Time~Consumed} $
