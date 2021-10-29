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

## Various build-in processing modes

In order to cope with various scenarios, DBR provides a variety of build-in processing modes at each stage of the algorithm to maintain great scalability. 

| **Parameter Name** | **Functionality** | **Status** |
| ------------------ | ---------------------------- | ---------- |
| [`ColourClusteringModes`]({{ site.parameters_reference }}colour-clustering-modes.html#colourclusteringmodes) | To categorize colours into a few colours representing background or foreground. | Available, Extensible |
| [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) | To set the conversion from colour to grayscale, which keeps or enhances the features of the region of interest. | Available, Extensible |
| [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes) | To emphasize the features of regions of interest with processing of the grayscale image. | Available, Extensible |
| [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes) | To limit the subsequent stages in special areas to speed up by detecting the regions of interest automatically. Pre-detection is based on the colour/grayscale distribution of each area. | Available, Extensible |
| [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes) | To enhance/keep features of barcode zones by processing grayscale images. | Available, Extensible |
| [`BinarizationModes`]({{ site.parameters_reference }}binarization-modes.html#binarizationmodes) | To enhance/keep features of barcode zones by applying different binarization methods and arguments. | Available, Extensible |
| [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes) | To reduce the time cost and error probability caused by textures that resemble 1D barcodes. | Available, Extensible |
| [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes) | To exclude the text from barcodes and reduce time cost. | Available, Extensible |
| [`BarcodeComplementModes`]({{ site.parameters_reference }}barcode-complement-modes.html#barcodecomplementmodes) | To detect and complete a barcode with missing border modules. | Available for QRCode and DataMatrix |
| [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html#deformationresistingmodes) | To detect and restore a two-dimensional barcode from deformation. | Available for QRCode and DataMatrix |
| [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes) | To separate and identify modules of a DPM barcode. | Available for DataMatrix |
| [`DeblurModes`]({{ site.parameters_reference }}deblur-modes.html#deblurmodes) | To apply a variety of image processing methods to sample modules. The smaller index is, the higher priority is. | Available |
| [`TextResultOrderModes`]({{ site.parameters_reference }}text-result-order-modes.html#textresultordermodes) | To sort the results according to certain factors. | Available |

## Load/Unload mode dynamically

In addition to built-in modes, DBR also supports user-defined mode for some special scenarios. First, you need to develop a DLL whose interface conforms to the DBR specification. 
Secondly, the `LibraryFileName` argument of the custom mode should be specified as the path of the DLL file. Third, if you want to pass extra arguments to the DLL, the `LibraryParameters` argument should be specified. Therefore, when the algorithm flow enters the stage of processing the custom mode, DBR will dynamically load the DLL and execute the corresponding logic.

## Arguments of a mode to fine-tune the effect

Generally, each mode has some arguments which can well control the processing effect. For example, [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) is designed for converting colour images to grayscale images.  The [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) has three arguments: 

**BlueChannelWeight**: Sets the weight value of Blue Colour Channel used for converting a colour image to a grayscale image.
**GreenChannelWeight**: Sets the weight value of Green Colour Channel used for converting a colour image to a grayscale image.
**RedChannelWeight**: Sets the weight value of Red Colour Channel used for converting a colour image to a grayscale image.

The value range of the above arguments is [-1, 1000]. The default value is -1, which means the weight value will be set automatically by the SDK. 

In the following JSON template, we configured four different colour conversion modes to convert colour images to grayscale images.

```json
{
    "ImageParameter": {
        "ColourConversionModes": [
	        // Use the default mode for grayscale process
            {
                "Mode": "CICM_GENERAL"
            }, 
	        // Use the Blue channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 1000, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 0
            }, 
	        // Use the Red channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 1000, 
                "GreenChannelWeight": 0
            }, 
	        // Use the Green channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 1000
            }
        ]
    }, 
    "Version": "3.0"
}
```

The following is an original colour image. We will use the above settings in the template to do the grayscale process.

![original image before colour conversion][1]
<p>figure 1 – original colour image</p>

The followings show the grayscaled images respectively using the default mode, the red channel only, the blue channel only, and the green channel only. We can see that using the red channel only produces the best grayscaled image. So for this kind of scenario, it is recommended to use the Red channel only for grayscale process.

![default grayscale image][2] 
<p>figure 2 – default grayscale image</p>

![gray image only by red channel][3]
<p>figure 3 – grayscale image only by red channel</p>

![gray image only by blue channel][4]
<p>figure 4 – grayscale image only by blue channel</p>

![gray image only by green channel][5]
<p>figure 5 – grayscale image only by green channel</p>

## Arguments of a mode to combine chains to reduce computation amount.

There may be dependencies between different modes in DBR. For example, the `BinarizationModes` depend on the processing results of `ImagePreprocessModes`. Assuming that there are both 3 elements defined in the `ImagePreprocessModes` and `BinarizationModes` parameters, the SDK will loop 9 cycles by default. 
However, when the `ImagePreprocessModesIndex` argument in `BinarizationModes` is specified as the corresponding `ImagePreprocessModes` index (assuming one-to-one), only 3 cycles are required, which greatly reduces the computational cost.

On the other aspect, the localization and decoding phases are strictly separated in DBR generally. Sometimes, in order to speed up, we can directly use the intermediate results of the localization stage. For example, the mode `DM_BASED_ON_LOC_BIN` in `DeblurModes` will adopt the localization binary image directly in the decoding stage, which omits the binarization step.


[1]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/colour-conversion-original-image.png

[2]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/default-gray-img.png

[3]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/gray-img-only-red.png

[4]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/gray-img-only-blue.png

[5]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/gray-img-only-green.png

[6]: ../parameters/scenario-settings/assets/image-scale-and-colour-conversion/inverted-gray-img.png