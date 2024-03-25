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
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >
>
```c++
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
CCapturedResult* result = cvr->Capture("IMAGE-FILE-PATH", CPresetTemplate::PT_READ_BARCODES);
if (result->GetErrorCode() != 0) {
    cout << "Error: " << result->GetErrorCode() << "," << result->GetErrorString() << endl;
}
int capturedResultItemCount = result->GetItemsCount();
for (int j = 0; j < capturedResultItemCount; j++) 
{
    const CCapturedResultItem* capturedResultItem = result->GetItem(j);
    CapturedResultItemType type = capturedResultItem->GetType();
    if (type == CapturedResultItemType::CRIT_BARCODE) 
    {
        const CBarcodeResultItem* barcodeResultItem = dynamic_cast<const CBarcodeResultItem*> (capturedResultItem);
        CQuadrilateral location = barcodeResultItem->GetLocation();
        cout << "Result " << j + 1 << endl;
        cout << "Point 0: [ " << location.points[0][0] << ", " << location.points[0][1] << " ]" << endl;
        cout << "Point 1: [ " << location.points[1][0] << ", " << location.points[1][1] << " ]" << endl;
        cout << "Point 2: [ " << location.points[2][0] << ", " << location.points[2][1] << " ]" << endl;
        cout << "Point 3: [ " << location.points[3][0] << ", " << location.points[3][1] << " ]" << endl;
    }
}
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
