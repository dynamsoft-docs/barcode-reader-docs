---
layout: default-layout
title: Read Barcode from Video Streaming - Dynamsoft Barcode Reader SDK
description: This page describes how to read barcodes from video streaming in Dynamsoft Barcode Reader SDK.
keywords: Different Source
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-video-streaming-desktop.html
---

# Read Barcode from Video Streaming

DBR provides several processing interfaces for video streams, which facilitates the processing of video frame queues and multi-threading.

DBR creates a queue to be processed to store the video frame currently being processed and then creates a decoding thread to process the queue. The decoding thread takes the latest frame in the queue for processing each time and then moves it out of the queue after decoding to perform the next processing. The results will be put into a result queue. If the length of the queue to be processed reaches the maximum value you set, the decoding thread will exit the current processing frame as soon as possible, empty the queue to be processed, and then wait for new frames to join the queue and restart processing to prevent a frame from taking too long.

DBR also provides the feature to filter blurred frames. When enabled, DBR will calculate the sharpness of the image frames in the queue to be processed, and the frames whose sharpness is lower than the threshold you set will be removed. The main APIs are as follows

- [`AppendFrame`]
  Appends a frame image buffer to the inner frame queue.
- [`StartFrameDecoding`]
  Starts a new thread to decode barcodes from the inner frame queue.
- [`StartFrameDecodingEx`]
  Starts a new thread to decode barcodes from the inner frame queue.
- [`SetTextResultCallback`]
  Sets call back function to process text results generated during frame decoding. DBR will start a thread loop to check the result queue when processing the video stream. If new results are put into the queue, the callback function will be called
- [`StopFrameDecoding`]
  Stops the frame decoding thread created by StartFrameDecoding.
- [`InitFrameDecodingParameters`]
  Init `FrameDecodingParameters` object
- [`FrameDecodingParameters`]
  Defines a struct to configure the frame decoding parameters. The structure provides a series of configuration parameters for users to configure the processing method of DBR involving video streams. The main fields are as follows:
  - `maxQueueLength`
    The maximum number of frames waiting for decoding
  - `maxResultQueueLength`
    The maximum number of frames waiting results (text result/localization result) will be kept for further reference.
  - `width`
    The width of the frame image in pixels.
  - `height`
    The height of the frame image in pixels.
  - `stride`
    The number of single-bytes of the image in pixels.
  - `imagePixelFormat`
    The image pixel format used in the image byte array.
  - `region`
    The region definition of the frame to calculate the internal indicator.This is a rectangular area. After setting, DBR only performs decoding within the area.
  - `autoFilter`
    Sets whether to filter frames automatically. The default is 1: Enable filtering frames automatically.
  - `threshold`
    The threshold used for filtering frames. Range 0-1, the smaller the value, the easier the image frame will be filtered out.
  - `fps`
    The frequency of calling `AppendFrame` per second. DBR will refer to this value when performing fuzzy frame filtering logic. If it is not set, then DBR will estimate based on the frequency of calling `AppendFrame`.

The following example demonstrates these interfaces. In this example, we use opencv to read camera data and call DBR’s video streaming interface to decode.

<div class="sample-code-prefix template2"></div>
   >- C
   >- C++
   >- C#
   >- Java
   >- Python
   >
>```c
```
>```cpp
```
>```c#
```
>```java
```
>```python
```
