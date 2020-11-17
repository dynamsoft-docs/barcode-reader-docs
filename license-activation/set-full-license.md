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

For the purchased version, you need to use `initLicenseFromLTS()` to the set the Handshake Codes for your licenses.

 `initLicenseFromServer()` or `initLicenseFromLicenseContent()` to complete the license registration.

You can set the license by following the steps below:

1. [Activate the license](#activate)
2. [Configure the license (optional)](#configure) 
3. [Set the license in the code](#set)

## Activate the license {#activate}

 Once you purchase a full license from our [online store](https://www.dynamsoft.com/store/dynamsoft-barcode-reader/), you can find your license information at **[Customer Portal](https://www.dynamsoft.com/customer/license/fullLicense)**. 

 To activate the license, click **Please first activate the license** or the **Activate** button.

 ![FullLicenseList][1]

 On the next page, set an Alias for your license or leave the default Alias and click the **Activate** button.

 > Read more on What is an [Alias](https://www.dynamsoft.com/license-tracking/docs/about/terms.html#alias)
 
 ![SetAlias][2]
 
 On the following popup window, click the **OK** button.
 
 ![ActivationContinue][3]
 
 Then you can see the message "Activate Success! You can start configuring your license now". Click **start configuring your license** to continue.
 
 ![ConfigLicense][4]

 You can repeat the above steps to activate other license keys.

## Configure the license (optional) {#configure}

 After the license is activated, the Handshake Code will be generated automatically. Read more on [What is a Handshake Code](https://www.dynamsoft.com/license-tracking/docs/about/terms.html#handshake-code).
 
 Basically, you can skip the step. But if you would like to edit the Handshake Codes for the license or view the statistics of a handshake code, please refer to [how to manage the handshake code](https://www.dynamsoft.com/license-tracking/docs/common/handshakeCodes.html).

## Set the license in the code {#set}

 Code snippet in C:
 ```c
   char errorBuf[512];
   DMLTSConnectionParameters paramters;
   DBR_InitLTSConnectionParameters(&paramters);
   paramters.handshakeCode = "handshakeCode"; // Please replace the handshakeCode with your own
   DBR_InitLicenseFromLTS(&paramters, errorBuf, 512);
 ```

 Code snippet in C++:
 ```cpp
   DM_LTSConnectionParameters ltspar;    
   reader.InitLTSConnectionParameters(&ltspar);
   ltspar.handshakeCode = "200***001-1000*****"; // Please replace the handshakeCode with your own
   iRet = reader.InitLicenseFromLTS(&ltspar,szErrorMsg,256);
 ```

 Code snippet in C#:
 ```csharp
   DMLTSConnectionParameters ltspar = _br.InitLTSConnectionParamters();           
   ltspar.HandshakeCode = "200***001-1000*****"; // Please replace the handshakeCode with your own
   EnumErrorCode iRet = BarcodeReader.InitLicenseFromLTS(ltspar, out strErrorMSG);
 ```

 Code snippet in Java:
 ```java
   BarcodeReader br = new BarcodeReader("")
   DMLTSConnectionParameters ltspar = br.initLTSConnectionParameters();
   ltspar.handshakeCode = "200***001-1000*****"; // Please replace the handshakeCode with your own
   ltspar.deploymentType = EnumDMDeploymentType.DM_DT_DESKTOP; // Please replace the deploymentType with your own
   br.initLicenseFromLTS(ltspar);
 ```

 Code snippet in iOS (Objective-C):
 ```objc
   iDMLTSConnectionParameters* lts = [[iDMLTSConnectionParameters alloc] init];
   lts.handshakeCode = @"handshakeCode"; // Please replace the handshakeCode with your own
   _dbr = [[DynamsoftBarcodeReader alloc] initLicenseFromLTS:lts verificationDelegate:self];
- (void)LTSLicenseVerificationCallback:(bool)isSuccess error:(NSError * _Nullable)error
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

 Code snippet in Android:
 ```java
   DBRLTSLicenseVerificationListener ltsListener = new DBRLTSLicenseVerificationListener() {
      @Override
      public void LTSLicenseVerificationCallback(boolean success, Exception error) {
         Assert.assertEquals(false, success);
         Assert.assertEquals("ChargeWay for licenseItem is not matched.", error.getMessage());
      }
   };
   DMLTSConnectionParameters parameters = new DMLTSConnectionParameters();
   parameters.handshakeCode = "200***001-1000*****"; // Please replace the handshakeCode with your own
   dbr.initLicenseFromLTS(parameters,ltsListener);
 ```

 If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

[1]:assets\set-full-license-2\FullLicenseList.png
[2]:assets\set-full-license-2\SetAlias.png
[3]:assets\set-full-license-2\ActivationContinue.png
[4]:assets\set-full-license-2\ConfigLicense.png

