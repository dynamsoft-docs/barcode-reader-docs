---   
layout: default-layout 
description: This article introduces how to perform image preprocessing according to scene characteristics to improve the success rate of DBR positioning code area
title: How to preprocess images based on different scenarios
keywords: image preprocessing
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/image-preprocessing-v7.6.0.html
---

# How to preprocess images based on different scenarios

The default configuration of `DBR` can handle most common scenarios. However, there are still some specific scenarios where the default configuration of `DBR` cannot locate the code area for decoding. For these specific scenarios, `DBR` has built-in [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes) to configure the image preprocessing algorithm. For different scenarios, a specific pre-processing algorithm can effectively improve the success rate when detecting areas of interest. This article will detail how to choose the appropriate pre-processing mode according to the scenario.

## Image preprocessing mode

`DBR` provides multiple image preprocessing modes to deal with different situations. After configuring the preprocessing modes, we can judge the effectiveness and make adjustments by looking at the intermediate result `IRT_PREPROCESSED_IMAGE`, which is the pre-processed grayscale image, and `IRT_BINARIZED_IMAGE`, which is the binarized image. Below we will introduce the scenarios where one of the four modes `IPM_GRAY_EQUALIZE`, `IPM_GRAY_SMOOTH`, `IPM_SHARPEN_SMOOTH` and `IPM_MORPHOLOGY` helps.

- `IPM_GRAY_EQUALIZE`

Gray-level equalization, which is used to enhance the contrast of an image. The sample image below demonstrates the effect, before and after grayscale equalization. The colours of the DataMatrix code on the original image (left) is too similar to the background color, which would makes decoding, as is, more difficult. The picture on the right is the result of preprocessing through `IPM_GRAY_EQUALIZE`. The DataMatrix becomes much more pronounced, which will make the subsequent decoding process much easier.

![Before Equalizing][1]![After Equalizing][2]

This mode has an additional parameter `Sensitivity`, where the default value is 5, and the range is [1~9]. When you set `IPM_GRAY_EQUALIZE`, `DBR` does not necessarily perform equalization but will judge whether to perform it based on the gray distribution and `Sensitivity` of the image itself. The greater the value of `Sensitivity`, the more likely that `DBR` will perform the equalization process. Setting it to 9 means that gray-scale equalization must be performed while 1 means to skip the process.

- `IPM_GRAY_SMOOTH`

Grayscale smoothing, which is used to reduce image noise and texture. The following sample image shows a grayscale image with more noise and its corresponding binarized image. Obviously, there are many noises which will be bad for barcode reading.

![Grayscale Before Smoothing][3]![Binarized Before Smoothing][5]   

After configuring `IPM_GRAY_SMOOTH` for smoothing. The noise of the binarized image are well handled well as shown below.

![Grayscal After Smoothing][4]![Binarizedd After Smoothing][6]  

- `IPM_SHARPEN_SMOOTH`

Sharpening and smoothing are used to reduce blur. The following sample image demonstrates the effect before and after processing in this mode. It is obvious that the processed picture is much clearer.

![Before Sharpen-Smoothing][7]![After Sharpen-Smoothing][8]

- `IPM_MORPHOLOGY`

This mode improves the binarization process by eliminating noise and filling holes through corrosion and expansion operations. It is suitable for whe the barcode area is polluted or destroyed. The following sample image demonstrates the effect.

![Before Morphology][9]![After Morphology][10]  

## Combination of pre-processing modes

If the image to be processed is more complicated, you can use the above image preprocessing modes in combination. After configuring multiple modes through [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes), `DBR` will try each mode in sequence until the number of successful decoded codes meets the expected value (`ExpectedBarcodeCount`), or the algorithm combination is exhausted.


## Sample Code
- Using RuntimeSetting

```c++
CBarcodeReader* reader = new CBarcodeReader();    
reader->InitLicense("your-license");    
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();    
reader->GetRuntimeSettings(runtimeSettings);
runtimeSettings->furtherModes.imagePreprocessingModes[0] = IPM_GRAY_EQUALIZE;
runtimeSettings->furtherModes.imagePreprocessingModes[1] = IPM_GRAY_SMOOTH;
runtimeSettings->furtherModes.imagePreprocessingModes[2] = IPM_SHARPEN_SMOOTH;
runtimeSettings->furtherModes.imagePreprocessingModes[3] = IPM_MORPHOLOGY;
char sError[512];    
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 0, "Sensitivity", "9", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeX", "10", sError, 512);  
reader->SetModeArgument("ImagePreprocessingModes", 1, "SmoothBlockSizeY", "10", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeX", "5", sError, 512);  
reader->SetModeArgument("ImagePreprocessingModes", 2, "SharpenBlockSizeY", "5", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperation", "Close", sError, 512);
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeX", "7", sError, 512);  
reader->SetModeArgument("ImagePreprocessingModes", 3, "MorphOperationKernelSizeY", "7", sError, 512);
reader->DecodeFile("file-path", "");
TextResultArray* paryResult = NULL;    
reader->GetAllTextResults(&paryResult);
CBarcodeReader::FreeTextResults(&paryResult);    
delete runtimeSettings;    
delete reader; 
```

- Use a JSON template

```Json
{      
    "Version":"3.0",      
    "ImageParameter":{      
        "Name":"IP1",      
        "BarcodeFormatIds":["BF_ALL"],          
        "ImagePreprocessingModes": [  
            {  
                "Mode": "IPM_GRAY_EQUALIZE",  
                "Sensitivity": 9  
            },  
            {  
                "Mode": "IPM_GRAY_SMOOTH",  
                "SmoothBlockSizeX": 10,  
                "SmoothBlockSizeY": 10  
            },  
            {  
                "Mode": "IPM_SHARPEN_SMOOTH",
                "SharpenBlockSizeX": 5,  
                "SharpenBlockSizeY": 5   
            },  
            {  
                "Mode": "IPM_MORPHOLOGY",  
                "MorphOperation": "Close",  
                "MorphOperationKernelSizeX": 7,  
                "MorphOperationKernelSizeY": 7  
            }  
        ]    
    }      
}     
```

[1]:assets/image-preprocessing/gray-equalize-sample-1.png
[2]:assets/image-preprocessing/gray-equalize-sample-2.png
[3]:assets/image-preprocessing/gray-smooth-sample-1.png
[4]:assets/image-preprocessing/gray-smooth-sample-2.png
[5]:assets/image-preprocessing/gray-smooth-sample-3.png
[6]:assets/image-preprocessing/gray-smooth-sample-4.png
[7]:assets/image-preprocessing/before-sharpen-sample.png
[8]:assets/image-preprocessing/after-sharpen-sample.png
[9]:assets/image-preprocessing/before-close-sample.png
[10]:assets/image-preprocessing/after-close-sample.png
