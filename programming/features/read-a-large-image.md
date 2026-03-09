---
layout: default-layout
title: Read barcodes from large image - Dynamsoft Barcode Reader SDK
description: This page describes how to speed up barcode reading from large images in Dynamsoft Barcode Reader SDK by configuring the ImageScaleSetting parameter to reduce image size before processing.
keywords: large image, barcode
needAutoGenerateSidebar: false
---

# How to Read Barcodes from Large Images

In some cases, the captured image is very large, so Dynamsoft Barcode Reader (DBR) may require more memory and take longer to read the barcode. To speed up the barcode localization process and reduce memory overhead, you can configure the `ImageScaleSetting` parameter to shrink the image size.

>Note:
>
>Don't worry about the location of the barcodes, as DBR will still return their coordinates in the original image.

## Example

Below is an example illustrating how to configure the parameter `ImageScaleSetting`.

* Update parameter `ImageScaleSetting` in your JSON template

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
                        "Stage": "SST_SCALE_IMAGE",
                        "ImageScaleSetting": {
                            "ScaleType": "ST_SCALE_DOWN",
                            "ReferenceEdge": "RE_SHORTER_EDGE",
                            "EdgeLengthThreshold": 1600
                        }
                    }
                ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
