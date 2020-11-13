---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - BarcodeReader License Methods
description: This page shows BarcodeReader License Methods of Dynamsoft Barcode Reader for Python SDK.
keywords: init_license, init_license_from_server, init_license_from_license_content, output_license_to_string, license methods, BarcodeReader, api reference, python
needAutoGenerateSidebar: true
---


# Python API Reference - BarcodeReader License Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`init_license`](#init_license) | Reads product key and activates the SDK.  |
  | [`init_license_from_server`](#init_license_from_server) | Initializes license and connect to the specified server for online verification. |
  | [`init_license_from_license_content`](#init_license_from_license_content) | Initializes barcode reader license and connects to the specified server for online verification. |
  | [`output_license_to_string`](#output_license_to_string) | Outputs the license content as an encrypted string from the license server to be used for offline license verification.|
  
  ---

## init_license

Reads product key and activates the SDK.

```python
BarcodeReader.init_license(dbr_license)
```

### Parameters

`[in]	dbr_license` <*str*> : The product keys.

### Return value

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

## init_license_from_server

Initialize the license and connect to the specified server for online verification.

```python
BarcodeReader.init_license_from_server(license_server, license_key)
```

### Parameters

- `[in]	license_server` <*str*> : The name/IP of the license server.  
- `[in]	license_key` <*str*> : The license key of Barcode Reader.

### Return value

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

## init_license_from_license_content

Initializes barcode reader license from the license content on the client machine for offline verification.

```python
BarcodeReader.init_license_from_license_content(license_key, license_content)
```

### Parameters

`[in]	license_key` <*str*> :	The license key of Barcode Reader.   
`[in]	license_content` <*str*> :	An encrypted string representing the license content (runtime number, expiry date, barcode type, etc.) obtained from the method output_license_to_string(). 

### Return value

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.

## output_license_to_string

Outputs the license content as an encrypted string from the license server to be used for offline license verification. 

```python
BarcodeReader.output_license_to_string()
```

### Return value

`license_string` <*str*> : An encrypted string which stores the content of license. 

### Exception

[`BarcodeReaderError`](../class/BarcodeReaderError.md) : If error happens, this function will throw a BarcodeReaderError exception that can report the detailed error message.
