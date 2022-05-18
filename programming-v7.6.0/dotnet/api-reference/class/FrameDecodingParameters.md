---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - FrameDecodingParameters Class
description: This page shows the FrameDecodingParameters Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: FrameDecodingParameters, class, api reference, .Net
needAutoGenerateSidebar: false
---


# FrameDecodingParameters
Defines a struct to configure the frame decoding Parameters.  

```C#
public class FrameDecodingParameters
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`MaxQueueLength`](#maxqueuelength) | *int* |
| [`MaxResultQueueLength`](#maxresultqueuelength) | *int* |
| [`Width`](#width) | *int* |
| [`Height`](#height) | *int* |
| [`Stride`](#stride) | *int* |
| [`ImagePixelFormat`](#imagepixelformat) | [`EnumImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) |
| [`Region`](#region) | *[`RegionDefinition`](../struct/RegionDefinition.md)* |
| [`Threshold`](#threshold) | *float* |
| [`FPS`](#fps) | *int* |
| [`AutoFilter`](#autofilter) | *int* |
| [`ClarityCalculationMethod`](#claritycalculationmethod) | [`EnumClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) |
| [`ClarityFilterMode`](#clarityfiltermode) | [`EnumClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) |


### MaxQueueLength
The maximum number of frames waiting for decoding.

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.MaxQueueLength
```

- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    3

### MaxResultQueueLength
The maximum number of frames waiting results (text result/localization result) will be kept for further reference.  

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.MaxResultQueueLength
```

- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    10  

### Width
The width of the frame image in pixels. 

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.Width
```

- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0  

### Height
The height of the frame image in pixels.

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.Height
```

- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0  

### Stride
The stride (or scan width) of the frame image.

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.Stride
```

- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0 
      
### ImagePixelFormat
The image pixel format used in the image byte array.

```C#
EnumImagePixelFormat Dynamsoft.Barcode.FrameDecodingParameters.ImagePixelFormat
```

- **Value range**   
    Any one value of [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) Enumeration items.
      
- **Default value**   
    `EnumImagePixelFormat.IPF_GRAYSCALED`
      
### Region
The region definition of the frame to calculate the internal indicator.  

```C#
RegionDefinition Dynamsoft.Barcode.FrameDecodingParameters.Region
```

- **Default value**  
    `{ RegionLeft = 0, RegionRight = 100, RegionTop = 0, RegionBottom = 100, RegionMeasuredByPercentage = 1 }`
      
- **See also**   
    [`RegionDefinition`](../struct/RegionDefinition.md)
     
### Threshold
The threshold used for filtering frames.

```C#
float Dynamsoft.Barcode.FrameDecodingParameters.Threshold
```

- **Value range**   
    [0, 1]
      
- **Default value**   
    0.01
    
- **Remark**  
    The SDK will calculate an inner indicator for each frame from [`AppendFrame`](../BarcodeReader/video.md#appendframe), if the change rate of the indicators between the current frame and the history frames is larger than the given threshold, the current frame will not be added to the inner frame queue waiting for decoding.

### FPS
The frequency of calling [`AppendFrame`](../BarcodeReader/video.md#appendframe) per second.

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.FPS
```

- **Value range**   
    [0,0x7fffffff]
      
- **Default value**   
    0  
    
- **Remark**  
    0 means the frequency will be calculated automatically by the SDK.

### AutoFilter
Sets whether to filter frames automatically.

```C#
int Dynamsoft.Barcode.FrameDecodingParameters.AutoFilter
```

- **Value range**   
    [0,1]
      
- **Default value**   
    1  
    
- **Remark**  
    0: Diable filtering frames automatically.  
    1: Enable filtering frames automatically. 
    

### ClarityCalculationMethod
Sets the method used for calculating the clarity of the frames.

```C#
EnumClarityCalculationMethod Dynamsoft.Barcode.FrameDecodingParameters.ClarityCalculationMethod
```

- **Value range**   
    Any one of the [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) Enumeration items.   
      
- **Default value**   
    EnumClarityCalculationMethod.ECCM_CONTRAST       

### ClarityFilterMode
Sets the mode used for filtering frames by calculated clarity.

```C#
EnumClarityFilterMode Dynamsoft.Barcode.FrameDecodingParameters.ClarityFilterMode
```

- **Value range**   
    Any one of the [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) Enumeration items.   
      
- **Default value**   
    EnumClarityFilterMode.CFM_GENERAL   
