---
layout: default-layout
title: Dynamsoft Barcode Reader JavaScript API Reference - BarcodeReader Decode Methods
description: This page shows BarcodeReader Decode methods of Dynamsoft Barcode Reader JavaScript SDK.
keywords: decode, decodeBase64String, decodeBuffer, decodeUrl, decode methods, BarcodeReader, api reference, javascript, js
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# JavaScript API Reference - `BarcodeReader` Decode Methods 

| Method               | Description |
|----------------------|-------------|
| [`decodeCurrentFrame`](#decodecurrentframe) | Decode barcodes from the current frame. |

---

## decodeCurrentFrame

Decode barcodes from the current frame.

```javascript
decodeCurrentFrame() returns Promise
```

### Return Value

Promise<[TextResult[]](../../global-interfaces.md#textresult)>
 
### Sample

```javascript
    let results = await reader.decdecodeCurrentFrameode();
    for(let result of results){
        console.log(result.barcodeText);
    }
```