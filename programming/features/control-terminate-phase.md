---   
layout: default-layout
title: Control the termination phase of DBR
description: This article describes how to use runtime settings to make DBR terminate at a certain stage.
needAutoGenerateSidebar: true
keywords: terminate timeout
breadcrumbText: Termination Control
permalink: /programming/features/control-terminate-phase.html
---

# Control when to terminate a decoding process

Typically, DBR will terminate a decoding process after the barcode is decoded or the process has failed. In some cases we may want the process to terminate early. To do this, we use either the parameter [ `TerminatePhase` ]({{ site.parameters_reference }}terminate-phase.html) or the parameter [ `Timeout` ]({{ site.parameters_reference }}time-out.html). The former specifies the stage to terminate the process, the latter specifies the maximum time allowed for the process.

## TerminatePhase

This parameter specifies a certain stage to terminate the decoding. By default, the decoding process will only terminate after all these stages are completed and the barcode is recognized (`TP_BARCODE_RECOGNIZED`). To terminate early, assign one of the first 5 values in the following table to [ `TerminatePhase` ]({{ site.parameters_reference }}terminate-phase.html):

|Enumeration name|Notes|
|---|----|
|TP_REGION_PREDETECTED | Terminate after the barcode region is pre-detected. |
|TP_IMAGE_PREPROCESSED | Terminate after the image is preprocessed. |
|TP_IMAGE_BINARIZED | Terminate after the image is binarized. |
|TP_BARCODE_LOCALIZED | Terminate after the barcode zone is localized. |
|TP_BARCODE_TYPE_DETERMINED | Terminate after the barcode type is identified. |
|TP_BARCODE_RECOGNIZED | Terminate after the barcode is recognized, the default value. |

After the termination, we can acquire information generated in the process as `Intermediate Results` which include the following:

> Note that for the JavaScript Edition, the intermediate result is only available when it is presented as an image.

| Enumeration name | Notes | Available in JavaScript Edition |
|---|----|---|
| IRT_NO_RESULT  | No information at all. | NA |
| IRT_ORIGINAL_IMAGE  | The original image processed by the barcode reader. | Yes |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE  | Converted grayscale image based on the original image. | Yes |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE  | Transformed grayscale image (e.g. color inversion). | Yes |
| IRT_PREDETECTED_REGION  | The coordinates of the predetected region. | No |
| IRT_PREPROCESSED_IMAGE  | The preprocessed image. | Yes |
| IRT_BINARIZED_IMAGE  | The binarized image. | Yes |
| IRT_TEXT_ZONE  | Coordinates of the zones of text found on the image. | No |
| IRT_CONTOUR  | Contours found on the image that surrounds different areas on the image. | No |
| IRT_LINE_SEGMENT  | Detected line segments. | No |
| IRT_TYPED_BARCODE_ZONE  | Coordinates of the barcode zones with determined barcode type(s). | No |
| IRT_PREDETECTED_QUADRILATERAL  | Coordinates of the predetected quadrilaterals. | No |

The following code illustrates how it's done:

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
```javascript
// Obtains the current runtime settings of DBR.
let rs = await scanner.getRuntimeSettings();
// Sets the termination phase.
rs.terminatePhase = Dynamsoft.DBR.EnumTerminatePhase.TP_BARCODE_TYPE_DETERMINED;
// Sets the intermidate result types.
rs.intermediateResultTypes =
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_ORIGINAL_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_BINARIZED_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_TRANSFORMED_GRAYSCALE_IMAGE |
    Dynamsoft.DBR.EnumIntermediateResultType.IRT_PREPROCESSED_IMAGE;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
const interval = setInterval(async() => {
    try {
        // Shows the intermediate results (images) on the page.
        let cvss = await scanner.getIntermediateCanvas();
        if (cvss.length > 0) {
            for (let cvs of cvss) {
                document.body.appendChild(cvs);
            }
            scanner.destroyContext();
            clearInterval(interval);
        }
    } catch (ex) {
        console.error(ex);
    }
}, 1000);
await scanner.show();
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

### Timeout

This parameter controls the timeout for an individual decoding process in milliseconds. When the timeout occurs, the decoding will be terminated.

Allowed values are between 0 and 0x7fffffff. The default value is 10000.

The timeout setting is helpful in multi-image decoding situations where some images may take a long time to process. With proper timeout, we can balance the tradeoff between speed and read rate.

> The timeout setting is especially useful when decoding barcodes from consecutive video frames, where the same barcode appears in multiple frame images, and it takes much less time to read it in a clear frame, meaning blurry frames should be skipped fast.

The following code illustrates how to set `Timeout`:

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
```javascript
(async() => {
    let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
    // Obtains the current runtime settings of DBR.
    let rs = await scanner.getRuntimeSettings();
    // Sets timeout to 1000 milliseconds.
    rs.timeout = 1000;
    // Updates the settings.
    await scanner.updateRuntimeSettings(rs);
    scanner.onUniqueRead = (txt, result) => {
        alert(txt);
    };
    await scanner.show();
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
char sError[512];
TextResultArray* paryResult = NULL;
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("input your license");
reader->GetRuntimeSettings(runtimeSettings); //Configure runtimesettings
runtimeSettings->timeout = 1000; //set timeout
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); //Update runtimesettings
reader->DecodeFile("input your file path", ""); //Decoding  
reader->GetAllTextResults(&paryResult); //Get results
dynamsoft::dbr:: CBarcodeReader:: FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```
>```c
NOT SURE C
```
