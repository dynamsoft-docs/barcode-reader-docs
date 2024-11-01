---
layout: default-layout
title: Read barcodes with imbalanced colour - Dynamsoft Barcode Reader SDK
description: This page describes how to read huge barcodes with imbalanced colour in Dynamsoft Barcode Reader SDK.
keywords: imbalanced colour barcode
needAutoGenerateSidebar: false
---

# How to Read Barcodes with Imbalanced Colour

As we all know, any color is composed of red, blue and green (RGB). If the image is a colour image, Dynamsoft Barcode Reader (DBR) will convert it to grayscale first for further processing.

```math
Gray = Red*RedChannelWeight + Green*GreenChannelWeight + Blue*BlueChannelWeight
```

The default weights in DBR are suitable for most cases. However, some color images may produce poor grayscale images based on the default weights. For example, the image below is a color image with imbalanced colour.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/colour-conversion-original-image.png" alt="barcode colour image" width="25%" /></p>
   <p>Figure 1 – Sample barcode colour image</p>
</div>

The image below shows the grayscale image converted by DBR using the default channel weights setting.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/default-gray-img.png" alt="barcode gray image using default" width="25%" /></p>
   <p>Figure 2 – Sample barcode gray image using default mode</p>
</div>

The image below shows the grayscale image converted by DBR using only red channel.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/gray-img-only-red.png" alt="barcode gray image using red" width="25%" /></p>
   <p>Figure 3 – Sample barcode gray image using only red channel</p>
</div>

As we can see, the gray image converted using only red channel is much better than the default one. Now we will demonstrate how to configure the parameter `ColourConversionModes` to adjust the colour channel weights used for converting a colour image to a grayscale image.

## Particular Parameter Required

DBR provides a parameter [`ColourConversionModes`]({{ site.dcvb_parameters_reference }}image-parameter/colour-conversion-modes.html) that allows you to control the conversion of a color image to grayscale. 

## Example

Below is an example illustrating how to configure the parameter `ColourConversionModes` to use only red channel.

* Update parameter `ColourConversionModes` in your JSON template

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
                "SectionImageParameterArray": [
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
                "ColourConversionModes": [
                    {
                        "Mode": "CICM_GENERAL",
                        "RedChannelWeight": 1000,
                        "GreenChannelWeight": 0,
                        "BlueChannelWeight": 0
                    }
                ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
