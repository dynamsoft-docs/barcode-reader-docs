---   
layout: default-layout
description: This article introduces how to read barcodes from image with lots of text
title: How to read barcodes from image with lots of text
keywords: text filter
needAutoGenerateSidebar: false
---

# How to Read Barcodes from an Image With Lots of Text

When trying to read an image where a barcode is surrounded by a large amount of irrelevant text, the presence of these characters may lead to incorrect positioning and slow down the execution speed. Dynamsoft Barcode Reader (DBR) provides parameter [`TextDetectionMode`]({{ site.dcvb_parameters_reference }}image-parameter/text-detection-mode.html) and [`IfEraseTextZone`]({{ site.dcvb_parameters_reference }}image-parameter/if-erase-text-zone.html) to control how to filter texts on an image.

## Example

Below is an example illustrating how to configure the parameters to control text filtering function.

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
                        "Stage": "SST_DETECT_TEXT_ZONES",
                        "TextDetectionMode":
                        {
                            "Mode": "TTDM_LINE",
                            "Direction": "UNKNOWN",
                            "CharHeightRange": [1, 100, 1],
                            "MaxSpacingInALine": -1,
                            "Sensitivity": 3
                        }
                    },
                    { 
                        "Stage": "SST_REMOVE_TEXT_ZONES_FROM_BINARY",
                        "IfEraseTextZone": 1
                    }
                ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
