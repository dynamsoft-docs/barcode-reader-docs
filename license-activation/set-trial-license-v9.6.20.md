---
layout: default-layout
title:  How to set trial license - Dynamsoft Barcode Reader Licensing
description: This page shows how to set trial license of Dynamsoft Barcode Reader.
keywords: trial license, licensing
needAutoGenerateSidebar: false
needGenerateH3Content: false
---

# How to set trial license

The following shows how you can apply for a 30-day free trial license.

- Sign in the [Customer Portal](https://www.dynamsoft.com/customer/index?utm_source=docs&product=dbr). Register for a Dynamsoft account if you haven't already done so;
- Go to [License > Trial License](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr) page, select the correct version and package/edition, then click "Register for a 30-Day Trial";
- A 30-day private-trial license will be generated and the instruction on how to use it will show up on the page.

> NOTE
>
> In case the trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/contact/).

The following shows how to set the license in the code

<div class="sample-code-prefix"></div>
>- JavaScript
>- C
>- C++
>- C#
>- Java
>- Android
>- Objective-C
>- Swift
>- Python
>
>1. 
```javascript
Dynamsoft.DBR.BarcodeScanner.license = "YOUR-LICENSE-KEY";
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
```
2. 
```c
  char errorBuf[512];
  DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```
3. 
```cpp
  char errorBuf[512];
  dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  CBarcodeReader* reader = new CBarcodeReader();
  // add further process
```
4. 
```csharp
  string errorMsg;
  BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
5. 
```java
  BarcodeReader.initLicense("YOUR-LICENSE-KEY");
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
6. 
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY", new DBRLicenseVerificationListener() {
  @Override
  public void DBRLicenseVerificationCallback(boolean isSuccessful, Exception e) {
    // Add your code for license verification.
  }
});
```
7. 
```objc
[DynamsoftBarcodeReader initLicense:@"YOUR-LICENSE-KEY" verificationDelegate:self];
- (void)DBRLicenseVerificationCallback:(bool)isSuccess error:(NSError *)error
{
  // Add your code for license verification.
}
```
8. 
```swift
DynamsoftBarcodeReader.initLicense("YOUR-LICENSE-KEY", verificationDelegate: self)
func dbrLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
{
  // Add your code for license verification.
}
```
9. 
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
dbr = BarcodeReader()
```

If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/company/customer-service/#contact).

<br />
<br />
<br />
<br />