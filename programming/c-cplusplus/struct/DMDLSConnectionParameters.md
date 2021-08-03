---
layout: default-layout
title: Dynamsoft Barcode Reader C & C++ Struct - DM_DLSConnectionParameters
description: This page shows the DM_DLSConnectionParameters struct of Dynamsoft Barcode Reader for C & C++ Language.
keywords: DM_DLSConnectionParameters, struct, c, c++
needAutoGenerateSidebar: false
pageStartVer: 8.6
---


# DM_DLSConnectionParameters
Defines a struct to configure the parameters to connect to license  server.  

## Typedefs

```cpp
typedef struct tagDM_DLSConnectionParameters  DM_DLSConnectionParameters
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`mainServerURL`](#mainserverurl) | *char\** |
| [`standbyServerURL`](#standbyserverurl) | *char\** |
| [`handshakeCode`](#handshakecode) | *char\** |
| [`sessionPassword`](#sessionpassword) | *char\** |
| [`deploymentType`](#deploymenttype) | [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) |
| [`chargeWay`](#chargeway) | [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) |
| [`UUIDGenerationMethod`](#uuidgenerationmethod) | [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) |
| [`maxBufferDays`](#maxbufferdays) | *int* |
| [`limitedLicenseModulesCount`](#limitedlicensemodulescount) | *int* |
| [`limitedLicenseModules`](#limitedlicensemodules) | [`DM_LicenseModule*`]({{ site.enumerations }}other-enums.html#dm_licensemodule) |
| [`maxConcurrentInstanceCount`](#maxconcurrentinstancecount) | *int* |
| [`organizationID`](#organizationid) | *char\** |
| [`products`](#products) | *int* |
| [`reserved`](#reserved) | *char\[52\]* |


### mainServerURL
The URL of the license  server.
```cpp
char* tagDM_DLSConnectionParameters::mainServerURL
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license  servers for online verification.   


### standbyServerURL
The URL of the standby license  server.
```cpp
char* tagDM_DLSConnectionParameters::standbyServerURL
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license  servers for online verification.   


### handshakeCode
The handshake code.
```cpp
char* tagDM_DLSConnectionParameters::handshakeCode
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### sessionPassword
The session password of the handshake code set in license  server.
```cpp
char* tagDM_DLSConnectionParameters::sessionPassword
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### deploymentType
Sets the deployment type.
```cpp
DM_DeploymentType tagDM_DLSConnectionParameters::deploymentType
```
**Value Range**     
    A value of [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.
      
**Default Value**     
    `DM_DT_DESKTOP`
    
**See Also**      
    [`DM_DeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)
      

### chargeWay
Sets the charge way.
```cpp
DM_ChargeWay tagDM_DLSConnectionParameters::chargeWay
```
**Value Range**     
    A value of [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway) Enumeration items.
      
**Default Value**     
    `DM_CW_AUTO`
    
**See Also**      
    [`DM_ChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeway)
      

### UUIDGenerationMethod
Sets the method to generate UUID.
```cpp
DM_UUIDGenerationMethod tagDM_DLSConnectionParameters::UUIDGenerationMethod
```
**Value Range**     
    A value of [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.
      
**Default Value**     
    `DM_UUIDGM_RANDOM`
    
**See Also**      
    [`DM_UUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)
      

### maxBufferDays
Sets the max days to buffer the license info.
```cpp
int tagDM_DLSConnectionParameters::maxBufferDays
```
**Value Range**     
    [7,0x7fffffff]   
      
**Default Value**     
    7

### limitedLicenseModulesCount
Sets the count of license modules to use.
```cpp
int tagDM_DLSConnectionParameters::limitedLicenseModulesCount
```
**Value Range**     
    [0,0x7fffffff]   
      
**Default Value**     
    0

### limitedLicenseModules
Sets the license modules to use.
```cpp
DM_LicenseModule* tagDM_DLSConnectionParameters::limitedLicenseModules
```
**Value Range**     
    Each array item can be any one of the [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.
      
**Default Value**     
    NULL
    
**See Also**      
    [`DM_LicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)

      
### maxConcurrentInstanceCount
Sets the max concurrent instance count.
```cpp
int tagDM_DLSConnectionParameters::maxConcurrentInstanceCount
```
**Value Range**     
    [1,0x7fffffff]   
      
**Default Value**     
    1
**Remarks**       
    It works only when [chargeWay](#chargeway) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.



### organizationID
The organization ID got from Dynamsoft.
```cpp
char* tagDM_DLSConnectionParameters::organizationID
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### products
Sets the products to get the license for. Product values can be combined.
```cpp
int tagDM_DLSConnectionParameters::products
```
**Value Range**     
    A combined value of [`Product`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
**Default Value**     
    `PROD_ALL`
    

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagDM_DLSConnectionParameters::reserved[52]
```
