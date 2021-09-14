---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Read Rate
description: This page shows how the Dynamsoft Barcode Reader SDK is designed to improve read rate
keywords: Read Rate
---


# Achieve a High Barcode Reading Rate

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "DBR") is designed and how to adjust parameters to achieve a high barcode reading rate.

### Set How Many Barcodes to Read
By default, DBR sets `ExpectedBarcodesCount` to 0 which means find at least one barcode. When not all barcodes are returned, this is the first option for you to set `ExpectedBarcodesCount` to a larger value or the actual barcode count if you know exactly.

### Adjust Parameters to Localize Barcode Zones
As one of the 5 top level stages, localizing barcode zones is quite a base process. DBR provides parameter `LocalizationModes` which consists of following localization algorithms to take advantage of different features of barcode and image.
- LM_SCAN_DIRECTLY. It is recommended when the barcode is large relative to the image size. For example, when detecting barcodes from live video in interactive scenario, users will help focus the barcode so the barcode in the screen would be large enough to use LM_SCAN_DIRECTLY
- LM_CONNECTED_BLOCKS. It offers the right balance between reading speed and rate for most scenarios.
- LM_LINES. If using the above two modes can not detect all your barcodes, adding this mode may help for 1D and PDF417 barcodes.
- LM_STATISTICS. If the above modes can not detect all your barcodes, adding this mode may help for QRCode and DataMatrix.
- LM_STATISTICS_MARKS. This is optimized for Direct Part Marking (DPM) codes and DotCode.
- LM_STATISTICS_POSTAL_CODE. For postal codes, adding this mode may help for some scenarios.
- LM_CENTRE. Localizes barcodes from the centre of the image.

By default, `LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, `LM_LINES`, `LM_STATISTICS` have been set and this can localize most of regular barcode formats. If not, add the left modes according to particular barcode features.

### Adjust Parameters to Decode a Barcode Zone

For a localized barcode zone, DBR applies a variety of image processing methods to decode the barcode. There are many parameters can be used in this procedure to insure the read rate.

`DeblurModes` is one of the parameters to deal with varying image blurness situations. It provides 9 methods and most of them have been set by default. If the read rate is not good enough, add the left ones may help.

`ScaleUpModes` is one of the parameters to deal with barcodes with small module size. When the barcode is relatively small to the entire image or the barcode module size is absolutely small, enlarging the barcode zone to a proper size may help the decoding. DBR is set to automatically detect whether to enlarge the zone and is customizable with 2 scale-up modes along with 3 additional arguments.

`BarcodeComplementModes` is one of the parameters to deal with incomplete barcodes. This feature is disabled by default and you can enable it by setting a `BCM_GENERAL` mode to decode a barcode with missing border, usually caused by misprinting.

`DeformationResistingModes` is one of the parameters to deal with deformed barcodes. The barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed. DBR may not be able to read these barcodes by default, but you can improve the read rate by setting a `DRM_GENERAL` mode.

`DPMCodeReadingModes` is one of the parameters to deal with DPM (Direct Part Marking) codes. DPM Codes, DataMatrix typically, are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. If you are reading these barcodes, setting a `DPMCRM_GENERAL` mode will definitely improve the read rate. 

`MirrorMode` is one of the parameters to deal with mirrored barcodes. Setting it to `MM_BOTH` will cover both normal and mirrored barcodes and it is the recommanded setting for better read rate when the barcode mirror state is uncertain.

### Adjust Parameters for Image Processing
Along with all parameters introduced above, DBR also provide many parameters for image processing. Adjusting the following parameters may help improve the read rate.

`GrayscaleTransformationModes` is a parameter to emphasize the features of the processing grayscale image. The barcode on a image usually have two types, dark barcode on light image and light barcode on dark image. Correspondly, setting `GrayscaleTransformationModes` to `GTM_ORIGINAL` and/or `GTM_INVERTED` for barcodes you are detecting will help the read rate.

`ImagePreprocessingModes` is a parameter to enhance/keep features of barcode zones by processing colour or grayscale images. By default, it is set to `IPM_GENERAL` which means DBR does no image preprocessing. If not all barcodes are detected, try adding one or more of the following preprocessing modes.
- IPM_GRAY_EQUALIZE. This mode can be used for images with low contrast on barcode and background colour.
- IPM_GRAY_SMOOTH. This mode can be used for for images with noise or texture.
- IPM_SHARPEN_SMOOTH. This mode can be used for blur images.
- IPM_MORPHOLOGY. This mode can be used for images where the barcode area is polluted or destroyed.

`BinarizationModes` is a parameter to control the process of binarization. By default, DBR uses `BM_LOCAL_BLOCK` mode for binarization which will binarize the image for each pixel based on a threshold which is calculated based on a small region around it. It works well when the image has different lighting conditions in different areas. If the read rate is not good, you can try adjusting arguments `BlockSizeX` and `BlockSizeX` to an appropriate value ( 5 - 8 times module size is recommended ). You can also try another binarization mode `BM_THRESHOLD` which will binarize the image for each pixel based on a global unified threshold. It works well when the image has obvious contrast between the barcode and the background.



### Support Non-standard Format
DBR provides a group of parameters to support non-standard barcode formats. If the barcodes you are decoding is non-standard, setting following parameters may help the read rate.

- `StandardFormat` to specify the standard barcode format.
- `AllModuleDeviation` to specify the barcode module size deviation value.
- `HeadModuleRatio` to specify the module count and module size ratio of the barcode head part.
- `TailModuleRatio` to specify the module count and module size ratio of the barcode tail part.
- `FindUnevenModuleBarcode` to specify whether to find barcodes with uneven barcode modules.
- `Code128Subset` to specify the subset of Code 128.
- `RequireStartStopChars` to specify whether the start and end characters need to be found during 1D decoding.