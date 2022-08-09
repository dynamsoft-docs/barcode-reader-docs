---   
layout: default-layout
description: This article introduces how to configure the binarization parameters
title: How to configure the binarization parameters
keywords: BinarizationModes, IntermediateResultType.IRT_BINARIZED_IMAGE  
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/how-to-set-binarization-modes-v7.6.0.html
---

# How to configure the binarization parameters

This article introduces how to adjust the configurable parameters in the binarization process to obtain better results. DBR provides two binarization modes, BM_THRESHOLD and BM_LOCAL_BLOCK.

You can set the intermediate result IRT_BINARIZED_IMAGE to output and observe the effect of the binary image in the process of adjusting parameters. We will introduce the two methods respectively in the following sections.

## BM_THRESHOLD

`BM_THRESHOLD` uses a global threshold to binarize the image. If the gray value of the pixel is less than the threshold, it will be black in the binary image, otherwise it will be white. This mode has 2 additional argument parameters that can be set:

- BinarizationThreshold   

The global threshold used for binarization. By default, the algorithm will automatically calculate the threshold based on the image, or you can specify the threshold manually. 

- ImagePreprocessingModesIndex   

Sets the binarization parameter for specific image pre-processing.

## BM_LOCAL_BLOCK

As mentioned above, we use a unified threshold for binarization, but this might not be good in all cases. If an image has different lighting conditions in different areas, `BM_LOCAL_BLOCK` can help. In this case, our algorithm determines the threshold for a pixel based on a small region around it, which makes it more adaptive and gives better results.

`BM_LOCAL_BLOCK` has the followings arguments:

- BlockSizeX   
- BlockSizeY  
- EnableFillBinaryVacancy  
- ImagePreprocessingModesIndex  
- ThreshValueCoefficient  

### BlockSizeX and BlockSizeY  

You can set the width and height of neighbour pixels when calculating the binarization threshold. Generally, it is recommended to set BlockSizeX and BlockSizeY to 5 - 8 times ModuleSize.

### EnableFillBinaryVacancy

This parameter controls whether to fill the vacant hollows. The default value of this parameter is true. 

When the ModuleSize of the picture is large and the BlockSize is small, some bars or dots of the barcode after binarization will be hollowed out. Turning it on can prevent this from happening. 

The following images show the original image, enabled and disabled the parameter individually.

![binarization-modes-enablefillbinaryvacancy-original-image-sample][5]  
Original Image

![binarization-modes-enabled-fillbinaryvacancy-image-sample][6]
![binarization-modes-disabled-fillbinaryvacancy-image-sample][7]  
Left: Enable EnableFillBinaryVacancy. Right: Disable EnableFillBinaryVacancy

### ThreshValueCoefficient  

This parameter is an additional constant that needs to be subtracted when calculating the binarization threshold. Usually it is positive, but it can also be zero or negative.

### ImagePreprocessingModesIndex

Sets the binarization parameter for specific image pre-processing.

## Example 

In the following sections, we will introduce when and how to use BinarizationModes.

### Different lighting conditions

![uneven-illumination][8]

The picture above has different lighting conditions in different areas. If we use BM_THRESHOLD to set a global value as a threshold, it will be difficult to yield good results. In this case, it is more suitable to use BM_LOCAL_BLOCK to set an adaptive binarization threshold. 

The following images show the effects of BM_THRESHOLD (global thresholding) and BM_LOCAL_BLOCK (adaptive thresholding) individually for an image with varying illumination:

![dm-threshold][9]
![dm-local-block][10]

### Obvious contrast between the barcode and the background but has texture interference

Below we will talk about when and how to use BM_THRESHOLD. In the image below, the contrast between the barcode and the background is very obvious, the gray-scale pixel values are quite different, but the surface of the background is not smooth and has a lot of texture interference.

![noise][11]

If we use BM_LOCAL_BLOCK method, textures on the background will also appear in the binary image, which is not what we want, as follows:

![texture-local-block][12]

Considering that the barcode colour and the background colour are quite different, it is more appropriate to use BM_THRESHOLD, the effect is as follows:

![texture-threshold][13]

### How to adjust BlockSize

![binarization-modes-original-image-sample][1]  

If we use the default binarization parameters, the binary image will be like this:

![binarization-modes-binarized-image-sample1][2]   

Apparently, the three finder patterns of the QR Code have been destroyed, resulting in the failure to localize the QR code. Here we change BlockSizeX and BlockSizeY to get the following binary image. In this image, the finder patterns of the QR Code are very clear and can be successfully localized and decoded.

![binarization-modes-binarized-image-sample2][3]  

Below is the code snippet.

### Set via RuntimeSettings

- Code snippet in C++:  

``` c++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("Insert your license here");

PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
reader->GetRuntimeSettings(runtimeSettings); // Get the current RuntimeSettings
runtimeSettings->binarizationModes[0] = BM_LOCAL_BLOCK; // Set the binarization mode
runtimeSettings->intermediateResultSavingMode = IRSM_FILESYSTEM; // Save the intermediate result to file system
runtimeSettings->intermediateResultTypes = IRT_BINARIZED_IMAGE; // Export binarized images as intermediate result

char sError[512];
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512); // Update RuntimeSettings
error = reader->SetModeArgument("BinarizationModes", 0, "BlockSizeX", "10"); 
error = reader->SetModeArgument("BinarizationModes", 0, "BlockSizeY", "10");
error = reader->SetModeArgument("IntermediateResultSavingMode", 0, "FolderPath", "Insert the output folder path here"); // Replace "Insert the output folder path here" with your own
reader->DecodeFile("Insert your image path here", "") // Start decoding

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); // Get results
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); // Print results
}

CBarcodeReader::FreeTextResults(&paryResult);
delete runtimeSettings;
delete reader;
```  

### Set via JSON template
- JSON File:  

``` json
{
    "Version":"3.0",
    "ImageParameterContentArray":[
        {
            "Name":"Test1",
            "FormatSpecificationNameArray":["FP_1"],
            "BinarizationModes":["BM_LOCAL_BLOCK(10, 10)"],
            "IntermediateResultSavingMode":"IRSM_FILESYSTEM(Insert the output folder path here)",
            "IntermediateResultTypes":["IRT_BINARIZED_IMAGE"]
        }
    ],
    "FormatSpecificationArray":[
        {
            "Name":"FP_1",
            "BarcodeFormatIds":["BF_PDF417","BF_QR_CODE","BF_DATAMATRIX"],
            "MirrorMode":"MM_Both"
        }
    ]
}
```

``` C++
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("Insert your license here");

char sError[512];
reader->InitRuntimeSettingsWithFile("Insert your JSON file path here", CM_OVERWRITE, sError, 512);
reader->DecodeFile("Insert your image file path here", "");

TextResultArray* paryResult = NULL;
reader->GetAllTextResults(&paryResult); // Get results
int iCount = paryResult->resultsCount;
for (int i = 0; i < iCount; i++)
{
    printf("Text: %s", paryResult->results[i]->barcodeText); // Print results
}

CBarcodeReader::FreeTextResults(&paryResult);
delete reader;
```

Final Result:

``` md
Text: Dynamsoft's Barcode Reader SDK enables you to efficiently embed barcode reading functionality in your web, desktop or mobile application using just a few lines of code.
```  

If you use the enhanced module IntermediateResult, you can find the followings in the output result directory:
![binarization-modes-original-intermediate-results][4]

[1]:assets\how-to-set-binarization-modes\binarization-modes-original-image-sample.png
[2]:assets\how-to-set-binarization-modes\binarization-modes-binarized-image-sample1.png
[3]:assets\how-to-set-binarization-modes\binarization-modes-binarized-image-sample2.png
[4]:assets\how-to-set-binarization-modes\binarization-modes-original-intermediate-results.png
[5]:assets\how-to-set-binarization-modes\binarization-modes-enablefillbinaryvacancy-original-image-sample.png
[6]:assets\how-to-set-binarization-modes\binarization-modes-enabled-fillbinaryvacancy-image-sample.png
[7]:assets\how-to-set-binarization-modes\binarization-modes-disabled-fillbinaryvacancy-image-sample.png
[8]:assets\how-to-set-binarization-modes\uneven-illumination.png
[9]:assets\how-to-set-binarization-modes\dm-threshold.png
[10]:assets\how-to-set-binarization-modes\dm-local-block.png
[11]:assets\how-to-set-binarization-modes\noise.png
[12]:assets\how-to-set-binarization-modes\texture-bm-local-block.png
[13]:assets\how-to-set-binarization-modes\texture-bm-threshold.png
