---
layout: default-layout
title: How to Get Barcode Location
description: This page shows how to get barcode location.
keywords: location, decode result, how-to guides
needAutoGenerateSidebar: false
---

# How to Get Barcode Location

Once a barcode is found, you could be inclined to highlight it on the image for a better user experience. In this article, we will explain how to get the coordinates of the barcode so that they can be used to highlight the barcode.

## Localization Result

The barcode location information is found within the LocalizationResult attribute of a barcode TextResult object. Each barcode result comes with a localizationResult which can be accessed to get the result coordinate points. The next section will explore the different code snippets for each suppoorted programming language.

First, we must point out that the result coordinates can come in two forms: exact coordinate points in pixels, or as percentages of the total dimensions of the image. If you would like to learn more about how regions and coordinates are calculated, please refer to this [**section**](../../parameters/structure-and-interfaces-of-parameters.md#regiondefinition-and-how-it-works) of the Structure and Interfaces page.

In order to control what form the result location should come in, please use the [ResultCoordinateType](../../parameters/reference/result-coordinate-type.md) parameter to control that.

In either mode, the points are listed in clockwise order, starting from the top-left point of the barcode area.

## Code Snippet

The following code snippet shows how to get the coordinates of the barcode:

<div class="sample-code-prefix template2"></div>
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
>
```javascript
(async() => {
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    scanner.onUniqueRead = (txt, result) => {
        let x1 = result.localizationResult.x1;
        let y1 = result.localizationResult.y1;
        let x2 = result.localizationResult.x2;
        let y2 = result.localizationResult.y2;
        let x3 = result.localizationResult.x3;
        let y3 = result.localizationResult.y3;
        let x4 = result.localizationResult.x4;
        let y4 = result.localizationResult.x4;
        /* use the coordinates in some way */ 
        alert(txt);
    };
    await scanner.show();
})();
```
>
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
    int x1 = paryResult->results[iIndex]->localizationResult->x1;
    int y1 = paryResult->results[iIndex]->localizationResult->y1;
    int x2 = paryResult->results[iIndex]->localizationResult->x2;
    int y2 = paryResult->results[iIndex]->localizationResult->y2;
    int x3 = paryResult->results[iIndex]->localizationResult->x3;
    int y3 = paryResult->results[iIndex]->localizationResult->y3;
    int x4 = paryResult->results[iIndex]->localizationResult->x4;
    int y4 = paryResult->results[iIndex]->localizationResult->y4;
    /* use the coordinates to draw a highlight rectangle around them */
}
DBR_FreeTextResults(&paryResult);
// Add further process
```
>
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
    int x1 = paryResult->results[iIndex]->localizationResult->x1;
    int y1 = paryResult->results[iIndex]->localizationResult->y1;
    int x2 = paryResult->results[iIndex]->localizationResult->x2;
    int y2 = paryResult->results[iIndex]->localizationResult->y2;
    int x3 = paryResult->results[iIndex]->localizationResult->x3;
    int y3 = paryResult->results[iIndex]->localizationResult->y3;
    int x4 = paryResult->results[iIndex]->localizationResult->x4;
    int y4 = paryResult->results[iIndex]->localizationResult->y4;
    /* Use the coordinates to draw a highlight rectangle around the barcode */
}
CBarcodeReader::FreeTextResults(&paryResult);
// Add further process
```
>
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
    Point[] resLocation = result[iIndex].LocalizationResult.ResultPoints;
    //The points array will come out in clockwise order starting from the top-left point
    //add further process with the location points array
}
// Add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH", ""); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    Point[] resLocation = result[iIndex].localizationResult.resultPoints;
    //The points array will come out in clockwise order starting from the top-left point
    //add further process with the points, like drawing a rectangle to highlight the barcode
}
// Add further process
```
>
```java
BarcodeReader reader = new BarcodeReader();
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-PATH"); // Start decoding
for (int iIndex = 0; iIndex < result.length; iIndex++)
{
    Point[] resLocation = result[iIndex].localizationResult.resultPoints;
    //The points array will come out in clockwise order starting from the top-left point
    //add further process with the points, like drawing a rectangle to highlight the barcode
}
// Add further process
```
>
```objc
NSError *error = nil;
DynamsoftBarcodeReader* reader = [[DynamsoftBarcodeReader alloc] init];
NSArray<iTextResult*>* result = [reader decodeFileWithName:@"YOUR-IMAGE-FILE-PATH" error:&err]; // Start decoding
for (iTextResult* barcode in result)
{
    NSArray* resLocation = barcode.localizationResult.resultPoints;
    CGPoint resPoint1 = [resLocation[0] CGPointValue];
    CGPoint resPoint2 = [resLocation[1] CGPointValue];
    CGPoint resPoint3 = [resLocation[2] CGPointValue];
    CGPoint resPoint4 = [resLocation[3] CGPointValue];
    //The points are listed in clockwise order starting from the top-left point
    //add further process with the above result coordinates
}
// Add further process
```
>
```swift
let reader = DynamsoftBarcodeReader.init()
var result: [iTextResult]? = nil
var resLocation:[CGPoint]
do {
    result = try reader.decodeFileWithName("YOUR-IMAGE-FILE-PATH")
} catch let err {
} // Start decoding
for barcode in result ?? [] {
    resLocation = barcode.localizationResult.resultPoints as! [CGPoint]
    let resPoint1:CGPoint = resLocation[0]
    let resPoint2:CGPoint = resLocation[1]
    let resPoint3:CGPoint = resLocation[2]
    let resPoint4:CGPoint = resLocation[3]
    //add further process with the coordinate points
}
// Add further process
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
text_results = dbr.decode_file("YOUR-IMAGE-FILE-PATH")
for result in text_results:
    resPoints = result.localization_result.localization_points
    resPoint1 = resPoints[0]
    resPoint2 = resPoints[1]
    resPoint3 = resPoints[2]
    resPoint4 = resPoints[3]
    #add further process with the resPoints tuple or with the individual result points
```