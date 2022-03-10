---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - How to set full license
description: This page shows how to set full license of Dynamsoft Barcode Reader.
keywords: full license, licensing
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# How to set full license in version 8.x

Different methods are used for setting trial and full license keys. In our demo or sample applications, we use `.InitLicense()` or `.ProductKeys` to set trial license keys. 

For the purchased version, you need to use `initLicenseFromDLS()` to set the Handshake Codes for your licenses.

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
>- Javascript
>- C
>- C++
>- C#
>- Java
>- Objective-C
>- Swift
>- Java-Android
>- Python
>
>1. 
```js
  // Please replace the organizationID with your own
  Dynamsoft.DBR.BarcodeReader.organizationID = "YOUR-ORGANIZATION-ID";
  let reader = await Dynamsoft.DBR.BarcodeReader.createInstance();
```
2. 
```c
  char errorBuf[512];
  DMDLSConnectionParameters paramters;
  DBR_InitDLSConnectionParameters(&paramters);
  // Please replace the organizationID with your own
  paramters.organizationID = "YOUR-ORGANIZATION-ID"; 
  DBR_InitLicenseFromDLS(&paramters, errorBuf, 512);
```
3. 
```cpp
  int iRet = -1;
  char szErrorMsg[256];
  DM_DLSConnectionParameters dlspar;    
  CBarcodeReader::InitDLSConnectionParameters(&dlspar);
  // Please replace the organizationID with your own
  dlspar.organizationID = "YOUR-ORGANIZATION-ID"; 
  iRet = CBarcodeReader::InitLicenseFromDLS(&dlspar, szErrorMsg, 256);
  if (iRet != DBR_OK)
   {
       printf("Error code: %d. Error message: %s\n", iRet, szErrorMsg);
       return -1;
   }
```
4. 
```csharp
  DMDLSConnectionParameters dlspar = BarcodeReader.InitDLSConnectionParamters();           
  // Please replace the organizationID with your own
  dlspar.OrganizationID = "YOUR-ORGANIZATION-ID"; 
  EnumErrorCode iRet = BarcodeReader.InitLicenseFromDLS(dlspar, out strErrorMSG);
```
5. 
```java
  DMDLSConnectionParameters dlspar = BarcodeReader.initDLSConnectionParameters();
  // Please replace the organizationID with your own
  dlspar.organizationID = "YOUR-ORGANIZATION-ID"; 
  BarcodeReader.initLicenseFromDLS(dlspar);
```
6. 
 ```objc
  iDMDLSConnectionParameters* dls = [[iDMDLSConnectionParameters alloc] init];
  // Please replace the organizationID with your own
  dls.organizationID = @"YOUR-ORGANIZATION-ID"; 
  _dbr = [[DynamsoftBarcodeReader alloc] initLicenseFromDLS:dls verificationDelegate:self];
  - (void)DLSLicenseVerificationCallback:(bool)isSuccess error:(NSError * _Nullable)error
  {
    NSNumber* boolNumber = [NSNumber numberWithBool:isSuccess];
    dispatch_async(dispatch_get_main_queue(), ^{
    [self->m_verificationReceiver performSelector:self->m_verificationCallback withObject:boolNumber withObject:error];
        NSLog(@"ifsuccess : %@",boolNumber);
        NSLog(@"error code: %ld:",(long)error.code);
        NSLog(@"errormsg : %@",error.userInfo);
        //UIImage *image =[UIImage imageNamed:@"AllSupportedBarcodeTypes.bmp"];
        //NSError* errormsg = nil;
        //NSArray* readResult = [_dbr decodeImage:image withTemplate:@"" error:&errormsg];
    });
  }
 ```
7. 
```swift
  let dls = iDMDLSConnectionParameters();
  // Please replace the organizationID with your own
  dls.organizationID = "YOUR-ORGANIZATION-ID";
  barcodeReader = DynamsoftBarcodeReader(licenseFromDLS: dls, verificationDelegate: self)
  func dlsLicenseVerificationCallback(_ isSuccess: Bool, error: Error?)
  {
     //TODO add your code for license verification
  }
```
8. 
```java
  DBRDLSLicenseVerificationListener dlsListener = new DBRDLSLicenseVerificationListener() {
     @Override
     public void DLSLicenseVerificationCallback(boolean success, Exception error) {
     }
  };
  DMDLSConnectionParameters parameters = new DMDLSConnectionParameters();
  // Please replace the organizationID with your own
  parameters.organizationID = "YOUR-ORGANIZATION-ID"; 
  dbr.initLicenseFromDLS(parameters,dlsListener);
``` 
9. 
```python
  reader = BarcodeReader()
  connection_paras = reader.init_dls_connection_parameters()
  # Please replace the organizationID with your own
  connection_paras.organization_id = "YOUR-ORGANIZATION-ID"
  try:
    error = reader.init_licesne_from_dls(connection_paras)
    if error[0] != EnumErrorCode.DBR_OK:
        print(error[1])
  except BarcodeReaderError as bre:
    print(bre)
```
 
 Code snippet in Xamarin:
 Please refer to <a href="https://github.com/Dynamsoft/xamarin/tree/master/examples" target="_blank">this article</a>.

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


