---
layout: default-layout
title: Read barcodes from large image - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from large image in Dynamsoft Barcode Reader SDK.
keywords: large image, barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-a-large-image.html
---

# How to read barcodes from large images

In some cases, the captured image is very large, so DBR may require more memory and take longer to read the barcode. To speed up the barcode localization process and reduce memory overhead, you can configure `PublicRuntimeSettings.ScaleDownThreshold` parameter to shrink the image size. If the shorter side length of the image is larger than `ScaleDownThreshold`, the library will shrink the image (50% on each dimension) until the shorter side is less than the threshold.

>Note:
>
>1. If the image size is large and the barcode [`module size`](read-barcodes-with-small-module-size.md) is small, shrinking the image size may result in unreadable barcodes.
>2. Don't worry about the location of the barcodes, as DBR will still return their coordinates in the original image.
>3. For the JavaScript edition, a `BarcodeScanner` instance comes with a default `ScaleDownThreshold` of `2300`, which makes it easier to handle continuous video frames.

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
let reader =await Dynamsoft.DBR.BarcodeReader.createInstance();
// Obtains the current runtime settings of DBR.
let rs = await reader.getRuntimeSettings();
// Sets the threshold for scaling down.
rs.scaleDownThreshold = 2000;
// Updates the settings.
await reader.updateRuntimeSettings(rs);
await reader.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set a suitable scaleDownThreshold
settings.scaleDownThreshold = 1600;
// Update the settings.
reader.updateRuntimeSettings(settings);
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Set a suitable scaleDownThreshold
settings.scaleDownThreshold = 1600;
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Set a suitable scaleDownThreshold
settings!.scaleDownThreshold = 1600;
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
```
>
```python
```
>
```java
```
>
```csharp
```
>
```c++
```
>
```c
```
