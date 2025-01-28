---
layout: default-layout
title: Read a Specific Area/Region - Dynamsoft Barcode Reader SDK
description: This page describes how to read specific area or region in Dynamsoft Barcode Reader SDK.
keywords: Specific Area/Region
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Read a Specific Area/Region

Dynamsoft Barcode Reader (DBR) will locate the code region and decode the entire image by default. However, if only a specific region of the image or video is required to locate the barcode, you can define a Region Of Interest (ROI) via the parameter `TargetROIDef`. After defining a specific region, DBR will only decode barcodes within that region. Of course, this is very conducive to increasing the speed. Please refer to [`Design of the TargetROIDef Object`]({{ site.dcvb_parameters }}file/target-roi-definition/index.html) to learn more about `TargetROIDef` and how it works,.

## Single Region Specification

* Configure region via `SimplifiedCaptureVisionSettings`

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >- Python
   >- C#
   >
>
```javascript
// Obtain current runtime settings of `router` instance. Here we use `ReadSingleBarcode` as an example. You can change it to your own template name or the name of other preset template.
let settings = await router.getSimplifiedSettings("ReadSingleBarcode");
// Specify the ROI
settings.roi.points[0] = {x:10, y:10};
settings.roi.points[1] = {x:90, y:10};
settings.roi.points[2] = {x:90, y:90};
settings.roi.points[3] = {x:10, y:90};
// Update the settings to a specific template.
await router.updateSettings("ReadSingleBarcode", settings);

// Alternatively, you can set the scan region directly at the image source in a simpler way.
// If you’re using Dynamsoft Camera Enhancer, the following example demonstrates 
// how to specify a single scan region without modifying the template.

let cameraEnhancer = await Dynamsoft.DCE.CameraEnhancer.createInstance();
cameraEnhancer.setScanRegion({
  x: 10,
  y: 10,
  width: 80,
  height: 80,
  isMeasuredInPercentage: true,
});

```
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the ROI
settings.roi.points[0].Set(10, 10);
settings.roi.points[1].Set(90, 10);
settings.roi.points[2].Set(90, 90);
settings.roi.points[3].Set(10, 90);
settings.roiMeasuredInPercentage = 1;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```
>
```python
cvr_instance = CaptureVisionRouter()
# Obtain current runtime settings of `CCaptureVisionRouter` instance.
err_code, err_str, settings = cvr_instance.get_simplified_settings(EnumPresetTemplate.PT_READ_BARCODES.value)
# Specify the ROI.
settings.roi_measured_in_percentage = 1
points = settings.roi.points
points[0].x = 10
points[0].y = 10
points[1].x = 90
points[1].y = 10
points[2].x = 90
points[2].y = 90
points[3].x = 10
points[3].y = 90
# Update the settings.
err_code, err_str = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
```
>
```csharp
using (CaptureVisionRouter cvr = new CaptureVisionRouter())
{
   SimplifiedCaptureVisionSettings settings;
   string errorMsg;
   // Obtain current runtime settings of `CCaptureVisionRouter` instance.
   cvr.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
   // Specify the ROI.
   settings.roiMeasuredInPercentage = 1;
   settings.roi.points[0].Set(10, 10);
   settings.roi.points[1].Set(90, 10);
   settings.roi.points[2].Set(90, 90);
   settings.roi.points[3].Set(10, 90);
   // Update the settings.
   cvr.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);  
}
```

* Configure region via `JSON Template`

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
            "Location":
            {
               "Offset": 
               {
                  "ReferenceObjectOriginIndex": 0,
                  "ReferenceObjectSizeType": "default",
                  "MeasuredByPercentage" : 1,
                  "FirstPoint" : [ 10, 10 ],
                  "SecondPoint" : [ 90, 10 ],
                  "ThirdPoint" : [ 90, 90 ],
                  "FourthPoint" : [ 10, 90 ]
               }
            },
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


## Multiple Region Specification

If you need to specify more than one ROI, you have to use a `JSON Template`. Furthermore, you can even configure different barcode decoding parameter settings for each region. 

Below is an example template illustrating how to configure two ROIs with different barcode format parameter settings.

```json
{
    "CaptureVisionTemplates": [
        {
            "Name" : "CV_0",
            "ImageROIProcessingNameArray": ["TA_0", "TA_1"]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name" : "TA_0",
            "Location":
            {
               "Offset": 
               {
                  "ReferenceObjectOriginIndex": 0,
                  "ReferenceObjectSizeType": "default",
                  "MeasuredByPercentage" : 1,
                  "FirstPoint" : [ 0, 0 ],
                  "SecondPoint" : [ 100, 0 ],
                  "ThirdPoint" : [ 100, 20 ],
                  "FourthPoint" : [ 0, 20 ]
               }
            },
            "TaskSettingNameArray": ["BR_0"]
        },
        {
            "Name" : "TA_1",
            "Location":
            {
               "Offset": 
               {
                  "ReferenceObjectOriginIndex": 0,
                  "ReferenceObjectSizeType": "default",
                  "MeasuredByPercentage" : 1,
                  "FirstPoint" : [ 0, 80 ],
                  "SecondPoint" : [ 100, 80 ],
                  "ThirdPoint" : [ 100, 100 ],
                  "FourthPoint" : [ 0, 100 ]
               }
            },
            "TaskSettingNameArray": ["BR_1"]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "BarcodeFormatIds": ["BF_ONED"]
        },
        {
            "Name" : "BR_1",
            "BarcodeFormatIds": ["BF_QR_CODE"]
        }
    ]
}
```
