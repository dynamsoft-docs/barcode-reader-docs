---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - ErrorCallBack Class
description: This page shows the ErrorCallBack Class of Dynamsoft Barcode Reader for Python SDK.
keywords: ErrorCallBack, class, api reference, python
needAutoGenerateSidebar: false
---


# ErrorCallBack
An abstract class that contains an abstract method `error_callback_func`.

```python
class ErrorCallBack(ABC)
```  
 

## Abstract Method
  
### error_callback_func

Sets callback function to process errors during frame decoding. You need to implement it in the subclass.

**Parameters**  
`[in] frame_id <int>` : The ID of the frame.  
`[in] error <int>` : Error code generated when decoding the frame.  
`[in] user_data <object>` : Customized arguments passed to your function.  
        

```python
ErrorCallBack.error_callback_func(frame_id, error, user_data)
```
