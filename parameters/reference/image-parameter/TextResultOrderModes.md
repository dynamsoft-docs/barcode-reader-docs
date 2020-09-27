---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextResultOrderModes 
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - TextResultOrderModes.
keywords: TextResultOrderModes, ImageParameter, image process control parameters, parameter reference, parameter 
needAutoGenerateSidebar: false
---

# ImageParameter Object - Result Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](IntermediateResultSavingMode.md#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. |  

---

## TextResultOrderModes

### Mode Properties
`TextResultOrderModes` is a parameter deciding the order of the text results returned. It consisits of one or more `TextResultOrderMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) array* | "TROM_SKIP"<br>"TROM_CONFIDENCE"<br>"TROM_POSITION"<br>"TROM_FORMAT" | ["TROM_CONFIDENCE", "TROM_POSITION", "TROM_FORMAT", "TROM_SKIP", "TROM_SKIP", "TROM_SKIP", "TROM_SKIP", "TROM_SKIP"] |

- **See also**:   
    [`TextResultOrderMode` Enumeration]({{ site.enumerations }}result-enums.html#textresultordermode)
    
    
### Setting Methods

#### As JSON Parameter
`TextResultOrderModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode, and the array index decides the priority for the order of the text results returned. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextResultOrderModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "TextResultOrderModes": [
        {"Mode"":"TROM_CONFIDENCE"},
        {"Mode":"TROM_POSITION"},
        {"Mode":"TROM_FORMAT"}
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`TextResultOrderModes` as a member of `PublicRuntimeSettings` struct is a [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode) array for setting modes and the priority for the order of the text results returned. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html) | [`textResultOrderModes`]({{ site.structs }}PublicRuntimeSettings.html#textresultordermodes) | [`TextResultOrderMode`]({{ site.enumerations }}result-enums.html#textresultordermode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`TextResultOrderMode` Enumeration]({{ site.enumerations }}result-enums.html#textresultordermode)

