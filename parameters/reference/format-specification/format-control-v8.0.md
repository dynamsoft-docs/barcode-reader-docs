---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Format Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Format Control Parameters.
keywords: AllModuleDeviation, AustralianPostEncodingTable, BarcodeAngleRangeArray, BarcodeBytesLengthRangeArray, BarcodeBytesRegExPattern, BarcodeFormatIds, BarcodeFormatIds_2, BarcodeHeightRangeArray, BarcodeTextLengthRangeArray, BarcodeTextRegExPattern, BarcodeWidthRangeArray, BarcodeZoneBarCountRangeArray, BarcodeZoneMinDistanceToImageBorders, Code128Subset, FindUnevenModuleBarcode, HeadModuleRatio, MinQuietZoneWidth, MinRatioOfBarcodeZoneWidthToHeight, MirrorMode, ModuleSizeRangeArray, RequireStartStopChars, StandardFormat, TailModuleRatio, FormatSpecification, format control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# FormatSpecification Object - Format Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.AllModuleDeviation`](format-control.md#allmoduledeviation) | Sets the module size deviation from the standard barcode module size. |
 | [`FormatSpecification.AustralianPostEncodingTable`](format-control.md#australianpostencodingtable) | Sets the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](format-control.md#barcodeanglerangearray) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](format-control.md#barcodebyteslengthrangearray) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](format-control.md#barcodebytesregexpattern) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeFormatIds`](format-control.md#barcodeformatids) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](format-control.md#barcodeformatids_2) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.BarcodeHeightRangeArray`](format-control.md#barcodeheightrangearray) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](format-control.md#barcodetextlengthrangearray) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](format-control.md#barcodetextregexpattern) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](format-control.md#barcodewidthrangearray) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.BarcodeZoneBarCountRangeArray`](format-control.md#barcodezonebarcountrangearray) |	Sets the range of bar count of the barcode zone for barcodes search. | 
 | [`FormatSpecification.BarcodeZoneMinDistanceToImageBorders`](format-control.md#barcodezonemindistancetoimageborders) |	Sets the minimum distance (in pixels) between barcode zone and image borders. | 
 | [`FormatSpecification.Code128Subset`](format-control.md#code128subset) | Sets the code 128 subset. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](format-control.md#findunevenmodulebarcode) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.HeadModuleRatio`](format-control.md#headmoduleratio) | Sets the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.MinQuietZoneWidth`](format-control.md#minquietzonewidth) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.MinRatioOfBarcodeZoneWidthToHeight`](format-control.md#minratioofbarcodezonewidthtoheight) |	Sets the minimum ratio (width/height) of the barcode zone. | 
 | [`FormatSpecification.MirrorMode`](format-control.md#mirrormode) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](format-control.md#modulesizerangearray) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`FormatSpecification.RequireStartStopChars`](format-control.md#requirestartstopchars) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`FormatSpecification.StandardFormat`](format-control.md#standardformat) | Sets the standard barcode format. | 
 | [`FormatSpecification.TailModuleRatio`](format-control.md#tailmoduleratio) |	Sets the module count and module size ratio of the barcode tail part. | 


---




## AllModuleDeviation
Set the module size deviation from the standard barcode module size.   

**Remarks**   
The unit is barcode module. For example, if the standard barcode module is 2px and AllModuleDeviation is 1, then the non-standard barcode module size is 4px.
    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | AllModuleDeviation | *int* | [0, 0x7fffffff] | 0 |


**Json Parameter Example**   
```
{
    "AllModuleDeviation": 0
}
```


&nbsp;


## AustralianPostEncodingTable
Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | AustralianPostEncodingTable | *string* | "C"<br>"N" | "C" |


**Json Parameter Example**   
```
{
    "AustralianPostEncodingTable": "N"
}
```

&nbsp;


## BarcodeAngleRangeArray
Sets the range of angles (in degrees) for barcodes search. 


### As Json Parameter
`BarcodeAngleRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of angles (in degrees) for barcodes search. Default values will be used if there is no manual setting.   



| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeAngleRangeArray | *JSON Object Array* | `MinValue`: [0, 360]<br>`MaxValue`: [0, 360]<br>**MaxValue >= MinValue** | `null` |


**Json Parameter Example**   
```
{
    "BarcodeAngleRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```



&nbsp;



## BarcodeBytesLengthRangeArray
Sets the range of barcode bytes length for barcodes search.

### As Json Parameter
`BarcodeBytesLengthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeBytesLengthRangeArray | *JSON Object Array* | `MinValue`: [0, 0x7fffffff]<br>`MaxValue`: [0, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeBytesLengthRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;



## BarcodeBytesRegExPattern
Specifies the regular express pattern of barcode byte characters.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeBytesRegExPattern | *string* | regular express pattern as string. | "" |

**Json Parameter Example**   
```
{
    "BarcodeBytesRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


&nbsp;


## BarcodeFormatIds
Sets which barcode format the current FormatSpecification configuration is applied to. 

**Remarks**   
If you already know the barcode type(s) before performing barcode reading, specifying the barcode type(s) to be read will speed up the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeFormatIds | *string Array* | An array item can be any one of the [`BarcodeFormat` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat) items | "BF_ALL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```


&nbsp;



## BarcodeFormatIds_2 
Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to.   


**Remarks**   
If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    
The barcode format our library will search for is composed of BarcodeFormat group 1 and BarcodeFormat group 2, so you need to specify the barcode format in group 1 and group 2 individually.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeFormatIds_2 | *string Array* | An array item can be any one of the [`BarcodeFormat_2` Enumeration]({{ site.enumerations }}format-enums.html#barcodeformat_2) items | "BF2_NULL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_USPSINTELLIGENTMAIL", "BF2_AUSTRALIANPOST"]
}
```


&nbsp;



## BarcodeHeightRangeArray
Sets the range of barcode heights (in pixels) to for barcodes search.


### As Json Parameter
`BarcodeHeightRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeHeightRangeArray | *JSON Object Array* | `MinValue`: [0, 0x7fffffff]<br>`MaxValue`: [0, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeHeightRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;



## BarcodeTextLengthRangeArray
Sets the range of barcode text length for barcodes search.


### As Json Parameter
`BarcodeTextLengthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeTextLengthRangeArray | *JSON Object Array* | `MinValue`: [0, 0x7fffffff]<br>`MaxValue`: [0, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeTextLengthRangeArray": [
    {
        "MinValue": 4,
        "MaxValue": 200
    }
    ]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------- | ---------- | ------------ | ------------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html | [`minBarcodeTextLength`]({{ site.structs }}PublicRuntimeSettings.html#minbarcodetextlength)) | [0,0x7fffffff] | 0 |

**Remarks**   
0: means no limitation on the barcode text length.

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)


&nbsp;


## BarcodeTextRegExPattern
Specifies the regular express pattern of barcode characters.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeTextRegExPattern | *string* | regular express pattern as string. | "" |

**Json Parameter Example**   
```
{
    "BarcodeTextRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


&nbsp;


## BarcodeWidthRangeArray
Sets the range of barcode widths (in pixels) for barcodes search.


### As Json Parameter
`BarcodeWidthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeWidthRangeArray | *JSON Object Array* | `MinValue`: [0, 0x7fffffff]<br>`MaxValue`: [0, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeWidthRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;


## BarcodeZoneBarCountRangeArray
Sets the range of bar count of the barcode zone for barcodes search.


### As Json Parameter
`BarcodeZoneBarCountRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of bar count of the barcode zone for barcodes search. Default values will be used if no manual settings are specified. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeZoneBarCountRangeArray | *JSON Object Array* | `MinValue`: [1, 0x7fffffff]<br>`MaxValue`: [1, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Remarks**   
- Default value for MinValue: 1
- Default value for MaxValue: 128

**Json Parameter Example**   
```
{
    "BarcodeZoneBarCountRangeArray": [
    {
        "MinValue": 1,
        "MaxValue": 128
    }
    ]
}
```


&nbsp;



## BarcodeZoneMinDistanceToImageBorders
Sets the minimum distance (in pixels) between the barcode zone and image borders. If a barcode region has been set, this parameter should not be used. 

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeZoneMinDistanceToImageBorders | *int* | [0, 0x7fffffff] | 0 |

**Json Parameter Example**   
```
{
    "BarcodeZoneMinDistanceToImageBorders": 10
}
```


&nbsp;


## Code128Subset
Sets the subset of Code 128.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | Code128Subset | *string* | "A"<br>"B"<br>"C" | "" |


**Json Parameter Example**   
```
{
    "Code128Subset": "A"
}
```

&nbsp;



## FindUnevenModuleBarcode
Specifies whether to find barcodes with uneven barcode modules.    
**Not support yet.**

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | FindUnevenModuleBarcode | *int* | [0, 1] | 1 |

**Remarks**   
- 0: do not find barcodes with uneven barcode modules.
- 1: find barcodes with uneven barcode modules.


**Json Parameter Example**   
```
{
    "FindUnevenModuleBarcode": 0
}
```


&nbsp;



## HeadModuleRatio
Sets the module count and module size ratio of the barcode head part.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | HeadModuleRatio | *string* | N/A | "" |


**Json Parameter Example**   
```
{
    "HeadModuleRatio": "211412"
}
```


&nbsp;


## MinQuietZoneWidth
The minimum width of the barcode quiet zone.

**Remarks**   
The unit is barcode module. For example, if barcode module is 2px and MinQuietZoneWidth is 4, then the width of quiet zone is 8px.
   
    
### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MinQuietZoneWidth | *int* | [0,0x7fffffff] | 4 |

**Json Parameter Example**   
```
{
    "MinQuietZoneWidth": 10
}
```


&nbsp;



## MinRatioOfBarcodeZoneWidthToHeight
Sets the minimum ratio (width/height) of the barcode zone.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MinRatioOfBarcodeZoneWidthToHeight | *int* | [0, 10000] | 0 |

**Remarks**   
- 0: means no limitation.

**Json Parameter Example**   
```
{
    "MinRatioOfBarcodeZoneWidthToHeight": 200
}
```


&nbsp;




## MirrorMode
Sets whether to decode mirrored barcodes.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MirrorMode | *string* | "MM_NORMAL"<br>"MM_MIRROR"<br>"MM_BOTH" | `null` |

**Remarks**   
- "MM_NORMAL": Doesn't decode mirror barcodes.
- "MM_MIRROR": Decodes mirror barcodes only.
- "MM_BOTH": Decodes both normal and mirror barcodes.

**Json Parameter Example**   
```
{
    "MirrorMode": "MM_NORMAL"
}
```


&nbsp;

## ModuleSizeRangeArray
Sets the range of module size (in pixels) for barcodes search.

    
### As Json Parameter
`ModuleSizeRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | ModuleSizeRangeArray | *JSON Object Array* | `MinValue`: [0, 0x7fffffff]<br>`MaxValue`: [0, 0x7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "ModuleSizeRangeArray": [
    {
        "MinValue": 3,
        "MaxValue": 20
    }
    ]
}
```


&nbsp;


## RequireStartStopChars
Sets whether the start and stop characters are required when searching for Code 39 barcodes.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | RequireStartStopChars | *int* | [0, 1] | 1 |

**Remarks**   
- 0: start and stop characters are not required.
- 1: start and stop characters are required.


**Json Parameter Example**   
```
{
    "RequireStartStopChars": 0
}
```


&nbsp;


## StandardFormat
Set the standard barcode format.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | StandardFormat | Any one of the [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) or [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2) Enumeration items. | N/A | "" |


**Json Parameter Example**   
```
{
    "StandardFormat": "BF_CODE128"
}
```


&nbsp;




## TailModuleRatio
Set the module count and module size ratio of the barcode tail part.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | TailModuleRatio | *string* | N/A | "" |


**Json Parameter Example**   
```
{
    "TailModuleRatio": "2331112"
}
```

