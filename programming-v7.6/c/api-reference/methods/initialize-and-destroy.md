---
layout: default-layout
title: Dynamsoft Barcode Reader C Language API Reference - Initialize and Destroy Methods
description: This page shows Initialize and Destroy methods of Dynamsoft Barcode Reader for C Language.
keywords: DBR_CreateInstance, DBR_DestroyInstance, initialize and destroy methods, api reference, c
needAutoGenerateSidebar: true
---


# C API Reference - Initialize and Destroy Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](#dbr_createinstance) | Create an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](#dbr_destroyinstance) | Destroy the instance of Dynamsoft Barcode Reader. |
  
  ---
  
   




## DBR_CreateInstance
Create an instance of Dynamsoft Barcode Reader.


```c
DBR_API void* DBR_CreateInstance ()	
```   

#### Return value
Returns an instance of Dynamsoft Barcode Reader. If failed, returns NULL.


#### Remark
Partial of the decoding result will be masked with "\*" without a valid license key.

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```


&nbsp;





## DBR_DestroyInstance
Destroy the instance of Dynamsoft Barcode Reader.

```c
DBR_API void DBR_DestroyInstance (void* barcodeReader)	
```   
   
#### Parameters
`[in]	barcodeReader` Handle of the barcode reader instance.

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```

