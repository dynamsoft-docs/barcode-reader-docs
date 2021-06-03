---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: decode, decodeBase64String, decodeBuffer, decodeUrl, decode methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# Javascript API Reference - `BarcodeReader` Decode Methods 

| Method               | Description |
|----------------------|-------------|
| [`decode`](#decode) | Decode barcodes from images, binary data, URLs, and more. |
| [`decodeBase64String`](#decodebase64string) | Decode barcodes from a base64 encoded string. |
| [`decodeBuffer`](#decodebuffer) | Decode barcodes from raw buffer. |
| [`decodeUrl`](#decodeurl) | Decode barcodes from a URL. |

---

## decode

Decode barcodes from various sources, including binary data, images, base64 (with MIME type), URLs, etc.

```javascript
decode(source) returns Promise
```

### Parameters

`source` *Blob | Buffer | ArrayBuffer | Uint8Array | Uint8ClampedArray | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string*

### Return Value

Promise<[TextResult[]](../../global-interfaces.md#textresult)>
 
### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

## decodeBase64String

Decode barcodes from a base64 string with or without MIME type. For example, with MIME type specified: `data:image/jpg;base64,Xfjshekk...` and without: `Xfjshekk....`

```javascript
decodeBase64String(base64) returns Promise
```

### Parameters

`base64` *string*

### Return Value

Promise<[TextResult[]](../../global-interfaces.md#textresult)>


### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

## decodeBuffer

Decode barcodes from raw buffer.

```javascript
decodeBuffer(buffer, width, height, stride, format, config) returns Promise
```

### Parameters

`buffer` *Uint8Array | Uint8ClampedArray | ArrayBuffer | Blob | Buffer*  
`width` *number*  
`height` *number*  
`stride` *number*  
`format` *[`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat)*  
`config`<sub>optional</sub> *any*  

### Return Value

`Promise<any>`

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

## decodeUrl

Decode barcodes from URLs. The URL source must be in the same domain or allows Cross-Origin Resource Sharing (CORS).

```javascript
decodeUrl(url) returns Promise
```

### Parameters

`url` *string*

### Return Value

Promise<[TextResult[]](../../global-interfaces.md#textresult)>

### Sample

[Read barcodes from live camera](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
