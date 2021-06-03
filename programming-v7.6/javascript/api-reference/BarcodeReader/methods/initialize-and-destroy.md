---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader Initialize and Destroy Methods
description: This page shows BarcodeReader Initialize and Destroy methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: createInstance, destroy, detectEnvironment, isLoaded, loadWasm, initialize and destroy methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# Javascript API Reference - `BarcodeReader` Initialize and Destroy Methods

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](#createinstance) | Create a  `BarcodeReader` object. |
| [`destroy`](#destroy) | Destroy the `BarcodeReader` object. |
| [`detectEnvironment`](#detectenvironment) | Detect the current environment. |
| [`isLoaded`](#isloaded) | Check if the decoding module is loaded. |
| [`loadWasm`](#loadwasm) | Manually load and compile the decoding WASM module. |

---

## createInstance

Create a `BarcodeReader` object.

```javascript
createInstance() returns Promise
```

### Return Value

<code>Promise<<a href="../#barcodereader">BarcodeReader</a>></code>

### Sample

```javascript
let reader = await Dynamsoft.BarcodeReader.createInstance();
```

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

## destroy

Destroy the `BarcodeReader` object. Equivalent to the previous method `deleteInstance()`.

```javascript
destroy() returns Promise
```

### Return Value

`Promise<any>`

## detectEnvironment

Detect the current device environment.

```javascript
detectEnvironment() returns Promise
```

### Return Value

`Promise<any>`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

## isLoaded

Check if the decoding module is loaded.

```javascript
isLoaded() returns Boolean
```

### Return Value

`Boolean`

### Sample

```javascript
Dynamsoft.BarcodeReader.isLoaded()
```

## loadWasm

Manually load and compile the decoding module. This method can be used to preload the decoding module to avoid lengthy lazy loading.

```javascript
loadWasm() returns Promise
```

### Return Value

`Promise<void>`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
