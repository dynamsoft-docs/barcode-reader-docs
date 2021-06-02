---
layout: default-layout
title: Dynamsoft Barcode Reader for JavaScript - How to Upgrade
description: This page shows how to upgrade Dynamsoft Barcode Reader JavaScript SDK to the latest version.
keywords: user guide, upgrade, javascript, js
needAutoGenerateSidebar: true
---

# How to Upgrade

## From v8.x to v8.2.5

In v8.2.5, we introduced the API `organizationID` as the recommended way to fetch a trackable license. However, all old ways of licensing the library are still supported.

---
## From v8.x to v8.1.2

### `TextResult` exception

In v8.1, we added exceptions to the `TextResult` class. An exception message and code is returned with each result if no valid license (trial or full) is present.

The following is an example of what may be returned:

`[Attention(exceptionCode:-20000)] http:/*d*n*m*soft.q*.com*r/U4***U*EaRA****W9*ZB`

More details on the exception can be found within each result. For example:

```
result.exception = {
   code: "-20000",
   message: "No license specified. Visit https://www.dynamsoft.com/customer/license/trialLicense to acquire a license or email support@dynamsoft.com."
}
```

---
## From v7.x to v8.x

### Change your license

In v8.0, we introduced a new license tracking mechanism, [License 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html). If you have a v7.x license and wish to upgrade to v8.x, you must [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to acquire a new license. 

### Update version and code

If you are using a **CDN**, simply update the version number denoted after **@** in the URL.

```html
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.5/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
```

If you have deployed the library files to your server, you'll need to replace the old files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

Next, replace the value ("PRODUCT-KEYS") of `data-productKeys` with the license you receive based on License 2.0 (as mentioned in the section [Change your license](#change-your-license) above).

### API changes

#### :exclamation: *Namespace change*

Use the new namespace `Dynamsoft.DBR` in place of just `Dynamsoft`. The following shows the equivalent changes for `BarcodeScanner` and `BarcodeReader`:

```js
Dynamsoft.BarcodeScanner -> Dynamsoft.DBR.BarcodeScanner
Dynamsoft.BarcodeReader -> Dynamsoft.DBR.BarcodeReader
```

If you are using the library as an ES/CMD module, you don’t need to change your code. Otherwise, you can either make a global change from `Dynamsoft` to `Dynamsoft.DBR` or use the following line to quickly make the namespace change.

```js
Dynamsoft = Dynamsoft.DBR; //This line should be called before you call any other methods/properties of the library.
```

#### Deprecating `deblurLevel`

`deblurLevel` has been deprecated in v8.0 and replaced with `deblurModes`. Athough `deblurLevel` will continue to work in v8.0, we recommend updating your code to use `deblurModes` as soon as possible to avoid any breaking changes in the future.

Check out the code below on how to switch from `deblurLevel` to `deblurModes`.

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

#### Default runtime setting has changed from `speed` to `single` for `BarcodeScanner`

The `single` runtime setting was introduced in v7.5 as an experimental feature for `BarcodeScanner`. In v8.0, `single` is made the default setting.

Before v8.0, the default setting was `speed`.

*NOTE*

`BarcodeReader` still uses `coverage` as the default setting.

#### Removed some deprecated APIs from `textResult`

* `BarcodeText` is removed, use `barcodeText` instead
* `BarcodeFormat` is removed, use `barcodeFormat` instead
* `BarcodeFormatString` is removed, use `barcodeFormatString` instead
* `LocalizationResult` is removed, use `localizationResult` instead
* `ResultPoints` in `localizationResult` is removed, use `x1,x2,x3,x4,y1,y2,y3,y4` instead
* `accompanyingTextBytes` is removed, if you wish to use the feature or something similar, please [contact us](https://www.dynamsoft.com/Company/Contact.aspx).

---
## Upgrade to v7.x

### From version 7.2.2-v2 and above

If you are using a **CDN**, simply update the version number denoted after **@** in the URL.

   ```html
   <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.6.0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
   ```

If you have deployed the library files on your own server, you'll need to replace the old files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

### Prior to version 7.2.2-v2

Some major changes were made in version 7.2.2-v2 and will require existing code updates in your application.

Follow the detailed guide in [this post](https://www.dynamsoft.com/blog/insights/dynamsoft-barcode-reader-sdk-for-javascript-upgrade-from-v7-1-3-to-v7-2-2/) for upgrade steps. 

If you need further assistance with the upgrade, please feel free to [contact us](https://www.dynamsoft.com/Company/Contact.aspx).

