---   
layout: default-layout 
description: This article introduces how to perform grayscale enhancement according to scene characteristics to improve the success rate of DBR positioning code area
title: Preprocess Images based on Different Scenarios
keywords: grayscale enhancement
needAutoGenerateSidebar: false
---

# How to Preprocess Images based on Different Scenarios

The default configuration of Dynamsoft Barcode Reader (DBR) can handle most common scenarios. However, there are still some specific scenarios where the default configuration of DBR cannot locate the code area for decoding. For these specific scenarios, DBR has built-in [`GrayscaleEnhancementModes`]({{ site.dcvb_parameters_reference }}image-parameter/grayscale-enhancement-modes.html) to configure the grayscale enhancement algorithm. For different scenarios, a specific enhancement algorithm can effectively improve the success rate when detecting areas of interest. This article will detail how to choose the appropriate enhancement mode according to the scenario.

## grayscale enhancement mode

DBR provides three grayscale enhancement modes, `GEM_GRAY_EQUALIZE`, `GEM_GRAY_SMOOTH` and `GEM_SHARPEN_SMOOTH`, to deal with different situations. Below we will introduce the scenarios where one of the these modes helps.

- `GEM_GRAY_EQUALIZE`

Gray-level equalization, which is used to enhance the contrast of an image. The sample image below demonstrates the effect, before and after grayscale equalization. The colours of the QR code on the original image (left) is too similar to the background color, which would makes decoding, as is, more difficult. The picture on the right is the result of preprocessing through `GEM_GRAY_EQUALIZE`. The QR code becomes much more pronounced, which will make the subsequent decoding process much easier.

![Before Equalizing][1]![After Equalizing][2]

This mode has an additional parameter `Sensitivity`, where the default value is 5, and the range is [1~9]. When you set `GEM_GRAY_EQUALIZE`, `DBR` does not necessarily perform equalization but will judge whether to perform it based on the gray distribution and `Sensitivity` of the image itself. The greater the value of `Sensitivity`, the more likely that DBR will perform the equalization process. Setting it to 9 means that gray-scale equalization must be performed while 1 means to skip the process.

- `GEM_GRAY_SMOOTH`

Grayscale smoothing, which is used to reduce image noise and texture. The following sample image shows a grayscale image with more noise and its corresponding binarized image. Obviously, there are many noises which will be bad for barcode reading.

![Grayscale Before Smoothing][3]![Binarized Before Smoothing][5]   

After configuring `GEM_GRAY_SMOOTH` for smoothing. The noise of the binarized image are well handled well as shown below.

![Grayscale After Smoothing][4]![Binarized After Smoothing][6]  

- `GEM_SHARPEN_SMOOTH`

Sharpening and smoothing are used to reduce blur. The following sample image demonstrates the effect before and after processing in this mode. It is obvious that the processed picture is much clearer.

![Before Sharpen-Smoothing][7]![After Sharpen-Smoothing][8]

## Combination of enhancement modes

If the image to be processed is more complicated, you can use the above grayscale enhancement modes in combination. After configuring multiple modes through [`GrayscaleEnhancementModes`]({{ site.dcvb_parameters_reference }}image-parameter/grayscale-enhancement-modes.html), DBR will try each mode in sequence until the number of successful decoded barcodes meets the expected value (`ExpectedBarcodeCount`), or the algorithm combination is exhausted.

## Sample Code

Below is an example illustrating how to configure the parameter `GrayscaleEnhancementModes`.

* update parameter `GrayscaleEnhancementModes` in your JSON template

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
                "GrayscaleEnhancementModes": [
                    {
                        "Mode": "GEM_GRAY_EQUALIZE",
                        "Sensitivity": 9
                    },
                    {
                        "Mode": "GEM_GRAY_SMOOTH",
                        "SmoothBlockSizeX": 10,
                        "SmoothBlockSizeY": 10
                    },
                    {
                        "Mode": "GEM_SHARPEN_SMOOTH",
                        "SmoothBlockSizeX": 5,
                        "SmoothBlockSizeY": 5,
                        "SharpenBlockSizeX": 5,
                        "SharpenBlockSizeY": 5
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


[1]:assets/preprocess-images/gray-equalize-sample-1.png
[2]:assets/preprocess-images/gray-equalize-sample-2.png
[3]:assets/preprocess-images/gray-smooth-sample-1.png
[4]:assets/preprocess-images/gray-smooth-sample-2.png
[5]:assets/preprocess-images/gray-smooth-sample-3.png
[6]:assets/preprocess-images/gray-smooth-sample-4.png
[7]:assets/preprocess-images/before-sharpen-sample.png
[8]:assets/preprocess-images/after-sharpen-sample.png
[9]:assets/preprocess-images/before-close-sample.png
[10]:assets/preprocess-images/after-close-sample.png
