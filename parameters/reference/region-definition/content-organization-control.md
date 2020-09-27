---
layout: default-layout
title: Dynamsoft Barcode Reader Parameter Reference for RegionDefinition Object - Content Organization Control Parameters
description: This article shows Dynamsoft Barcode Reader Parameter Reference for RegionDefinition Object - Content Organization Control Parameters.
keywords: Name, FormatSpecificationNameArray, RegionDefinition, content organization control parameters, parameter reference, parameter 
needAutoGenerateSidebar: true
needGenerateH3Content: false
---

# RegionDefinition Object - Content Organization Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Name`](#name) | The name of the RegionDefinition object. |
 | [`RegionDefinition.FormatSpecificationNameArray`](#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 
 
---

## Name
The name of the RegionDefinition object. 

**Remark**    
It must be a unique name.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| RegionDefinition | Name | *string* | It must be a mandatory setting value. |

**Json Parameter Example**   
```
{
    "Name":"Region1"
}
```

&nbsp;


## FormatSpecificationNameArray
The names of the referenced FormatSpecification object(s).

**Remark**   
An array item is a name of any available `FormatSpecifications`.   

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| RegionDefinition | FormatSpecificationNameArray | *string Array* | `null` |

   
**Json Parameter Example**   
```
{
    "FormatSpecificationNameArray":[
        "FormatSpecification1",
        "FormatSpecification2"
    ]
}
```

