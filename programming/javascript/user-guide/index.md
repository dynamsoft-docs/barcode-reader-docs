---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - User Guide
description: This is the user guide of Dynamsoft Barcode Reader JavaScript SDK.
keywords: user guide, javascript, js
breadcrumbText: User Guide
needAutoGenerateSidebar: true
---

# Dynamsoft Barcode Reader - for JavaScript User Guide

![Dynamsoft JavaScript Barcode SDK](assets/index/dbr-js-sdk.png)  

[Dynamsoft Barcode Reader SDK for Web](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) allows robust barcode scanning from a web page using any camera-equipped device, including mobile, laptop, or tablet. Built using JavaScript and **WebAssembly**, the SDK offers real-time single or multiple barcode localization, decoding of various [barcode types](https://www.dynamsoft.com/barcode-reader/features/#Supported-Barcode-Types), and short compilation times. In addition to live video stream decoding, the library can also read barcodes from static images.

In this guide, we help you step through the process of integrating the Dynamsoft Barcode Reader into your web application. Please find the table of contents below:

- [Basic Requirements](#basic-requirements)
- [Getting Started](#getting-started---hello-world)
    - [Import the Library](#import-the-library)
    - [Testing Hello World](#testing-hello-world)
    - [Barcode Reader vs Barcode Scanner](#barcode-reader-vs-barcode-scanner)
- [Configuration and Customization](#configuration-and-customization)
    - [Capture Settings](#capture-settings)
        - [Video Settings](#video-settings)
        - [Scan Settings](#scan-settings)
    - [Runtime Settings](#runtime-settings)
    - [Customizing the UI](#customizing-the-ui)
- [Known Issues](#known-issues)
- [Advanced Customizations]({{ site.js }}user-guide/advanced-customizations.html)
- [Deployment Activation]({{ site.js }}user-guide/deployment-activation.html)
- [Features Requirements]({{ site.js }}user-guide/features-requirements.html)
- [Upgrade]({{ site.js }}user-guide/upgrade.html)

## Basic Requirements

- Camera-equipped device
- Internet connection
- Supported Browser(s)
    - Chrome v52+ (v55+ on Android/iOS)
    - Firefox v57+ (v59+ on Android/iOS)
    - Edge v16+
    - Safari v11+ (Safari 11.2.2 ~ 11.2.6 are not supported)


## Getting Started - Hello World

Let's start by demonstrating the minimum JavaScript code needed to get the library up and running in a simple `HTML` page.

### Import the Library

There are several ways through which you can include the library in your own application. The most popular method is to import it directly via a CDN such as `jsDelivr` or `UNPKG`. However, you can also use `npm` or `yarn` to import the library which works better in certain scenarios. Finally, you can also download the library and host it yourself should you have concerns regarding the usage of a CDN or the `npm` package.

#### Importing via CDN

First, create a `HTML` page that follows the template of any simple `HTML` file. Afterwards, import the SDK using the [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js"></script>

<!-- or -->

<script src="https://unpkg.com/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js"></script>
```

#### Importing via npm or yarn

This import method is mostly used when using a framework such as React, Angular, or Vue. In order to include the library in your application using this method:
```bash
npm install dynamsoft-javascript-barcode

OR

yarn add dynamsoft-javascript-barcode
```
#### Importing the library manually and hosting it yourself
You can also choose to download the library and host the library yourself. To download the library, please use the following [link](https://www.dynamsoft.com/barcode-reader/downloads/). Hosting the library yourself involves a few more configuration steps that the other options do.

##### Step One: Deploy the dist folder
Once you have downloaded the library, copy `dist` folder from the library directory into your server (usually as part of your website / web application). Here is a quick breakdown of the files inside the `dist` folder:

- dbr.js // For referencing the library with a <script> tag
- dbr.browser.mjs // For using the library as a module (<script type="module">)
- dbr.scanner.html // Defines the default scanner UI
- dbr-<version>.worker.js // Defines the worker thread for barcode reading
- dbr-<version>.wasm.js // Compact edition of the library (.js)
- dbr-<version>.wasm // Compact edition of the library (.wasm)
- dbr-<version>.full.wasm.js // Full edition of the library (.js)
- dbr-<version>.full.wasm // Full edition of the library (.wasm)

##### Step Two: Configure the Server
Now that the `dist` folder is in the application directory on the server, it's time to configure the server to be able to host and serve the library. This involves two small steps:
1. Set the MIME type to include `application/wasm` so that `.wasm` files are supported. Different servers are configured differently, so here are some of the most popular frameworks
    - NGINX: [mime.types](https://www.nginx.com/resources/wiki/start/topics/examples/full/#mime-types)
    - IIS: [Web.config](https://github.com/dynamsoft-dbr/javascript-barcode/blob/dac614f8033661901d85381dfaff8d612115862a/documents/conf/Web.config)
    - Java™ EE web app: [web.xml](https://github.com/dynamsoft-dbr/javascript-barcode/blob/dac614f8033661901d85381dfaff8d612115862a/documents/conf/web.xml)
    - Node.js: [npm mime](https://github.com/broofa/node-mime)
2. Enable `HTTPS`: To use the library, you must access the web application via a secure `HTTPS` connection. This is due to browser security restrictions which only grant camera video streaming access to a [secure context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts). Here is how to enable HTTPS on some of the most popular server frameworks:

    - NGINX: [Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
    - IIS: [Create a Self Signed Certificate in IIS](https://aboutssl.org/how-to-create-a-self-signed-certificate-in-iis/)
    - Tomcat: [Setting Up SSL on Tomcat in 5 minutes](https://dzone.com/articles/setting-ssl-tomcat-5-minutes)
    - Node.js: [npm tls](https://nodejs.org/docs/v0.4.1/api/tls.html)

### Assigning a License

The library requires a license to work, so one of the first things that must be done when the page loads is to assign the license. The license is specified mainly using the properties [`organizationID`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader/properties.html#organizationid) and [`handshakeCode`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader/properties.html#handshakeCode).

Starting from v8.2.5 of the JavaScript edition, you can 

If you don't have a ready-to-use web server but have a package manager like npm or yarn, you can set up a simple HTTP server in minutes. Check out `http-server` on npm or yarn.

Please find the `Hello World` code below:

```html
<!DOCTYPE html>
<html>
<body>
    <!-- Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" ></script>
    <script>
        // initializes and uses the library

        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
```

[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/pL4e7yrd/)

`createInstance`: This method instantiates a `BarcodeReader` object or a `BarcodeScanner` object, depending on the scenario. For details on the difference between the two classes, please refer to the [BarcodeReader vs BarcodeScanner section](#barcode-reader-vs-barcode-scanner)

`onFrameRead`: This event is triggered after each single frame is scanned. The `results` object contains all the barcode results that the library found on this frame. In the above code, the results found in every frame are printed to the console. 

`onUnduplicatedRead`: This event is triggered when a new barcode (not a duplicate) is found. `txt` holds the barcode text value while `result` is an object that holds details of the found barcode. In this example, an alert will be displayed for each unique barcode found.

`show`: Displays the UI of the `BarcodeScanner` object and starts the scanning process.

### Testing Hello World

Open the HTML page in your browser and you should see a pop-up asking for permission to access the camera. Once camera access is granted, the video stream will start in the default UI of the **BarcodeScanner** object.

**Note**: If you don't see the pop-up, wait a few seconds for the library to finish compiling.   

Place a barcode in front of the camera once it opens up. Once the barcode is detected, you will see an alert with the text result. In addition, the located barcode will be highlighted via the default UI of the scanner.

Please be wary of the following two issues that you might encounter when opening the Hello World sample you just created, either locally or via a server.

### Barcode Reader vs Barcode Scanner

DBR JavaScript comes with two main classes:
1. [`BarcodeReader`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader/) is used when image decoding. If your typical use case does not involve an interactive video scenario (decoding barcodes directly from a video stream) but rather, just images, then going with the `BarcodeReader` class is recommended.
    ```
    reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
    ```
2. [`BarcodeScanner`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/) is the opposite, and should be used in the aforementioned interactive video scenarios. Therefore, this class comes with API addressing camera control and video settings which are not available in the other class.
    ```
    scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    ```



## Configuration and Customization 
The SDK comes with a variety of settings to help optimize the performance of the `BarcodeReader` or the `BarcodeScanner`, depending on your use. The settings are divided into two main categories, Capture Settings and Runtime Settings, with the latter being its own class `RuntimeSettings`.  The capture settings will mainly deal with two classes, `VideoSettings` and `ScanSettings`. The following section will break down each of these settings and how to use them.

### Capture Settings

This first section will look into the capture settings of the `BarcodeScanner` class. These settings are used to control the video media constraints and some of the more niche video scanner settings. Please note that these settings are not applicable to the `BarcodeReader` class.

#### Video Settings
The video settings are directly inherited from the [MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) dictionary used by `getUserMedia`. Please note that we will only use the `video` track constraint when it comes to DBR JavaScript.

To update these `MediaStreamConstraints` settings such as video width, video height, frame rate, or choosing which camera to use (in case a device is equipped with multiple cameras), the [updateVideoSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/methods/capture-settings.html?ver=latest#updatevideosettings) method can be used.

To retrieve the current video settings, you can use the [getVideoSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/methods/capture-settings.html?ver=latest#getvideosettings) method. Please note that `updateVideoSettings` and `getVideoSettings` are only applicable to the `BarcodeScanner` class.

The library offers several methods that allow you to set some of the video settings directly rather than through the `updateVideoSettings` method. Here is a quick breakdown:
- `setResolution`: Sets the current video resolution
- `setFrameRate`: Sets the current video frame rate
- `setColorTemperature`: Adjusts the video color temperature
- `setExposureCompensation`: Adjusts the exposure level of the video
- `setZoom`: Zoom in or out of the video stream
- `turnOnTorch`/`turnOffTorch`: Some cameras come equipped with a flash, like most phone cameras nowadays. These two methods allow the user to control the flash/torch camera feature from within the browser.

#### Scan Settings
The capture settings also include settings related to the video scanner behaviour, called the `ScanSettings`. To retrieve the current scan settings, you can use the [getScanSettings](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/methods/capture-settings.html#getscansettings).

The `ScanSettings` class lets the users control more niche things related to the scanner specifically. For instance, `duplicateForgetTime` specifies the time that the library remembers a found barcode, therefore allowing the library to ignore any duplicate results within the specified time period. This setting is very handy in situations where the user is scanning multiple barcodes on the same video frame.

The other members of `ScanSettings` are:
- `frameFilter`: Filters and discards video frames that are out of focus
- `intervalTime`: The duration of the scan interval to allow the library to release the CPU periodically.

### Runtime Settings
The `RuntimeSettings` interface is common to both the `BarcodeReader` and the `BarcodeScanner` classes. These settings are concerned more with the operation of the barcode decoding process itself, whether it has to do with localization, binarization, or any of the other various steps involved.

DBR JavScript comes with a few pre-built runtime settings templates that you can use depending on the scenario. There are currently 4 pre-built templates: `single`, `speed`, `balance`, and `coverage`.

- `single`: The **default** template used. This mode has been optimized to read a single barcode at a time very quickly.
- `speed`: This mode prioritizes speed over coverage when scanning a frame or image, and is recommended when decoding from a video stream. However, please note that this mode is slower than `single` if scanning a single barcode at a time.
- `coverage`: Vice-versa of the `speed` mode. This mode is recommended when there are multiple barcodes per frame or image and you want to ensure that the library consistently locates them all, despite taking a longer time to do so.
- `balance`: As the name suggests, this mode finds a balance between the two extremes of `speed` and `coverage`. If you find that the `speed` mode is missing barcodes, but the `coverage` mode is able to locate them all but the time cost is too high, then `balance` mode can find a good point in the middle.

The `RuntimeSettings` interface controls a lot of aspects of the library, such as choosing which barcode formats to detect or defining a specific region of an image or video stream to read barcodes from, among many others.

In fact, to best learn about all of the runtime settings and which scenarios call for which settings, it is best to refer to our [RuntimeSettings Parameters](https://www.dynamsoft.com/barcode-reader/parameters/) page. 

However, please note that not all of the parameters of `RuntimeSettings` are applicable to both core classes of DBR JavaScript. To learn which specifically apply to the JavaScript edition, please refer to this [page](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/global-interfaces.html#runtimesettings).

### Customizing the UI
The `BarcodeScanner` class of the JavaScript edition comes with its own default UI. This default UI, defined in `dbr.scanner.html` of the library files, comes with 3 core components:
- **Video Viewer**: This is the main component of the UI that displays the video stream from the camera, mobile or desktop. This viewer also comes with a canvas component that highlights any detected barcodes by default. This viewer, 
- **Source Select Dropdown**: This second component is used to select which camera to use should there be mutiple cameras available. By default, this dropdown auto-populates with all the available cameras to choose from.
- **Resolution Select Dropdown**: The last component is used to select the video resolution. Please note that your camera may not support all of the resolutions listed in the dropdown, especially the higher ones. To learn about your camera's capabilities and whether a certain resolution is supported, you can use the `getCapabilities` method after selecting the camera in question.

The SDK does, however, give you the ability to customize the UI to fit your application. In fact, there are 3 ways in which you can do this:

1. Modifying the `dbr.scanner.html` file directly can allow you to customize the default UI elements for any scanner instance that is created.

2. If you do not feel comfortable modifying the `dbr.scanner.html` file directly, you can copy it and modify the duplicate instead. Then, specify the modified file as the main UI file using the `defaultUIElementURL` property of the `BarcodeScanner` class as such: `Dynamsoft.DBR.BarcodeScanner.defaultUIElementURL = url` where `url` is the URL/path to the new file.

3. Build the UI as its own HTML element in the webpage. In order to do this, the HTML Element must either (1) be a `video` element with the `dbrScanner-video` class or (2) contain a `video` element with the `dbrScanner-video` class. Then, once the element is created, tell the SDK to use it via the `setUIElement` method as such:
    ```html
    <body>
        <div id="div-video-container">
            <video class="dbrScanner-video" playsinline="true"></video>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
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
    ```
    Please note that if the element does not exist once the `setUIElement` method is called, an error will be thrown. Therefore, the element must be declared manually in the HTML code, or created programatically via JavaScript. 

In the above example, we only included the video viewer component in the custom UI element `div-video-container`. What if we also wanted to include the source select dropdown or the resolution select dropdown elements? In that case, you would need to manually include the `select` elements and assign each the appropriate class:
```html
<video class="dbrScanner-video" playsinline="true"></video> <!-- Video Viewer component -->
<select class="dbrScanner-sel-camera"></select> <!-- Source Select component -->
<select class="dbrScanner-sel-resolution"></select> <!-- Resolution Select component -->
```

It is necessary to assign the correct class to the `select` dropdown elements so that the SDK will know to automatically populate them with the available options. 

The `dbrScanner-sel-camera` dropdown populates with the available camera sources.

The `dbrScanner-sel-resolution` dropdown populates with 8 resolution options by default. However, not all cameras out there support all of the resolution options, so you must check if the selected camera supports the resolution that you are trying to set it to. In case a camera does not support a certain resolution, the SDK will automatically choose the closest supported resolution less than the desired resolution.

You can also limit the number of resolution options if you believe that having all 8 options could be a little overwhelming and unnecessary for your users. To do so, manually define the options that you want to include. The currently used resolution value can be displayed as its own option, as long as it has the class `dbrScanner-opt-gotResolution`.

The following demonstrates putting all of these elements together, including limiting the number of resolution options:
```html
<body>
    <div id="div-video-container">
        <select class="dbrScanner-sel-camera"></select>
        <select class="dbrScanner-sel-resolution">
            <option class="dbrScanner-opt-gotResolution" value="got"></option>
            <option data-width="1920" data-height="1080">1920 x 1080</option>
            <option data-width="1280" data-height="720">1280 x 720</option>
            <option data-width="640" data-height="480">640 x 480</option>
        </select><br>
        <video class="dbrScanner-video" playsinline="true"></video>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
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
```

## Known Issues

#### getUserMedia non-HTTPS access issue

If you open the HTML file as `file:///` or `http://`, the following error may appear in the browser console:

> [Deprecation] getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.

In Safari 12 the equivalent error is:

> Trying to call getUserMedia from an insecure document.

To access the camera with the API [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), HTTPS is required.

**Note**: If you use Chrome or Firefox, you might not get the error because these two browsers allow camera access via `file:///` and `http://localhost`.

To make sure your web application can access the camera and resolve this error, please configure your web server to support HTTPS. The following links may help depending on the server framework:

- NGINX: [Configuring HTTPS servers](https://nginx.org/en/docs/http/configuring_https_servers.html)
- IIS: [Create a Self Signed Certificate in IIS](https://aboutssl.org/how-to-create-a-self-signed-certificate-in-iis/)
- Tomcat: [Setting Up SSL on Tomcat in 5 minutes](https://dzone.com/articles/setting-ssl-tomcat-5-minutes)
- Node.js: [npm tls](https://nodejs.org/docs/v0.4.1/api/tls.html)

#### Self-signed certificate issue

For testing purposes, a self-signed certificate can be used when configuring HTTPS. When accessing the site, the browser might say "the site is not secure". In this case, go to the certificate settings and set to trust this certificate.

In a production environment, you will need a valid HTTPS certificate.

## Demos and Examples

- [Online demo](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
- [Vue example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/vue)    
- [React example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/react)     
- [Angular example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/angular)  

