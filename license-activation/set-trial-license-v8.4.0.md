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

You can log in the customer portal and [request for a trial extension online](https://www.dynamsoft.com/customer/license/trialLicense).

**Note**: If the trial license expires or it is missing, you can still get barcode reading results but partial of the result will be masked with "*".

## Update the license key in C/C++/C#/Java/PHP/Python/VB.NET

You can use `initLicense()` or `ProductKeys` to set the license.
 
Code snippet in C:

``` c
 void *hBarcode = NULL;
 hBarcode = DBR_CreateInstance();
 DBR_InitLicense(hBarcode, "t0068NQAAAI8+mMcYRNwmijAzExhq******");
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

Then please save and rebuild your application.

## How to apply for a private trial license

For mobile edition (8.2+) and the JavaScript edition (8.2.5+), a free trial license called ["public trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#public-trial-license) will be used by default if no license is specified in your code. When this public trial license expires, you can get a 30-day free trial license called ["private trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#private-trial-license). The following shows how to request this license.

1. Request the private trial license in the [customer portal](https://www.dynamsoft.com/customer/license/trialLicense), register for a Dynamsoft account if necessary.
2. A 30-day private-trial license will be generated and configured to your organization. 
3. [Specify your organization ID](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html?ver=latest#specify-the-organization-id) in your code with the API "organizationID".

> NOTE
>  
> In case a private trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact/).

## Update the license key in JavaScript

**Code Snippet**  

* JavaScript

``` javascript
Dynamsoft.DBR.BarcodeReader.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
var reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
```

## Update the license key in Java for Android, Objective-C, and Swift

* Java for Android

``` java
mbarcodeReader = new BarcodeReader();
DMLTSConnectionParameters ltspar = new DMLTSConnectionParameters();
ltspar.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
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
lts.organizationID = @"123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
barcodeReader = [[DynamsoftBarcodeReader alloc] initLicenseFromLTS:lts verificationDelegate:self]; 
* (void)LTSLicenseVerificationCallback:(bool)isSuccess error:(NSError * _Nullable)error
{
    //TODO add your code for license verification
}
```

* Swift for iOS

```swift
var barcodeReader:DynamsoftBarcodeReader! = nil
let lts = iDMLTSConnectionParameters()
lts.organizationID = "123456" // replace the number 123456 with YOUR-ORGANIZATION-ID
barcodeReader = DynamsoftBarcodeReader(licenseFromLTS: lts, verificationDelegate: self)
```
