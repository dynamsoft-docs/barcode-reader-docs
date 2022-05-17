---   
layout: default-layout
description: This article introduces two ways to modify the configuration DBR RuntimeSetting and Json template, and their syntax rules
title: How to set DBR parameters 
keywords: DBR RuntimeSetting Json Template ImageParameter FormatSpecification
needAutoGenerateSidebar: false
---

# How to set DBR parameters 
DBR provides flexible parameter configuration to meet user’s decoding requirements under different scenarios and different needs. Users can modify the configuration through RuntimeSetting and the Json template. 
- RuntimeSetting   
RuntimeSetting is an object that manages various parameters during runtime. If you need to dynamically change the DBR configuration when the program is running, modifying RuntimeSetting will be a good choice. RuntimeSetting only provides some common parameters for setting, the complete parameter setting can be achieved through the Json template. 
- Json template 
The Json template provided by DBR allows you to manage various parameters in the form of configuration files. If your application scenario is relatively fixed and you do not need to change the DBR configuration frequently, the Json template will be a suitable choice. The Json template can be used along side with RuntimeSetting: first use the Json template to read the complete and stable settings, and then use RuntimeSetting for common and variable settings. 

Next, we will introduce two methods in detail: 

## RuntimeSetting object 
`RuntimeSetting`  object manages various parameters of the DBR runtime. The user can change the DBR configuration by modifying the field values in `RuntimeSetting`. This method is suitable for scenarios that require dynamic configuration changes. 

First, you need to get the current `RuntimeSetting`  object through `GetRuntimeSetting` , modify the corresponding field configuration, and then use  `UpdateRuntimeSetting`  to make the configuration effective. Specific modifiable field values will be introduced in detail in subsequent documents. 

The following example shows changing the  `barcodeFormatIds` field in `RuntimeSetting`  to set the barcode format that needs to be processed.  

```c++
CBarcodeReader* reader = new CBarcodeReader();   
reader->InitLicense("type your license");  
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();   
reader->GetRuntimeSettings(runtimeSettings);                    //get runtime settings
runtimeSettings->barcodeFormatIds = BF_ALL ;                    //update the parameter. BF_ALL means all barcode formats    
char sError[512];   
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);    //update runtime settings 
reader->DecodeFile("type your image path", "");                   //decode
TextResultArray* paryResult = NULL;   
reader->GetAllTextResults(&paryResult);                         //get the decode result   
CBarcodeReader::FreeTextResults(&paryResult);   
delete runtimeSettings;   
delete reader;  
```
## Json template 

DBR allows users to manage parameters in the form of configuration files that follow Json syntax. This method is suitable for the case where the parameter configuration is relatively fixed . The Json template mainly involves `ImageParameter`, `FormatSpecification` and `RegionDefinition` . 
   
`ImageParameter`: Define the global configuration used for the entire image. 
`FormatSpecification`: Define the configuration used for a particular pattern. 
`RegionDefinition` : Define the configuration within a specific area of the image. 

Let's go into more detail. 

- ImageParameter   
`ImageParameter` defines the global configuration used for the entire image. One or multiple may be defined. We will introduce the specific configurable fields in the subsequent documents.  
When defining an `ImageParameter`, it can be specified by the `ImageParameter` in Json. When defining multiple `ImageParameter`, use the `ImageParameterContentArray`, each `ImageParameter` object needs to specify a different `Name`. 
To use the `ImageParameter` configuration defined in the Json template, first we need to use `InitRuntimeSettingsWithFile` to load a Json file, or use `InitRuntimeSettingsWithString` to load a Json string, and then when calling the DBR decoding function, specify the configuration through `Name` of `ImageParameter`. If not specified, the default `ImageParameter` configuration object will be used. 
The `emSettingPriority` parameters in the `InitRuntimeSettingsWithFile` and `InitRuntimeSettingsWithString` interfaces are used to specify how to operate the default configuration of the DBR when loading the Json configuration. If `CM_IGNORE` is set, the default configuration will not be changed. If set to `CM_OVERWRITE`, the `ImageParameter` configuration you just loaded will be used and the default template will be merged. 

 The following is a sample Json template. In this example, we use the parameter `pTemplateName` of `DecodeFile` to specify the `ImageParameter` whose `Name` is "IP1".

```json
// One ImageParameter example { 
{
    "Version": "3.0",
    "ImageParameter": {                   
        "Name": "IP1",
        "Description": "This is an imageParameter", 
        "BarcodeFormatIds": ["BF_ALL"]
     }
}

//Multiple ImageParameter example{ 
{
    "Version": "3.0", 
    "ImageParameterContentArray": [                        
        {
            "Name": "IP1",              
            "BarcodeFormatIds": ["BF_ALL"]
        }, 
        {
            "Name": "IP2",                
            "BarcodeFormatIds": ["BF_CODE_39"]
        }, 
        {
            "Name": "IP3",                  
            "BarcodeFormatIds": ["BF_CODE_128"]
        }
    ]
}
``` 

```c++
CBarcodeReader* reader = new CBarcodeReader();         
reader->InitLicense("type your license");        
int ret; 
char sError[512];         
ret = reader->InitRuntimeSettingsWithFile("JsonTemplate.json",CM_OVERWRITE,
sError,512); ///Load a template configuration 
reader->DecodeFile("type your file path", "ImageParameter1"); //Use the configuration with the Name "IP1"    
TextResultArray* paryResult = NULL;         
reader->GetAllTextResults(&paryResult); //get decode result     
CBarcodeReader::FreeTextResults(&paryResult);         
delete runtimeSettings;         
delete reader;
```
- FormatSpecification   
If you only want to configure certain parameters for a specific pattern, then `FormatSpecification` should be used. This object defines the configuration used for a specific barcode format. If the configuration is inconsistent with the global ImageParameter configuration, then `FormatSpecification` has a higher priority. For specific configurable parameters and applicable scenarios, please refer to our documentation for [specific barcode format configuration parameters](). 
In Json, use the  `FormatSpecificationArray` to define one or multiple `FormatSpecification` objects, which are distinguished by defining different `Name`. 
Use `FormatSpecificationNameArray` to specify the `Name` that each `FormatSpecification` needs to use. 
 
In the following example, we defined a `FormatSpecification` named "FS_1". 

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1",
        "FormatSpecificationNameArray": ["FS_1"]
    }, 
    "FormatSpecificationArray": [
        {
            "Name": "FS_1",
            "AllmoduleDeviation": 10, 
            "BarcodeFormatIds": ["BF_CODE_39"]
        }
    ],
    "Version": "3.0"
}
```
- RegionDefinition 
If you only care about a specific area on the image instead of the entire image or you want to make additional configurations for a specific area of the image, you should use `RegionDefinition`. Setting the area can help DBR to narrow the range of the image to be processed, which helps to increase the speed. 
The `RegionDefinition` object defines the configuration in the specified area of the image. If the configuration is inconsistent with the global `ImageParameter`  configuration, then the RegionDefinition has a higher priority. For specific configurable parameters, please refer to our [detailed documentation][1] on `RegionDefinition` . 
In Json, one or more `RegionDefinitionArray` are defined by `RegionDefinitionArray`, and distinguished by different `Name`.  

In the following example, we have defined two `RegionDefinition`, "RP_1" and "RP_2" 

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1",
        "Description": "This is a region template", 
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
            "MeasuredByPercentage": 1
        }, 
        {
            "Name": "RP_2",
            "BarcodeFormatIds": ["BF_CODE_93"]
        }
    ], 
    "Version": "3.0"
}
```

[1]:manually-define-region-of-interest.html



