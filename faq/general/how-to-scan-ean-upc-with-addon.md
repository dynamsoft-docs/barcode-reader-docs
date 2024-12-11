---
layout: default-layout
title: How to Scan EAN/UPC with Addon Codes?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, EAN-2, EAN-5, UPC–A, Add-On, supplement
description: How to Scan EAN/UPC with Addon Codes?
needAutoGenerateSidebar: false
permalink: /faq/general/how-to-scan-ean-upc-with-addon.html
---

# How to Scan EAN/UPC with Addon Codes?

[<< Back to FAQ index](index.md)

UPC and EAN are barcode formats commonly used for product identification. Both UPC and EAN codes can have supplemental 2-digit or 5-digit barcodes, typically found on the right side of the main code. 

Dynamsoft Barcode Reader (DBR) does not enable reading such AddOn Codes with its default templates.

![EAN-13 + EAN-5 on a book](https://www.dynamsoft.com/codepool/img/2024/10/add-on/ean_13.jpg)
![UPC-E + UPC-2 on a magazine](https://www.dynamsoft.com/codepool/img/2024/10/add-on/upc_e.jpg)

In order to read these types of barcodes, the property `EnableAddOnCode` in `BarcodeFormatSpecificationOptions` arrays must be set to `1`.

### Using JSON Templates

You can find all occurrences of `EnableAddOnCode` in your existing template file and set their values to `1` instead of the default `0`.

```json
{
    "BarcodeFormatSpecificationOptions": [
        {
            "EnableAddOnCode": 1, // 1 to Enable AddOn Codes
            "Name": "bfs1",
			...
        },
		...
    ],
	...
}
```

### Using JavaScript Code

```javascript
let settings = await cvRouter.outputSettings();
let formatOptionsArray = settings.BarcodeFormatSpecificationOptions;
for (let index = 0; index < formatOptionsArray.length; index++) {
  const options = formatOptionsArray[index];
  options["EnableAddOnCode"] = 1;
}
```

