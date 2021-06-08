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

#### Code Snippet
```csharp
int iLicMsg = -1;
BarcodeReader _br = new BarcodeReader();
// Connect to Dynamsoft server to verify the license. 
iLicMsg = _br.InitLicenseFromServer("", "licenseKey1;licenseKey2");
if(iLicMsg != 0)
{
   Console.WriteLine("License error Code:",iLicMsg);
   return; 
}
// Decode barcodes happens here
//....
_br.Dispose();
```

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
int iLicMsg = -1;
BarcodeReader _br = new BarcodeReader();
// Use the SDK offline 
iLicMsg = _br.InitLicenseFromLicenseContent("licenseKey1;licenseKey2", "LicenseContent");
if(iLicMsg != 0)
{
   Console.WriteLine("License error Code:",iLicMsg);
   return; 
}
// Decode barcodes happens here
//....
_br.Dispose();
```


&nbsp;


## OutputLicenseToString
Outputs the license content as an encrypted string from the license server to be used for offline license verification. 

```csharp
string Dynamsoft.DBR.BarcodeReader.OutputLicenseToString()
```
   

#### Return value
The output string which stores the contents of license. 

#### Code Snippet
```csharp
int iLicMsg = -1;
string path = @"Put your file path here";
// To be able to use the license key offline, you need to store the license file obtained from Dynamsoft server once you use the API, InitLicenseFromServer.
BarcodeReader _br = new BarcodeReader();
// Check if there is a license file in the local machine. If not, connect to Dynamsoft Hosted server to verify the license. Otherwise, use the local license file.
if (!File.Exists(path))
{
   // Connect to Dynamsoft server to verify the license
   iLicMsg = _br.InitLicenseFromServer("", "licenseKey1;licenseKey2");
   // The first parameter is the string of the license server. Leaving it empty ("") means it will connect to Dynamsoft License Server for online verification.
   if(iLicMsg != 0)
   {
      Console.WriteLine("License error Code:",iLicMsg);
      return; 
   }
   // If you wish to use SDK offline, store the license information as txt format
   string license = _br.OutputLicenseToString();
   File.WriteAllText(path, license);
}
else{
   // Use the local license file and use Dynamsoft Barcode Reader SDK 
   string license = File.ReadAllText(path);
   iLicMsg = _br.InitLicenseFromLicenseContent("licenseKey1;licenseKey2",license);
   if(iLicMsg != 0)
   {
      Console.WriteLine("Error Code:",iLicMsg);
      return; 
   }
}
// Decode barcodes happens here
//....
```

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

