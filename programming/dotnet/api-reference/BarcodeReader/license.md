---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader license methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: InitLicenseFromServer, InitLicenseFromLicenseContent, OutputLicenseToString, license methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---


# License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](#initlicense) | Initializes license key and activate the SDK. |
  | [`GetIdleInstancesCount`](#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`SetDeviceFriendlyName`](#setdevicefriendlyname) | Sets a human-readable name that identifies the device. |
  | [`InitLicenseFromServer`](#initlicensefromserver) | `Deprecated` |
  | [`InitLicenseFromLicenseContent`](#initlicensefromlicensecontent) | `Deprecated` |
  | [`OutputLicenseToString`](#outputlicensetostring) | `Deprecated` |
  | [`InitDLSConnectionParameters`](#initdlsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromDLS`](#initlicensefromdls) | `Deprecated` |
  | [`InitLTSConnectionParameters`](#initltsconnectionparameters) | `Deprecated` |
  | [`InitLicenseFromLTS`](#initlicensefromlts) | `Deprecated` |
  


## InitLicense
Initializes license key and activate the SDK.

```csharp
static EnumErrorCode Dynamsoft.DBR.BarcodeReader.InitLicense (string license, out string errorMsg)
```   
   
**Parameters**  
`[in]	licenseKey`	<*string*> : The license key of Barcode Reader.   
`[out]	errorMsg` <*string*> : The detailed error message.

**Return Value**  
Returns error code (returns DBR_SUCCESS if the function operates successfully).    
*You can check `errorMsg` to get detailed error message.*

**Code Snippet**  
```csharp
string errorMsg;
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
// add further process
```


## GetIdleInstancesCount
Gets available instances count when charging by concurrent instances count.

```csharp
static int Dynamsoft.DBR.BarcodeReader.GetIdleInstancesCount()
```   

**Return Value**  
Returns available instances count.    
- 0: There is no space for new instance  
- -1: The available count needs to be updated from server by calling InitLicense.
- N ( N > 0 ): N more instances can be created.

**Code Snippet**  
```csharp
//...
int count = BarcodeReader.GetIdleInstancesCount();
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

## SetDeviceFriendlyName

Sets a human-readable name that identifies the device.

```csharp
static EnumErrorCode Dynamsoft.DBR.BarcodeReader.SetDeviceFriendlyName(string name)
```

**Parameters**

`[in] name` The device alias.

**Return Value**

Returns error code (returns DBR_SUCCESS if the function operates successfully).

**Code Snippet**

```csharp
string errorMsg;
BarcodeReader.SetDeviceFriendlyName("My-PC");
BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
BarcodeReader reader = new BarcodeReader();
// add further process
```

## InitLicenseFromServer
`Deprecated`. It still works in this version but could be removed in the near future.

```csharp
int Dynamsoft.DBR.BarcodeReader.InitLicenseFromServer(string licenseServer, string licenseKey)
```   
   
## InitLicenseFromLicenseContent
`Deprecated`. It still works in this version but could be removed in the near future.

```csharp
int Dynamsoft.DBR.BarcodeReader.InitLicenseFromLicenseContent(string licenseKey, string strLicenseContent)
```

## OutputLicenseToString
`Deprecated`. It still works in this version but could be removed in the near future.

```csharp
string Dynamsoft.DBR.BarcodeReader.OutputLicenseToString()
```
   

## InitDLSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

```csharp
static DMDLSConnectionParameters Dynamsoft.DBR.BarcodeReader.InitDLSConnectionParameters()
```   

## InitLicenseFromDLS
`Deprecated`. It still works in this version but could be removed in the near future.

```csharp
static EnumErrorCode Dynamsoft.DBR.BarcodeReader.InitLicenseFromDLS(DMDLSConnectionParameters dlsConnectionParameters, out string errorMsg)
```   


## InitLTSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.
## InitLicenseFromLTS
`Deprecated`. It still works in this version but could be removed in the near future.

