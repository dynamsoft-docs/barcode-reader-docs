---
layout: default-layout
needAutoGenerateSidebar: true
title: How to select the appropriate DBR parameter configuration
description: This article shows how to select the appropriate DBR parameter configuration.
breadcrumbText: Scenario Settings
---

# How to select the appropriate DBR parameter configuration

DBR offers flexible parameters to meet the decoding requirements for different scenarios and requirements. This section will introduce how to choose the appropriate parameter configuration for your project. We will introduce DBR parameters by breaking down the process into the follow five areas:
- DBR Parameter Configuration Methods
- DBR Barcode Format And Expected Barcode Counts
- DBR Algorithm Flow
- Control Terminate Phase for DBR
- Configuration parameters for specific barcode formats

## DBR Parameter Configuration Methods

DBR provides two parameter configuration methods: RuntimeSetting and Json template. For more information, please refer to this article: [How to set DBR parameters](how-to-set-parameters.md).

## DBR Barcode Format and Expected Barcode Counts

It is a common to set Barcode Format and Expected Barcode Counts for the DBR decoding process. For more information, please refer to this article: [How to set the barcode format and the number of barcodes expected to be detected](barcode-format-and-expected-barcode-counts.md).

## DBR Algorithm Flow

Understanding the general flow of the DBR algorithm can help us choose the appropriate parameters for your project. The complete processing process of DBR for images is :

- Determine Region(s) Of Interest in the image (ROI)
- Barcode Region Localization in ROI(s)
- Identify the type of located barcode
- Decode Located Barcode
- Return Results

### Determine the Region Of Interest in the image (ROI)

Region Of Interest in the image usually refers to the characteristic area of the image that contains the barcode region that the user is concerned with. This step involves the following:
- Get raw image data  
For more information, please refer to this article: [How to read images from different sources](read-from-diff-source.md) and [How to process multi-page TIF & PDF](multipage-imgs-and-pdf.md).
- Image Scale And Colour Conversion  
For more information, please refer to this article: [How to set image scaling and colour transformation](image-scale-and-colour-conversion.md).
- Detect ROI 
For more information, please refer to this article: [Manually define Region Of Interest](manually-define-region-of-interest.md) and
 [How to use region pre-detection](how-to-use-region-predetection.md).

### Barcode Region Localization in ROI

This step is to locate the barcode region in ROI, mainly including the following steps:

- Grayscale Pre-processing
For more information, please refer to this article: [How to preprocess images based on different scenarios](image-preprocessing.md).
- Grayscale Binarization 
For more information, please refer to this article: [How to configure the binarization parameters](how-to-set-binarization-modes.md).
- Texture Detection 
For more information, please refer to this article: [How to deal with image textures](texture-detection.md).
- Text Filter   
For more information, please refer to this article: [How to filter text](text-filter.md).
- Localization   
For more information, please refer to this article: [How to set localization modes](how-to-set-localization-modes.md).

### Identify the type of located barcode region

This step will identify and standardize the type of located Barcode Region, including the following steps:

- Find the exact boundary of barcode region
- Barcode region standardization
-	In the process of barcode region standardization, the barcode region that is too small may be enlarged. For more information, please refer to this article: [How to read barcodes with small module size](how-to-set-scaleup-modes.md).

### Decode Located Barcode Region

This part includes the following steps:

- Resist Deformation   
For more information, please refer to this article: [How to deal with deformed barcodes](resist-deformation.md).
- Barcode Complement   
For more information, please refer to this article: [How to decode incomplete barcodes](how-to-set-barcode-complememt-modes.md).
- Sample Decoding 
Sample decoding process mainly involves [Deblur Level](deblur-level.md) and [DPM Decoding](dpm-decoding.md).

### Return Results

DBR 's returned results include the decoding results and intermediate results. For more information, please refer to this article: [How to filter and sort decoding results](decode-result.md) and [How to obtain and use intermediate results](intermediate-result.md).

## Control Terminate Phase

For more information, please refer to this article: [How to control the Terminate Phase](terminate.md).

## Configure parameters for specific barcode formats
In addition to common configuration parameters, DBR also provides code-specific configuration parameters which could meet the diverse needs of users. For more information, please refer to this article: [Configure parameters for specific barcode formats](format-specification.md).
