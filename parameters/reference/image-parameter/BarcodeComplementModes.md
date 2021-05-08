---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeComplementModes
description: This page shows Dynamsoft Barcode Reader Parameter Reference for ImageParameter Object - BarcodeComplementModes.
keywords: BarcodeComplementModes, ImageParameter, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: false
---

# ImageParameter Object | BarcodeComplementModes

## BarcodeComplementModes  

### Mode Properties
`BarcodeComplementModes` is a parameter for setting the mode to complement the missing parts in the barcode. It consisits of one or more `BarcodeComplementMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) array* | "BCM_SKIP"<br>"BCM_AUTO"<br>"BCM_GENERAL" | ["BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP"] |

- **See also**:   
    [`BarcodeComplementMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)
    
#### Mode Arguments
- [LibraryFileName](#libraryfilename)
- [LibraryParameters](#libraryparameters)

##### LibraryFileName 
Sets the file name of the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing file name. | "" | All `BarcodeComplementMode` items except BCM_SKIP and BCM_AUTO |         


- **Remarks**     
  The library must be in the same place with Dynamsoft Barcode Reader Library.


##### LibraryParameters 
Sets the parameters passed to the library to load dynamically.

| Value Type | Value Range | Default Value | Valid For | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing parameters. | "" | All `BarcodeComplementMode` items except BCM_SKIP and BCM_AUTO |         




### Setting Methods

#### As JSON Parameter
`BarcodeComplementModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode. The array index decides the priority the mode to complement the missing parts in the barcode. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | BarcodeComplementModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "BarcodeComplementModes": [
        {
            "Mode": "BCM_GENERAL",
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`BarcodeComplementModes` is a [`BarcodeComplementMode`]({{ site.enumerations }}result-enums.html#intermediateresultsavingmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority to complement the missing parts in the barcode. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.structs }}PublicRuntimeSettings.html#furthermodes) | [`barcodeComplementModes`]({{ site.structs }}FurtherModes.html#barcodecomplementmodes) | [`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.structs }}PublicRuntimeSettings.html)
- [`FurtherModes`]({{ site.structs }}FurtherModes.html)
- [`BarcodeComplementMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)

