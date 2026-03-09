---   
layout: default-layout
title: Control the termination phase of Dynamsoft Barcode Reader SDK
description: This article describes how to control early termination of the barcode decoding process in Dynamsoft Barcode Reader SDK using the SectionArray, Timeout, and ExpectedBarcodesCount parameters.
needAutoGenerateSidebar: true
keywords: terminate timeout
breadcrumbText: Termination Control
---

# Control When to Terminate a Decoding Process

Typically, Dynamsoft Barcode Reader (DBR) will terminate a decoding process after the barcode is decoded or the process has failed. In some cases, we may want the process to terminate earlier than that. The product provides three parameters ([`SectionArray`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/section-array.html), [`Timeout`]({{ site.dcvb_parameters_reference }}capture-vision-template/timeout.html), and [`ExpectedBarcodesCount`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/expected-barcodes-count.html)) that allow you to configure an early termination of its execution.

## SectionArray

This parameter is a JSON object array that can contain up to three section objects:
- "ST_REGION_PREDETECTION"
- "ST_BARCODE_LOCALIZATION"
- "ST_BARCODE_DECODING"

Each object represents a section pipeline of barcode reader algorithm task. By including only the sections you need, you can control how many stages of the process are executed. Early exit can be achieved by omitting later sections from the `SectionArray`.

For example:

- To stop after region pre-detection:

```json
"SectionArray": [
    { "Section": "ST_REGION_PREDETECTION" }
]
```

- To stop after barcode localization:

```json
"SectionArray": [
    { "Section": "ST_REGION_PREDETECTION" },
    { "Section": "ST_BARCODE_LOCALIZATION" }
]
```

Below is an example illustrating how to configure parameter `SectionArray` via `JSON Template` to stop after barcode localization.
  
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
            "SectionArray":
            [
                {
                    "Section": "ST_REGION_PREDETECTION"
                },
                {
                    "Section": "ST_BARCODE_LOCALIZATION"
                }
            ]
        }
    ]
}
```

Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

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
   >- Python
   >- C#
   >- Java
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
CCaptureVisionRouter* cvRouter = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvRouter->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the timeout.
settings.timeout = 1000;
// Update the settings.
cvRouter->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```
>
```python
cvr_instance = CaptureVisionRouter()
# Obtain current runtime settings of `CaptureVisionRouter` instance.
err_code, err_str, settings = cvr_instance.get_simplified_settings(EnumPresetTemplate.PT_READ_BARCODES.value)
# Specify the timeout.
settings.timeout = 1000
# Update the settings.
err_code, err_str = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
```
>
```csharp
using (CaptureVisionRouter cvRouter = new CaptureVisionRouter())
{
   SimplifiedCaptureVisionSettings settings;
   string errorMsg;
   // Obtain current runtime settings of `CaptureVisionRouter` instance.
   cvRouter.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
   // Specify the timeout.
   settings.timeout = 1000;
   // Update the settings.
   cvRouter.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);  
}
```
>
```java
CaptureVisionRouter cvRouter = new CaptureVisionRouter();
SimplifiedCaptureVisionSettings settings = null;
try {
    // Obtain current runtime settings of `CaptureVisionRouter` instance
    settings = cvRouter.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
} catch (CaptureVisionException e) {
    settings = new SimplifiedCaptureVisionSettings();
}
// Specify the timeout.
settings.timeout = 1000;
try {
    // Update the settings.
    cvRouter.updateSettings(EnumPresetTemplate.PT_READ_BARCODES, settings);
} catch (CaptureVisionException e) {
    System.out.println("Update settings failed: ErrorCode: " + e.getErrorCode() + ", ErrorString: " + e.getErrorString());
    return;
}
//call capture or other tasks
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

Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

## ExpectedBarcodesCount

The `ExpectedBarcodesCount` parameter controls the number of expected results of the recognized barcodes from a single image. The process will be stopped as soon as the count of successfully decoded barcodes reaches the expected amount.

**Use Cases:**

If you know exactly how many barcodes need to be recognized, you can set this parameter to make the program terminate after obtaining the sufficient number of barcodes, rather than continuing to search for additional barcodes. This can significantly improve processing efficiency, especially when dealing with images that may contain more barcodes than needed.

**Configuration:**

For detailed instructions on how to configure this parameter, please refer to the article [Set Barcode Count]({{ site.features }}barcode-formats-and-count.html#set-barcode-count).