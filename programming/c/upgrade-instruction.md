---
layout: default-layout
title: Dynamsoft Barcode Reader - Upgrade Instruction - C
description: Follow the how-to guide and learn how to upgrade your Barcode Reader SDK version 6.x, 7.x or 8.x built for C to the latest version. 
keywords: Upgrade, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Upgrade to Latest Version     

## From version 8.x

- You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
```c
  char errorBuf[512];
  DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use DBR_InitLicense to set the license.

- `DBR_InitLicenseFromDLS`
- `DBR_InitLicenseFromServer`
- `DBR_InitLicenseFromLicenseContent` 

## From version 7.x

- You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
```c
  char errorBuf[512];
  DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use DBR_InitLicense to set the license.

- `DBR_InitLicenseFromServer`
- `DBR_InitLicenseFromLicenseContent` 


## From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 9.x, we recommend you to review our sample code and re-write the barcode scanning module.
