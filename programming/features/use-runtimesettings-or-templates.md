---   
layout: default-layout
description: This article introduces two ways to configure DBR, RuntimeSettings and Json template, and their syntax rules.
title: Use RuntimeSettings or Templates
keywords: DBR RuntimeSettings Json Template ImageParameter FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/use-runtimesettings-or-templates.html
---

# Use RuntimeSettings or Templates

DBR provides two ways for configuration: via `RuntimeSettings` or via a JSON template.

* [RuntimeSettings](#runtimesettings)

  `RuntimeSettings` is an object that manages various parameters during runtime. If you need to *dynamically* configure the reading process, use `RuntimeSettings`.

  However, bear in mind that `RuntimeSettings` doesn't provide all the available configuration options of the SDK.

* [JSON Templates](#json-template)

  With a JSON template, you can make use of all the configuration options that DBR offers.
  
  However, compared with `RuntimeSettings`, a template is static and can't be changed. If you need to use different settings for different scenarios, you can define a few templates and specify the proper one to use at runtime.

## RuntimeSettings

`RuntimeSettings` is an object that manages various runtime settings of the DBR SDK that determine how barcode reading is done. The following shows how to use it.

Basic steps:

1. Get the current value of the `RuntimeSettings` object
2. Change one or several settings
3. Update the `RuntimeSettings` object with the changed copy for the changes to take effect

The following code snippet demonstrates how to specify barcode formats with `RuntimeSettings`.  

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
// Specifies a license.
Dynamsoft.DBR.BarcodeScanner.license = 'YOUR-LICENSE-KEY';
// Creates a BarcodeScanner instance.
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Obtains the current runtime settings.
let rs = await scanner.getRuntimeSettings();
// Sets the barcode format(s).
rs.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
```
>
```java
// Creates a BarcodeReader instance.
BarcodeReader reader = new BarcodeReader();
// Obtains the current runtime settings.
PublicRuntimeSettings rs = reader.getRuntimeSettings();
// Sets the barcode format(s).
rs.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE;
// Updates the settings.
reader.updateRuntimeSettings(rs);
```
>
```objc
NSError* err = nil;
// Creates a BarcodeReader instance.
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
// Obtains the current runtime settings.
iPublicRuntimeSettings* rs = [reader getRuntimeSettings:&err];
// Sets the barcode format(s).
rs.barcodeFormatIds = EnumBarcodeFormatQRCODE;
// Updates the settings.
[reader updateRuntimeSettings:rs error:&err];
```
>
```swift
// Creates a BarcodeReader instance.
let reader = DynamsoftBarcodeReader()
// Obtains the current runtime settings.
let rs = try? reader.getRuntimeSettings()
// Sets the barcode format(s).
rs?.barcodeFormatIds = EnumBarcodeFormatQRCODE
// Updates the settings.
try? reader.updateRuntimeSettings(rs)
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_QR_CODE
settings.barcode_format_ids_2 = EnumBarcodeFormat.BF2_POSTALCODE
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE;
settings.barcodeFormatIds_2 = EnumBarcodeFormat_2.BF2_POSTALCODE;
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
settings.BarcodeFormatIds = (int)EnumBarcodeFormat.BF_QR_CODE;
settings.BarcodeFormatIds_2 = (int)EnumBarcodeFormat_2.BF2_POSTALCODE;
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
runtimeSettings->barcodeFormatIds = BF_QR_CODE;
runtimeSettings->barcodeFormatIds_2 = BF2_POSTALCODE;
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
runtimeSettings.barcodeFormatIds = BF_QR_CODE;
runtimeSettings.barcodeFormatIds_2 = BF2_POSTALCODE;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```

## JSON Templates

With a JSON template, you can make use of all the configuration options that DBR offers. A JSON template consists of three parts:

* `ImageParameter`: Defines the global configurations used for the entire image.
* `FormatSpecification`: Defines the configurations used for a particular barcode format.
* `RegionDefinition`: Defines the configurations for a specific area of the image.

> Read [Parameter Template Structure]({{ site.parameters }}structure-and-interfaces-of-parameters.md) to learn more about the structure of templates.

To use a template, you can either use `InitRuntimeSettingsWithFile` to load a JSON file, or use `InitRuntimeSettingsWithString`/`initRuntimeSettingsWithString` to load a JSON string.

> Notes about the JavaScript edition
>
> 1. It only supports importing a JSON string
> 2. It only allows one fixed template, in other words, the template itself should contain only one `ImageParameter` object 

The following code snippet demonstrates how to make use of a template.  

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
// Specifies a license.
Dynamsoft.DBR.BarcodeScanner.license = 'YOUR-LICENSE-KEY';
// Creates a BarcodeScanner instance.
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Stringify a template into a string.
let template = JSON.stringify("A-JSON-Template");
// Updates the settings with the string.
await scanner.initRuntimeSettingsWithString(b);
```
>
```java
// Creates a BarcodeReader instance.
BarcodeReader reader = new BarcodeReader();
// Updates the settings with the string.
reader.initRuntimeSettingsWithString("A-JSON-Template");
```
>
```objc
NSError* err = nil;
// Creates a BarcodeReader instance.
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
// Updates the settings with the string.
[reader initRuntimeSettingsWithString:@"A-JSON-Template" error:&err];
```
>
```swift
// Creates a BarcodeReader instance.
let reader = DynamsoftBarcodeReader()
// Updates the settings with the string.
try? reader.initRuntimeSettingsWithString("A-JSON-Template")
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
dbr.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP1","ImagePreprocessingModes": [{"Mode": "IPM_GRAY_EQUALIZE","Sensitivity": 9},{"Mode": "IPM_GRAY_SMOOTH","SmoothBlockSizeX": 10,"SmoothBlockSizeY": 10},{"Mode": "IPM_SHARPEN_SMOOTH","SharpenBlockSizeX": 5,"SharpenBlockSizeY": 5},{"Mode": "IPM_MORPHOLOGY","MorphOperation": "Close","MorphOperationKernelSizeX": 7,"MorphOperationKernelSizeY": 7}]}}')
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", EnumConflictMode.CM_OVERWRITE);
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
reader.InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", EnumConflictMode.CM_OVERWRITE, out errorMsg);
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
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", CM_OVERWRITE, errorBuf, 512);
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
DBR_InitRuntimeSettingsWithString(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\",\"ImagePreprocessingModes\": [{\"Mode\": \"IPM_GRAY_EQUALIZE\",\"Sensitivity\": 9},{\"Mode\": \"IPM_GRAY_SMOOTH\",\"SmoothBlockSizeX\": 10,\"SmoothBlockSizeY\": 10},{\"Mode\": \"IPM_SHARPEN_SMOOTH\",\"SharpenBlockSizeX\": 5,\"SharpenBlockSizeY\": 5},{\"Mode\": \"IPM_MORPHOLOGY\",\"MorphOperation\": \"Close\",\"MorphOperationKernelSizeX\": 7,\"MorphOperationKernelSizeY\": 7}]}}", CM_OVERWRITE, errorBuf, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```

## Mixed Usage

It's also possible to use a template along with `RuntimeSettings`. Typically, you initialize the SDK with a template, the settings in which will be reflected in `RuntimeSettings`, then you can further fine-tune `RuntimeSettings` to apply to the actual reading process.
