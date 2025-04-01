---   
layout: default-layout
title: Dynamsoft Barcode Reader Parameters under Dynamsoft Capture Vision
description: Introduce the parameters design of Dynamsoft Capture Vision related to Dynamsoft Barcode Reader.
keywords: Parameter, Parameter Template, Parameter Template File, Dynamsoft Barcode Reader
needAutoGenerateSidebar: true
noTitleIndex: true
needGenerateH3Content: true
---

# Overview of Dynamsoft Capture Vision parameters Related to Dynamsoft Barcode Reader

Starting in version 10.0, Dynamsoft Barcode Reader is restructured under Dynamsoft Capture Vision Framework.

Dynamsoft Capture Vision (DCV) is designed for high scalability and flexibility, and its parameter system plays a crucial role in achieving this goal. The parameter system is highly configurable and can drive different behavior logic within the SDK. In this article, we will provide an overview of the parametric architecture design regarding the use of Dynamsoft Barcode Reader in the Dynamsoft Capture Vision framework.

## Key Terms

In order to eliminate ambiguity, we first define several key terms.

1. **Parameter** 
   A parameter is designed to represent a particular aspect of the behavior of the SDK, and each parameter has its own name. For instance, the `ExpectedBarcodeCount` parameter is used to control the expected count of recognized barcodes. Parameters can be configured with specific values or ranges of values, which can be adjusted as required.

2. **Parameter template**
   A parameter template is a collection of parameters organized in a structured manner, expressed in JSON format. The name of the `CaptureVisionTemplate` object is also called "template name", which is a unique identifier assigned to each parameter template. In the DCV SDK, this name is used to load the relevant configurations and control runtime behavior.
  
3. **Parameter template file**
   A parameter template file is a JSON file that contains one or multiple parameter templates.

## Organization of a Parameter Template File

As shown in the example below, the organizational structure of a parameter template file consists of several top-level objects such as `CaptureVisionTemplates`, `ImageSourceOptions`,`TargetROIDefOptions` etc.

```json
{
    "CaptureVisionTemplates": [
        {
            "Name" : "CV_0",
            "ImageSourceName": "ISA_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "ImageSourceOptions": [ 
        {
            "Name": "ISA_0"
        }
    ],
    "TargetROIDefOptions" : [
        {
            "Name" : "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "ImageParameterOptions": [
        {
            "Name": "IP_0"
        }
    ], 
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "BarcodeFormatSpecificationNameArray" : ["FS_0"]
        }
    ],
    "BarcodeFormatSpecificationOptions": [
        {
            "Name": "FS_0"
        }
    ],
    "GlobalParameter":{
        "MaxTotalImageDimension":0
    }
}
```

With the exception of GlobalParameter, all top-level objects in the parameter template file are arrays of the corresponding object. For example,`CaptureVisionTemplates` are an array of `CaptureVisionTemplate` objects, and `TargetROIDefOptions` are an array of `TargetROIDef` objects.

Furthermore, to reuse the same parameter definitions, reduce the size of the parameter template file, and simplify the parameter configuration hierarchy, the reference relationship was adopted in the parameter template file design. For example, the value of the `ImageSource` parameter for the first object in `CaptureVisionTemplates` is `ISA_0`, which refers to the first object in `ImageSourceOptions`.

Therefore, a parameter template starts with an object in `CaptureVisionTemplates` and recursively searches for the objects that are directly or indirectly referenced by it, and then combines them to form a specific set of parameters. Then, the parameter template may be applied to DCV through "template name" to control its internal execution logic.

Next, we will focus on introducing some main objects and their relationships in a parameter template.

## Structure of a Parameter Template

The following table list the main objects type and description of a complete parameter template when using only Dynamsoft Barcode Reader:

| Object Type              | Description                                                                                                                                                                                  |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CaptureVisionTemplate    | This is the entry object of a parameter template in DCV. The `Name` parameter represents the name of the parameter template, which serves as its unique identifier.                          |
| ImageSource              | It defines the input for DCV, responsible for providing images to DCV. It can be defined as different image sources, including but not limited to image directories, scanners, cameras, etc. |
| TargetROIDef             | It is used to specify one or more recognition tasks to be performed on some regions of interest (ROIs) within an image.                                                                      |
| BarcodeReaderTaskSetting | It is used to configure settings for barcode reading tasks performed on images in DCV.                                                                                                       |
| ImageParameter           | It provides various image-processing features to adjust and enhance the input image for better recognition results.                                                                          |

For more details, please refer to [introduction of the capture vision template]({{ site.dcvb_parameters }}file/capture-vision-template.html)

## How to Apply DCV Parameters

Dynamsoft Capture Vision (DCV) provides two methods to apply parameters:

- `SimplifiedCaptureVisionSettings`: It is a structure that contains commonly used DCV parameters. To update DCV parameters using `SimplifiedCaptureVisionSettings`, you can follow these steps:

   1. Call the `GetSimplifiedSettings` API to get the `SimplifiedCaptureVisionSettings` object named `dcv_settings` associated with the Dynamsoft Capture Vision Router instance.
   2. Modify the attributes of `dcv_settings`.
   3. Call the `UpdateSettings` API to apply the modified `dcv_settings`.

- `JSON parameter template file/string` - It supports all DCV parameters. The related parameter setting APIs are:

   1. `InitSettings/InitSettingsFromFile` - after calling this interface, each parameter template in the file/string will be converted into a single parameter template object. They will replace the previously associated parameter template objects on the Capture Vision Router instance.

   2. `ResetSettings` - after calling this API, the internal associated parameter template objects are reset to the factory state.

## Special Rules for DCV Parameter Configuration

In this section, we will discuss some special rules for configuring the DCV parameter templates. Understanding these rules will help you efficiently configure a simple and user-friendly parameter template.

### Default Value of Parameters

Generally, the DCV parameter templates have been designed with many common scenarios in mind, so the default values of many parameters do not need to be modified. When configuring a custom template, you only need to configure required parameters and fine-tuning parameters related to business scenarios. Other optional parameters are automatically filled with default values. This simplifies your configuration and makes your templates easier to read.

### Inherited Parameters

Sometimes, we need to configure multiple templates to adapt to different scenarios, but only a few parameter values differ between each template. DCV provides a parameter configuration inheritance mechanism that further reduces the amount of configuration work.
For example, when configuring `IP_A` and `IP_B` objects in `ImageParameterOptions`, you can define a `BaseImageParameterName` parameter in the `IP_B` object with a value of `IP_A`. Then `IP_B` object will inherit all the parameter definitions of `IP_A`, and if `IP_B` defines a parameter with the same name but a different value, that parameter will adopt the value of `IP_B`.

This allows you to create a new parameter template that inherits most of its configuration from an existing template, reducing the amount of repetitive configuration work needed.
