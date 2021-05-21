---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - Basic Customizations
description: This page shows how to customize basic features of Dynamsoft Barcode Reader JavaScript SDK.
keywords: user guide, basic customizations, initialize, javascript, js
needAutoGenerateSidebar: true
---

# Basic Customizations

## Initializing

The library is based on the `WebAssembly` standard; therefore, **on first use**, it needs some time to download and compile the `wasm` files. After first use, the browser may cache the file.

`Dynamsoft.DBR.BarcodeReader.loadWasm()` is the API to start the initialization.

```javascript
try{
    await Dynamsoft.DBR.BarcodeReader.loadWasm();
}catch(ex){
    console.error(ex);
}
```

Other APIs like `Dynamsoft.DBR.BarcodeReader.createInstance()` and `Dynamsoft.DBR.BarcodeScanner.createInstance()` will also call `loadWasm()` during initialization. The following demonstrates the most common usage. 

```javascript
let reader = null;
let scanner = null;
try{
    reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
    scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
}catch(ex){
    console.error(ex);
}
```

*NOTE*

Including the library with a script tag doesn't automatically initialize the library. For better performance, you may want to call `loadWasm()` to download and compile the wasm file in advance and create a reader or scanner instance later.   

Initialization consists of the following steps:

* Download

Download the necessary resources. Usually, we deploy the resources on CDN and set a long cache duration. *If your web server is faster, you should put the resources on your own server instead of using the CDN.*

* Compile    
    
The `wasm` files are automatically compiled once downloaded. The compilation time varies among different devices & browsers. While it takes less than a second on latest phones or PCs, it may take much longer on older devices.

* Initialize

The library needs to initialize every time the page loads. The initialization means creating a `BarcodeReader` or `BarcodeScanner` instance with specified settings.

## Configuring Scanner Settings

When creating an instance of the `BarcodeScanner` object, there are several configuration options. The following code shows some of the most popular ones:

```javascript
// set which camera and what resolution to use
await scanner.updateVideoSettings({ video: { width: 1280, height: 720, facingMode: "environment" } });

// use one of the built-in RuntimeSetting templates: "single" (decode single barcode, default mode), "speed", "balance", "coverage". "speed" is recommended for decoding from a video stream
await scanner.updateRuntimeSettings("speed");

// make changes to the template. The code snippet below demonstrates how to specify which symbologies are enabled
let runtimeSettings = await scanner.getRuntimeSettings();
runtimeSettings.barcodeFormatIds = Dynamsoft.EnumBarcodeFormat.BF_ONED | Dynamsoft.EnumBarcodeFormat.BF_QR_CODE;
await scanner.updateRuntimeSettings(runtimeSettings);

// set up the scanner behavior
let scanSettings = await scanner.getScanSettings();
// disregard duplicated results found in a specified time period
scanSettings.duplicateForgetTime = 20000;
// set a scan interval so the library may release the CPU from time to time
scanSettings.intervalTime = 300;
await scanner.updateScanSettings(scanSettings);
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/yfkcajxz/)

As you can see in the code, there are three types of configurations:

- `get/updateVideoSettings`: Configures the data source, i.e., the video stream. These settings include which camera to use, the resolution, etc. Learn more [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Syntax).

- `get/updateRuntimeSettings`: Configures the decode engine. Find a full list of these settings and their corresponding descriptions [here](../api-reference/global-interfaces.md#runtimesettings). For example, the following uses the built-in "speed" settings with updated `localizationModes`.

    ```javascript
    await barcodeScanner.updateRuntimeSettings("speed");
    //await barcodeScanner.updateRuntimeSettings("balance"); //alternative
    //await barcodeScanner.updateRuntimeSettings("coverage"); //alternative
    let settings = await barcodeScanner.getRuntimeSettings();
    settings.localizationModes = [
        Dynamsoft.EnumLocalizationMode.LM_CONNECTED_BLOCKS,
        Dynamsoft.EnumLocalizationMode.LM_SCAN_DIRECTLY,
        Dynamsoft.EnumLocalizationMode.LM_LINES, 0, 0, 0, 0, 0];
    await barcodeScanner.updateRuntimeSettings(settings);
    ```
    Try in [JSFiddle](https://jsfiddle.net/DynamsoftTeam/f24h8c1m/).
    
- `get/updateScanSettings`: Configures the behavior of the scanner which includes `duplicateForgetTime`, `intervalTime` and `filter`, etc.

## Customizing the UI

The library provides a built-in UI for the `BarcodeScanner`object where the default scanner UI is defined in the file `dist/dbr.scanner.html`. There are a few ways to customize it:

* Modify the file `dist/dbr.scanner.html` directly. 

  This option is only possible when you deploy these files yourself instead of using the CDN.

* Copy the file `dist/dbr.scanner.html` to your application, modify it and specify the new file as the default UI with the API `defaultUIElementURL`

  ```javascript
  Dynamsoft.DBR.BarcodeScanner.defaultUIElementURL = url;
  ```
  
  *Note*
  
  You must set `defaultUIElementURL` before you call `createInstance`.

* Build the UI element into your own web page and call `scanner.setUIElement(HTMLElement)` to specify that element.
* Append the default UI element to an element on your page. After that, you can customize it further. The following shows how to append the default UI to a DIV and hide the close button.
  
  ```html
  <div id="scannerUI"></div>
  ```
  
  ```javascript
  document.getElementById('scannerUI').appendChild(scanner.getUIElement());
  document.getElementsByClassName('dbrScanner-btn-close')[0].hidden = true;
  ```

The following is an example of the 3rd option above. 

```html
<!DOCTYPE html>
<html>
<body>
    <div id="div-video-container">
        <video class="dbrScanner-video" playsinline="true"></video>
    </div>
    <!-- Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
            await scanner.setUIElement(document.getElementById('div-video-container'));
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/2jzeq1r6/)

*NOTE*

The video element must contain the class `dbrScanner-video` so that it can be used.

```html
<video class="dbrScanner-video" playsinline="true"></video>
```

### Cameras and Resolution Options

Next, you can add the camera list and resolution list inside the UI element. In our case, the element would be `document.getElementById('div-video-container')`.

If the class names match the default ones, `dbrScanner-sel-camera` and `dbrScanner-sel-resolution`, the library will automatically populate the lists and handle the camera/resolution switching automatically.

```html
<select class="dbrScanner-sel-camera"></select>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/nbj75vxu/)

```html
<select class="dbrScanner-sel-resolution"></select>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/25v08paf/)

*Note*

By default, 8 hard-coded resolutions will be populated as options.

The following code shows how to display a custom set of resolution options.

```html
<select class="dbrScanner-sel-resolution">
    <option class="dbrScanner-opt-gotResolution" value="got"></option>
    <option data-width="1920" data-height="1080">1920 x 1080</option>
    <option data-width="1280" data-height="720">1280 x 720</option>
    <option data-width="640" data-height="480">640 x 480</option>
</select>
```

*NOTE*

Generally, you need to provide a resolution that the camera supports. However, in case a camera does not support the specified resolution, it usually uses the nearest supported resolution. As a result, the selected resolution may not be the actual resolution used. In this case, add an option with the class name `dbrScanner-opt-gotResolution` (as shown above) and the library will then use it to show the actual resolution.

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/tnfjks4q/)

## Decode Barcodes from Existing Video Stream

In v8.0, we introduced a new feature to decode barcodes from an existing video stream. To set the existing video stream, we'll use [`setUIElement()`](../api-reference/BarcodeScanner/methods/initialize-and-destroy.md#setuielement).

```html
<!DOCTYPE html>
<html>
<body>
    <div id="div-video-container">
        <video class="dbrScanner-existingVideo" src="myvideo.mp4"></video>
    </div>
    <!-- Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
            await scanner.setUIElement(document.getElementById('div-video-container'));
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
```
*NOTE*

The video element must contain the class `dbrScanner-existingVideo`.
