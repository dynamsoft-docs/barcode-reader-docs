---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing -  How to set trial license
description: This page shows how to set trial license of Dynamsoft Barcode Reader.
keywords: trial license, licensing
needAutoGenerateSidebar: false
needGenerateH3Content: false
---

# How to set trial license

If you are using the mobile edition (8.2+) or the JavaScript edition (8.2.5+), please check [how to apply for a private trial license](#how-to-apply-for-a-private-trial-license). For other editions, please follow the steps below:
  
## Get a trial license key

You can log in the customer portal and [request for a trial extension online](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr).

**Note**: If the trial license expires or it is missing, you can still get barcode reading results but partial of the result will be masked with "*".

## Update the license key in C/C++/C#/Java/Python/PHP/VB.NET

You can use `initLicense()` to set the license.

<div class="sample-code-prefix"></div>
>- C
>- C++
>- C#
>- Java
>- Python
>- PHP
>- VB.NET
>
>1. 
```c
  char errorBuf[512];
  DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```
2. 
```cpp
  dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY");
  CBarcodeReader* reader = new CBarcodeReader();
  // add further process
```
3. 
```csharp
  string errorMsg;
  BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
4. 
```java
  BarcodeReader.initLicense("YOUR-LICENSE-KEY");
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
5. 
```python
 BarcodeReader.init_license("t0068NQAAAI8+mMcYRNwmijAzExhq******")
 reader = BarcodeReader()
```
6. 
```php
 $br = new BarcodeReader();
 $br->initLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```
7. 
```vb
  Dim errMsg As String = ""
  Dynamsoft.DBR.BarcodeReader.InitLicense("YOUR-LICENSE-KEY", errMsg)
  Dim reader As BarcodeReader = New Dynamsoft.DBR.BarcodeReader()
  'add further process
```


Then please save and rebuild your application.

## How to apply for a private trial license

The following shows how you can apply for a 30-day free trial license.

- Login to [Customer Portal](https://www.dynamsoft.com/customer/index?utm_source=docs&product=dbr), register for a Dynamsoft account if you haven't already done so;
- Go to the [Trial License](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr) page, select the correct product and click "Register for a 30-Day Trial";
- A 30-day private-trial license will be generated and the instruction on how to use it will show up on the page.

> NOTE
>  
> In case a private trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact/).
