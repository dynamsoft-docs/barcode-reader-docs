---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Initialize and Destroy Methods
description: This page shows BarcodeReader Initialize and Destroy methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: createInstance, destroy, detectEnvironment, isLoaded, loadWasm, initialize and destroy methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeReader` Initialize and Destroy Methods

* *Class* Methods

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](#createinstance) | Create a  `BarcodeReader` object. |
| [`destroy`](#destroy) | Destroy the `BarcodeReader` object. |
| [`detectEnvironment`](#detectenvironment) | Detect the current environment. |
| [`isLoaded`](#isloaded) | Check if the decoding module is loaded. |
| [`loadWasm`](#loadwasm) | Manually load and compile the decoding WASM module. |

* *Instance* Method

| Method               | Description |
|----------------------|-------------|
| [`destroy`](#destroy) | Destroy the `BarcodeReader` object. |

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
let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
```

## detectEnvironment

Detect the current device environment.

```javascript
detectEnvironment() returns Promise
```

### Return Value

`Promise<any>`

## isLoaded

Check if the decoding module is loaded.

```javascript
isLoaded() returns Boolean
```

### Return Value

`Boolean`

### Sample

```javascript
Dynamsoft.DBR.BarcodeReader.isLoaded()
```

## loadWasm

Manually load and compile the decoding module. This method can be used to preload the decoding module to avoid lengthy lazy loading.

```javascript
loadWasm() returns Promise
```

### Return Value

`Promise<void>`

## destroy

Destroy the `BarcodeReader` object.

```javascript
destroy() returns Promise
```

### Return Value

`Promise<any>`

### Sample

```javascript
let scanner = null;
scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
// Do the job
scanner.destroy();
```