---
layout: default-layout
title: Dynamsoft Barcode Reader .NET API Reference - DMLTSConnectionParameters Class
description: This page shows the DMLTSConnectionParameters Class of Dynamsoft Barcode Reader for .NET SDK.
keywords: DMLTSConnectionParameters, class, api reference, .Net
needAutoGenerateSidebar: false
---


# DMLTSConnectionParameters
`Deprecated`. Use [DMDLSConnectionParameters](DMDLSConnectionParameters.md) instead.  

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

The URL of the license server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.MainServerURL
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null
    
**Remarks**      
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### StandbyServerURL

The URL of the standby license server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.StandbyServerURL
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null
    
**Remarks**      
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.

**Remarks**       
    If you choose "Dynamsoft-hosting", then no need to change the value of MainServerURL and StandbyServerURL. When both are set to null (default value), it will connect to Dynamsoft's license servers for online verification.   


### HandshakeCode

The handshake code.

```csharp
string Dynamsoft.DMLTSConnectionParameters.HandshakeCode
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null

### SessionPassword

The session password of the handshake code set in license server.

```csharp
string Dynamsoft.DMLTSConnectionParameters.SessionPassword
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null


### DeploymentType

Sets the deployment type.

```csharp
EnumDMDeploymentType Dynamsoft.DMLTSConnectionParameters.DeploymentType
```

**Value Range**     
    Any one of the [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype) Enumeration items.   
      
**Default Value**     
    DM_DT_DESKTOP   
    
**See Also**      
    [`EnumDMDeploymentType`]({{ site.enumerations }}other-enums.html#dm_deploymenttype)    

### ChargeWay

Sets the charge way.

```csharp
EnumDMChargeWay Dynamsoft.DMLTSConnectionParameters.ChargeWay
```

**Value Range**     
    Any one of the [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay) Enumeration items.   
      
**Default Value**     
    DM_CW_AUTO   
    
**See Also**      
    [`EnumDMChargeWay`]({{ site.enumerations }}other-enums.html#dm_chargeWay)    


### UUIDGenerationMethod

Sets the method to generate UUID.

```csharp
EnumDMUUIDGenerationMethod Dynamsoft.DMLTSConnectionParameters.UUIDGenerationMethod
```

**Value Range**     
    Any one of the [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod) Enumeration items.   
      
**Default Value**     
    DM_UUIDGM_RANDOM   
    
**See Also**      
    [`EnumDMUUIDGenerationMethod`]({{ site.enumerations }}other-enums.html#dm_uuidgenerationmethod)    

### MaxBufferDays

Sets the max days to buffer the license info.

```csharp
int Dynamsoft.DMLTSConnectionParameters.MaxBufferDays
```

**Value Range**     
    [7,0x7fffffff]  
      
**Default Value**     
    7  
    

### LimitedLicenseModules

Sets the license modules to use.

```csharp
EnumDMLicenseModule[] Dynamsoft.DMLTSConnectionParameters.LimitedLicenseModules
```

**Value Range**     
    Each array item can be any one of the [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule) Enumeration items.   
      
**Default Value**     
    null   
    
**See Also**      
    [`EnumDMLicenseModule`]({{ site.enumerations }}other-enums.html#dm_licensemodule)    


### MaxConcurrentInstanceCount
Sets the max concurrent instance count.
```csharp
int Dynamsoft.DMLTSConnectionParameters.MaxConcurrentInstanceCount
```
**Value Range**     
    [1,0x7fffffff]   
      
**Default Value**     
    1
**Remarks**       
    It works only when [ChargeWay](#chargeway) is setting to DM_CW_CONCURRENT_INSTANCE_COUNT
    It is the total number of instances used by multiple processes. For example, if there are two .EXE are running on the server and each .EXE may have 10 instances at most, then you should set maxConcurrentInstanceCount to 20.


### OrganizationID
The organization ID got from Dynamsoft.

```csharp
string Dynamsoft.DMLTSConnectionParameters.OrganizationID
```

**Value Range**     
    Any string value   
      
**Default Value**     
    null


### Products
Sets the products to get the license for. Product values can be combined.
```csharp
int Dynamsoft.DMLTSConnectionParameters.Products
```
**Value Range**     
    A combined value of [`Product`]({{ site.enumerations }}other-enums.html#product) Enumeration items
      
**Default Value**     
    `PROD_ALL`
