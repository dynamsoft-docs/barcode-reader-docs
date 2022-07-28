---
layout: default-layout
title: Read Inverted Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read inverted barcodes in Dynamsoft Barcode Reader SDK.
keywords: Inverted Barcodes
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-inverted-barcodes.html
---

# Read Inverted Barcodes

Typically, barcodes are dark on a light background. But in some cases, the barcodes are "inverted" -- light barcodes on a dark background, as shown in the image below.

<div align="center">
   <p><img src="assets/inverted-barcodes.png" width="40%" alt="Inverted Barcodes"></p>
   <p>Inverted Barcodes</p>
</div>

The feature to decode such inverted barcodes is not enabled by default. To enable it, add the value `GTM_INVERTED` to `GrayscaleTransformationModes` as shown in the code snippet below:

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- C
   >- C++
   >- C#
   >- Java
   >- Python
   >
>```javascript
// Obtains the current runtime settings of DBR.
let settings = await scanner.getRuntimeSettings();
// Adds GTM_INVERTED to grayscaleTransformationModes.
settings.furtherModes.grayscaleTransformationModes = [Dynamsoft.DBR.EnumGrayscaleTransformationMode.GTM_ORIGINAL, Dynamsoft.DBR.EnumGrayscaleTransformationMode.GTM_INVERTED];
// Updates the settings.
await scanner.updateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.furtherModes.grayscaleTransformationModes = new int[]{EnumGrayscaleTransformationMode.GTM_ORIGINAL, EnumGrayscaleTransformationMode.GTM_INVERTED};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.furtherModes.grayscaleTransformationModes = @[@(EnumGrayscaleTransformationModeOriginal),@(EnumGrayscaleTransformationModeInverted)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings?.furtherModes.grayscaleTransformationModes = [EnumGrayscaleTransformationMode.original, EnumGrayscaleTransformationMode.inverted]
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```
>```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.furtherModes.grayscaleTransformationModes[0] = GTM_ORIGINAL;
settings.furtherModes.grayscaleTransformationModes[1] = GTM_INVERTED;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
```
>```cpp
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.furtherModes.grayscaleTransformationModes[0] = GTM_ORIGINAL;
settings.furtherModes.grayscaleTransformationModes[1] = GTM_INVERTED;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.FurtherModes.GrayscaleTransformationModes[0] = GTM_ORIGINAL;
settings.FurtherModes.GrayscaleTransformationModes[1] = GTM_INVERTED;
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.furtherModes.grayscaleTransformationModes = new int[]{EnumGrayscaleTransformationMode.GTM_ORIGINAL, EnumGrayscaleTransformationMode.GTM_INVERTED};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
# Add GTM_INVERTED to GrayscaleTransformationModes to decode inverted barcodes.
settings.further_modes.grayscale_transformation_modes[0] = EnumGrayscaleTransformationMode.GTM_ORIGINAL
settings.further_modes.grayscale_transformation_modes[1] = EnumGrayscaleTransformationMode.GTM_INVERTED
# Update the settings.
reader.update_runtime_settings(settings)
```

**Remarks**

- With only `GTM_GENERAL` enabled in `GrayscaleTransformationModes`, DBR scans only general black-on-white barcodes.
- With only `GTM_INVERTED` enabled in `GrayscaleTransformationModes`, DBR scans only inverted barcodes.
- When `GTM_GENERAL` is enabled as the first mode and `GTM_INVERTED` is enabled as the second mode in `GrayscaleTransformationModes`, DBR will try to decode general barcodes first. If the count of decoded barcodes does not reach the expected number, DBR will then try decoding the inverted barcodes.
