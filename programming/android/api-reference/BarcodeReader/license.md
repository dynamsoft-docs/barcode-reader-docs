---
layout: default-layout
title: Dynamsoft Barcode Reader Android API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader license methods of Dynamsoft Barcode Reader for Android SDK.
keywords: initLicense, initLicenseFromServer, initLicenseFromLicenseContent, outputLicenseToString, license methods, BarcodeReader, api reference, android
needAutoGenerateSidebar: true
---


# Android API Reference - BarcodeReader License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`initLicense`](#initlicense) | Read product key and activate the SDK. |
  | [`initLicenseFromServer`](#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`initLicenseFromLicenseContent`](#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`outputLicenseToString`](#outputlicensetostring) | Output the license content to a string from the license server. |

  ---

## initLicense

Read product key and activate the SDK.

```java
void com.dynamsoft.barcode.BarcodeReader.initLicense(String license) throws BarcodeReaderException
```

### Parameters

`license`: The product keys.


### Exceptions

[`BarcodeReaderException`](../class/BarcodeReaderException.md)


### Code Snippet

```java
BarcodeReader reader = new BarcodeReader();
reader.initLicense("t0260NwAAAHV***************");
reader.destroy();
```

## initLicenseFromServer

Initialize the license and connect to the specified server for online verification.

```java
void com.dynamsoft.barcode.BarcodeReader.initLicenseFromServer(String licenseServer, String licenseKey, DBRServerLicenseVerificationListener dbrServerLicenseVerificationListener)
```
   
### Parameters

- `licenseServer`: The URL of the license server.  
- `licenseKey`: The license key.
- `dbrServerLicenseVerificationListener`: The delegate to handle callback when license server returns.

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromServer("", "C087****",  new DBRServerLicenseVerificationListener() {
    @Override
    public void licenseVerificationCallback(boolean isSuccess, Exception error) {
    }
});
reader.destroy();
```

## initLicenseFromLicenseContent

Initialize barcode reader license from the license content on the client machine for offline verification.

```java
void com.dynamsoft.barcode.BarcodeReader.initLicenseFromLicenseContent(String licenseKey, String licenseContent) throws BarcodeReaderException
```   

### Parameters

- `licenseKey`: The license key.  
- `licenseContent`: An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](#outputlicensetostring).

### Exceptions

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
reader.destroy();
```

## outputLicenseToString

Output the license content as an encrypted string from the license server to be used for offline license verification.

```java
String com.dynamsoft.barcode.BarcodeReader.outputLicenseToString() throws BarcodeReaderException
```
   
### Return value

The output string which stores the contents of license.

### Exceptions

[`BarcodeReaderException`](../class/BarcodeReaderException.md)

### Remark

[`InitLicenseFromServer`](#initlicensefromserver) has to be successfully called before calling this method.

### Code Snippet

```java
BarcodeReader reader = new BarcodeReader("t0260NwAAAHV***************");
reader.initLicenseFromLicenseContent("t0260NwAAAHV***************", "C087****");
String licenseInfo = reader.outputLicenseToString();
reader.destroy();
```
