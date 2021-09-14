---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader License Methods
description: This page shows CBarcodeReader license methods of Dynamsoft Barcode Reader for C++ Language.
keywords: InitLicense, InitLicenseFromServer, InitLicenseFromLicenseContent, OutputLicenseToString, OutputLicenseToStringPtr, FreeLicenseString, license methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---


# C++ API Reference - CBarcodeReader License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](#initlicense) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](#outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](#freelicensestring) | Free memory allocated for the license string. |

  ---





## InitLicense
Read product key and activate the SDK.

```cpp
int CBarcodeReader::InitLicense (const char* pLicense)	
```   
   
#### Parameters
`[in]	pLicense` The product keys.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*


#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
delete reader;
```

&nbsp;





## InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```cpp
int CBarcodeReader::InitLicenseFromServer (const char* pLicenseServer, const char* pLicenseKey)
```   
   
#### Parameters
`[in]	pLicenseServer` The URL of the license server.  
`[in]	pLicenseKey`The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

&nbsp;






## InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```cpp
int CBarcodeReader::InitLicenseFromLicenseContent (const char* pLicenseKey, const char* pLicenseContent)	
```   

#### Parameters
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](#outputlicensetostring).


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

&nbsp;






## OutputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int CBarcodeReader::OutputLicenseToString (char content[], const int contentLen)
```   
   
#### Parameters
`[in,out]	content` The output string which stores the content of license.  
`[in]	contentLen` The length of output string. The recommended length is 512 per license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.

&nbsp;






## OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int CBarcodeReader::OutputLicenseToStringPtr (char** content)
```   

#### Parameters
`[in,out]	content` The output string which stores the content of license.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remarks
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.

&nbsp;





## FreeLicenseString
Free memory allocated for the license string.

```cpp
void CBarcodeReader::FreeLicenseString (char** content)
```   

---
   
#### Parameters
`[in]	content` The output string which stores the content of license.


#### Remark
[`OutputLicenseToStringPtr`](#outputlicensetostringptr) has to be successfully called before calling this method.





