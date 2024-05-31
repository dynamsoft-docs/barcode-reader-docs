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

You can request a 30-day trial license via the [Request a Trial License](https://www.dynamsoft.com/customer/license/trialLicense?product=dbr&utm_source=docs){:target="_blank"} link.

You can contact our support team via the [Contacting Us](https://www.dynamsoft.com/contact/){:target="_blank"} link when:

- You want request for an Offline trial license.
- Your license generation failed.

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
Dynamsoft.License.LicenseManager.initLicense("YOUR-LICENSE-KEY");
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
LicenseManager.initLicense("YOUR-LICENSE-KEY", this, (isSuccess, error) -> {
   if (!isSuccess) {
          error.printStackTrace();
   }
});
```
>
```objc
[DSLicenseManager initLicense:@"YOUR-LICENSE-KEY" verificationDelegate:self];
- (void)onLicenseVerified:(BOOL)isSuccess error:(nullable NSError *)error {
    if (!isSuccess && error != nil) {
        NSLog(@"error: %@", error);
    }
}
```
>
```swift
LicenseManager.initLicense("YOUR-LICENSE-KEY", verificationDelegate: self)
func onLicenseVerified(_ isSuccess: Bool, error: Error?) {
   if !isSuccess {
          if let error = error {
             print("\(error.localizedDescription)")
          }
   }
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
