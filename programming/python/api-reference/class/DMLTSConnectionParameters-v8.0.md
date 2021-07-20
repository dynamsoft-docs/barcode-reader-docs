---
layout: default-layout
title: Dynamsoft Barcode Reader Python API Reference - DMLTSConnectionParameters Class
description: This page shows the DMLTSConnectionParameters Class of Dynamsoft Barcode Reader for Python SDK.
keywords: DMLTSConnectionParameters, class, api reference, python
needAutoGenerateSidebar: false
---


# DMLTSConnectionParameters
Defines a struct to configure the parameters to connect to license tracking server.  

## Typedefs

```python
class DMLTSConnectionParameters
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


### main_server_url
The URL of the license tracking server.
```python
DMLTSConnectionParameters.main_server_url
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### standby_server_url
The URL of the standby license tracking server.
```python
DMLTSConnectionParameters.standby_server_url
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### handshake_code
The handshake code.
```python
DMLTSConnectionParameters.handshake_code
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

### session_password
The session password of the handshake code set in license tracking server.
```python
DMLTSConnectionParameters.session_password
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

### deployment_type
Sets the deployment type.
```python
DMLTSConnectionParameters.deployment_type
```
- **Value range**   
    A value of [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deployment_type) Enumeration items.
      
- **Default value**   
    `DM_DT_DESKTOP`
    
- **See also**  
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deployment_type)
      

### charge_way
Sets the charge way.
```python
DMLTSConnectionParameters.charge_way
```
- **Value range**   
    A value of [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) Enumeration items.
      
- **Default value**   
    `DM_CW_AUTO`
    
- **See also**  
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
      

### uuid_generation_method
Sets the method to generate UUID.
```python
DMLTSConnectionParameters.uuid_generation_method
```
- **Value range**   
    A value of [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.
      
- **Default value**   
    `DM_UUIDGM_RANDOM`
    
- **See also**  
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
      

### max_buffer_days
Sets the max days to buffer the license info.
```python
DMLTSConnectionParameters.max_buffer_days
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0

### limited_license_modules
Sets the license modules to use.
```python
DMLTSConnectionParameters.limited_license_modules
```
- **Value range**   
    Each list item can be any one of the [`EnumLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.
      
- **Default value**   
    None
    
- **See also**  
    [`EnumLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)
      
