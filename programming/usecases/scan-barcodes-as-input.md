---
layout: default-layout
title: Scan Barcodes as Input
description: Dynamsoft Barcode Reader SDK Use Case - Scan Barcodes as Input
keywords: input, barcode, use-case
noTitleIndex: true
permalink: /programming/usecases/scan-barcodes-as-input.html
---

# Scan Barcodes as Input

In some cases, the information contained in a barcode symbol is exactly what is needed to fill a form. For example, you can scan the Universal Product Code (UPC or UPC Code) on a product to search for it in an online store, or you can scan the barcode on a courier package to see where it has been.

The following code shows how to automatically invoke the sdk to read a barcode and fill an input box.

> If you are using the JavaScript edition, also check out:
>
> * <a target = "_blank" href="https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/samples-demos/usecase1-formfill.html?utm_source=usecaseArticle">Read Barcodes and Fill Form Fields - Guide</a>
> * <a target = "_blank" href="https://github.com/Dynamsoft/barcode-reader-javascript-samples/blob/9.x/4.use-case/1.fill-a-form-with-barcode-reading.html?utm_source=usecaseArticle">Read Barcodes and Fill Form Fields - Source Code</a>

<div class="sample-code-prefix template2"></div>
   >- Javascript
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- Java
   >- C#
   >- C++
   >- C
   >
>
```html
<input id="input-to-fill" type="text" readonly="true" placeholder="Barcode Result">
<script>
let scanner = null;
Dynamsoft.DBR.BarcodeReader.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
(async function () {
    document.getElementById("input-to-fill").addEventListener('click', async function () {
        try {
            scanner = scanner || await Dynamsoft.DBR.BarcodeScanner.createInstance();
            scanner.onUniqueRead = (txt, result) => {
                this.value = result.barcodeText;
                scanner.hide();
            };
            await scanner.show();
        } catch (ex) {
            alert(ex.message);
            throw ex;
        }
    });
})();
</script>
```
>
```java
NOT SURE JAVA-ANDROID
```
>
```objc
NOT SURE OBJC
```
>
```swift
NOT SURE SWIFT
```
>
```python
NOT SURE PYTHON
```
>
```java
NOT SURE JAVA
```
>
```c#
NOT SURE C#
```
>
```c++
NOT SURE C++
```
>```c
NOT SURE C
```
