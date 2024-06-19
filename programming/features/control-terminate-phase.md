---   
layout: default-layout
title: Control the termination phase of Dynamsoft Barcode Reader SDK
description: This article describes how to terminate the barcode decoding task as needed.
needAutoGenerateSidebar: true
keywords: terminate timeout
breadcrumbText: Termination Control
---

# Control when to terminate a decoding process

Typically, Dynamsoft Barcode Reader (DBR) will terminate a decoding process after the barcode is decoded or the process has failed. In some cases we may want the process to terminate earlier than that. To do this, we use either the parameter [ `TerminateSetting` ]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/terminate-setting.html) or the parameter [ `Timeout` ]({{ site.dcv_parameters_reference }}capture-vision-template/timeout.html). The former specifies the stage to terminate the process while the latter specifies the maximum time allowed for the process.

## TerminateSetting

This parameter specifies a certain stage to terminate the barcode reader algorithm task. By default, the task will only terminate after all these stages are completed and the barcode is recognized. To terminate the task as early as possible, you have two options:

First, you can set the `section` parameter alone to make the task exit after completing all stages in a specific section.

Second, you can use the `section + stage` parameters to terminate the task immediately after completing a specific stage within a section. 

Below is an example illustrating how to configure parameter `TerminateSetting` via `JSON Template`.
  
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
            "TerminateSetting":
            {
                "Section": "ST_REGION_PREDETECTION",
                "Stage": "IRUT_GRAYSCALE_IMAGE"
            }
        }
    ]
}
```

To apply the above settings, please follow the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

## Timeout

This parameter controls the timeout for an individual decoding process in milliseconds. When the timeout occurs, the decoding will be terminated.

Allowed values are between 0 and 0x7fffffff. The default value is 10000.

The timeout setting is helpful in multi-image decoding situations where some images may take a long time to process. With proper timeout, we can balance the tradeoff between speed and read rate.

> The timeout setting is especially useful when decoding barcodes from consecutive video frames, where the same barcode appears in multiple frame images, and it takes much less time to read it in a clear frame, meaning blurry frames should be skipped fast.

You can configure the parameter in two different ways, depending on your requirements. You can do it through `SimplifiedCaptureVisionSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure timeout via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >
>
```javascript
// Obtain current runtime settings of `router` instance. Here we use `ReadSingleBarcode` as an example. You can change it to your own template name or the name of other preset template.
let settings = await router.getSimplifiedSettings("ReadSingleBarcode");
// Specify the timeout
settings.timeout = 1000;
// Update the settings to a specific template.
await router.updateSettings("ReadSingleBarcode", settings);
```
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the expected barcode count.
settings.timeout = 1000;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```


* Configure parameter `Timeout` via `JSON Template`
  
```json
{
    "CaptureVisionTemplates": [
        {
            "Name" : "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ],
            "Timeout":1000
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
            "Name" : "BR_0"
        }
    ]
}
```

To apply the above settings, please follow the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
