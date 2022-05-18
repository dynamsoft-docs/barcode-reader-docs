---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing -  How to set trial license
description: This page shows how to set trial license of Dynamsoft Barcode Reader.
keywords: trial license, licensing
needAutoGenerateSidebar: false
needGenerateH3Content: false
---

# How to set trial license

From version 8.2, if you are using the mobile edition, please check [how to apply for a private trial license](#how-to-apply-for-a-private-trial-license). For other editions, please follow the steps below:
  

## Get a trial license key.

You can log in the customer portal and [request for a trial extension online](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr).

**Note**: If the trial license expires or it is missing, you can still get barcode reading results but partial of the result will be masked with "*".

## Update the license key in source code. 

You can use `initLicense()` or `ProductKeys` to set the license.
 
Code snippet in C:

``` c
 void *hBarcode = NULL;
 hBarcode = DBR_CreateInstance();
 DBR_InitLicense(hBarcode, "t0068NQAAAI8+mMcYRNwmijAzExhq******");
 DBR_DestroyInstance(hBarcode);
```

Code snippet in C++:

``` cpp
 CBarcodeReader reader = new CBarcodeReader();
 reader.InitLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in C#:

``` csharp
 BarcodeReader reader = new BarcodeReader();
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******";
```

Code snippet in VB. NET:

``` vb
 Dim reader As BarcodeReader = New Dynamsoft.Barcode.BarcodeReader()
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******"
```

Code snippet in Java:

``` java
 BarcodeReader mBarcodeReader;
 mBarcodeReader = new BarcodeReader("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in PHP:

``` php
 $br = new BarcodeReader();
 $br->initLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```

Code snippet in Python:

``` python
 reader = BarcodeReader()
 reader.init_license("t0068NQAAAI8+mMcYRNwmijAzExhq******")
```

Code snippet in JavaScript:

``` js
 < script src = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@{version-number}/dist/dbr.js"
 data - productKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******" > < /script>
```

Then please save and rebuild your application.

## How to apply for a private trial license

From version 8.2, the mobile edition comes with a free trial license called ["public trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#public-trial-license) which is built into the product itself. When this public trial license expires, you can get a 30-day free trial license called ["private trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#private-trial-license) following the steps below

1. Email trial@dynamsoft.com and make sure to include the word "privateTrial" in the email title.
2. Dynamsoft will automatically create an organization for you and generate a 30-day trial license for that organization. After that, an email will be sent to you.
3. You can then access the private trial license by specifying the organization ID in your code with the API "organizationID".

> NOTE
>  
> In case a private trial license fails to be generated, Dynamsoft Support team will get in touch with you.

### Code snippets

* Java for Android

``` java
mbarcodeReader = new BarcodeReader();
DMLTSConnectionParameters ltspar = new DMLTSConnectionParameters();
ltspar.organizationID = "Your-organization-id"; //automatically generated and sent to you by our system
mbarcodeReader.initLicenseFromLTS(ltspar, new DBRLTSLicenseVerificationListener() {
    @Override
    public void LTSLicenseVerificationCallback(boolean b, Exception e) {
        if (e != null){ Log.i("lts error: ", e.getMessage());  } 
    }
});
```

* Objective-C for iOS

``` obj-c
DynamsoftBarcodeReader *barcodeReader; 
iDMLTSConnectionParameters* lts = [[iDMLTSConnectionParameters alloc] init]; 
lts.organizationID = @"Your-organization-id"; //automatically generated and sent to you by our system
barcodeReader = [[DynamsoftBarcodeReader alloc] initLicenseFromLTS:lts verificationDelegate:self]; 
* (void)LTSLicenseVerificationCallback:(bool)isSuccess error:(NSError * _Nullable)error
{​​​​​​​​
    //TODO add your code for license verification
}​​​​​​​​
```
