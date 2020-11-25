---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Accessors
description: This page shows BarcodeReader Accessors of Dynamsoft Barcode Reader JavaScript SDK.
keywords: engineResourcePath, productKeys, version, licenseServer, sessionPwd, accessors, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeReader` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](#engineresourcepath) | Gets or sets the engine (WASM) location. | 
| [`productKeys`](#productkeys) | Gets or sets the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](#version) | Gets current version. | 
| [`licenseServer`](#licenseserver) | Gets or sets the URL of the license tracking server. | 
| [`handshakeCode`](#handshakecode) | Gets or sets the handshakeCode. | 
| [`sessionPassword`](#sessionpassword) | Gets or sets the session password of the handshake code set in license tracking server. | 

---

## engineResourcePath

Get or set the Barcode Reader SDK engine path. The path should lead to a folder containing the distributed JS and WASM files.

```javascript
engineResourcePath = value
```

#### Property Value

`value` *string*  

#### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.0.0/dist/";

await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

## productKeys

Get or set the Barcode Reader SDK product key. From version 8.0, the product key can also be a handshakeCode. Please visit our [user portal](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) to obtain a trial license.

### get

```javascript
productKeys() returns string
```

#### Return Value

`string`

### set

```javascript
productKeys(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`

#### Sample

In the <script> tag
  
```javascript
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

In JavaScript

```javascript
Dynamsoft.DBR.BarcodeReader.productKeys = "1000**601-1000***44"; // Set the handshakeCode
```

## version

Get the currently used version of Barcode Reader SDK.

```javascript
version returns string
```

#### Return Value

`string`

## licenseServer

Gets or sets the URL of the license tracking server. When set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.

### get

```javascript
licenseServer() returns string
```

#### Return Value

`string`

### set

```javascript
licenseServer(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`

#### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.licenseServer = "";

await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

## handshakeCode

Get or set the handshakeCode.

### get

```javascript
handshakeCode() returns string
```

#### Return Value

`string`

### set

```javascript
handshakeCode(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`

#### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.handshakeCode = "1000**601-1000***44";
```

## sessionPassword

Gets or sets the session password of the handshake code set in license tracking server.

### get

```javascript
sessionPassword() returns string
```

#### Return Value

`string`

### set

```javascript
sessionPassword(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`

#### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.sessionPassword = "";
await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

