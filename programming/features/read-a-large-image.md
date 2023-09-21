---
layout: default-layout
title: Read barcodes from large image - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from large image in Dynamsoft Barcode Reader SDK.
keywords: large image, barcode
needAutoGenerateSidebar: false
---

# How to Read Barcodes from Large Images

In some cases, the captured image is very large, so Dynamsoft Barcode Reader (DBR) may require more memory and take longer to read the barcode. To speed up the barcode localization process and reduce memory overhead, you can configure the `ScaleDownThreshold` parameter to shrink the image size. If the shorter side length of the image is larger than `ScaleDownThreshold`, the library will shrink the image (50% on each dimension) until the shorter side is less than the threshold.

>Note:
>
>Don't worry about the location of the barcodes, as DBR will still return their coordinates in the original image.

## Sample Code

Below is an example illustrating how to configure the parameter `ScaleDownThreshold`.

* update parameter `ScaleDownThreshold` in your JSON template

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
                "ScaleDownThreshold": 1600
            }
        ]
    }
    ```

* apply settings by calling method `InitSettingsFromFile`

    <div class="sample-code-prefix template2"></div>
       >- C++
       >
    >
    ```c++
    char szErrorMsg[256] = {0};
    CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    cvr->InitSettingsFromFile("PATH-TO-YOUR-SETTING-FILE", szErrorMsg, 256);
    // more process here
    ```
