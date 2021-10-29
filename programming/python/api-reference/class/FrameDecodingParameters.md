---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - FrameDecodingParameters Class
description: This page shows the FrameDecodingParameters Class of Dynamsoft Barcode Reader for Python SDK.
keywords: FrameDecodingParameters, class, api reference, python
needAutoGenerateSidebar: false
---


# FrameDecodingParameters
Defines a struct to configure the frame decoding Parameters.  

```python
class FrameDecodingParameters
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`max_queue_length`](#max_queue_length) | *int* |
| [`max_result_queue_length`](#max_result_queue_length) | *int* |
| [`width`](#width) | *int* |
| [`height`](#height) | *int* |
| [`stride`](#stride) | *int* |
| [`image_pixel_format`](#imagepixelformat) | [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) |
| [`region_top`](#region_top) | *int* |
| [`region_left`](#region_left) | *int* |
| [`region_right`](#region_right) | *int* |
| [`region_bottom`](#region_bottom) | *int* |
| [`region_measured_by_percentage`](#region_measured_by_percentage) | *int* |
| [`threshold`](#threshold) | *float* |
| [`fps`](#fps) | *int* |
| [`auto_filter`](#autofilter) | *int* |
| [`clarity_calculation_method`](#clarity_calculation_method) | [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) |
| [`clarity_filter_mode`](#clarity_filter_mode) | [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) |


### max_queue_length
The maximum number of frames waiting for decoding.

```python
FrameDecodingParameters.max_queue_length
```

**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    3

### max_result_queue_length
The maximum number of frames waiting results (text result/localization result) will be kept for further reference.  

```python
FrameDecodingParameters.max_result_queue_length
```

**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    10  

### width
The width of the frame image in pixels. 

```python
FrameDecodingParameters.width
```

**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    0  

### height
The height of the frame image in pixels.

```python
FrameDecodingParameters.height
```

**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    0  

### stride
The stride (or scan width) of the frame image.

```python
FrameDecodingParameters.stride
```

**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    0 
      
### image_pixel_format
The image pixel format used in the image byte array.

```python
FrameDecodingParameters.image_pixel_format
```

**Value Range**     
    A value of [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat) Enumeration items.
      
**Default Value**     
    `IPF_GRAYSCALED`
    
**See Also**      
    [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat)
      
### region_top
The region definition of the frame to calculate the internal indicator.The top-most coordinate or percentage of the region. 

```python
FrameDecodingParameters.region_top
```

- **Default Value**  
    0

**Value Range**  
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100] 

### region_left
The region definition of the frame to calculate the internal indicator.The left-most coordinate or percentage of the region. 

```python
FrameDecodingParameters.region_left
```

- **Default Value**  
    0

**Value Range**  
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]

### region_right
The region definition of the frame to calculate the internal indicator.The right-most coordinate or percentage of the region. 

```python
FrameDecodingParameters.region_right
```

- **Default Value**  
    0

**Value Range**  
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]

### region_bottom
The region definition of the frame to calculate the internal indicator.The bottom-most coordinate or percentage of the region. 

```python
FrameDecodingParameters.region_bottom
```

- **Default Value**  
    0

**Value Range**  
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]

### region_measured_by_percentage
Sets whether or not to use percentage to measure the region size.

```python
FrameDecodingParameters.region_measured_by_percentage
```

- **Default Value**  
    0

**Value Range**  
    [0,1]

### region_top
The region definition of the frame to calculate the internal indicator.The top-most coordinate or percentage of the region. 

```python
FrameDecodingParameters.region_top
```

- **Default Value**  
    0

**Value Range**  
    - if region_measured_by_percentage = 0, [0,0x7fffffff] 
    - if region_measured_by_percentage = 1, [0,100]

### threshold
The threshold used for filtering frames.

```python
FrameDecodingParameters.threshold
```

**Value Range**     
    [0, 1]
      
**Default Value**     
    0.01
    
**Remarks**      
    The SDK will calculate an inner indicator for each frame from [`append_video_frame`](../BarcodeReader/video.md#append_video_frame), if the change rate of the indicators between the current frame and the history frames is larger than the given threshold, the current frame will not be added to the inner frame queue waiting for decoding.

### fps
The frequency of calling [`append_video_frame`](../BarcodeReader/video.md#append_video_frame) per second.

```python
FrameDecodingParameters.fps
```

**Value Range**     
    [0,0x7fffffff]
      
**Default Value**     
    0  
    
**Remarks**      
    0 means the frequency will be calculated automatically by the SDK.

### auto_filter
Sets whether to filter frames automatically.

```python
FrameDecodingParameters.auto_filter
```

**Value Range**     
    [0,1]
      
**Default Value**     
    1  
    
**Remarks**      
    0: Diable filtering frames automatically.  
    1: Enable filtering frames automatically. 
    

### clarity_calculation_method
Sets the method used for calculating the clarity of the frames.

```python
FrameDecodingParameters.clarity_calculation_method
```

**Value Range**     
    Any one of the [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod) Enumeration items.   
      
**Default Value**     
    ECCM_CONTRAST   
    
**See Also**      
    [`ClarityCalculationMethod`]({{ site.enumerations }}frame-decoding-enums.html#claritycalculationmethod)    
    

### clarity_filter_mode
Sets the mode used for filtering frames by calculated clarity.

```python
FrameDecodingParameters.clarity_filter_mode
```

**Value Range**     
    Any one of the [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode) Enumeration items.   
      
**Default Value**     
    CFM_GENERAL   
    
**See Also**      
    [`ClarityFilterMode`]({{ site.enumerations }}frame-decoding-enums.html#clarityfiltermode)    

