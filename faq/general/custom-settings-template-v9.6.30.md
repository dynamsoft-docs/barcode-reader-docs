---
layout: default-layout
title: How to generate a custom settings template to use in your own application?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, runtime settings, template
description: How to generate a custom settings template to use in your own application?
needAutoGenerateSidebar: false
permalink: /faq/general/custom-settings-template-v9.6.30.html
---

## How to generate a custom settings template to use in your own application?

One of the strengths of the Dynamsoft Barcode Reader is its wide range of cuztomizable options that can optimize the performance of the SDK. Whether you are looking to prioritize read rate or speed, these settings can be used in many ways to match the targeted use case.

If you are looking to create your own custom template of settings to use with the `InitRuntimeSettingsWithFile` or `InitRuntimeSettingsWithString` methods, here are the steps:

1. Visit the main [online demo](https://demo.dynamsoft.com/barcode-reader/).

2. Once on that page, you will find the settings menu on the left-hand side. Please note that you can access the full settings by clicking on *Advanced Settings*

3. Edit the settings that you want

4. Once you're ready to get the template, scroll down to the bottom of the settings menu to find the full settings as a *Struct* or a *Template*. The struct is the more readable version of the template, but the actual JSON code will be under *Template*.

5. Copy the JSON code under *Template* and paste it into your own JSON file, or you can download the template JSON file straight from the demo.

And with that, you have your own template to use with the `InitRuntimeSettingsWithFile` method! If you would like to use the `InitRuntimeSettingsWithString` method instead, please make sure to properly stringify the JSON code from the template.