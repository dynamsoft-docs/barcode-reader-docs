---   
layout: default-layout
description: Decode incomplete barcodes by using BarcodeComplementModes
title: How to set barcode complement modes
keywords: BarcodeComplementModes, damaged image
---

# How to decode incomplete barcodes 

In some case, due to misprinting, barcodes may have incomplete parts. For example, a QR code that is missing the position detection pattern (See the sample image below). In this case, you can enable the barcode completion logic in Dynamsoft Barcode Reader(DBR) by turning on [`BarcodeComplementModes`]({{ site.parameters_reference }}barcode-complement-modes.html#barcodecomplementmodes). DBR will then automatically attempt to complete and correct the location information that is incorrect or lost due to misprinting according to the structure characteristics of the corresponding barcode type. The barcode completion logic only supports QR code and Data Matrix at present. BarcodeComplementModes is disabled by default, you can enable it based on your requirements.

Here are two examples with imcomplete barcodes 
![barcode-complememt-modes-sample-image-dm][1]
![barcode-complememt-modes-sample-image-qr][2]

## Sample code snippets  

### Enable BarcodeComplementModes

``` c++
CBarcodeReader* reader = new CBarcodeReader(); 
reader->InitLicense("Input your license"); 
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings(); 
reader->GetRuntimeSettings(runtimeSettings); //Get current settings 
runtimeSettings->furtherModes.barcodeComplementModes[0] = BCM_GENERAL; //Enable barcode completion logic 
char sError[512]; 
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); 
reader->DecodeFile("Path to your image file", ""); //Decode image 
TextResultArray* paryResult = NULL; 
reader->GetAllTextResults(&paryResult); //Get results 
int iCount = paryResult->resultsCount; 
for (int i = 0; i < iCount; i++) 
{ 
    printf("Text: %s", paryResult->results[i]->barcodeText); //print results 
} 
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult); 
delete runtimeSettings; 
delete reader; 
```  

### JSON template

``` json
{
    "Version":"3.0",
    "ImageParameterContentArray": 
    [
        {
            "Name":"Test1",
            "FormatSpecificationNameArray":["FP_1"],
            "ExpectedBarcodesCount":0,
            "MaxAlgorithmThreadCount":4,
            "BarcodeFormatIds":["BF_ALL"],
            "BarcodeComplementModes":["BCM_GENERAL"],
            "DeblurLevel":9
        }
    ],
    "FormatSpecificationArray":
    [
        {
            "Name":"FP_1",
            "BarcodeFormatIds":["BF_PDF417","BF_QR_CODE","BF_DATAMATRIX"],
            "MirrorMode":"MM_Both"
        }
    ]
}
```

[1]:assets\how-to-set-barcode-complememt-modes\barcode-complememt-modes-sample-image-dm.png
[2]:assets\how-to-set-barcode-complememt-modes\barcode-complememt-modes-sample-image-qr.png
