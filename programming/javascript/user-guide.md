---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - User Guide
description: This is the user guide of Dynamsoft Barcode Reader JavaScript SDK.
keywords: user guide, javascript, js
needAutoGenerateSidebar: true
---

# Dynamsoft JavaScript Barcode SDK for Web 

![Dynamsoft JavaScript Barcode SDK](assets/user-guide/dbr-js-sdk.png)  

[Dynamsoft BarcodeReader SDK for Web](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) is a JavaScript API for barcode scanning based on the **WebAssembly** technology. It supports real-time localization and decoding of various barcode types. The library is capable of scanning barcodes from static images as well as directly from live video streams. It also supports reading multiple barcodes at once.  

Also see [Dynamsoft JavaScript Barcode SDK for Node](https://github.com/dynamsoft-dbr/node-javascript-barcode).  

## Features

### Supported Symbologies:

- 1D barcode: **Code 39**, **Code 128**, **Code 93**, **Codabar**, **Interleaved 2 of 5 (ITF)**, **EAN-13**, **EAN-8**, **UPC-A**, **UPC-E**, **Industrial 2 of 5** (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), **Code 39 Extended**.
- 2D barcode: **PDF417**, **QR**, **DataMatrix**, **Aztec**, and **MaxiCode**.    
- GS1 Databar: **Omnidirectional**, **Truncated**, **Stacked**, **Stacked Omnidirectional**, **Expanded**, **Expanded Stacked** and **Limited**.
- Patch Code
- GS1 Composite Code  
- Postal Code: **USPS Intelligent Mail**, **PostNet**, **Planet**, **Australian Post**, **UK Royal Mail (RM4SCC)**.  

### Supported Data Sources: 

`Blob`, `HTMLImageElement`, `HTMLVideoElement`, and `URL`, etc.  

### Compact and Full Editions  

Two editions - Compact and Full - are available. The Compact Edition includes basic features with smaller size, so it downloads and compiles faster; while the Full Edition includes full features but with bigger size.

A glance of the feature comparison between the two editions:
    
Features | Compact edition | Full edition
:-: | :-: | :-:
`wasm` size<sup>1</sup>(gzip) | 810KB | 1.1 MB
1D | √ | √
QR | √ | √
Micro QR | - | √
PDF417 | √ | √
Micro PDF417 | - | √
DataMatrix | √ | √
Aztec | - | √
MaxiCode | - | √
Patch Code | - | √
GS1 Composite Code | - | √
GS1 DataBar | - | √
Postal Code | - | √
DPM | - | √
getRuntimeSettings | √ | √
updateRuntimeSettings | √ | √
getIntermediateResults | - | √
initRuntimeSettingsWithString | - | √
outputSettingsToString | - | √
recommended scenario<sup>2</sup> | Customer Facing Application | Enterprise Solution  
    
<sup>1</sup> The `wasm` file size is of version 7.2.2. In later versions, the size may differ.  
  
<sup>2</sup> For the scenario where a user only needs to scan a barcode once, the Compact Edition is recommended as it downloads and compiles faster; For scenarios where a user needs to continuously scan lots of barcodes or where specific uncommon barcodes or advanced features are required, use the Full Edition by simply setting the following before you call `loadWasm` or `CreateInstance`.

```
Dynamsoft.BarcodeReader._bUseFullFeature = true;
```

## System Requirements

This library requires some advanced features which are supported by all mainstream modern browsers:

- WebAssembly, Blob, URL/`createObjectURL`, Web Workers  
    
    These four features are required for the library to work.

- `MediaDevices`/`getUserMedia` 
    
    Required only for **in-browser video streaming**. If a browser doesn't have this API, the Single Frame Mode will be used automatically. If the API exists but doesn't work correctly, Single Frame Mode can be used as an alternative.  

A list of supported browsers for your reference:  
     
**NOTE**: Apart from the browsers, the operating systems running on the target devices may impose some limitations of their own that could restrict the use of the library. Browser compatibility ultimately depends on whether the browser on that particular operating system supports the features listed above.  

Browser Name | Version
:-: | :-:
Chrome | v57+ (v59+ on Android/iOS<sup>1</sup>)
Firefox | v52+ (v55+ on Android/iOS<sup>1</sup>)
Edge<sup>2</sup> | v16+
Safari<sup>3</sup> | v11+

<sup>1</sup> On iOS, camera video streaming only works in Safari.  
<sup>2</sup> On Edge, due to strict Same-origin policy, you must host the library in the same domain as your web page.  
<sup>3</sup> Safari 11.2.2 ~ 11.2.6 are not supported.

## Install

yarn

```
$ yarn add dynamsoft-javascript-barcode
```

npm

```
$ npm install dynamsoft-javascript-barcode --save
```

cdn

```
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
<!-- or -->
<script src="https://unpkg.com/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

## Quick Run

- [Online demo](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)

- A simple HTML sample

    ```html
    <!DOCTYPE html>
    <html>
    <body>
        <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
        <script>
            let scanner = null;
            (async()=>{
                scanner = await Dynamsoft.BarcodeScanner.createInstance();
                scanner.onFrameRead = results => {console.log(results);};
                scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
                await scanner.show();
            })();
        </script>
    </body>
    </html>
    ``` 

- [Vue example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/vue)    
- [React example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/react)     
- [Angular example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/angular)   

## Getting Started: HelloWorld  

This section will help you use the library to build a simple web application to decode barcodes from a video stream.  

### Basic Requirements

- Internet connection  
- Supported Browser  
- Camera access  

### Step One: Write the code in one minute  

Create an HTML file with the following content. Deploy this to your web server and run the application over **HTTPS**.

- You will need to replace `PRODUCT-KEYS` with a trial key for the sample code to work correctly. You can acquire a trial key [here](https://www.dynamsoft.com/customer/license/trialLicense).
- If you don't have a ready-to-use web server and you happen to have a package manager like npm or yarn, you can set up a simple http server in minutes. Check out http-server on npm or yarn.
- `onFrameRead`: This event is triggered after each single frame is scanned. The `results` object contains all the barcode results that the library found on this frame.
- `onUnduplicatedRead`: This event is triggered when a new barcode (not a duplicate) is found. `txt` holds the barcode text value while `result` is an object that holds details of the found barcode.

```html
<!DOCTYPE html>
<html>
<body>
    <!-- Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        // initializes and uses the library
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.BarcodeScanner.createInstance();
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/pL4e7yrd/)

### Step Two: Enable camera access

Open the file in your browser and there will be a pop-up asking for permission to access the camera. Once the access is granted, you will see the video stream in the default UI of the **BarcodeScanner**.  

**Note**: If you don't see the pop-up, wait a few seconds for the initialization to finish.  

In this step, you might run into the following issues:

#### getUserMedia non-HTTPS access issue

If you open the HTML file as `file:///` or `http://`, the following error may appear in the browser console:

> [Deprecation] getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.

In Safari 12 the error would be:

> Trying to call getUserMedia from an insecure document.

As the error states, to access the camera with the API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), a secure channel (https://) is required.

**Note**: If you use Chrome or Firefox, you might not get the error because these two browsers allow camera access via file:/// and http://localhost.

To make sure your web application can access the camera, try to configure your web server to support HTTPS. The following links may help.

- NGINX: Configuring HTTPS servers
- IIS: Create a Self Signed Certificate in IIS
- Tomcat: Setting Up SSL on Tomcat in 5 minutes
- Node.js: npm tls

#### Self-signed certificate issue

For testing purposes, a self-signed certificate can be used when configuring HTTPS. When accessing the site, the browser might say "the site is not secure". In this case, go to the certificate settings and set to trust this certificate.

In a production environment, you will need a valid HTTPS certificate so you won't get this issue.

### Step Three: Time to scan

Put something with a barcode in front of the camera and you'll see it located and decoded right in the UI.

## Taking a closer look

### Initializing

The library is based on the `WebAssembly` standard; therefore, **on first use**, it needs some time to download and compile the `wasm` files. After the first use, the browser may cache the file so that the next time no downloading is required.

`Dynamsoft.BarcodeReader.loadWasm` is the API to start the initialization.

```
try{
    await Dynamsoft.BarcodeReader.loadWasm();
}catch(ex){
    console.error(ex);
}
```

That said, as shown in the sample above, you don't necessarily need to call the above API because other APIs like `Dynamsoft.BarcodeReader.createInstance` and `Dynamsoft.BarcodeScanner.createInstance` will call `loadWasm` themselves.

```
let reader = null;
let scanner = null;
try{
    reader = await Dynamsoft.BarcodeReader.createInstance();
    scanner = await Dynamsoft.BarcodeScanner.createInstance();
}catch(ex){
    console.error(ex);
}
```

   **NOTE**: Including the library with a script tag doesn't automatically initialize the library. For better performance, you may want to call loadWasm to download and compile the wasm file in advance and create a reader or scanner instance later.   

The detailed initialization includes the following steps:

**1. Download**   
    Download the necessary resources. Usually, we deploy the resources on CDN and set a long cache duration. If your web server is faster, you should put the resources on your own server instead of the CDN.

**2. Compile**    
    The `wasm` files are automatically compiled once downloaded. The compilation time varies among different devices & browsers. While it takes less than a second on latest phones or PCs, it may take seconds or longer on some older devices.


**3. Initialize**  
    The library needs to initialize every time the page loads. The initialization means creating an `BarcodeReader` or `BarcodeScanner` instance with specified settings.


### Configuring Scanner Settings

When creating an instance of the `BarcodeScanner` object, there are several configuration options. The following code shows some of the most useful ones:

```
// set which camera and what resolution to use
await scanner.updateVideoSettings({ video: { width: 1280, height: 720, facingMode: "environment" } });

// use one of three built-in RuntimeSetting templates, 'speed' is recommended for decoding from a video stream
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

As you can see in the code, there are three categories of configurations:

- `get/updateVideoSettings`: Configures the data source, i.e., the video stream. These settings include which camera to use, the resolution, etc. Learn more [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Syntax).

- `get/updateRuntimeSettings`: Configures the decode engine. Find a full list of these settings and their corresponding descriptions [here](api-reference/global-interfaces.md#runtimesettings). Try in [JSFiddle](https://jsfiddle.net/DynamsoftTeam/f24h8c1m/).

    e.g.,

    ```
    await barcodeScanner.updateRuntimeSettings("speed");
    await barcodeScanner.updateRuntimeSettings("balance");
    await barcodeScanner.updateRuntimeSettings("coverage");
    let settings = await barcodeScanner.getRuntimeSettings();
    settings.localizationModes = [
        Dynamsoft.EnumLocalizationMode.LM_CONNECTED_BLOCKS,
        Dynamsoft.EnumLocalizationMode.LM_SCAN_DIRECTLY,
        Dynamsoft.EnumLocalizationMode.LM_LINES, 0, 0, 0, 0, 0];
    settings.deblurLevel = 2;
    await barcodeScanner.updateRuntimeSettings(settings);
    ```

- `get/updateScanSettings`: Configures the behavior of the scanner which includes `duplicateForgetTime`, `intervalTime` and `filter`, etc.

### Customizing the UI

While the library provides a built-in `BarcodeScanner` which has its own UI, feel free to customize it.

The default scanner UI is defined in the file `dist/dbr.scanner.html`. There are 3 ways to customize it:

1. Modify the file `dist/dbr.scanner.html` directly (only possible when you deploy these files yourself instead of using the CDN).

2. Copy the file `dist/dbr.scanner.html`, modify it and specify the new file as the default UI by its URL `Dynamsoft.BarcodeScanner.defaultUIElementURL = url`. Note that you must set `defaultUIElementURL` before you call `createInstance`.

3. Build the UI into your own web page and call `scanner.setUIElement(HTMLElement)` to specify that element.


The following introduces the 3rd way. Check out the following code on how it's done.

```html
<!DOCTYPE html>
<html>
<body>
    <div id="div-video-container">
        <video class="dbrScanner-video" playsinline="true"></video>
    </div>
    <!-- Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.BarcodeScanner.createInstance();
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

The code has set the element `div-video-container` as the UI and inside it there is a video element for showing the video stream.

   **NOTE**: The class name of the video element must be set to `dbrScanner-video`.

   ```
   <video class="dbrScanner-video" playsinline="true"></video>
   ```

Next, you can add the camera list and resolution list.

   If the class names match the default ones which are `dbrScanner-sel-camera` and `dbrScanner-sel-resolution`, the library will automatically populate the lists and handle the camera/resolution switching automatically.

```
<select class="dbrScanner-sel-camera"></select>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/nbj75vxu/)

```
<select class="dbrScanner-sel-resolution"></select>
```
   8 default resolutions will automatically show up.

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/25v08paf/)

Too many resolutions may be overwhelming for end users. Check out the following code on how to offer your own resolution options.

```
<select class="dbrScanner-sel-resolution">
    <option class="dbrScanner-opt-gotResolution" value="got"></option>
    <option data-width="1920" data-height="1080">1920 x 1080</option>
    <option data-width="1280" data-height="720">1280 x 720</option>
    <option data-width="640" data-height="480">640 x 480</option>
</select>
```

   **Possible Issue**: Generally you need to provide a resolution that the camera supports. However, in case a camera does not support a specified resolution, it usually will just use the nearest supported resolution. As a result, the selected resolution may not be the actual resolution.

   **Solution**: To take care of this issue, you can add an option with the class name `dbrScanner-opt-gotResolution` (as shown above) which the library will then use to show the actual resolution being used.

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/tnfjks4q/)

## Advanced Usage

### Print out log for better debugging

Include the following in your code to print internal logs in the console.

```
Dynamsoft.BarcodeReader._onLog = console.log;
```

### Show found barcodes

Try the following code to show found barcodes in `input` elements on the page.

```
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

### Read a specific area/region

To speed up the scanning process, you can choose to scan only a specific area/region.
```
let settings = await scanner.getRuntimeSettings();
/*
 * 1 means true
 * Using a percentage is easier
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

## Deployment: Self-hosted, Offline, or Intranet 

The following steps guide you through how to deploy the library on your own server.

### Step one: Deploy the dist files

Locate the following files and place them in the same directory on your server. You can get them in the **dist/** folder under the installation folder of the library.

- `dbr.js` // For `<script>`
- `dbr.browser.mjs` // For `<script type="module">`
- `dbr.scanner.html` // Scanner default UI
- `dbr-<version>.worker.js` // A worker thread for decoding
- `dbr-<version>.wasm.js` // Compact Edition JS
- `dbr-<version>.wasm` // Compact Edition WASM
- `dbr-<version>.full.wasm.js` // Full Edition JS
- `dbr-<version>.full.wasm` // Full Edition WASM

If the resource files (e.g.,`wasm` files) are not placed in the same directory as `dbr.js`, you will need to specify the path using the API `engineResourcePath` before calling `loadWasm` or `createInstance`.

```javascript
Dynamsoft.BarcodeReader.engineResourcePath = "url/to/the/dir/";
```

### Step two: Configure the server

Make sure that your web server serves the `*.wasm` file with `Content-Type: application/wasm` so that the browser can recognize the file type.

All you need to do is set the MIME type for `.wasm` to `application/wasm`.

Different servers are configured differently. Here are some popular ones:

- NGINX: `mime.types`
- IIS: `Web.config`
- Java™ EE web app: `web.xml`
- Node.js: `npm mime`

## License Activation

It takes several steps to activate a purchased license. You may purchase a license online [here](https://www.dynamsoft.com/Secure/Barcode-Reader-BuyIt.aspx).

### Step One : Create a Dynamsoft account

If you don't have an Dynamsoft account yet, sign up [here](https://www.dynamsoft.com/CustomerPortal/Account/Registration.aspx). Be sure to use the same email that was registered for the purchase.

### Step Two : Log into Dynamsoft Customer Portal

Once logged in, click **Barcode Reader SDK** in the lef menu bar under **License Center** and you should be able to see your purchased keys in the right pane.

### Step Three : Activate the License

Under **Status**, click the **Activate Now** link to specify a domain to bind your license key. The domain binding is a security feature to protect your license, optional but highly recommended.

A few examples of the domain:

- www.dynamsoft.com
- demo.dynamsoft.com
- *.dynamsoft.com
- \*.dynamsoft.com; *.yoursite.com

### Step Four : Use the License

You can set the product key as below:

```html
<!-- Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license. -->
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

You can simply replace `PRODUCT-KEYS` with your key.

## How to Upgrade

**From version 7.2.2-v2 or above to the latest**:

- If you are using a **CDN**, be sure to change the version number in the URL like this:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.4.0-v1/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
   ```

- If you have deployed the library files on your **own server**, you'll need to replace the old files with the new version ones. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

**From version 7.2.2-v2 or below to the latest**:

Some major changes were made in the version **7.2.2-v2** so it may take a bit more effort to upgrade the library from an older version than **7.2.2-v2**.

Besides referencing to the correct version of the library, you might also need to make some API changes. Check out [this post](https://www.dynamsoft.com/blog/insights/dynamsoft-barcode-reader-sdk-for-javascript-upgrade-from-v7-1-3-to-v7-2-2/) for more information. 

If you need further assistance with the upgrade, please feel free to [contact us](https://www.dynamsoft.com/Company/Contact.aspx).

