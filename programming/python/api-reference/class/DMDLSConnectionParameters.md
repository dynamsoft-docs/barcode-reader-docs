---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - DMDLSConnectionParameters Class
description: This page shows the DMDLSConnectionParameters Class of Dynamsoft Barcode Reader for Python SDK.
keywords: DMDLSConnectionParameters, class, api reference, python
needAutoGenerateSidebar: false
pageStartVer: 8.6
---


# DMDLSConnectionParameters
`Deprecated`. It still works in this version but could be removed in the near future.

## Typedefs

```python
class DMDLSConnectionParameters
```


## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`main_server_url`](#main_server_url) | *str* |
| [`standby_server_url`](#standby_server_url) | *str* |
| [`handshake_code`](#handshake_code) | *str* |
| [`session_password`](#session_password) | *str* |
| [`deployment_type`](#deployment_type) | [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deployment_type) |
| [`charge_way`](#charge_way) | [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) |
| [`uuid_generation_method`](#uuid_generation_method) | [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) |
| [`max_buffer_days`](#max_buffer_days) | *int* |
| [`limited_license_modules`](#limited_license_modules) | [`List<EnumLicenseModule>`]({{ site.enumerations }}other-enums.html#dm_licensemodule) |
| [`max_concurrent_instance_count`](#max_concurrent_instance_count) | *int* |
| [`organization_id`](#organization_id) | *str* |
| [`products`](#products) | [`EnumProduct`]({{ site.enumerations }}other-enums.html#product) |


### main_server_url
The URL of the license server.
```python
DMDLSConnectionParameters.main_server_url
```

### standby_server_url
The URL of the standby license server.
```python
DMDLSConnectionParameters.standby_server_url
```


### handshake_code
The handshake code.
```python
DMDLSConnectionParameters.handshake_code
```

### session_password
The session password of the handshake code set in license server.
```python
DMDLSConnectionParameters.session_password
```

### deployment_type
Sets the deployment type.
```python
DMDLSConnectionParameters.deployment_type
```

### charge_way
Sets the charge way.
```python
DMDLSConnectionParameters.charge_way
```

### uuid_generation_method
Sets the method to generate UUID.
```python
DMDLSConnectionParameters.uuid_generation_method
```

### max_buffer_days
Sets the max days to buffer the license info.
```python
DMDLSConnectionParameters.max_buffer_days
```

### limited_license_modules
Sets the license modules to use.
```python
DMDLSConnectionParameters.limited_license_modules
```
      

### max_concurrent_instance_count
Sets the max concurrent instance count.
```python
DMDLSConnectionParameters::max_concurrent_instance_count
```


### organization_id
The organization ID got from Dynamsoft.

```python
DMDLSConnectionParameters.organization_id
```


### products
Sets the products to get the license for. Product values can be combined.
```python
DMDLSConnectionParameters.products
```
