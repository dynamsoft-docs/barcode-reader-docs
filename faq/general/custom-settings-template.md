---
layout: default-layout
title: How to create custom settings template?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, runtime settings, template
description: How to create custom settings template?
needAutoGenerateSidebar: false
permalink: /faq/general/custom-settings-template.html
---

# How to create and use custom settings template?

One of the strengths of the Dynamsoft Barcode Reader is its wide range of cuztomizable options that can optimize the performance of the SDK. Whether you are looking to prioritize read rate or speed, these settings can be used in many ways to match the targeted use case.

## Generate Customized Template

1. Visit the main [online demo](https://demo.dynamsoft.com/barcode-reader/).

2. Once on that page, you will find the settings menu on the left-hand side. Please note that you can access the full settings by clicking on *Advanced Settings*

3. Edit the settings that you want

4. Once you're ready to get the template, scroll down to the bottom of the settings menu to find the full settings as a *Struct* or a *Template*. The struct is the more readable version of the template, but the actual JSON code will be under *Template*.

5. Copy the JSON code under *Template* and paste it into your own JSON file, or you can download the template JSON file straight from the demo.

6. The template you downloaded is currently Barcode Reader version 9 template and the latest version is version 10. Use the [TemplateConverter Tool](https://download2.dynamsoft.com/dcv/TemplateConverter.zip) to convert the template to Barcode Reader version 10 compatible template.

And with that, you have your own template to use with the `InitSettingsFromFile` method! 


## How to Adjust Settings
### Understanding the Template Structure
This section explains templates and parameters in the Capture Vision Router. Templates define the settings' structure, while parameters allow for customization. For details on parameter template structure, refer to the documentation [here](https://www.dynamsoft.com/capture-vision/docs/core/parameters/file/index.html#structure-of-a-parameter-template-file).

### BinarizationModes
- **Block Size Method**: This method divides the image into blocks and applies a threshold to each block separately. It helps in preserving local features and is effective for images with varying illumination.
- **Threshold Method**: This method applies a global threshold to the entire image. It is simpler and faster but may not perform well on images with uneven lighting.

### DeblurModes
Employs various image processing techniques to enhance readability.

### ScaleDownThreshold
If the shorter edge size is larger than the specified value, the library will calculate the necessary height and width of the barcode image and shrink it to that size before localization. Otherwise, it will perform barcode localization on the original image.

### ScaleUpModes
For more information, please refer to the article on [Scale Up Modes](https://www.dynamsoft.com/capture-vision/docs/core/parameters/reference/image-parameter/scale-up-modes.html).


## Use temaplate in Capture Vision Router Settings

For more information on the Capture Vision Router settings, you can refer to the following sections for different programming languages:

### JavaScript InitSettings Function
To initialize settings using JavaScript, use `InitSettings` function refer to the following documentation: [here](https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/capture-vision-router/settings.html?product=dbr&lang=javascript#initsettings).

### .NET InitSettingsFromFile Function
You can find the documentation for the `InitSettingsFromFile` function [here](https://www.dynamsoft.com/capture-vision/docs/server/programming/dotnet/api-reference/capture-vision-router/settings.html?product=dbr&lang=dotnet#initsettingsfromfile).


### C++ InitSettingsFromFile Function
For C++, you can find the `InitSettingsFromFile` function documentation [here](https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/capture-vision-router/settings.html?product=dbr&lang=cplusplus#initsettingsfromfile).

### C DBR_InitRuntimeSettingsWithFile Function
For C, the `DBR_InitRuntimeSettingsWithFile` function is documented [here](https://www.dynamsoft.com/barcode-reader/docs/server/programming/c/api-reference/methods/parameter-and-runtime-settings-advanced.html#dbr_initruntimesettingswithfile).
