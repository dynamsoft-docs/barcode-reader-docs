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
```js
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
  int errorCode = 0;
  string errorMsg;
  errorCode = LicenseManager.InitLicense("--Enter Your License Key Here--", out errorMsg);
  if (errorCode != (int)EnumErrorCode.EC_OK && errorCode != (int)EnumErrorCode.EC_LICENSE_CACHE_USED)
  {
      Console.WriteLine("License initialization error: " + errorMsg);
  }
  else
  {
      CaptureVisionRouter cvr = new CaptureVisionRouter();
      // add code for further process
  }
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
error_code = 0
error_code, error_msg = LicenseManager.init_license("--Enter Your License Key Here--")
if error_code != EnumErrorCode.EC_OK.value and error_code != EnumErrorCode.EC_LICENSE_CACHE_USED.value:
    print("License initialization error: " + error_msg)
else:
    CaptureVisionRouter cvr = new CaptureVisionRouter()
    # add code for further process
```

If you are using a **concurrent instance license**, you need to apply two more operations:

* Call method SetMaxConcurrentInstanceCount to set the license count you purchased.
* Update the parameter MaxParallelTasks to align with the purchased quantity.

<div class="sample-code-prefix template2"></div>
   >- C++
   >- C#
   >- Python
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
>
```csharp
    int licenseCount = YOUR-PURCHASED-LICENSE-COUNT;
    int errorCode = 0;
    string errorMsg;
    errorCode = LicenseManager.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
    LicenseManager.SetMaxConcurrentInstanceCount(licenseCount)
    if (errorCode != (int)EnumErrorCode.EC_OK && errorCode != (int)EnumErrorCode.EC_LICENSE_CACHE_USED)
    {
        Console.WriteLine("License initialization error: " + errorMsg);
    }
    else
    {
        CaptureVisionRouter cvr = new CaptureVisionRouter();
        SimplifiedCaptureVisionSettings settings;
        cvr.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
        setting.maxParallelTasks = licenseCount;
        cvr.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);
        // add code for further process
    }
```
>
```python
license_count = YOUR-PURCHASED-LICENSE-COUNT
LicenseManager.set_max_concurrent_instance_count(license_count)
error_code, error_msg = LicenseManager.init_license("YOUR-LICENSE-KEY")
if error_code != EnumErrorCode.EC_OK.value and error_code != EnumErrorCode.EC_LICENSE_CACHE_USED.value:
    print("License initialization error: " + error_msg)
else:
    CaptureVisionRouter cvr = new CaptureVisionRouter()
    error_code, error_msg, settings = cvr.get_simplified_settings(EnumPresetTemplate.PT_READ_BARCODES.value)
    settings.max_parallel_tasks = license_count
    error_code, error_msg = cvr.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
    # add code for further process
```
