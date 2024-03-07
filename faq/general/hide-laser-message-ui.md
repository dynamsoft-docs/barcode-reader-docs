---
layout: default-layout
title: How can I hide the laser bar and Dynamsoft message in the default UI of the BarcodeScanner?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, barcodeReader, barcodeScanner, hide, UI
description: How can I hide the laser bar and Dynamsoft message in the default UI of the BarcodeScanner?
needAutoGenerateSidebar: false
---

# How can I hide the laser bar and Dynamsoft message in the default UI of the BarcodeScanner?

In order to show or hide these specific UI elements, all you need to do is access them individually via their class names and setting the corresponding display property.

By default, these elements will be shown. In order to hide them, an edited Hello World code snippet can be found below that will get the job done. Please note that the elements must be hidden after `scanner.show()` is called since that is when the elements are created.

``` html
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@9.6.33/dist/dbr.js"></script>
<script>
  // specify a license, you can visit https://www.dynamsoft.com/customer/license/trialLicense?utm_source=intro&product=dbr&package=js to get your own trial license good for 30 days. 
  Dynamsoft.DBR.BarcodeScanner.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
  (async()=>{
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    scanner.onUniqueRead = (txt, result) => {
      // Do something with the "txt" found in the barcode
    };

    await scanner.show();

    // hide the laser bar and Dynamsoft message in the default UI after show() is called or else you will get an undefined error
    document.getElementsByClassName("dce-scanlight")[0].style.display = "none";
    document.getElementsByClassName("dbr-msg-poweredby")[0].style.display = "none";
  })();
</script>
```