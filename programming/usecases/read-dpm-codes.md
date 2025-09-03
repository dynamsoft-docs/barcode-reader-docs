---   
layout: default-layout
description: This article introduces how to read DPM codes.
title: Read DPM Codes
keywords: DPM, Direct Part Marking
---

# How to Read DPM Codes

## What is DPM (Direct Part Marking)?

It is the process of creating permanent markings on the surface of a part to help identify it. DPM Codes are used widely in industrial part tracking, from electronics manufacturing to automotive assembly. Atypical from general scenarios, DPM Codes present more challenges, including light reflection interference from the surface the code is printed on, low contrast, and complex background texture. For reference, here are two sample images of DPM codes:

![DPM sample image1][1]
![DPM sample image2][2]

## Particular Settings Required

Dynamsoft Barcode Reader (DBR) provides a parameter, [`DPMCodeReadingModes`]({{ site.parameters_reference }}dpm-code-reading-modes.html#dpmcodereadingmodes), to control how to decode DPM codes. To enable the DPM feature, simply set a `DPMCRM_GENERAL` mode to this parameter.

## Sample Code

The following code snippet shows how to set the parameter via RuntimeSettings to read DPM code.

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
// Sets dpmCodeReadingModes to support DPM reading.
settings.furtherModes.dpmCodeReadingModes[0] = Dynamsoft.DBR.EnumDPMCodeReadingMode.DPMCRM_GENERAL;
await scanner.updateRuntimeSettings(settings);
scanner.onUniqueRead = (txt, result) => {
    alert(txt);
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
runtimeSettings.furtherModes.dpmCodeReadingModes[0] = DPMCRM_GENERAL; // Set a DPMCRM_GENERAL mode to read DPM codes
DBR_UpdateRuntimeSettings(barcodeReader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-WITH-DPM-CODES", ""); // Start decoding
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
runtimeSettings->furtherModes.dpmCodeReadingModes[0] = DPMCRM_GENERAL; // Set a DPMCRM_GENERAL mode to read DPM codes
reader->UpdateRuntimeSettings(runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
reader->DecodeFile("YOUR-IMAGE-FILE-WITH-DPM-CODES", ""); // Start decoding
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
settings.FurtherModes.DPMCodeReadingModes[0] = EnumDPMCodeReadingMode.DPMCRM_GENERAL; // Set a DPMCRM_GENERAL mode to read DPM codes
reader.UpdateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-WITH-DPM-CODES", ""); // Start decoding
// Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.dpmCodeReadingModes[0] = EnumDPMCodeReadingMode.DPMCRM_GENERAL; // Set a DPMCRM_GENERAL mode to read DPM codes
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-DPM-CODES", ""); // Start decoding
// Add further process
```
>
```java
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.dpmCodeReadingModes[0] = EnumDPMCodeReadingMode.DPMCRM_GENERAL; // Set a DPMCRM_GENERAL mode to read DPM codes
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-DPM-CODES"); // Start decoding
// Add further process
```
>
```objc
NSError* err = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err]; //Get the current RuntimeSettings
settings.furtherModes.dpmCodeReadingModes[0] = EnumDPMCodeReadingModeGeneral; // Set a DPMCRM_GENERAL mode to read DPM codes
[reader updateRuntimeSettings:settings error:&err]; // Update RuntimeSettings with above setting
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-WITH-DPM-CODES" error:&err]; // Start decoding
// Add further process
```
>
```swift
let reader = DynamsoftBarcodeReader()
let settings = try? reader.getRuntimeSettings() //Get the current RuntimeSettings
settings?.furtherModes.dpmCodeReadingModes[0] = EnumDPMCodeReadingMode.general; // Set a DPMCRM_GENERAL mode to read DPM codes
try? reader.updateRuntimeSettings(settings) // Update RuntimeSettings with above setting
let result = try? reader.decodeFileWithName("YOUR-IMAGE-FILE-WITH-DPM-CODES") // Start decoding
// Add further process
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.dpm_code_reading_modes[0] = EnumDPMCodeReadingMode.DPMCRM_GENERAL
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-WITH-DPM-CODES")
# Add further process
```

[1]:assets\read-dpm-codes\DPM-sample1.png
[2]:assets\read-dpm-codes\DPM-sample2.png
