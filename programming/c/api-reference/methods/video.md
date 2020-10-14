---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Video Methods
description: This page shows video methods of Dynamsoft Barcode Reader for C Language.
keywords: DBR_StartFrameDecoding, DBR_StartFrameDecodingEx, DBR_AppendFrame, DBR_StopFrameDecoding, DBR_InitFrameDecodingParameters, DBR_SetErrorCallback, DBR_SetTextResultCallback, DBR_SetIntermediateResultCallback, DBR_GetLengthOfFrameQueue, video methods, api reference, c
needAutoGenerateSidebar: true
---

# C API Reference - Video Methods

- Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_StartFrameDecoding`](#dbr_startframedecoding) | Decode barcodes from inner frame queue. |
  | [`DBR_StartFrameDecodingEx`](#dbr_startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`DBR_AppendFrame`](#dbr_appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`DBR_StopFrameDecoding`](#dbr_stopframedecoding) | Stop thread used for frame decoding. |

- Parameter
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitFrameDecodingParameters`](#dbr_initframedecodingparameters) | Initialize frame decoding parameter. |

- Callback
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetErrorCallback`](#dbr_seterrorcallback) | Set callback function to process errors generated during frame decoding. |
  | [`DBR_SetTextResultCallback`](#dbr_settextresultcallback) | Set callback function to process text results generated during frame decoding. |
  | [`DBR_SetIntermediateResultCallback`](#dbr_setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

- Status retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetLengthOfFrameQueue`](#dbr_getLengthOfframequeue) | Get length of current inner frame queue. |
  
---





## DBR_StartFrameDecoding
Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting passed in.

```c
DBR_API int DBR_StartFrameDecoding (void* barcodeReader, const int maxQueueLength, const int maxResultQueueLength, const int width, const int height, const int stride, const ImagePixelFormat format, const char* pTemplateName)	
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	maxQueueLength` The max number of frames waiting for decoding.  
`[in]	maxResultQueueLength` The max number of frames whose results (text result/localization result) will be kept.  
`[in]	width` The width of the frame image in pixels.  
`[in]	height` The height of the frame image in pixels.    
`[in]	stride` The stride (or scan width) of the frame image.  
`[in]	format` The image pixel format used in the image byte array.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID; DBRERR_NULL_POINTER.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_StartFrameDecoding(barcodeReader, 2, 10, 1024, 720, 720, IPF_BINARY, "");
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_StartFrameDecodingEx
Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting defined in [`FrameDecodingParameters`]() struct.

```c
DBR_API int DBR_StartFrameDecodingEx (void* barcodeReader, FrameDecodingParameters parameters, const char* pTemplateName)	
```   

#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	parameters` The frame decoding parameters.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID; DBRERR_NULL_POINTER.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = DBR_InitFrameDecodingParameters(barcodeReader, &parameters);
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
    int errorCode = DBR_StartFrameDecodingEx(barcodeReader, parameters, "");
    DBR_DestroyInstance(barcodeReader);
}
```

&nbsp;




## DBR_AppendFrame
Appends a frame image buffer to the inner frame queue.

```c
DBR_API int DBR_AppendFrame (void* barcodeReader, unsigned char* pBufferBytes)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pBufferBytes` The array of bytes which contain the image data.  

#### Return value
Returns the ID of the appended frame.

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int frameId = DBR_AppendFrame(barcodeReader, pBufferBytes);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;






## DBR_StopFrameDecoding

Stops the frame decoding thread created by [`DBR_StartFrameDecoding`](#dbr_startframedecoding) or [`DBR_StartFrameDecodingEx`](#dbr_startframedecodingex).

```c
DBR_API int DBR_StopFrameDecoding (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_STOP_DECODING_THREAD_FAILED.     
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_StopFrameDecoding(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_InitFrameDecodingParameters

Initialize frame decoding parameters with default values.

```c
DBR_API int DBR_InitFrameDecodingParameters (void* barcodeReader, FrameDecodingParameters* pParameters)	
```   

#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	pParameters` The frame decoding parameters.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_NULL_POINTER.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = DBR_InitFrameDecodingParameters(barcodeReader, &parameters);
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
}
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_SetErrorCallback
Set callback function to process errors generated during frame decoding.

```c
DBR_API int DBR_SetErrorCallback (void* barcodeReader, CB_Error cbFunction, void* pUser)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	cbFunction` Callback function.  
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void ErrorFunction(int frameId, int errorCode, void * pUser)
{
    //TODO add your code for using error code
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_SetErrorCallback(barcodeReader, ErrorFunction, NULL);
DBR_StartFrameDecoding(barcodeReader, 2, 10, 1024, 720, 720, IPF_BINARY, "");
```

&nbsp;




## DBR_SetTextResultCallback
Set callback function to process text results generated during frame decoding.

```c
DBR_API int DBR_SetTextResultCallback (void* barcodeReader, CB_TextResult cbFunction, void* pUser)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	cbFunction` Callback function.  
`[in]	pUser`Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.  
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void TextResultFunction(int frameId, TextResultArray *pResults, void * pUser)
{
    //TODO add your code for using test results
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_SetTextResultCallback(barcodeReader, TextResultFunction, NULL);
DBR_StartFrameDecoding(barcodeReader, 2, 10, 1024, 720, 720, IPF_BINARY, "");
```

&nbsp;




## DBR_SetIntermediateResultCallback
Set callback function to process intermediate results generated during frame decoding.

```c
DBR_API int DBR_SetIntermediateResultCallback (void* barcodeReader, CB_IntermediateResult cbFunction, void* pUser)	
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	cbFunction` Callback function.  
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.
*You can call [`DBR_GetErrorString`](status-retrieval.md#dbr_geterrorstring) to get detailed error message.*

#### Code Snippet
```c
void IntermediateResultFunction(int frameId, IntermediateResultArray *pResults, void * pUser)
{
    //TODO add your code for using intermediate results
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
int errorCode = DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_SetIntermediateResultCallback(barcodeReader, IntermediateResultFunction, NULL);
DBR_StartFrameDecoding(barcodeReader, 2, 10, 1024, 720, 720, IPF_BINARY, "");
```

&nbsp;




## DBR_GetLengthOfFrameQueue
Get length of current inner frame queue.

```c
DBR_API int DBR_GetLengthOfFrameQueue (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

#### Return value
Returns the length of the inner frame queue.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int frameLength = DBR_GetLengthOfFrameQueue(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```




