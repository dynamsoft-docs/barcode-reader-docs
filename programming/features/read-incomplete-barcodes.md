---
layout: default-layout
title: Read Incomplete Barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read incomplete barcodes in Dynamsoft Barcode Reader SDK.
keywords: Incomplete Barcodes
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-incomplete-barcodes.html
---

# Read Incomplete Barcodes

In some cases, barcodes may have incomplete sections due to typographical errors as shown below.

<div align="center">
   <p><img src="assets/incomplete-barcodes.png" width="70%" alt="incomplete-barcodes"></p>
   <p>Incomplete Barcodes</p>
</div>

In this case, you can enable the barcode completion logic in DBR using [`BarcodeComplementModes`]({{ site.parameters_reference }}barcode-complement-modes.html). After that, DBR will attempt to complete and correct the barcode according to the structural characteristics of the corresponding barcode type.

Check out the following code snippet on how to configure `BarcodeComplementModes`.

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
// Obtains the current runtime settings of DBT.
let settings = await scanner.getRuntimeSettings();
// Adds BCM_GENERAL to barcodeComplementModes.
settings.furtherModes.barcodeComplementModes = [Dynamsoft.DBR.EnumBarcodeComplementMode.BCM_GENERAL];
// Updates the settings.
await scanner.updateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.furtherModes.barcodeComplementModes = new int[]{EnumBarcodeComplementMode.BCM_GENERAL};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.furtherModes.barcodeComplementModes = @[@(EnumBarcodeComplementModeGeneral)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings?.furtherModes.barcodeComplementModes = [EnumBarcodeComplementMode.general]
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```
>```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.furtherModes.barcodeComplementModes[0] = BCM_GENERAL;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
```
>```cpp
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.furtherModes.barcodeComplementModes[0] = BCM_GENERAL;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.FurtherModes.BarcodeComplementModes[0] = BCM_GENERAL;
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.furtherModes.barcodeComplementModes = new int[]{EnumBarcodeComplementMode.BCM_GENERAL};
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
# Add BCM_GENERAL to the barcodeComplementModes to decode incomplete barcodes.
settings.further_modes.barcode_complement_modes[0] = EnumBarcodeComplementMode.BCM_GENERAL
# Update the settings.
reader.update_runtime_settings(settings)
```

> NOTE:
>
> The barcode completion logic only supports QR code and Data Matrix at present.