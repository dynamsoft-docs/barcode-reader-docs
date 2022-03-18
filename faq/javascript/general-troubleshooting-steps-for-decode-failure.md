---
layout: default-layout
title: What are the general troubleshooting steps if an image fails to decode with Dbr JS?
keywords: Dynamsoft Barcode Reader, FAQ, Troubleshooting / User Cases, general troubleshooting, decode fails
description: What are the general troubleshooting steps if an image fails to decode with Dbr JS?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## What are the general troubleshooting steps if an image fails to decode with Dbr JS?

1. The first thing to try is the [JavaScript online demo](https://demo.dynamsoft.com/barcode-reader-js/). If the image still can’t be decoded via the online demo, then we can move to next step.
2. Was the user trying to decode the barcode via video (`BarcodeScanner`) or was it a still image (`BarcodeReader`)?
   - If it was via video, then it’s best to try the **“coverage”** template for the `RuntimeSettings` first, as shown [here](https://www.dynamsoft.com/barcode-reader/programming/javascript/api-reference/BarcodeReader.html?ver=latest#updateruntimesettings).
   - If it was a still image, it's best to take a clear picture of the barcode (if one doesn’t already exist) and try to decode it using the [main online demo](https://demo.dynamsoft.com/barcode-reader/) (not the JavaScript edition, but still the same SDK).
      * If the image is still not getting decoded, then please shift the slider on the left–hand side of the online demo to **“Best Coverage”**. This slider determines which `mode` the SDK will use, going from best speed (least coverage) to best coverage (worst speed).
3. If the image does indeed get decoded as a static image, then we should investigate some of the important factors that affect video decoding.
   - What type of device are you using to decode via video? If it is a mobile, what phone model is it?
   - After determining the phone model, it is important to check the camera specs. Does it support HD resolutions? Does it have the ability to auto-focus? Most modern phones support both of those features, but if there is another device with better camera specs (say you are testing with an iPhone 8, and you have an iPhone 11 available) then we should try using that phone and see if it can pick it up.
   - What are the lighting conditions that the barcode was being tested in? If they were low-light conditions, then we should try an environment with more light
   - Is the barcode damaged in any way? If so, how bad is the damage? Our SDK can overcome the damage on some barcodes (see features) but there is a limit to that.
4. If none of the methods above work out, please contact the [Dynamsoft Support team](https://www.dynamsoft.com/company/contact/) and share the barcode image with us. Our team will investigate the image and get back to you as soon as possible.
