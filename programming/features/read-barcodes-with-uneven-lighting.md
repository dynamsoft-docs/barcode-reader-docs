---
layout: default-layout
title: Read barcodes with uneven lighting - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes with uneven lighting in Dynamsoft Barcode Reader SDK.
keywords: uneven lighting, barcode
needAutoGenerateSidebar: false
---

# How to Read Barcodes with Uneven Lighting

In some scenarios, the captured barcode image may have inconsistent lighting across the barcode. For example, the following image shows a barcode image with uneven lighting.

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/uneven-illumination.png" alt="Sample barcode image with uneven lighting" width="50%" /></p>
   <p>Figure 1 – Sample barcode image with uneven lighting</p>
</div>

Converting the original barcode image to a binarized image is a very important step. Dynamsoft Barcode Reader (DBR) provides two binarization modes:
- `BM_THRESHOLD`: uses a global threshold to binarize the image. If the gray value of the pixel is less than the threshold, it will be black in the binary image, otherwise it will be white.
- `BM_LOCAL_BLOCK`: use a threshold for a pixel based on a small region around it.

The following two images show the effects of `BM_THRESHOLD` (global thresholding) and `BM_LOCAL_BLOCK` (local thresholding).

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/dm-threshold.png" alt="Binarized image by global thresholding" width="50%" /></p>
   <p>Figure 2 – Binarized image by global thresholding</p>
</div>

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/dm-local-block.png" alt="Binarized image by local thresholding" width="50%" /></p>
   <p>Figure 3 – Binarized image by local thresholding</p>
</div>

Obviously, the local thresholding result is much better. Now we will demonstrate how to configure the parameter `BinarizationModes` to achieve the effect mentioned above.

## Particular Parameter Required

DBR provides a parameter [`BinarizationModes`]({{ site.dcv_parameters_reference }}image-parameter/binarization-modes.html) that allows you to control the conversion of a grayscale image to a binary image. 

## Sample Code

Below is an example illustrating how to configure the parameter `BinarizationModes`.

* update parameter `BinarizationModes` in your JSON template

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
    ```

* apply settings by calling method `InitSettingsFromFile`

    <div class="sample-code-prefix template2"></div>
       >- C++
       >- Android
       >- Objective-C
       >- Swift
       >
    >
    ```c++
    char szErrorMsg[256] = {0};
    CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    cvr->InitSettingsFromFile("PATH-TO-YOUR-SETTING-FILE", szErrorMsg, 256);
    // more process here
    ```
    >
    ```java
    try {
       // `cvr` is an instance of `CaptureVisionRouter`.
       cvr.initSettingsFromFile("PATH-TO-YOUR-SETTING-FILE");
    } catch (CaptureVisionRouterException e) {
       e.printStackTrace();
    }
    ```
    >
    ```objc
    NSError *error;
    // `cvr` is an instance of `CaptureVisionRouter`.
    [self.cvr initSettings:@"PATH-TO-YOUR-SETTING-FILE" error:&error];
    ```
    >
    ```swift
    do{
       //`cvr` is an instance of `CaptureVisionRouter`.
       try cvr.initSettings("PATH-TO-YOUR-SETTING-FILE")
    }catch{
       // Add code to do when error occurs.
    }
    ```
