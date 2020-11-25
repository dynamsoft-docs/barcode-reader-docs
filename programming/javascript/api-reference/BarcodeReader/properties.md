---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Properties
description: This page shows BarcodeReader Properties of Dynamsoft Barcode Reader JavaScript SDK.
keywords: _bUseFullFeature, bDestroyed, bSaveOriCanvas, oriCanvas, properties, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeReader` Properties

| Property             | Description |
|----------------------|-------------|
| [`_bUseFullFeature`](#_busefullfeature) | If set to `true`, use the fully-featured WASM module. |
| `bDestroyed` | Indicates whether a `BarcodeReader` object has been destroyed. | 
| `bSaveOriCanvas` | If set to `true`, save the original image to canvas. | 
| `oriCanvas` | The original canvas element. | 
| [`licenseServer`](#licenseServer) | The license server(s) used for authentication and tracking. |
| [`handshakeCode`](#handshakeCode) | The handshake code to interact with the license server(s). |
| [`sessionPassword`](#sessionPassword) | The session password used for authentication associated with the handshake code. |

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

## licenseServer

Set or get the license server used to authenticate the license (handshakeCode) and track barcode reading usage. By default, Dynamsoft will host the license tracking server but a self hosting option is available. Learn more about [License Tracking Server 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html?ver=latest). Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.licenseServer = ["https://your.mainServer.com", "https://your.backupServer.com"];
```

## handshakeCode

Set or get the handshakeCode. Learn more about [What is handshakeCode](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#handshake-code). Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

> The API [productKeys](accessors.md#productKeys) can be used to set the handshakeCode as well but we recommend using this new API instead.

### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.handshakeCode = "100017601-100043744";
```

## sessionPassword

Set or get the session password used for authentication of the license (handshake code) associated with the application. [Learn more](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#session-password) about session password in License Tracking Server 2.0. Set this API before calling [createInstance](methods/initialize-and-destroy.md#createInstance).

### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.sessionPwd = "MyPassw0rd";
```
