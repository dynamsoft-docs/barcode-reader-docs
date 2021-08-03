---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - IntermediateResultCallBack Class
description: This page shows the IntermediateResultCallBack Class of Dynamsoft Barcode Reader for Python SDK.
keywords: IntermediateResultCallBack, class, api reference, python
needAutoGenerateSidebar: false
---


# IntermediateResultCallBack
An abstract class that contains an abstract method `intermediate_results_callback_func`.

```python
class IntermediateResultCallBack(ABC)
```  
    

## Abstract Method
  
### intermediate_results_callback_func

Sets callback function to process intermediate results during frame decoding. You need to implement it in the subclass. 

**Parameters**  
`[in] frame_id <int>` : The ID of the frame.
  
`[in] results <list[dict]>` : The intermediate results of the frame. You can convert every item of the results to `IntermediateResult` Object by using IntermediateResult's constructor.  
  
`[in] user_data <object>` : Customized arguments passed to your function.  
        

```python
IntermediateResultCallBack.intermediate_results_callback_func(frame_id, results, user_data)
```
