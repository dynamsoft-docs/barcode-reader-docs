---   
layout: default-layout
description: This article introduces how to read barcodes from image with lots of text
title: How to read barcodes from image with lots of text
keywords: text filter
needAutoGenerateSidebar: false
---

# How to Read Barcodes from an Image With Lots of Text

When trying to read an image where a barcode is surrounded by a large amount of irrelevant text, the presence of these characters may lead to incorrect positioning and slow down the execution speed. Dynamsoft Barcode Reader (DBR) provides parameter [`TextDetectionMode`]({{ site.dcvb_parameters_reference }}image-parameter/text-detection-mode.html) and [`IfEraseTextZone`]({{ site.dcvb_parameters_reference }}image-parameter/if-erase-text-zone.html) to control how to filter texts on an image.

## Sample Code

Below is an example illustrating how to configure the parameters to control text filtering function.

* update parameters in your JSON template

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
                "TextDetectionMode":
                {
                    "Mode": "TTDM_LINE",
                    "Direction": "UNKNOWN",
                    "CharHeightRange": [1, 100, 1],
                    "MaxSpacingInALine": -1,
                    "Sensitivity": 3
                },
                "IfEraseTextZone": 1
            }
        ]
    }
    ```

* apply settings by calling method `InitSettingsFromFile`

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >
>
```javascript
// `router` is an instance of `CaptureVisionRouter`.
// In the JS edition, the method name we use for initialization is different.
router.initSettings("PATH-TO-YOUR-SETTING")
```
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
