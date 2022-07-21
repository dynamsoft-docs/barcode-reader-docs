---
layout: default-layout
title: Read Deformed Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read deformed barcodes in Dynamsoft Barcode Reader SDK.
keywords: Deformed Barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-deformed-barcodes.html
---

# Read Deformed Barcodes

As shown below, barcodes on the surface of some flexible packaging or cylindrical objects tend to be distorted and deformed.

<div align="center">
   <p><img src="assets/deformed-barcodes.png" width="70%" alt="Deformed Barcodes"></p>
   <p>Deformed Barcodes</p>
</div>

By default, DBR may not handle such cases well. To get such images decoded, enable deformation resistance by adding `DRM_GENERAL` to [`DeformationResistingModes`]({{ site.parameters_reference }}deformation-resisting-modes.html) as shown in the code snippet below:

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
// Adds DRM_GENERAL to deformationResistingModes.
settings.furtherModes.deformationResistingModes = [Dynamsoft.DBR.EnumDeformationResistingMode.DRM_GENERAL];
// Updates the settings.
await scanner.updateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.furtherModes.deformationResistingModes = new int[]{EnumDeformationResistingMode.DRM_GENERAL};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.iFurtherModes.deformationResistingModes = @[@(EnumDeformationResistingModeGeneral)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.iFurtherModes.deformationResistingModes = [EnumDeformationResistingMode.general]
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```
>```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.furtherModes.deformationResistingModes[0] = DRM_GENERAL;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
```
>```cpp
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.furtherModes.deformationResistingModes[0] = DRM_GENERAL;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.FurtherModes.DeformationResistingModes[0] = DRM_GENERAL;
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.furtherModes.deformationResistingModes = new int[]{EnumDeformationResistingMode.DRM_GENERAL};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
# Add DRM_GENERAL to the deformationResistingModes to decode deformed barcodes.
settings.further_modes.deformation_resisting_modes[0] = EnumDeformationResistingMode.DRM_GENERAL
# Update the settings.
reader.update_runtime_settings(settings)
```

> Note:
>
> `DeformationResistingModes` only works for QR Code and DataMatrix codes.

If the mode `DRM_GENERAL` doesn't work, try one of the following:

* `DRM_BROAD_WARP`: Resists deformation when the barcode is warped gently.
* `DRM_LOCAL_REFERENCE`: Resists deformation for barcodes with minor deformation in local modules.
* `DRM_DEWRINKLE`: Resists deformation for barcodes on a wrinkled surface.
