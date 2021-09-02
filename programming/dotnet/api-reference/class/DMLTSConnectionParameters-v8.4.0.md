---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - DMLTSConnectionParameters Class
description: This page shows the DMLTSConnectionParameters Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: DMLTSConnectionParameters, class, api reference, .Net
needAutoGenerateSidebar: false
---


# DMLTSConnectionParameters

Defines a struct to configure the parameters to connect to license tracking server.  

```csharp
public class DMLTSConnectionParameters
```  


## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`MainServerURL`](#mainserverurl) | *string* |
| [`StandbyServerURL`](#standbyserverurl) | *string* |
| [`HandshakeCode`](#handshakecode) | *string* |
| [`SessionPassword`](#sessionpassword) | *string* |
| [`DeploymentType`](#deploymenttype) | *EnumDMDeploymentType* |
| [`ChargeWay`](#chargeway) | *EnumDMChargeWay* |
| [`UUIDGenerationMethod`](#uuidgenerationmethod) | *EnumDMUUIDGenerationMethod* |
| [`MaxBufferDays`](#maxbufferdays) | *int* |
| [`LimitedLicenseModules`](#limitedlicensemodules) | *EnumDMLicenseModule[]* |
| [`MaxConcurrentInstanceCount`](#maxconcurrentinstancecount) | *int* |
| [`OrganizationID`](#organizationid) | *string* |
| [`Products`](#products) | *int* |


### MainServerURL

The URL of the license tracking server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.MainServerURL
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null
    
- **Remarks**  
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### StandbyServerURL

The URL of the standby license tracking server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.StandbyServerURL
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null
    
- **Remarks**  
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.

- **Remarks**   
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification.   


### HandshakeCode

The handshake code.

```csharp
string Dynamsoft.DMLTSConnectionParameters.HandshakeCode
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null

### SessionPassword

The session password of the handshake code set in license tracking server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.SessionPassword
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null


### DeploymentType

Sets the deployment type.

```csharp
EnumDMDeploymentType Dynamsoft.DMLTSConnectionParameters.DeploymentType
```

- **Value range**   
    Any one of the [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.   
      
- **Default value**   
    DM_DT_DESKTOP   
    
- **See also**  
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)    

### ChargeWay

Sets the charge way.

```csharp
EnumDMChargeWay Dynamsoft.DMLTSConnectionParameters.ChargeWay
```

- **Value range**   
    Any one of the [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay) Enumeration items.   
      
- **Default value**   
    DM_CW_AUTO   
    
- **See also**  
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay)    


### UUIDGenerationMethod

Sets the method to generate UUID.

```csharp
EnumDMUUIDGenerationMethod Dynamsoft.DMLTSConnectionParameters.UUIDGenerationMethod
```

- **Value range**   
    Any one of the [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.   
      
- **Default value**   
    DM_UUIDGM_RANDOM   
    
- **See also**  
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)    

### MaxBufferDays

Sets the max days to buffer the license info.

```csharp
int Dynamsoft.DMLTSConnectionParameters.MaxBufferDays
```

- **Value range**   
    [7,0x7fffffff]  
      
- **Default value**   
    7  
    

### LimitedLicenseModules

Sets the license modules to use.

```csharp
EnumDMLicenseModule[] Dynamsoft.DMLTSConnectionParameters.LimitedLicenseModules
```

- **Value range**   
    Each array item can be any one of the [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.   
      
- **Default value**   
    null   
    
- **See also**  
    [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)    


### MaxConcurrentInstanceCount
Sets the max concurrent instance count.
```csharp
int Dynamsoft.DMLTSConnectionParameters.MaxConcurrentInstanceCount
```
- **Value range**   
    [1,0x7fffffff]   
      
- **Default value**   
    1
- **Remarks**   
    It works only when [ChargeWay](#chargeway) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.


### OrganizationID
The organization ID got from Dynamsoft.

```csharp
string Dynamsoft.DMLTSConnectionParameters.OrganizationID
```

- **Value range**   
    Any string value   
      
- **Default value**   
    null


### Products
Sets the products to get the license for. Product values can be combined.
```csharp
int Dynamsoft.DMLTSConnectionParameters.Products
```
- **Value range**   
    A combined value of [`Product`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
- **Default value**   
    `PROD_ALL`
