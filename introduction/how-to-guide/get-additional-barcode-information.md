---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Get Additional Barcode Information
description: This page shows how to get additional barcode information.
keywords: additional information, angle, confidence, decode result, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/get-additional-barcode-information.html
---


# How-to Guides - Get Additional Barcode Information    

Dynamsoft Barcode Reader APIs for you to get the additional barcode information besides barcode value. The result is stored in the struct [`LocalizationResult`]({{ site.structs }}LocalizationResult.html) and struct [`ExtendedResult`]({{ site.structs }}ExtendedResult.html).    


This article offers two examples about how to get barcode rotation angle and how to get barcode confidence.     


To learn more about what additional barcode information you can get please see struct [`LocalizationResult`]({{ site.structs }}LocalizationResult.html) and struct [`ExtendedResult`]({{ site.structs }}ExtendedResult.html).    


## Get Barcode Rotation Angle    

Dynamsoft Barcode Reader SDK is able to detect barcodes at all angles. The SDK is also able to return the angles of the barcodes decoded. The result is stored in the struct [`LocalizationResult`]({{ site.structs }}LocalizationResult.html).    

The following illustrations will show how the angle is calculated for different barcode types:    

1. OneD Barcode    
    ![OneD Barcode Rotation Angle][1]    
    
2. QR Code    
    ![QR Code Rotation Angle][2]     

3. Data Matrix   
    ![Data Matrix Rotation Angle][3]     

4. Aztec   
    ![Aztec Rotation Angle][4]    

5. Maxicode   
    ![Maxicode Rotation Angle][5]   



The following code snippet shows how to get the rotation/skew angles of the barcodes decoded by the SDK:    
```cpp
TextResultArray* paryResult = NULL;
CBarcodeReader reader;
reader.InitLicense("put your license key here");
reader.DecodeFile("put your image file full path here", "");
reader.GetAllTextResults(&paryResult);
printf("%d total barcodes found. \r\n", paryResult->resultsCount);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
printf("Result %d\r\n", iIndex + 1);
printf("Barcode Angle:%d \n", paryResult->results[iIndex]->localizationResult->angle);
}
CBarcodeReader::FreeTextResults(&paryResult);
```
    



## Get Barcode Confidence    

The score of recognition confidence could measure the reliability of a recognized result. The higher the score, the more precise the results are. We could obtain confidence result from struct [`ExtendedResult`]({{ site.structs }}ExtendedResult.html). The following code snippet shows how to get the confidence of the barcodes decoded by the SDK:    


```cpp
TextResultArray* paryResult = NULL;
CBarcodeReader reader;
reader.InitLicense("put your license key here");
reader.DecodeFile("put your image file full path here", "");
reader.GetAllTextResults(&paryResult);
printf("%d total barcodes found. \r\n", paryResult->resultsCount);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
printf("Result %d\r\n", iIndex + 1);
printf("Barcode Confidence : %d \r", paryResult->results[iIndex]->results[0]->confidence);
CBarcodeReader::FreeTextResults(&paryResult);
```



[1]: assets/get-additional-barcode-information/1d-angle.png

[2]: assets/get-additional-barcode-information/qr-angle.png

[3]: assets/get-additional-barcode-information/dm-angle.png

[4]: assets/get-additional-barcode-information/aztec-angle.png

[5]: assets/get-additional-barcode-information/maxicode-angle.png
