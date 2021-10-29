---
layout: default-layout
title: How to set image scaling and colour transformation
description: This article introduces how to set image scaling, colour image grayscale, grayscale colour inversion and its usage scenarios.
keywords: scale, grayscale
needAutoGenerateSidebar: false
---

# How to set image scaling and colour transformation

Before DBR processes the image, you can set the image scaling, convert colour image to grayscale, and set grayscale transformation. This article will introduce when to enable it and how to configure the parameters.

## Image scaling

DBR may take a while to process the image if it is very large. The parameter [`ScaleDownThreshold`]({{ site.parameters_reference }}scale-down-threshold.html) is used to set the threshold for shrinking the image. The default value is 2300. 

If the shorter side length of the image is larger than [`ScaleDownThreshold`]({{ site.parameters_reference }}scale-down-threshold.html), the library will shrink the image by half until the shorter side is less than the threshold.

You can speed up the barcode localization process by setting this parameter to shrink the image size. It makes a difference for large images, but not applicable for small-size images. 

## Convert colour image to grayscale

If the image is a colour image, DBR will convert it to grayscale first for further process. You can use [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) to set the grayscale mode. [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) has three arguments: 

**BlueChannelWeight**: Sets the weight value of Blue Colour Channel used for converting a colour image to a grayscale image.
**GreenChannelWeight**: Sets the weight value of Green Colour Channel used for converting a colour image to a grayscale image.
**RedChannelWeight**: Sets the weight value of Red Colour Channel used for converting a colour image to a grayscale image.

The value range of the above arguments is [-1, 1000]. The default value is -1, which means the weight value will be set automatically by the SDK. You can use the intermediate result IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE to obtain the grayscaled image.

In the following JSON template, we configured 4
[`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) to convert colour images to grayscale images. The DBR algorithm will cycle these 4 modes in turn until the number of barcode areas >= ExpectedBarcodesCount.

```json
{
    "ImageParameter": {
        "ColourConversionModes": [
	        // Use the default mode for grayscale process
            {
                "Mode": "CICM_GENERAL"
            }, 
	        // Use the Blue channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 1000, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 0
            }, 
	        // Use the Red channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 1000, 
                "GreenChannelWeight": 0
            }, 
	        // Use the Green channel only for grayscale process
            {
                "Mode": "CICM_GENERAL", 
                "BlueChannelWeight": 0, 
                "RedChannelWeight": 0, 
                "GreenChannelWeight": 1000
            }
        ]
    }, 
    "Version": "3.0"
}
```

The following is an original image. We will use the above settings in the template to do the grayscale process, and then observe the grayscaled image through intermediate result IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE.

![original image before colour conversion][1]

The followings show the grayscaled images respectively using the default mode, the red channel only, the blue channel only, and the green channel only. We can see that using the red channel only produces the best grayscaled image. So for this kind of scenario, it is recommended to use the Red channel only for grayscale process.

![default grayscale image][2]![gray image only by red channel][3]

![gray image only by blue channel][4]![gray image only by green channel][5]

## Grayscale colour inversion transformation

[`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes) is used to set colour inversion transformation of the grayscale image. 

Generally, the barcode is dark on a light background. But in some situations, the barcodes are inverted - light barcodes on a dark background, as shown below. In this case, you need to set GrayscaleTransformationMode to GTM_INVERTED in order to read the barcode.

![inverted gray image][6]

If there are different barcode colours and backgrounds in the image(s), you can set multiple modes in the [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes). If the parameter is configured as
`["GTM_ORIGINAL", "GTM_INVERTED"]`, DBR will try two modes in turn to read both normal barcodes and inverted barcodes.

But if most of the barcodes are inverted in the images, then it would be better to set `["GTM_INVERTED", "GTM_ORIGINAL"]` in the [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes).

## Example

The following code snippets respectively demonstrate how to set [`ScaleDownThreshold`]({{ site.parameters_reference }}scale-down-threshold.html), [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes) and [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes) via RuntimeSettings and via JSON template.

```cpp
CBarcodeReader* reader = new CBarcodeReader();       
reader->InitLicense("Insert your license here");      
PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();       
reader->GetRuntimeSettings(runtimeSettings);                                // Get the current runtime settings    
runtimeSettings->furtherModes.colourConversionModes[0] = CICM_GENERAL;      // Use CICM_GENERAL mode first to convert the colour image to grayscale
runtimeSettings->furtherModes.grayscaleTransformationModes[0]= GTM_INVERTED;// Set grayscale transformation mode to GTM_INVERTED
runtimeSettings->scaleDownThreshold = 2000                                  // When the shorter side length of the image is greater than 2000, the picture will be shrunken 
char sError[512];       
reader->UpdateRuntimeSettings(runtimeSettings, sError, 512);                // Update the runtime settings      
reader->DecodeFile("Insert the file path here", "");    
TextResultArray* paryResult = NULL;       
reader->GetAllTextResults(&paryResult);    
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&paryResult);       
delete runtimeSettings;       
delete reader; 
```

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"], 
        "DeblurLevel": 9, 
        "ColourConversionModes": [
            {
                "Mode": "CICM_GENERAL",
                "BlueChannelWeight": 300,
                "RedChannelWeight": 300,
                "GreenChannelWeight": 400
            }
        ], 
        "GrayscaleTransformationModes": [
            {
                "Mode": "GTM_INVERTED"
            }
        ], 
        "ScaleDownThreshold ": 2000 

    }, 
    "Version": "3.0"
}
```



[1]: assets/image-scale-and-colour-conversion/colour-conversion-original-image.png

[2]: assets/image-scale-and-colour-conversion/default-gray-img.png

[3]: assets/image-scale-and-colour-conversion/gray-img-only-red.png

[4]: assets/image-scale-and-colour-conversion/gray-img-only-blue.png

[5]: assets/image-scale-and-colour-conversion/gray-img-only-green.png

[6]: assets/image-scale-and-colour-conversion/inverted-gray-img.png




