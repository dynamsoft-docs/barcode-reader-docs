---   
layout: default-layout 
description: This article introduces how to perform image preprocessing including grayscale enhancement and binarization to improve the success rate of DBR positioning code area
title: Preprocess Images based on Different Scenarios
keywords: grayscale enhancement, binarization
needAutoGenerateSidebar: false
---

# How to Preprocess Images based on Different Scenarios

The default configuration of Dynamsoft Barcode Reader (DBR) can handle most common scenarios. However, there are still some specific scenarios where the default configuration of DBR cannot locate the code area for decoding. For these specific scenarios, DBR provides image preprocessing capabilities in two main aspects: **Grayscale Enhancement** and **Binarization**. This article will detail how to choose the appropriate preprocessing modes according to the scenario.

## Grayscale Enhancement

DBR has built-in [`GrayscaleEnhancementModes`]({{ site.dcvb_parameters_reference }}image-parameter/grayscale-enhancement-modes.html) to configure the grayscale enhancement algorithm. For different scenarios, a specific enhancement algorithm can effectively improve the success rate when detecting areas of interest.

### Grayscale Enhancement Modes

DBR provides three grayscale enhancement modes, `GEM_GRAY_EQUALIZE`, `GEM_GRAY_SMOOTH` and `GEM_SHARPEN_SMOOTH`, to deal with different situations. Below we will introduce the scenarios where one of these modes helps.

- `GEM_GRAY_EQUALIZE`

Gray-level equalization, which is used to enhance the contrast of an image. The sample image below demonstrates the effect, before and after grayscale equalization. The colours of the QR code on the original image (left) is too similar to the background color, which would make decoding, as is, more difficult. The picture on the right is the result of preprocessing through `GEM_GRAY_EQUALIZE`. The QR code becomes much more pronounced, which will make the subsequent decoding process much easier.

![Before Equalizing][1]![After Equalizing][2]

This mode has an additional parameter `Sensitivity`, where the default value is 5, and the range is [1~9]. When you set `GEM_GRAY_EQUALIZE`, `DBR` does not necessarily perform equalization but will judge whether to perform it based on the gray distribution and `Sensitivity` of the image itself. The greater the value of `Sensitivity`, the more likely that DBR will perform the equalization process. Setting it to 9 means that gray-scale equalization must be performed while 1 means to skip the process.

- `GEM_GRAY_SMOOTH`

Grayscale smoothing, which is used to reduce image noise and texture. The following sample image shows a grayscale image with more noise and its corresponding binarized image. Obviously, there are many noises which will be bad for barcode reading.

![Grayscale Before Smoothing][3]![Binarized Before Smoothing][5]   

After configuring `GEM_GRAY_SMOOTH` for smoothing. The noise of the binarized image is handled well as shown below.

![Grayscale After Smoothing][4]![Binarized After Smoothing][6]  

- `GEM_SHARPEN_SMOOTH`

Sharpening and smoothing are used to reduce blur. The following sample image demonstrates the effect before and after processing in this mode. It is obvious that the processed picture is much clearer.

![Before Sharpen-Smoothing][7]![After Sharpen-Smoothing][8]

### Combination of Grayscale Enhancement Modes

If the image to be processed is more complicated, you can use the above grayscale enhancement modes in combination. After configuring multiple modes through [`GrayscaleEnhancementModes`]({{ site.dcvb_parameters_reference }}image-parameter/grayscale-enhancement-modes.html), DBR will try each mode in sequence until the number of successful decoded barcodes meets the expected value (`ExpectedBarcodeCount`), or the algorithm combination is exhausted.

## Binarization

Binarization is the process of converting a grayscale image into a binary image (black and white). This is a crucial step in barcode reading as it helps to clearly distinguish barcode patterns from the background. DBR provides [`BinarizationModes`]({{ site.dcvb_parameters_reference }}image-parameter/binarization-modes.html) to control how the binarization is performed with two binarization modes: `BM_THRESHOLD` and `BM_LOCAL_BLOCK`.

- `BM_THRESHOLD`: Uses a global threshold to binarize the image. If the gray value of a pixel is less than the threshold, it will be black in the binary image, otherwise it will be white.
- `BM_LOCAL_BLOCK`: Uses an adaptive local thresholding algorithm. The threshold for each pixel is calculated based on a small region around it, making it more adaptive to varying lighting conditions.

The following examples will demonstrate the applicable scenarios for each mode.

### Different Lighting Conditions

The picture below has different lighting conditions in different areas.

![uneven-illumination][9]

If we use `BM_THRESHOLD` method, the binary image will look like this:

![uneven-illumination-bm-threshold][10]

Using `BM_LOCAL_BLOCK` with adaptive thresholding, the result is much better:

![uneven-illumination-bm-local-block][11]

### Obvious Contrast with Texture Interference

In the image below, the contrast between the barcode and the background is very obvious, the gray-scale pixel values are quite different, but the surface of the background is not smooth and has a lot of texture interference.

![texture][12]

If we use `BM_LOCAL_BLOCK` method, textures on the background will also appear in the binary image, which is not what we want, as follows:

![texture-bm-local-block][13]

Considering that the barcode colour and the background colour are quite different, it is more appropriate to use `BM_THRESHOLD`, the effect is as follows:

![texture-bm-threshold][14]

### Fine-tuning BM_LOCAL_BLOCK Parameters

When using `BM_LOCAL_BLOCK` mode, there are additional parameters that can be adjusted for better results.

#### BlockSizeX and BlockSizeY

You can set the width and height of neighbour pixels when calculating the binarization threshold. Generally, it is recommended to set `BlockSizeX` and `BlockSizeY` to 5-8 times the barcode `ModuleSize`.

The following example demonstrates how adjusting BlockSize can improve binarization results:

![blocksize-original][15]

*Original Image*

If we use the default binarization parameters, the binary image will look like this:

![blocksize-default][16]

*Binary image with default BlockSize*

Apparently, the three finder patterns of the QR Code have been destroyed, resulting in the failure to localize the QR code. After adjusting `BlockSizeX` and `BlockSizeY`, the binary image becomes much clearer. The finder patterns of the QR Code are very clear and can be successfully localized and decoded:

![blocksize-adjusted][17]

*Binary image with adjusted BlockSize*

#### EnableFillBinaryVacancy

This parameter controls whether to fill the vacant hollows. The default value is 1 (enabled).

When the `ModuleSize` of the barcode is large and the `BlockSize` is small, some bars or dots of the barcode after binarization will be hollowed out. Enabling this parameter can prevent this from happening.

The following images show the original image, and the results with `EnableFillBinaryVacancy` enabled and disabled:

![fill-vacancy-original][18]

*Original Image*

![fill-vacancy-enabled][19]

*EnableFillBinaryVacancy enabled*

![fill-vacancy-disabled][20]

*EnableFillBinaryVacancy disabled*

#### MorphOperation

This parameter improves the binarization process by eliminating noise and filling holes through morphological operations. It is suitable for cases where the barcode area is polluted or destroyed. The following sample image demonstrates the effect of applying the `Close` operation:

![Before Close Operation][21]

*Before Close operation*

![After Close Operation][22]

*After Close operation*


### Binarization Mode Selection Guide

| Scenario | Recommended Mode/Parameter | Reason |
|----------|---------------------------|--------|
| Uneven lighting / varying illumination | `BM_LOCAL_BLOCK` | Adaptive thresholding handles different lighting conditions in different areas |
| Obvious contrast with texture interference | `BM_THRESHOLD` | Global threshold filters out background textures effectively |
| High contrast, uniform lighting | `BM_THRESHOLD` | Simple and efficient for clear images |
| Low contrast images | `BM_LOCAL_BLOCK` | Local adaptation improves edge detection |
| Default settings not yielding optimal results | Adjust `BlockSizeX`/`BlockSizeY` for `BM_LOCAL_BLOCK`, or `BinarizationThreshold` for `BM_THRESHOLD` | Fine-tuning these parameters based on barcode `ModuleSize` can significantly improve binarization quality |
| Large `ModuleSize` with hollow barcode elements | `BM_LOCAL_BLOCK` with `EnableFillBinaryVacancy` enabled | Fills the vacant hollows in barcode elements |
| Barcode area polluted or damaged | `BM_LOCAL_BLOCK` with `MorphOperation` (e.g., `Close`) | Eliminates noise and fills holes through morphological operations |

### Combination of Binarization Modes

Similar to grayscale enhancement modes, multiple binarization modes can be configured. DBR will try each mode in sequence until successful decoding is achieved. This is useful when dealing with a batch of images with varying lighting conditions.

## Example

Below is an example illustrating how to configure the parameters `GrayscaleEnhancementModes` and `BinarizationModes`.

* Update parameters in your JSON template

    ```json
    {
        "CaptureVisionTemplates": [
            {
                "Name": "CV_0",
                "ImageROIProcessingNameArray": ["TA_0" ]
            }       
        ],
        "TargetROIDefOptions" : [
            {
                "Name": "TA_0",
                "TaskSettingNameArray": [ "BR_0" ]
            }
        ],
        "BarcodeReaderTaskSettingOptions": [
            {
                "Name" : "BR_0",
                "SectionArray": [
                    {
                        "Section": "ST_REGION_PREDETECTION",
                        "ImageParameterName": "IP_0"
                    },
                    {
                        "Section": "ST_BARCODE_LOCALIZATION",
                        "ImageParameterName": "IP_0"
                    },
                    {
                        "Section": "ST_BARCODE_DECODING",
                        "ImageParameterName": "IP_0"
                    }
                ]
            }
        ],
        "ImageParameterOptions": [
            {
                "Name": "IP_0",
                "ApplicableStages":[
                    { 
                        "Stage": "SST_ENHANCE_GRAYSCALE",
                        "GrayscaleEnhancementModes": [
                            {
                                "Mode": "GEM_GRAY_EQUALIZE",
                                "Sensitivity": 9
                            },
                            {
                                "Mode": "GEM_GRAY_SMOOTH",
                                "SmoothBlockSizeX": 10,
                                "SmoothBlockSizeY": 10
                            },
                            {
                                "Mode": "GEM_SHARPEN_SMOOTH",
                                "SmoothBlockSizeX": 5,
                                "SmoothBlockSizeY": 5,
                                "SharpenBlockSizeX": 5,
                                "SharpenBlockSizeY": 5
                            }
                        ]
                    },
                    {
                        "Stage": "SST_BINARIZE_IMAGE",
                        "BinarizationModes": [
                            {
                                "Mode": "BM_LOCAL_BLOCK",
                                "BlockSizeX": 0,
                                "BlockSizeY": 0,
                                "EnableFillBinaryVacancy": 1,
                                "ThresholdCompensation": 10
                            }
                        ]
                    }
                ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).


[1]:assets/preprocess-images/gray-equalize-sample-1.png
[2]:assets/preprocess-images/gray-equalize-sample-2.png
[3]:assets/preprocess-images/gray-smooth-sample-1.png
[4]:assets/preprocess-images/gray-smooth-sample-2.png
[5]:assets/preprocess-images/gray-smooth-sample-3.png
[6]:assets/preprocess-images/gray-smooth-sample-4.png
[7]:assets/preprocess-images/before-sharpen-sample.png
[8]:assets/preprocess-images/after-sharpen-sample.png
[9]:assets/preprocess-images/uneven-illumination.png
[10]:assets/preprocess-images/uneven-illumination-bm-threshold.png
[11]:assets/preprocess-images/uneven-illumination-bm-local-block.png
[12]:assets/preprocess-images/texture.png
[13]:assets/preprocess-images/texture-bm-local-block.png
[14]:assets/preprocess-images/texture-bm-threshold.png
[15]:assets/preprocess-images/blocksize-original.png
[16]:assets/preprocess-images/blocksize-default.png
[17]:assets/preprocess-images/blocksize-adjusted.png
[18]:assets/preprocess-images/fill-vacancy-original.png
[19]:assets/preprocess-images/fill-vacancy-enabled.png
[20]:assets/preprocess-images/fill-vacancy-disabled.png
[21]:assets/preprocess-images/before-close-sample.png
[22]:assets/preprocess-images/after-close-sample.png
