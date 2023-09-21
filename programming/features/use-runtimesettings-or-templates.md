---   
layout: default-layout
description: This article introduces two ways to configure DBR parameters, SimplifiedSettings and JSON Template, and their syntax rules.
title: Use SimplifiedSettings or JSON Template
keywords: DBR SimplifiedSettings Json Template ImageParameter FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Use SimplifiedSettings or JSON Template

Dynamsoft Barcode Reader (DBR) provides two ways for configuring the parameters: via `SimplifiedSettings` or via a `JSON Template`.

* [SimplifiedSettings](#simplifiedsettings)

  `SimplifiedSettings` is an object that manages various parameters during runtime. If you need to *dynamically* configure the reading process, use `SimplifiedSettings`.

  However, bear in mind that `SimplifiedSettings` doesn't provide all the available configuration options of the SDK.

* [JSON Template](#json-template)

  With a JSON template, you can make use of all the configuration options that DBR offers.
  
  However, compared with `SimplifiedSettings`, a template is static and can't be changed. If you need to use different settings for different scenarios, you can define a few templates and specify the proper one to use at runtime.

## SimplifiedSettings

`SimplifiedSettings` is an object that manages various runtime settings of the DBR SDK which dictate the performance of the barcode reader.

Basic steps:

1. Get the current value of the `SimplifiedSettings` object
2. Change one or more settings
3. Update the `SimplifiedSettings` object with the changed copy for the changes to take effect

The following code snippet demonstrates how to specify barcode formats via `SimplifiedSettings`.  

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

**See Also**  

- `SimplifiedCaptureVisionSettings:` [C++]({{ site.dcv_cpp_api }}capture-vision-router/structs/simplified-capture-vision-settings.html)

## JSON Template

With a JSON template, you can make use of all the configuration options that DBR offers.

Basic steps:

1. Build a JSON template and configure the required parameters
2. Save the template to a file or convert it to string
3. Call method `InitSettingsFromFile` or `InitSettings` to apply the settings

> Read [Parameter Template Structure]({{ site.parameters }}structure-and-interfaces-of-parameters.html) to learn more about the structure of templates.

> JavaScript edition only supports importing a JSON string and not a file.

The following steps demonstrates how to specify barcode formats via `JSON Template`.  

  * Build a most basic JSON template and configure parameter `BarcodeFormatIds`
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

  * Save the above template to file `setting.json`

  * Call method `InitSettingsFromFile` or `InitSettings` to apply the settings

    <div class="sample-code-prefix template2"></div>
       >- C++
       >
    >
    ```c++
    char szErrorMsg[256] = {0};
    CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    cvr->InitSettingsFromFile("PATH-TO-SETTING-FILE", szErrorMsg, 256);
    //cvr->InitSettings("{\"CaptureVisionTemplates\":[{\"Name\":\"CV_0\",\"ImageROIProcessingNameArray\":[\"TA_0\"]}],\"TargetROIDefOptions\":[{\"Name\":\"TA_0\",\"TaskSettingNameArray\":[\"BR_0\"]}],\"BarcodeReaderTaskSettingOptions\":[{\"Name\":\"BR_0\",\"BarcodeFormatIds\":[\"BF_ONED\",\"BF_QR_CODE\"]}]}", szErrorMsg, 256);
    // more process here
    ```

## Mixed Usage

It's also possible to use a `JSON Template` along with `SimplifiedSettings`. Typically, you initialize the SDK with a `JSON Template`, the settings in which will be reflected in `SimplifiedSettings`, then you can further fine-tune `SimplifiedSettings` to apply to the actual reading process.
