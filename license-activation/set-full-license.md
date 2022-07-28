---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - How to set full license
description: This page shows how to set full license of Dynamsoft Barcode Reader.
keywords: full license, licensing
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: false
permalink: /license-activation/set-full-license.html
---

# How to set full license in version 9.x

You can set the license by following the steps below:

1. [Activate the license](#activate-the-license)
2. [Configure the license (optional)](#configure-the-license-optional)
3. [Set the license in the code](#set-the-license-in-the-code)

## Activate the license

Once you purchase a full license from Dynamsoft, you can find your license information in the <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal (License | Full License)</a>.

To activate the license, click "Activate".

 ![Activate][1]

On the next page, set an Alias for your license or leave the default Alias, choose where you want the license to be hosted ("Dynamsoft’s License Server"
or "My Self-Hosted License Server") and click the "Activate" button.

![Activate2][2]

> 1. **Alias** is a way to identify the license. You can set a meaningful Alias to a license so that you can easily identify the purpose of the license.
>
> 2. In most cases, you should choose "Dynamsoft’s License Server", choose "My Self-Hosted License Server" only when you have [consulted us](https://www.dynamsoft.com/company/contact/).
>
> 3. You might be prompted to add the new license to an existing project or create a new project for this license.

On the following popup window, click the "OK" button.

![Activate3][3]

You will find that the **License Key** is listed on the license details page now.

![Activate5][5]

You can copy the **License Key** and use it in your application.

If you have other new licenses, you can follow the same steps to activate them.

> A license usually expires one year after it is activated. Do not activate the license until you actually need to use it.

## Configure the license (optional)

To configure the License Key, you can click the project name (found after "Linked Project Name") on the license details page to get to the configuration page. Read <a href ="https://www.dynamsoft.com/license-server/docs/common/project.html?utm_source=docs&product=dbr" target="_blank">how to manage the project</a> for more information.

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

If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

[1]:assets\set-full-license-3\Activate.png
[2]:assets\set-full-license-3\Activate2.png
[3]:assets\set-full-license-3\Activate3.png
[4]:assets\set-full-license-3\Activate4.png
[5]:assets\set-full-license-3\Activate5.png
