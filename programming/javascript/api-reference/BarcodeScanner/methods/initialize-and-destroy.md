---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Initialize and Destroy Methods
description: This page shows BarcodeScanner Initialize and Destroy Methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: createInstance, destroy, getUIElement, setUIElement, initialize and destroy methods, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeScanner` Initialize and Destroy Methods

* *Class* Methods

| Method               | Description |
|----------------------|-------------|
| [`createInstance`](#createinstance) | Create a  `BarcodeScanner` object. |
| [`detectEnvironment`](../../BarcodeReader/methods/initialize-and-destroy.md#detectenvironment) | Detect the current environment. Inherited from the `BarcodeReader` class. |
| [`isLoaded`](../../BarcodeReader/methods/initialize-and-destroy.md#isloaded) | Check if the decoding module is loaded. Inherited from the `BarcodeReader` class. |
| [`loadWasm`](../../BarcodeReader/methods/initialize-and-destroy.md#loadwasm) | Manually load and compile the decoding WASM module. Inherited from the `BarcodeReader` class. |

* *Instance* Method

| Method               | Description |
|----------------------|-------------|
| [`destroy`](#destroy) | Destroy the `BarcodeScanner` object. |
| [`getUIElement`](#getuielement) | Get HTML element containing the `BarcodeScanner` object. |
| [`setUIElement`](#setuielement) | Set HTML element containing the `BarcodeScanner` object. |

---

## createInstance

Create a `BarcodeScanner` object. Overrides `BarcodeReader.createInstance`.

```javascript
createInstance() returns Promise
```

### Return Value

<code>Promise<<a href="../#barcodescanner">BarcodeScanner</a>></code>

### Sample

```javascript
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
```

## destroy

Destroy the `BarcodeScanner` object. Equivalent to the previous method `deleteInstance()`. Overrides `BarcodeReader.destroy`.

```javascript
destroy() returns Promise
```

### Return Value

`Promise<any>`

## getUIElement

Get the HTML element containing the `BarcodeScanner` object.

```javascript
getUIElement() returns HTMLElement
```

### Return Value

`HTMLElement`

## setUIElement

Set HTML element containing the `BarcodeScanner` object. In v8.0, `setUIElement` can be used to set an existing video stream element. The video element of the existing video stream must specify `dbrScanner-existingVideo` className. 

```javascript
setUIElement(elementOrUrl) returns Promise
```

### Parameters

```typescript
elementOrUrl: HTMLElement | string;
```

### Return Value

`Promise<void>`

### Sample

```html
<video class="dbrScanner-video" playsinline="true"></video>
<script>
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    scanner.setUIElement(document.getElementsByClassName("dbrScanner-video")[0]);
    await scanner.show();
</script>
```

### :+1: Tips and Tricks 

* This API changes the UI on the fly. If you want the UI to change as soon as the camera is created, use [`defaultUIElementURL`](../accessors.md#defaultuielementurl) instead.
