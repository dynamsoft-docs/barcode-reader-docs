---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader license methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: initLicense, initLicenseFromServer, initLicenseFromLicenseContent, outputLicenseToString, license methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`initLicense`](#initlicense) | Initializes license key and activate the SDK. |
  | [`getIdleInstancesCount`](#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`setDeviceFriendlyName`](#setdevicefriendlyname) | Sets a human-readable name that identifies the device. |
  | [`initLicenseFromServer`](#initlicensefromserver) | `Deprecated` |
  | [`initLicenseFromLicenseContent`](#initlicensefromlicensecontent) | `Deprecated` |
  | [`outputLicenseToString`](#outputlicensetostring) | `Deprecated` |
  | [`initDLSConnectionParameters`](#initdlsconnectionparameters) | `Deprecated` |
  | [`initLicenseFromDLS`](#initlicensefromdls) | `Deprecated` |
  | [`initLTSConnectionParameters`](#initltsconnectionparameters) | `Deprecated` |
  | [`initLicenseFromLTS`](#initlicensefromlts) | `Deprecated` |


## initLicense

Initializes license key and activates the SDK.

```java
static void com.dynamsoft.dbr.BarcodeReader.initLicense(String license) throws BarcodeReaderException
```   
   
**Parameters**  

`license` The product keys.

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  

```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
// add further process
```


## getIdleInstancesCount

Gets the count of available instances when charging by concurrent instances count.

```java
static int com.dynamsoft.dbr.BarcodeReader.getIdleInstancesCount()
```   

**Return Value**  

Returns available instances count.    
- 0: There is no space for new instance  
- -1: The available count needs to be updated from server by calling initLicense.
- N ( N > 0 ): N more instances can be created.

**Code Snippet**  

```java
//...
int count = BarcodeReader.getIdleInstancesCount();
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

## setDeviceFriendlyName

Sets a human-readable name that identifies the device.

```java
static void com.dynamsoft.dbr.BarcodeReader.setDeviceFriendlyName(String name) throws BarcodeReaderException
```   
   
**Parameters**  

`name` The device alias.

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  

```java
BarcodeReader.setDeviceFriendlyName("My-PC");
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
// add further process
```

## initLicenseFromServer

`Deprecated`. It still works in this version but could be removed in the near future.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromServer(String licenseServer, String licenseKey)	throws BarcodeReaderException
```   
   

## initLicenseFromLicenseContent

`Deprecated`. It still works in this version but could be removed in the near future.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromLicenseContent(String licenseKey, String licenseContent) throws BarcodeReaderException
```   


## outputLicenseToString

`Deprecated`. It still works in this version but could be removed in the near future.

```java
String com.dynamsoft.dbr.BarcodeReader.outputLicenseToString() throws BarcodeReaderException
```   


## initDLSConnectionParameters

`Deprecated`. It still works in this version but could be removed in the near future.

```java
static DMDLSConnectionParameters com.dynamsoft.dbr.BarcodeReader.initDLSConnectionParameters() throws BarcodeReaderException
```

## initLicenseFromDLS

`Deprecated`. It still works in this version but could be removed in the near future.

```java
static void com.dynamsoft.dbr.BarcodeReader.initLicenseFromDLS(DMDLSConnectionParameters dlsInfo) throws BarcodeReaderException
```


## initLTSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.
## initLicenseFromLTS
`Deprecated`. It still works in this version but could be removed in the near future.
