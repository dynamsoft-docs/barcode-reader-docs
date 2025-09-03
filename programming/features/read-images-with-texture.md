---
layout: default-layout
title: Read images with texture - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes with texture in Dynamsoft Barcode Reader SDK.
keywords: texture, barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Barcodes from Images with Different Textures

In some scenes, the background of images may appear textured, such as a patterned background, screen stripes, etc. As shown below, the barcode background has an odd texture due to the computer screen it is being displayed on.

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/texture-image-sample.png" alt="Sample barcode image with texture" width="50%" /></p>
   <p>Figure 1 – Sample barcode image with texture</p>
</div>

This may extend the barcode localization time or even lead to localization errors. The texture detection feature of DBR works on images with textured backgrounds. The following two images demonstrate the binarized images used for localization without and with texture detection enabled:

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/binary-before-texture-detect.png" alt="Sample barcode image with texture" width="50%"/></p>
   <p>Figure 2 – Binarized image without texture detection enabled</p>
</div>

<div align="center">
   <p><img src="assets/read-barcodes-with-texture/binary-after-texture-detect.png" alt="Sample barcode image with texture" width="50%"/></p>
   <p>Figure 3 – Binarized image with texture detection enabled</p>
</div>

We can configure one or more [`TextureDetectionModes`]({{ site.parameters_reference }}texture-detection-modes.html) in `PublicRuntimeSettings.furtherModes.textureDetectionModes` to enable texture detection feature.

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
// Sets the text detection mode.
rs.furtherModes.textureDetectionModes[0] = Dynamsoft.DBR.EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
// Fine-tunes `Sensitivity` of the first mode in `binarizationModes`
scanner.setModeArgument("TextureDetectionModes", 0, "Sensitivity", "5");
await scanner.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Enable a texture detection mode
settings.furtherModes.textureDetectionModes = new int[]{ EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION };
// Update the settings.
reader.updateRuntimeSettings(settings);
// Fine-tune the `Sensitivity` parameter value of the first mode in `TextureDetectionModes`
reader.setModeArgument("TextureDetectionModes", 0, "Sensitivity", "5");
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Enable a texture detection mode
settings.furtherModes.textureDetectionModes = @[@(EnumTextureDetectionModeGeneralWidthConcentration)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
// Fine-tune the `Sensitivity` parameter value of the first mode in `TextureDetectionModes`
[reader setModeArgument:@"TextureDetectionModes" index:0 argumentName:@"Sensitivity" argumentValue:@"5" error:nil];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Enable a texture detection mode
settings?.furtherModes.textureDetectionModes = [EnumTextureDetectionMode.generalWidthConcentration]
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
// Fine-tune the `Sensitivity` parameter value of the first mode in `TextureDetectionModes`
try? reader.setModeArgument("TextureDetectionModes", index: 0, argumentName: "Sensitivity", argumentValue: "5")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.texture_detection_modes[0] = EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION
dbr.update_runtime_settings(settings)
dbr.set_mode_argument("TextureDetectionModes", 0, "Sensitivity", "5")
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.colourConversionModes[0] = EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.setModeArgument("TextureDetectionModes", 0, "Sensitivity", "5");
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
settings.FurtherModes.TextureDetectionModes[0] = EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.SetModeArgument("TextureDetectionModes", 0, "Sensitivity", "5", out errorMsg);
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
runtimeSettings->furtherModes.colourConversionModes[0] = TDM_GENERAL_WIDTH_CONCENTRATION;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->SetModeArgument("TextureDetectionModes", 0, "Sensitivity", "5", sError, 512);
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
runtimeSettings.furtherModes.colourConversionModes[0] = TDM_GENERAL_WIDTH_CONCENTRATION;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_SetModeArgument(barcodeReader, "TextureDetectionModes", 0, "Sensitivity", "5", sError, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
