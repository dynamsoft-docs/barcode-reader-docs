---
layout: default-layout
title: Dynamsoft Barcode Reader Introduction - Architecture
description: This is the architecture page of Dynamsoft Barcode Reader Introduction.
keywords: architecture, principles
needAutoGenerateSidebar: true
needGenerateH3Content: true
permalink: /introduction/architecture.html
---

# Principles of Dynamsoft Barcode Reader Algorithm

Dynamsoft Barcode Reader (DBR) is a flexible SDK used to implement barcode reading functionality in cross-platform applications. Supported barcode formats include QR Code, Linear(1D), PDF 417, DataMatrix, and [more]({{site.introduction}}index.md#barcode-formats).

Its flexibilities not only fit in most scenarios, which greatly vary in terms of barcode features but also most requirements regarding programming practices. The software architecture and design of DBR can accommodate a variety of application requirements. The barrier of entry to barcode reading is low, allowing customers to start building their application effortlessly, all the while providing various customization options to handle further complicated barcodes.

DBR powers your software development from the following aspects:

(1) performance of reading barcodes,
(2) agility of dealing with unpredictable-featured barcodes,
(3) integration of multipurpose image processing,
(4) extensibility of deployment.

In this article, we will present the architectures and their corresponding contributions to the above advantages.

## Flexible Algorithm Flow & Versatile Parameters

The algorithm of DBR includes a flow of 5 stages at the top level, as illustrated in Figure 1, where localization, partition, and decoding are the three core stages. DBR is designed to deal with a variety of barcode scenarios and qualities and offers many customizable parameters to increase its versatility. Furthermore, the architecture of the algorithm and its parameters solidifies the agility to meet new requirements.

<div align="center">
   <p><img src="{{ site.introduction }}/assets/architecture/top-level-flow-of-dbr-algorithm.png" alt="Top Level Flow of DBR Algorithm" width="30%" /></p>
   <p>Figure 1 – Top Level Flow of DBR Algorithm</p>
</div>

### Stage 1 is to get regions of interest (ROI) image(s)

This stage begins with how to get an image from a variety of sources, including files, videos, or buffers of other applications. Then there are some optional steps to convert the original image to a grayscale image. What these steps do depends on relevant parameters’ values. Table 1 lists these parameters and their respective design intents.

Table 1 – Parameters of DBR Algorithm in the Stage 1

| **Parameter Name** | **Functionality** | **Status** |
| ------------------ | ---------------------------- | ---------- |
| [`ScaleDownThreshold`]({{ site.parameters_reference }}scale-down-threshold.html) | To speed up the barcode recognition when the image size is large. | Available |
| [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes) | To categorize colours into a few colours representing background or foreground. | Available, Extensible |
| [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) | To set the conversion from colour to grayscale, which keeps or enhances the features of the region of interest. | Available, Extensible |
| [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes) | To emphasize the features of regions of interest with processing of the grayscale image. | Available, Extensible |
| [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes) | To limit the subsequent stages in special areas to speed up by detecting the regions of interest automatically. Pre-detection is based on the colour/grayscale distribution of each area. | Available, Extensible |
| [`RegionDefinitionNameArray`]({{ site.parameters_reference }}image-parameter/index.html#regiondefinitionnamearray) | To specify one or more regions of interest manually, speed up by excluding the other area. | Available |

As mentioned above, the focus of this stage is to reduce the time cost by scaling down or finding out ROIs. It is not essential for most scenarios but would be helpful for some extreme cases.

### Stage 2 is to localize barcode zones

Various features of different barcode formats help detect barcode zones. Before detecting and localizing barcode zones, some optional steps can be taken to speed up, such as filter distraction, enhance/keep barcode zone features etc. These steps are related to the respective parameters listed in the Table 2.

Table 2 – Parameters of DBR Algorithm in the Stage 2

| **Parameter Name** | **Intent and Functionalities** | **Status** |
|--------------------|--------------------------------|------------|
| [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes) | To enhance/keep features of barcode zones by processing colour or grayscale images. | Available, Extensible |
| [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes) | To enhance/keep features of barcode zones by applying different binarization methods and arguments. | Available, Extensible |
| [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes) | To reduce the time cost and error probability caused by textures that resemble 1D barcodes. | Available, Extensible |
| [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes) | To exclude the text from barcodes and reduce time cost. | Available, Extensible |

[`LocalizationModes`]({{ site.parameters_reference }}localization-modes.html#localizationmodes) is an important parameter that includes the modes in Table 3.

Table 3 – Barcode Localization Modes of DBR

| **Mode Name** | **Pros** | **Cons** |
|---------------|----------|----------|
| `LM_SCAN_DIRECTLY` | Fast | Easy to miss barcodes. Performance isn’t consistent with different barcodes types. |
| `LM_CONNECTED_BLOCKS` | Efficient for clear images. | Sensitive to damage of module connection. |
| `LM_LINES` | Robust for broken barcodes. | More computation required to extract vectors of lines compared to `LM_CONNECTED_BLOCKS`. |
| `LM_STATISTICS` | Robust for blurry images. | Hard to differentiate barcodes from other printing areas where there are similar black-white contrasts. |
| `LM_STATISTICS_MARKS` | Suitable for barcodes with separate modules in unusual shapes. | May misinterpret concentrated areas of any shape patterns. Only useful for few 2D barcode formats. Lack of boundary indication. |
| `LM_STATISTICS_POSTAL_CODE` | Optimized for postal codes. | Not applicable to other barcode formats. |
| `LM_...` | Customizable, Addible | More time and cost. |

1. `LM_SCAN_DIRECTLY` is recommended when the barcode is large relative to the image size. 1D, GS1 Databar, and GS1 Composite bar are better able to take advantage of `LM_SCAN_DIRECTLY`.

2. `LM_CONNECTED_BLOCKS` offers the right balance between efficiency and accuracy for most scenarios. It can share intermediate data, contours, with a few other localization modes: `LM_LINES`, `LM_STATISTICS_MARKS`, `LM_STATISTICS_POSTAL_CODE`. So, `LM_CONNECTED_BLOCKS` is usually placed before these modes.   

3. `LM_LINES` is a good option to follow `LM_CONNECTED_BLOCKS` if you want to achieve higher accuracy with a low time cost.   

4. `LM_STATISTICS` will try to find out the areas where the distribution of grayscale values looks like a barcode zone. It’s an auxiliary method when the above modes don’t work.

The above four modes can support most regular barcode formats. The barcodes of these formats can be localized in one pass of
an image. Limit the barcode formats for localization using the parameter [`BarcodeFormatIds`]({{ site.parameters_reference }}barcode-format-ids.html) and [`BarcodeFormatIds_2`]({{ site.parameters_reference }}barcode-format-ids-2.html).

1. `LM_STATISTICS_MARKS` is designed mainly to find out barcodes whose modules are separate, e.g., Direct Part Marking (DPM), and DotCode.

2. `LM_STATISTICS_POSTAL_CODE` finds bars of postal codes in terms of bars’ distribution. `LM_SCAN_DIRECTLY`, `LM_CONNECTED_BLOCKS`, and `LM_LINES` can also contribute to the location of postal codes.

Localization modes could be added according to particular features of the barcodes to meet the requirements of more barcode formats in the future.

### Stage 3 is to partition barcode zones precisely

For localized barcode zones, further work is essential before DBR takes it as a barcode to the decoding stage. Barcode format and exact boundary are two key factors. Some rough barcode zones, the result of certain localization modes, have the format information. However, it isn’t always the case. The exact boundary of a barcode is more meaningful than the rough zone for the following decoding stage. Though some barcode formats are robust to the boundary roughness, an exact boundary can improve the accuracy of poor-quality barcodes.

[`BarcodeColourModes`]({{ site.parameters_reference }}barcode-colour-modes.html#barcodecolourmodes) is a parameter to control how to seek the boundary. Before, during, or after seeking boundary, the format can be determined. With an exact boundary, DBR may scale up the barcode if the module size is too small. The parameter, [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes), is used to assign one or more scale up methods. At last, the anti-perspective transformation will be applied if the boundary isn’t relatively rectangular.

### Stage 4 is to decode one-calibrated-barcoded images

This is the most complicated stage that accommodates a few methods to deal with varying barcode quality situations. Table 4 lists the parameters to customize the decoding procedure.

Table 4 – Parameters to Deal with Varying Quality Situation

| **Parameter Name** | **Intent and Functionalities** | **Status** |
|--------------------|--------------------------------|------------|
| [`BarcodeComplementModes`]({{ site.parameters_reference }}barcode-complement-modes.html#barcodecomplementmodes) | To detect and complete a barcode with missing border modules. | Available for QRCode and DataMatrix |
| [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes) | To detect and restore a two-dimensional barcode from deformation. | Available for QRCode and DataMatrix |
| [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) | To separate and identify modules of a DPM barcode. | Available for DataMatrix |
| [`DeblurLevel`]({{ site.parameters_reference }}deblur-level.html)/[`DeblurModes`]({{ site.parameters_reference }}deblur-modes.html#deblurmodes) | To apply a variety of image processing methods to sample modules. The higher the level, the more attempts. | Available |
| [`MirrorMode`]({{ site.parameters_reference }}mirror-mode.html) | To try to decode barcode with mirroring. | Available |

### Stage 5 is to output results

This stage organizes the barcode decoding results. DBR checks all results together and checks if there are results close to together, which can be merged. The original results are all hex bytes. Then the results are converted, filtered, and sorted according to the following parameters.

Table 5 – Parameters to Organize the Results

| **Parameter Name** | **Intent and Functionalities** | **Status** |
|--------------------|--------------------------------|------------|
| [`ResultCoordinateType`]({{ site.parameters_reference }}result-coordinate-type.html) | To specify the coordinates unit measurement (percentage, pixel) used to represent the positions. | Available |
| [`BarcodeTextRegExPattern`]({{ site.parameters_reference }}barcode-text-regex-pattern.html) | To filter text results with a regular expression. | Available |
| [`BarcodeTextLengthRangeArray`]({{ site.parameters_reference }}barcode-text-length-range-array.html)  | To filter text results with length limitations. | Available |
| [`BarcodeBytesRegExPattern`]({{ site.parameters_reference }}barcode-bytes-regex-pattern.html) | To filter bytes results with a regular expression. | Available |
| [`BarcodeBytesLengthRangeArray`]({{ site.parameters_reference }}barcode-bytes-length-range-array.html) | To filter bytes result with length limitations. | Available |
| [`TextResultOrderModes`]({{ site.parameters_reference }}text-result-order-modes.html#textresultordermodes) | To sort the results according to certain factors. | Available |

## Customizable Balance of Speed and Accuracy

While DBR owns such versatility and flexibility, DBR is competitive in speed as well as accuracy. Both the programming and the architecture guarantee the speed. As an extreme example, the most efficient internal path of the algorithm flow can only include the following steps when reading barcodes from a binary buffer image:

1. Scan rows with a specific row stride. This gets white/black sample data while localizing possible barcodes.

2. Decoding the sample data if it is a 1D barcode.

While taking advantage of the most straightforward cases to improve speed, DBR can comply with other scenarios automatically. There are four levels to consider when balancing speed and accuracy.

1. Set parameters values manually to narrow the range of targets. For example, fewer formats, lower deblur levels, fewer localization modes, fewer damage concerns, less preprocessing modes, etc.

2. Take advantage of data reusing or multi-targets in a single process automatically. `LM_LINES`, `LM_STATISTICAL_MARKS`, `LM_STATISTICS_POSTAL_CODE` can reuse the data generated by `LM_CONNECTED_BLOCKS`. All barcodes with varying formats can be found in one localization mode process.

3. Determine the necessity of a time-consuming process with fast detection. For example, Region Detection, Texture Detection, Missing or Complement Detection, Deformation Detection, etc. There are more auto detections added,  especially for the steps with fewer modes.

4. Limit time cost explicitly. The following parameters play an important role in limiting time costs.

Table 6 – Parameters to Organize the Results

| **Parameter Name** | **Intent and Functionalities** | **Status** |
|--------------------|--------------------------------|------------|
| [`ExpectedBarcodesCount`]({{ site.parameters_reference }}expected-barcodes-count.html) | To quit the flow as soon as possible, given the count of decoded barcodes meets expectation. | Available |
| [`Timeout`]({{ site.parameters_reference }}time-out.html) | To quit the flow as soon as possible, given the time cost exceeds the limitation. | Available |
| `WaitingFramesCount` | To quit the flow as soon as possible, given the frame count in the waiting list exceeds the limitation. | Available |
| [`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html) | To quit the flow when DBR finishes a certain stage. | Available |

[`ExpectedBarcodesCount`]({{ site.parameters_reference }}expected-barcodes-count.html) represents how many barcodes are expected to be read or decoded successfully. The default value, 0, means DBR will check whether there are any barcodes at the end of each localization mode. The default value fits both single barcode images and high-quality images, as DBR will try localization modes in turns to find at least one barcode and return all barcodes in the last tried localization mode. If [`ExpectedBarcodesCount`]({{ site.parameters_reference }}expected-barcodes-count.html) is assigned a value greater than 0, DBR will check whenever a barcode is decoded successfully. For example, value 1 means DBR will end the flow once it finds one barcode, which is more efficient than value 0. When its value is greater than the possible barcode count, DBR will apply all localization modes to find as many barcodes as possible.

[`Timeout`]({{ site.parameters_reference }}time-out.html) is an upper limit of time cost. DBR checks at a few points whether the elapsed time for the current image is longer than its value. If so, DBR will end the flow. Timeout prevents one image from costing too much time.

`WaitingFramesCount` is another way to inform DBR whether the flow of current images should end. This parameter is designed to improve interactive friendliness lest one image blocks the video stream. It can be altered to control the max time cost of one image. If you set `WaitingFramesCount` value to 1 and take the image buffer as a video frame, you may decode the image by calling [`AppendFrame`]({{ site.cpp_methods }}video.html#appendframe) and append the next image after some time later. The time interval of the two images is the max time cost for the former. There are higher frequent checkpoints of `WaitingFramesCount` than [`Timeout`]({{ site.parameters_reference }}time-out.html).

[`TerminatePhase`]({{ site.parameters_reference }}terminate-phase.html) is for users who only care about the intermediate results instead of the final barcode results. Please refer to the next section about the issues on how to exchange data with other applications.

## Intermediate Result and third-party integration

DBR outputs not only the barcodes and their locations but also lots of data created during the reading procedure, i.e., intermediate results. These data help analyze the performance and debug in development. Considering scenarios where barcode reading isn’t the only goal, intermediate results can be utilized by third-party applications, e.g., OCR, to reduce duplicate work. DBR supports receiving such data from third-party applications to improve the speed as well.

Table 7 – Intermediate Result Types

| **Name** | **Notes** | **Stage** | **Status** |
|----------|-----------|-----------|------------|
| `IRT_ORIGINAL_IMAGE` | The buffer to read barcodes directly. | 1 | Available |
| `IRT_COLOUR_CLUSTERED_IMAGE` | The buffer after colour clustered, if applicable. | 1 | Work in Progress |
| `IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE` | The buffer after colour conversion, if applicable. | 1 | Available |
| `IRT_TRANSFORMED_GRAYSCALE_IMAGE` | The buffer after further transformation of the above buffer, before region detection, if applicable. | 1 | Available |
| `IRT_PREDETECTED_QUADRILATERAL` | The quadrilateral returned by some modes of region detection, which is an accurate reference to barcode locations. | 1 | Available |
| `IRT_PREDETECTED_REGION` | The rectangle returned by some modes of region detection, which is a rough area that may have barcodes. | 1 | Available |
| `IRT_PREPROCESSED_IMAGE` | The image buffer of a region after a mode of preprocessing, based on the grayscale image in stage 1 and region detection results. | 2 | Available |
| `IRT_BINARIZED_IMAGE` | The buffer after binarization of the above preprocessed image. | 2 | Available |
| `IRT_CONTOUR` | Contours produced by some modes of localization. | 2 | Available |
| `IRT_LINE_SEGMENT` | Line segments produced by `LM_LINES`. | 2 | Available |
| `IRT_TEXT_ZONE` | Text zones detected by an optional step corresponding to the parameter [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes). | 2 | Available |
| `IRT_FORM` | Forms detected based on contours, line segments, and color contrast. | 2 | Work in Progress |
| `IRT_SEGMENTATION_BLOCK` | Segmented areas based on contours, line segments, and color contrast. | 2 | Work in Progress |
| `IRT_TYPED_BARCODE_ZONE` | Areas identified as barcode zones, regardless of successful decoding. | 3 | Available |

All results output with coordinates to show where it is produced in the algorithm flow. The coordinates consist of the modes (specific values) of a series of parameters.
