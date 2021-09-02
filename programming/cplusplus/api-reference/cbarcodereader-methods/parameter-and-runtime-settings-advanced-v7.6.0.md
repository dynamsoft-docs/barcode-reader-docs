---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader Parameter and Runtime Settings Advanced Methods
description: This page shows CBarcodeReader advanced Runtime Settings methods of Dynamsoft Barcode Reader for C++ Language.
keywords: InitRuntimeSettingsWithFile, InitRuntimeSettingsWithString, AppendTplFileToRuntimeSettings, AppendTplStringToRuntimeSettings, GetParameterTemplateCount, GetParameterTemplateName, OutputSettingsToFile, OutputSettingsToString, OutputSettingsToStringPtr, FreeSettingsString, parameter and runtime settings advanced methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---

# C++ API Reference - CBarcodeReader Parameter and Runtime Settings Advanced Methods

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

  ---






## InitRuntimeSettingsWithFile

Initialize runtime settings with the settings in a given JSON file.

```cpp
int CBarcodeReader::InitRuntimeSettingsWithFile (const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0)	
```   

#### Parameters
`[in]	pFilePath` The path of the settings file.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessage[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessage, 256);
delete reader;
```

&nbsp; 





## InitRuntimeSettingsWithString

Initialize runtime settings with the settings in a given JSON string.


```cpp
int CBarcodeReader::InitRuntimeSettingsWithString (const char* content, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0)	
```   
   
#### Parameters
`[in]	content` A JSON string that represents the content of the settings.   
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessage[256];
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_OVERWRITE, errorMessage, 256);
delete reader;
```

&nbsp; 





## AppendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```cpp
int CBarcodeReader::AppendTplFileToRuntimeSettings (const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   
   
#### Parameters
`[in]	pFilePath` The path of the settings file.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out] errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessage[256];
reader->AppendTplFileToRuntimeSettings("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_IGNORE, errorMessage, 256);
delete reader;
```

&nbsp; 





## AppendTplStringToRuntimeSettings

Append a new template string to the current runtime settings.

```cpp
int CBarcodeReader::AppendTplStringToRuntimeSettings (const char* content, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)	
```   

   
#### Parameters
`[in]	content` A JSON string that represents the content of the settings.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.   
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessage[256];
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessage, 256);
delete reader;
```

&nbsp; 





## GetParameterTemplateCount
Gets the count of the parameter templates.

```cpp
int CBarcodeReader::GetParameterTemplateCount ()	
```   

#### Return value
Returns the count of parameter template.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = reader->GetParameterTemplateCount();
delete reader;
```

&nbsp; 





## GetParameterTemplateName
Gets the parameter template name by index.

```cpp
int CBarcodeReader::GetParameterTemplateName (const int index, char nameBuffer[], int nameBufferLen)	
```  
   
#### Parameters
`[in]	index` The index of the parameter template array.  
`[in,out]` nameBuffer	The buffer is allocated by caller and the recommended nameBufferLen is 256. The template name will be copied to the buffer.  
`[in]	nameBufferLen` The length of allocated buffer.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
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

&nbsp; 





## OutputSettingsToFile
Output runtime settings to a settings file (JSON file).

```cpp
int CBarcodeReader::OutputSettingsToFile (const char* pFilePath, const char* pSettingsName)	
```   
   
#### Parameters
`[in]	pFilePath` The output file path which stores current settings.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
reader->OutputSettingsToFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\CurrentRuntimeSettings.json", "currentRuntimeSettings");
delete reader;
```

&nbsp; 





## OutputSettingsToString
Output runtime settings to a string.

```cpp
int CBarcodeReader::OutputSettingsToString (char content[], const int contentLen, const char* pSettingsName)
```   
   
#### Parameters
`[in,out]	content` The output string which stores the contents of current settings.  
`[in]	contentLen` The length of the output string.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char content[256];
reader->OutputSettingsToString(content, 256, "currentRuntimeSettings");
delete reader;
```

&nbsp; 





## OutputSettingsToStringPtr
Output runtime settings to a string.

```cpp
int CBarcodeReader::OutputSettingsToStringPtr (char** content, const char* pSettingsName)	
```   
   
#### Parameters
`[in,out]	content`	The output string which stores the contents of current settings.  
`[in]	pSettingsName`	A unique name for declaring current runtime settings.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* content = NULL;
reader->OutputSettingsToStringPtr(&content, "currentRuntimeSettings");
reader->FreeSettingsString(&content);
delete reader;
```

&nbsp; 





## FreeSettingsString
Free memory allocated for runtime settings string.

```cpp
void CBarcodeReader::FreeSettingsString (char** content	)	
```   
   
#### Parameters
`[in]	content`	The runtime settings string.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* content = NULL;
reader->OutputSettingsToStringPtr(&content, "currentRuntimeSettings");
reader->FreeSettingsString(&content);
delete reader;
```



