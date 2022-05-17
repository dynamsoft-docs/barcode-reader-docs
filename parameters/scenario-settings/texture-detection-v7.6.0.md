---   
layout: default-layout
description: This article introduces the relevant parameters of texture detection in the DBR algorithm and its applicable scenarios and adjustment methods
title: How to deal with image textures
keywords: texture detection
needAutoGenerateSidebar: false
---

# How to deal with image textures
 
In some scenes, the background of the picture may appear textured, such as a pattern background, screen stripes, etc., which may have an adverse effect on `DBR`, such as mis location and increase in consumed time. To deal with such textures, `DBR` uses the parameter [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html#texturedetectionmodes). You can configure one or more Modes in `TextureDetectionMode`. If multiple Modes are configured, `DBR` will use each Mode in turn to process the image. The enumeration of `TextureDetectionMode` is as follows: 

Name|Value|Notes|
---|:--:|---:|
TDM_SKIP|0x00000000|Skip texture detection|
TDM_GENERAL_WIDTH_CONCENTRATION|0x00000002|General texture detection, default|
TDM_AUTO|0x00000001|At present, this is equivalent to `TDM_SKIP`|

When `TextureDetectionMode` is set to `TDM_GENERAL_WIDTH_CONCENTRATION`, you can control the sensitivity of texture detection through the Sensitivity parameter. The larger the value of this parameter, the more obvious the texture detection effect is. The default value is 5 and the value range is [1, 9].

## When do you need texture detection and how to adjust related parameters

Texture detection is suitable for images with a textured background. Whether texture detection is required can be determined by observing the effect of the intermediate result after binarization (`IRT_BINARIZED_IMAGE`). Here, we use an actual picture with screen texture to demonstrate how to use this feature. 

![texture-image-sample][1]

The sample picture is as above. When we do not use the texture detection function, using the intermediate result `IRT_BINARIZED_IMAGE` we can observe that the texture of the picture is very serious, and it surrounds the barcode area as shown below.

![binary-before-texture-detect][2]

Now, we enable texture detection by configuring `TDM_GENERAL_WIDTH_CONCENTRATION`. After that, the binarized intermediate result image observed again are shown in the figure below where it 's evident that textures have been well handled. 

![binary-after-texture-detect][3]

If, after configuring `TDM_GENERAL_WIDTH_CONCENTRATION`, the texture is not processed well, you can adjust the parameter Sensitivity to make further attempts.

## Sample template
```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "TextureDetectionModes":[
            {
                "Mode":"TDM_GENERAL_WIDTH_CONCENTRATION", 
                "Sensitivity":5
            }
        ]
    },
    "Version": "3.0"
}
```
[1]:assets/texture-detection/texture-image-sample.png
[2]:assets/texture-detection/binary-before-texture-detect.png
[3]:assets/texture-detection/binary-after-texture-detect.png
