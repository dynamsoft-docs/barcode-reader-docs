---
layout: default-layout
title: Can I read barcodes from existing files?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, existing file
description: Can I read barcodes from existing files?
needAutoGenerateSidebar: false
---

# Tech Basic

## Can I read barcodes from existing files?

Yes dynamsoft barcode reader supports reading from an existing file. This can be achieved via the `BarcodeReader` class instead of the `BarcodeScanner` class.

```javascript
let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
let results = await reader.decode(imageSource);
```

> [this article]({{site.faq}}/formats-supported-for-existing-files.html) shows the supported formats.
