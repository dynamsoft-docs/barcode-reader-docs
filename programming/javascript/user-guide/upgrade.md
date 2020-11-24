---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - How to Upgrade
description: This page shows how to upgrade Dynamsoft Barcode Reader JavaScript SDK to the latest version.
keywords: user guide, upgrade, javascript, js
needAutoGenerateSidebar: true
---

# How to Upgrade

## From v7.x to v8.x

1. Activate your license.

In v8.0, we introduced a new license tracking mechanism, [License Tracking Service 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html).

To activate and configure your license, please follow the first and second steps in [this article](https://www.dynamsoft.com/barcode-reader/license-activation/set-full-license.html?ver=latest).

2. Update version and code.

If you are using a **CDN**, simply update the version number denoted after **@** in the URL.

   ```html
   <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.0.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
   ```

If you have deployed the library files on to your own server, you'll need to replace the old files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

Next, replace the value of data-productKeys to the generated handshake code in step 1. In the example above, the generated handshake code would replace `PRODUCT-KEYS`. 

3. API changes

- :exclamation: *Namespace change*

Use the new namespace `Dynamsoft.DBR` in place of just `Dynamsoft`. The following shows the equivalent changes for `BarcodeScanner` and `BarcodeReader`:

```js
   Dynamsoft.BarcodeScanner -> Dynamsoft.DBR.BarcodeScanner
   Dynamsoft.BarcodeReader -> Dynamsoft.DBR.BarcodeReader
```

- Deprecating `deblurLevel`

`deblurLevel` has been deprecated in v8.0 and replaced with `deblurModes`. Athough `deblurLevel` will continue to work in v8.0, we recommend updating your code to use `deblurModes` as soon as possible to avoid any breaking changes in the future.

Simply remove or comment out the line of code using `deblurLevel` and use deblurModes as demonstrated below.

```js
    let settings = await barcodeScanner.getRuntimeSettings();
    //settings.deblurLevel = 9;
    settings.deblurModes = ["DM_DIRECT_BINARIZATION",   
                            "DM_THRESHOLD_BINARIZATION", 
                            "DM_GRAY_EQUALIZATION",
                            "DM_SMOOTHING",
                            "DM_MORPHING",
                            "DM_DEEP_ANALYSIS",
                            "DM_SHARPENING",
                            "DM_SKIP"] 
    await barcodeScanner.updateRuntimeSettings(settings);
```

- Default runtime setting has changed from `speed` to `single` 

The `single` runtime setting was introduced in v7.5 as an experimental feature. In v8.0, `single` is now the default. The `single` setting is only applicable to `BarcodeScanner` and is suitable for scenarios where only one barcode needs to be read at a time. `single` is capable of reading a single barcode faster than `speed`. 

If you have explicitly specified other preset settings like `balance` or `coverage`, you can simply comment out the updateRuntimeSettings line or set `single` explicitly. 

```js
   //await barcodeScanner.updateRuntimeSettings('balance');
   await barcodeScanner.updateRuntimeSettings('single');
```

---

## Upgrade to v7.x

### From version 7.2.2-v2 and above

If you are using a **CDN**, simply update the version number denoted after **@** in the URL.

   ```html
   <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.6.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
   ```

If you have deployed the library files on your own server, you'll need to replace the old files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

### From version 7.2.2-v2 or below

Some major changes were made in version 7.2.2-v2 and will require existing code updates in your application.

Follow the detailed guide in [this post](https://www.dynamsoft.com/blog/insights/dynamsoft-barcode-reader-sdk-for-javascript-upgrade-from-v7-1-3-to-v7-2-2/) for upgrade steps. 

If you need further assistance with the upgrade, please feel free to [contact us](https://www.dynamsoft.com/Company/Contact.aspx).

