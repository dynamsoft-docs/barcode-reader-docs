---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Initialize and Destroy Functions
description: This page shows Initialize and Destroy functions of Dynamsoft Barcode Reader for C Language.
keywords: DBR_CreateInstance, DBR_DestroyInstance, initialize and destroy functions, api reference, c
needAutoGenerateSidebar: true
---


# Initialize and Destroy Functions

  | Function               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](#dbr_createinstance) | Creates an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](#dbr_destroyinstance) | Destroys the instance of Dynamsoft Barcode Reader. |
  
  
## DBR_CreateInstance

Creates an instance of Dynamsoft Barcode Reader.

```c
DBR_API void* DBR_CreateInstance ()	
```   

**Return Value**  

Returns an instance of Dynamsoft Barcode Reader. If failed, returns `NULL`.


**Code Snippet**  

```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
DBR_DestroyInstance(barcodeReader);
```

**Remarks**  

Partial of the decoding result will be masked with "\*" without a valid license key.


## DBR_DestroyInstance

Destroys an instance of Dynamsoft Barcode Reader.

```c
DBR_API void DBR_DestroyInstance (void* barcodeReader)	
```   
   
**Parameters**  

`[in]	barcodeReader` Handle of the barcode reader instance.

**Code Snippet**  

```c
char errorBuf[512];
DBR_InitLicense("YOUR-LICENSE-KEY", errorBuf, 512);
void* barcodeReader = DBR_CreateInstance();
DBR_DestroyInstance(barcodeReader);
```

