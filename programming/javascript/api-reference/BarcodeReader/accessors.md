---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Accessors
description: This page shows BarcodeReader Accessors of Dynamsoft Barcode Reader JavaScript SDK.
keywords: engineResourcePath, productKeys, version, licenseServer, sessionPwd, accessors, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeReader` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](#engineresourcepath) | Gets or sets the engine (WASM) location. | 
| [`productKeys`](#productkeys) | Gets or sets the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](#version) | Gets current version. | 
| [`licenseServer`](#licenseserver) | Gets or sets the URL of the license tracking server. | 
| [`sessionPwd`](#sessionpwd) | Gets or sets the session password of the handshake code set in license tracking server. | 

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
Dynamsoft.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@@8.0.0/dist/";

await Dynamsoft.BarcodeReader.loadWasm();
```

## productKeys

Get or set the Barcode Reader SDK product key. Please visit our [user portal](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) to obtain a trial license.

### get

```javascript
productKeys = keys
```

#### Property Value

`keys` *string*  

#### Sample

```javascript
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
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
Dynamsoft.BarcodeReader.licenseServer = "";

await Dynamsoft.BarcodeReader.loadWasm();
```

## sessionPwd

Gets or sets the session password of the handshake code set in license tracking server..

### get

```javascript
sessionPwd() returns string
```

#### Return Value

`string`

### set

```javascript
sessionPwd(value) returns void
```

#### Parameters

`value` *string*  

#### Return Value

`void`

#### Sample

```javascript
Dynamsoft.BarcodeReader.sessionPwd = "";

await Dynamsoft.BarcodeReader.loadWasm();
```

