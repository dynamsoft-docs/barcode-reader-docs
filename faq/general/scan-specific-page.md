---
layout: default-layout
title: The pdf file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, scan specific page
description: The pdf file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?
needAutoGenerateSidebar: false
permalink: /faq/general/scan-specific-page.html
---

# FAQ - General

## The PDF file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?

This can indeed be done via the `Pages` parameter of the `ImageParameter` interface as explained [here](https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/multipage-imgs-and-pdf.html?ver=latest). This can ONLY be set via the JSON. Here is a JSON snippet for reading the last page of a 10 page document:

```json
{    "ImageParameter":  {                               
        "Pages": "9"               
    },     
    "Version": "3.0"
}
```

Once the JSON string is set, you can initialize the runtime settings to use it via the `InitRuntimeSettingsWithString` or `InitRuntimeSettingsWithFile` method. Please note that if you are modifying any other settings, you can include them in the JSON string/file as well, or you can access them individually after calling either of the aforementioned methods.
