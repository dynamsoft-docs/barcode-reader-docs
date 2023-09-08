---
layout: default-layout
title: Barcode Formats and Count - Dynamsoft Barcode Reader SDK
description: This page describes how to set barcode formats and count in Dynamsoft Barcode Reader SDK.
keywords: Barcode Formats, Expected Count
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/barcode-formats-and-count.html
---

# Specify Barcode Formats and Count

## Set Barcode Formats

Specifying the barcode format is always the first step when it comes to the configuration of Dynamsoft Barcode Reader(DBR). Be sure to confirm that the target barcode formats are indeed supported by DBR by checking our [list of supported barcode types](https://www.dynamsoft.com/barcode-types/). Excluding undesired barcode types will improve the processing efficiency. 

You can configure the parameter in two different ways, depending on your requirements. You can do it through `SimplifiedCaptureVisionSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure barcode format via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
   >- C++
   >
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the barcode formats by enumeration values.
// Use "|" to enable multiple barcode formats at one time.
settings.barcodeSettings.barcodeFormatIds = BF_QR_CODE | BF_ONED;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```

* Configure barcode format via `JSON parameter template file`
  * update parameter `BarcodeFormatIds` in your JSON template
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
                "BarcodeFormatIds" : ["BF_ONED", "BF_QR_CODE"]
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


## Set Barcode Count

The `expectedBarcodeCount` parameter controls the number of expected results of the recognized barcodes from a single image. The process will be stopped as soon as the count of successfully decoded barcodes reaches the expected amount.

There are some suggestions on how to set the `expectedBarcodeCount`:

- When your project is designed for decoding a **single** barcode per image or frame, the recommended `expectedBarcodeCount` is **1**. This will sharply improve the processing speed.
- When there are **n** barcodes in a single image or frame (**n** is a fixed number) and you'd like the barcode reader to decode **all of them**, the recommended `expectedBarcodeCount` is **n**.
- When the number of barcodes is unknown and you want to output **as many** barcode results as possible, you can set the `expectedBarcodeCount` to the **maximum possible value** of `expectedBarcodeCount`.
- When the number of barcodes is unknown and you want to output **at least one** barcode result as **soon** as possible, you can set the `expectedBarcodeCount` to **0**. The barcode reader will try to decode at least one barcode from the image.

You can configure the parameter in two different ways, depending on your requirements. You can do it through `SimplifiedBarcodeReaderSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure expected barcode count via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
   >- C++
   >
>
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the expected barcode count.
settings.barcodeSettings.expectedBarcodesCount = 1;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```

* Configure barcode format via `JSON parameter template file`
  * update parameter `ExpectedBarcodesCount` in your JSON template
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
            "ExpectedBarcodesCount" : 1
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

