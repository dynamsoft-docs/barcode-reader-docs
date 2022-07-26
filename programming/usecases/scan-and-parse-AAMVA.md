---
layout: default-layout
title: Use Cases - Dynamsoft Barcode Reader
description: Dynamsoft Barcode Reader SDK Use Case - Scan and parse PDF417 on AAMVA documents
keywords: input, barcode, use-case, AAMVA, parse
noTitleIndex: true
permalink: /programming/usecases/scan-and-parse-AAMVA.html
---

# Scan and parse PDF417 on AAMVA documents

The PDF417 barcode on an AAMVA compatible driver's license contains a lot of information which is encoded following the DL/ID Card Design Standard. In this article, we explore how to read and extract the information.

## Read the barcode

The first step is to get the encrypted information as raw string from the barcode. The following code shows how to do this with DBR.

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
```js
let scanner = null;
let rawString = null;
Dynamsoft.DBR.BarcodeReader.license = 'DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
(async () => {
    document.getElementById("input-to-fill").addEventListener('click', async function () {
        try {
            scanner = scanner || await Dynamsoft.DBR.BarcodeScanner.createInstance();
            // Uses the built-in template "dense" meant for dense barcodes such as the ones found on driver licenses.
            await scanner.updateRuntimeSettings("dense");
            let settings = await scanner.getRuntimeSettings();
            // Sets the barcode type to PDF417.
            settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_PDF417;
            await scanner.updateRuntimeSettings(settings);
            scanner.onUniqueRead = (txt, result) => {
                rawString = txt;
            };
            await scanner.show();
        } catch (ex) {
            alert(ex.message);
            throw ex;
        }
    });
})();
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
>
```c
NOT SURE C
```

Now we have the original encoded data (`rawString`), the next step is to parse it to extract useful information.

## Parse the data string

The encoded data is not readable, therefore, we parse it to extract the actual information we need. The following code shows how this is done.

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
<script src="https://cdn.jsdelivr.net/npm/dynamsoft-code-parser@1.1.0/dist/dcp.js"></script>
<script>
let parser = null;
Dynamsoft.DCP.CodeParser.license ='DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9';
(async () => {
    try {
        let parser = await Dynamsoft.DCP.CodeParser.createInstance();
        parser.setCodeFormat(Dynamsoft.DCP.EnumCodeFormat.CF_DL_AAMVA_ANSI);
        // Parses the raw data retrieved from the barcode
        let info = await parser.parseData(rawString);
        // Checks the readable information in the console
        console.log(JSON.stringify(info));
    } catch (ex) {
        alert(ex.message);
        throw ex;
    }
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
