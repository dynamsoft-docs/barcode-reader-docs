---
layout: default-layout
needAutoGenerateSidebar: true
title: How to select the appropriate DBR parameter configuration
description: This article shows how to select the appropriate DBR parameter configuration.
breadcrumbText: Scenario Settings
---

# How to set appropriate DBR parameter configurations

Dynamsoft Barcode Reader (DBR) offers flexible parameters to meet the decoding requirements of different scenarios and requirements. Here you can learn how to choose the appropriate parameter configurations for your project.

- [DBR Parameter Configuration Methods](#dbr-parameter-configuration-methods)
- [DBR Barcode Format and Expected Barcode Counts](#dbr-barcode-format-and-expected-barcode-counts)
- [DBR Algorithm Flow](#dbr-algorithm-flow)
- [Control Terminate Phase for DBR](#control-terminate-phase)
- [Configuration parameters for specific barcode formats](#configure-parameters-for-specific-barcode-formats)

## DBR Parameter Configuration Methods

DBR provides two parameter configuration methods: `RuntimeSetting` and JSON template. 

For more information, please refer to this article: [How to set DBR parameters](how-to-set-parameters.md).

## DBR Barcode Format and Expected Barcode Counts

It is common that you may want to specify Barcode Format and Expected Barcode Counts for the scanning process. 

For more information, please refer to: [How to set the barcode format and the number of barcodes expected to be detected](barcode-format-and-expected-barcode-counts.md).

## DBR Algorithm Flow

Understanding the general flow of the DBR algorithm can help you better choose the appropriate parameters for your project. The general processing process of DBR for images consists the below:

- [Determine Regions Of Interest (ROI) in the image](#determine-the-region-of-interest-in-the-image)
- [Barcode region localization in ROI(s)](#barcode-region-localization-in-roi)
- [Identify the type of located barcode](#identify-the-type-of-located-barcode-region)
- [Decode located barcodes](#decode-located-barcode-region)
- [Return results](#return-results)

### Determine the Region Of Interest in the image 

Region Of Interest (ROI) in an image usually refers to the characteristic area of the image that contains the barcode region that you care about. This step involves the following:

- Get raw image data  
For more information, please refer to this article: [How to read images from different sources](read-from-diff-source.md) and [How to process multi-page TIF & PDF](multipage-imgs-and-pdf.md).
- Image scale and colour conversion  
For more information, please refer to this article: [How to set image scaling and colour transformation](image-scale-and-colour-conversion.md).
- Detect ROI   
For more information, please refer to this article: [Manually define Region Of Interest](manually-define-region-of-interest.md) and
 [How to use region pre-detection](how-to-use-region-predetection.md).

### Barcode Region Localization in ROI

This part is to locate the barcode region in ROI. Main steps:

- Grayscale Pre-processing  
Learn more: [How to preprocess images based on different scenarios](image-preprocessing.md).
- Grayscale Binarization  
Learn more: [How to configure the binarization parameters](how-to-set-binarization-modes.md).
- Texture Detection  
Learn more: [How to deal with image textures](texture-detection.md).
- Text Filter  
Learn more: [How to filter text](text-filter.md).
- Localization  
Learn more: [How to set localization modes](how-to-set-localization-modes.md).

### Identify the type of located barcode region

This step will identify and standardize the type of located Barcode Region, including the following steps:

- Find the exact boundary of barcode region
- Barcode region standardization
- In the process of barcode region standardization, the barcode region that is too small may be enlarged. For more information, please refer to this article: [How to read barcodes with small module size](how-to-set-scaleup-modes.md).

### Decode Located Barcode Region

This part includes the following steps:

- Resist Deformation  
Read more: [How to deal with deformed barcodes](resist-deformation.md).
- Barcode Complementation  
Read more: [How to decode incomplete barcodes](how-to-set-barcode-complememt-modes.md).
- Sample Decoding  
Sample decoding process mainly involves [Deblur Level](deblur-level.md) and [DPM Decoding](dpm-decoding.md).

### Return Results

DBR's returned results include the decoding results and intermediate results.   
For more information, please refer to this article: [How to filter and sort decoding results](decode-result.md) and [How to obtain and use intermediate results](intermediate-result.md).

## Control Terminate Phase

Learn how to set timeout for decoding and also specify a certain stage to terminate the DBR algorithm.   
For more information, please refer to this article: [How to control the Terminate Phase](terminate.md).

## Configure parameters for specific barcode formats

In addition to common configuration parameters, DBR also provides code-specific configuration parameters to meet the diverse user needs.   
For more information, please refer to this article: [Configure parameters for specific barcode formats](format-specification.md).
