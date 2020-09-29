---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - Advanced Customizations
description: This page shows how to customize advanced features of Dynamsoft Barcode Reader JavaScript SDK.
keywords: user guide, advanced customizations, debug, area, region, javascript, js
needAutoGenerateSidebar: true
---

# Advanced Customizations

## Debugging with Logs

Include the following in your code to print internal logs in the console.

```javascript
Dynamsoft.BarcodeReader._onLog = console.log;
```

## Read a specific area/region

To speed up the scanning process, you can choose to scan only a specific area/region.

```javascript
let settings = await scanner.getRuntimeSettings();
/*
 * The following code shrinks the decoding region by 25% on all sides
 */
settings.region.regionMeasuredByPercentage = 1;
settings.region.regionLeft = 25;
settings.region.regionTop = 25;
settings.region.regionRight = 75;
settings.region.regionBottom = 75;
await scanner.updateRuntimeSettings(settings);
```
[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/taykq592/)

## Show found barcodes

Try the following code to show found barcodes in `input` elements on the page.

```javascript
<input id="ipt-0">
<input id="ipt-1">
<input id="ipt-2">
let iptIndex = 0;
let scanner = null;
(async()=>{
    scanner = await Dynamsoft.BarcodeScanner.createInstance();
    await scanner.setUIElement(document.getElementById('div-video-container'));
    scanner.onFrameRead = results => {console.log(results);};
    scanner.onUnduplicatedRead = (txt)=>{
        document.getElementById('ipt-' + iptIndex).value = txt;
        if(3 == ++iptIndex){
            scanner.onUnduplicatedRead = undefined;
            // Hide the scanner if you only need to read these three barcodes
            scanner.hide();
        }
    };
    await scanner.show();
})();
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/tz9ngm2a/)