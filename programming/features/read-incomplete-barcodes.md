---
layout: default-layout
title: Read Incomplete Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read incomplete barcodes in Dynamsoft Barcode Reader SDK.
keywords: Incomplete Barcodes
needAutoGenerateSidebar: false
---

# Read Incomplete Barcodes

In some cases, barcodes may have incomplete sections due to typographical errors as shown below.

<div align="center">
   <p><img src="assets/incomplete-barcodes.png" width="70%" alt="incomplete-barcodes"></p>
   <p>Incomplete Barcodes</p>
</div>

In this case, you can enable the barcode completion logic in Dynamsoft Barcode Reader (DBR) using [`BarcodeComplementModes`]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/barcode-complement-modes.html). After that, DBR will attempt to complete and correct the barcode according to the structural characteristics of the corresponding barcode type.

> NOTE:
>
> The barcode completion logic only supports QR code and Data Matrix at present.
> 
## Sample Code

Below is an example illustrating how to configure the parameter `BarcodeComplementModes`.

* update parameter `BarcodeComplementModes` in your JSON template

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
                "BarcodeComplementModes": [
                    {
                        "Mode": "BCM_GENERAL"
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

