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
  Dim errMsg As String = ""
  Dynamsoft.DBR.BarcodeReader.InitLicense("YOUR-LICENSE-KEY", errMsg)
  Dim reader As BarcodeReader = New Dynamsoft.DBR.BarcodeReader()
  'add further process
```


Then please save and rebuild your application.

## How to apply for a private trial license

For mobile edition (8.2+) and the JavaScript edition (8.2.5+), a free trial license called ["public trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#public-trial-license) will be used by default if no license is specified in your code. When this public trial license expires, you can get a 30-day free trial license called ["private trial license"](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#private-trial-license). The following shows how to request this license.

- Request the private trial license in the [customer portal](https://www.dynamsoft.com/customer/license/trialLicense), register for a Dynamsoft account if necessary.
- A 30-day private-trial license will be generated and configured to your organization. 

> NOTE
>  
> In case a private trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact/).

- Specify your organization ID in your code with the API "organizationID".

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
BarcodeReader.initLicense("YOUR-LICENSE-KEY", new DBRLicenseVerificationListener() {
  @Override
  public void DBRLicenseVerificationCallback(boolean isSuccessful, Exception e) {
    // Add your code for license verification.
  }
});
```
3. 
```objc
[DynamsoftBarcodeReader initLicense:@"YOUR-LICENSE-KEY" verificationDelegate:self];
- (void)DBRLicenseVerificationCallback:(bool)isSuccess error:(NSError *)error
{
  // Add your code for license verification.
}
```
4. 
```swift
DynamsoftBarcodeReader.initLicense("YOUR-LICENSE-KEY", verificationDelegate: self)
func dbrLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
{
  // Add your code for license verification.
}
```
