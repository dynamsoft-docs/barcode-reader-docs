---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - Deployment
description: This page shows how to deploy Dynamsoft Barcode Reader JavaScript SDK on your own server.
keywords: user guide, deployment, javascript, js
needAutoGenerateSidebar: true
---

# Deployment and Activation

## Deployment: Self-hosted, Offline, or Intranet 

The following steps guide you through how to deploy the library on your own server instead of using it via a CDN. If you just want to use it over CDN, check out [one-minute set-up]({{site.js }}user-guide/?ver=latest#step-one-write-the-code-in-one-minute).

### Step One: Deploy the dist folder

Locate the "dist/" directory under the installation folder of the library and copy the entire directory to your server.

"dist/" folder should contain the following files and more:

- `dbr.js` // For referencing the library with a `<script>` tag
- `dbr.browser.mjs` // For using the library as a module (`<script type="module">`)
- `dbr.scanner.html` // Defines the default scanner UI
- `dbr-<version>.worker.js` // Defines the worker thread for barcode reading
- `dbr-<version>.wasm.js` // Compact edition of the library (.js)
- `dbr-<version>.wasm` // Compact edition of the library (.wasm)
- `dbr-<version>.full.wasm.js` // Full edition of the library (.js)
- `dbr-<version>.full.wasm` // Full edition of the library (.wasm)

If the resource files (e.g.,`wasm` files) are not placed in the same directory as `dbr.js`, you will need to specify the path using the API `engineResourcePath` before calling `loadWasm()` or `createInstance()`. For example:

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

Commercial deployment requires a full license. If you have not purchased a license yet, please visit our [online store](https://www.dynamsoft.com/store/dynamsoft-barcode-reader/).

In version 8.0, we introduced [License Tracking 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html) to activate and track usage. Please follow the steps in [this article](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html) to activate and use your license. 
