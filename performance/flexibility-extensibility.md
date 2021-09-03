---
layout: default-layout
title: Dynamsoft Barcode Reader Performance - Flexibility and Extensibility
description: This page shows what makes Dynamsoft Barcode Reader flexible and extensible
keywords: flexibility, extensibility
needAutoGenerateSidebar: true
noTitleIndex: false
---

# What makes Dynamsoft Barcode Reader flexible and extensible

Barcodes are widely used in many industries such as commodity management, postal services, logistics, banking, and manufacturing, etc. However, barcodes  show different characteristics in different scenarios:
- Various backgrounds
- Different directions. Such as horizontal, vertical, inclined, curled, etc.
- Various colors and scales
- Perspective distortion
- Unbalanced lighting
- Damaged

Therefore, Dynamsoft Barcode Reader(DBR) was designed to be a more flexible and extensible barcode reader SDK from the beginning. This article will introduce how DBR can achieve flexibility and scalability from the following aspects:

- Various build-in processing modes
- Load/Unload mode dynamically
- Arguments of a mode to fine-tune the effect
- Arguments of a mode to combine chains to reduce computation amount

## Various processing modes

In order to cope with various scenarios, DBR provides a variety of build-in processing modes at each stage of the algorithm to maintain great scalability. 


| **Parameter Name** | **Functionality** | **Status** |
| ------------------ | ---------------------------- | ---------- |
| [`ColourClusteringModes`]({{ site.parameters_reference }}image-parameter/ColourClusteringModes.html#colourclusteringmodes) | To categorize colours into a few colours representing background or foreground. | Available, Extensible |
| [`ColourConversionModes`]({{ site.parameters_reference }}image-parameter/ColourConversionModes.html#colourconversionmodes) | To set the conversion from colour to grayscale, which keeps or enhances the features of the region of interest. | Work in progress |
| [`GrayscaleTransformationModes`]({{ site.parameters_reference }}image-parameter/GrayscaleTransformationModes.html#grayscaletransformationmodes) | To emphasize the features of regions of interest with processing of the grayscale image. | Available, Extensible |
| [`RegionPredetectionModes`]({{ site.parameters_reference }}image-parameter/RegionPredetectionModes.html#regionpredetectionmodes) | To limit the subsequent stages in special areas to speed up by detecting the regions of interest automatically. Pre-detection is based on the colour/grayscale distribution of each area. | Available, Extensible |
| [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-parameter/ImagePreprocessingModes.html#imagepreprocessingmodes) | To enhance/keep features of barcode zones by processing colour or grayscale images. | Available, Extensible |
| [`BinarizationModes`]({{ site.parameters_reference }}image-parameter/BinarizationModes.html#binarizationmodes) | To enhance/keep features of barcode zones by applying different binarization methods and arguments. | Available, Extensible |
| [`TextureDetectionModes`]({{ site.parameters_reference }}image-parameter/TextureDetectionModes.html#texturedetectionmodes) | To reduce the time cost and error probability caused by textures that resemble 1D barcodes. | Available, Extensible |
| [`TextFilterModes`]({{ site.parameters_reference }}image-parameter/TextFilterModes.html#textfiltermodes) | To exclude the text from barcodes and reduce time cost. | Available, Extensible |
| [`BarcodeComplementModes`]({{ site.parameters_reference }}image-parameter/BarcodeComplementModes.html#barcodecomplementmodes) | To detect and complete a barcode with missing border modules. | Available for QRCode and DataMatrix |
| [`DeformationResistingModes`]({{ site.parameters_reference }}image-parameter/DeformationResistingModes.html#deformationresistingmodes) | To detect and restore a two-dimensional barcode from deformation. | Available for QRCode and DataMatrix |
| [`DPMCodeReadingModes`]({{ site.parameters_reference }}image-parameter/DPMCodeReadingModes.html#dpmcodereadingmodes) | To separate and identify modules of a DPM barcode. | Available for DataMatrix |
| [`DeblurLevel`]({{ site.parameters_reference }}image-parameter/image-process-control.html#deblurlevel)/[`DeblurModes`]({{ site.parameters_reference }}image-parameter/DeblurModes.html#deblurmodes) | To apply a variety of image processing methods to sample modules. The higher the level, the more attempts. | Available |
| [`MirrorMode`]({{ site.parameters_reference }}format-specification/format-control.html#mirrormode) | To try to decode barcode with mirroring. | Available |
| [`TextResultOrderModes`]({{ site.parameters_reference }}image-parameter/textresultordermodes.html#textresultordermodes) | To sort the results according to certain factors. | Available |

## Load/Unload mode dynamically

## Arguments of a mode to fine-tune the effect

## Arguments of a mode to combine chains to reduce computation amount.





