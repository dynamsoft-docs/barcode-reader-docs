---
layout: default-layout
title: How to Get Detailed Barcode Information
description: This page shows how to get detailed barcode information.
keywords: additional information, OneDCodeDetails, QRCodeDetails, PDF417Details, DataMatrixDetails, AztecDetails
needAutoGenerateSidebar: false
---

# How to Get Detailed Barcode Information

The Dynamsoft Barcode Reader SDK provides APIs for you to get the detailed barcode information like checksum digit, start/stop characters, error correction level, etc. To learn more about what information you can get, see the following items:

- `OneDCodeDetails`: [C++]({{ site.cpp_api }}oned-code-details.html) / [Python]({{ site.python_api }}oned-code-details.html) / [.NET]({{ site.dotnet_api }}oned-code-details.html)
- `QRCodeDetails`: [C++]({{ site.cpp_api }}qr-code-details.html) / [Python]({{ site.python_api }}qr-code-details.html) / [.NET]({{ site.dotnet_api }}qr-code-details.html)
- `PDF417Details`: [C++]({{ site.cpp_api }}pdf417-details.html) / [Python]({{ site.python_api }}pdf417-details.html) / [.NET]({{ site.dotnet_api }}pdf417-details.html)
- `DataMatrixDetails`: [C++]({{ site.cpp_api }}datamatrix-details.html) / [Python]({{ site.python_api }}datamatrix-details.html) / [.NET]({{ site.dotnet_api }}datamatrix-details.html)
- `AztecDetails`: [C++]({{ site.cpp_api }}aztec-details.html) / [Python]({{ site.python_api }}aztec-details.html) / [.NET]({{ site.dotnet_api }}aztec-details.html)

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

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- C#
   >
>
```javascript
const result = await cvRouter.capture(file, "ReadSingleBarcode");
for (let item of result.items) {
  if (item.type === Dynamsoft.Core.EnumCapturedResultItemType.CRIT_BARCODE) {
    console.log("QR_version: " + item.details.version);
    console.log("QR_model: " + item.details.model);
  }
}
```
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
        if (barcodeResultItem->GetFormat() == BarcodeFormat::BF_QR_CODE)
        {
            const CQRCodeDetails* detail = dynamic_cast<const CQRCodeDetails*>(barcodeResultItem->GetDetails());
            cout << "Version: " << detail->version;
            cout << "Model: " << detail->model;
        }
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
            Log.i("DecodedBarcodes", "onDecodedBarcodesReceived: This is the number "+i+" barcode");
            QRCodeDetails qrDetails = (QRCodeDetails) item.getDetails();
            int version = qrDetails.getVersion();
            Log.i("DecodedBarcodes", "The version of the QR barcode is: "+version);
            int model = qrDetails.getModel();
            Log.i("DecodedBarcodes", "The model of the QR barcode is: "+model);
        }
    }
}
```
>
```objc
- (void)onDecodedBarcodesReceived:(DSDecodedBarcodesResult *)result {
    if (result.items.count > 0) {
        for (DSBarcodeResultItem *item in result.items) {
            DSQRCodeDetails *qrDetails = (DSQRCodeDetails *) item.details;
            NSInteger version = qrDetails.version;
            NSInteger model = qrDetails.model;
        }
    }
}
```
>
```swift
func onDecodedBarcodesReceived(_ result: DecodedBarcodesResult) {
    if let items = result.items, items.count > 0 {
        for item in items {
            let qrCodeDetails = item.details as! QRCodeDetails
            let version = qrCodeDetails.version
            let model = qrCodeDetails.model
        }
    }
}
```
>
```python
cvr = CaptureVisionRouter()
result = cvr.capture("IMAGE-FILE-PATH", EnumPresetTemplate.PT_READ_BARCODES.value)
if result.get_error_code() != EnumErrorCode.EC_OK:
    print("Error:", result.get_error_code(), result.get_error_string())
barcode_result = result.get_decoded_barcodes_result()
if barcode_result is None or barcode_result.get_items() == 0:
    print("No barcode detected.")
else:
    items = barcode_result.get_items()
    print("Decoded", len(items), "barcodes.")
    for index,item in enumerate(items):
        if item.get_format() == EnumBarcodeFormat.BF_QR_CODE.value:
            qrDetail = item.get_details()
            print("Version:", qrDetail.version)
            print("Model:", qrDetail.model)
```
>
```csharp
using (CaptureVisionRouter cvr = new CaptureVisionRouter())
{
    string imageFile = "IMAGE-FILE-PATH";
    CapturedResult? result = cvr.Capture(imageFile, PresetTemplate.PT_READ_BARCODES);
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
                if (barcodeItem.GetFormat() == EnumBarcodeFormat.BF_QR_CODE)
                {
                    QRCodeDetails? qrDetail = (QRCodeDetails?)barcodeItem.GetDetails();
                    Console.WriteLine("Version: " + qrDetail.version);
                    Console.WriteLine("Model: " + qrDetail.model);
                }
            }
        }
    }
}
```
