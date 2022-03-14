---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader License Methods
description: This page shows CBarcodeReader license methods of Dynamsoft Barcode Reader for C++ Language.
keywords: InitLicense, license methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---


# License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](#initlicense) | Initializes license key and activate the SDK. |
  | [`GetIdleInstancesCount`](#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`InitLicenseFromServer`](#initlicensefromserver) | `Deprecated` |
  | [`InitLicenseFromLicenseContent`](#initlicensefromlicensecontent) | `Deprecated` |
  | [`OutputLicenseToString`](#outputlicensetostring) | `Deprecated` |
  | [`OutputLicenseToStringPtr`](#outputlicensetostringptr) | `Deprecated` |
  | [`FreeLicenseString`](#freelicensestring) | `Deprecated` |
  | [`InitDLSConnectionParameters`](#initdlsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromDLS`](#initlicensefromdls) | `Deprecated` |
  | [`InitLTSConnectionParameters`](#initltsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromLTS`](#initlicensefromlts) | `Deprecated` |


## InitLicense
Initializes license key and activate the SDK.

```cpp
static int dynamsoft::dbr::CBarcodeReader::InitLicense (const char* pLicense, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)	
```   
   
**Parameters**  
`[in]	pLicense` The product keys.  
`[in, out] errorMsgBuffer` The buffer is allocated by caller and the recommended length is 512. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen` The length of allocated buffer.  


**Return Value**  
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*


**Code Snippet**  
```cpp
char errorBuf[512];
dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
CBarcodeReader* reader = new CBarcodeReader();
// add further process
```


## GetIdleInstancesCount
Gets available instances count when charging by concurrent instances count.

```cpp
static int dynamsoft::dbr::CBarcodeReader::GetIdleInstancesCount()
```   

**Return Value**  
Returns available instances count.    
- 0: There is no space for new instance  
- -1: The available count needs to be updated from server by calling InitLicense.
- N ( N > 0 ): N more instances can be created.

**Code Snippet**  
```cpp
//...
int count = dynamsoft::dbr::CBarcodeReader::GetIdleInstancesCount();
if(count > 0)
{
  //create instance and process further
}
if(count < 0)
{
  //call InitLicense
  //create instance and process further
}
if(count = 0)
{
  //waiting for available instances 
}
```


## InitLicenseFromServer
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitLicenseFromServer (const char* pLicenseServer, const char* pLicenseKey)
```   
   

## InitLicenseFromLicenseContent
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
int dynamsoft::dbr::CBarcodeReader::InitLicenseFromLicenseContent (const char* pLicenseKey, const char* pLicenseContent)	
```   


## OutputLicenseToString
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputLicenseToString (char content[], const int contentLen)
```   
   

## OutputLicenseToStringPtr
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
int dynamsoft::dbr::CBarcodeReader::OutputLicenseToStringPtr (char** content)
```   


## FreeLicenseString
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
void dynamsoft::dbr::CBarcodeReader::FreeLicenseString (char** content)
```   


## InitDLSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
static int dynamsoft::dbr::CBarcodeReader::InitDLSConnectionParameters(DM_DLSConnectionParameters *pDLSConnectionParameters)
```   
   


## InitLicenseFromDLS
`Deprecated`. It still works in this version but could be removed in the near future.

```cpp
static int dynamsoft::dbr::CBarcodeReader::InitLicenseFromDLS(DM_DLSConnectionParameters *pDLSConnectionParameters, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   
   

## InitLTSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

## InitLicenseFromLTS
`Deprecated`. It still works in this version but could be removed in the near future.

