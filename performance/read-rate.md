---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Read Rate
description: This page shows how the Dynamsoft Barcode Reader SDK is designed to improve read rate
keywords: Read Rate
---


# How to Boost Barcode Read Rate

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") is designed and how to adjust parameters to achieve a high barcode read rate.
>Note: A read rate is the number of barcodes decoded divided by the number expected.

## Processings before Localizing Barcode Zones
Barcode zones are detectable by taking advantage of features of different barcode formats. For example, linear barcode is consist
of several parallel lines, finding such an area with group of lines, a liner barcode zone is detected. But in some cases, the barcode features may not obvious or good enough, so processings need to be taken to enhance barcode zone features before localization. Check out and adjust the following parameters designed for these cases to improve the read rate.

### Transform to Grayscale 
[GrayscaleTransformationModes]({{ site.parameters_reference }}grayscale-transformation-modes.html) is a parameter to control the colour mode of the barcode on grayscale image. The barcode on an image usually have two types, dark barcode on light background and light barcode on dark background. Correspondly, identify the types of barcodes you are reading and set `GrayscaleTransformationModes` to `GTM_ORIGINAL` and/or `GTM_INVERTED`.

### Enhance the Grayscale Image Quality
[ImagePreprocessingModes]({{ site.parameters_reference }}image-preprocessing-modes.html) is a parameter to provide some image processing methods to enhance the quality of the grayscale image, for example, removing the noise, improving the contrast. By default, it is set to `IPM_GENERAL` which means no image processing. Follow the table to identify the circumstance of your barcode image and set the appropriate image preprocessing mode.

| Image Circumstance | Recommended Setting |
| --- | --- |
| With low contrast on barcode and background | IPM_GRAY_EQUALIZE | 
| With intensive noise or texture | IPM_GRAY_SMOOTH |
| With blurred boundaries around the barcode module | IPM_SHARPEN_SMOOTH |
| With barcode area polluted or destroyed | IPM_MORPHOLOGY |

### Enhance the Binarization
[BinarizationModes]({{ site.parameters_reference }}binarization-modes.html) is a parameter to provide some binarization methods to generate a high quality binary image. Setting it to `BM_LOCAL_BLOCK` will binarize the image for each pixel based on a threshold which is calculated based on a small region around it. It works well on image with varying illumination. When using this mode, there are two arguments can be used to further improve the read rate. Setting `BlockSizeX` and `BlockSizeY` to 5 - 8 times module size if you are aware of the module size and `EnableFillBinaryVacancy` to 1 if you are reading barcodes with a large module size.

Another mode, `BM_THRESHOLD`, binarizes the image for each pixel based on a global unified threshold. It works well when the image has obvious contrast between the barcode and the background. You can adjust the threshold by setting argument `BinarizationThreshold` to find a best value for your image.

## Multiple Modes to Localize Barcode Zones
After the above processing, we have got an high quality binary image for barcode zone localization. [LocalizationModes]({{ site.parameters_reference }}localization-modes.html) is a parameter which contains several modes to localize a barcode zone considering the different features of barcodes. Here we will go through these modes and the using scenarios.

- LM_CONNECTED_BLOCKS
This mode localizes barcodes by searching for connected blocks. It gives great result on most of the circumstances and is recommended to be always set.

- LM_STATISTICS
This mode localizes barcodes by searching for groups of contiguous black-white regions. It works well for QRCode and DataMatrix.

- LM_LINES
This mode localizes barcodes by searching for groups of lines. It works well for linear barcodes and PDF417.

- LM_STATISTICS_MARKS
This mode localizes barcodes by searching for groups of marks. It works well for DPM barcodes and DotCode.

- LM_STATISTICS_POSTAL_CODE
This mode localizes barcodes by searching for bars of postal codes in terms of bars’ distribution. It works well for postal codes.

- LM_SCAN_DIRECTLY 
This mode scans the whole image, vertically and horizontally, to find barcode areas. The read rate is good if the barcodes on image are vertical or horizontal, but not for inclined barcodes.

- LM_ONED_FAST_SCAN
This mode is designed to localize OneD barcodes very fast, but the read rate is not guaranteed.

- LM_CENTRE
This mode works just like LM_STATISTICS but only searchs barcodes from the centre of the image. When the barcodes are in the centre of the image, using this mode ohter than LM_STATISTICS may save some time but get the same read rate.

Each above mode can work individually to find particular barcodes, if not all barcodes are localized, they can also be combined to cover more cases.
By default, 4 modes, `LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, `LM_LINES`, `LM_STATISTICS`, have been set and this can localize most of regular barcodes while balance with reading speed.


## Image Processings To Remove Blurness on Barcode Zones
After getting a barcode zone, DBR applies a variety of further process before decoding the barcode. [DeblurModes]({{ site.parameters_reference }}deblur-modes.html) is a parameter to deal with varying image blurness situations. It provides several modes to perform a round of image processing on the barcode zone, aiming to remove the blurness features. Here we will go through these modes and the using scenarios.

- DM_BASED_ON_LOC_BIN
This mode crops the barcode area from the binary image generated during the localization process. It is designed to improve reading speed for high-quality images.

- DM_DIRECT_BINARIZATION
This mode binarizes the barcode area for each pixel based on a threshold which is calculated based on a small region around it. If the barcode area is clear and clean, this mode is appropriate for both reading speed and rate.

- DM_THRESHOLD_BINARIZATION
This mode binarizes the barcode area with a global threshold. It is designed to get a better binary barcode image when the barcode content modules have distinct colour contrast with the background.

- DM_GRAY_EQUALIZATION
This mode applies histogram equalization to improve the contrast and then binarizes the barcode area. It is designed to get a better binary barcode image when the barcode content modules have low colour contrast with the background.

- DM_SMOOTHING
This mode applies smoothing operation to reduce the noise or texture and then binarizes the barcode area. It is designed to get a better binary barcode image when the barcode area have intensive noise or texture.

- DM_SHARPENING
This mode applies sharpening operation to make the boundaries of the barcode module clearer and reduce blur and then binarizes the barcode area. It is designed to get a better binary barcode image when the barcode content modules have blurred boundaries with a clear background.

- DM_SHARPENING_SMOOTHING
This mode applies sharpening operation first to make the boundaries of the barcode module clearer and reduce blur, smoothing then to reduce unwanted noise or texture, and then binarizes the barcode area. It is designed to get a better binary barcode image when the barcode content modules have blurred boundaries with unclear backgrounds.

- DM_MORPHING
This mode applies morphology algorithm to make the barcode module clearer and then binarizes the barcode area. It is designed to get a better binary barcode image when the barcode area is polluted or destroyed.

- DM_DEEP_ANALYSIS
This mode analyzes every pixel of the image and gather info to find out the barcode modules. It is desinged to get barcode modules when the barcode content modules have blurred boundaries and complex backgrounds which cannot be solved by other image processing methods. This is relatively time-consuming but is the best way to deal with blur images to archive a good read rate.


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
[MirrorMode]({{ site.parameters_reference }}image.html) is a parameter to deal with mirrored barcodes. The barcode on an image usually have two types, normal and mirrored. If you know exactly the mirror types of the barcodes you are decoding, setting this mode to `MM_NORMAL` or `MM_MIRROR` will save . If not, setting it to `MM_BOTH` will cover both normal and mirrored barcodes to insure the read rate.


### Non-standard Barcodes
In some cased, the barcodes may not be generated or printed following the standard. DBR provides a group of parameters to support non-standard barcode formats. If the barcodes you are decoding is non-standard, setting following parameters may help the read rate.
- [StandardFormat]({{ site.parameters_reference }}standard-format.html) to specify the standard barcode format.
- [AllModuleDeviation]({{ site.parameters_reference }}all-module-deviation.html) to specify the barcode module size deviation value.
- [HeadModuleRatio]({{ site.parameters_reference }}head-module-ratio.html) to specify the module count and module size ratio of the barcode head part.
- [TailModuleRatio]({{ site.parameters_reference }}tail-module-ratio.html) to specify the module count and module size ratio of the barcode tail part.
- [FindUnevenModuleBarcode]({{ site.parameters_reference }}find-uneven-module-barcode.html) to specify whether to find barcodes with uneven barcode modules.

