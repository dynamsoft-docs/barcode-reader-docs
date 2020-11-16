---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - License Methods
description: This page shows the license methods of Dynamsoft Barcode Reader for C Language.
keywords: DBR_InitLicense, DBR_InitLicenseFromServer, DBR_InitLicenseFromLicenseContent, DBR_OutputLicenseToString, DBR_OutputLicenseToStringPtr, DBR_FreeLicenseString, license methods, api reference, c
needAutoGenerateSidebar: true
---

# C API Reference - License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](#dbr_initlicense) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](#dbr_initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](#dbr_freelicensestring) | Free memory allocated for the license string. |
  
  
  ---
  
  
  
  
  
## DBR_InitLicense
Read product key and activate the SDK.

```c
DBR_API int DBR_InitLicense (void* barcodeReader, const char* pLicense)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicense` The product keys.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```c
DBR_API int DBR_InitLicenseFromServer (void* barcodeReader, const char* pLicenseServer, const char* pLicenseKey)
```   

#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicenseServer` The name/IP of the license server.  
`[in]	pLicenseKey` The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

&nbsp;





## DBR_InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```c
DBR_API int DBR_InitLicenseFromLicenseContent (void* barcodeReader, const char* pLicenseKey, const char* pLicenseContent)	
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring).

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

&nbsp;





## DBR_OutputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```c
DBR_API int DBR_OutputLicenseToString (void* barcodeReader, char content[], int contentLen)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	content` The output string which stores the content of license.  
`[in]	contentLen` The length of output string. The recommended length is 512 per license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Remark
[`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) has to be successfully called before calling this method.

&nbsp;





## DBR_OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```c
DBR_API int DBR_OutputLicenseToStringPtr (void* barcodeReader, char** content)
```   

   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	content` The output string which stores the content of license.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Remark
[`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) has to be successfully called before calling this method.

&nbsp;





## DBR_FreeLicenseString
Free memory allocated for the license string.

```c
DBR_API void DBR_FreeLicenseString (char** content)
```   
   
#### Parameters
`[in]	content` The output string which stores the content of license. 

#### Remark
[`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) has to be successfully called before calling this method.

