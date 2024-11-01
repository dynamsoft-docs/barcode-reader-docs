---   
layout: default-layout
description: This article introduces how to read DPM codes.
title: Read DPM Codes
keywords: DPM, Direct Part Marking
---

# How to Read DPM Codes

## What is DPM (Direct Part Marking)?

It is the process of creating permanent markings on the surface of a part to help identify it. DPM Codes are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. Atypical from general scenarios, DPM Codes present more challenges, including light reflection interference from the surface the code is printed on, low contrast, and complex background texture. For reference, here are two sample images of DPM codes:

![DPM sample image1][1]
![DPM sample image2][2]

## Particular Parameter Required

Dynamsoft Barcode Reader (DBR) provides a parameter, [`DPMCodeReadingModes`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/dpm-code-reading-modes.html), to control how to decode DPM codes. To enable the DPM feature, simply set a `DPMCRM_GENERAL` mode to this parameter.

## Example

Below is an example illustrating how to configure the parameter `DPMCodeReadingModes` to read DPM code.

* Update parameter `DPMCodeReadingModes` in your JSON template

    ```json
    {
        "CaptureVisionTemplates": [
            {
                "Name" : "CV_0",
                "ImageROIProcessingNameArray": ["TA_0" ]
            }       
        ],
        "TargetROIDefOptions" : [
            {
                "Name" : "TA_0",
                "TaskSettingNameArray": [ "BR_0" ]
            }
        ],
        "BarcodeReaderTaskSettingOptions": [
            {
                "Name" : "BR_0",
                "DPMCodeReadingModes": [
                    {
                        "Mode": "DPMCRM_GENERAL"
                    }
                ]
            }
        ]
    }
    ```
* Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

[1]:assets\read-dpm-codes\DPM-sample1.png
[2]:assets\read-dpm-codes\DPM-sample2.png
