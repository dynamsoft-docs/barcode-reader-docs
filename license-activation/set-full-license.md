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

 Once you purchase a full license from our <a href ="https://www.dynamsoft.com/store/dynamsoft-barcode-reader/" target="_blank">online store</a>, you can find your license information at <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a>. 

 To activate the license, click "Please first activate the license".

 ![Activate][1]

 On the next page, set an Alias for your license or leave the default Alias and click the "Activate" button. Take "Connect to Dynamsoft's License Server" as an example.

 > Read more on What is an <a href ="https://www.dynamsoft.com/license-tracking/docs/about/terms.html#alias" target="_blank">Alias</a>
 
 > <a href ="https://www.dynamsoft.com/license-server/docs/dshosting/index.html?ver=latest" target="_blank">Connect to Dynamsoft's License Server</a> vs. <a href ="https://www.dynamsoft.com/license-server/docs/selfhosting/index.html?ver=latest" target="_blank">Connect to My Self-hosted License Server</a>
 
 ![Activate2][2]
 
 On the following popup window, click the "OK" button.
 
 ![Activate3][3]
 
You will find that the License Key is listed on the page now.
 
![Activate5][5]
 You can repeat the above steps to activate other license keys.

## Configure the license (optional)

 After the license is activated, the License Item will be added to Handshake Code and the License Key will be generated automatically. Read more on <a href ="https://www.dynamsoft.com/license-tracking/docs/about/terms.html#license-key" target="_blank">What is a License Key</a>.
 
 Basically, you can skip the step. But if you would like to configure the License Key or view the statistics of the License Key, please refer to <a href ="https://www.dynamsoft.com/license-tracking/docs/common/handshakeCodes.html" target="_blank">how to manage the handshake code</a>.

## Set the license in the code

<div class="sample-code-prefix"></div>
>- C
>- C++
>- C#
>- Java
>- Android
>- Objective-C
>- Swift
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
  char errorBuf[512];
  dynamsoft::dbr::CBarcodeReader::InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
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
```java
BarcodeReader.initLicense("YOUR-LICENSE-KEY", new DBRLicenseVerificationListener() {
  @Override
  public void DBRLicenseVerificationCallback(boolean isSuccessful, Exception e) {
    // Add your code for license verification.
  }
});
```
6. 
```objc
[DynamsoftBarcodeReader initLicense:@"YOUR-LICENSE-KEY" verificationDelegate:self];
- (void)DBRLicenseVerificationCallback:(bool)isSuccess error:(NSError *)error
{
  // Add your code for license verification.
}
```
7. 
```swift
DynamsoftBarcodeReader.initLicense("YOUR-LICENSE-KEY", verificationDelegate: self)
func dbrLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
{
  // Add your code for license verification.
}
```

 If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

**Notes:**

All license usage data is submitted to the Dynamsoft License Server (`DLS`) hosted by Dynamsoft. You can

* <a href="https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html" target="_blank">View activated license items</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/statistics.html" target="_blank">View the license usage statistics</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html" target="_blank">Get notified about license status</a> 

> Read more about <a href="https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html" target="_blank">the license mechanism</a>.
> 
[1]:assets\set-full-license-3\Activate.png
[2]:assets\set-full-license-3\Activate2.png
[3]:assets\set-full-license-3\Activate3.png
[4]:assets\set-full-license-3\Activate4.png
[5]:assets\set-full-license-3\Activate5.png


