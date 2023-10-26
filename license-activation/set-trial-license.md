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
> In case the trial license fails to be generated, Dynamsoft Support team will get in touch with you. Or you can [contact us](https://www.dynamsoft.com/company/contact/).

The following shows how to set the license in the code

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
int errorCode = 0;
char errorBuf[512];
errorCode = DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (errorCode != DBR_OK)
{
    // Add your code for license error processing;
}
// ...
void* dbr = DBR_GetInstance();
if(dbr != NULL)
{
    // Add your code here to call decoding method, process barcode results and so on
    // ...
    // Release the allocated resources for the instance
    DBR_RecycleInstance(dbr);
}
```
>
```cpp
int errorCode = 0;
char errorBuf[512];
errorCode = CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
if (errorCode != DBR_OK)
{
    // Add your code for license error processing;
}
// ...
CBarcodeReader* dbr = CBarcodeReader::GetInstance();
if(dbr != NULL)
{
    // Add your code here to call decoding method, process barcode results and so on
    // ...
    // Release the allocated resources for the instance
    dbr->Recycle();
}
```
>
```csharp
string errorMsg;
EnumErrorCode errorCode = BarcodeReader.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (errorCode != EnumErrorCode.DBR_SUCCESS)
{
    // Add your code for license error processing;
}
// ...
BarcodeReader reader = BarcodeReader.GetInstance();
if (reader != null)
{
    // Add your code here to call decoding method, process barcode results and so on
    // ...
    // Release the allocated resources for the instance
    reader.Recycle();
}
```
>
```java
try {
    BarcodeReader.initLicense("YOUR-LICENSE-KEY");
    // ...
    BarcodeReader reader = BarcodeReader.getInstance();
    if(reader != null)
    {
        // Add your code here to call decoding method, process barcode results and so on
        // ...
        // Release the allocated resources for the instance
        reader.recycle();
    }
} catch (BarcodeReaderException ex) {
    // ...
}
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
if error[0] != EnumErrorCode.DBR_OK:
    # Add your code for license error processing
# ...
reader = BarcodeReader.get_instance()
if reader != None:
    # Add your code here to call decoding method, process barcode results and so on
    # ...
    # Release the allocated resources for the instance
    reader.recycle()
```

If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/company/customer-service/#contact).

<br />
<br />
<br />
<br />