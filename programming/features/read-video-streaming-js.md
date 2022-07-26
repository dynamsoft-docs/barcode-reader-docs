---
layout: default-layout
title: Read Barcode from Video Streaming - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from video streaming in Dynamsoft Barcode Reader SDK.
keywords: Different Source
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-video-streaming-js.html
---

# Read Barcode from Video Streaming

`BarcodeScanner` is the class for video streaming barcode decoding. An example of `BarcodeScanner` is shown below.

```html
<!DOCTYPE html>
<html>
<body>
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.0.2/dist/dbr.js"></script>
    <script>
        // Specifies a license, you can visit https://www.dynamsoft.com/customer/license/trialLicense?ver=9.0.2&utm_source=guide&product=dbr&package=js to get your own trial license good for 30 days. 
        Dynamsoft.DBR.BarcodeScanner.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
        // Initializes and uses the library
        (async () => {
            let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
            scanner.onFrameRead = results => {
                if (results.length > 0) console.log(results);
            };
            scanner.onUniqueRead = (txt, result) => {
                alert(txt);
            };
            await scanner.show();
        })();
    </script>
</body>
</html>
```
