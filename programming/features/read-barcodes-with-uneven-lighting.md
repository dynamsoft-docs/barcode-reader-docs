---
layout: default-layout
title: Read barcodes with uneven lighting - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes with uneven lighting in Dynamsoft Barcode Reader SDK.
keywords: uneven lighting, barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-barcodes-with-uneven-lighting.html
---

# How to read barcodes with uneven lighting

In some scenarios, the captured barcode image may have inconsistent lighting across the barcode. For example, the following image shows a barcode image with uneven lighting.

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/uneven-illumination.png" alt="Sample barcode image with uneven lighting" width="50%" /></p>
   <p>Figure 1 – Sample barcode image with uneven lighting</p>
</div>

Converting the original barcode image to a binarized image is a very important step. DBR provides two binarization modes:
    - `BM_THRESHOLD`: uses a global threshold to binarize the image. If the gray value of the pixel is less than the threshold, it will be black in the binary image, otherwise it will be white.
    - `BM_LOCAL_BLOCK`: use a threshold for a pixel based on a small region around it.

The following two images show the effects of `BM_THRESHOLD` (global thresholding) and `BM_LOCAL_BLOCK` (local thresholding).

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/dm-threshold.png" alt="Binarized image by global thresholding" width="50%" /></p>
   <p>Figure 2 – Binarized image by global thresholding</p>
</div>

<div align="center">
   <p><img src="assets/read-barcodes-with-uneven-lighting/dm-local-block.png" alt="Binarized image by local thresholding" width="50%" /></p>
   <p>Figure 3 – Binarized image by local thresholding</p>
</div>

Obviously, the local thresholding result is much better. Now we will demonstrate how to configure the `BinarizationModes` to use the `BM_LOCAL_BLOCK` binarization.

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
// Obtains the current runtime settings of DBR.
let rs = await scanner.getRuntimeSettings();
// Sets the binarization mode.
rs.binarizationModes[0] = Dynamsoft.DBR.EnumBinarizationMode.BM_LOCAL_BLOCK;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
// Fine-tunes some arguments of the first mode in `binarizationModes`
scanner.setModeArgument("binarizationModes", 0, "BlockSizeX", "0");
scanner.setModeArgument("binarizationModes", 0, "BlockSizeY", "0");
scanner.setModeArgument("binarizationModes", 0, "EnableFillBinaryVacancy", "1");
scanner.setModeArgument("binarizationModes", 0, "ThresholdCompensation", "10");
await scanner.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set a binarization mode
settings.binarizationModes = new int[]{ EnumBinarizationMode.BM_LOCAL_BLOCK };
// Update the settings.
reader.updateRuntimeSettings(settings);
// Fine-tune some arguments of the first mode in `binarizationModes`
reader.setModeArgument("binarizationModes", 0, "BlockSizeX", "0");
reader.setModeArgument("binarizationModes", 0, "BlockSizeY", "0");
reader.setModeArgument("binarizationModes", 0, "EnableFillBinaryVacancy", "1");
reader.setModeArgument("binarizationModes", 0, "ThresholdCompensation", "10");
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Set a binarization mode
settings.binarizationModes = @[@(EnumBinarizationModeLocalBlock)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
// Fine-tune some arguments of the first mode in `binarizationModes`
[reader setModeArgument:@"binarizationModes" index:0 argumentName:@"BlockSizeX" argumentValue:@"0" error:nil];
[reader setModeArgument:@"binarizationModes" index:0 argumentName:@"BlockSizeY" argumentValue:@"0" error:nil];
[reader setModeArgument:@"binarizationModes" index:0 argumentName:@"EnableFillBinaryVacancy" argumentValue:@"1" error:nil];
[reader setModeArgument:@"binarizationModes" index:0 argumentName:@"ThresholdCompensation" argumentValue:@"10" error:nil];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Set a binarization mode
settings?.binarizationModes = [EnumBinarizationMode.localBlock.rawValue]
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
// Fine-tune some arguments of the first mode in `binarizationModes`
try? reader.setModeArgument("binarizationModes", index: 0, argumentName: "BlockSizeX", argumentValue: "0")
try? reader.setModeArgument("binarizationModes", index: 0, argumentName: "BlockSizeY", argumentValue: "0")
try? reader.setModeArgument("binarizationModes", index: 0, argumentName: "EnableFillBinaryVacancy", argumentValue: "1")
try? reader.setModeArgument("binarizationModes", index: 0, argumentName: "ThresholdCompensation", argumentValue: "10")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.binarization_modes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK
dbr.update_runtime_settings(settings)
dbr.set_mode_argument("BinarizationModes", 0, "BlockSizeX", "0")
dbr.set_mode_argument("BinarizationModes", 0, "BlockSizeY", "0")
dbr.set_mode_argument("BinarizationModes", 0, "ThresholdCompensation", "10")
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.binarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.setModeArgument("BinarizationModes", 0, "BlockSizeX", "0");
reader.setModeArgument("BinarizationModes", 0, "BlockSizeY", "0");
reader.setModeArgument("BinarizationModes", 0, "ThresholdCompensation", "10");
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
settings.BinarizationModes[0] = EnumBinarizationMode.BM_LOCAL_BLOCK;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.SetModeArgument("BinarizationModes", 0, "BlockSizeX", "0", out errorMsg);
reader.SetModeArgument("BinarizationModes", 0, "BlockSizeY", "0", out errorMsg);
reader.SetModeArgument("BinarizationModes", 0, "ThresholdCompensation", "10", out errorMsg);
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
runtimeSettings->binarizationModes[0] = BM_LOCAL_BLOCK;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->SetModeArgument("BinarizationModes", 0, "BlockSizeX", "0", sError, 512);
reader->SetModeArgument("BinarizationModes", 0, "BlockSizeY", "0", sError, 512);
reader->SetModeArgument("BinarizationModes", 0, "ThresholdCompensation", "10", sError, 512);
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
runtimeSettings.binarizationModes[0] = BM_LOCAL_BLOCK;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "BlockSizeX", "0", sError, 512);
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "BlockSizeY", "0", sError, 512);
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "ThresholdCompensation", "10", sError, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
