---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - DM_LTSConnectionParameters
description: This page shows the DM_LTSConnectionParameters struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: DM_LTSConnectionParameters, struct, c, c++
needAutoGenerateSidebar: false
---


# DM_LTSConnectionParameters
Defines a struct to configure the parameters to connect to license tracking server.  

## Typedefs

```cpp
typedef struct tagDM_LTSConnectionParameters  DM_LTSConnectionParameters
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`mainServerURL`](#mainserverurl) | *const char\** |
| [`standbyServerURL`](#standbyserverurl) | *const char\** |
| [`handshakeCode`](#handshakecode) | *const char\** |
| [`sessionPassword`](#sessionpassword) | *const char\** |
| [`deploymentType`](#deploymenttype) | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) |
| [`chargeWay`](#chargeway) | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) |
| [`UUIDGenerationMethod`](#uuidgenerationmethod) | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) |
| [`maxBufferDays`](#maxbufferdays) | *int* |
| [`limitedLicenseModulesCount`](#limitedlicensemodulescount) | *int* |
| [`limitedLicenseModules`](#limitedlicensemodules) | [`DM_LicenseModule*`]({{ site.enumerations }}other-enums.html#dm_licensemodule) |
| [`maxConcurrentInstanceCount`](#maxconcurrentinstancecount) | *int* |
| [`reserved`](#reserved) | *char\[60\]* |


### mainServerURL
The URL of the license tracking server.
```cpp
const char*  tagDM_LTSConnectionParameters::mainServerURL
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### standbyServerURL
The URL of the standby license tracking server.
```cpp
const char*  tagDM_LTSConnectionParameters::standbyServerURL
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### handshakeCode
The handshake code.
```cpp
const char*  tagDM_LTSConnectionParameters::handshakeCode
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

### sessionPassword
The session password of the handshake code set in license tracking server.
```cpp
const char*  tagDM_LTSConnectionParameters::sessionPassword
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

### deploymentType
Sets the deployment type.
```cpp
DM_DeploymentType tagDM_LTSConnectionParameters::deploymentType
```
- **Value range**   
    A value of [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.
      
- **Default value**   
    `DM_DT_DESKTOP`
    
- **See also**  
    [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)
      

### chargeWay
Sets the charge way.
```cpp
DM_ChargeWay tagDM_LTSConnectionParameters::chargeWay
```
- **Value range**   
    A value of [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) Enumeration items.
      
- **Default value**   
    `DM_CW_AUTO`
    
- **See also**  
    [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
      

### UUIDGenerationMethod
Sets the method to generate UUID.
```cpp
DM_UUIDGenerationMethod tagDM_LTSConnectionParameters::UUIDGenerationMethod
```
- **Value range**   
    A value of [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.
      
- **Default value**   
    `DM_UUIDGM_RANDOM`
    
- **See also**  
    [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
      

### maxBufferDays
Sets the max days to buffer the license info.
```cpp
int tagDM_LTSConnectionParameters::maxBufferDays
```
- **Value range**   
    [7,0x7fffffff]   
      
- **Default value**   
    7

### limitedLicenseModulesCount
Sets the count of license modules to use.
```cpp
int tagDM_LTSConnectionParameters::limitedLicenseModulesCount
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0

### limitedLicenseModules
Sets the license modules to use.
```cpp
DM_LicenseModule* tagDM_LTSConnectionParameters::limitedLicenseModules
```
- **Value range**   
    Each array item can be any one of the [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.
      
- **Default value**   
    NULL
    
- **See also**  
    [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)

      
### maxConcurrentInstanceCount
Sets the max concurrent instance count.
```cpp
int tagDM_LTSConnectionParameters::maxConcurrentInstanceCount
```
- **Value range**   
    [1,0x7fffffff]   
      
- **Default value**   
    1
- **Remarks**   
    It works only when [chargeWay](#chargeway) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.


### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagDM_LTSConnectionParameters::reserved[60]
```
