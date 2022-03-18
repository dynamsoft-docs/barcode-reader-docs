---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Parameter and Runtime Settings Advanced Functions
description: This page shows advanced Runtime Settings functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_InitRuntimeSettingsWithFile, DBR_InitRuntimeSettingsWithString, DBR_AppendTplFileToRuntimeSettings, DBR_AppendTplStringToRuntimeSettings, DBR_GetParameterTemplateCount, DBR_GetParameterTemplateName, DBR_OutputSettingsToFile, DBR_OutputSettingsToString, DBR_OutputSettingsToStringPtr, DBR_FreeSettingsString, parameter and runtime settings advanced functions, api reference, c
needAutoGenerateSidebar: true
---

# Parameter and Runtime Settings Advanced Functions
   
  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitRuntimeSettingsWithFile`](#dbr_initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`DBR_InitRuntimeSettingsWithString`](#dbr_initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`DBR_AppendTplFileToRuntimeSettings`](#dbr_appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`DBR_AppendTplStringToRuntimeSettings`](#dbr_appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`DBR_GetParameterTemplateCount`](#dbr_getparametertemplatecount) | Get the count of the parameter templates. |
  | [`DBR_GetParameterTemplateName`](#dbr_getparametertemplatename) | Get the parameter template name by index. |
  | [`DBR_OutputSettingsToFile`](#dbr_outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`DBR_OutputSettingsToString`](#dbr_outputsettingstostring) | Output runtime settings to a string. |
  | [`DBR_OutputSettingsToStringPtr`](#dbr_outputsettingstostringptr) | Output runtime settings to a string. |
  | [`DBR_FreeSettingsString`](#dbr_freesettingsstring) | Free memory allocated for runtime settings string. |






## DBR_InitRuntimeSettingsWithFile
Initialize runtime settings with the parameters obtained from a JSON file.

```c
DBR_API int DBR_InitRuntimeSettingsWithFile (void* barcodeReader, const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFilePath` The settings file path.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template settings or to overwrite previous settings with the new template.  
`[in,out]	errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of allocated buffer.  
 

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessage[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```







## DBR_InitRuntimeSettingsWithString
Initialize runtime settings with the parameters obtained from a JSON string.

```c
DBR_API int DBR_InitRuntimeSettingsWithString (void* barcodeReader, const char* content, const ConflictMode conflictMode, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	content` A JSON string that represents the content of the settings.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out] errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of allocated buffer.


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessage[256];
DBR_InitRuntimeSettingsWithString(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_OVERWRITE, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```







## DBR_AppendTplFileToRuntimeSettings
Append a new template file to the current runtime settings.

```c
DBR_API int DBR_AppendTplFileToRuntimeSettings (void* barcodeReader, const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
 
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFilePath` The settings file path.     
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template settings or to overwrite previous settings with the new template.     
`[in,out]	errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.     
`[in] errorMsgBufferLen` The length of allocated buffer.


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessage[256];
DBR_AppendTplFileToRuntimeSettings(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_IGNORE, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```







## DBR_AppendTplStringToRuntimeSettings
Append a new template string to the current runtime settings.

```c
DBR_API int DBR_AppendTplStringToRuntimeSettings (void* barcodeReader, const char* content, const ConflictMode conflictMode, char errorMsgBuffer[], const int errorMsgBufferLen)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in] content` A JSON string that represents the content of the settings.   
`[in] conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.   
`[in,out] errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in] errorMsgBufferLen` The length of allocated buffer.


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessage[256];
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```







## DBR_GetParameterTemplateCount
Get count of parameter templates.

```c
DBR_API int DBR_GetParameterTemplateCount (void* barcodeReader)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  


**Return Value**  
Returns the count of parameter templates. Returns -1 if DBRERR_NULL_POINTER happens.   

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = DBR_GetParameterTemplateCount(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```







## DBR_GetParameterTemplateName
Get parameter template name by index.

```c
DBR_API int DBR_GetParameterTemplateName (void* barcodeReader, const int index, char nameBuffer[], const int nameBufferLen)
```   

**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	index` The index of parameter template array.   
`[in,out]	nameBuffer` The buffer is allocated by caller and the recommended length is 256. The template name will be copied to the buffer.   
`[in]	nameBufferLen` The length of allocated buffer.


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = DBR_GetParameterTemplateCount(barcodeReader);
int templateIndex = 1;
// notice that the value of 'templateIndex' should less than currentTemplateCount.
char templateName[256];
DBR_GetParameterTemplateName(barcodeReader, templateIndex, templateName, 256);
DBR_DestroyInstance(barcodeReader);
```







## DBR_OutputSettingsToFile
Outputs runtime settings and save them into a settings file (JSON file).  

```c
DBR_API int DBR_OutputSettingsToFile (void* barcodeReader, const char* pFilePath, const char* pSettingsName)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFilePath` The path of the output file which stores current settings.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.  


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
DBR_OutputSettingsToFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\CurrentRuntimeSettings.json", "currentRuntimeSettings");
DBR_DestroyInstance(barcodeReader);
```







## DBR_OutputSettingsToString
Output runtime settings to a string.

```c
DBR_API int DBR_OutputSettingsToString (void* barcodeReader, char content[], const int contentLen, const char* pSettingsName)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in,out]	content` The output string which stores the contents of current settings.   
`[in]	contentLen` The length of output string.   
`[in]	pSettingsName` A unique name for declaring current runtime settings.  


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char pContent[256];
DBR_OutputSettingsToString(barcodeReader, pContent, 256, "currentRuntimeSettings");
DBR_DestroyInstance(barcodeReader);
```







## DBR_OutputSettingsToStringPtr
Output runtime settings to a string.

```c
DBR_API int DBR_OutputSettingsToStringPtr (void* barcodeReader, char** content, const char* pSettingsName)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.    
`[in,out]	content` The output string which stores the contents of current settings.   
`[in]	pSettingsName` A unique name for declaring current runtime settings.   


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
 DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* pContent = NULL;
DBR_OutputSettingsToStringPtr(barcodeReader, &pContent, "currentRuntimeSettings");
DBR_FreeSettingsString(&pContent);
DBR_DestroyInstance(barcodeReader);
```








## DBR_FreeSettingsString
Free memory allocated for runtime settings string.

```c
DBR_API void DBR_FreeSettingsString (char** content)
```   
   
**Parameters**  
`[in]	content` The runtime settings string.  

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* pContent = NULL;
DBR_OutputSettingsToString(barcodeReader, &pContent, "currentRuntimeSettings");
DBR_FreeSettingsString(&pContent);
DBR_DestroyInstance(barcodeReader);
```

