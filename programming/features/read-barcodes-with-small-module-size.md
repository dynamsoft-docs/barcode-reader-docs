---
layout: default-layout
title: Read barcodes with small module size - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes with small module size in Dynamsoft Barcode Reader SDK.
keywords: small barcode, small module size
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-barcodes-with-small-module-size.html
---

# How to Read Barcodes with Small Module Size

A module is the narrowest "bar" in a 1D barcode, or the smallest "box" in a 2D barcode. Keep in mind this "bar" or "box" can be either light or dark. The figure below illustrates the module size of 1D and 2D barcodes.

<div align="center">
   <p><img src="assets/read-barcodes-with-small-module-size/sample-barcode-with-small-module-size.png" alt="Module size of barcodes" width="50%" /></p>
   <p>Figure 1 – Module size of 1D and 2D barcodes</p>
</div>

In some scenarios, the barcode is very small relative to the entire image, and its module size is even smaller, making it difficult for the library to read the barcode. In this case, we can use the parameter `ScaleUpModes` in to enlarge the barcode symbol for easier processing.

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
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Allow js to directly process 4K images in canvas without compressing them.
// Please test on the target devices. On devices with limited memory, the settings can lead to out of memory.
scanner.maxCvsSideLength = 4096;
// Obtains the current runtime settings of DBR.
let rs = await scanner.getRuntimeSettings();
// Do not scale down images equal or smaller than 4K
rs.scaleDownThreshold = 4096;
// Sets the scale-up mode.
rs.scaleUpModes[0] = Dynamsoft.DBR.EnumScaleUpMode.SUM_LINEAR_INTERPOLATION;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
// Fine-tunes some arguments of the first mode in `scaleUpModes`
scanner.setModeArgument("scaleUpModes", 0, "AcuteAngleWithXThreshold", "0");
scanner.setModeArgument("scaleUpModes", 0, "ModuleSizeThreshold", "3");
scanner.setModeArgument("scaleUpModes", 0, "TargetModuleSize", "8");
await scanner.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Enable a scale up mode
settings.scaleUpModes = new int[]{ EnumScaleUpMode.SUM_LINEAR_INTERPOLATION };
// Update the settings.
reader.updateRuntimeSettings(settings);
// Fine-tune some arguments of the first mode in `ScaleUpModes`
reader.setModeArgument("scaleUpModes", 0, "AcuteAngleWithXThreshold", "0");
reader.setModeArgument("scaleUpModes", 0, "ModuleSizeThreshold", "3");
reader.setModeArgument("scaleUpModes", 0, "TargetModuleSize", "8");
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Enable a scale up mode
settings.scaleUpModes = @[@(EnumScaleUpModeLinearInterpolation)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
// Fine-tune some arguments of the first mode in `ScaleUpModes`
[reader setModeArgument:@"scaleUpModes" index:0 argumentName:@"AcuteAngleWithXThreshold" argumentValue:@"0" error:nil];
[reader setModeArgument:@"scaleUpModes" index:0 argumentName:@"ModuleSizeThreshold" argumentValue:@"3" error:nil];
[reader setModeArgument:@"scaleUpModes" index:0 argumentName:@"TargetModuleSize" argumentValue:@"8" error:nil];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Enable a scale up mode
settings!.scaleUpModes = [EnumScaleUpMode.linearInterpolation.rawValue]
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
// Fine-tune some arguments of the first mode in `ScaleUpModes`
try? reader.setModeArgument("scaleUpModes", index: 0, argumentName: "AcuteAngleWithXThreshold", argumentValue: "0")
try? reader.setModeArgument("scaleUpModes", index: 0, argumentName: "ModuleSizeThreshold", argumentValue: "3")
try? reader.setModeArgument("scaleUpModes", index: 0, argumentName: "TargetModuleSize", argumentValue: "8")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.scale_up_modes[0] = EnumScaleUpMode.SUM_LINEAR_INTERPOLATION
dbr.update_runtime_settings(settings)
dbr.set_mode_argument("ScaleUpModes", 0, "AcuteAngleWithXThreshold", "0")
dbr.set_mode_argument("ScaleUpModes", 0, "ModuleSizeThreshold", "3")
dbr.set_mode_argument("ScaleUpModes", 0, "TargetModuleSize", "8")
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.scaleUpModes[0] = EnumScaleUpMode.SUM_LINEAR_INTERPOLATION;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.setModeArgument("ScaleUpModes", 0, "AcuteAngleWithXThreshold", "0");
reader.setModeArgument("ScaleUpModes", 0, "ModuleSizeThreshold", "3");
reader.setModeArgument("ScaleUpModes", 0, "TargetModuleSize", "8");
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
settings.ScaleUpModes[0] = EnumScaleUpMode.SUM_LINEAR_INTERPOLATION;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.SetModeArgument("ScaleUpModes", 0, "AcuteAngleWithXThreshold", "0", out errorMsg);
reader.SetModeArgument("ScaleUpModes", 0, "ModuleSizeThreshold", "3", out errorMsg);
reader.SetModeArgument("ScaleUpModes", 0, "TargetModuleSize", "8", out errorMsg);
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
runtimeSettings->scaleUpModes[0] = SUM_LINEAR_INTERPOLATION;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->SetModeArgument("ScaleUpModes", 0, "AcuteAngleWithXThreshold", "0", sError, 512);
reader->SetModeArgument("ScaleUpModes", 0, "ModuleSizeThreshold", "3", sError, 512);
reader->SetModeArgument("ScaleUpModes", 0, "TargetModuleSize", "8", sError, 512);
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
runtimeSettings.scaleUpModes[0] = SUM_LINEAR_INTERPOLATION;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_SetModeArgument(barcodeReader, "ScaleUpModes", 0, "AcuteAngleWithXThreshold", "0", sError, 512);
DBR_SetModeArgument(barcodeReader, "ScaleUpModes", 0, "ModuleSizeThreshold", "3", sError, 512);
DBR_SetModeArgument(barcodeReader, "ScaleUpModes", 0, "TargetModuleSize", "8", sError, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```

Read more about [how to read barcodes which seem blurry](https://www.dynamsoft.com/barcode-dataset/blurry-barcodes/).
