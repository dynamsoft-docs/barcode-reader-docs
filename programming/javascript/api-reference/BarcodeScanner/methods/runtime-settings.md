---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeScanner Runtime Settings Methods
description: This page shows BarcodeScanner Runtime Settings Methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: updateRuntimeSettings, runtime settings methods, BarcodeScanner, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# JavaScript API Reference - `BarcodeScanner` Runtime Settings Methods

| Method               | Description |
|----------------------|-------------|
| [`updateRuntimeSettings`](#updateruntimesettings) | Modify and update the current runtime settings. |

---

## updateRuntimeSettings

Update the runtime settings with a given object or use the string `single`, `speed`, `balance`, or `coverage` to use our preset settings for `BarcodeScanner`. From v8.0, the default setting is `single`. Overrides [`BarcodeReader.UpdateRuntimeSettings`](../../BarcodeReader/methods/parameter-and-runtime-settings.md#updateruntimesettings).

`single` mode has been optimized to read one barcode at a time quickly. This mode performs faster than `speed` mode in this scenario. 

```javascript
updateRuntimeSettings(settings) returns Promise
```

### Parameters

`settings` [*RuntimeSettings*](../../global-interfaces.md#runtimesettings) | *string* 

### Return Value

`Promise<void>`

### Sample

```javascript
await scanner.updateRuntimeSettings('balance');
let settings = await scanner.getRuntimeSettings();
settings.barcodeFormatIds = Dynamsoft.EnumBarcodeFormat.BF_ONED;
await scanner.updateRuntimeSettings(settings);
```

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
