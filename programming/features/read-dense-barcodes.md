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
>
```javascript
const scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Defines settings for reading dense barcodes in a template.
let jsonString = "{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}";
// Configures the BarcodeScanner object with the settings.
await scanner.initRuntimeSettingsWithString(jsonString);
scanner.show();
```
>
```java
String jsonPara = "{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}";
// Apply the template string to the reader.
reader.initRuntimeSettingsWithString(jsonPara, EnumConflictMode.CM_OVERWRITE);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH");
```
>
```objc
NSError* err = nil;
NSString* jsonPara = @"{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}";
// Apply the template string to the reader.
[reader initRuntimeSettingsWithString:jsonPara conflictMode:EnumConflictModeOverwrite error:&err];
NSArray<iTextResult*>* result = [reader decodeFileWithName:"YOUR-IMAGE-FILE-PATH" error:&err];
```
>
```swift
let jsonPara = "{\"ImageParameter\":{\"BarcodeComplementModes\":[\"BCM_SKIP\"],\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[\"LM_CONNECTED_BLOCKS\"],\"ScaleUpModes\":[\"SUM_LINEAR_INTERPOLATION(0,4,6)\"],\"MaxAlgorithmThreadCount\":1,\"Name\":\"high-density-qr-tpl\",\"ScaleDownThreshold\":10000,\"Timeout\":5000},\"Version\":\"3.0\"}"
// Apply the template string to the reader.
try? reader.initRuntimeSettingsWithString(jsonPara,conflictMode:EnumConflictMode.overwrite)
let result = try? reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
dbr.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"high-density-qr-tpl","DeblurModes":[{"Mode":"DM_SHARPENING"},{"Mode":"DM_GRAY_EQUALIZATION"}],"ExpectedBarcodesCount":1,"LocalizationModes":[{"Mode":"LM_CONNECTED_BLOCKS"}],"ScaleUpModes": [{"Mode": "SUM_LINEAR_INTERPOLATION","AcuteAngleWithXThreshold": 0,"ModuleSizeThreshold": 4,"TargetModuleSize": 6}],"ScaleDownThreshold":10000,"Timeout":5000}}')
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"high-density-qr-tpl\",\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[{\"Mode\":\"LM_CONNECTED_BLOCKS\"}],\"ScaleUpModes\": [{\"Mode\": \"SUM_LINEAR_INTERPOLATION\",\"AcuteAngleWithXThreshold\": 0,\"ModuleSizeThreshold\": 4,\"TargetModuleSize\": 6}],\"ScaleDownThreshold\":10000,\"Timeout\":5000}}}", EnumConflictMode.CM_OVERWRITE);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
>
```csharp
string errorMsg;
EnumErrorCode iRet = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (iRet != EnumErrorCode.DBR_SUCCESS)
{
    Console.WriteLine(errorMsg);
}
BarcodeReader reader = new BarcodeReader();
reader.InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"high-density-qr-tpl\",\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[{\"Mode\":\"LM_CONNECTED_BLOCKS\"}],\"ScaleUpModes\": [{\"Mode\": \"SUM_LINEAR_INTERPOLATION\",\"AcuteAngleWithXThreshold\": 0,\"ModuleSizeThreshold\": 4,\"TargetModuleSize\": 6}],\"ScaleDownThreshold\":10000,\"Timeout\":5000}}}", EnumConflictMode.CM_OVERWRITE, out errorMsg);
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
>
```cpp
char errorBuf[512];
int iRet = -1;
iRet = dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    cout << errorBuf << endl;
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"high-density-qr-tpl\",\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[{\"Mode\":\"LM_CONNECTED_BLOCKS\"}],\"ScaleUpModes\": [{\"Mode\": \"SUM_LINEAR_INTERPOLATION\",\"AcuteAngleWithXThreshold\": 0,\"ModuleSizeThreshold\": 4,\"TargetModuleSize\": 6}],\"ScaleDownThreshold\":10000,\"Timeout\":5000}}}", CM_OVERWRITE, errorBuf, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
>
```c
int iRet = -1;
char errorBuf[512];
iRet = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    printf("%s\n", errorBuf);
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitRuntimeSettingsWithString(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"high-density-qr-tpl\",\"DeblurModes\":[{\"Mode\":\"DM_SHARPENING\"},{\"Mode\":\"DM_GRAY_EQUALIZATION\"}],\"ExpectedBarcodesCount\":1,\"LocalizationModes\":[{\"Mode\":\"LM_CONNECTED_BLOCKS\"}],\"ScaleUpModes\": [{\"Mode\": \"SUM_LINEAR_INTERPOLATION\",\"AcuteAngleWithXThreshold\": 0,\"ModuleSizeThreshold\": 4,\"TargetModuleSize\": 6}],\"ScaleDownThreshold\":10000,\"Timeout\":5000}}}", CM_OVERWRITE, errorBuf, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
