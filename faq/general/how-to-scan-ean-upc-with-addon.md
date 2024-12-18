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

UPC and EAN are barcode formats commonly used for product identification. These formats can include supplemental 2-digit or 5-digit barcodes (known as AddOn Codes), typically found on the right side of the main barcode. These AddOn Codes are often used for magazines, books, or other products to encode additional information like pricing or issue numbers.

Dynamsoft Barcode Reader (DBR) does not enable reading such AddOn Codes by default.

![EAN-13 + EAN-5 on a book](https://www.dynamsoft.com/codepool/img/2024/10/add-on/ean_13.jpg)
![UPC-E + UPC-2 on a magazine](https://www.dynamsoft.com/codepool/img/2024/10/add-on/upc_e.jpg)

To enable AddOn Code scanning, the property `EnableAddOnCode` in the `BarcodeFormatSpecificationOptions` array must be set to 1.

If you want to limit the Dynamsoft Barcode Reader to only decode UPC and EAN codes with AddOn Codes, consider the following additional configurations:
1. **Regular Expression Filtering:** Use `BarcodeTextRegExPattern` to exclude results without AddOn Codes.
2. **Barcode Format Restriction:** Restrict the barcode formats to EAN and UPC only by setting `BarcodeFormatIds`.

### Using JSON Templates

Modify all of the `EnableAddOnCode` property in your template file by setting its value to `1`:
```json
{
    "BarcodeFormatSpecificationOptions": 
    [
        {
            "EnableAddOnCode": 1, // Enable AddOn Codes
            "Name": "bfs1",
            // (OPTIONAL) Apply Regular Expression Filtering
            // Exclude All Other Results Without Addon Codes
            "BarcodeTextRegExPattern" : "\\d+-\\d+",
			...
        },
		...
    ],
    "BarcodeReaderTaskSettingOptions" : 
    [
      { // (OPTIONAL) Restrict Formats to EAN and UPC Only
        "BarcodeFormatIds" : 
        [ "BF_EAN_8", "BF_EAN_13", "BF_UPC_A", "BF_UPC_E" ],
      }
    ],
	...
}
```

### Using JavaScript Code

```javascript
let settings = await cvRouter.outputSettings(); // Retrieve the runtime settings
let formatOptionsArray = settings.BarcodeFormatSpecificationOptions;
for (let index = 0; index < formatOptionsArray.length; index++) {
  const options = formatOptionsArray[index];
  // Enable AddOn Codes
  options["EnableAddOnCode"] = 1;
  // (OPTIONAL) Apply Regular Expression Filtering
  // Exclude Results Without AddOn Codes
  options["BarcodeTextRegExPattern"] = "\\d+-\\d+";
}

// -------------------- (OPTIONAL) -------------------------------------------
// Restrict Expected Barcode Formats to EAN and UPC Only
let barcodeOptionsArray = settings.BarcodeReaderTaskSettingOptions;
for (let index = 0; index < barcodeOptionsArray.length; index++) {
  const options = barcodeOptionsArray[index];
  options["BarcodeFormatIds"] = ["BF_EAN_8", "BF_EAN_13", "BF_UPC_A", "BF_UPC_E"];
}
// ---------------------------------------------------------------------------

await cvRouter.initSettings(settings); // Apply the modified settings
```

### Sample Code

You may also find it helpful to explore our [blog post on scanning EAN/UPC and AddOn codes with JavaScript](https://www.dynamsoft.com/codepool/scan-ean-upc-and-its-add-on-javascript.html).