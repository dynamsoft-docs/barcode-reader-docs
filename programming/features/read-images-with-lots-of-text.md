---   
layout: default-layout
description: This article introduces how to read barcodes from image with lots of text
title: How to read barcodes from image with lots of text
keywords: text filter
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-images-with-lots-of-text.html
---

# How to Read Barcodes from Image With Lots of Text

When trying to read an image where a barcode is surrounded by a large number of irrelevant characters, the presence of these words may lead to incorrect positioning, and slow down the execution speed. Dynamsoft Barcode Reader (DBR) provides a parameter, [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes), to control how to filter texts on an image.

## Sample Code

The following code snippet shows how to set the text filtering function through the RuntimeSettings.

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
// Sets the text filter mode.
rs.furtherModes.textFilterModes[0] = Dynamsoft.DBR.EnumTextFilterMode.TFM_GENERAL_CONTOUR;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
await scanner.show();
```
>
```java
NOT SURE JAVA-ANDROID
```
>
```objc
NOT SURE OBJC
```
>
```swift
NOT SURE SWIFT
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
settings.text_filter_modes[0] = EnumTextFilterMode.TFM_GENERAL_CONTOUR
dbr.update_runtime_settings(settings)
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings(); //Get the current RuntimeSettings
settings.furtherModes.textFilterModes[0] = EnumTextFilterMode.TFM_GENERAL_CONTOUR; // Set a TFM_GENERAL_CONTOUR mode to filter texts
reader.updateRuntimeSettings(settings); // Update RuntimeSettings with above setting
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
>
```c#
string errorMsg;
EnumErrorCode iRet = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (iRet != EnumErrorCode.DBR_SUCCESS)
{
    Console.WriteLine(errorMsg);
}
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.GetRuntimeSettings(); //Get the current RuntimeSettings
settings.FurtherModes.TextFilterModes[0] = EnumTextFilterMode.TFM_GENERAL_CONTOUR; // Set a TFM_GENERAL_CONTOUR mode to filter texts
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
runtimeSettings->furtherModes.textFilterModes[0] = TFM_GENERAL_CONTOUR; // Set a TFM_GENERAL_CONTOUR mode to filter texts
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
void* reader = DBR_CreateInstance();
PublicRuntimeSettings runtimeSettings;
DBR_GetRuntimeSettings(reader, &runtimeSettings); //Get the current RuntimeSettings
runtimeSettings.furtherModes.textFilterModes[0] = TFM_GENERAL_CONTOUR; // Set a TFM_GENERAL_CONTOUR mode to filter texts
DBR_UpdateRuntimeSettings(reader, &runtimeSettings, errorBuf, 512); // Update RuntimeSettings with above setting
DBR_DecodeFile(reader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
// Add further process
```
