---
layout: default-layout
title: Dynamsoft Barcode Reader - Upgrade Instruction - Dotnet
description: This page shows how to upgrade to latest version.
keywords: Upgrade, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Upgrade to Latest Version     

## From version 8.0.0 to 8.x

Just replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx). Your existing license for 8.0.0 is compatible with 8.x.

## From version 7.x

### Replace the library

You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

### Update existing code

   Change the namespace from:
   ```csharp
      using Dynamsoft.Barcode;
   ```
   to:
   ```csharp
      using Dynamsoft;
      using Dynamsoft.DBR;
   ```

###  Upgrade the license

 Your previous SDK license for version 7.x is not compatible with the version 8.x. Please [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to upgrade your license.

 After you upgraded your license to version 8.x:

 - If you were using `ProductKeys`, please replace the old license with the newly generated one.

 - If you were using `InitLicenseFromServer` to connect to Dynamsoft server for license verification, then no need to change the license key. But please make sure the device has Internet connection.

 - If you were using `InitLicenseFromServer` + `InitLicenseFromLicenseContent` to connect to Dynamsoft server once and use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#connect-once) to re-register the device.
 
 - If you were using `InitLicenseFromLicenseContent` to use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#offline) to re-register the device.

## From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 8.x, we recommend you to review our sample code and re-write the barcode scanning module.

