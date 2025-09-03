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

DBR will locate the code region and decode the entire image by default. However, if only a specific region of the image or video is required to locate the barcode, you can define a Region Of Interest (ROI) via the parameter `RegionDefinition`. After defining a specific region, DBR will only decode barcodes within that region. Of course, this is very conducive to increasing the speed. To learn more about RegionDefinition and how it works, please refer to this [**section**](../../parameters/structure-and-interfaces-of-parameters.md#regiondefinition-and-how-it-works) of the Structure and Interfaces page.

`RegionDefinition` is the struct that is designed to specify the ROI.

- `RegionTop`: The y coordinate of the Top border of the region.
- `RegionBottom`: The y coordinate of the Bottom border of the region.
- `RegionLeft`: The x coordinate of the left border of the region.
- `RegionRight`: The x coordinate of the right border of the region.
- `RegionMeasuredByPercentage`: If measured by percentage, the above values will be recognized as percentages (1 to 100). Otherwise, the above values will be recognized as pixel length.

> Notes:
>
> - You can either configure these settings via the `PublicRuntimeSettings` struct or via a JSON template.
> - When using `PublicRuntimeSettings`, you can only specify one region.
> - When using JSON template, you can either specify one or more regions.

## Single Region Specification

To update the setting via `PublicRuntimeSettings`:

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- Java
   >- C#
   >- C++
   >- C
   >
>
```javascript
// Obtain current runtime settings of `reader` instance.
let settings = await scanner.getRuntimeSettings();
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED | Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
// Update the settings.
await scanner.updateRuntimeSettings(settings);
```
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
>
```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
settings.region_top = 10
settings.region_bottom = 90
settings.region_left = 10
settings.region_right = 90
settings.region_measured_by_percentage = 1
# Update the settings.
reader.update_runtime_settings(settings)
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
settings.barcodeFormatIds = EnumBarcodeFormat.BF_ONED | EnumBarcodeFormat.BF_QR_CODE;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
settings.Region.RegionTop = 10;
settings.Region.RegionBottom = 90;
settings.Region.RegionLeft = 10;
settings.Region.RegionRight = 90;
settings.Region.RegionMeasuredByPercentage = 1;
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>
```c++
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>
```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
settings.region.regionTop = 10;
settings.region.regionBottom = 90;
settings.region.regionLeft = 10;
settings.region.regionRight = 90;
settings.region.regionMeasuredByPercentage = 1;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
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

## Multiple Region Specification

If you need to specify more than one ROI, you have to use a JSON template. Furthermore, you can even configure different barcode-decoding parameter settings for each region. Read more on [RuntimeSettings and templates](use-runtimesettings-or-templates.md#json-templates):

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
