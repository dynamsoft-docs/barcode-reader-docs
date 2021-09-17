---   
layout: default-layout
description: This article introduces DBR's ROI (Region Of Interest), applicable scenarios, manual definition methods and configurable parameters.
title: Manually Define Region Of Interest and its configurations
keywords: ROI Region-Of-Interest RegionDefinition
needAutoGenerateSidebar: false
---

# Manually Define Region Of Interest
By default, DBR will locate the code region and decode in the entire image, but if the user is concerned about some specific regions rather than the entire image, you can define a Region Of Interest, referred to as ROI, by the parameter RegionDefinition. After defining a specific region, DBR will only decode barcodes within that region. Of course, this is very conducive to increasing the speed. This article will introduce the definition of ROI and its configurable parameters  [`ExpectedBarcodesCount`]({{ site.parameters_reference }}region-definition/index.html#cost-control), [`BarcodeFormatIds`]({{ site.parameters_reference }}region-definition/index.html#format-control),[`BarcodeFormatIds_2`]({{ site.parameters_reference }}region-definition/index.html#format-control), [`FormatSpecificationNameArray`]({{ site.parameters_reference }}region-definition/index.html#formatspecificationnamearray).
## Definition of ROI RegionDefinition
If the user is only concerned about certain regions of the image, then in JSON, you can define one or more areas through the `RegionDefinition` object. You need to specify the four-corner coordinates of the area  [`Top`]({{ site.parameters_reference }}region-definition/index.html#image-process-control), [`Left`]({{ site.parameters_reference }}region-definition/index.html#image-process-control), [`Right`]({{ site.parameters_reference }}region-definition/index.html#image-process-control), [`Bottom`]({{ site.parameters_reference }}region-definition/index.html#image-process-control) and `Name`of different ROIs. The parameter [`MeasuredByPercentage`]({{ site.parameters_reference }}region-definition/index.html#image-process-control) can be used to set whether the four-corner coordinate unit of the ROI is pixels or a percentage, which is defined the original image width and height as 100%.

To use the defined RegionDefinition, please specify the ROI Name through `RegionDefinitionNameArray`.
## Expected count of barcodes in ROI - ExpectedBarcodesCount
In `RegionDefinition`, [`ExpectedBarcodesCount`]({{ site.parameters_reference }}region-definition/index.html#cost-control) can be used to specify the number of expected barcodes in the region. The clear expectation of the number of barcodes helps DBR to determine whether it has met the requirements and exit in time.
## Barcode Format in ROI -  BarcodeFormatIds, BarcodeFormatIds_2
These two parameters set the code type to be processed in the ROI. Specific configuration barcode format can be used to improve the processing speed of DBR, otherwise DBR may waste time on irrelevant barcode format.
## Specific barcode format configuration used by ROI - FormatSpecificationNameArray
This parameter sets names corresponding to `FormatSpecifications` used by the current ROI. After setting, the ROI will use the corresponding FormatSpecifications configuration. The default value is empty, using the global FormatSpecifications configuration. If you want to configure some specific barcode format in ROI, you should use this parameter. For a detailed description of `FormatSpecifications`, please refer to our documentation [Specific barcode format configuration][1].
## Examples
The following shows how to use RuntimeSetting and JSON template to demonstrate the usage of `RegionDefinition` parameter.
- RuntimeSetting
```c++
CBarcodeReader* reader = new CBarcodeReader();     
reader->InitLicense("Insert license");    
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();     
reader->GetRuntimeSettings(runtimeSettings); //get current RuntimeSettings      
runtimeSettings->region.regionTop = 10;         
runtimeSettings->region.regionBottom = 50;      
runtimeSettings->region.regionLeft = 20;        
runtimeSettings->region.regionRight = 30;      
runtimeSettings->regionMeasurdByPercentage = 1; //define Region range in Percentage
char sError[512];     
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //update RuntimeSettings    
reader->DecodeFile("File Path", ""); //decoding      
TextResultArray* paryResult = NULL;     
reader->GetAllTextResults(&paryResult); //get decoded results  
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);     
delete runtimeSettings;     
delete reader;  
```
- JSON Template
```json
{ 
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"],
        "RegionDefinitionNameArray": ["RP_1", "RP_2"]
    }, 
    "RegionDefinitionArray": [
        {
            "Name": "RP_1",   
            "BarcodeFormatIds": ["BF_CODE_39"],
            "Top": 20,         
            "Bottom": 80,      
            "Left": 20,        
            "Right": 80,      
            "ExpectedBarcodesCount": 10,
            "MeasuredByPercentage": 0
        }, 
        {
            "Name": "RP_2", 
            "BarcodeFormatIds": ["BF_CODE_93"], 
            "BarcodeFormatIds_2": ["BF_DOTCODE"], 
            "Top": 30, 
            "Bottom": 70, 
            "Left": 30, 
            "Right": 80, 
            "MeasuredByPercentage": 1
        }
    ], 
    "Version": "3.0"
}
```

[1]:format-specification.html
