---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - Main Page
description: This is the main page of Dynamsoft Barcode Reader Licensing.
keywords: license initialization, licensing
needAutoGenerateSidebar: false
permalink: /license-activation/index.html
---

# License Initialization

## Get a trial license

The following shows how you can apply for a 30-day free trial license. 

- Sign in the [Customer Portal](https://www.dynamsoft.com/customer/index?utm_source=docs&product=dbr). Register for a Dynamsoft account if you haven't already done so;
- Go to [License > Trial License](https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs&product=dbr) page, select the correct version and package/edition, then click "Register for a 30-Day Trial";
- A 30-day private-trial license will be generated and the instruction on how to use it will show up on the page.

> NOTE
>
> In case the trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact).

## Get a Full License

<a href="https://www.dynamsoft.com/company/contact" target="_blank">Contact us</a> to purchase a full license.

## Set the License In the Code

The following shows how to set the license in the code.

<div class="sample-code-prefix template2"></div>
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
> 
```javascript
  Dynamsoft.DBR.BarcodeScanner.license = "YOUR-LICENSE-KEY";
  let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
```
> 
```c
  char errorBuf[512];
  DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```
>
```cpp
    int errorCode = 1;
    char errorMsg[512];
    errorCode = CLicenseManager::InitLicense("YOUR-LICENSE-KEY", errorMsg, 512);
    if (errorCode != EC_OK)
        cout << "License initialization error: " << errorMsg << endl;
    CCaptureVisionRouter *cvr = new CCaptureVisionRouter;
    // add further process
```
>
```csharp
  string errorMsg;
  BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
>
```java
  BarcodeReader.initLicense("YOUR-LICENSE-KEY");
  BarcodeReader reader = new BarcodeReader();
  // add further process
```
>
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY", new DBRLicenseVerificationListener() {
  @Override
  public void DBRLicenseVerificationCallback(boolean isSuccessful, Exception e) {
    // Add your code for license verification.
  }
});
```
>
```objc
[DynamsoftBarcodeReader initLicense:@"YOUR-LICENSE-KEY" verificationDelegate:self];
- (void)DBRLicenseVerificationCallback:(bool)isSuccess error:(NSError *)error
{
  // Add your code for license verification.
}
```
>
```swift
DynamsoftBarcodeReader.initLicense("YOUR-LICENSE-KEY", verificationDelegate: self)
func dbrLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
{
  // Add your code for license verification.
}
```
>
```python
error = BarcodeReader.init_license("YOUR-LICENSE-KEY")
dbr = BarcodeReader()
```

If you are using a **concurrent instance license**, you need to apply two more operations:

* Call method SetMaxConcurrentInstanceCount to set the license count you purchased.
* Update the parameter MaxParallelTasks to align with the purchased quantity.

<div class="sample-code-prefix template2"></div>
   >- C++
   >
>
```cpp
    int licenseCount = YOUR-PURCHASED-LICENSE-COUNT;
    int errorCode = 1;
    char errorMsg[512];
    // Set the license count you purchased
    SetMaxConcurrentInstanceCount(licenseCount);
    errorCode = CLicenseManager::InitLicense("YOUR-LICENSE-KEY", errorMsg, 512);
    if (errorCode != EC_OK)
        cout << "License initialization error: " << errorMsg << endl;
    CCaptureVisionRouter *cvr = new CCaptureVisionRouter;
    // Update parameter maxParallelTasks
    SimplifiedCaptureVisionSettings setting;
    cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    setting.maxParallelTasks = licenseCount;
    cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    // add further process
```
