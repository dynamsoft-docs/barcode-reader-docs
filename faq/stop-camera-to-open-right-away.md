---
layout: default-layout
title: How to stop the camera stream to get open right after DBR JS demo is loaded? How to enable the camera after clicking 'start scanning' button?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, stop camera stream, start scanning
description: How to stop the camera stream to get open right after DBR JS demo is loaded? How to enable the camera after clicking 'start scanning' button?
needAutoGenerateSidebar: false
---

# Tech Basic

## How to stop the camera stream to get open right after DBR JS demo is loaded? How to enable the camera after clicking 'start scanning' button?

Instead of creating the BarcodeScanner instance on page load, trigger the creation on the click of the `Start Scanning` button instead, as shown in the sample code below -

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
