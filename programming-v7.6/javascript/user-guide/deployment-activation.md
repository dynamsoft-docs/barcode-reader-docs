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
Dynamsoft.BarcodeReader.engineResourcePath = "url/to/the/dir/";
```

### Step Two: Configure the Server

Set the MIME type for `.wasm` to `application/wasm`.

Different servers are configured differently. Here are some popular ones:

- NGINX: `mime.types`
- IIS: `Web.config`
- Java™ EE web app: `web.xml`
- Node.js: `npm mime`

## License Activation

A full license is required for deployment. If you have not purchased a license yet, please visit our [online store](https://www.dynamsoft.com/store/dynamsoft-barcode-reader/).

### Step One : Create a Dynamsoft account

If you don't have an Dynamsoft account yet, sign up [here](https://www.dynamsoft.com/api-common/Regist/Regist). Be sure to use the same email that was registered for the purchase.

### Step Two : Log into Dynamsoft Customer Portal

Once logged in, click License in the left menu bar to show your purchased license(s).

### Step Three : Activate the License

Under **Status**, click **Activate Now** to specify a domain to bind your license key. The domain binding is a security feature to protect your license, optional but highly recommended.

A few examples of the domain:

- www.dynamsoft.com
- demo.dynamsoft.com
- *.dynamsoft.com
- *.dynamsoft.com; *.yoursite.com

### Step Four : Use the License

```html
<!-- Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license. -->
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.6.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

In the above sample code, simply replace `PRODUCT-KEYS` with your activated key.
