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
  | [`InitLTSConnectionParameters`](#initltsconnectionparameters) | Initializes a DMLTSConnectionParameters struct with default values. |
  | [`InitLicenseFromLTS`](#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |
  
  ---


## InitLicenseFromServer
Initializes the license and connect to the specified server for online verification.

```csharp
int Dynamsoft.DBR.BarcodeReader.InitLicenseFromServer(string licenseServer, string licenseKey)
```   
   
#### Parameters
`[in]	licenseServer` <*string*> : The name/IP of the license server.  
`[in]	licenseKey` <*string*> : The license key of Barcode Reader.

#### Return value
Returns error code.


&nbsp;


## InitLicenseFromLicenseContent
Initializes barcode reader license and connects to the specified server for online verification.

```csharp
int Dynamsoft.DBR.BarcodeReader.InitLicenseFromLicenseContent(string licenseKey, string strLicenseContent)
```

#### Parameters
`[in]	licenseKey`	<*string*> : The license key of Barcode Reader.   
`[in]	pLicenseContent` <*string*> : An encrypted string representing the license content (runtime number, expiry date, barcode type, etc.) obtained from the method [`OutputLicenseToString()`](#outputlicensetostring). 


#### Return value
Returns error code.


#### Code Snippet
```csharp
BarcodeReader reader = new BarcodeReader();
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
settings.IntermediateResultType = (int)EnumIntermediateResultType.IRT_ORIGINAL_IMAGE;
reader.UpdateRuntimeSettings(settings);
reader.DecodeFile("Your file path", "");
IntermediateResult[] IMR = reader.GetIntermediateResults();
TextResult[] result = reader.DecodeIntermediateResults();
```


&nbsp;


## OutputLicenseToString
Outputs the license content as an encrypted string from the license server to be used for offline license verification. 

```csharp
string Dynamsoft.DBR.BarcodeReader.OutputLicenseToString()
```
   

#### Return value
The output string which stores the contents of license. 



&nbsp;


## InitLTSConnectionParameters
Initializes a DMLTSConnectionParameters struct with default values.

```csharp
DMLTSConnectionParameters Dynamsoft.DBR.BarcodeReader.InitLTSConnectionParameters()
```   

#### Code Snippet
```csharp
BarcodeReader reader = new BarcodeReader();
DMLTSConnectionParameters ltsInfo = reader.InitLTSConnectionParameters();
ltsInfo.HandShake = "*****-hs-****";
ltsInfo.SessionPassword = "******";
string errorMsg;
readr.InitLicenseFromLts(ltsInfo, out errorMsg);
```

&nbsp;


## InitLicenseFromLTS
Initializes the barcode reader license and connects to the specified server for online verification.

```csharp
EnumErrorCode Dynamsoft.DBR.BarcodeReader.InitLicenseFromLTS(DMLTSConnectionParameters ltsConnectionParameters, out string errorMsg)
```   
   
#### Parameters
`[in]	ltsConnectionParameters` <*string*> : The struct DMLTSConnectionParameters with customized settings.  
`[in, out]	errorMsg` <*string*> : The detailed error message.

#### Return value
Returns error code.

#### Code Snippet
```csharp
BarcodeReader reader = new BarcodeReader();
DMLTSConnectionParameters ltsInfo = reader.InitLTSConnectionParameters();
ltsInfo.HandShake = "*****-hs-****";
ltsInfo.SessionPassword = "******";
string errorMsg;
readr.InitLicenseFromLts(ltsInfo, out errorMsg);
```

&nbsp;

