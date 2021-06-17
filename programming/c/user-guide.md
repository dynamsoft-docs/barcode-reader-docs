---
layout: default-layout
title: Dynamsoft Barcode Reader for C Language - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for C Language.
keywords: user guide, c
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---


# User Guide for C Language
In this guide, you will learn step by step on how to build a barcode reading application with Dynamsoft Barcode Reader SDK using C language.
If you haven't downloaded the SDK yet, download the `C/C++ Package` now from [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and unzip the package to your local disk.


## Hello World - Simplest Implementation
Let's start by creating the "Hello World" application which demonstrates how to use the minimum code to read barcodes from an image file.  
You can find the entire source code for this "Hello World" application in `DBR-C_CPP-{version number}\DynamsoftBarcodeReader\Samples\HelloWorld`.
### Include the Header Files
The header file(s) that can be found in `DBR-C_CPP-{version number}\DynamsoftBarcodeReader\Include\`.

```c
#include "DynamsoftCommon.h"
#include "DynamsoftBarcodeReader.h"
```
 
### Create a Barcode Reader Instance

```c
void *hBarcode = NULL;
hBarcode = DBR_CreateInstance();
```
 
### Call Decoding Function

```c
DBR_DecodeFile(hBarcode, "<your image file full path>", "");
```
 
### Get Barcode Results
For this tutorial, we print out the total barcodes count.

```c
TextResultArray* pResult = NULL;
DBR_GetAllTextResults(hBarcode, &pResult);
printf("%d total barcode(s) found. \n", pResult->resultsCount);
```


## Build Your Own Application
Now, we will extend the above "Hello World" application to meet real-world usage scenarios.
You can find the entire source code for this application in `DBR-C_CPP-{version number}\DynamsoftBarcodeReader\Samples\CommandLineCommonSettings`.

### Request and Specify a License
The Barcode Reader Instance expects a valid license to return the full result. You can log in the <a href="https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs" target="_blank">Customer Portal</a> and request a trial license. After that, add the code line to specify the license. 

```c
DBR_InitLicense(hBarcode, "<your license key here>");
```

### Configure the Barcode Scanning Behavior

#### Specify Barcode Format to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and DotCode from the image. The barcode formats to enable is highly application-specific. We recommend that you only enable the barcode formats your application requires. Check out [`Barcode Format Enumeration`]({{ site.enumerations }}format-enums.html) for full supported barcode formats. For this tutorial, we will set the application to detect QR Code only.

```c
char sError[512];
PublicRuntimeSettings runtimeSettings;
//...Initialization code
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.barcodeFormatIds = BF_QR_CODE; 
runtimeSettings.barcodeFormatIds_2 = BF2_NULL; 
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings, sError, 512);
//...Decode and do something with the result
```

#### Specify Maximum Barcode Count
By default, the SDK will read at least one barcode from the image. If you know exactly the barcode count or the maximum count you want to read, use `expectedBarcodesCount` to specify the count value to speed up the process. For this tutorial, we will set the application to detect 1 barcode.

```c
char sError[512];
PublicRuntimeSettings runtimeSettings;
//...Initialization code
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.expectedBarcodesCount = 1;
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings, sError, 512);
//...Decode and do something with the result
```

#### Specify a Scan Region
By default, the SDK will search the whole image for barcodes. This can lead to poor performance, especially when
dealing with high-resolution images. If you know exactly where the barcode locates, use `region` to specify the barcode location.   
For this tutorial, we will set the application to find the barcode located in the middle of the image.   

```c
char sError[512];
PublicRuntimeSettings runtimeSettings;
//...Initialization code
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.region.regionLeft = 25;
runtimeSettings.region.regionTop = 25;
runtimeSettings.region.regionRight = 75;
runtimeSettings.region.regionBottom = 75;
runtimeSettings.region.regionMeasuredByPercentage = 1; 
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings, sError, 512);
//...Decode and do something with the result
```
#### Advanced Settings
In addition to the content mentioned above, the SDK has many other settings and options that you can adjust to best suit your usage. To read more, please see [Scenario Settings]({{ site.scenario_settings }})

### Choose an Image Source 
The SDK provides multiple decoding functions that support reading barcodes from different sources, including static file,
video stream, files in memory, base64 string, bitmap, etc. Check out [`Decode Functions`]({{ site.c_methods }}decode.html) for full supported decoding functions. For this tutorial, we will set the application to read barcodes from an image file as the above "Hello World" application introduced.

### Use the Barcode Result 
The SDK returns multiple information of the decoded barcode, including barcode count, barcode format, barcode text, location, barcode raw data, etc. Check out [`TextResult`]({{ site.structs }}TextResult.html) for full supported result data. For this tutorial, we will set the application to print out the barcode count, format and text.

```c
TextResultArray* pResult = NULL;
DBR_GetAllTextResults(hBarcode, &pResult);
printf("%d total barcode(s) found. \n", pResult->resultsCount);
for (int iIndex = 0; iIndex < pResult->resultsCount; iIndex++)
{
    printf("Result %d\n", iIndex + 1);
    printf("Barcode Format: %s\n", pResult->results[iIndex]->barcodeFormatString);
    printf("Text reads: %s \n", pResult->results[iIndex]->barcodeText);
}
```

### Handle the Error
For the error handling mechanism, the SDK returns Error Code for each function and provides a function `DBR_GetErrorString` to get the readable message. You should add codes for error handling based on your needs. Check out [`Error Code`]({{ site.enumerations }}error-code.html) for full supported error codes.

## How to Distribute
To distribute your application, make sure the library files under `DBR-C_CPP-{version number}\DynamsoftBarcodeReader\Lib\{Platform}\` are distributed in the same folder as the application.
- Supported operating systems:
   - Windows: 7, 8, 10, 2003, 2008, 2008 R2, 2012;
   - Linux x64: Ubuntu 14.04.4+ LTS, Debian 8+, etc;  
   - Linux arm 32bit;
   - Linux arm 64bit (contact us to get the SDK);
   - macOS 64bit: 10.12+ (contact us to get the SDK).


## How to Upgrade

### From version 8.0 to 8.x

Just replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx). Your existing license for 8.0 is compatible with 8.x.

### From version 7.x

You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

Your previous SDK license for version 7.x is not compatible with the version 8.x. Please [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to upgrade your license.

In v8.0, we introduced a new license tracking mechanism, <a href="https://www.dynamsoft.com/license-tracking/docs/about/index.html" target="_blank">License 2.0</a>. 

If you wish to use License 2.0, please refer to [this article](../../license-activation/set-full-license.md) to set the license.

After you upgraded your license to version 8.x:

- If you were using `DBR_InitLicense`, please replace the old license with the newly generated one.

- If you were using `DBR_InitLicenseFromServer` to connect to Dynamsoft server for license verification, then no need to change the license key. But please make sure the device has Internet connection.

- If you were using `DBR_InitLicenseFromServer` + `DBR_InitLicenseFromLicenseContent` to connect to Dynamsoft server once and use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#connect-once) to re-register the device.

- If you were using `DBR_InitLicenseFromLicenseContent` to use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#offline) to re-register the device.

### From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 8.x, we recommend you to review our sample code and re-write the barcode scanning module.
