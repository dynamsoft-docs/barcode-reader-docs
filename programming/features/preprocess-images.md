---   
layout: default-layout 
description: This article introduces how to perform image preprocessing according to scene characteristics to improve the success rate of DBR positioning code area
title: How to preprocess images based on different scenarios
keywords: image preprocessing
needAutoGenerateSidebar: false
permalink: /programming/features/preprocess-images.html
---

# How to preprocess images based on different scenarios

The default configuration of Dynamsoft Barcode Reader (DBR) can handle most common scenarios. However, there are still some specific scenarios where the default configuration of `DBR` cannot locate the code area for decoding. For these specific scenarios, `DBR` has built-in [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes) to configure the image preprocessing algorithm. For different scenarios, a specific pre-processing algorithm can effectively improve the success rate when detecting areas of interest. This article will detail how to choose the appropriate pre-processing mode according to the scenario.

## Image preprocessing mode

`DBR` provides multiple image preprocessing modes to deal with different situations. After configuring the preprocessing modes, we can judge the effectiveness and make adjustments by looking at the intermediate result `IRT_PREPROCESSED_IMAGE`, which is the pre-processed grayscale image, and `IRT_BINARIZED_IMAGE`, which is the binarized image. Below we will introduce the scenarios where one of the four modes `IPM_GRAY_EQUALIZE`, `IPM_GRAY_SMOOTH`, `IPM_SHARPEN_SMOOTH` and `IPM_MORPHOLOGY` helps.

- `IPM_GRAY_EQUALIZE`

Gray-level equalization, which is used to enhance the contrast of an image. The sample image below demonstrates the effect, before and after grayscale equalization. The colours of the DataMatrix code on the original image (left) is too similar to the background color, which would makes decoding, as is, more difficult. The picture on the right is the result of preprocessing through `IPM_GRAY_EQUALIZE`. The DataMatrix becomes much more pronounced, which will make the subsequent decoding process much easier.

![Before Equalizing][1]![After Equalizing][2]

This mode has an additional parameter `Sensitivity`, where the default value is 5, and the range is [1~9]. When you set `IPM_GRAY_EQUALIZE`, `DBR` does not necessarily perform equalization but will judge whether to perform it based on the gray distribution and `Sensitivity` of the image itself. The greater the value of `Sensitivity`, the more likely that `DBR` will perform the equalization process. Setting it to 9 means that gray-scale equalization must be performed while 1 means to skip the process.

- `IPM_GRAY_SMOOTH`

Grayscale smoothing, which is used to reduce image noise and texture. The following sample image shows a grayscale image with more noise and its corresponding binarized image. Obviously, there are many noises which will be bad for barcode reading.

![Grayscale Before Smoothing][3]![Binarized Before Smoothing][5]   

After configuring `IPM_GRAY_SMOOTH` for smoothing. The noise of the binarized image are well handled well as shown below.

![Grayscal After Smoothing][4]![Binarizedd After Smoothing][6]  

- `IPM_SHARPEN_SMOOTH`

Sharpening and smoothing are used to reduce blur. The following sample image demonstrates the effect before and after processing in this mode. It is obvious that the processed picture is much clearer.

![Before Sharpen-Smoothing][7]![After Sharpen-Smoothing][8]

- `IPM_MORPHOLOGY`

This mode improves the binarization process by eliminating noise and filling holes through corrosion and expansion operations. It is suitable for whe the barcode area is polluted or destroyed. The following sample image demonstrates the effect.

![Before Morphology][9]![After Morphology][10]  

## Combination of pre-processing modes

If the image to be processed is more complicated, you can use the above image preprocessing modes in combination. After configuring multiple modes through [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes), `DBR` will try each mode in sequence until the number of successful decoded codes meets the expected value (`ExpectedBarcodeCount`), or the algorithm combination is exhausted.

## Sample Code

- Using RuntimeSetting

<div class="sample-code-prefix"></div>
>- JavaScript
>- C
>- C++
>- C#
>- Java
>- Android
>- Objective-C
>- Swift
>- Python
>
>1. 
```javascript
```
2. 
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
runtimeSettings.furtherModes.imagePreprocessingModes[0] = IPM_GRAY_EQUALIZE;
runtimeSettings.furtherModes.imagePreprocessingModes[1] = IPM_GRAY_SMOOTH;
runtimeSettings.furtherModes.imagePreprocessingModes[2] = IPM_SHARPEN_SMOOTH;
runtimeSettings.furtherModes.imagePreprocessingModes[3] = IPM_MORPHOLOGY;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 0, "Sensitivity", "9", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 3, "MorphOperation", "Close", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7", sError, 512);
DBR_SetModeArgument(barcodeReader, "ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7", sError, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
3. 
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
runtimeSettings->furtherModes.imagePreprocessingModes[0] = IPM_GRAY_EQUALIZE;
runtimeSettings->furtherModes.imagePreprocessingModes[1] = IPM_GRAY_SMOOTH;
runtimeSettings->furtherModes.imagePreprocessingModes[2] = IPM_SHARPEN_SMOOTH;
runtimeSettings->furtherModes.imagePreprocessingModes[3] = IPM_MORPHOLOGY;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->SetModeArgument("ImagePreprocessingModes", 0, "Sensitivity", "9", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperation", "Close", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7", sError, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
4. 
```csharp
string errorMsg;
EnumErrorCode iRet = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (iRet != EnumErrorCode.DBR_SUCCESS)
{
    Console.WriteLine(errorMsg);
}
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.GetRuntimeSettings(); //Get the current RuntimeSettings
settings.FurtherModes.ImagePreprocessingModes[0] = EnumImagePreprocessingMode.IPM_GRAY_EQUALIZE;
settings.FurtherModes.ImagePreprocessingModes[1] = EnumImagePreprocessingMode.IPM_GRAY_SMOOTH;
settings.FurtherModes.ImagePreprocessingModes[2] = EnumImagePreprocessingMode.IPM_SHARPEN_SMOOTH;
settings.FurtherModes.ImagePreprocessingModes[3] = EnumImagePreprocessingMode.IPM_MORPHOLOGY;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.SetModeArgument("ImagePreprocessingModes", 0, "Sensitivity", "9", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 3, "MorphOperation", "Close", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7", out errorMsg);
reader.SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7", out errorMsg);
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
5. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.imagePreprocessingModes[0] = EnumImagePreprocessingMode.IPM_GRAY_EQUALIZE;
settings.furtherModes.imagePreprocessingModes[1] = EnumImagePreprocessingMode.IPM_GRAY_SMOOTH;
settings.furtherModes.imagePreprocessingModes[2] = EnumImagePreprocessingMode.IPM_SHARPEN_SMOOTH;
settings.furtherModes.imagePreprocessingModes[3] = EnumImagePreprocessingMode.IPM_MORPHOLOGY;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.setModeArgument("ImagePreprocessingModes", 0, "Sensitivity", "9");
reader.setModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10");
reader.setModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10");
reader.setModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5");
reader.setModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperation", "Close");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7");
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
6. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.imagePreprocessingModes[0] = EnumImagePreprocessingMode.IPM_GRAY_EQUALIZE;
settings.furtherModes.imagePreprocessingModes[1] = EnumImagePreprocessingMode.IPM_GRAY_SMOOTH;
settings.furtherModes.imagePreprocessingModes[2] = EnumImagePreprocessingMode.IPM_SHARPEN_SMOOTH;
settings.furtherModes.imagePreprocessingModes[3] = EnumImagePreprocessingMode.IPM_MORPHOLOGY;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
reader.setModeArgument("ImagePreprocessingModes", 0, "Sensitivity", "9");
reader.setModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10");
reader.setModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10");
reader.setModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5");
reader.setModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperation", "Close");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7");
reader.setModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7");
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH"); // Start decoding
// Add further process
```
7. 
```objc
NSError *err = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];//Get the current RuntimeSettings
settings.furtherModes.imagePreprocessingModes[0] = EnumImagePreprocessingModeGrayEqualize;
settings.furtherModes.imagePreprocessingModes[1] = EnumImagePreprocessingModeGraySmooth;
settings.furtherModes.imagePreprocessingModes[2] = EnumImagePreprocessingModeSharpenSmooth;
settings.furtherModes.imagePreprocessingModes[3] = EnumImagePreprocessingModeMorphology;
[reader updateRuntimeSettings:settings error:&err]; // Update RuntimeSettings with above setting
[reader setModeArgument:@"ImagePreprocessingModes" index:0 argumentName:@"Sensitivity" argumentValue:@"9" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:1 argumentName:@"SmoothBlockSizeX" argumentValue:@"10" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:1 argumentName:@"SmoothBlockSizeY" argumentValue:@"10" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:2 argumentName:@"SharpenBlockSizeX" argumentValue:@"5" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:2 argumentName:@"SharpenBlockSizeY" argumentValue:@"5" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:3 argumentName:@"MorphOperation" argumentValue:@"Close" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:3 argumentName:@"MorphOperationKernelSizeX" argumentValue:@"7" error:&err];
[reader setModeArgument:@"ImagePreprocessingModes" index:3 argumentName:@"MorphOperationKernelSizeY" argumentValue:@"7" error:&err];
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err]; // Start decoding
// Add further process
```
8. 
```swift
let reader = DynamsoftBarcodeReader()
let settings = try? reader.getRuntimeSettings() //Get the current RuntimeSettings
settings?.furtherModes.imagePreprocessingModes[0] = EnumImagePreprocessingMode.grayEqualize
settings?.furtherModes.imagePreprocessingModes[1] = EnumImagePreprocessingMode.graySmooth
settings?.furtherModes.imagePreprocessingModes[2] = EnumImagePreprocessingMode.sharpenSmooth
settings?.furtherModes.imagePreprocessingModes[3] = EnumImagePreprocessingMode.morphology
do {
    try reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
    try reader.setModeArgument("ImagePreprocessingModes", index:0, argumentName:"Sensitivity", argumentValue:"9")
    try reader.setModeArgument("ImagePreprocessingModes", index:1, argumentName:"SmoothBlockSizeX", argumentValue:"10")
    try reader.setModeArgument("ImagePreprocessingModes", index:1, argumentName:"SmoothBlockSizeY", argumentValue:"10")
    try reader.setModeArgument("ImagePreprocessingModes", index:2, argumentName:"SharpenBlockSizeX", argumentValue:"5")
    try reader.setModeArgument("ImagePreprocessingModes", index:2, argumentName:"SharpenBlockSizeY", argumentValue:"5")
    try reader.setModeArgument("ImagePreprocessingModes", index:3, argumentName:"MorphOperation", argumentValue:"Close")
    try reader.setModeArgument("ImagePreprocessingModes", index:3, argumentName:"MorphOperationKernelSizeX", argumentValue:"7")
    try reader.setModeArgument("ImagePreprocessingModes", index:3, argumentName:"MorphOperationKernelSizeY", argumentValue:"7")
    let result = try reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH") // Add further process
} catch let err {
}
// Add further process
```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.image_preprocessing_modes[0] = EnumImagePreprocessingMode.IPM_GRAY_EQUALIZE
settings.image_preprocessing_modes[1] = EnumImagePreprocessingMode.IPM_GRAY_SMOOTH
settings.image_preprocessing_modes[2] = EnumImagePreprocessingMode.IPM_SHARPEN_SMOOTH
settings.image_preprocessing_modes[3] = EnumImagePreprocessingMode.IPM_MORPHOLOGY
dbr.update_runtime_settings(settings)
dbr.set_mode_argument("ImagePreprocessingModes", 0, "Sensitivity", "9")
dbr.set_mode_argument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10")
dbr.set_mode_argument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10")
dbr.set_mode_argument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5")
dbr.set_mode_argument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5")
dbr.set_mode_argument("ImagePreprocessingModes", 3, "MorphOperation", "Close")
dbr.set_mode_argument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7")
dbr.set_mode_argument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7")
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```

- Using a JSON template

<div class="sample-code-prefix"></div>
>- JavaScript
>- C
>- C++
>- C#
>- Java
>- Android
>- Objective-C
>- Swift
>- Python
>
>1. 
```javascript
```
2. 
```c
int iRet = -1;
char errorBuf[512];
iRet = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    printf("%s\n", errorBuf);
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitRuntimeSettingsWithString(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", CM_OVERWRITE, errorBuf, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
3. 
```cpp
char errorBuf[512];
int iRet = -1;
iRet = dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    cout << errorBuf << endl;
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", CM_OVERWRITE, errorBuf, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
4. 
```csharp
string errorMsg;
EnumErrorCode iRet = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (iRet != EnumErrorCode.DBR_SUCCESS)
{
    Console.WriteLine(errorMsg);
}
BarcodeReader reader = new BarcodeReader();
reader.InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", EnumConflictMode.CM_OVERWRITE, out errorMsg);
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
5. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", EnumConflictMode.CM_OVERWRITE);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
6. 
```java
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", EnumConflictMode.CM_OVERWRITE);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH"); // Start decoding
// Add further process
```
7. 
```objc
NSError* error = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
[reader initRuntimeSettingsWithString:@"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}" confictMode:EnumConflictModeOverwrite error:&error];
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err]; // Start decoding
// Add further process
```
8. 
```swift
let reader = DynamsoftBarcodeReader()
try? reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", confictMode:EnumConflictMode.overwrite)
let result = try? reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH"); // Start decoding
// Add further process
```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
dbr.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1","ImagePreprocessingModes": [{"Mode": "IPM_GRAY_EQUALIZE","Sensitivity": 9},{"Mode": "IPM_GRAY_SMOOTH","SmoothBlockSizeX": 10,"SmoothBlockSizeY": 10},{"Mode": "IPM_SHARPEN_SMOOTH","SharpenBlockSizeX": 5,"SharpenBlockSizeY": 5},{"Mode": "IPM_MORPHOLOGY","MorphOperation": "Close","MorphOperationKernelSizeX": 7,"MorphOperationKernelSizeY": 7}]}}')
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```

[1]:assets/preprocess-images/gray-equalize-sample-1.png
[2]:assets/preprocess-images/gray-equalize-sample-2.png
[3]:assets/preprocess-images/gray-smooth-sample-1.png
[4]:assets/preprocess-images/gray-smooth-sample-2.png
[5]:assets/preprocess-images/gray-smooth-sample-3.png
[6]:assets/preprocess-images/gray-smooth-sample-4.png
[7]:assets/preprocess-images/before-sharpen-sample.png
[8]:assets/preprocess-images/after-sharpen-sample.png
[9]:assets/preprocess-images/before-close-sample.png
[10]:assets/preprocess-images/after-close-sample.png
