---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Image Process Control Parameters
description: This page shows Dynamsoft Barcode Reader Parameter Reference for FormatSpecification Object - Image Process Control Parameters.
keywords: DeblurLevel, DeformationResistingModes, BarcodeComplementModes, AccompanyingTextRecognitionModes, FormatSpecification, image process control parameters, parameter reference, parameter
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# FormatSpecification Object - Image Process Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](#deblurlevel) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](#deformationresistingmodes)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |
 | [`FormatSpecification.AccompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text for the current specified barcode format. | 

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


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 5 | "DRM_GENERAL" |         

- **Remark**     
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


## AccompanyingTextRecognitionModes   

### Mode Properties
`AccompanyingTextRecognitionModes` is a parameter for setting the mode to recognize accompanying text. It consisits of one or more `AccompanyingTextRecognitionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) array* | "ATRM_SKIP"<br>"ATRM_GENERAL" | ["ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP"] |

- **See also**:   
    [`AccompanyingTextRecognitionMode` Enumeration]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)
    
#### Mode Arguments
- [RegionBottom](#regionbottom)
- [RegionLeft](#regionleft)
- [RegionRight](#regionright)
- [RegionTop](#regiontop)

If [RegionBottom](#regionbottom), [RegionLeft](#regionleft), [RegionRight](#regionright) and [RegionTop](#regiontop) are all equal to 0, the accompanying text zone will be detected automatically by the SDK. 
 
##### RegionBottom 
Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |         


##### RegionLeft 
Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionRight 
Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionTop 
Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

### Setting Methods

#### As JSON Parameter
`AccompanyingTextRecognitionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to recognize accompanying text. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| FormatSpecification | AccompanyingTextRecognitionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "AccompanyingTextRecognitionModes": [
        {
            "Mode": "ATRM_GENERAL",
            "RegionBottom": 50, 
            "RegionLeft": 50,
            "RegionRight": 50, 
            "RegionTop": 50
        }
]
}
```
