---   
layout: default-layout
description: How to configure DeblurLevel
title: How to configure DeblurLevel
keywords: deblur level
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/deblur-level.html
---

# How to configure DeblurLevel

In this part, we will introduce the parameter that specifies the attempt level of sampling decoding - [`DeblurLevel`]({{ site.parameters_reference }}deblur-level.html). There are a variety of approaches in DBR algorithm for sample decoding. The DeblurLevel can be set to a range of 0 to 9. The larger the value, the more preprocessing modes the DBR algorithm can apply for decoding, the more likely it is to extract the barcode value, and the slower it will be if the decoding fails. Users could adjust the value based on their actual situation. 

You could configure the DeblurLevel in RuntimeSetting:

```cpp
CBarcodeReader * reader = new CBarcodeReader();  
reader->InitLicense("Input your License");  
char error[512];  
PublicRuntimeSettings *settings = new PublicRuntimeSettings();     
read->GetRuntimeSettings(settings);  //Load current RuntimeSettings
settings->deblurLevel = 9;                 //Configure deblurLevel   
reader->UpdateRunTimeSettings(settings);   //Update RuntimeSettings  
ret = reader->DecodeFile("Input file path","");   //Decoding 
TextResultArray *pResults = NULL;                  
Reader->GetAllTextResults(&pResults);       //Get result    
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResults);  
delete reader;  
delete settings;  
```

You could also configure the parameter by loading JSON template. 

```javascript
{  
    "Version":"3.0",  
    "ImageParameter":  
    {  
        "Name":"IP1",  
        "BarcodeFormatIds":["BF_ALL"],  
        "DeblurLevel":9  
    }  
} 
```



