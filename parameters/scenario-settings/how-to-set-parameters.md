---   
layout: default-layout
description: This article introduces two ways to modify the configuration DBR RuntimeSetting and Json template, and their syntax rules
title: How to set DBR parameters 
keywords: DBR RuntimeSetting Json Template ImageParameter FormatSpecification
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/how-to-set-parameters.html
---

# How to set DBR parameters 

DBR provides flexible parameter configurations to meet your barcode decoding requirements under different scenarios. You can modify the configurations either through the `RuntimeSetting` object or a JSON template. 

- [RuntimeSetting](#RuntimeSetting-object)  
 
  `RuntimeSetting` is an object that manages various parameters during runtime. If you need to *dynamically* change the DBR configuration when the program is running, modifying `RuntimeSetting` will be a good choice. 

  `RuntimeSetting` only provides some common parameters though. The complete parameter setting can be achieved through the JSON template. 

- [JSON template](#JSON-template)

  DBR also allows you to manage various parameters via a JSON template. If your application scenario is relatively fixed and you do not need to change the scanning configurations frequently, the JSON template will be a suitable choice. 

  You can use the JSON template along with `RuntimeSetting`: first use the JSON template to read the complete and stable settings, and then use `RuntimeSetting` for common and variable settings. 

## RuntimeSetting object 

`RuntimeSetting` object manages various parameters of the DBR runtime. You can change the DBR configurations by modifying the field values in `RuntimeSetting`. This method is suitable for scenarios that require dynamic configuration changes. 

Basic steps:

1. Get the current `RuntimeSetting` object through `GetRuntimeSetting` 
2. Update the corresponding field configuration
3. Use  `UpdateRuntimeSetting`  to make the configuration take effect

The following C++ example shows how to specify barcode types to be processed by changing the `barcodeFormatIds` field in `RuntimeSetting`.  

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
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);   
delete runtimeSettings;   
delete reader;  
```

## JSON template 

DBR also supports managing parameters via JSON configuration files. This method is suitable for cases where the parameter configurations are relatively fixed. The JSON template mainly includes:

- `ImageParameter`: Defines the global configurations used for the entire image.
- `FormatSpecification`: Defines the configurations used for a particular barcode format. 
- `RegionDefinition`: Defines the configurations for a specific area of the image. 

### ImageParameter   

`ImageParameter` defines the global configurations used for the entire image. 

You can define one or multiple `ImageParameter`. When defining multiple `ImageParameter`, use `ImageParameterContentArray` and specify a different `Name` for each `ImageParameter` object. 

To use the `ImageParameter` configuration defined in the JSON template:

1. Use `InitRuntimeSettingsWithFile` to load a JSON file, or use `InitRuntimeSettingsWithString` to load a JSON string.
2. When calling DBR decoding functions, specify the configurations through `Name` of `ImageParameter`. 
  If not specified, the default `ImageParameter` configuration object will be used. 

The `emSettingPriority` parameters in the `InitRuntimeSettingsWithFile` and `InitRuntimeSettingsWithString` interfaces are used to specify how to operate the default configuration of the DBR when loading the JSON configuration. 

- If set to `CM_IGNORE`, the default configuration will not be changed. 
- If set to `CM_OVERWRITE`, the `ImageParameter` configuration you just loaded will be used and the default template will be merged. 

Below is a sample JSON template. In this example, we use the parameter `pTemplateName` of `DecodeFile` to specify the `ImageParameter` whose `Name` is "IP1".

```json
// One ImageParameter example 
{
    "Version": "3.0",
    "ImageParameter": {                   
        "Name": "IP1",
        "Description": "This is an imageParameter", 
        "BarcodeFormatIds": ["BF_ALL"]
     }
}
```
```json
//Multiple ImageParameter example 
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
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);         
delete runtimeSettings;         
delete reader;
```

### FormatSpecification

If you only want to configure certain parameters for a specific pattern, then `FormatSpecification` should be used. This object defines the configuration used for a specific barcode format. 

If the configurations are inconsistent with the global `ImageParameter` configurations, then `FormatSpecification` has a higher priority. For specific configurable parameters and applicable scenarios, please refer to our documentation for [specific barcode format configuration parameters][2]. 

In JSON, use the `FormatSpecificationArray` to define one or multiple `FormatSpecification` objects, which can be distinguished by different `Name`. 
 
In the following example, we defines a `FormatSpecification` named "FS_1". 

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

### RegionDefinition

If you only care about a specific area on the image instead of the entire image or you want to make additional configurations for a specific area of the image, you can use `RegionDefinition`. Specifying the interested area can help DBR narrow the range of the image to be processed which helps increase the speed. 

The `RegionDefinition` object defines the configurations for the specified area of the image. If the configurations are inconsistent with the global `ImageParameter`  configurations, then the `RegionDefinition` has a higher priority. For specific configurable parameters, please refer to our [detailed documentation][1] on `RegionDefinition` . 

In JSON, one or more `RegionDefinitionArray` are defined by `RegionDefinitionArray` and distinguished by different `Name`.  

In the following example, we define two `RegionDefinition`, "RP_1" and "RP_2". 

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
[2]:format-specification.html



