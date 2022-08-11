---   
layout: default-layout
title: How to set the barcode format and the number of barcodes expected to be detected 
description: This article describes how to set the barcode format and the number of barcodes expected to be detected, and the effect of these settings.
keywords: barcode format, expected barcode counts
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/barcode-format-and-expected-barcode-counts-v7.6.0.html
---

# How to set the barcode format and the number of barcodes expected to be detected 

DBR can handle various common barcode formats on the market and is well suited to supporting multi-code scenes on an image. In order to support all barcode formats and solve all codes appearing in the figure, it will consume a certain amount of time. If you don't want to consume extra time, you can set the required barcode format through [`BarcodeFormatIds`]({{ site.parameters_reference }}barcode-format-ids.html), [`BarcodeFormatIds_2`]({{ site.parameters_reference }}barcode-format-ids-2.html), and set the number of barcodes expected to be detected through  [`ExpectedBarcodesCount`]({{ site.parameters_reference }}expected-barcodes-count.html). 

## `BarcodeFormatIds`,`BarcodeFormatIds_2`

These two parameters are used to set the required barcode format to be decoded. Barcode formats not specified will not be processed. You can speed up DBR processing by eliminating barcode formats that you don't care about. For specific enumeration values for the parameters, please refer to our API documents [`BarcodeFormatIds`]({{ site.parameters_reference }}barcode-format-ids.html), [`BarcodeFormatIds_2`]({{ site.parameters_reference }}barcode-format-ids-2.html).


## `ExpectedBarcodesCount`

This parameter is used to set the number of barcodes expected to be detected for each image. When the number of detected barcodes is greater than or equal to this parameter, the DBR algorithm will terminate. DBR can handle scenes with multiple barcodes in one image. Using this setting to specify the expected number of barcodes to read you can save time once the expected number of reads have occurred.

## Example 

The following demonstrates the two configuration methods of RuntimeSetting and JSON template 

```c++
CBarcodeReader* reader = new CBarcodeReader();   
reader->InitLicense("enter your license");  
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();   
reader->GetRuntimeSettings(runtimeSettings); //get runtime settings 
runtimeSettings->barcodeFormatIds = BF_ALL; //set barcode format. BF_ALL means all barcode formats   
runtimeSettings->barcodeFormatIds_2 = BF2_NULL; //set barcode format2   
runtimeSettings->expectedBarcodesCount = 1; //set the number of barcodes expected to be detected to 1  
char sError[512];   
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //update runtime settings 
reader->DecodeFile("file path", ""); //decode  
TextResultArray* paryResult = NULL;   
reader->GetAllTextResults(&paryResult); //get decode result 
CBarcodeReader::FreeTextResults(&paryResult);   
delete runtimeSettings;   
delete reader;  
```

```json
{    
    "Version":"3.0",    
    "ImageParameter":    
    {    
        "Name":"IP1",    
        "BarcodeFormatIds":["BF_ALL"],
        "BarcodeFormatIds_2":["BF2_NULL"],        
        "ExpectedBarcodesCount":1
    }    
}   
```

