---
layout: default-layout
title: How to Get Barcode Confidence and Angle
description: This page shows how to get barcode confidence and angle.
keywords: angle, confidence, decode result, how-to guides
needAutoGenerateSidebar: false
permalink: /programming/features/get-confidence-rotation.html
---

# How to Get Barcode Confidence and Rotation Angle

This article offers two examples about how to get result confidence and barcode rotation angle.

## Barcode Confidence

The score of recognition confidence could measure the reliability of a recognized result. The higher the score, the more precise the results are. 

## Barcode Rotation Angle

Dynamsoft Barcode Reader SDK is able to detect barcodes at all angles. The SDK is also able to return the angles of the barcodes decoded.

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

## Code Snippet for Getting Confidence and Angle

The following code snippet shows how to get the conficence and rotation angle of the barcode result:

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
DBR_DecodeFile(reader, "YOUR-IMAGE-FILE-PATH", ""); // Start decoding
DBR_GetAllTextResults(reader, &paryResult);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
    int confidence = paryResult->results[iIndex]->results[0]->confidence;
    int angle = paryResult->results[iIndex]->localizationResult->angle;
    //add further process with the confidence and angle
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
reader->DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
reader->GetAllTextResults(&paryResult);
for (int iIndex = 0; iIndex < paryResult->resultsCount; iIndex++)
{
    int confidence = paryResult->results[iIndex]->results[0]->confidence;
    int angle = paryResult->results[iIndex]->localizationResult->angle;
    //add further process with the confidence and angle
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
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
for (int iIndex = 0; iIndex < result.Length; iIndex++)
{
    int confidence = result[iIndex].Results[0].Confidence;
    int angle = result[iIndex].LocalizationResult.Angle;
    //add further process with the confidence and angle
}
// Add further process
```
5. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    int confidence = result[iIndex].results[0].confidence;
    int angle = result[iIndex].localizationResult.angle;
    //add further process with the confidence and angle
}
// Add further process
```
6. 
```java
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH"); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    int confidence = result[iIndex].results[0].confidence;
    int angle = result[iIndex].localizationResult.angle;
    //add further process with the confidence and angle
}
// Add further process
```
7. 
```objc
NSError *error = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err]; // Start decoding
for (iTextResult* barcode in result)
{
    int confidence = barcode.results[0].confidence;
    int angle = barcode.localizationResult.angle;
    //add further process with the confidence and angle
}
// Add further process
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
    let confidence = barcode.results[0].confidence
    let angle = barcode.localizationResult.angle
    //add further process with the confidence and angle
}
// Add further process
```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
for result in text_results:
    confidence = result.extended_results[0].confidence
    angle = result.localization_result.angle
    #add further process with the confidence and angle
```

[1]: assets/get-confidence-rotation/1d-angle.png

[2]: assets/get-confidence-rotation/qr-angle.png

[3]: assets/get-confidence-rotation/dm-angle.png

[4]: assets/get-confidence-rotation/aztec-angle.png

[5]: assets/get-confidence-rotation/maxicode-angle.png
