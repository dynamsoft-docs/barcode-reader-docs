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

A barcode result is returned as a `BarcodeResultItem` which provides a method `GetLocation` to get the result coordinate points. The next section will explore the different code snippets for each suppoorted programming language.

First, we must point out that the result coordinates can come in two forms: exact coordinate points in pixels, or as percentages of the total dimensions of the image. In order to control what form the result location should come in, please use the [`ResultCoordinateType`]({{ site.dcv_parameters_reference }}barcode-reader-task-settings/result-coordinate-type..html) parameter to control that.

In either mode, the points are listed in clockwise order, starting from the top-left point of the barcode area.

## Code Snippet

The following code snippet shows how to get the coordinates of the barcode:

<div class="sample-code-prefix template2"></div>
   >- C++
   >
>
```c++
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
CCapturedResult* result = cvr->Capture("IMAGE-FILE-PATH", CPresetTemplate::PT_READ_BARCODES);
if (result->GetErrorCode() != 0) {
    cout << "Error: " << result->GetErrorCode() << "," << result->GetErrorString() << endl;
}
int capturedResultItemCount = result->GetCount();
for (int j = 0; j < capturedResultItemCount; j++) 
{
    const CCapturedResultItem* capturedResultItem = result->GetItem(j);
    CapturedResultItemType type = capturedResultItem->GetType();
    if (type == CapturedResultItemType::CRIT_BARCODE) 
    {
        const CBarcodeResultItem* barcodeResultItem = dynamic_cast<const CBarcodeResultItem*> (capturedResultItem);
        CQuadrilateral location = barcodeResultItem->GetLocation();
        cout << "Result " << j + 1 << endl;
        cout << "Point 0: [" << location.points[0].coordinate[0] << ", " << location.points[0].coordinate[1] << " ]" << endl;
        cout << "Point 1: [" << location.points[1].coordinate[0] << ", " << location.points[1].coordinate[1] << " ]" << endl;
        cout << "Point 2: [" << location.points[2].coordinate[0] << ", " << location.points[2].coordinate[1] << " ]" << endl;
        cout << "Point 3: [" << location.points[3].coordinate[0] << ", " << location.points[3].coordinate[1] << " ]" << endl;
    }
}
// more process here
```
