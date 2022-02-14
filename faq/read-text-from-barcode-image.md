---
layout: default-layout
title: How can I read the text info from a barcode image?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, text info, barcode image
description: How can I read the text info from a barcode image?
needAutoGenerateSidebar: false
---

# Tech Basic

## How can I read the text info from a barcode image?

In order to obtain the text info from a barcode image, we will need to use the `IntermediateResults` interface:

```javascript
settings.intermediateResultSavingMode =
  Dynamsoft.DBR.EnumIntermediateResultSavingMode.IRSM_MEMORY;
```
