---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - Advanced Settings Methods
description: This page shows advanced Runtime Settings methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: InitRuntimeSettingsWithFile, InitRuntimeSettingsWithString, AppendTplFileToRuntimeSettings, AppendTplStringToRuntimeSettings, GetAllParameterTemplateNames, OutputSettingsToFile, OutputSettingsToString, Advanced Settings Methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---

# Advanced Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](#initruntimesettingswithfile)  | Initializes runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](#initruntimesettingswithstring) | Initializes runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](#appendtplfiletoruntimesettings) | Appends a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](#appendtplstringtoruntimesettings) | Appends a new template string to the current runtime settings. |
  | [`GetAllParameterTemplateNames`](#getallparametertemplatenames) | Gets the parameter templates name array. |
  | [`OutputSettingsToFile`](#outputsettingstofile) | Outputs runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](#outputsettingstostring) | Outputs runtime settings to a string. |



## InitRuntimeSettingsWithFile

Initialize runtime settings with the settings in a given JSON file.

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.InitRuntimeSettingsWithFile(string jsonFileName, EnumConflictMode conflictMode, out string errorMessage)
```

**Parameters**  
`[in]	jsonFileName` <*string*> : The path of the settings file.  
`[in]	conflictMode` <*EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.   
`[in,out]	errorMessage` <*string*> : Output parameter storing detailed error message. 

**Return Value**  
Returns error code.

**Code Snippet**  

```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
EnumErrorCode error = reader.InitRuntimeSettingsWithFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.Dispose();
```


 


## InitRuntimeSettingsWithString

Initialize runtime settings with the settings in given JSON string. 

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.InitRuntimeSettingsWithString(string jsonContent, EnumConflictMode conflictMode, out string errorMessage)
```   
   
**Parameters**  
`[in]	jsonContent` <*string*> : A JSON string that represents the content of the settings.  
`[in]	conflictMode` <*EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.   
`[in,out]	errorMessage` <*string*> : Output parameter storing detailed error message. 

**Return Value**  
Returns error code.

**Code Snippet**  

```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
EnumErrorCode error = reader.InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.Dispose();
```


 


## AppendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.AppendTplFileToRuntimeSettings(string jsonFileName, EnumConflictMode conflictMode, out string errorMessage)
```   
   
**Parameters**  
`[in]	jsonFileName` <*string*> : The path of the settings file.  
`[in]	conflictMode` <*EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.   
`[in,out]	errorMessage` <*string*> : Output parameter storing detailed error message. 

**Return Value**  
Returns error code.

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
EnumErrorCode error = reader.AppendTplFileToRuntimeSettings(@"C:\Program Files (x86)\Dynamsoft\Barcode Reader 6.4\Templates\RuntimeSettings.json", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.Dispose();
```


 


## AppendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.AppendTplStringToRuntimeSettings(string  jsonContent, EnumConflictMode  conflictMode, out string errorMessage) 
```   

**Parameters**  
`[in]	jsonContent` <*string*> : A JSON string that represents the content of the settings.  
`[in]	conflictMode` <*EnumConflictMode*> : The parameter setting mode, which decides to inherit parameters from previous template setting or overwrite previous settings and replace by new template.   
`[in,out]	errorMessage` <*string*> : Output parameter storing detailed error message.

**Return Value**  
Returns error code.

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
EnumErrorCode error = reader.AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_IGNORE, out errorMessage);
reader.Dispose();
```


 


## GetAllParameterTemplateNames
Gets the parameter templates name array. 

```csharp
string[] Dynamsoft.DBR.BarcodeReader.GetAllParameterTemplateNames()
```  
   

**Return Value**  
The template name array. 

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
reader.InitRuntimeSettingsWithFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_IGNORE, out errorMessage);
string[] templateNameArray = reader.GetAllParameterTemplateNames();
reader.Dispose();
```


 


## OutputSettingsToFile
Output runtime settings to a settings file (JSON file).

```csharp
void Dynamsoft.DBR.BarcodeReader.OutputSettingsToFile(string outputFilePath, string settingsName)
```   
   
**Parameters**  
`[in]	outputFilePath` <*string*> : The output file path which stores current settings.  
`[in]	settingsName` <*string*> : A unique name for declaring current runtime settings. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader. 

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
reader.InitRuntimeSettingsWithFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_IGNORE, out errorMessage);
reader.OutputSettingsToFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\CurrentRuntimeSettings.json", "currentRuntimeSettings");
reader.Dispose();
```


 


## OutputSettingsToString
Output runtime settings to a string.

```csharp
string Dynamsoft.DBR.BarcodeReader.OutputSettingsToString(string settingsName)
```   
   
**Parameters**  
`[in]	settingsName` <*string*> : A unique name for declaring current runtime settings.  

**Return Value**  
The output string which stores the contents of current settings. 

**Exception**  
[`BarcodeReaderException`](../class/BarcodeReaderException.md)The exception thrown by Dynamsoft Barcode Reader. 

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
string errorMessage;
reader.InitRuntimeSettingsWithFile(@"C:\Program Files (x86)\Dynamsoft\{Version number}\Templates\RuntimeSettings.json", EnumConflictMode.CM_OVERWRITE, out errorMessage);
reader.AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", EnumConflictMode.CM_IGNORE, out errorMessage);
string currentSettings = reader.OutputSettingsToString("currentRuntimeSettings");
reader.Dispose();
```
