---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - DMDLSConnectionParameters Class
description: This page shows the DMDLSConnectionParameters Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: DMDLSConnectionParameters, class, api reference, java
needAutoGenerateSidebar: false
pageStartVer: 8.6
---


# DMDLSConnectionParameters

Defines a struct to configure the parameters to connect to license server.  



## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`mainServerURL`](#mainserverurl) | *String* |
| [`standbyServerURL`](#standbyserverurl) | *String* |
| [`handshakeCode`](#handshakecode) | *String* |
| [`sessionPassword`](#sessionpassword) | *String* |
| [`deploymentType`](#deploymenttype) | *int* |
| [`chargeWay`](#chargeway) | *int* |
| [`uuidGenerationMethod`](#uuidgenerationmethod) | *int* |
| [`maxBufferDays`](#maxbufferdays) | *int* |
| [`limitedLicenseModules`](#limitedlicensemodules) | *int[]* |
| [`maxConcurrentInstanceCount`](#maxconcurrentinstancecount) | *int* |
| [`organizationID`](#organizationid) | *String* |
| [`products`](#products) | *int* |


### mainServerURL

The URL of the license server.

```java
String com.dynamsoft.dbr.DMDLSConnectionParameters.mainServerURL
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### standbyServerURL

The URL of the standby license server.

```java
String com.dynamsoft.dbr.DMDLSConnectionParameters.standbyServerURL
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### handshakeCode

The handshake code.

```java
String com.dynamsoft.dbr.DMDLSConnectionParameters.handshakeCode
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null

### sessionPassword

The session password of the handshake code set in license server.

```java
String com.dynamsoft.dbr.DMDLSConnectionParameters.sessionPassword
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null


### deploymentType

Sets the deployment type.

```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.deploymentType
```

**Value Range**     
    Any one of the [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.   
      
**Default Value**     
    DM_DT_DESKTOP   
    
**See Also**      
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)    

### chargeWay

Sets the charge way.

```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.chargeWay
```

**Value Range**     
    Any one of the [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay) Enumeration items.   
      
**Default Value**     
    DM_CW_AUTO   
    
**See Also**      
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay)    


### uuidGenerationMethod

Sets the method to generate UUID.

```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.uuidGenerationMethod
```

**Value Range**     
    Any one of the [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.   
      
**Default Value**     
    DM_UUIDGM_RANDOM   
    
**See Also**      
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)    

### maxBufferDays

Sets the max days to buffer the license info.

```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.maxBufferDays
```

**Value Range**     
    [7,0x7fffffff]  
      
**Default Value**     
    7   
    

### limitedLicenseModules

Sets the license modules to use.

```java
int[] com.dynamsoft.dbr.DMDLSConnectionParameters.limitedLicenseModules
```

**Value Range**     
    Each array item can be any one of the [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.   
      
**Default Value**     
    null   
    
**See Also**      
    [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)    


### maxConcurrentInstanceCount
Sets the max concurrent instance count.
```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.maxConcurrentInstanceCount
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
```java
String com.dynamsoft.dbr.DMDLSConnectionParameters.organizationID
```
**Value Range**     
    Any string value   
      
**Default Value**     
    ""

### products
Sets the products to get the license for. Product values can be combined.
```java
int com.dynamsoft.dbr.DMDLSConnectionParameters.products
```
**Value Range**     
    A combined value of [`Product`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
**Default Value**     
    `PROD_ALL`
    

