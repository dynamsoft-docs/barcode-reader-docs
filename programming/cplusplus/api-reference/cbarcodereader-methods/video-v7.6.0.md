---
layout: default-layout
title: Dynamsoft Barcode Reader C++ API Reference - CBarcodeReader Video Methods
description: This page shows CBarcodeReader video methods of Dynamsoft Barcode Reader for C++ Language.
keywords: StartFrameDecoding, StartFrameDecodingEx, AppendFrame, StopFrameDecoding, InitFrameDecodingParameters, SetErrorCallback, SetTextResultCallback, SetIntermediateResultCallback, GetLengthOfFrameQueue, video methods, CBarcodeReader, api reference, c++
needAutoGenerateSidebar: true
---

# C++ API Reference - CBarcodeReader Video Methods

- Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](#stopframedecoding) | Stop thread used for frame decoding. |

- Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](#initframedecodingparameters) | Initialize frame decoding parameter. |

- Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

- Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](#getlengthofframequeue) | Get length of current inner frame queue. |

  ---





  

## StartFrameDecoding

Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting passed in.

```cpp
int CBarcodeReader::StartFrameDecoding (const int maxQueueLength, const int maxResultQueueLength, const int width, const int height, const int stride, const ImagePixelFormat format, const char* pTemplateName = "") 
```   
   
#### Parameters
`[in]	maxQueueLength` The max number of frames waiting for decoding.  
`[in]	maxResultQueueLength` The max number of frames whose results (text result/localization result) will be kept.  
`[in]	width` The width of the frame image in pixels.  
`[in]	height` The height of the frame image in pixels.  
`[in]	stride` The stride (or scan width) of the frame image.  
`[in]	format` The image pixel format used in the image byte array.  
`[in] pTemplateName`<sub>Optional</sub> The template name.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID.   
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
delete reader;
```

 





## StartFrameDecodingEx

Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting defined in `FrameDecodingParameters` struct.

```cpp
int CBarcodeReader::StartFrameDecodingEx (FrameDecodingParameters parameters, const char* pTemplateName = "")	
```   
   
#### Parameters
`[in] parameters` The frame decoding parameters.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID.   
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*  
   
#### Remark
If no template name is specified, current runtime settings will be used.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = reader->InitFrameDecodingParameters(&parameters);
if(errorCode == DBR_OK)
{
    parameters.maxQueueLength = 3;
    parameters.maxResultQueueLength = 10;
    parameters.width = 20;
    parameters.height = 30;
    parameters.stride = 10;
    parameters.imagePixelFormat = IPF_GRAYSCALED;
    parameters.region.regionMeasuredByPercentage = 1;
    parameters.region.regionTop = 0;
    parameters.region.regionBottom = 100;
    parameters.region.regionLeft = 0;
    parameters.region.regionRight = 100;
    parameters.threshold = 0.1;
    parameters.fps = 0;
    reader->StartFrameDecodingEx(parameters, "");
}
delete reader;
```

 





## AppendFrame

Append a frame image buffer to the inner frame queue.  

```cpp
int CBarcodeReader::AppendFrame (unsigned char* pBufferBytes) 
```   
   
#### Parameters
`[in]	pBufferBytes` The array of bytes which contain the image data.

#### Return value
Returns the ID of the appended frame.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int frameId = reader->AppendFrame(pBufferBytes);
delete reader;
```







## StopFrameDecoding

Stop the frame decoding thread created by [`StartFrameDecoding`](#startframedecoding) or [`StartFrameDecodingEx`](#startframedecodingex).

```cpp
int CBarcodeReader::StopFrameDecoding() 
```   

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_STOP_DECODING_THREAD_FAILED.   
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
int errorCode = reader->StopFrameDecoding();
delete reader;
```





## InitFrameDecodingParameters

Initialize frame decoding parameters with default values.

```cpp
int CBarcodeReader::InitFrameDecodingParameters (FrameDecodingParameters* pParameters)
```   
   
#### Parameters
`[in,out] pParameters` The frame decoding parameters.

#### Return value
Returns error code. Possible return(s): DBR_OK.   
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*


#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = reader->InitFrameDecodingParameters(&parameters);
if(errorCode == DBR_OK)
{
    parameters.maxQueueLength = 3;
    parameters.maxResultQueueLength = 10;
    parameters.width = 20;
    parameters.height = 30;
    parameters.stride = 10;
    parameters.imagePixelFormat = IPF_GRAYSCALED;
    parameters.region.regionMeasuredByPercentage = 1;
    parameters.region.regionTop = 0;
    parameters.region.regionBottom = 100;
    parameters.region.regionLeft = 0;
    parameters.region.regionRight = 100;
    parameters.threshold = 0.1;
    parameters.fps = 0;
    reader->StartFrameDecodingEx(parameters, "");
}
delete reader;
```

 






## SetErrorCallback
Set callback function to process errors generated during frame decoding.

```cpp
int CBarcodeReader::SetErrorCallback (CB_Error cbFunction, void* pUser)	
```   
   
#### Parameters
`[in]	cbFunction`	Callback function.   
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.     
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
void ErrorFunction(int frameId, int errorCode, void * pUser)
{
    //TODO add your code for using error code
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->SetErrorCallback(ErrorFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```

 





## SetTextResultCallback
Set callback function to process text results generated during frame decoding.

```cpp
int CBarcodeReader::SetTextResultCallback (CB_TextResult cbFunction, void* pUser)	
```   
   
#### Parameters
`[in]	cbFunction`	Callback function.   
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.     
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
void TextResultFunction(int frameId, TextResultArray *pResults, void * pUser)
{
    //TODO add your code for using text results
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->SetTextResultCallback(TextResultFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```

 





## SetIntermediateResultCallback
Set callback function to process intermediate results generated during frame decoding.

```cpp
int CBarcodeReader::SetIntermediateResultCallback (CB_IntermediateResult cbFunction, void* pUser)		
```   
   
#### Parameters
`[in]	cbFunction`	Callback function.   
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.     
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*


#### Code Snippet
```cpp
void IntermediateResultFunction(int frameId, IntermediateResultArray *pResults, void * pUser)
{
    //TODO add your code for using intermediate results
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetIntermediateResultCallback(IntermediateResultFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```

 





## GetLengthOfFrameQueue

Get length of current inner frame queue.

```cpp
int CBarcodeReader::GetLengthOfFrameQueue ()	
```

#### Return value
Returns length of current inner frame queue.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int frameLength = reader->GetLengthOfFrameQueue();
delete reader;
```

