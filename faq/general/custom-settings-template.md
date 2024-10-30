---
layout: default-layout
title: How to create custom settings template?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, runtime settings, template
description: How to create custom settings template?
needAutoGenerateSidebar: false
permalink: /faq/general/custom-settings-template.html
---

## How to create custom settings template?

One of the strengths of the Dynamsoft Barcode Reader is its wide range of cuztomizable options that can optimize the performance of the SDK. Whether you are looking to prioritize read rate or speed, these settings can be used in many ways to match the targeted use case.

If you are looking to create your own custom template of settings to use with the [InitSettingsFromFile][https://www.dynamsoft.com/capture-vision/docs/server/programming/cplusplus/api-reference/capture-vision-router/settings.html?product=dbr&repoType=server#initsettingsfromfile] methods, here are the steps:

1. Visit the main [online demo](https://demo.dynamsoft.com/barcode-reader/).

2. Once on that page, you will find the settings menu on the left-hand side. Please note that you can access the full settings by clicking on *Advanced Settings*

3. Edit the settings that you want

4. Once you're ready to get the template, scroll down to the bottom of the settings menu to find the full settings as a *Struct* or a *Template*. The struct is the more readable version of the template, but the actual JSON code will be under *Template*.

5. Copy the JSON code under *Template* and paste it into your own JSON file, or you can download the template JSON file straight from the demo.

Note: If you have a JSON file that you previously used in version 9 and would like to keep using that, please note that the format needs to change to be useable in version 10.x of the SDK. Please use the [TemplateConverter Tool](https://download2.dynamsoft.com/dcv/TemplateConverter.zip) to convert the template to Barcode Reader version 10 compatible template.

And with that, you have your own template to use with the `InitSettingsFromFile` method! 
