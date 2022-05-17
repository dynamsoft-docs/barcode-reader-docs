---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - How to set full license
description: This page shows how to set full license of Dynamsoft Barcode Reader.
keywords: full license, licensing
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# How to set full license in version 9.x

You can set the license by following the steps below:

1. [Activate the license](#activate-the-license)
2. [Configure the license (optional)](#configure-the-license-optional)
3. [Set the license in the code](#set-the-license-in-the-code)

## Activate the license

Once you purchase a full license from Dynamsoft, you can find your license information in the <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a>.

To activate the license, click "Activate".

 ![Activate][1]

On the next page, set an Alias for your license or leave the default Alias and click the "Activate" button. Take "Connect to Dynamsoft's License Server" as an example.

> Read more on <a href ="https://www.dynamsoft.com/license-server/docs/about/terms.html#alias?utm_source=docs&product=dbr" target="_blank">Alias</a>
>
> <a href ="https://www.dynamsoft.com/license-server/docs/about/activate.html?utm_source=docs&product=dbr" target="_blank">Connect to Dynamsoft's License Server</a> vs. <a href ="https://www.dynamsoft.com/license-server/docs/selfhosting/index.html?utm_source=docs&product=dbr" target="_blank">Connect to My Self-hosted License Server</a>

![Activate2][2]

On the following popup window, click the "OK" button.

![Activate3][3]

You will find that the License Key is listed on the license details page now.

![Activate5][5]

You can repeat the above steps to activate other license keys.

## Configure the license (optional)

To configure the License Key, you can click the name after "Linked Project Name" on the license details page to get to the configuration page. Read <a href ="https://www.dynamsoft.com/license-server/docs/common/project.html?utm_source=docs&product=dbr" target="_blank">how to manage the project</a> for more information.

## Set the license in the code

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
Dynamsoft.DBR.BarcodeReader.license = "YOUR-LICENSE-KEY";
let scanner = await Dynamsoft.DBR.BarcodeReader.createInstance();
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

If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

[1]:assets\set-full-license-3\Activate.png
[2]:assets\set-full-license-3\Activate2.png
[3]:assets\set-full-license-3\Activate3.png
[4]:assets\set-full-license-3\Activate4.png
[5]:assets\set-full-license-3\Activate5.png
