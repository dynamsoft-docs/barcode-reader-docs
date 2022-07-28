---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Filter Out Unwanted Barcode Result
description: This page shows how to filter out unwanted barcode results.
keywords: filter, decode result, barcode confidence, result length, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/filter-out-unwanted-barcode-results.html
---


# How-to Guides - Filter Out Unwanted Barcode Result

Dynamsoft Barcode Reader SDK is able to read multiple barcodes at once and return results of all the decoded barcodes. However, you may not want all the results. For example, you may need only the results of a specific barcode format, or you may need only the barcodes with a certain length (number of barcode data bytes). The SDK provides settings to help you filter out the barcode results by barcode formats, confidence, text length, rotation angle, regular expression and so on.    


Filtering out the barcode results based on the barcode formats is shown in [Barcode Format and Expected Barcode Counts]({{ site.scenario_settings }}barcode-format-and-expected-barcode-counts.html).    


Filtering out the barcode results based on confidence, text length or more optional conditions is shown in [Decode Result]({{ site.scenario_settings }}decode-result.html).    


Following part shows how to filter out the unwanted barcode results based on the barcode confidence and barcode text length as examples.    

## Filtering Using Barcode Confidence    

The barcode confidence means the probability that the barcode result is recognized correctly. You can use `minResultConfidence` to filter out the results with low confidence.    


```cpp
char sError[512];
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
CBarcodeReader* reader = new CBarcodeReader();
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
reader->InitLicense("<Put your license key here>");
    
//Obtain the barcode results with confidence above 35
reader->GetRuntimeSettings(runtimeSettings);
runtimeSettings->minResultConfidence = 35;    //It is recommended to set the confidence above 35
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);

//Replace "<Put your file path here>" with your own file path
reader->DecodeFile("<Put your file path here>", "");
// If succeeds
reader->GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```


## Filtering Using Barcode Result Length    

The barcode length is calculated in bytes. The length of the barcode text does not necessarily mean the actual length of the barcode bytes. You can use `minBarcodeTextLength` to filter out some invalid or unwanted results.   


```cpp
char sError[512];
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
CBarcodeReader* reader = new CBarcodeReader();
//Initialize license prior to any decoding
//Replace "Put your license key here" with your own license
reader->InitLicense("Put your license key here");
    
//Decode the barcodes with its length longer than 10 bytes
reader->GetRuntimeSettings(runtimeSettings);
runtimeSettings->minBarcodeTextLength = 10;
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);

//Replace "Put the path of your file here" with your own file path
reader->DecodeFile("Put your file path here", "");
// If succeeds
reader->GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```

