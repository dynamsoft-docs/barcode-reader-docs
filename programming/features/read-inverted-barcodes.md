---
layout: default-layout
title: Read Inverted Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read inverted barcodes in Dynamsoft Barcode Reader SDK.
keywords: Inverted Barcodes
needAutoGenerateSidebar: false
---

# Read Inverted Barcodes

Typically, barcodes are dark on a light background. But in some cases, the barcodes are "inverted" -- light barcodes on a dark background, as shown in the image below.

<div align="center">
   <p><img src="assets/read-inverted-barcodes/inverted-barcodes.png" width="40%" alt="Inverted Barcodes"></p>
   <p>Inverted Barcodes</p>
</div>

The feature to decode such inverted barcodes is not enabled by default. To control this feature, we must use the [`GrayscaleTransformationModes`]({{ site.dcvb_parameters_reference }}image-parameter/grayscale-transformation-modes.html). Now for a quick breakdown of each of the modes:

- With only `GTM_ORIGINAL` enabled in `GrayscaleTransformationModes`, DBR scans only general black-on-white barcodes.
- With only `GTM_INVERTED` enabled in `GrayscaleTransformationModes`, DBR scans only inverted barcodes.
- When `GTM_ORIGINAL` is enabled as the first mode and `GTM_INVERTED` is enabled as the second mode in `GrayscaleTransformationModes`, DBR will try to decode general barcodes first. If the count of decoded barcodes does not reach the expected number, DBR will then try decoding the inverted barcodes.

## Example

Below is an example illustrating how to configure the parameter `GrayscaleTransformationModes`.

* Update parameter `GrayscaleTransformationModes` in your JSON template

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
                        "Stage": "SST_TRANSFORM_GRAYSCALE",
                        "GrayscaleTransformationModes": [
                            {
                                "Mode": "GTM_ORIGINAL"
                            },
                            {
                                "Mode": "GTM_INVERTED"
                            }
                        ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
