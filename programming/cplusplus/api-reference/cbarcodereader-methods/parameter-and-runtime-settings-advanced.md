---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - Advanced Settings Methods
description: This page shows advanced Runtime Settings methods of Dynamsoft Barcode Reader for C++ Language.
keywords: InitRuntimeSettingsWithFile, InitRuntimeSettingsWithString, AppendTplFileToRuntimeSettings, AppendTplStringToRuntimeSettings, GetParameterTemplateCount, GetParameterTemplateName, OutputSettingsToFile, OutputSettingsToString, OutputSettingsToStringPtr, FreeSettingsString, Advanced Settings Methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---

# Advanced Settings Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](#getparametertemplatecount) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](#getparametertemplatename) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](#outputsettingstostring) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](#outputsettingstostringptr) | Output runtime settings to a string. |
  | [`FreeSettingsString`](#freesettingsstring) | Free memory allocated for runtime settings string. |







## InitRuntimeSettingsWithFile

Initialize runtime settings with the settings in a given JSON file.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitRuntimeSettingsWithFile (const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0)	
```   

**Parameters**  
`[in]	pFilePath` The path of the settings file.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessage[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessage, 256);
delete reader;
```

 





## InitRuntimeSettingsWithString

Initialize runtime settings with the settings in a given JSON string.


```cpp
int dynamsoft::dbr::CBarcodeReader::InitRuntimeSettingsWithString (const char* content, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0)	
```   
   
**Parameters**  
`[in]	content` A JSON string that represents the content of the settings.   
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessage[256];
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_OVERWRITE, errorMessage, 256);
delete reader;
```

 





## AppendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```cpp
int dynamsoft::dbr::CBarcodeReader::AppendTplFileToRuntimeSettings (const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   
   
**Parameters**  
`[in]	pFilePath` The path of the settings file.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out] errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessage[256];
reader->AppendTplFileToRuntimeSettings("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_IGNORE, errorMessage, 256);
delete reader;
```

 





## AppendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```cpp
int dynamsoft::dbr::CBarcodeReader::AppendTplStringToRuntimeSettings (const char* content, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)	
```   

   
**Parameters**  
`[in]	content` A JSON string that represents the content of the settings.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.   
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessage[256];
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessage, 256);
delete reader;
```

 





## GetParameterTemplateCount
Gets the count of the parameter templates.

```cpp
int dynamsoft::dbr::CBarcodeReader::GetParameterTemplateCount ()	
```   

**Return Value**  
Returns the count of parameter template.

---

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = reader->GetParameterTemplateCount();
delete reader;
```

 





## GetParameterTemplateName
Gets the parameter template name by index.

```cpp
int dynamsoft::dbr::CBarcodeReader::GetParameterTemplateName (const int index, char nameBuffer[], int nameBufferLen)	
```  
   
**Parameters**  
`[in]	index` The index of the parameter template array.  
`[in,out]` nameBuffer	The buffer is allocated by caller and the recommended nameBufferLen is 256. The template name will be copied to the buffer.  
`[in]	nameBufferLen` The length of allocated buffer.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = reader->GetParameterTemplateCount();
int templateIndex = 1;
// notice that the value of 'templateIndex' should less than currentTemplateCount.
char templateName[256];
reader->GetParameterTemplateName(templateIndex, templateName, 256);
delete reader;
```

 





## OutputSettingsToFile
Output runtime settings to a settings file (JSON file).

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputSettingsToFile (const char* pFilePath, const char* pSettingsName)	
```   
   
**Parameters**  
`[in]	pFilePath` The output file path which stores current settings.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
reader->OutputSettingsToFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\CurrentRuntimeSettings.json", "currentRuntimeSettings");
delete reader;
```

 





## OutputSettingsToString
Output runtime settings to a string.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputSettingsToString (char content[], const int contentLen, const char* pSettingsName)
```   
   
**Parameters**  
`[in,out]	content` The output string which stores the contents of current settings.  
`[in]	contentLen` The length of the output string.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char content[256];
reader->OutputSettingsToString(content, 256, "currentRuntimeSettings");
delete reader;
```

 





## OutputSettingsToStringPtr
Output runtime settings to a string.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputSettingsToStringPtr (char** content, const char* pSettingsName)	
```   
   
**Parameters**  
`[in,out]	content`	The output string which stores the contents of current settings.  
`[in]	pSettingsName`	A unique name for declaring current runtime settings.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* content = NULL;
reader->OutputSettingsToStringPtr(&content, "currentRuntimeSettings");
reader->FreeSettingsString(&content);
delete reader;
```

 





## FreeSettingsString
Free memory allocated for runtime settings string.

```cpp
void dynamsoft::dbr::CBarcodeReader::FreeSettingsString (char** content	)	
```   
   
**Parameters**  
`[in]	content`	The runtime settings string.

**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* content = NULL;
reader->OutputSettingsToStringPtr(&content, "currentRuntimeSettings");
reader->FreeSettingsString(&content);
delete reader;
```



