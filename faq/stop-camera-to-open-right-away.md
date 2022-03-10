---
layout: default-layout
title: How do you stop the camera stream from opening right away after DBR JS demo is loaded? How can you enable the camera on the click of a button?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, stop camera stream, start scanning
description: How do you stop the camera stream from opening right away after DBR JS demo is loaded? How can you enable the camera on the click of a button?
needAutoGenerateSidebar: false
---

# Tech Basic

## How do you stop the camera stream from opening right away after DBR JS demo is loaded? How can you enable the camera on the click of a button?

Instead of creating the `BarcodeScanner` instance on page load, trigger the creation on the click of the `Start Scanning` button instead, as shown in the sample code below -

```javascript
let startScanBtn = document.getElementById("StartScanning"); // double check the ID of the button
startScanBtn.addEventListener("click", async function () {
  let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
  scanner.onFrameRead = (results) => {
    console.log(results);
  };
  scanner.onUnduplicatedRead = (txt, result) => {
    alert(txt);
  };
  await scanner.show();
});
```
