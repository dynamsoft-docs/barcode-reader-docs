---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Read Rate
description: This page shows how the Dynamsoft Barcode Reader SDK is designed to improve read rate
keywords: Read Rate
---


# Achieve a High Barcode Reading Rate

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") is designed and how to adjust parameters to achieve a high barcode reading rate.
>Note: A read rate is the number of barcodes decoded divided by the number expected.

## Adjust Parameters to Localize Barcode Zones
Barcode zones are able to detected and localized by taking advantage of features of different barcode formats. For example, linear barcode is consist
of several parallel lines, finding such an area with group of lines, a liner barcode zone is detected. 

For now, DBR provides 8 methods to localize a barcode zone and each method is designed for finding particular barcode features. By default, 4 methods, `LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, `LM_LINES`, `LM_STATISTICS`, have been set and this can localize most of regular barcode zones.
If not, check out parameter [LocalizationModes]({{ site.parameters_reference }}localization-modes.html) to learn and set an appropriate localization mode. 

For some cases, the barcode features may not obvious or good enough for localization and addtional processing need to be taken to enhance barcode zone features. Check out and adjust the following parameters designed for these cases to improve the read rate.

### Identify the Grayscale Transformation
[GrayscaleTransformationModes]({{ site.parameters_reference }}grayscale-transformation-modes.html) is a parameter to control the colour mode of the grayscale image. The barcode on an image usually have two types, dark barcode on light image and light barcode on dark image. Correspondly, identify the types of barcodes you are reading and set `GrayscaleTransformationModes` to `GTM_ORIGINAL` and/or `GTM_INVERTED`.

### Enhance the Grayscale Image Quality
[ImagePreprocessingModes]({{ site.parameters_reference }}image-preprocessing-modes.html) is a parameter to provide some image processing methods to enhance the quality of the grayscale image, for example, removing the noise, improving the contrast. By default, it is set to `IPM_GENERAL` which means no image processing. Follow the table to identify the circumstance of your barcode image and set the appropriate image preprocessing mode.
| Image Circumstance | Recommended Setting |
|--|--|
| With low contrast on barcode and background | IPM_GRAY_EQUALIZE | 
| With intensive noise or texture | IPM_GRAY_SMOOTH |
| With blurred boundaries around the barcode module | IPM_SHARPEN_SMOOTH |
| With barcode area polluted or destroyed | IPM_MORPHOLOGY |

### Enhance the Binarization
[BinarizationModes]({{ site.parameters_reference }}binarization-modes.html) is a parameter to provide some binarization methods to generate a high quality binary image. Setting it to `BM_LOCAL_BLOCK` will binarize the image for each pixel based on a threshold which is calculated based on a small region around it. It works well on image with varying illumination. When using this mode, there are two arguments can be used to further improve the read rate. Setting `BlockSizeX` and `BlockSizeY` to 5 - 8 times module size if you are aware of the module size and `EnableFillBinaryVacancy` to 1 if you are reading barcodes with a large module size.
Another mode, `BM_THRESHOLD`, binarizes the image for each pixel based on a global unified threshold. It works well when the image has obvious contrast between the barcode and the background. You can adjust the threshold by setting argument `BinarizationThreshold` to find a best value for your image.


## Adjust Parameters to Decode a Barcode Zone
After getting a high quality barcode zone, DBR applies a variety of further process to decode the barcode. There are many parameters can be used in this procedure to insure the read rate.

### Support Small Module Size
[ScaleUpModes]({{ site.parameters_reference }}scale-up-modes.html) is a parameter to deal with barcodes with small module size. Barcode with a small module size may be distorted by some processing methods like rotation, binarization with inappropriate block size, etc. Enlarging the barcode zone to a larger size can enhance the ability to prevent distortion, thereby improve the possibility to be read. 

### Support Multiple Blurness Removing
[DeblurModes]({{ site.parameters_reference }}deblur-modes.html) is a parameter to deal with varying image blurness situations. It provides several methods to perform a second round of image processing on the barcode zone, aiming to remove the blurness features. One of the most powerful methods is `DM_DEEP_ANALYSIS`, it is desinged to analyze and get barcode modules when the barcode content modules have blurred boundaries and complex backgrounds which cannot be solved by other image processing methods.

### Support Incomplete Barcodes
[BarcodeComplementModes]({{ site.parameters_reference }}barcode-complement-modes.html) is a parameter to deal with incomplete barcodes. In some cases, due to misprinting, the barcodes may miss some modules which contain no text data, like find patterns for QR codes and border for Datamatrix. DBR is able to complete and correct these barcodes by setting a `BCM_GENERAL` mode.

### Support Deformed Barcodes
[DeformationResistingModes]({{ site.parameters_reference }}deformation-resisting-modes.html) is a parameter to deal with deformed barcodes. The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed. DBR is able to correct these deformed barcodes to a standard shape by setting a `DRM_GENERAL` mode.

### Support DPM Codes 
[DPMCodeReadingModes]({{ site.parameters_reference }}mirror-mode.html) is a parameter to deal with DPM (Direct Part Marking) codes. DPM Codes, DataMatrix typically, are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. They always come with light reflection, low contrast, complex background texture, and other distorted features. If you are reading these barcodes, please set a `DPMCRM_GENERAL` mode. 

### Support Mirror State
[MirrorMode]({{ site.parameters_reference }}image.html) is a parameter to deal with mirrored barcodes. Setting it to `MM_BOTH` will cover both normal and mirrored barcodes and it is the recommanded setting for better read rate when the barcode mirror state is uncertain.
The barcode on an image usually have two types, normal and mirrored. Correspondly, identify the types of barcodes you are reading and set `MirrorMode` to `MM_NORMAL`, `MM_MIRROR` or `MM_BOTH`.


### Support Non-standard Format
In some cased, the barcodes may not be generated or printed following the standard. DBR provides a group of parameters to support non-standard barcode formats. If the barcodes you are decoding is non-standard, setting following parameters may help the read rate.
- [StandardFormat]({{ site.parameters_reference }}standard-format.html) to specify the standard barcode format.
- [AllModuleDeviation]({{ site.parameters_reference }}all-module-deviation.html) to specify the barcode module size deviation value.
- [HeadModuleRatio]({{ site.parameters_reference }}head-module-ratio.html) to specify the module count and module size ratio of the barcode head part.
- [TailModuleRatio]({{ site.parameters_reference }}tail-module-ratio.html) to specify the module count and module size ratio of the barcode tail part.
- [FindUnevenModuleBarcode]({{ site.parameters_reference }}find-uneven-module-barcode.html) to specify whether to find barcodes with uneven barcode modules.
