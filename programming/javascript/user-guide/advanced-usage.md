---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - Advanced Customizations
description: This page shows how to customize advanced features of Dynamsoft Barcode Reader JavaScript SDK.
keywords: user guide, advanced customizations, debug, area, region, javascript, js
needAutoGenerateSidebar: true
---

# Advanced Usage

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

## Show internal logs

Include the following in your code to print internal logs in the console.

```javascript
Dynamsoft.DBR.BarcodeReader._onLog = console.log;
```

## Set mode arguments

To precisely control a mode, you can adjust its specific parameters.

```javascript
let settings = await scanner.getRuntimeSettings();

/*
 * The following code sets the sensitivity of the TextureDetectionModes to 9
 */

settings.furtherModes.textureDetectionModes = [            
Dynamsoft.DBR.EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION, 0, 0, 0, 0, 0, 0, 0];

await scanner.updateRuntimeSettings(settings);
// The 2nd parameter 0 specifies the first mode of TextureDetectionModes, which is "Dynamsoft.DBR.EnumTextureDetectionMode.TDM_GENERAL_WIDTH_CONCENTRATION" in this case.
await scanner.setModeArgument("TextureDetectionModes", 0, "Sensitivity", "9" ); 
```

## Display the intermediate result images or the original canvas

The intermediate result images are created when `intermediateResultTypes` is set in `RuntimeSettings`. Then they can be returned with the method `getIntermediateResults()`. These images can be used to show and debug the barcode reading process. 

The original canvas (`oriCanvas`) means the actual canvas which holds the image to be passed to the barcode reader engine for decoding. 

> *NOTE*
> 
> For efficiency, the library may utilize WebGL (Web Graphics Library) for preprocessing an image before passing it to the barcode reader engine. If WebGL is used, the image captured from the camera will not be rendered on the canvas, instead, it gets processed by WebGL first and then is passed to the barcode reader engine directly. In this case, there won't be an original canvas. Therefore, if `bSaveOriCanvas` is set to `true` for a `BarcodeReader` or `BarcodeScanenr` instance, the WebGL feature will be disabled for that instance.
> 
> On the other hand, if WebGL is disabled and you try to get the intermediate result specified by `EnumIntermediateResultType.IRT_ORIGINAL_IMAGE`, it will be exactly the same image as you would get with `oriCanvas`.

The following shows how to display these images on the page

```html
<div id='scannerV' style="width:50vw;height:50vh"></div>
<div id='cvses'></div>
```

```javascript
// If `_bUseFullFeature` is set to false, the original canvas will be displayed, otherwise, the intermediate result image(s) is displayed
Dynamsoft.DBR.BarcodeReader._bUseFullFeature = true;
let scanner = null;
(async () => {
    scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    /* The default of `_bUseWebgl` is true which means the intermediate result for  
       IRT_ORIGINAL_IMAGE will be one that has been preprocessed by WebGL */ 
    scanner._bUseWebgl = false;
    document.getElementById('scannerV').appendChild(scanner.getUIElement());;
    await scanner.updateRuntimeSettings('balance');
    let rs = await scanner.getRuntimeSettings();
    if (Dynamsoft.DBR.BarcodeReader._bUseFullFeature) {
        rs.intermediateResultTypes = 1;
    } else {
        scanner.bSaveOriCanvas = true;
    }
    await scanner.updateRuntimeSettings(rs);
    scanner.onUnduplicatedRead = async (txt, result) => {
        try {
            let cvss = Dynamsoft.DBR.BarcodeReader._bUseFullFeature ? await scanner.getIntermediateCanvas() : [scanner.oriCanvas];
            for (let cvs of cvss) {
                if (cvs.convertToBlob) {
                    var newCanvas = document.createElement("canvas");
                    var ctx = newCanvas.getContext("bitmaprenderer");
                    ctx.transferFromImageBitmap(cvs.transferToImageBitmap());
                    document.getElementById('cvses').appendChild(newCanvas);
                } else {
                    document.getElementById('cvses').appendChild(cvs);
                }
            }
            scanner.destroy();
        } catch (ex) {
            console.error(ex);
        }
    };
    await scanner.show();
})();
```

