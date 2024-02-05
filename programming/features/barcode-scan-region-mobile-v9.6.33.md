---
layout: default-layout
title: Read Barcodes from Specific Area/Region on Mobile
description: This page describes how to read specific area or region in Dynamsoft Barcode Reader SDK.
keywords: Specific Area/Region
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Barcodes from a Specific Area/Region

## Read from a specific region of an image

DBR will locate the code region and decode the entire image by default. However, if only a specific region of the image or video is required to locate the barcode, you can define a Region Of Interest (ROI) via the parameter `RegionDefinition`. After defining a specific region, DBR will only decode barcodes within that region. Of course, this is very conducive to increasing the speed.

`RegionDefinition` is the struct that is designed to specify the ROI.

- `regionTop`: The y coordinate of the Top border of the region.
- `regionBottom`: The y coordinate of the Bottom border of the region.
- `regionLeft`: The x coordinate of the left border of the region.
- `regionRight`: The x coordinate of the right border of the region.
- `regionMeasuredByPercentage`: If measured by percentage, the above values will be recognized as percentages (1 to 100). Otherwise, the above values will be recognized as pixel length.

> Notes:
>
> - You can either configure these settings via the `PublicRuntimeSettings` struct or via a JSON template.
> - When using `PublicRuntimeSettings`, you can only specify one region.
> - When using JSON template, you can specify more than one region.

### Single Region Specification

To update the setting via `PublicRuntimeSettings`:

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
settings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>
```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
settings?.region.regionTop = 10
settings?.region.regionBottom = 90
settings?.region.regionLeft = 10
settings?.region.regionRight = 90
settings?.region.regionMeasuredByPercentage = 1
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```

To do the same with a JSON Template. Read more on [RuntimeSettings and templates](use-runtimesettings-or-templates.md#json-templates):

```json
{ 
   "ImageParameter": {
      "BarcodeFormatIds": ["BF_ALL"],
      "RegionDefinitionNameArray": ["RP_1"]
   }, 
   "RegionDefinition": {
      "Name": "RP_1",
      "Top": 10,
      "Bottom": 90,
      "Left": 10,
      "Right": 90,
      "MeasuredByPercentage": 1,
   },
   "Version": "3.0"
}
```

### Multiple Region Specification

If you need to specify more than one ROI, you have to use a JSON template. Furthermore, you can even configure different barcode-decoding parameter settings for each region. Read more on [RuntimeSettings and templates](use-runtimesettings-or-templates.md#json-templates)

```json
{
   "ImageParameter": {
      "RegionDefinitionNameArray": ["RP_1", "RP_2"]
   },
   "RegionDefinitionArray": [
      {
         // Settings for ROI 1
         "Name": "RP_1",
         "BarcodeFormatIds": ["BF_CODE_39"],
         "Top": 20,
         "Bottom": 80,
         "Left": 20,
         "Right": 80,
         "ExpectedBarcodesCount": 10,
         "MeasuredByPercentage": 0
      },
      {
         // Settings for ROI 2
         "Name": "RP_2",
         "BarcodeFormatIds": ["BF_CODE_93"],
         "BarcodeFormatIds_2": ["BF_DOTCODE"],
         "Top": 30,
         "Bottom": 70,
         "Left": 30,
         "Right": 80,
         "MeasuredByPercentage": 1
      }
   ],
   "Version": "3.0"
}
```

## Read from a specific region of a video stream

If you are using DBR and DCE to read barcodes from a specific area of the video stream, you can simply define the scan area via DCE.

> Note: <a href="https://www.dynamsoft.com/camera-enhancer/docs/introduction/" target="_blank"> Dynamsoft Camera Enhancer (DCE) </a> is designed to provide APIs for camera control, camera preview, and other advanced features.

<div class="sample-code-prefix template2"></div>
   >- Android
   >- Objective-C
   >- Swift
   >
>
```java
import com.dynamsoft.dce.CameraEnhancer;
RegionDefinition scanRegion = new RegionDefinition();
scanRegion.regionTop = 30;
scanRegion.regionBottom = 70;
scanRegion.regionRight = 15;
scanRegion.regionLeft = 85;
scanRegion.regionMeasuredByPercentage = 1;
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
iRegionDefinition* scanRegion = [[iRegionDefinition alloc] init];
scanRegion.regionTop = 10;
scanRegion.regionBottom = 90;
scanRegion.regionLeft = 10;
scanRegion.regionRight = 90;
scanRegion.regionMeasuredByPercentage = 1;
[dce setScanRegion:scanRegion error:&err];
```
>
```swift
let scanRegion:iRegionDefinition? = nil
scanRegion?.regionTop = 10
scanRegion?.regionBottom = 90
scanRegion?.regionLeft = 10
scanRegion?.regionRight = 90
scanRegion?.regionMeasuredByPercentage = 1
dce.setScanRegion(region, error:nil)
```
