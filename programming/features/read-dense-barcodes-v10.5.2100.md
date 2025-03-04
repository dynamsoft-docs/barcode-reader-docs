---
layout: default-layout
title: Read dense barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read dense barcodes in Dynamsoft Barcode Reader SDK.
keywords: dense barcodes, qrcode, datamatrix
needAutoGenerateSidebar: false
---

# How to Read High-Density QR Codes

A QR code can store up to 7,089 numbers, 4,296 alphanumeric characters, 2,953 bytes, or 1,817 Japanese Kanjis. As the encoded information increases, the QR code becomes denser. The diagram below displays a QR code that has high density.

<div align="center">
   <p><img src="assets/read-dense-barcodes/dense-qr-code.jpg" alt="High-density QR Code" width="80%" /></p>
   <p>Figure 1 – High-density QR Code</p>
</div>

In some scenarios, high-density QR codes become more difficult to locate and recognize due to small barcode images, perspective, and distortion.

We can do the following to optimize the read rate of high-density QR codes:

- Scale up modules if they are too small
- Sharpen the image
- Run gray equalization

## Example

Below is an example illustrating how to configure the parameters to read density QR Codes.

* Update parameters in your JSON template

    ```json
    {
        "CaptureVisionTemplates": [
            {
                "Name": "CV_0",
                "ImageROIProcessingNameArray": ["TA_0" ],
                "Timeout":5000
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
                "BarcodeFormatIds" : ["BF_QR_CODE"],
                "ExpectedBarcodesCount" : 1,
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
                ],
                "LocalizationModes":[
                    {
                        "Mode": "LM_CONNECTED_BLOCKS"
                    }
                ],
                "DeblurModes":[
                    {
                        "Mode": "DM_SHARPENING"
                    },
                    {
                        "Mode": "DM_GRAY_EQUALIZATION"
                    }
                ]
            }
        ],
        "ImageParameterOptions": [
            {
                "Name": "IP_0",
                "ScaleDownThreshold": 10000,
                "ScaleUpModes": [
                    {
                        "Mode": "SUM_LINEAR_INTERPOLATION",
                        "AcuteAngleWithXThreshold": 0,
                        "ModuleSizeThreshold": 4,
                        "TargetModuleSize": 6
                    }
                ]
            }
        ]
    }
    ```

* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
