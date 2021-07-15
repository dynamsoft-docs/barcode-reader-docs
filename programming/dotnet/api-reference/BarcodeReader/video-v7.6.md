---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - BarcodeReader Video Methods
description: This page shows BarcodeReader video methods of Dynamsoft Barcode Reader for .NET SDK.
keywords: StartFrameDecoding, StartFrameDecodingEx, AppendFrame, StopFrameDecoding, InitFrameDecodingParameters, SetErrorCallback, SetTextResultCallback, SetIntermediateResultCallback, GetLengthOfFrameQueue, video methods, BarcodeReader, api reference, .Net
needAutoGenerateSidebar: true
---

# .Net API Reference - BarcodeReader Video Methods

- Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](#startframedecoding) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`StartFrameDecodingEx`](#startframedecodingex) | Starts a new thread to decode barcodes from the inner frame queue. |
   | [`AppendFrame`](#appendframe) | Appends a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](#stopframedecoding) | Stops the frame decoding thread created by StartFrameDecoding. |

- Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](#initframedecodingparameters) | Initializes frame decoding parameters. |


- Callback

   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |


- Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](#getlengthofframequeue) | Gets length of current inner frame queue. |

  ---



## StartFrameDecoding

Starts a new thread to decode barcodes from the inner frame queue. 


```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.StartFrameDecoding(int maxQueueLength, int maxResultQueueLength, int width, int height, int stride, EnumImagePixelFormat imagePixelFormat, string templateName)
```   
   
#### Parameters
`[in] maxQueueLength` <*int*> : The max count of frames waiting for decoding.  
`[in] maxResultQueueLength` <*int*> : The max count of frames whose results (text result/localization result) will be kept for further reference.  
`[in] width` <*int*> : The width of the frame image in pixels.   
`[in] height` <*int*> : The height of the frame image in pixels.  
`[in] stride` <*int*> : The stride of the frame image (also called scan width).  
`[in] imagPixelFormat` <*EnumImagePixelFormat*> : The image pixel format used in the image byte array.  
`[in] templateName` <*string*> : The template name.  


#### Return value
Returns error code.

#### Code Snippet

```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
EnumErrorCode error = reader.StartFrameDecoding(2, 10, 1024, 720, 720, EnumImagePixelFormat.IPF_BINARY, "");
reader.Dispose();
```


&nbsp; 


## StartFrameDecodingEx

Starts a new thread to decode barcodes from the inner frame queue.

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.StartFrameDecodingEx(ref FrameDecodingParameters parameters, string templateName) 
```   
   
#### Parameters
`[in] parameters` <*[FrameDecodingParameters](../class/FrameDecodingParameters.md)*> : The frame decoding parameters.   
`[in] templateName` <*string*> : The template name.

#### Return value
Returns error code. 

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
FrameDecodingParameters parameters = reader.InitFrameDecodingParameters();
parameters.MaxQueueLength = 3;
parameters.MaxResultQueueLength = 10;
parameters.Width = 20;
parameters.Height = 30;
parameters.Stride = 10;
parameters.ImagePixelFormat = EnumImagePixelFormat.IPF_GRAYSCALED;
parameters.Region.RegionMeasuredByPercentage = 1;
parameters.Region.RegionTop = 0;
parameters.Region.RegionBottom = 100;
parameters.Region.RegionLeft = 0;
parameters.Region.RegionRight = 100;
parameters.Threshold = 0.1;
parameters.FPS = 0;
EnumErrorCode error = reader.StartFrameDecodingEx(ref parameters, "");
reader.Dispose();

```

&nbsp; 


## AppendFrame

Append a frame image buffer to the inner frame queue.  

```C#
int Dynamsoft.Barcode.BarcodeReader.AppendFrame(IntPtr pBufferBytes)
```   
   
#### Parameters
`[in] pBufferBytes` <*IntPtr*> : The array of bytes which contain the image data.

#### Return value
Returns the ID of the appended frame.

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
int ret = reader.AppendFrame(pBufferBytes);
reader.Dispose();
```


&nbsp; 


## StopFrameDecoding

Stop the frame decoding thread created by [`StartFrameDecoding`](#startframedecoding) or [`StartFrameDecodingEx`](#startframedecodingex).

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.StopFrameDecoding()
``` 

#### Return value
Returns error code.

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
EnumErrorCode err = reader.StopFrameDecoding();
reader.Dispose();
```

&nbsp; 


## InitFrameDecodingParameters

Initialize frame decoding parameters with default values.

```C#
FrameDecodingParameters Dynamsoft.Barcode.BarcodeReader.InitFrameDecodingParameters()
```   
   
#### Return value
Returns the frame decoding parameters.


&nbsp; 


## SetErrorCallback

Sets call back function to process errors generated during frame decoding. 

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.SetErrorCallback(CB_Error callbackFunction, IntPtr pUser)
```

#### Parameters
`[in] callbackFunction` <*[CB_Error](../function-pointer.md#cb_error)*> : Call back function.  
`[in] pUser` <*IntPtr*> : Customized arguments passed to your function. 

#### Return value
Returns error code. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
reader.SetErrorCallback(ErrorFunction, NULL);
EnumErrorCode error = reader.StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
reader.Dispose();
```


## SetIntermediateResultCallback

Sets call back function to process intermediate results generated during frame decoding.  

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.SetIntermediateResultCallback(CB_IntermediateResult callbackFunction, IntPtr pUser)
```

#### Parameters
`[in] callbackFunction` <*[CB_IntermediateResult](../function-pointer.md#cb_intermediateresult)*> : Call back function.  
`[in] pUser` <*IntPtr*> : Customized arguments passed to your function. 

#### Return value
Returns error code. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
PublicRuntimeSettings settings = new PublicRuntimeSettings();
settings = reader.GetRuntimeSettings();
settings.IntermediateResultTypes = (int)(EnumIntermediateResultType.IRT_ORIGINAL_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CLUSTERED_IMAGE | EnumIntermediateResultType.IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE);
reader.UpdateRuntimeSettings(settings);
reader.SetIntermediateResultCallback(IntermediateResultFunction, NULL);
EnumErrorCode error = reader.StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
reader.Dispose();
```


## SetTextResultCallback

Sets call back function to process errors generated during frame decoding. 

```C#
EnumErrorCode Dynamsoft.Barcode.BarcodeReader.SetTextResultCallback(CB_TextResult callbackFunction, IntPtr pUser)
```

#### Parameters
`[in] callbackFunction` <*[CB_TextResult](../function-pointer.md#cb_textresult)*> : Call back function.  
`[in] pUser` <*IntPtr*> : Customized arguments passed to your function. 

#### Return value
Returns error code. 

#### Exceptions
[`BarcodeReaderException`](../class/BarcodeReaderException.md) The exception thrown by Dynamsoft Barcode Reader.

#### Code Snippet
```C#
BarcodeReader reader = new BarcodeReader();
reader.ProductKeys = "t0260NwAAAHV***************";
reader.SetTextResultCallback(TextResultFunction, NULL);
EnumErrorCode error = reader.StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
reader.Dispose();
```


## GetLengthOfFrameQueue

Get current length of the inner frame queue. 

```C#
int Dynamsoft.Barcode.BarcodeReader.GetLengthOfFrameQueue()	
```

#### Return value
Returns the length of the inner frame queue.
