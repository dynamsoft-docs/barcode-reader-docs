---
layout: default-layout
title: Read Barcodes from Specific Area/Region on Mobile
description: This page describes how to read specific area or region in Dynamsoft Barcode Reader SDK Mobile Edition.
keywords: Specific Area/Region
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Barcodes from a Specific Area/Region

## Read from a specific region of a video stream

If you are using DBR and DCE to read barcodes from a specific area of the video stream, you can simply define the scan area via DCE.

> Note: Dynamsoft Camera Enhancer (DCE) is designed to provide APIs for camera control, camera preview, and other advanced features.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
import com.dynamsoft.dce.CameraEnhancer;
DSRect scanRegion = new DSRect();
scanRegion.top = 0.1f;
scanRegion.bottom = 0.9f;
scanRegion.right = 0.9f;
scanRegion.left = 0.1f;
scanRegion.measuredInPercentage = true;
try {
   // mCameraEnhancer is an instance of com.dynamsoft.dce.CameraEnhancer.
   mCameraEnhancer.setScanRegion(scanRegion);
} catch (CameraEnhancerException e) {
   e.printStackTrace();
}
```
>
```objc
NSError* err = nil;
DSRect* scanRegion = [[DSRect alloc] init];
scanRegion.top = 0.1;
scanRegion.bottom = 0.9;
scanRegion.right = 0.9;
scanRegion.left = 0.1;
scanRegion.measuredInPercentage = YES;
// dce is an instance of `DSCameraEnhancer`.
[dce setScanRegion:scanRegion error:&err];
```
>
```swift
let scanRegion:Rect? = Rect()
scanRegion?.top = 0.1
scanRegion?.bottom = 0.9
scanRegion?.left = 0.1
scanRegion?.right = 0.9
scanRegion?.measuredInPercentage = true
// dce is an instance of `CameraEnhancer`.
try? dce.setScanRegion(scanRegion)
```

## Set an Region of Interest on a Still Image

The library scan the entire image by default when localizing the barcodes. However, if only a specific region of the image or video is required to locate the barcode, you can define a Region of Interest (ROI) via the target ROI parameter to restrict the scan area. The parameter can be set either via the `SimplifiedCaptureVisionSettings` or a JSON parameter template.

> Notes:
>
> - You can either configure these settings via the `SimplifiedCaptureVisionSettings` struct or via a JSON template.
> - When using `SimplifiedCaptureVisionSettings`, you can only specify one region.
> - When using JSON template, you can specify more than one region.

### Specify a ROI via SimplifiedCaptureVisionSettings

To update the setting via `SimplifiedCaptureVisionSettings`:

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
try {
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   SimplifiedCaptureVisionSettings captureVisionSettings = cvr.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
   Quadrilateral roiQuad = new Quadrilateral();
   roiQuad.points[0] = new Point(15,30);
   roiQuad.points[1] = new Point(85,30);
   roiQuad.points[2] = new Point(85,70);
   roiQuad.points[3] = new Point(15,70);
   captureVisionSettings.roi = roiQuad;
   captureVisionSettings.roiMeasuredInPercentage = true;
   // Update the settings. Remember to specify the same template name you used when getting the settings.
   cvr.updateSettings(EnumPresetTemplate.PT_READ_BARCODES, captureVisionSettings);
} catch (CaptureVisionRouterException e) {
   e.printStackTrace();
}
```
>
```objc
NSError *error;
// Obtain current runtime settings. `cvr` is an instance of `DSCaptureVisionRouter`.
// Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
DSSimplifiedCaptureVisionSettings *captureVisionSettings = [self.cvr getSimplifiedSettings:DSPresetTemplateReadBarcodes error:&error];
DSQuadrilateral *roiQuad = [[DSQuadrilateral alloc] initWithPointArray:@[@(CGPointMake(15, 30)),@(CGPointMake(85, 30)),@(CGPointMake(85, 70)),@(CGPointMake(15, 70))]];
captureVisionSettings.roi = roiQuad;
captureVisionSettings.roiMeasuredInPercentage = true;
// Update the settings. Remember to specify the same template name you used when getting the settings.
[self.cvr updateSettings:DSPresetTemplateReadBarcodes settings:captureVisionSettings error:&error];
```
>
```swift
// Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
// Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
do{
   let captureVisionSettings = try cvr.getSimplifiedSettings(PresetTemplate.readBarcodes.rawValue)
   let roiQuad = Quadrilateral.init(pointArray: [CGPoint(x: 15,y: 30),CGPoint(x: 85,y: 30),CGPoint(x: 85,y: 70),CGPoint(x: 15, y: 70)])
   captureVisionSettings.roi = roiQuad
   captureVisionSettings.roiMeasuredInPercentage = true
   // Update the settings. Remember to specify the same template name you used when getting the settings.
   try cvr.updateSettings(PresetTemplate.readBarcodes.rawValue, settings: captureVisionSettings)
}catch{
   // Add code to do when error occurs.
}
```

### Specify One or More ROI via a Template

Define a single ROI:

```json
{
   "CaptureVisionTemplates": [
      {
            "Name" : "CV_0",
            "ImageROIProcessingNameArray": ["barcode-decoding-roi-1" ]
      }       
   ],
   "TargetROIDefOptions" : [
      {
         "Name" : "barcode-decoding-roi-1",
         "TaskSettingNameArray": ["barcode-decoding-task-1"],
         "Location": 
         {
            "Offset": {
               "MeasuredByPercentage" : 1,
               "FirstPoint" : [ 15, 30 ],
               "SecondPoint" : [ 85, 30 ],
               "ThirdPoint" : [ 85, 70 ],
               "FourthPoint" : [ 15, 70 ],
            }
         }
      }
   ]
}
```

You can define different ROIs in the `TargetROIDefOptions`. In the different ROIs you can specify different tasks or use the same task.

```json
{
   "CaptureVisionTemplates": [
      {
            "Name" : "CV_0",
            "ImageROIProcessingNameArray": ["barcode-decoding-roi-1","barcode-decoding-roi-2" ]
      }       
   ],
   "TargetROIDefOptions" : [
      {
         "Name" : "barcode-decoding-roi-1",
         "TaskSettingNameArray": ["barcode-decoding-task-1"],
         "Location": 
         {
            "Offset": {
               "MeasuredByPercentage" : 1,
               "FirstPoint" : [ 15, 20 ],
               "SecondPoint" : [ 85, 40 ],
               "ThirdPoint" : [ 85, 40 ],
               "FourthPoint" : [ 15, 20 ]
            }
         }
      },{
         "Name" : "barcode-decoding-roi-2",
         "TaskSettingNameArray": ["barcode-decoding-task-1"],
         "Location": 
         {
            "Offset": {
               "MeasuredByPercentage" : 1,
               "FirstPoint" : [ 15, 60 ],
               "SecondPoint" : [ 85, 80 ],
               "ThirdPoint" : [ 85, 80 ],
               "FourthPoint" : [ 15, 60 ]
            }
         }
      }
   ]
}
```
