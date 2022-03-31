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
  | [`get_idle_instances_count`](#get_idle_instances_count) | Gets available instances count when charging by concurrent instances count. |
  | [`init_license_from_server`](#init_license_from_server) | `Deprecated` |
  | [`init_license_from_license_content`](#init_license_from_license_content) | `Deprecated` |
  | [`output_license_to_string`](#output_license_to_string) | `Deprecated` |
  | [`init_dls_connection_parameters`](#init_dls_connection_parameters) | `Deprecated` |
  | [`init_license_from_dls`](#init_license_from_dls) | `Deprecated` |
  | [`init_lts_connection_parameters`](#init_lts_connection_parameters) | `Deprecated` |
  | [`init_license_from_lts`](#init_license_from_lts) | `Deprecated` |
  

## init_license

Reads product key and activates the SDK.

```python
BarcodeReader.init_license(dbr_license)
```

**Parameters**  

`[in]	dbr_license` <*str*> : The license key.

**Return Value**  

`error` <*tuple*> : error_code = error[0], error_message = error[1], if error_code != EnumErrorCode.DBR_OK, you can get the detailed error message by error_message.


## get_idle_instances_count
Gets available instances count when charging by concurrent instances count.

```python
BarcodeReader.get_idle_instances_count()
```   

**Return Value**  
`count` <*int*> : Returns available instances count.    
- 0: There is no space for new instance  
- -1: The available count needs to be updated from server by calling initLicense.
- N ( N > 0 ): N more instances can be created.


## init_license_from_server

`Deprecated`. It still works in this version but could be removed in the near future.

```python
BarcodeReader.init_license_from_server(license_server, license_key)
```

## init_license_from_license_content

`Deprecated`. It still works in this version but could be removed in the near future.

```python
BarcodeReader.init_license_from_license_content(license_key, license_content)
```

## output_license_to_string

`Deprecated`. It still works in this version but could be removed in the near future.

```python
BarcodeReader.output_license_to_string()
```

## init_dls_connection_parameters

`Deprecated`. It still works in this version but could be removed in the near future.

```python
BarcodeReader.init_dls_connection_parameters()
```

## init_license_from_dls

`Deprecated`. It still works in this version but could be removed in the near future.

```python
BarcodeReader.init_license_from_dls(dls_connection_parameters)
```

## init_lts_connection_parameters
`Deprecated`. It still works in this version but could be removed in the near future.

## init_license_from_lts
`Deprecated`. It still works in this version but could be removed in the near future.
