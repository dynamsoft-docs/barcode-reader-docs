---
layout: default-layout
title: Dynamsoft Barcode Reader Java API Reference - DMLTSConnectionParameters Class
description: This page shows the DMLTSConnectionParameters Class of Dynamsoft Barcode Reader for Java SDK API Reference.
keywords: DMLTSConnectionParameters, class, api reference, java
needAutoGenerateSidebar: false
---


# DMLTSConnectionParameters

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
String com.dynamsoft.dbr.DMLTSConnectionParameters.mainServerURL
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### standbyServerURL

The URL of the standby license server.

```java
String com.dynamsoft.dbr.DMLTSConnectionParameters.standbyServerURL
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### handshakeCode

The handshake code.

```java
String com.dynamsoft.dbr.DMLTSConnectionParameters.handshakeCode
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null

### sessionPassword

The session password of the handshake code set in license server.

```java
String com.dynamsoft.dbr.DMLTSConnectionParameters.sessionPassword
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null


### deploymentType

Sets the deployment type.

```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.deploymentType
```

- **Value range**   
    Any one of the [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.   
      
- **Default value**   
    DM_DT_DESKTOP   
    
- **See also**  
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)    

### chargeWay

Sets the charge way.

```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.chargeWay
```

- **Value range**   
    Any one of the [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay) Enumeration items.   
      
- **Default value**   
    DM_CW_AUTO   
    
- **See also**  
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay)    


### uuidGenerationMethod

Sets the method to generate UUID.

```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.uuidGenerationMethod
```

- **Value range**   
    Any one of the [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.   
      
- **Default value**   
    DM_UUIDGM_RANDOM   
    
- **See also**  
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)    

### maxBufferDays

Sets the max days to buffer the license info.

```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.maxBufferDays
```

- **Value range**   
    [7,0x7fffffff]  
      
- **Default value**   
    7   
    

### limitedLicenseModules

Sets the license modules to use.

```java
int[] com.dynamsoft.dbr.DMLTSConnectionParameters.limitedLicenseModules
```

- **Value range**   
    Each array item can be any one of the [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.   
      
- **Default value**   
    null   
    
- **See also**  
    [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)    


### maxConcurrentInstanceCount
Sets the max concurrent instance count.
```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.maxConcurrentInstanceCount
```
- **Value range**   
    [1,0x7fffffff]   
      
- **Default value**   
    1
- **Remarks**   
    It works only when [chargeWay](#chargeway) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.


### organizationID
The organization ID got from Dynamsoft.
```java
String com.dynamsoft.dbr.DMLTSConnectionParameters.organizationID
```
- **Value range**   
    Any string value   
      
- **Default value**   
    ""

### products
Sets the products to get the license for. Product values can be combined.
```java
int com.dynamsoft.dbr.DMLTSConnectionParameters.products
```
- **Value range**   
    A combined value of [`Product`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
- **Default value**   
    `PROD_ALL`
    

