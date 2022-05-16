---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader Video Methods
description: This page shows Video methods of Dynamsoft Barcode Reader for Python SDK.
keywords: start_video_mode, append_video_frame, stop_video_mode, init_frame_decoding_parameters, get_length_of_frame_queue, video methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---

# Python API Reference - BarcodeReader Video Methods
   
   | Method               | Description |
   |----------------------|-------------|
   | [`start_video_mode`](#start_video_mode) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`append_video_frame`](#append_video_frame) | Appends a frame image buffer to the inner frame queue. |
   | [`stop_video_mode`](#stop_video_mode) | Stops the frame decoding thread created by start_video_mode(). |
   | [`init_frame_decoding_parameters`](#init_frame_decoding_parameters) | Initializes frame decoding parameters. |
   | [`get_length_of_frame_queue`](#get_length_of_frame_queue) | Gets length of current inner frame queue. |


## start_video_mode

Starts a new thread to decode barcodes from the inner frame queue. 

```python
BarcodeReader.start_video_mode(frame_decoding_parameters, call_back_func, template_name="")
```

**Parameters**  

`[in] frame_decoding_parameters` <*class FrameDecodingParameters*> : The frame decoding parameters. You can get it by using init_frame_decoding_parameters() then modifying its parameters' value.  
`[in] text_result_callback_func` <*function pointer*> : Sets callback function to process text results during frame decoding.  
- This callback function pointer must follow the following format: callback_func_name(frameId, results, user_data);  
- Or you can inherit the abstract class TextResultCallBack to implement the abstract method text_results_callback_func.  
- If you would like to learn how to use it, please refer to the [sample](https://github.com/Dynamsoft/barcode-reader-python-samples/blob/master/samples/video-decoding.py).

`[in] template_name` (optional)<*str*> : The template name.  
`[in] intermediate_result_callback_func` (optional)<*function pointer*> : Sets callback function to process intermediate results during frame decoding. 
- This callback function pointer must follow the following format: callback_func_name(frameId, results, user_data); 
- Or you can inherit the abstract class IntermediateResultCallBack to implement the abstract method intermediate_results_callback_func.  
- If you would like to learn how to use it, please refer to the [sample](https://github.com/Dynamsoft/barcode-reader-python-samples/blob/master/samples/video-decoding.py).

`[in] error_callback_func` (optional)<*function pointer*> : Sets callback function to process errors during frame decoding.  
- This callback function pointer must follow the following format: callback_func_name(frameId, error, user_data);  
- Or you can inherit the abstract class ErrorCallBack to implement the abstract method error_callback_func.
- If you would like to learn how to use it, please refer to the [sample](https://github.com/Dynamsoft/barcode-reader-python-samples/blob/master/samples/video-decoding.py).

`[in] user_data` (optional)<*object*> : Customizes arguments passed to your function.

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.

**Code Snippet**  

```python
import cv2
from dbr import *
license_key = 'YOUR-LICENSE-KEY'
BarcodeReader.init_license(license_key)
reader = BarcodeReader()


# The callback function for receiving barcode results
def text_results_callback_func(frame_id, t_results, user_data):
        print(frame_id)
        for result in t_results:
            text_result = TextResult(result)
            print("Barcode Format : ")
            print(text_result.barcode_format_string)
            print("Barcode Text : ")
            print(text_result.barcode_text)
            print("Localization Points : ")
            print(text_result.localization_result.localization_points)
            print("Exception : ")
            print(text_result.exception)
            print("-------------")

def get_time():
    localtime = time.localtime()
    capturetime = time.strftime("%Y%m%d%H%M%S", localtime)
    return capturetime

def read_barcode():
    video_width = 0
    video_height = 0
    
    vc = cv2.VideoCapture(0)
    video_width  = vc.get(cv2.CAP_PROP_FRAME_WIDTH)
    video_height = vc.get(cv2.CAP_PROP_FRAME_HEIGHT)
    vc.set(3, video_width) #set width
    vc.set(4, video_height) #set height

    stride = 0
    if vc.isOpened():  
        rval, frame = vc.read()
        stride = frame.strides[0]
    else:
        return

    windowName = "Barcode Reader"

    parameters = reader.init_frame_decoding_parameters()
    # you can modify these following parameters.
    parameters.max_queue_length = 30
    parameters.max_result_queue_length = 30
    parameters.width = video_width
    parameters.height = video_height
    parameters.stride = stride
    parameters.image_pixel_format = EnumImagePixelFormat.IPF_RGB_888
    parameters.region_top = 0
    parameters.region_bottom = 100
    parameters.region_left = 0
    parameters.region_right = 100
    parameters.region_measured_by_percentage = 1
    parameters.threshold = 0.01
    parameters.fps = 0
    parameters.auto_filter = 1

    reader.start_video_mode(parameters, text_results_callback_func)

    while True:
        cv2.imshow(windowName, frame)
        rval, frame = vc.read()
        if rval == False:
            break
        
        try:
            ret = reader.append_video_frame(frame)
        except:
            pass
        
        # 'ESC' for quit
        key = cv2.waitKey(1)
        if key == 27:
            break

    reader.stop_video_mode()
    cv2.destroyWindow(windowName)


print("-------------------start------------------------")

reader.init_license("t0260NwAAAHV***************")
read_barcode()

print("-------------------over------------------------")
```

## append_video_frame

Appends a frame image buffer to the inner frame queue.  

```python
BarcodeReader.append_video_frame(video_frame)
```

**Parameters**  

`[in] video_frame` : Gets video frame by opencv.

**Return Value**  

The current frame ID.


## stop_video_mode

Stop the frame decoding thread created by [`start_video_mode`](#start_video_mode)

```python
BarcodeReader.stop_video_mode()
``` 

**Exception**  

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.


## init_frame_decoding_parameters

Initializes frame decoding parameters with default values.

```python
BarcodeReader.init_frame_decoding_parameters()
```

**Return Value**  

`frame_decoding_parameters` <*class FrameDecodingParameters*> : The frame decoding parameters.

## get_length_of_frame_queue

Gets the current length of the inner frame queue.

```python
BarcodeReader.get_length_of_frame_queue()	
```

**Return Value**  

Returns the length of the inner frame queue.
