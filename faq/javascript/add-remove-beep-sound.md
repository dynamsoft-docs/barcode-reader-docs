---
layout: default-layout
title: How to add/remove a "beep" sound once a barcode is found?
keywords: Dynamsoft Barcode Reader, FAQ, JavaScript, tech basic, beep, sound
description: How to add/remove a "beep" sound once a barcode is found?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to add/remove a "beep" sound once a barcode is found?

This feature is controlled using the [`whenToPlaySoundforSuccessfulRead`](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeScanner.html?ver=latest#whentoplaysoundforsuccessfulread) property. To enable the feature, set the property to either **frame** or **unduplicated**. To disable the feature, set it to **never**.

> This feature is disabled by default.
