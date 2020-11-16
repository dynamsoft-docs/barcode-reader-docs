---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader license methods of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: initLicense, initLicenseFromServer, initLicenseFromLicenseContent, outputLicenseToString, license methods, BarcodeReader, api reference, java
needAutoGenerateSidebar: true
---


# Java API Reference - BarcodeReader License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`initLicense`](#initlicense) | Reads product key and activate the SDK. |
  | [`initLicenseFromServer`](#initlicensefromserver) | Initializes license and connect to the specified server for online verification. |
  | [`initLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initializes license from the license content on client machine for offline verification. |
  | [`outputLicenseToString`](#outputlicensetostring) | Outputs the license content to a string from the license server. |
  | [`initLTSConnectionParameters`](#initltsconnectionparameters) | Initializes a DMLTSConnectionParameters struct with default values. |
  | [`initLicenseFromLTS`](#initlicensefromlts) | Initializes the barcode reader license and connects to the specified server for online verification. |

  ---





## initLicense
Read product key and activate the SDK.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicense(String license) throws BarcodeReaderException
```   
   
#### Parameters
`license` The product keys.


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader();
reader.initLicense("t0260NwAAAHV***************");
reader.destroy();
```

&nbsp;





## initLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromServer(String licenseServer, String licenseKey)	throws BarcodeReaderException
```   
   
#### Parameters
`licenseServer` The URL of the license server.  
`licenseKey` The license key.

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromServer("", "C087****");
reader.destroy();
```

&nbsp;






## initLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromLicenseContent(String licenseKey, String licenseContent) throws BarcodeReaderException
```   

#### Parameters
`licenseKey` The license key.  
`licenseContent` An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](#outputlicensetostring).


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
reader.destroy();
```

&nbsp;






## outputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```java
String com.dynamsoft.dbr.BarcodeReader.outputLicenseToString() throws BarcodeReaderException
```   
   
#### Return value
The output string which stores the contents of license.


#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md)


#### Remark
[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.


#### Code Snippet
```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
String licenseInfo = reader.outputLicenseToString();
reader.destroy();
```
&nbsp;


## initLTSConnectionParameters

Initializes a DMLTSConnectionParameters struct with default values.

```java
DMLTSConnectionParameters com.dynamsoft.dbr.BarcodeReader.initLTSConnectionParameters() throws BarcodeReaderException
```
   
### Code Snippet

```java
BarcodeReader reader = new BarcodeReader();
DMLTSConnectionParameters info = reader.initLTSConnectionParameters();
info.handShakeCode = "*****-hs-****";
info.sessionPassword = "******";
reader.initLicenseFromLTS(info);
```

&nbsp;


## initLicenseFromLTS

Initializes the barcode reader license and connects to the specified server for online verification.

```java
void com.dynamsoft.dbr.BarcodeReader.initLicenseFromLTS(DMLTSConnectionParameters ltsInfo) throws BarcodeReaderException
```

### Parameters

- `ltsInfo`: The struct DMLTSConnectionParameters with customized settings.  


### Code Snippet

```java
BarcodeReader reader = new BarcodeReader();
DMLTSConnectionParameters info = reader.initLTSConnectionParameters();
info.handShakeCode = "*****-hs-****";
info.sessionPassword = "******";
reader.initLicenseFromLTS(info);
```

&nbsp;
