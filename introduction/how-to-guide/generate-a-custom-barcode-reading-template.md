---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Generate a Custom Barcode Reading Template
description: This page shows how to generate a custom barcode reading template.
keywords: custom settings, template, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/generate-a-custom-barcode-reading-template.html
---


# How-to Guides - Generate a Custom Barcode Reading Template    


Starting from Dynamsoft Barcode Reader version 6, it is recommended to set all barcode reading configurations in the template (*.json). This article will talk about how to customize your own template based on our standard templates on our online demo.    


1. Open our [Online Demo](https://demo.dynamsoft.com/barcode-reader/):    
    ![Online Demo Example Image][1]     

2. Modify the settings on the left panel:     
    ![Setting Panel Example Image][2]     

3. At the bottom of the panel, switch to JSON tab and click the copy button:    
    ![Output JSON Example Image][3]     

4. Save the string as a .json file and use [`InitRuntimeSettingsWithFile`]({{ site.cpp_methods }}parameter-and-runtime-settings-advanced.html#initruntimesettingswithfile) method to update the barcode reading settings.    



For more information about using template, please see [How to Set Parameters]({{ site.scenario_settings }}how-to-set-parameters.html).    



[1]: assets/generate-a-custom-barcode-reading-template/online-demo.png

[2]: assets/generate-a-custom-barcode-reading-template/settings-panel.png

[3]: assets/generate-a-custom-barcode-reading-template/copy-button.png
