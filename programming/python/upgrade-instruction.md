---
layout: default-layout
title: Dynamsoft Barcode Reader - Upgrade Instruction - Python
description: This page shows how to upgrade to latest version.
keywords: Upgrade, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Upgrade to Latest Version     

## From version 8.x
- Run the following command to upgrade the assembly files
    ```
    pip install dbr --upgrade
    ```

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense?utm_source=docs" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
    ```python
    BarcodeReader.init_license("YOUR-LICENSE-KEY");
    reader = BarcodeReader()
    # add further process
    ```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use init_license to set the license.

- `init_license_from_dls`
- `init_license_from_server`
- `init_license_from_license_content` 

## From version 7.x
- Run the following command to upgrade the assembly files
    ```
    pip install dbr --upgrade
    ```

- Go to <a href="https://www.dynamsoft.com/customer/license/fullLicense?utm_source=docs" target="_blank">Customer Portal</a> to get your license key.

- Update your code to set the license
    ```python
    BarcodeReader.init_license("YOUR-LICENSE-KEY");
    reader = BarcodeReader()
    # add further process
    ```

>Note:
>The following license activation related functions have been deprecated, they still work in this version but could be removed in version 10.0. We recommend you to use init_license to set the license.

- `init_license_from_server`
- `init_license_from_license_content` 

