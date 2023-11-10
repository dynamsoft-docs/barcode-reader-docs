---
layout: default-layout
title: How to Use Intermediate Results
description: This page shows how to use Intermediate Results.
keywords: intermediate results, IntermediateResult, IntermediateResultType, how-to guides
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
--- 

# How to Use Intermediate Results

Apart from getting the results like barcode type, value, location, Dynamsoft Barcode Reader (DBR) also provides APIs for you to obtain the intermediate results like original image, transformed grayscale image, binarized image, text zone, and more for further analysis. See enum [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype) for the full list of supported intermediate result types. All these results can be saved in memory or in the file system, which is controled by parameter [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode).

**Note**: You will need a separate license for all the intermediate results except the original image.

Here we will show how to save the binarized image to your file system and obtain the localized barcode zone in memory:

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
(async () => {
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    let rs = await scanner.getRuntimeSettings();
    // Sets the intermediate results you want to check.
    rs.intermediateResultTypes = Dynamsoft.DBR.EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | Dynamsoft.DBR.EnumIntermediateResultType.IRT_BINARIZED_IMAGE;
    await scanner.updateRuntimeSettings(rs);
    scanner.onUniqueRead = async (txt, result) => {
        try {
            // Gets the intermediate results and show them on the page.
            let cvss = await scanner.getIntermediateCanvas();
            for (let cvs of cvss) {
                document.body.appendChild(cvs);
            }
        } catch (ex) {
            console.error(ex);
        }
    };
    await scanner.show();
})();
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
settings.intermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_BOTH;
// Update RuntimeSettings with above settings
reader.updateRuntimeSettings(settings);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader.setModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH");
reader.decodeFile("YOUR-IMAGE-FILE-PATH");
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
IntermediateResult[] intermediateResults = reader.getIntermediateResults(); // Get all the intermediate results
int iCount = intermediateResults.length;
for (int i = 0; i < iCount; i++) //Loop all intermediate results
{
    IntermediateResult ir =intermediateResults[i];
    // Here we only process the localized barcode zone
    if (ir.dataType == EnumIMResultDataType.IMRESULT_LOCALIZATIONRESULT)
    {
        LocalizationResult localization = (LocalizationResult)ir.results[0];
        Log.i("confidence: " + localization.confidence);
        // Use more information in localization
    }
}
// Add further process
```
>
```objc
NSError *err = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
// Get the current RuntimeSettings
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediateResultTypes = EnumIntermediateResultTypeBinarizedImage | EnumIntermediateResultTypeTypedBarcodeZone;
// Save intermediate result to both file system and memory
settings.intermediateResultSavingMode = EnumIntermediateResultSavingModeBoth;
// Update RuntimeSettings with above settings
[reader updateRuntimeSettings:settings error:&err];
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
[reader setModeArgument:@"IntermediateResultSavingMode" index:0 argumentName:@"FolderPath" argumentValue:@"YOUR-SAVING-PATH" error:&err];
[reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err];
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
// The method returns an array of intermediate result.
NSArray<iIntermediateResult*>* intermediateResultArray = [reader getIntermediateResults:&err]; // Get all the intermediate results
for (iIntermediateResult* intermediateResult in intermediateResultArray) //Loop all intermediate results
{
    // Here we only process the localized barcode zone
    if (intermediateResult.dataType == EnumIMResultDataTypeLocalizationResult)
    {
        NSArray<iLocalizationResult*>* localizationResultArray = (NSArray<iLocalizationResult*>*) intermediateResult.results;
        for localizationResult in localizationResultArray{
            // Now you can get each iLocalizationResult from the iIntermediateResult.
        }
        // Use more information in localization
    }
}
// Add further process
```
>
```swift
let reader = DynamsoftBarcodeReader.init()
let settings = try? reader.getRuntimeSettings() //Get the current RuntimeSettings
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings?.intermediateResultTypes = EnumIntermediateResultType.binarizedImage.rawValue | EnumIntermediateResultType.typedBarcodeZone.rawValue
// Save intermediate result to both file system and memory
settings?.intermediateResultSavingMode = .both
// Update RuntimeSettings with above settings
try? reader.updateRuntimeSettings(settings) // Update RuntimeSettings with above setting
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
try? reader.setModeArgument("IntermediateResultSavingMode", index:0, argumentName:"FolderPath", argumentValue:"YOUR-SAVING-PATH")
try? reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH".
// Here we will get the localized barcode zone in memory.
// The method returns an array of intermediate result.
let intermediateResultArray = try? reader.getIntermediateResults()
for intermediateResult in intermediateResultArray! {
    // Here we only process the localized barcode zone
    if intermediateResult.dataType == .localizationResult {
        // Get an array of localization from a single intermediateResult
        let localizationResultArray = intermediateResult.results as! [iLocalizationResult]
        for localizationResult in localizationResultArray{
            // Now you can get each iLocalizationResult from the iIntermediateResult.
        }
    }
}
// Add further process
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
settings = dbr.get_runtime_settings()
# Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediate_result_types = EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE
# Save intermediate result to both file system and memory
settings.intermediate_result_saving_mode = EnumIntermediateResultSavingMode.IRSM_BOTH
dbr.update_runtime_settings(settings)
# Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
dbr.set_mode_argument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH")
dbr.decode_file("YOUR-IMAGE-FILE-PATH")
# After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
# Here we will get the localized barcode zone in memory
intermediateResults = dbr.get_all_intermediate_results()
for intermediateResult in intermediateResults:
    # Here we only process the localized barcode zone
    if intermediateResult.data_type == EnumIMResultDataType.IMRDT_LOCALIZATIONRESULT:
        localization = intermediateResult.results[0]
        print("confidence: ")
        print(localization.confidence)
        # Use more information in localization
# Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.intermediateResultTypes = EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
settings.intermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_BOTH;
// Update RuntimeSettings with above settings
reader.updateRuntimeSettings(settings);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader.setModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH");
reader.decodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
IntermediateResult[] intermediateResults = reader.getIntermediateResults(); // Get all the intermediate results
int iCount = intermediateResults.length;
for (int i = 0; i < iCount; i++) //Loop all intermediate results
{
    IntermediateResult ir =intermediateResults[i];
    // Here we only process the localized barcode zone
    if (ir.dataType == EnumIMResultDataType.IMRESULT_LOCALIZATIONRESULT)
    {
        LocalizationResult localization = (LocalizationResult)ir.results[0];
        System.out.println("confidence: " + localization.confidence);
        // Use more information in localization
    }
}
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
// Set binarized image and localized barcode zone of the intermediate result types to be saved
settings.IntermediateResultTypes = (int)(EnumIntermediateResultType.IRT_BINARIZED_IMAGE | EnumIntermediateResultType.IRT_TYPED_BARCODE_ZONE);
// Save intermediate result to both file system and memory
settings.IntermediateResultSavingMode = EnumIntermediateResultSavingMode.IRSM_BOTH;
// Update RuntimeSettings with above settings
reader.UpdateRuntimeSettings(settings);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader.SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", out errorMsg);
reader.DecodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
IntermediateResult[] intermediateResults = reader.GetIntermediateResults(); // Get all the intermediate results
foreach (IntermediateResult ir in intermediateResults) //Loop all intermediate results
{
    // Here we only process the localized barcode zone
    if (ir.DataType == EnumIMResultDataType.IMRDT_LOCALIZATIONRESULT)
    {
        LocalizationResult localization = (LocalizationResult)ir.Results[0];
        Console.WriteLine("confidence: " + localization.Confidence);
        // Use more information in localization
    }
}
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
// Set binarized image and localized barcode zone of the intermediate result types to be saved
runtimeSettings.intermediateResultTypes = IRT_BINARIZED_IMAGE | IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
runtimeSettings.intermediateResultSavingMode = IRSM_BOTH;
// Update RuntimeSettings with above settings
reader->UpdateRuntimeSettings(&runtimeSettings, errorBuf, 512);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
reader->SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", errorBuf, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", "");
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
IntermediateResultArray* pResults = NULL;
reader->GetIntermediateResults(&pResults); // Get all the intermediate results
int iCount = pResults->resultsCount;
for (int i = 0; i < iCount; i++) //Loop all intermediate results
{
    // Here we only process the localized barcode zone
    if (pResults->results[i]->dataType == IMRDT_LOCALIZATIONRESULT)
    {
        LocalizationResult* localization = (LocalizationResult*)pResults->results[i]->results[0];
        cout << "confidence: " << localization->confidence << endl;
        // Use more information in localization
    }
}
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
DBR_GetRuntimeSettings(reader, &runtimeSettings);
// Set binarized image and localized barcode zone of the intermediate result types to be saved
runtimeSettings.intermediateResultTypes = IRT_BINARIZED_IMAGE | IRT_TYPED_BARCODE_ZONE;
// Save intermediate result to both file system and memory
runtimeSettings.intermediateResultSavingMode = IRSM_BOTH;
// Update RuntimeSettings with above settings
DBR_UpdateRuntimeSettings(reader, &runtimeSettings, errorBuf, 512);
// Set the folder path which stores the intermediate result. Please make sure you have write permission to this folder.
DBR_SetModeArgument(reader, "IntermediateResultSavingMode", 0, "FolderPath", "YOUR-SAVING-PATH", errorBuf, 512);
DBR_DecodeFile(reader, "YOUR-IMAGE-FILE-PATH", "");
// After decoding, the binarized image can be found at "YOUR-SAVING-PATH"
// Here we will get the localized barcode zone in memory
IntermediateResultArray* pResults = NULL;
DBR_GetIntermediateResults(reader, &pResults); // Get all the intermediate results
int iCount = pResults->resultsCount;
for (int i = 0; i < iCount; i++) //Loop all intermediate results
{
    // Here we only process the localized barcode zone
    if (pResults->results[i]->dataType == IMRDT_LOCALIZATIONRESULT)
    {
        LocalizationResult* localization = (LocalizationResult*)pResults->results[i]->results[0];
        printf("confidence: %d\n", localization->confidence);
        // Use more information in localization
    }
}
// Add further process
```
