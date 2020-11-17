---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Get Intermediate Results
description: This page shows how to get Intermediate Results.
keywords: intermediate results, IntermediateResult, IntermediateResultType, how-to guides
needAutoGenerateSidebar: false
--- 


# How-to Guides - Get Intermediate Results    

Apart from getting the results like barcode type, value, location, Dynamsoft Barcode Reader also provides APIs for you to get the intermediate results like original image, transformed grayscale image, binarized image, text zone, etc. for further analysis. To learn more about what intermediate results you can get, see enum [`IntermediateResultType`]({{ site.enumerations }}result-enums.html#intermediateresulttype).     



**Note**: You will need a separate license for the intermediate results such as transformed grayscale image, binarized image, and text zone. Getting the original image of the intermediate result doesn't require a separate license. The original image is the one that Dynamsoft Barcode Reader SDK uses to do the barcode reading. If the SDK fails to recognize the barcodes using the original image, try [`different settings`]({{ site.scenario_settings }}how-to-set-parameters.html) or [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx) for help.     



Here we will show how to get the original image and save it to your file system:

```cpp
    int iRet = -1;
    hBarcode = DBR_CreateInstance();
    DBR_InitLicense(hBarcode, "t0068MgAAAGotN***"); // Set the trial license

    DBR_GetRuntimeSettings(hBarcode,&runtimeSettings);
    runtimeSettings.intermediateResultTypes = IRT_ORIGINAL_IMAGE; 
    // Here we save it to the file system. You can also save it to memory according to your needs.
    runtimeSettings.intermediateResultSavingMode = IRSM_FILESYSTEM;
    iRet = DBR_UpdateRuntimeSettings(hBarcode,&runtimeSettings,szErrorMsg,256);
    // Set the folder path which stores the intermediate result (original image). Please make sure you have write permission to this folder.
    iRet = DBR_SetModeArgument(hBarcode, "IntermediateResultSavingMode", 0, "FolderPath", "D:\DBRLogs", szErrorMsg, 256); 
    if (iRet != DBR_OK) // If error occurs
    {
        printf("Error code: %d. Error message: %s\n", iRet, szErrorMsg);
        return -1;
    }
    DBR_DecodeFile(hBarcode, "<Your Image Path here>","");
    IntermediateResultArray* pResults;
    DBR_GetIntermediateResults(hBarcode, &pResults);

    DBR_DestroyInstance(hBarcode);
```


To learn more about intermediate result, please see [Intermediate Result]({{ site.scenario_settings }}intermediate-result.html).    


