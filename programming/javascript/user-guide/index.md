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
- [Basic Customizations]({{ site.js }}user-guide/basic-customizations.html)
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

First, create a `HTML` page that follows the template of any simple `HTML` file. Afterwards, import the SDK using the [jsDelivr](https://www.jsdelivr.com/) or [UNPKG](https://unpkg.com/) CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>

<!-- or -->

<script src="https://unpkg.com/dynamsoft-javascript-barcode@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

You will need to replace `PRODUCT-KEYS` with a trial key for the sample code to work correctly. You can acquire a trial key [here](https://www.dynamsoft.com/customer/license/trialLicense).

If you don't have a ready-to-use web server but have a package manager like npm or yarn, you can set up a simple HTTP server in minutes. Check out `http-server` on npm or yarn.

Please find the minimum `Hello World` code below:

```html
<!DOCTYPE html>
<html>
<body>
    <!-- Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.3/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
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


`onFrameRead`: This event is triggered after each single frame is scanned. The `results` object contains all the barcode results that the library found on this frame. In the above code, the results found in every frame are printed to the console. 

`onUnduplicatedRead`: This event is triggered when a new barcode (not a duplicate) is found. `txt` holds the barcode text value while `result` is an object that holds details of the found barcode. In this example, an alert will be displayed for each unique barcode found. 
  

### Testing Hello World

Open the HTML page in your browser and you should see a pop-up asking for permission to access the camera. Once camera access is granted, the video stream will start in the default UI of the **BarcodeScanner** object.

**Note**: If you don't see the pop-up, wait a few seconds for the library to finish compiling.   

Place a barcode in front of the camera once it opens up. Once the barcode is detected, you will see an alert with the text result. In addition, the located barcode will be highlighted via the default UI of the scanner.

Please be wary of the following two issues that you might encounter when opening the Hello World sample you just created, either locally or via a server.

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

### Barcode Reader vs Barcode Scanner

DBR JavaScript comes with two main classes:
1. [`BarcodeReader`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader/) is used when image decoding. If your typical use case does not involve an interactive video scenario (decoding barcodes directly from a video stream) but rather, just images, then going with the `BarcodeReader` class is recommended.
2. [`BarcodeScanner`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner/) is the opposite, and should be used when video decoding. Therefore, this class comes with more API addressing camera control and the video settings.

## Customization and Configuration


## Demos and Examples

- [Online demo](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html)
- [Vue example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/vue)    
- [React example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/react)     
- [Angular example](https://github.com/Dynamsoft/javascript-barcode/tree/master/example/web/angular)  

