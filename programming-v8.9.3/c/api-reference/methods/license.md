---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - License Functions
description: This page shows the license functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_InitLicense, DBR_InitLicenseFromServer, DBR_InitLicenseFromLicenseContent, DBR_OutputLicenseToString, DBR_OutputLicenseToStringPtr, DBR_FreeLicenseString, license functions, api reference, c
needAutoGenerateSidebar: true
---

# License Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](#dbr_initlicense) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](#dbr_initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](#dbr_freelicensestring) | Free memory allocated for the license string. |
  | [`DBR_InitDLSConnectionParameters`](#dbr_initdlsconnectionparameters) | Initializes a DM_DLSConnectionParameters struct with default values. |
  | [`DBR_InitLicenseFromDLS`](#dbr_initlicensefromdls) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`DBR_GetIdleInstancesCount`](#dbr_getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`DBR_InitLTSConnectionParameters`](#dbr_initltsconnectionparameters) | `Deprecated`. Use [DBR_InitDLSConnectionParameters](#dbr_initdlsconnectionparameters) instead. |
  | [`DBR_InitLicenseFromLTS`](#dbr_initlicensefromlts) | `Deprecated`. Use [DBR_InitLicenseFromDLS](#dbr_initlicensefromdls) instead. |
  
  
  
  
## DBR_InitLicense
Read product key and activate the SDK.

```c
DBR_API int DBR_InitLicense (void* barcodeReader, const char* pLicense)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicense` The product keys.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```







## DBR_InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```c
DBR_API int DBR_InitLicenseFromServer (void* barcodeReader, const char* pLicenseServer, const char* pLicenseKey)
```   

**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicenseServer` The name/IP of the license server.  
`[in]	pLicenseKey` The license key.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*







## DBR_InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```c
DBR_API int DBR_InitLicenseFromLicenseContent (void* barcodeReader, const char* pLicenseKey, const char* pLicenseContent)	
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the function [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring).

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*







## DBR_OutputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```c
DBR_API int DBR_OutputLicenseToString (void* barcodeReader, char content[], int contentLen)
```   
   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	content` The output string which stores the content of license.  
`[in]	contentLen` The length of output string. The recommended length is 512 per license key.

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Remarks**  
[`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) has to be successfully called before calling this function.







## DBR_OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```c
DBR_API int DBR_OutputLicenseToStringPtr (void* barcodeReader, char** content)
```   

   
**Parameters**  
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	content` The output string which stores the content of license.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Remarks**  
[`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) has to be successfully called before calling this function.







## DBR_FreeLicenseString
Free memory allocated for the license string.

```c
DBR_API void DBR_FreeLicenseString (char** content)
```   
   
**Parameters**  
`[in]	content` The output string which stores the content of license. 

**Remarks**  
[`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) has to be successfully called before calling this function.




## DBR_InitDLSConnectionParameters
Initializes a DM_DLSConnectionParameters struct with default values.

```c
DBR_API int DBR_InitDLSConnectionParameters (DM_DLSConnectionParameters *pDLSConnectionParameters)
```   

**Parameters**  
`[in, out] pDLSConnectionParameters` The struct of [`DM_DLSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html).   

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DM_DLSConnectionParameters paramters;
DBR_InitDLSConnectionParameters(&paramters);
paramters.handshakeCode = "Your handshake code";
DBR_InitLicenseFromDLS(&paramters, errorBuf, 512);
```



## DBR_InitLicenseFromDLS
Initializes the barcode reader license and connects to the specified server for online verification.

```c
DBR_API int DBR_InitLicenseFromDLS(DM_DLSConnectionParameters *pDLSConnectionParameters, char errorMsgBuffer[], const int errorMsgBufferLen)
```   

**Parameters**  
`[in] pDLSConnectionParameters` The struct [`DM_DLSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html) with customized settings.   
`[in, out] errorMsgBuffer` The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of allocated buffer.  

**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

**Code Snippet**  
```c
char errorBuf[512];
DM_DLSConnectionParameters paramters;
DBR_InitDLSConnectionParameters(&paramters);
paramters.handshakeCode = "Your handshake code";
DBR_InitLicenseFromDLS(&paramters, errorBuf, 512);
```



## DBR_GetIdleInstancesCount
Gets available instances count when charging by concurrent instances count.

```c
DBR_API int DBR_GetIdleInstancesCount()
```   

**Return Value**  
Returns available instances count.    

**Code Snippet**  
```c
//...
int count = DBR_GetIdleInstancesCount();
if(count > 0)
{
  //create instance and process further
}
else 
{
  //waiting for available instances 
}
```


## DBR_InitLTSConnectionParameters
`Deprecated`. Use [DBR_InitDLSConnectionParameters](#dbr_initdlsconnectionparameters) instead.   

## DBR_InitLicenseFromLTS
`Deprecated`. Use [DBR_InitLicenseFromDLS](#dbr_initlicensefromdls) instead.  

