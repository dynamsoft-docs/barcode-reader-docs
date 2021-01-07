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
Dynamsoft.DBR.BarcodeReader._onLog = console.log;
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

## Set mode arguments

To precisely control a mode, you could adjust the specific mode parameter.

```javascript
let settings = await scanner.getRuntimeSettings();

/*
*The following code sets the sensitivity of the TextureDetectionModes to 9
*/

settings.furtherModes.textureDetectionModes = [            
Dynamsoft.DBR.EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION, 0, 0, 0, 0, 0, 0, 0];

await scanner.updateRuntimeSettings(settings);
await scanner.setModeArgument("TextureDetectionModes", 0, "Sensitivity", "9" ); 
/*
*0 standards for the first mode of TextureDetectionModes, which is "Dynamsoft.DBR.EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION" in this content.
*/
```
## Show found barcodes

Try the following code to show found barcodes in `input` elements on the page.

```javascript
<input id="ipt-0">
<input id="ipt-1">
<input id="ipt-2">
let iptIndex = 0;
let scanner = null;
(async()=>{
    scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
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
