---
layout: default-layout
title: Barcode Formats and Count - Dynamsoft Barcode Reader SDK
description: This page describes how to set barcode formats and count in Dynamsoft Barcode Reader SDK.
keywords: Barcode Formats, Expected Count
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/barcode-formats-and-count.html
---

# Specify Barcode Formats and Count

## Set Barcode Formats

Specifying the barcode format is always the first step of barcode reader configuration. Be sure to confirm that the target barcode formats are included. Meanwhile, excluding the undesired barcodes will improve the processing efficiency. If you are not familiar with barcode format, the <a href="https://www.dynamsoft.com/barcode-types/barcode-types/" target="_blank">introduction of barcode formats</a> may help you understand it. Generally, the barcode format settings are updated via `PublicRuntimeSettings` class by specifying enumeration member of `BarcodeFormat` or `BarcodeFormat_2`.

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
// Specify the barcode formats by enumeration values.
// The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
// Some special formats are listed in the second group (barcodeFormatIds_2).
settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED | Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
// Update the settings.
await scanner.updateRuntimeSettings(settings);
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Specify the barcode formats by enumeration values.
// The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
// Some special formats are listed in the second group (barcodeFormatIds_2).
settings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Specify the barcode formats by enumeration values.
// The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
// Some special formats are listed in the second group (barcodeFormatIds_2).
settings.barcodeFormatIds = EnumBarcodeFormatQRCODE | EnumBarcodeFormatONED;
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>
```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
// There are two groups of barcode formats, BarcodeFormat and BarcodeFormat_2
// The Majority of common barcodes like oneD barcode and QR code are stored in the first group of barcode format.
// Some of the enumeration members are combined value of a group of barcodes like BF_ONED and BF_GS1_DATABAR
// Use "|" to enable multiple barcode formats at one time.
settings?.barcodeFormatIds = EnumBarcodeFormat.ONED | EnumBarcodeFormat.QRCODE
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```
>
```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
# Specify the barcode formats by enumeration values.
# The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
# Some special formats are listed in the second group (barcodeFormatIds_2).
settings.barcode_format_ids = EnumBarcodeFormat.BF_ONED | EnumBarcodeFormat.BF_QR_CODE
# Update the settings.
reader.update_runtime_settings(settings)
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Specify the barcode formats by enumeration values.
// The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
// Some special formats are listed in the second group (barcodeFormatIds_2).
settings.barcodeFormatIds = EnumBarcodeFormat.BF_ONED | EnumBarcodeFormat.BF_QR_CODE;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Specify the barcode formats by enumeration values.
// The first group of barcode format (barcodeFormatIds) contains the majority of common barcode formats.
// Some special formats are listed in the second group (barcodeFormatIds_2).
settings.BarcodeFormatIds = (int)(EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED);
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>
```c++
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
// There are two groups of barcode formats, BarcodeFormat and BarcodeFormat_2
// The Majority of common barcodes like oneD barcode and QR code are stored in the first group of barcode format.
// Some of the enumeration members are combined value of a group of barcodes like BF_ONED and BF_GS1_DATABAR
// Use "|" to enable multiple barcode formats at one time.
settings.barcodeFormatIds = BF_QR_CODE | BF_ONED;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>
```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
// There are two groups of barcode formats, BarcodeFormat and BarcodeFormat_2
// The Majority of common barcodes like oneD barcode and QR code are stored in the first group of barcode format.
// Some of the enumeration members are combined value of a group of barcodes like BF_ONED and BF_GS1_DATABAR
// Use "|" to enable multiple barcode formats at one time.
settings.barcodeFormatIds = BF_QR_CODE | BF_ONED;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
```

## Set Barcode Count

The `expectedBarcodeCount` is the parameter that controls the number of expected results of the recognized barcodes via barcode reader from a single image. The process will be stopped as soon as the count of successfully decoded barcodes reaches the expected amount.

There are some suggestions on how to set the `expectedBarcodeCount`:

- When your project is designed for decoding **single** barcode, the recommended `expectedBarcodeCount` is **1**. This will sharply improve the processing speed.
- When there are **n** barcodes in a single image (**n** is a fixed number) and you'd like the barcode reader to decode **all of them**, the recommended `expectedBarcodeCount` is **n**.
- When the number of barcodes is unknown and you want to output **as many** barcode results as possible, you can set the `expectedBarcodeCount` to the **maximum possible count**.
- When the number of barcodes is unknown and you want to output **at least one** barcode result as **soon** as possible, you can set the `expectedBarcodeCount` to **0**. The barcode reader will try to decode at least one barcode from the image.

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
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
await scanner.updateRuntimeSettings(settings);
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>
```swift
// Obtain current runtime settings of `barcodeReader` instance.
let settings = try? barcodeReader.getRuntimeSettings()
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
try? barcodeReader.updateRuntimeSettings(settings!)
```
>
```python
# Obtain current runtime settings of `reader` instance.
settings = reader.get_runtime_settings()
# Set the expected barcode count
settings.expectedBarcodesCount = 0;
# Update the settings.
reader.update_runtime_settings(settings)
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```c#
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
reader.UpdateRuntimeSettings(settings);
```
>
```c++
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
reader.GetRuntimeSettings(&settings);
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
reader.UpdateRuntimeSettings(&settings, szErrorMsg, 256);
```
>
```c
PublicRuntimeSettings settings;
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `reader` instance.
DBR_GetRuntimeSettings(reader, &settings);
// Set the expected barcode count
settings.expectedBarcodesCount = 0;
// Update the settings.
DBR_UpdateRuntimeSettings(reader, &settings, szErrorMsg, 256);
```
