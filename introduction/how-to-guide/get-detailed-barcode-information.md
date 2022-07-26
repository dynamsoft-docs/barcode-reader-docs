---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Get Detailed Barcode Information
description: This page shows how to get detailed barcode information.
keywords: additional information, angle, confidence, decode result, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/get-detailed-barcode-information.html
---


# How-to Guides - Get Detailed Barcode Information

The Dynamsoft Barcode Reader SDK provides APIs for you to get the detailed barcode information like checksum digit, start/stop characters, error correction level, etc. To learn more about what information you can get, see the following API links:    

- [OneDCodeDetails]({{ site.structs }}OneDCodeDetails.html)
- [QRCodeDetails]({{ site.structs }}QRCodeDetails.html)
- [PDF417Details]({{ site.structs }}PDF417Details.html)
- [DataMatrixDetails]({{ site.structs }}DataMatrixDetails.html)
- [AztecDetails]({{ site.structs }}AztecDetails.html)



Here we take QR Code as example and show how to get the version and model of a QR Code.   


## What is the Version of a QR Code?

| QRCode Version | Modules |
|----------------|---------|
| Version 1 | 21 x 21 | 
| Version 2 | 25 x 25 | 
| ... | ... | 
| Version N | (17 + N x 4) x (17 + N x 4) | 
| Version 40 | 177 x 177 | 



## What is the Model of a QR Code?

| QRCode Model | Description |
|--------------|---------|
| Model 1 | The original QR Code. It is a code capable of coding 1,167 numerals with its maximum version being 14 (73 x 73 modules). | 
| Model 2 | Created by improving Model 1 so that this code can be read smoothly even if it is distorted in some way. This code can encode up to 7,089 numerals with its maximum version being 40 (177 x 177 modules). Today, the term QRCode usually refers to QRCode Model 2. | 

## Code Snippet for Getting Detailed Barcode Information

```cpp
int iRet = -1;
int iLicMsg = -1;
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
// Initialize license prior to any decoding
CBarcodeReader reader;
char sError[512];
iLicMsg = reader.InitLicense("f0068MgA4o***");
reader.GetRuntimeSettings(runtimeSettings);
runtimeSettings->barcodeFormatIds = BF_QR_CODE;
reader.UpdateRuntimeSettings(runtimeSettings, sError, 512);
//If error occurs to the license initialization
if (iLicMsg != DBR_OK)
{
    printf("Failed to initialize the license successfully: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
    return iLicMsg;
}
// Start decoding
iRet = reader.DecodeFile("<please input your image file path>", "");
// If error occurs
if (iRet != DBR_OK)
{
    printf("Failed to read barcode: %d\r\n%s\r\n", iRet, DBR_GetErrorString(iRet));
    return iRet;
}
// If succeeds
reader.GetAllTextResults(&paryResult);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
    QRCodeDetails* qrd = (QRCodeDetails*)paryResult->results[iIndex]->detailedResult;
    printf("QRCode Model:%d \r\n", qrd->model);
    printf("QRCode Version: %d \r\n", qrd->version);
    printf("BarcodeFormat: %s\r\n", paryResult->results[iIndex]->barcodeFormatString);
    printf("Text read: %s\r\n", paryResult->results[iIndex]->barcodeText);
}
// Finally release BarcodeResultArray
CBarcodeReader::FreeTextResults(&paryResult);
return 0;
```


