---   
layout: default-layout
title: Control the termination phase of DBR
description: This article describes how to use runtime settings to make DBR terminate at a certain stage.
needAutoGenerateSidebar: true
keywords: terminate timeout
breadcrumbText: Termination Control
permalink: /programming/features/control-terminate-phase.html
---

# Control when to terminate a decoding process

Typically, DBR will terminate a decoding process after the barcode is decoded or the process has failed. In some cases we may want the process to terminate earlier than that. To do this, we use either the parameter [ `TerminatePhase` ]({{ site.parameters_reference }}terminate-phase.html) or the parameter [ `Timeout` ]({{ site.parameters_reference }}time-out.html). The former specifies the stage to terminate the process while the latter specifies the maximum time allowed for the process.

## TerminatePhase

This parameter specifies a certain stage to terminate the decoding. By default, the decoding process will only terminate after all these stages are completed and the barcode is recognized (`TP_BARCODE_RECOGNIZED`). To terminate early, assign one of the first 5 values in the following table to [ `TerminatePhase` ]({{ site.parameters_reference }}terminate-phase.html):

|Enumeration name|Notes|
|---|----|
|TP_REGION_PREDETECTED | Terminate after the barcode region is pre-detected. |
|TP_IMAGE_PREPROCESSED | Terminate after the image is preprocessed. |
|TP_IMAGE_BINARIZED | Terminate after the image is binarized. |
|TP_BARCODE_LOCALIZED | Terminate after the barcode zone is localized. |
|TP_BARCODE_TYPE_DETERMINED | Terminate after the barcode type is identified. |
|TP_BARCODE_RECOGNIZED | Terminate after the barcode is recognized, the default value. |

After the termination, we can acquire information generated in the process as `Intermediate Results` which include the following:

> Note that for the JavaScript Edition, the intermediate result is only available when decoding an image and not a video stream.

| Enumeration name | Notes | Available in JavaScript Edition |
|---|----|---|
| IRT_NO_RESULT  | No information at all. | NA |
| IRT_ORIGINAL_IMAGE  | The original image processed by the barcode reader. | Yes |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE  | Converted grayscale image based on the original image. | Yes |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE  | Transformed grayscale image (e.g. color inversion). | Yes |
| IRT_PREDETECTED_REGION  | The coordinates of the predetected region. | No |
| IRT_PREPROCESSED_IMAGE  | The preprocessed image. | Yes |
| IRT_BINARIZED_IMAGE  | The binarized image. | Yes |
| IRT_TEXT_ZONE  | Coordinates of the zones of text found on the image. | No |
| IRT_CONTOUR  | Contours found on the image that surrounds different areas on the image. | No |
| IRT_LINE_SEGMENT  | Detected line segments. | No |
| IRT_TYPED_BARCODE_ZONE  | Coordinates of the barcode zones with determined barcode type(s). | No |
| IRT_PREDETECTED_QUADRILATERAL  | Coordinates of the predetected quadrilaterals. | No |

The following code illustrates how it's done:

<div class="sample-code-prefix template2"></div>
   >- Javascript
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
// Sets the termination phase.
rs.terminatePhase = Dynamsoft.DBR.EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED;
// Sets the intermidate result types.
rs.intermediateResultTypes =
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_ORIGINAL_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_BINARIZED_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_TRANSFORMED_GRAYSCALE_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_PREPROCESSED_IMAGE;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
const interval = setInterval(async() => {
    try {
        // Shows the intermediate results (images) on the page.
        let cvss = await scanner.getIntermediateCanvas();
        if (cvss.length > 0) {
            for (let cvs of cvss) {
                document.body.appendChild(cvs);
            }
            scanner.destroyContext();
            clearInterval(interval);
        }
    } catch (ex) {
        console.error(ex);
    }
}, 1000);
await scanner.show();
```
>
```java
// Obtains the current runtime settings of DBR.
PublicRuntimeSettings rs = reader.getRuntimeSettings();
// Sets the termination phase.
rs.terminatePhase = EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED;
// Sets the intermidate result types.
rs.intermediateResultTypes =
    EnumIntermediateResultType.IRT_ORIGINAL_IMAGE |
    EnumIntermediateResultType.IRT_BINARIZED_IMAGE |
    EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE |
    EnumIntermediateResultType.IRT_TRANSFORMED_GRAYSCALE_IMAGE |
    EnumIntermediateResultType.IRT_PREPROCESSED_IMAGE;
rs.intermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_FILESYSTEM;
// Updates the settings.
reader.updateRuntimeSettings(rs);
reader.setModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-FOLDER-PATH");
reader.setModeArgument("IntermediateResultSavingMode", 0, "RecordsetSizeOfLatestImages", "1");
// Decodes the image.
reader.decodeFile("YOUR-IMAGE-FILE-PATH");
```
>
```objc
NSError* err = nil;
// Obtains the current runtime settings of DBR.
iPublicRuntimeSettings* rs = [reader getRuntimeSettings:&err];
// Sets the termination phase.
rs.terminatePhase = EnumTerminatePhaseDetermined;
// Sets the intermidate result types.
rs.intermediateResultTypes =
    EnumIntermediateResultTypeOriginalImage |
    EnumIntermediateResultTypeBinarizedImage |
    EnumIntermediateResultTypeColourConvertedGrayImage |
    EnumIntermediateResultTypeTransformedGrayscaleImage |
    EnumIntermediateResultTypePreprocessedImage;
rs.intermediateResultSavingMode = EnumIntermediateResultSavingModeFileSystem;
// Updates the settings.
[reader updateRuntimeSettings:rs error:&err];
[reader setModeArgument:@"IntermediateResultSavingMode" index:0 argumentName:@"FolderPath" argumentValue:@"YOUR-FOLDER-PATH" error:&err];
[reader setModeArgument:@"IntermediateResultSavingMode" index:0 argumentName:@"RecordsetSizeOfLatestImages" argumentValue:@"1" error:&err];
// Decodes the image.
[reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err];
```
>
```swift
// Obtains the current runtime settings of DBR.
let rs = try? reader.getRuntimeSettings()
// Sets the termination phase.
rs.terminatePhase = EnumTerminatePhase.Determined
// Sets the intermidate result types.
rs.intermediateResultTypes =
    EnumIntermediateResultType.originalImage |
    EnumIntermediateResultType.binarizedImage |
    EnumIntermediateResultType.colourConvertedGrayImage |
    EnumIntermediateResultType.transformedGrayscaleImage |
    EnumIntermediateResultType.preprocessedImage
rs.intermediateResultSavingMode = EnumIntermediateResultSavingMode.fileSystem
// Updates the settings.
try? reader.updateRuntimeSettings(rs!)
try? reader.setModeArgument("IntermediateResultSavingMode", index:0, argumentName:"FolderPath", argumentValue:"YOUR-FOLDER-PATH")
try? reader.setModeArgument("IntermediateResultSavingMode", index:0, argumentName:"RecordsetSizeOfLatestImages", argumentValue:"1")
// Decodes the image.
try? reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
# Sets the termination phase
settings.terminate_phase = EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED
# Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediate_result_types = EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE
# Save intermediate result to both file system and memory
settings.intermediate_result_saving_mode = EnumIntermediateResultSavingMode.IRSM_FILESYSTEM
dbr.update_runtime_settings(settings)
# Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
dbr.set_mode_argument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH")
dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# After decoding, the intermediate results can be found at "YOUR-SAVING-PATH"
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Sets the termination phase
settings.terminatePhase = EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED;
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
settings.intermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_FILESYSTEM;
// Update RuntimeSettings with above settings
reader.updateRuntimeSettings(settings);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader.setModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH");
reader.decodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the intermediate results can be found at "YOUR-SAVING-PATH"
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
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
// Sets the termination phase
settings.TerminatePhase = EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED;
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.IntermediateResultTypes = (int)(EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE);
// Save intermediate result to both file system and memory
settings.IntermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_FILESYSTEM;
// Update RuntimeSettings with above settings
reader.UpdateRuntimeSettings(settings);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader.SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", out errorMsg);
reader.DecodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the intermediate results can be found at "YOUR-SAVING-PATH"
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
PublicRuntimeSettings runtimeSettings;
reader->GetRuntimeSettings(&runtimeSettings);
// Sets the termination phase
runtimeSettings.terminatePhase = TP_BARCODE_TYPE_DETERMINED;
// Set binarized image and localized barcode zone of the intermediate result types to be saved
runtimeSettings.intermediateResultTypes = IRT_BINARIZED_IMAGE | IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
runtimeSettings.intermediateResultSavingMode = IRSM_FILESYSTEM;
// Update RuntimeSettings with above settings
reader->UpdateRuntimeSettings(&runtimeSettings, errorBuf, 512);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader->SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", errorBuf, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the intermediate results can be found at "YOUR-SAVING-PATH"
// Add further process
```
```c
int iRet = -1;
char errorBuf[512];
iRet = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    printf("%s\n", errorBuf);
}
void* reader = DBR_CreateInstance();
PublicRuntimeSettings runtimeSettings;
DBR_GetRuntimeSettings(reader, &runtimeSettings);
// Sets the termination phase
runtimeSettings.terminatePhase = TP_BARCODE_TYPE_DETERMINED;
// Set binarized image and localized barcode zone of the intermediate result types to be saved
runtimeSettings.intermediateResultTypes = IRT_BINARIZED_IMAGE | IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
runtimeSettings.intermediateResultSavingMode = IRSM_FILESYSTEM;
// Update RuntimeSettings with above settings
DBR_UpdateRuntimeSettings(reader, &runtimeSettings, errorBuf, 512);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
DBR_SetModeArgument(reader, "IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", errorBuf, 512);
DBR_DecodeFile(reader, "YOUR-IMAGE-FILE-PATH", "");
// After decoding, the intermediate results can be found at "YOUR-SAVING-PATH"
// Add further process
```

### Timeout

This parameter controls the timeout for an individual decoding process in milliseconds. When the timeout occurs, the decoding will be terminated.

Allowed values are between 0 and 0x7fffffff. The default value is 10000.

The timeout setting is helpful in multi-image decoding situations where some images may take a long time to process. With proper timeout, we can balance the tradeoff between speed and read rate.

> The timeout setting is especially useful when decoding barcodes from consecutive video frames, where the same barcode appears in multiple frame images, and it takes much less time to read it in a clear frame, meaning blurry frames should be skipped fast.

The following code illustrates how to set `Timeout`:

<div class="sample-code-prefix template2"></div>
   >- Javascript
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
(async() => {
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    // Obtains the current runtime settings of DBR.
    let rs = await scanner.getRuntimeSettings();
    // Sets timeout to 1000 milliseconds.
    rs.timeout = 1000;
    // Updates the settings.
    await scanner.updateRuntimeSettings(rs);
    scanner.onUniqueRead = (txt, result) => {
        alert(txt);
    };
    await scanner.show();
})();
```
>
```java
BarcodeReader reader = new BarcodeReader();
// Obtains the current runtime settings of DBR.
PublicRuntimeSettings rs = reader.getRuntimeSettings();
// Sets timeout to 1000 milliseconds.
rs.timeout = 1000;
// Updates the settings.
reader.updateRuntimeSettings(rs);
```
>
```objc
NSError* err = nil;
DBRBarcodeReader* reader = [[DBRBarcodeReader alloc] init];
// Obtains the current runtime settings of DBR.
iPublicRuntimeSettings* rs = [reader getRuntimeSettings:&err];
// Sets timeout to 1000 milliseconds.
rs.timeout = 1000;
// Updates the settings.
[reader updateRuntimeSettings:rs error:&err];
```
>
```swift
let reader = DynamsoftBarcodeReader();
// Obtains the current runtime settings of DBR.
let rs = try? reader.getRuntimeSettings();
// Sets timeout to 1000 milliseconds.
rs?.timeout = 1000;
// Updates the settings.
try? reader.updateRuntimeSettings(rs!);
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.timeout = 1000
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.timeout = 1000;
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
settings.Timeout = 1000;
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
runtimeSettings->timeout = 1000;
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
runtimeSettings.timeout = 1000;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
