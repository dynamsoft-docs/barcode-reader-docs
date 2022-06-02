---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - License Functions
description: This page shows the license functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_InitLicense, license functions, api reference, c
needAutoGenerateSidebar: true
---

# License Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](#dbr_initlicense) | Initializes license key and activate the SDK. |
  | [`DBR_GetIdleInstancesCount`](#dbr_getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) | `Deprecated` |
  | [`DBR_InitLicenseFromLicenseContent`](#dbr_initlicensefromlicensecontent) | `Deprecated` |
  | [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring) | `Deprecated` |
  | [`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) | `Deprecated` |
  | [`DBR_FreeLicenseString`](#dbr_freelicensestring) | `Deprecated` |
  | [`DBR_InitDLSConnectionParameters`](#dbr_initdlsconnectionparameters) | `Deprecated` |
  | [`DBR_InitLicenseFromDLS`](#dbr_initlicensefromdls) | `Deprecated` |
  | [`DBR_InitLTSConnectionParameters`](#dbr_initltsconnectionparameters) | `Deprecated` |
  | [`DBR_InitLicenseFromLTS`](#dbr_initlicensefromlts) | `Deprecated` |

## DBR_InitLicense

Initializes license key and activate the SDK.

```c
DBR_API int DBR_InitLicense (const char* pLicense, char errorMsgBuffer[], const int errorMsgBufferLen)
```

**Parameters**

`[in] pLicense` The license string.

`[in, out] errorMsgBuffer` The buffer is allocated by caller and the recommended length is 512. The error message will be copied to the buffer.

`[in] errorMsgBufferLen` The length of allocated buffer.

**Return Value**

Returns error code (returns 0 if the function operates successfully).

*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**

```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
// add further process
```

## DBR_GetIdleInstancesCount

Gets available instances count when charging by concurrent instances count.

```c
DBR_API int DBR_GetIdleInstancesCount()
```

**Return Value**

Returns available instances count.

- 0: There is no space for new instance  
- -1: The available count needs to be updated from server by calling DBR_InitLicense.
- N ( N > 0 ): N more instances can be created.

**Code Snippet**

```c
//...
int count = DBR_GetIdleInstancesCount();
if(count > 0)
{
  //create instance and process further
}
if(count < 0)
{
  //call DBR_InitLicense
  //create instance and process further
}
if(count = 0)
{
  //waiting for available instances 
}
```

## DBR_InitLicenseFromServer

`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_InitLicenseFromServer (void* barcodeReader, const char* pLicenseServer, const char* pLicenseKey)
```   


## DBR_InitLicenseFromLicenseContent
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_InitLicenseFromLicenseContent (void* barcodeReader, const char* pLicenseKey, const char* pLicenseContent)	
```   


## DBR_OutputLicenseToString
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_OutputLicenseToString (void* barcodeReader, char content[], int contentLen)
```   
   

## DBR_OutputLicenseToStringPtr
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_OutputLicenseToStringPtr (void* barcodeReader, char** content)
```   

   

## DBR_FreeLicenseString
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API void DBR_FreeLicenseString (char** content)
```   


## DBR_InitDLSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_InitDLSConnectionParameters (DM_DLSConnectionParameters *pDLSConnectionParameters)
```   


## DBR_InitLicenseFromDLS
`Deprecated`. It still works in this version but could be removed in the near future.

```c
DBR_API int DBR_InitLicenseFromDLS(DM_DLSConnectionParameters *pDLSConnectionParameters, char errorMsgBuffer[], const int errorMsgBufferLen)
```   

## DBR_InitLTSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

## DBR_InitLicenseFromLTS
`Deprecated`. It still works in this version but could be removed in the near future.
