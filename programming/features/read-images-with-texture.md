---
layout: default-layout
title: Read images with texture - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes with texture in Dynamsoft Barcode Reader SDK.
keywords: texture, barcode
needAutoGenerateSidebar: false
---

# How to Read Barcodes from Images with Textures

In some scenes, the background of images may appear textured, such as a patterned background, screen stripes, etc. As shown below, the barcode background has an odd texture due to the computer screen it is being displayed on.

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/texture-image-sample.png" alt="Sample barcode image with texture" width="50%" /></p>
   <p>Figure 1 – Sample barcode image with texture</p>
</div>

This may extend the barcode localization time or even lead to localization errors. The texture detection feature of Dynamsoft Barcode Reader (DBR) works on images with textured backgrounds. The following two images demonstrate the binarized images used for localization without and with texture detection enabled:

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/binary-before-texture-detect.png" alt="Sample barcode image with texture" width="50%"/></p>
   <p>Figure 2 – Binarized image without texture detection enabled</p>
</div>

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/binary-after-texture-detect.png" alt="Sample barcode image with texture" width="50%"/></p>
   <p>Figure 3 – Binarized image with texture detection enabled</p>
</div>

As we can see, the binarized image with texture detection enabled is much better. Now we will demonstrate how to configure the parameter [`TextureDetectionModes`]({{ site.dcv_parameters_reference }}image-parameter/texture-detection-modes.html) to enable texture detection.

## Sample Code

Below is an example illustrating how to configure the parameter `TextureDetectionModes`.

* update parameter `TextureDetectionModes` in your JSON template

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
                "TextureDetectionModes": [
                    {
                        "Mode": "TDM_GENERAL_WIDTH_CONCENTRATION",
                        "Sensitivity": 5
                    }
                ]
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
