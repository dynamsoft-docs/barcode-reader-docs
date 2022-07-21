---
layout: default-layout
title: How to Filter and Sort Barcode Results
description: This page shows how to filter and sort barcode results.
keywords: filter, decode result, barcode confidence, result length, how-to guides
needAutoGenerateSidebar: false
permalink: /programming/features/filter-and-sort.html
---


# How to Filter and Sort Barcode Results

Dynamsoft Barcode Reader SDK is able to read multiple barcodes at once and return results of all the decoded barcodes. However, you may not want all the results. For example, you may need only the results of a specific barcode format, or you may need only the barcodes with a certain text string. The SDK provides following parameters to help you filter the barcode results by barcode format, confidence, etc and order the results by confidence, position or format.

- [BarcodeFormatIds]({{ site.parameters_reference }}barcode-format-ids.html) and [BarcodeFormatIds_2]({{ site.parameters_reference }}barcode-format-ids-2.html)
- [BarcodeAngleRangeArray]({{ site.parameters_reference }}barcode-angle-range-array.html)
- [BarcodeWidthRangeArray]({{ site.parameters_reference }}barcode-width-range-array.html)
- [BarcodeHeightRangeArray]({{ site.parameters_reference }}barcode-height-range-array.html)
- [MinRatioOfBarcodeZoneWidthToHeight]({{ site.parameters_reference }}min-ratio-of-barcode-zone-width-to-height.html)
- [BarcodeTextLengthRangeArray]({{ site.parameters_reference }}barcode-text-length-range-array.html)
- [BarcodeTextRegExPattern]({{ site.parameters_reference }}barcode-text-regex-pattern.html)
- [MinResultConfidence]({{ site.parameters_reference }}min-result-confidence.html)
- [ModuleSizeRangeArray]({{ site.parameters_reference }}module-size-range-array.html)
- [TextResultOrderModes]({{ site.parameters_reference }}text-result-order-modes.html)

Here is an example setting containing all these parameters:

```json
{
    "Version": "3.0",
    "ImageParameter": {
        "Name":"IP_FilterBarcode",
        "BarcodeFormatIds": [
            "BF_CODE_39"
        ],
        "BarcodeFormatIds_2": [
            "BF2_NULL"
        ],
        "TextResultOrderModes": [
            {
                "Mode": "TROM_POSITION"
            }
        ],
        "FormatSpecificationNameArray": [
            "FP_1"
        ]
    },
    "FormatSpecification": {
        "Name": " FP_1",
        "BarcodeAngleRangeArray": [
            {
                "MinValue": 80,
                "MaxValue": 100
            }
        ],
        "BarcodeWidthRangeArray": [
            {
                "MaxValue": 200,
                "MinValue": 100
            }
        ],
        "BarcodeHeightRangeArray": [
            {
                "MaxValue": 100,
                "MinValue": 50
            }
        ],
        "MinRatioOfBarcodeZoneWidthToHeight": 100,
        "BarcodeTextLengthRangeArray": [
            {
                "MaxValue": 20,
                "MinValue": 10
            }
        ],
        "BarcodeTextRegExPattern": "[0-9]{4}",
        "MinResultConfidence": 50,
        "ModuleSizeRangeArray": [
            {
                "MaxValue": 20,
                "MinValue": 10
            }
        ]
    }
}
```

These parameters can work both individually and in combination. Here we will show how to filter out QR Code results with confidence greater than 50 and then order the results by position.

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
iRet = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    printf("%s\n", errorBuf);
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitRuntimeSettingsWithString(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP_FilterBarcode\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"TextResultOrderModes\":[{\"Mode\":\"TROM_POSITION\"}], \"FormatSpecificationNameArray\": [\"FP_1\"]},\"FormatSpecification\":{\"Name\":\"FP_1\", \"MinResultConfidence\":50}}", CM_OVERWRITE, errorBuf, 512);
DBR_DecodeFile(barcodeReader, "YOUR-IMAGE-FILE-WITH-QR-CODES", "IP_FilterBarcode"); // Start decoding
// Add further process
```
3. 
```cpp
char errorBuf[512];
int iRet = -1;
iRet = dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (iRet != DBR_OK)
{
    cout << errorBuf << endl;
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP_FilterBarcode\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"TextResultOrderModes\":[{\"Mode\":\"TROM_POSITION\"}], \"FormatSpecificationNameArray\": [\"FP_1\"]},\"FormatSpecification\":{\"Name\":\"FP_1\", \"MinResultConfidence\":50}}", CM_OVERWRITE, errorBuf, 512);
reader->DecodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", "IP_FilterBarcode"); // Start decoding
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
reader.InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP_FilterBarcode\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"TextResultOrderModes\":[{\"Mode\":\"TROM_POSITION\"}], \"FormatSpecificationNameArray\": [\"FP_1\"]},\"FormatSpecification\":{\"Name\":\"FP_1\", \"MinResultConfidence\":50}}", EnumConflictMode.CM_OVERWRITE, out errorMsg);
TextResult[] result = reader.DecodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", "IP_FilterBarcode"); // Start decoding
// Add further process
```
5. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY");
BarcodeReader reader = new BarcodeReader();
reader.initRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP_FilterBarcode\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"TextResultOrderModes\":[{\"Mode\":\"TROM_POSITION\"}], \"FormatSpecificationNameArray\": [\"FP_1\"]},\"FormatSpecification\":{\"Name\":\"FP_1\", \"MinResultConfidence\":50}}", CM_OVERWRITE, errorBuf, 512);
TextResult[] result = reader.decodeFile("YOUR-IMAGE-FILE-WITH-QR-CODES", "IP_FilterBarcode"); // Start decoding
// Add further process
```
6. 
```java

```
7. 
```objc

```
8. 
```swift

```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
if error[0] != EnumErrorCode.DBR_OK:
    print(error[1])
dbr = BarcodeReader()
dbr.init_runtime_settings_with_string('{"Version":"3.0", "ImageParameter":{"Name":"IP_FilterBarcode", "BarcodeFormatIds":["BF_QR_CODE"], "TextResultOrderModes":[{"Mode":"TROM_POSITION"}], "FormatSpecificationNameArray": ["FP_1"]},"FormatSpecification":{"Name":"FP_1", "MinResultConfidence":50}}')
text_results = dbr.decode_file("YOUR-IMAGE-FILE-WITH-QR-CODES")
# Add further process
```
