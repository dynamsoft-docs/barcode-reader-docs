---
layout: default-layout
title: Dynamsoft Barcode Reader - Upgrade Instruction - Java
description: This page shows how to upgrade to latest version.
keywords: Upgrade, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Upgrade to Latest Version     

## From version 8.x

- You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
```java
  BarcodeReader.initLicense("YOUR-LICENSE-KEY");
  BarcodeReader reader = new BarcodeReader();
  // add further process
```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use initLicense to set the license.

- `initLicenseFromDLS`
- `initLicenseFromServer`
- `initLicenseFromLicenseContent` 

## From version 7.x

- You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
```java
  BarcodeReader.initLicense("YOUR-LICENSE-KEY");
  BarcodeReader reader = new BarcodeReader();
  // add further process
```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use initLicense to set the license.

- `initLicenseFromServer`
- `initLicenseFromLicenseContent` 


## From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 9.x, we recommend you to review our sample code and re-write the barcode scanning module.
