---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - TextResultResultCallBack Class
description: This page shows the TextResultResultCallBack Class of Dynamsoft Barcode Reader for Python SDK.
keywords: TextResultResultCallBack, class, api reference, python
needAutoGenerateSidebar: false
---


# TextResultResultCallBack
An abstract class that contains a abstract method `text_results_callback_func`.

```python
class TextResultResultCallBack(ABC)
```  
  
---
  

## Abstract Method
  
### text_results_callback_func
Sets callback function to process text results generated during frame decoding. Please implement in subclass.

`[in] frame_id` <int> : The ID of the frame.  
`[in] results` <list[dict]> : Recognized barcode results of the frame. You can convert every item of the results to TextResult Object by using TextResult's constructor.  
`[in] user_data` <object> : Customized arguments passed to your function.  
        

```python
TextResultResultCallBack.text_results_callback_func(frame_id, results, user_data)
```
