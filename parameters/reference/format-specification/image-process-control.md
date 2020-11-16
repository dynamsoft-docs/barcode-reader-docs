---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Image Process Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Image Process Control Parameters.
keywords: DeblurLevel, DeformationResistingModes, BarcodeComplementModes, FormatSpecification, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# FormatSpecification Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](#deblurlevel) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](#deformationresistingmodes)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |

---


## DeblurLevel
Sets the degree of blurriness of the barcode for the current specified barcode format.

**Remarks**   
If you have a blurry image, you can set this property to a larger value. The higher value set, the more effort the library will spend to decode images, but it may also slow down the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | DeblurLevel | *int* | [0, 9] | 9 |

**Json Parameter Example**   
```
{
    "DeblurLevel":9
}
```


&nbsp;


## DeformationResistingModes   
**Not supported yet.** 


### Mode Properties
`DeformationResistingModes` is a parameter for setting the mode for deformation resisting. It consisits of one or more `DeformationResistingMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`DeformationResistingMode`]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode) array* | "DRM_SKIP"<br>"DRM_AUTO"<br>"DRM_GENERAL" | ["DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP", "DRM_SKIP"] |

- **See also**:   
    [`DeformationResistingMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#deformationresistingmode)
    
#### Mode Arguments
- [Level](#level)

##### Level 
Sets the effort level used for deformation resisting. **Not supported yet.**


| Value Type | Value Range | Default Value | Valid Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 5 | "DRM_GENERAL" |         

- **Remarks**     
  A larger value means the library will take more effort to resist deformation.


### Setting Methods

#### As JSON Parameter
`DeformationResistingModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode for deformation resisting. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| FormatSpecification | DeformationResistingModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "DeformationResistingModes": [
        {
            "Mode": "DRM_GENERAL",
            "Level": 5
        }
    ]
}
```

&nbsp;


## BarcodeComplementModes   
**Not supported yet.** 


### Mode Properties
`BarcodeComplementModes` is a parameter for setting the mode to complement the missing parts in the barcode. It consisits of one or more `BarcodeComplementMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`BarcodeComplementMode`]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode) array* | "BCM_SKIP"<br>"BCM_AUTO"<br>"BCM_GENERAL" | ["BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP", "BCM_SKIP"] |

- **See also**:   
    [`BarcodeComplementMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#barcodecomplementmode)
    

### Setting Methods

#### As JSON Parameter
`BarcodeComplementModes` as a JSON parameter is a JSON Object array. Each JSON Object has a key `Mode` for setting the mode. The array index decides the priority the mode to complement the missing parts in the barcode. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| FormatSpecification | BarcodeComplementModes | *JSON Object Array* | 

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

