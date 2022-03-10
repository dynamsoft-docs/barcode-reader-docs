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

## Update the license key in C/C++/C#/Java/Python/PHP/VB.NET

You can use `initLicense()` or `ProductKeys` to set the license.

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
 void *hBarcode = NULL;
 hBarcode = DBR_CreateInstance();
 DBR_InitLicense(hBarcode, "t0068NQAAAI8+mMcYRNwmijAzExhq******");
```
2. 
```cpp
 CBarcodeReader reader = new CBarcodeReader();
 reader.InitLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```
3. 
```csharp
 BarcodeReader reader = new BarcodeReader();
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******";
```
4. 
```java
 BarcodeReader mBarcodeReader;
 mBarcodeReader = new BarcodeReader("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```
5. 
```python
 reader = BarcodeReader()
 reader.init_license("t0068NQAAAI8+mMcYRNwmijAzExhq******")
```
6. 
```php
 $br = new BarcodeReader();
 $br->initLicense("t0068NQAAAI8+mMcYRNwmijAzExhq******");
```
7. 
```vb
 Dim reader As BarcodeReader = New Dynamsoft.Barcode.BarcodeReader()
 reader.ProductKeys = "t0068NQAAAI8+mMcYRNwmijAzExhq******"
```


Then please save and rebuild your application.

## How to apply for a private trial license

For mobile edition (8.2+) and the JavaScript edition (8.2.5+), a free trial license called ["public trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#public-trial-license) will be used by default if no license is specified in your code. When this public trial license expires, you can get a 30-day free trial license called ["private trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#private-trial-license). The following shows how to request this license.

- 1. Request the private trial license in the [customer portal](https://www.dynamsoft.com/customer/license/trialLicense), register for a Dynamsoft account if necessary.
- 2. A 30-day private-trial license will be generated and configured to your organization. 

> NOTE
>  
> In case a private trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact/).

- 3. Specify your organization ID in your code with the API "organizationID".

<div class="sample-code-prefix"></div>
>- JavaScript
>- Java-Android
>- Objective-C
>- Swift
>
>1. 
```javascript
// replace the number 200001 with YOUR-ORGANIZATION-ID
Dynamsoft.DBR.BarcodeReader.organizationID = "200001"; 
var reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
```
2. 
```java
mBarcodeReader = new BarcodeReader();
DMDLSConnectionParameters dls = new DMDLSConnectionParameters();
// replace the number 200001 with YOUR-ORGANIZATION-ID
dls.organizationID = "200001";
mbarcodeReader.initLicenseFromDLS(dls, new DBRDLSLicenseVerificationListener() {
    @Override
    public void DLSLicenseVerificationCallback(boolean b, Exception e) {
        if (e != null){
            Log.i("dls error: ", e.getMessage());  
        } 
    }
});
```
3. 
```obj-c
DynamsoftBarcodeReader *barcodeReader;
iDMDLSConnectionParameters* dls = [[iDMDLSConnectionParameters alloc] init];
// replace the number 200001 with YOUR-ORGANIZATION-ID
dls.organizationID = @"200001";
barcodeReader = [[DynamsoftBarcodeReader alloc] initLicenseFromDLS:dls verificationDelegate:self];
* (void)DLSLicenseVerificationCallback:(bool)isSuccess error:(NSError * _Nullable)error
{
    //TODO add your code for license verification
}
```
4. 
```swift
let dls = iDMDLSConnectionParameters()
// replace the number 200001 with YOUR-ORGANIZATION-ID
dls.organizationID = "200001"
let barcodeReader = DynamsoftBarcodeReader.init(licenseFromDLS: dls, verificationDelegate: self)
func DLSLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
{
    //TODO add your code for license verification
}
```
