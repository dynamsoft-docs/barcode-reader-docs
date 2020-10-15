---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader license methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: InitLicenseFromServer, InitLicenseFromLicenseContent, OutputLicenseToString, license methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# .Net API Reference - BarcodeReader License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicenseFromServer`](#initlicensefromserver) | Initializes license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initializes barcode reader license and connects to the specified server for online verification. |
  | [`OutputLicenseToString`](#outputlicensetostring) | Outputs the license content as an encrypted string from the license server to be used for offline license verification.|
  
  ---


## InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```C#
int Dynamsoft.Barcode.BarcodeReader.InitLicenseFromServer(string licenseServer, string licenseKey)
```   
   
#### Parameters
`[in]	licenseServer` <*string*> : The name/IP of the license server.  
`[in]	licenseKey` <*string*> : The license key of Barcode Reader.

#### Return value
Returns error code.


&nbsp;


## InitLicenseFromLicenseContent
Initializes barcode reader license and connects to the specified server for online verification.

```C#
int Dynamsoft.Barcode.BarcodeReader.InitLicenseFromLicenseContent(string licenseKey, string strLicenseContent)
```

#### Parameters
`[in]	licenseKey`	<*string*> : The license key of Barcode Reader.   
`[in]	pLicenseContent` <*string*> : An encrypted string representing the license content (runtime number, expiry date, barcode type, etc.) obtained from the method [`OutputLicenseToString()`](#outputlicensetostring). 


#### Return value
Returns error code.


&nbsp;


## OutputLicenseToString
Outputs the license content as an encrypted string from the license server to be used for offline license verification. 

```C#
string Dynamsoft.Barcode.BarcodeReader.OutputLicenseToString()
```
   

#### Return value
The output string which stores the contents of license. 
