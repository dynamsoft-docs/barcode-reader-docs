---
layout: default-layout
title: How to add/remove a "beep" sound once a barcode is found?
keywords: Dynamsoft Barcode Reader, FAQ, JavaScript, tech basic, beep, sound
description: How to add/remove a "beep" sound once a barcode is found?
needAutoGenerateSidebar: false
---

# How to add/remove a "beep" sound once a barcode is found?

[<< Back to FAQ index](index.md)

This feature is controlled using the [whenToPlaySoundforSuccessfulRead](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/api-reference/interface/ScanSettings.html?ver=latest) property. To enable the feature, set the property to either **frame** or **unique**. To disable the feature, set it to **never**.

> This feature is disabled by default.
