---   
layout: default-layout
description: This article introduces how to read Postal codes.
title: How to read Postal codes
keywords: Postal code, Direct Part Marking
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Postal Codes

## Which Types of Postal Codes are Supported

Dynamsoft Barcode Reader (DBR) supports the following types of postal codes. Details about each barcode type can be found on the <a href="https://www.dynamsoft.com/barcode-reader/barcode-types/" target="_blank">list of supported barcode types</a> page.

* USPS Intelligent Mail
* Postnet
* Planet
* Australian Post
* Royal Mail 4-State Customer Barcode


## Particular Parameter Required

DBR provides a parameter, [`BarcodeFormatIds`]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/barcode-format-ids.html), to control the formats of the barcode to process. To enable decoding the postal codes, simply set a `BF_POSTALCODE` or a specific postal code format enumeration to this parameter.

## Sample Code

You can configure the parameter `BarcodeFormatIds` in two different ways, depending on your requirements. You can do it through `SimplifiedCaptureVisionSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

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
// Enable all supported types of postal codes.
settings.barcodeSettings.barcodeFormatIds = BF_POSTALCODE;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```

* Configure barcode format via `JSON parameter template file`
  * update parameter `BarcodeFormatIds` in JSON template
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
            "BarcodeFormatIds" : ["BF_POSTALCODE"]
        }
    ]
   }
   ```

  * save the above template to file `setting.json`

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
    // `cvr` is an instance of `DSCaptureVisionRouter`.
    [self.cvr initSettingsFromFile:@"PATH-TO-YOUR-SETTING-FILE" error:&error];
    ```
    >
    ```swift
    do{
        //`cvr` is an instance of `CaptureVisionRouter`.
        try cvr.initSettingsFromFile("PATH-TO-YOUR-SETTING-FILE")
    }catch{
        // Add code to do when error occurs.
    }
    ```
