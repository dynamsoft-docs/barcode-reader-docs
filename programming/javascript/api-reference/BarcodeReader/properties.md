---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Properties
description: This page shows BarcodeReader Properties of Dynamsoft Barcode Reader JavaScript SDK.
keywords: _bUseFullFeature, engineResourcePath, productKeys, version, licenseServer, sessionPwd, properties, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeReader` Properties

| Property            | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](#_busefullfeature) | If set to `true`, use the full-featured WASM module. |
| [`engineResourcePath`](#engineresourcepath) | Gets or sets the engine (WASM) location. | 
| [`productKeys`](#productkeys) | Gets or sets the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](#version) | Gets current version. | 
| [`licenseServer`](#licenseserver) | Gets or sets the URL of the license server(s) used for authentication and tracking. | 
| [`organizationID`](#organizationid) | Specify the Organization ID which determines which licenses are available. |
| [`handshakeCode`](#handshakecode) | Gets or sets the handshake code to interact with the license server(s). | 
| [`sessionPassword`](#sessionpassword) | Gets or sets the session password of the handshake code set in license tracking server. | 

---

## _bUseFullFeature

Set usage of compact or full featured SDK. If set to `true`, use the fully-featured WASM module. 

*Note: this API may change in the future.*

```javascript
Dynamsoft.DBR.BarcodeReader._bUseFullFeature = Boolean
```

### Default Value

`false` for web

### Sample

```javascript
Dynamsoft.DBR.BarcodeReader._bUseFullFeature = true;
await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

### :+1: Tips and Tricks

* Check out [what features are included](../../user-guide/features-requirements.md#compact-and-full-editions) in compact and full version.
* This property **must** be set before [`loadWasm`](methods/initialize-and-destroy.md#loadwasm).
* We recommend using the compact version in video decoding for its small size and quick initialization.
* This property cannot be set in NodeJS and will always use the fully featured version. 

## engineResourcePath

Get or set the Barcode Reader SDK engine path. The path should lead to a folder containing the JS and WASM files for distribution.

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

Gets or sets the URL of the license tracking server used to authenticate the license (handshakeCode) and track barcode reading usage. When set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification. A self hosting option is available. Learn more about [License Tracking Server 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html?ver=latest). Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

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
Dynamsoft.DBR.BarcodeReader.licenseServer = ["https://your.mainServer.com", "https://your.backupServer.com"];

await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

## organizationID

Get or set the organization ID. Check out more on [how to specify the Organization ID](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html?ver=latest#specify-the-organization-id).

#### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
```

## handshakeCode

Get or set the handshakeCode. Learn more about [What is handshakeCode](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#handshake-code). Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

> The API [productKeys](#productKeys) can be used to set the handshakeCode as well but we recommend using this new API instead.

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

Get or set the session password used for authentication of the license (handshake code) associated with the application. [Learn more](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#session-password) about session password in License Tracking Server 2.0. Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

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
Dynamsoft.DBR.BarcodeReader.sessionPassword = "MyPassw0rd";
await Dynamsoft.DBR.BarcodeReader.loadWasm();
```

