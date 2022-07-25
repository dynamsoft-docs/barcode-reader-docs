---
layout: default-layout
title: How to Get Detailed Barcode Information
description: This page shows how to get detailed barcode information.
keywords: additional information, OneDCodeDetails, QRCodeDetails, PDF417Details, DataMatrixDetails, AztecDetails
needAutoGenerateSidebar: false
permalink: /programming/features/get-detailed-info.html
---


# How to Get Detailed Barcode Information

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

<div class="sample-code-prefix"></div>
>- JavaScript
>- C
>- C++
>- C#
>- Java
>- Android
>- Objective-C
>- Swift
>- Python
>
>1. 
```javascript
```
2. 
```c
int iRet = -1;
char errorBuf[512];
TextResultArray* paryResult = NULL;
iRet = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    printf("%s\n", errorBuf);
}
void* reader = DBR_CreateInstance();
DBR_DecodeFile(reader, "YOUR-IMAGE-FILE-WITH-QR-CODES", ""); // Start decoding
DBR_GetAllTextResults(reader, &paryResult);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
    if(BF_QR_CODE == paryResult->results[iIndex]->barcodeFormat)
    {
        QRCodeDetails* qrd = (QRCodeDetails*)paryResult->results[iIndex]->detailedResult; // For QR Code, the type of detailedResult is QRCodeDetails
        printf("QRCode Model:%d \r\n", qrd->model);
        printf("QRCode Version: %d \r\n", qrd->version);
        printf("BarcodeFormat: %s\r\n", paryResult->results[iIndex]->barcodeFormatString);
        printf("Text read: %s\r\n", paryResult->results[iIndex]->barcodeText);
    }
}
DBR_FreeTextResults(&paryResult);
// Add further process
```
3. 
```cpp
char errorBuf[512];
int iRet = -1;
TextResultArray* paryResult = NULL;
iRet = dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    cout << errorBuf << endl;
}
CBarcodeReader* reader = new CBarcodeReader();
reader->DecodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", ""); // Start decoding
reader->GetAllTextResults(&paryResult);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
    if(BF_QR_CODE == paryResult->results[iIndex]->barcodeFormat)
    {
        QRCodeDetails* qrd = (QRCodeDetails*)paryResult->results[iIndex]->detailedResult; // For QR Code, the type of detailedResult is QRCodeDetails
        cout << "QRCode Model: " << qrd->model << endl;
        cout << "QRCode Version: " << qrd->version << endl;
        cout << "Barcode Format: " << paryResult->results[iIndex]->barcodeFormatString << endl;
        cout << "Barcode Text: " << paryResult->results[iIndex]->barcodeText << endl;
    }
}
CBarcodeReader::FreeTextResults(&paryResult);
// Add further process
```
4. 
```csharp
string errorMsg;
EnumErrorCode iRet = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (iRet != EnumErrorCode.DBR_SUCCESS)
{
    Console.WriteLine(errorMsg);
}
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", ""); // Start decoding
for (int iIndex = 0; iIndex < result.Length; iIndex++)
{
    if(EnumBarcodeFormat.BF_QR_CODE == result[iIndex].BarcodeFormat)
    {
        QRCodeDetails qrd = (QRCodeDetails)result[iIndex].DetailedResult; // For QR Code, the type of detailedResult is QRCodeDetails
        Console.WriteLine("QRCode Model: " + qrd.Model);
        Console.WriteLine("QRCode Version: " + qrd.Version);
        Console.WriteLine("Barcode Format: " + result[iIndex].BarcodeFormatString);
        Console.WriteLine("Barcode Text: " + result[iIndex].BarcodeText);
    }
}
// Add further process
```
5. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", ""); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    if(EnumBarcodeFormat.BF_QR_CODE == result[iIndex].barcodeFormat)
    {
        QRCodeDetails qrd = (QRCodeDetails)result[iIndex].detailedResult; // For QR Code, the type of detailedResult is QRCodeDetails
        System.out.println("QRCode Model: " + qrd.model);
        System.out.println("QRCode Version: " + qrd.version);
        System.out.println("Barcode Format: " + result[iIndex].barcodeFormatString);
        System.out.println("Barcode Text: " + result[iIndex].barcodeText);
    }
}
// Add further process
```
6. 
```java
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES"); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    if(EnumBarcodeFormat.BF_QR_CODE == result[iIndex].barcodeFormat)
    {
        // For QR Code, the type of detailedResult is QRCodeDetails
        QRCodeDetails qrd = (QRCodeDetails)result[iIndex].detailedResult;
        //Add further process
    }
}
```
7. 
```objc
NSError *err = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err]; // Start decoding
for (iTextResult* barcode in result)
{
    if(barcode.barcodeFormat == EnumBarcodeFormatQRCODE)
    {
        // For QR Code, the type of detailedResult is QRCodeDetails
        iQRCodeDetails* qrd = (iQRCodeDetails*)barcode.detailedResult;
        //Add further process
    }
}
```
8. 
```swift
let reader = DynamsoftBarcodeReader()
var result: [iTextResult]? = nil
do {
    result = try reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
} catch let err {
} // Start decoding
for barcode in result ?? [] {
    if barcode.barcodeFormat == EnumBarcodeFormat.QRCODE {
        // For QR Code, the type of detailedResult is QRCodeDetails
        let qrd = barcode.detailedResult as! QRCodeDetails
        //Add further process
    }
}
```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
text_results = dbr.decode_file("YOUR-IMAGE-FILE-WITH-QR-CODES")
for result in text_results:
    if EnumBarcodeFormat.BF_QR_CODE == result.barcode_format:
        qr_detail = result.detailed_result
        print("QRCode Model: ")
        print(qr_detail.model)
        print("QRCode Version: ")
        print(qr_detail.versions)
        print("Barcode Format: ")
        print(result.barcode_format_string)
        print("Barcode Text: ")
        print(result.barcode_text)
```
