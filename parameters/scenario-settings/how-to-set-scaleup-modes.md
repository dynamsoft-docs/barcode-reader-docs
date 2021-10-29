---   
layout: default-layout
description: This article introduces how DBR can enlarge the low resolution code area through the ScaleUpModes parameter to improve the decoding success rate.
title: How to read barcodes with small module sizes  
keywords: ScaleUpModes, blurred image
needAutoGenerateSidebar: false
---

# How to read barcodes with small module sizes

In some scenarios, the barcode is relatively small to the entire image and the barcode module size is also very small, making it difficult for our library to read the barcode. In this case, we can enlarge the barcode area through the [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes) parameter to a proper size before starting the recognition process.

Here is an overview of the enumerations for [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes):

|Enumeration |Description|
|----|---|
|SUM_SKIP|Do not enlarge the barcode area|
|SUM_LINEAR_INTERPOLATION|Enlarge the barcode area with linear difference method|
|SUM_NEAREST_NEIGHBOUR_INTERPOLATION|Enlarge the code area with nearest neighbor interpolation method|
|SUM_AUTO|Auto detect whether to enlarge the barcode area or not|

The default value for [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes) is SUM_AUTO, which automatically detects whether to enlarge the code area before decoding. 

To control the enlarging process manually, you can choose one or all of the other available modes ( SUM_LINEAR_INTERPOLATION, SUM_NEAREST_NEIGHBOUR_INTERPOLATION) at the same time. 

When you set the parameter to both SUM_LINEAR_INTERPOLATION and SUM_NEAREST_NEIGHBOUR_INTERPOLATION, you can configure extra arguments to define a custom rule for scaling up. The arguments are as follows:

- AcuteAngleWithXThreshold    
 If the acute angle of the barcode with the horizontal axis (X) (see below figure for reference to which angle this is referring to) is greater than the value of AcuteAngleWithXThreshold, the barcode will be enlarged. 

- ModuleSizeThreshold   
 If the module size of the barcode (see below figure for reference) is less than the value for ModuleSizeThreshold, the barcode will be enlarged. 

- TargetModuleSize   
 The barcode will be enlarged by N times (N=1,2,3...) till N * ModuleSize is greater than or equal to TargetModuleSize.

**Example**
Condition: ModuleSizeThreshold = 4, AcuteAngleWithXThreshold = 30, TargetModuleSize = 4

**Result**
The module size of the barcode in the image is 2 pixels, which is smaller than ModuleSizeThreshold, and the acute angle is larger than AcuteAngleWithXThreshold, so our library will perform scaling up operation. After scaling up, the barcode is enlarged by 2 times since 2 * modulesize >= TargetModuleSize.

![scale up sample image][2]  

Below is a sample image in real scenario:

![scale up sample image][1]  

The barcode image is a bit blurry and the module size of the barcode is only 2px. By using the default barcode reading settings, the barcode may not be readable. In this case, we can use the [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes) parameter in the following way:

``` C++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("Insert your license here");

PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
reader->GetRuntimeSettings(runtimeSettings); // Get the current runtime settings
runtimeSettings->scaleUpModes[0] = SUM_LINEAR_INTERPOLATION; // Set SUM_LINEAR_INTERPOLATION

char sError[512];
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); // Update runtime settings
reader->SetModeArgument("scaleUpModes", 0, "AcuteAngleWithXThreshold", "0"); 
reader->SetModeArgument("scaleUpModes", 0, "ModuleSizeThreshold", "4"); 
reader->SetModeArgument("scaleUpModes", 0, "TargetModuleSize", "4"); 
reader->DecodeFile("Insert your file path here", "") // Start decoding

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); // Get results
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); // Print results
}

dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```
 
You can also set the runtime settings (and the [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes)) via a JSON template or string. The first snippet is the JSON template and the second demonstrates how to use that template for the runtime settings:

``` Json
{
    "Version":"3.0",
    "ImageParameterContentArray":[
        {
            "Name":"Test1",
            "ExpectedBarcodesCount":0,
            "MaxAlgorithmThreadCount":4,
            "BarcodeFormatIds":["BF_ALL"],
            "ScaleUpModes":["SUM_LINEAR_INTERPOLATION(0, 4, 4)"],
            "DeblurLevel":9
        }
    ]
}
```

``` C++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("Insert your license here");

char sError[512];
reader->InitRuntimeSettingsWithFile("insert your JSON file path here", CM_OVERWRITE, sError, 512);
reader->DecodeFile("insert your image file path here", "");

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); // Get results
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); // Print results
}

dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);
delete reader;
```

Final result:

``` md
Text: 16046055491
```

[1]:assets/how-to-set-scaleup-modes/scale-up-sample-img.png
[2]:assets/how-to-set-scaleup-modes/scale-up-sample-img2.png