---
layout: default-layout
title: How to Get Barcode Location
description: This page shows how to get barcode location.
keywords: location, decode result, how-to guides
needAutoGenerateSidebar: false
---

# How to Get Barcode Location

Once a barcode is found, you could be inclined to highlight it on the image for a better user experience. In this article, we will explain how to get the coordinates of the barcode so that they can be used to highlight the barcode.

## BarcodeResultItem

A barcode result is returned as a `BarcodeResultItem` which provides a method `GetLocation` to get the result coordinate points. The result points are listed in clockwise order, starting from the top-left point of the barcode area. The next section will explore the different code snippets for each supported programming language.

## Code Snippet

The following code snippet shows how to get the coordinates of the barcode:

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- C#
   >- Java
   >
>
```javascript
const result = await cvRouter.capture(file, "ReadSingleBarcode");
for (let item of result.items) {
  if (item.type === Dynamsoft.Core.EnumCapturedResultItemType.CRIT_BARCODE) {
    console.log("Point 0: " + JSON.stringify(item.location.points[0]));
    console.log("Point 1: " + JSON.stringify(item.location.points[1]));
    console.log("Point 2: " + JSON.stringify(item.location.points[2]));
    console.log("Point 3: " + JSON.stringify(item.location.points[3]));  
  }
}
```
>
```c++
CCaptureVisionRouter* cvRouter = new CCaptureVisionRouter;
CCapturedResult* result = cvRouter->Capture("IMAGE-FILE-PATH", CPresetTemplate::PT_READ_BARCODES);
if (result->GetErrorCode() != 0) {
    cout << "Error: " << result->GetErrorCode() << "," << result->GetErrorString() << endl;
}
CDecodedBarcodesResult* barcodeResult = result->GetDecodedBarcodesResult();
if (barcodeResult != nullptr || barcodeResult->GetItemsCount() != 0)
{
    for (int index = 0; index < barcodeResult->GetItemsCount(); ++index)
    {
        const CBarcodeResultItem* barcode = barcodeResult->GetItem(index);
        CQuadrilateral location = barcode->GetLocation();
        cout << "Result " << index + 1 << endl;
        cout << "Point 0: [ " << location.points[0][0] << ", " << location.points[0][1] << " ]" << endl;
        cout << "Point 1: [ " << location.points[1][0] << ", " << location.points[1][1] << " ]" << endl;
        cout << "Point 2: [ " << location.points[2][0] << ", " << location.points[2][1] << " ]" << endl;
        cout << "Point 3: [ " << location.points[3][0] << ", " << location.points[3][1] << " ]" << endl;
    }
    barcodeResult->Release();
}
result->Release();
// more process here
```
>
```java
public void onDecodedBarcodesReceived(DecodedBarcodesResult result) {
    if (result != null){
        BarcodeResultItem[] items = result.getItems();
        for (int i=0; i < items.length; i++){
            BarcodeResultItem item = items[i];
            Quadrilateral barcodeQuadArea = item.getLocation();
            Point topLeftPoint = barcodeQuadArea.points[0];
            Point topRightPoint = barcodeQuadArea.points[1];
            Point bottomRightPoint = barcodeQuadArea.points[2];
            Point bottomLeftPoint = barcodeQuadArea.points[3];
            Log.i("DecodedBarcodes", "onDecodedBarcodesReceived: This is the number "+i+" barcode");
            Log.i("DecodedBarcodes", "The first point is: ("+topLeftPoint.x+", "+topLeftPoint.y+")");
            Log.i("DecodedBarcodes", "The second point is: ("+topRightPoint.x+", "+topRightPoint.y+")");
            Log.i("DecodedBarcodes", "The third point is: ("+bottomRightPoint.x+", "+bottomRightPoint.y+")");
            Log.i("DecodedBarcodes", "The fourth point is: ("+bottomLeftPoint.x+", "+bottomLeftPoint.y+")");
        }
    }
}
```
>
```objc
- (void)onDecodedBarcodesReceived:(DSDecodedBarcodesResult *)result {
    if (result.items.count > 0) {
        for (DSBarcodeResultItem *item in result.items) {
            DSQuadrilateral *barcodeQuadArea = item.location;
            CGPoint topLeftPoint = [barcodeQuadArea.points[0] CGPointValue];
            CGPoint topRightPoint = [barcodeQuadArea.points[1] CGPointValue];
            CGPoint bottomRightPoint = [barcodeQuadArea.points[2] CGPointValue];
            CGPoint bottomLeftPoint = [barcodeQuadArea.points[3] CGPointValue];
        }
    }
}
```
>
```swift
func onDecodedBarcodesReceived(_ result: DecodedBarcodesResult) {
    if let items = result.items, items.count > 0 {
        for item in items {
            let barcodeQuadArea = item.location
            let topLeftPoint:CGPoint = barcodeQuadArea.points[0] as! CGPoint
            let topRightPoint:CGPoint = barcodeQuadArea.points[1] as! CGPoint
            let buttomRightPoint:CGPoint = barcodeQuadArea.points[2] as! CGPoint
            let bottomLeftPoint:CGPoint = barcodeQuadArea.points[3] as! CGPoint
        }
    }
}
```
>
```python
cvr_instance = CaptureVisionRouter()
result = cvr_instance.capture("IMAGE-FILE-PATH", EnumPresetTemplate.PT_READ_BARCODES.value)
if result.get_error_code() != EnumErrorCode.EC_OK:
    print("Error:", result.get_error_code(), result.get_error_string())
barcode_result = result.get_decoded_barcodes_result()
if barcode_result is None or barcode_result.get_items() == 0:
    print("No barcode detected.")
else:
    items = barcode_result.get_items()
    print("Decoded", len(items), "barcodes.")
    for index,item in enumerate(items):
        quad = item.get_location()
        print("Result", index+1)
        print("Point 0: [{0},{1}]".format(quad.points[0].x, quad.points[0].y))
        print("Point 1: [{0},{1}]".format(quad.points[1].x, quad.points[1].y))
        print("Point 2: [{0},{1}]".format(quad.points[2].x, quad.points[2].y))
        print("Point 3: [{0},{1}]".format(quad.points[3].x, quad.points[3].y))
```
>
```csharp
using (CaptureVisionRouter cvRouter = new CaptureVisionRouter())
{
    string imageFile = "IMAGE-FILE-PATH";
    CapturedResult? result = cvRouter.Capture(imageFile, PresetTemplate.PT_READ_BARCODES);
    if (result == null)
    {
        Console.WriteLine("No barcode detected.");
    }
    else
    {
        if (result.GetErrorCode() != 0)
        {
            Console.WriteLine("Error: " + result.GetErrorCode() + ", " + result.GetErrorString());
        }
        DecodedBarcodesResult? barcodesResult = result.GetDecodedBarcodesResult();
        if (barcodesResult != null)
        {
            BarcodeResultItem[] items = barcodesResult.GetItems();
            Console.WriteLine("Decoded " + items.Length + " barcodes");
            foreach (BarcodeResultItem barcodeItem in items)
            {
                Console.WriteLine("Result " + (Array.IndexOf(items, barcodeItem) + 1));
                Quadrilateral quad = barcodeItem.GetLocation();
                Console.WriteLine("Point 0: [{0},{1}]", quad.points[0][0], quad.points[0][1]);
                Console.WriteLine("Point 1: [{0},{1}]", quad.points[1][0], quad.points[1][1]);
                Console.WriteLine("Point 2: [{0},{1}]", quad.points[2][0], quad.points[2][1]);
                Console.WriteLine("Point 3: [{0},{1}]", quad.points[3][0], quad.points[3][1]);
            }
        }
    }
}
```
>
```java
CaptureVisionRouter cvRouter = new CaptureVisionRouter();
CapturedResult[] results = cvRouter.captureMultiPages("IMAGE-FILE-PATH", EnumPresetTemplate.PT_READ_BARCODES);
for (CapturedResult result : results) {
    if (result.getErrorCode() != EnumErrorCode.EC_OK) {
        System.out.println("Error: " + result.getErrorCode() + ", " + result.getErrorString());
    }
    DecodedBarcodesResult barcodesResult = result.getDecodedBarcodesResult();
    if (barcodesResult != null) {
        BarcodeResultItem[] items = barcodesResult.getItems();
        System.out.println("Decoded " + items.length + " barcodes");
        for (int i = 0; i < items.length; i++) {
            BarcodeResultItem barcodeItem = items[i];
            System.out.println("Result " + (i + 1));
            Quadrilateral quad = barcodeItem.getLocation();
            System.out.println("Point 0: [" + quad.points[0].getX() + "," + quad.points[0].getY() + "]");
            System.out.println("Point 1: [" + quad.points[1].getX() + "," + quad.points[1].getY() + "]");
            System.out.println("Point 2: [" + quad.points[2].getX() + "," + quad.points[2].getY() + "]");
            System.out.println("Point 3: [" + quad.points[3].getX() + "," + quad.points[3].getY() + "]");
        }
    }
}
```
