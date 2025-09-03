---   
layout: default-layout
description: This article introduces how to read Postal codes.
title: How to read Postal codes
keywords: Postal code, Direct Part Marking
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to read Postal codes

## Sample Code

The following code snippet shows how to set the parameter via RuntimeSettings to read Postal code.

<div class="sample-code-prefix template2"></div>
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
>
```javascript
const scanner = scanner || await Dynamsoft.DBR.BarcodeScanner.createInstance();
let settings = await scanner.getRuntimeSettings();
// Sets barcode formats to read Postal Code.
settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_NULL;
settings.barcodeFormatIds_2 = Dynamsoft.DBR.EnumBarcodeFormat_2.BF2_POSTALCODE;
await scanner.updateRuntimeSettings(settings);
scanner.onUniqueRead = (txt, result) => {
    rawString = txt;
};
await scanner.show();
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
runtimeSettings.barcodeFormatIds = BF_NULL;
runtimeSettings.barcodeFormatIds_2 = BF2_POSTALCODE;
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-WITH-POSTAL-CODES", ""); // Start decoding
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
runtimeSettings->barcodeFormatIds = BF_NULL;
runtimeSettings->barcodeFormatIds_2 = BF2_POSTALCODE;
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->DecodeFile("YOUR-IMAGE-FILE-WITH-POSTAL-CODES", ""); // Start decoding
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
settings.BarcodeFormatIds = (int)EnumBarcodeFormat.BF_NULL;
settings.BarcodeFormatIds_2 = (int)EnumBarcodeFormat_2.BF2_POSTALCODE;
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-WITH-POSTAL-CODES", ""); // Start decoding
// Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.barcodeFormatIds = EnumBarcodeFormat.BF_NULL;
settings.barcodeFormatIds_2 = EnumBarcodeFormat_2.BF2_POSTALCODE;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-POSTAL-CODES", ""); // Start decoding
// Add further process
```
>
```java
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.barcodeFormatIds = EnumBarcodeFormat.BF_NULL;
settings.barcodeFormatIds_2 = EnumBarcodeFormat_2.BF2_POSTALCODE;
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-POSTAL-CODES"); // Start decoding
// Add further process
```
>
```objc
NSError* err = nil;
DynamsoftBarcodeReader *reader = [[DynamsoftBarcodeReader alloc] init];
iPublicRuntimeSettings *settings = [reader getRuntimeSettings:&err]; //Get the current RuntimeSettings
settings.barcodeFormatIds = EnumBarcodeFormatNULL;
settings.barcodeFormatIds_2 = EnumBarcodeFormat2POSTALCODE;
[reader updateRuntimeSettings:settings error:&err]; // Update RuntimeSettings with above setting
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-WITH-POSTAL-CODES" error:&err]; // Start decoding
// Add further process
```
>
```swift
let reader = DynamsoftBarcodeReader()
let settings = try? reader.getRuntimeSettings() //Get the current RuntimeSettings
settings?.barcodeFormatIds = EnumBarcodeFormat.NULL
settings?.barcodeFormatIds_2 = EnumBarcodeFormat2.POSTALCODE
try? reader.updateRuntimeSettings(settings) // Update RuntimeSettings with above setting
let result = try? reader.decodeFileWithName("YOUR-IMAGE-FILE-WITH-POSTAL-CODES") // Start decoding
// Add further process
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.barcode_format_ids = EnumBarcodeFormat.BF_NULL
settings.barcode_format_ids_2 = EnumBarcodeFormat_2.BF2_POSTALCODE
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-WITH-POSTAL-CODES")
# Add further process
```
