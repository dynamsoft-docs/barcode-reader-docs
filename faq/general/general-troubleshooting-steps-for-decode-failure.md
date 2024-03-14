---
layout: default-layout
title: what are the general troubleshooting steps if I fail to scan barcodes from camera?
keywords: Dynamsoft Barcode Reader, FAQ, Troubleshooting / User Cases, general troubleshooting, decode fails
description: what are the general troubleshooting steps if I fail to scan barcodes from camera?
needAutoGenerateSidebar: false
---

# What are the general troubleshooting steps if I fail to scan barcodes via the camera?

[<< Back to FAQ index](index.md)


You may sometimes experience issues when trying to scan some barcodes using your device via the camera. There are various factors that could play into this, such as camera resolution, lighting condition(s), damage level of the barcode, or improper scanning settings.

Generally, with some setting changes via our APIs, Dynamsoft Barcode Reader JavaScript SDK is able to adapt to your unique usage scenario and deliver great performance.


## Step 1 - try different scan settings with our standard online demo
1. The first thing is to try the [JavaScript online demo](https://demo.dynamsoft.com/barcode-reader-js/). If the barcode is not being picked up under normal settings, let's try out some different settings in the demo. By default, the demo runs on the Best Speed mode, which you can see under the "Scan Settings" on the left-hand side. To potentially improve the performance, we recommend trying out the two other available modes in the demo: Balance or Best Coverage. Best Coverage will prioritize read rate over speed, while Best Speed will prioritize speed over accuracy or read rate. Balance offers the perfect mixture between the two.



      <img src="../assets/best_coverage.jpg" alt="Best coverage"  width="50%" height="50%">
> **_NOTE:_**  To learn more about scan modes, please visit the [updateRuntimeSettings](../api-reference/BarcodeReader.md#updateruntimesettings) API page.

2. Enable Full HD resolution in the demo


      <img src="../assets/full_hd.jpg" alt="Full HD"  width="50%" height="50%">
> **_NOTE:_** If the barcode is decoded, then you can output the settings and use that setting template via the `updateRuntimeSettings` method. If the barcode still can’t be decoded via the online demo, then move on to step 2.

## Step 2 - capture image frames and send to Dynamsoft for analysis

1.  Go to [JavaScript online demo debug mode](https://demo.dynamsoft.com/barcode-reader-js?debug=true) -> Click "START SCAN" -> Click the "capture video frames" button at the top to capture video frames.

      <img src="../assets/frames-crop.png" alt="Frames crop"  width="50%" height="50%">

2. Share the video frames set with [Dynamsoft Support team](https://www.dynamsoft.com/contact/). Our support team will investigate the video frames and get back to you with a solution as soon as possible.

