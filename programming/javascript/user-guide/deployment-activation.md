---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - Deployment
description: This page shows how to deploy Dynamsoft Barcode Reader JavaScript SDK on your own server.
keywords: user guide, deployment, javascript, js
needAutoGenerateSidebar: true
---

# Deployment Activation

## Deployment: Self-hosted, Offline, or Intranet 

The following steps guide you through how to deploy the library on your own server.

### Step One: Deploy the dist folder

Locate the **dist/** directory under the installation folder of the library and simply copy the entire directory to your server. The **dist/** folder should contain the following files:

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
Dynamsoft.DBR.BarcodeReader.engineResourcePath = "url/to/the/dir/";
```

### Step Two: Configure the Server

Set the MIME type for `.wasm` to `application/wasm`.

Different servers are configured differently. Here are some popular ones:

- NGINX: <a href="https://www.nginx.com/resources/wiki/start/topics/examples/full/#mime-types" target="_blank">mime.types</a>
- IIS: <a href="https://github.com/dynamsoft-dbr/javascript-barcode/blob/dac614f8033661901d85381dfaff8d612115862a/documents/conf/Web.config" target="_blank">Web.config</a>
- Java™ EE web app: <a href="https://github.com/dynamsoft-dbr/javascript-barcode/blob/dac614f8033661901d85381dfaff8d612115862a/documents/conf/web.xml" target="_blank">web.xml</a>
- Node.js: <a href="https://github.com/broofa/node-mime" target="_blank">npm mime</a>

Please note that HTTPS **must** be enabled in order to use the component. For how to enable HTTPS, please check out the manual of your webserver.

If deploying to a production server, it is recommended to use a valid SSL certificate.

## License Activation

A full license is required for deployment. If you have not purchased a license yet, please visit our [online store](https://www.dynamsoft.com/store/dynamsoft-barcode-reader/).

In version 8.0, we introduced [License Tracking 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html) to activate and track usage. Please follow the steps in [this article](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html) to activate and use your license. 
