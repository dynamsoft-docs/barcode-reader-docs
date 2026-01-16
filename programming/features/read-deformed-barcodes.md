---
layout: default-layout
title: Read Deformed Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read deformed barcodes in Dynamsoft Barcode Reader SDK.
keywords: Deformed Barcode
needAutoGenerateSidebar: false
---

# Read Deformed Barcodes

As shown below, barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed.

<div align="center">
   <p><img src="assets/read-deformed-barcodes/deformed-barcodes.png" width="70%" alt="Deformed Barcodes"></p>
   <p>Deformed Barcodes</p>
</div>

By default, Dynamsoft Barcode Reader (DBR) may not handle such cases well. To get such images decoded, enable deformation resistance by adding `DRM_BROAD_WARP`, `DRM_LOCAL_REFERENCE` and `DRM_DEWRINKLE` to [`DeformationResistingModes`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/deformation-resisting-modes.html). Here is a quick breakdown of each of the modes:

* `DRM_BROAD_WARP`: Resists deformation when the barcode is warped gently.
* `DRM_LOCAL_REFERENCE`: Resists deformation for barcodes with minor deformation in local modules.
* `DRM_DEWRINKLE`: Resists deformation for barcodes on a wrinkled surface.

> Note:
>
> `DeformationResistingModes` only works for QR Code and DataMatrix codes.

You can either specify one of the `DeformationResistingModes` or add all of them. If mulpitle modes are specified, the library will switch between the modes automatically until the number of detected barcodes meets the `ExpectedBarcodeCount`.

## Example

Below is an example illustrating how to configure the parameter `DeformationResistingModes`.

* Update parameter `DeformationResistingModes` in your JSON template

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
                        "ImageParameterName": "IP_0",
                        "StageArray": [
                            {
                                "Stage": "SST_RESIST_DEFORMATION",
                                "DeformationResistingModes": [
                                    {
                                        "Mode": "DRM_BROAD_WARP"
                                    },
                                    {
                                        "Mode": "DRM_LOCAL_REFERENCE"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "ImageParameterOptions": [
            {
                "Name": "IP_0"
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
