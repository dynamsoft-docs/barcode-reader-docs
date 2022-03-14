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

 ![FullLicenseList][1]

 On the next page, set an Alias for your license or leave the default Alias and click the "Activate" button.

 > Read more on What is an <a href ="https://www.dynamsoft.com/license-tracking/docs/about/terms.html#alias" target="_blank">Alias</a>
 
 ![SetAlias][2]
 
 On the following popup window, click the "OK" button.
 
 ![ActivationContinue][3]
 
 Then you can see the message "Activation secceeded!...". Click "configure this new license item at this page" to continue.
 
 ![ConfigLicense][4]

 You can repeat the above steps to activate other license keys.

## Configure the license (optional)

 After the license is activated, the Handshake Code will be generated automatically. Read more on <a href ="https://www.dynamsoft.com/license-tracking/docs/about/terms.html#handshake-code" target="_blank">What is a Handshake Code</a>.
 
 Basically, you can skip the step. But if you would like to edit the Handshake Codes for the license or view the statistics of a handshake code, please refer to <a href ="https://www.dynamsoft.com/license-tracking/docs/common/handshakeCodes.html" target="_blank">how to manage the handshake code</a>.

## Set the license in the code

<div class="sample-code-prefix"></div>
>- C
>- C++
>- C#
>- Java
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

 If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

**Notes:**

All license usage data is submitted to the Dynamsoft License Server (`DLS`) hosted by Dynamsoft. You can

* <a href="https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html" target="_blank">View activated license items</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/statistics.html" target="_blank">View the license usage statistics</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html" target="_blank">Get notified about license status</a> 

> Read more about <a href="https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html" target="_blank">the mechanism</a> behind license tracking.
> 
[1]:assets\set-full-license-2\FullLicenseList.png
[2]:assets\set-full-license-2\SetAlias8.6.png
[3]:assets\set-full-license-2\ActivationContinue.png
[4]:assets\set-full-license-2\ConfigLicense8.6.png


