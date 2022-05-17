---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing -  How to set trial license
description: This page shows how to set trial license of Dynamsoft Barcode Reader.
keywords: trial license, licensing
needAutoGenerateSidebar: false
needGenerateH3Content: false
---

# How to set trial license

To use a trial license, you can follow the steps below:

## Get a trial license key.

You can log in the customer portal and [request for a trial extension online](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr).

**Note**: If the trial license expires or it is missing, you can still get barcode reading results but partial of the result will be masked with "*".

## Update the license key in source code. 

You can use `initLicense()` or `ProductKeys` to set the license.
 
Code snippet in C:
```c
 void *hBarcode = NULL;
 hBarcode = DBR_CreateInstance();
 DBR_InitLicense(hBarcode, "t0068NQAAAI8+mMcYRNwmijAzExhq******");
 DBR_DestroyInstance(hBarcode);
```

Code snippet in C++:
```cpp
 CBarcodeReader reader = new CBarcodeReader();
 reader.InitLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in C#:
```csharp
 BarcodeReader reader = new BarcodeReader();
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******";
```

Code snippet in VB.NET:
```vb
 Dim reader As BarcodeReader = New Dynamsoft.Barcode.BarcodeReader()
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******"
```

Code snippet in Java:
```java
 BarcodeReader mBarcodeReader;
 mBarcodeReader = new BarcodeReader("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in PHP:
```php
 $br = new BarcodeReader();
 $br->initLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in Python:
```python
 reader = BarcodeReader()
 reader.init_license("t0068NQAAAI8+mMcYRNwmijAzExhq******")
```

Code snippet in JavaScript:
```js
 <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@{version-number}/dist/dbr.js" data-productKeys="t0068NQAAAI8+mMcYRNwmijAzExhq******"></script>
```

Then please save and rebuild your application.