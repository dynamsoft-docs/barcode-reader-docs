---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - Main Page
description: This is the main page of Dynamsoft Barcode Reader Licensing.
keywords: license initialization, licensing
needAutoGenerateSidebar: false
---

# License Initialization

## Get a Trial License

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
// Option 1: Set the license when using the RTU (Ready-To-Use) class `BarcodeScanner`.
// Note: The license initialization is deferred until `launch()` is called.
const barcodeScanner = new Dynamsoft.BarcodeScanner({
  license: "YOUR_LICENSE_KEY",
});
// Option 2: Set the license when using the Foundational API.
// Note: The license initialization is also deferred.
Dynamsoft.License.LicenseManager.initLicense("YOUR_LICENSE_KEY");
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
    CCaptureVisionRouter *cvRouter = new CCaptureVisionRouter;
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
      CaptureVisionRouter cvRouter = new CaptureVisionRouter();
      // add code for further process
  }
```
>
```java
try {
    LicenseError licenseError = LicenseManager.initLicense("YOUR-LICENSE-KEY");
    if (licenseError.getErrorCode() != EnumErrorCode.EC_OK) {
        System.out.println("License initialization failed: ErrorCode: " + licenseError.getErrorCode() + ", ErrorString: " + licenseError.getErrorString());
        return;
    }
} catch (LicenseException e) {
    System.out.println("License initialization failed: ErrorCode: " + e.getErrorCode() + ", ErrorString: " + e.getErrorString());
    return;
}
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
error_code, error_msg = LicenseManager.init_license("--Enter Your License Key Here--")
if error_code != EnumErrorCode.EC_OK.value and error_code != EnumErrorCode.EC_LICENSE_CACHE_USED.value:
    print("License initialization error: " + error_msg)
else:
    cvr_instance = CaptureVisionRouter()
    # add code for further process
```

If you are using a `concurrent instance license`, see [How to properly use concurrent instance license]({{ site.faq }}license/ensure-no-overuse.html){:target="_blank"} for more information.

