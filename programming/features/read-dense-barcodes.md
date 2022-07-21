---
layout: default-layout
title: Read dense barcodes - Dynamsoft Barcode Reader SDK
description: This page describes how to read dense barcodes in Dynamsoft Barcode Reader SDK.
keywords: dense barcodes, qrcode, datamatrix
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-dense-barcodes.html
---

# How to read high-density QR Codes

A QR code can store up to 7,089 numbers, 4,296 alphanumeric characters, 2,953 bytes, or 1,817 Japanese Kanjis. As the encoded information increases, the QR code becomes denser. As shown below, the QR code has high density.

<div align="center">
   <p><img src="assets/read-dense-barcodes/dense-qr-code.jpg" alt="High-density QR Code" width="80%" /></p>
   <p>Figure 1 – High-density QR Code</p>
</div>

In some scenarios, high-density QR codes become more difficult to locate and recognize due to small barcode images, perspective and distortion.

We can do the following to optimize the read rate of high-density QR codes:

- Scale up modules if they are too small
- Sharpen the image
- Run gray equalization

The following code snippet shows how to configure the parameters via a json template string.

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
>```javascript
```
>```java
String jsonPara = "{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}";
// Apply the template string to the reader.
reader.initRuntimeSettingsWithString(jsonPara, EnumConflictMode.CM_OVERWRITE);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH");
```
>```objc
NSError* err = nil;
NSString* jsonPara = @"{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}";
// Apply the template string to the reader.
[reader initRuntimeSettingsWithString:jsonPara conflictMode:EnumConflictModeOverwrite error:&err];
NSArray<iTextResult*>* result = [reader decodeFileWithName:"YOUR-IMAGE-FILE-PATH" error:&err];
```
>```swift
let jsonPara = "{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}"
// Apply the template string to the reader.
try? reader.initRuntimeSettingsWithString(jsonPara,conflictMode:EnumConflictMode.overwrite)
let result = try? reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
```
>```python
```
>```java
```
>```csharp
```
>```c++
```
>```c
```
