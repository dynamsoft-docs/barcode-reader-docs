---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Format Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - Format Control Parameters.
keywords: BarcodeFormatIds, BarcodeFormatIds_2, ImageParameter, format control parameters, parameter reference, parameter 
needAutoGenerateSidebar: true
needGenerateH3Content: false
---


# ImageParameter Object - Format Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeFormatIds`](#barcodeformatids) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`ImageParameter.BarcodeFormatIds_2`](#barcodeformatids_2) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |



## BarcodeFormatIds
Sets the formats of the barcode to be read. Barcode formats can be combined.  

**Remark**   
If you already know the barcode type(s) before performing barcode reading, specifying the barcode type(s) to be read will speed up the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | BarcodeFormatIds | *string Array* | An array item can be any one of the [`BarcodeFormat` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat) items | "BF_ALL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`barcodeFormatIds`]({{ site.structs }}PublicRuntimeSettings.html#barcodeformatids) | *int* | A combined value of [`BarcodeFormat` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat) items. | `BF_ALL` |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`BarcodeFormat` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat)



## BarcodeFormatIds_2 
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.   

**Remark**   
If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    
The barcode format our library will search for is composed of BarcodeFormat group 1 and BarcodeFormat group 2, so you need to specify the barcode format in group 1 and group 2 individually.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | BarcodeFormatIds_2 | *string Array* | An array item can be any one of the [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2) items | "BF2_NULL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_USPSINTELLIGENTMAIL", "BF2_AUSTRALIANPOST"]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`barcodeFormatIds_2`]({{ site.structs }}PublicRuntimeSettings.html#barcodeformatids_2) | *int* | A combined value of [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2) items. | `BF2_NULL` |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2)
