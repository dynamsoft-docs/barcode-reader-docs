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
  | [`initLicense`](#initlicense) | Reads product key and activate the SDK. |
  | [`initLicenseFromServer`](#initlicensefromserver) | Initializes license and connect to the specified server for online verification. |
  | [`initLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initializes license from the license content on client machine for offline verification. |
  | [`outputLicenseToString`](#outputlicensetostring) | Outputs the license content to a string from the license server. |
  | [`initDLSConnectionParameters`](#initdlsconnectionparameters) | Initializes a DMDLSConnectionParameters struct with default values. |
  | [`initLicenseFromDLS`](#initlicensefromdls) | Initializes the barcode reader license and connects to the specified server for online verification. |
  | [`getIdleInstancesCount`](#getidleinstancescount) | Gets available instances count when charging by concurrent instances count. |
  | [`initLTSConnectionParameters`](#initltsconnectionparameters) | `Deprecated`. Use [initDLSConnectionParameters](#initdlsconnectionparameters) instead. |
  | [`initLicenseFromLTS`](#initlicensefromlts) | `Deprecated`. Use [initLicenseFromDLS](#initlicensefromdls) instead. |


## initLicense

Reads product key and activates the SDK.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicense(String license) throws BarcodeReaderException
```   
   
**Parameters**  

`license` The product keys.

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  

```java
BarcodeReader reader = new BarcodeReader();
reader.initLicense("t0260NwAAAHV***************");
reader.destroy();
```

## initLicenseFromServer

Initializes the license and connects to the specified server for online verification.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromServer(String licenseServer, String licenseKey)	throws BarcodeReaderException
```   
   
**Parameters**  

`licenseServer` The URL of the license server.  
`licenseKey` The license key.

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromServer("", "C087****");
reader.destroy();
```

## initLicenseFromLicenseContent

Initializes barcode reader license from the license content on the client machine for offline verification.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromLicenseContent(String licenseKey, String licenseContent) throws BarcodeReaderException
```   

**Parameters**  

`licenseKey` The license key.  
`licenseContent` An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](#outputlicensetostring).

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

**Code Snippet**  

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
reader.destroy();
```

## outputLicenseToString

Outputs the license content as an encrypted string from the license server for offline license verification.

```java
String com.dynamsoft.dbr.BarcodeReader.outputLicenseToString() throws BarcodeReaderException
```   
   
**Return Value**  

The output string which stores the content of the license.

**Exception**  

[`BarcodeReaderException`](../class/BarcodeReaderException.md)



**Code Snippet**  

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
String licenseInfo = reader.outputLicenseToString();
reader.destroy();
```

**Remarks**  
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.


## initDLSConnectionParameters

Initializes a `DMDLSConnectionParameters` struct with default values.

```java
static DMDLSConnectionParameters com.dynamsoft.dbr.BarcodeReader.initDLSConnectionParameters() throws BarcodeReaderException
```
   
**Code Snippet**  

```java
DMDLSConnectionParameters info = BarcodeReader.initDLSConnectionParameters();
info.handshakeCode = "*****-hs-****";
info.sessionPassword = "******";
BarcodeReader.initLicenseFromDLS(info);
BarcodeReader reader = new BarcodeReader();
```

## initLicenseFromDLS

Initializes the barcode reader license and connects to the specified server for online verification.

```java
static void com.dynamsoft.dbr.BarcodeReader.initLicenseFromDLS(DMDLSConnectionParameters dlsInfo) throws BarcodeReaderException
```

**Parameters**  

`dlsInfo`: The struct `DMDLSConnectionParameters` with customized settings.  

**Code Snippet**  

```java
DMDLSConnectionParameters info = BarcodeReader.initDLSConnectionParameters();
info.handshakeCode = "*****-hs-****";
info.sessionPassword = "******";
BarcodeReader.initLicenseFromDLS(info);
BarcodeReader reader = new BarcodeReader();
```

## getIdleInstancesCount

Gets the count of available instances when charging by concurrent instances count.

```java
static int com.dynamsoft.dbr.BarcodeReader.getIdleInstancesCount()
```   

**Return Value**  

Returns available instances count.    

**Code Snippet**  

```java
//...
int count = BarcodeReader.getIdleInstancesCount();
if(count > 0)
{
  //create instance and process further
}
else 
{
  //waiting for available instances 
}
```

## initLTSConnectionParameters
`Deprecated`. Use [initDLSConnectionParameters](#initdlsconnectionparameters) instead.
## initLicenseFromLTS
`Deprecated`. Use [initLicenseFromDLS](#initlicensefromdls) instead.
