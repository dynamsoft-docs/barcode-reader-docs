---
layout: default-layout
title: Read barcodes with imbalanced colour - Dynamsoft Barcode Reader SDK
description: This page describes how to read huge barcodes with imbalanced colour  in Dynamsoft Barcode Reader SDK.
keywords: imbalanced colour barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Barcodes with Imbalanced Colour

As we all know, any color is composed of red, blue and green (RGB). If the image is a colour image, DBR will convert it to grayscale first for further processing.

```math
Gray = Red*RedChannelWeight + Green*GreenChannelWeight + Blue*BlueChannelWeight
```

The default weights in DBR are suitable for most cases. However, some color images may produce poor grayscale images based on the default weights. For example, the image below is a color image with imbalanced colour.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/colour-conversion-original-image.png" alt="barcode colour image" width="25%" /></p>
   <p>Figure 1 – Sample barcode colour image</p>
</div>

The default grayscale image converted by DBR is shown below.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/default-gray-img.png" alt="barcode gray image using default" width="25%" /></p>
   <p>Figure 2 – Sample barcode gray image using default mode</p>
</div>

The image below shows the grayscale image converted by DBR using only red channel.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/gray-img-only-red.png" alt="barcode gray image using red" width="25%" /></p>
   <p>Figure 3 – Sample barcode gray image using only red channel</p>
</div>

As we can see, the gray image converted using only red channel is much better than the default gray image. Now we will demonstrate how to configure the `colourConversionModes` to adjust the colour channel weights used for converting a colour image to a grayscale image.

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
// Sets the text filter mode.
rs.furtherModes.colourConversionModes[0] = Dynamsoft.DBR.EnumColourConversionMode.CICM_GENERAL;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
// Fine-tunes some arguments of the first mode in `colourConversionModes`
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
scanner.setModeArgument("colourConversionModes", 0, "RedChannelWeight", "1000");
scanner.setModeArgument("colourConversionModes", 0, "GreenChannelWeight", "0");
scanner.setModeArgument("colourConversionModes", 0, "BlueChannelWeight", "0");
await scanner.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Enable a colour conversion mode
settings.furtherModes.colourConversionModes = new int[]{ EnumColourConversionMode.CICM_GENERAL };
// Update the settings.
reader.updateRuntimeSettings(settings);
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
reader.setModeArgument("colourConversionModes", 0, "RedChannelWeight", "1000");
reader.setModeArgument("colourConversionModes", 0, "GreenChannelWeight", "0");
reader.setModeArgument("colourConversionModes", 0, "BlueChannelWeight", "0");
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Enable a colour conversion mode
settings.furtherModes.colourConversionModes = @[@(EnumColourConversionModeGeneral)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"RedChannelWeight" argumentValue:@"1000" error:nil];
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"GreenChannelWeight" argumentValue:@"0" error:nil];
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"BlueChannelWeight" argumentValue:@"0" error:nil];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Enable a colour conversion mode
settings!.furtherModes.colourConversionModes = [EnumColourConversionMode.general]
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "RedChannelWeight", argumentValue: "1000")
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "GreenChannelWeight", argumentValue: "0")
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "BlueChannelWeight", argumentValue: "0")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.colour_conversion_modes[0] = EnumColourConversionMode.CICM_GENERAL
dbr.update_runtime_settings(settings)
# In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
dbr.set_mode_argument("ColourConversionModes", 0, "RedChannelWeight", "1000")
dbr.set_mode_argument("ColourConversionModes", 0, "GreenChannelWeight", "0")
dbr.set_mode_argument("ColourConversionModes", 0, "BlueChannelWeight", "0")
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.colourConversionModes[0] = EnumColourConversionMode.CICM_GENERAL;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
reader.setModeArgument("ColourConversionModes", 0, "RedChannelWeight", "1000");
reader.setModeArgument("ColourConversionModes", 0, "GreenChannelWeight", "0");
reader.setModeArgument("ColourConversionModes", 0, "BlueChannelWeight", "0");
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
settings.FurtherModes.ColourConversionModes[0] = EnumColourConversionMode.CICM_GENERAL;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
reader.SetModeArgument("ColourConversionModes", 0, "RedChannelWeight", "1000", out errorMsg);
reader.SetModeArgument("ColourConversionModes", 0, "GreenChannelWeight", "0", out errorMsg);
reader.SetModeArgument("ColourConversionModes", 0, "BlueChannelWeight", "0", out errorMsg);
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
runtimeSettings->furtherModes.colourConversionModes[0] = CICM_GENERAL;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
reader->SetModeArgument("ColourConversionModes", 0, "RedChannelWeight", "1000", sError, 512);
reader->SetModeArgument("ColourConversionModes", 0, "GreenChannelWeight", "0", sError, 512);
reader->SetModeArgument("ColourConversionModes", 0, "BlueChannelWeight", "0", sError, 512);
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
runtimeSettings.furtherModes.colourConversionModes[0] = CICM_GENERAL;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
// In this case, we set RedChannelWeight to 1000 while GreenChannelWeight and BlueChannelWeight to 0 which means using red channel only
DBR_SetModeArgument(barcodeReader, "ColourConversionModes", 0, "RedChannelWeight", "1000", sError, 512);
DBR_SetModeArgument(barcodeReader, "ColourConversionModes", 0, "GreenChannelWeight", "0", sError, 512);
DBR_SetModeArgument(barcodeReader, "ColourConversionModes", 0, "BlueChannelWeight", "0", sError, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
