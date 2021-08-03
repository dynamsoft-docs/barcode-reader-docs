---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - DMDLSConnectionParameters Class
description: This page shows the DMDLSConnectionParameters Class of Dynamsoft Barcode Reader for Python SDK.
keywords: DMDLSConnectionParameters, class, api reference, python
needAutoGenerateSidebar: false
pageStartVer: 8.6
---


# DMDLSConnectionParameters
Defines a struct to configure the parameters to connect to license server.  

## Typedefs

```python
class DMDLSConnectionParameters
```

---

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
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### standby_server_url
The URL of the standby license server.
```python
DMDLSConnectionParameters.standby_server_url
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### handshake_code
The handshake code.
```python
DMDLSConnectionParameters.handshake_code
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### session_password
The session password of the handshake code set in license server.
```python
DMDLSConnectionParameters.session_password
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### deployment_type
Sets the deployment type.
```python
DMDLSConnectionParameters.deployment_type
```
**Value Range**     
    A value of [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deployment_type) Enumeration items.
      
**Default Value**     
    `DM_DT_DESKTOP`
    
**See Also**      
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deployment_type)
      

### charge_way
Sets the charge way.
```python
DMDLSConnectionParameters.charge_way
```
**Value Range**     
    A value of [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) Enumeration items.
      
**Default Value**     
    `DM_CW_AUTO`
    
**See Also**      
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
      

### uuid_generation_method
Sets the method to generate UUID.
```python
DMDLSConnectionParameters.uuid_generation_method
```
**Value Range**     
    A value of [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.
      
**Default Value**     
    `DM_UUIDGM_RANDOM`
    
**See Also**      
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
      

### max_buffer_days
Sets the max days to buffer the license info.
```python
DMDLSConnectionParameters.max_buffer_days
```
**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    0

### limited_license_modules
Sets the license modules to use.
```python
DMDLSConnectionParameters.limited_license_modules
```
**Value Range**     
    Each list item can be any one of the [`EnumLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.
      
**Default Value**     
    None
    
**See Also**      
    [`EnumLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
      

### max_concurrent_instance_count
Sets the max concurrent instance count.
```python
DMDLSConnectionParameters::max_concurrent_instance_count
```
**Value Range**     
    [1,0x7fffffff]   
      
**Default Value**     
    1
**Remarks**       
    It works only when [charge_way](#charge_way) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.


### organization_id
The organization ID got from Dynamsoft.

```python
DMDLSConnectionParameters.organization_id
```

**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### products
Sets the products to get the license for. Product values can be combined.
```python
DMDLSConnectionParameters.products
```
**Value Range**     
    A combined value of [`EnumProduct`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
**Default Value**     
    `PROD_ALL`
