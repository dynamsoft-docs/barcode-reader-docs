---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - TextResultCallBack Class
description: This page shows the TextResultCallBack Class of Dynamsoft Barcode Reader for Python SDK.
keywords: TextResultCallBack, class, api reference, python
needAutoGenerateSidebar: false
---


# TextResultCallBack
An abstract class that contains an abstract method `text_results_callback_func`.

```python
class TextResultCallBack(ABC)
```  
  
  

## Abstract Method
  
### text_results_callback_func
Sets callback function to process text results during frame decoding. You need to implement it in the subclass.

**Parameters**  
`[in] frame_id <int>` : The ID of the frame.  
`[in] results <list[dict]>` : Recognized barcode results of the frame. You can convert every item of the results to TextResult Object by using TextResult's constructor.  
`[in] user_data <object>` : Customized arguments passed to your function.  
        

```python
TextResultCallBack.text_results_callback_func(frame_id, results, user_data)
```
