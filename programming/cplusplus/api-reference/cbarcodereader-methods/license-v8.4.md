---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader License Methods
description: This page shows CBarcodeReader license methods of Dynamsoft Barcode Reader for C++ Language.
keywords: InitLicense, InitLicenseFromServer, InitLicenseFromLicenseContent, OutputLicenseToString, OutputLicenseToStringPtr, FreeLicenseString, license methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---


# License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](#initlicense) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](#outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](#freelicensestring) | Free memory allocated for the license string. |
  | [`InitLTSConnectionParameters`](#initltsconnectionparameters) | Initializes a DM_LTSConnectionParameters struct with default values. |
  | [`InitLicenseFromLTS`](#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`GetIdleInstancesCount`](#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |


## InitLicense
Read product key and activate the SDK.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitLicense (const char* pLicense)	
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







## InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitLicenseFromServer (const char* pLicenseServer, const char* pLicenseKey)
```   
   
#### Parameters
`[in]	pLicenseServer` The URL of the license server.  
`[in]	pLicenseKey`The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*








## InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitLicenseFromLicenseContent (const char* pLicenseKey, const char* pLicenseContent)	
```   

#### Parameters
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](#outputlicensetostring).


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*








## OutputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputLicenseToString (char content[], const int contentLen)
```   
   
#### Parameters
`[in,out]	content` The output string which stores the content of license.  
`[in]	contentLen` The length of output string. The recommended length is 512 per license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.








## OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputLicenseToStringPtr (char** content)
```   

#### Parameters
`[in,out]	content` The output string which stores the content of license.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remarks
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.







## FreeLicenseString
Free memory allocated for the license string.

```cpp
void dynamsoft::dbr::CBarcodeReader::FreeLicenseString (char** content)
```   

---
   
#### Parameters
`[in]	content` The output string which stores the content of license.


#### Remark
[`OutputLicenseToStringPtr`](#outputlicensetostringptr) has to be successfully called before calling this method.



## InitLTSConnectionParameters
Initializes a DM_LTSConnectionParameters struct with default values.

```cpp
static int dynamsoft::dbr::CBarcodeReader::InitLTSConnectionParameters(DM_LTSConnectionParameters *pLTSConnectionParameters)
```   
   
#### Parameters
`[in, out] pLTSConnectionParameters` The struct of [`DM_LTSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html).   

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
DM_LTSConnectionParameters paramters;
dynamsoft::dbr::CBarcodeReader::InitLTSConnectionParameters(&paramters);
paramters.handshakeCode = "Your handshake code";
dynamsoft::dbr::CBarcodeReader::InitLicenseFromLTS(&paramters);
```



## InitLicenseFromLTS
Initializes the barcode reader license and connects to the specified server for online verification.

```cpp
static int dynamsoft::dbr::CBarcodeReader::InitLicenseFromLTS(DM_LTSConnectionParameters *pLTSConnectionParameters, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   
   
#### Parameters
`[in] pLTSConnectionParameters` The struct [`DM_LTSConnectionParameters`]({{ site.structs }}DMLTSConnectionParameters.html) with customized settings.   
`[in, out] errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*


#### Code Snippet
```cpp
DM_LTSConnectionParameters paramters;
dynamsoft::dbr::CBarcodeReader::InitLTSConnectionParameters(&paramters);
paramters.handshakeCode = "Your handshake code";
dynamsoft::dbr::CBarcodeReader::InitLicenseFromLTS(&paramters);
```



## GetIdleInstancesCount
Gets available instances count when charging by concurrent instances count.

```cpp
static int dynamsoft::dbr::CBarcodeReader::GetIdleInstancesCount()
```   

#### Return value
Returns available instances count.    

#### Code Snippet
```cpp
//...
int count = dynamsoft::dbr::CBarcodeReader::GetIdleInstancesCount();
if(count > 0)
{
  //create instance and process further
}
else 
{
  //waiting for available instances 
}
```



