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

# How to Read Barcodes from Large Images

In some cases, the captured image is very large, so DBR may require more memory and take longer to read the barcode. To speed up the barcode localization process and reduce memory overhead, you can configure the `ScaleDownThreshold` parameter to shrink the image size. If the shorter side length of the image is larger than `ScaleDownThreshold`, the library will shrink the image (50% on each dimension) until the shorter side is less than the threshold.

>Note:
>
>1. If the image size is large and the barcode [`module size`](read-barcodes-with-small-modulesize.md) is small, shrinking the image size may result in unreadable barcodes.
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
let scanner =await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Force js to compress images larger than 2K.
scanner.maxCvsSideLength = 2048;
// Obtains the current runtime settings of DBR.
let rs = await scanner.getRuntimeSettings();
// Sets the threshold for scaling down.
rs.scaleDownThreshold = 2048;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
await scanner.show();
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
settings!.scaleDownThreshold = 1600
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.scale_down_threshold = 1600
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.scaleDownThreshold = 1600;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
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
PublicRuntimeSettings settings = reader.GetRuntimeSettings(); //Get the current RuntimeSettings
settings.ScaleDownThreshold = 1600;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
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
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
reader->GetRuntimeSettings(runtimeSettings); //Get the current RuntimeSettings
runtimeSettings->scaleDownThreshold = 1600;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
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
PublicRuntimeSettings runtimeSettings;
DBR_GetRuntimeSettings(barcodeReader, &runtimeSettings); //Get the current RuntimeSettings
runtimeSettings.scaleDownThreshold = 1600;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
