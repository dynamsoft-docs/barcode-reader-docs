---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Cost Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Cost Control Parameters.
keywords: TerminatePhase, Timeout, MaxAlgorithmThreadCount, ExpectedBarcodesCount, ImageParameter, cost control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# ImageParameter Object - Cost Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. | 
---

## TerminatePhase

Sets the phase where the algorithm stops.  

**Remarks**  
When the recognition result is not desired, this parameter can be set to skip certain processing stages.

### As JSON Parameter

| JSON Object |	JSON Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | TerminatePhase | *string* |Any one of the [`TerminatePhase` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) items | "TP_BARCODE_RECOGNIZED" |

**JSON Parameter Example**

```JSON
{
    "TerminatePhase":"TP_BARCODE_RECOGNIZED"
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name |	Value Type | Value Range |  Default Value |
| ------ | ------------------ | ---------- | ----------- | -------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`terminatePhase`]({{ site.structs }}PublicRuntimeSettings.html#terminatephase) | [`TerminatePhase`]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) | Any one of the [`TerminatePhase` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#terminatephase) items | `TP_BARCODE_RECOGNIZED` |

**See Also**

- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`TerminatePhase` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#terminatephase)

## Timeout

Sets the maximum amount of time (in milliseconds) for searching for a barcode per page. This does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.  

**Remarks**     
If you want to stop reading barcodes after a specified amount of time, you can use this parameter to set a timeout.

### As JSON Parameter

| JSON Object |	JSON Parameter Name |	Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | Timeout | *int* | [0,0x7fffffff] | 10000 |

**JSON Parameter Example**

```JSON
{
    "Timeout":10000
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name |	Value Type | Value Range |  Default Value |
| ------ | ------------------ | ---------- | ----------- | -------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`timeout`]({{ site.structs }}PublicRuntimeSettings.html#timeout) | `int` | [0,0x7fffffff] | 10000 |

**See Also**

- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)

## MaxAlgorithmThreadCount

Sets the number of threads for the image processing algorithm to decode barcodes.  

**Remarks**     
By default, the library concurrently runs four different threads for decoding barcodes in order to keep a balance between speed and quality. For some devices (e.g. Raspberry Pi) that only use one core, you can set it to 1 for best speed. If you create BarcodeReader instances in multiple threads, please set this property to 1 in case the algorithm threads affect your application.

### As JSON Parameter

| JSON Object |	JSON Parameter Name |	Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | MaxAlgorithmThreadCount | *int* | [1,4] | 4 |

**JSON Parameter Example**

```JSON
{
    "MaxAlgorithmThreadCount":4
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name |	Value Type | Value Range |  Default Value |
| ------ | ------------------ | ---------- | ----------- | -------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`maxAlgorithmThreadCount`]({{ site.structs }}PublicRuntimeSettings.html#maxalgorithmthreadcount) | `int` | [1,4] | 4 |

**See Also**

- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)

## ExpectedBarcodesCount

Sets the number of barcodes expected to be detected for each image.

**Remarks**

- 0: unknown barcode count. It will return the result of the first successful [localization mode](../../scenario-settings/how-to-set-localization-modes.md) attempt.  
- 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding. 
- n: try to find n barcodes. If the library only finds m (m < n) barcode, it will try different algorithms till n barcodes are found or all algorithms have been tried.

### As JSON Parameter

| JSON Object |	JSON Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | ExpectedBarcodesCount | *int* | [0,0x7fffffff] | 0 |

**JSON Parameter Example**

```JSON
{
    "ExpectedBarcodesCount":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name |	Value Type | Value Range |  Default Value |
| ------ | ------------------ | ---------- | ----------- | -------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`expectedBarcodesCount`]({{ site.structs }}PublicRuntimeSettings.html#expectedbarcodescount) | `int` | [0,0x7fffffff] | 0 |

**See Also**

- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
