---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Accessors
description: This page shows BarcodeReader Accessors of Dynamsoft Barcode Reader JavaScript SDK.
keywords: engineResourcePath, productKeys, version, accessors, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeReader` Accessors

| Accessors            | Description |
|----------------------|-------------|
| [`engineResourcePath`](#engineresourcepath) | Get or set the engine (WASM) location. | 
| [`productKeys`](#productkeys) | Get or set the Dynamsoft Barcode Reader SDK product keys. | 
| [`version`](#version) | Get current version. | 

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
Dynamsoft.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/";

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
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

## version

Get the currently used version of Barcode Reader SDK.

```javascript
version returns string
```

#### Return Value

`string`
