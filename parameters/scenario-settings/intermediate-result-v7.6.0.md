---   
layout: default-layout
description: In this article, we will introduce how to obtain and use intermediate results 
title: How to obtain and use intermediate results
keywords: IntermediateResult
needAutoGenerateSidebar: false
permalink: /parameters/scenario-settings/intermediate-result-v7.6.0.html
---
# How to obtain and use intermediate results

In the process of image processing, DBR has a variety of types of intermediate result. This article will describe in detail the types of these intermediate results and how to obtain and use them.

## Saving options

You can call [`IntermediateResultSavingMode`]({{ site.parameters_reference }}intermediate-result-saving-mode.html#intermediateresultsavingmode)to save intermediate results in memory or in the file system. Its enumerations are the following:

| Enumerator           | Value  | Note                            |
|-----------------|--------|--------------------            |
| IRSM_MEMORY    | 0x01   | Saves intermediate results in memory             |
| IRSM_FILESYSTEM | 0x02   | Saves intermediate results in file system.  |
| IRSM_BOTH      | 0x04   | Saves intermediate results in both memory and file system.    |

The following code snippet illustrate how to save intermediate results in memory, and obtain from memory:

``` cpp
 int ret = 0;
 char sError[512];
 CBarcodeReader* reader = new CBarcodeReader();
 reader->InitLicense("Input your Lisence");
 PublicRuntimeSettings* runtimeSettings = new PublicRuntimeSettings();
 reader->GetRuntimeSettings(runtimeSettings); //Get current runtime settings        
 runtimeSettings->intermediateResultSavingMode = IRSM_MEMORY;//Save intermediate results in memory
 runtimeSettings->intermediateResultTypes = IRT_BINARIZED_IMAGE; //Set intermediate result type to binarized image
 reader->UpdateRuntimeSettings(runtimeSettings);
 ret = reader->DecodeFile("Input image path", ""); //Decoding    
 TextResultArray* result = NULL;
 reader->GetAllTextResults(&result);
 int icount = result->resultsCount;
 IntermediateResultArray *iResults = NULL;
 reader->GetIntermediateResults(&iResults);//Get intermediate results
 int rCount = iResults->resultsCount;
 for (int i = 0; i < rCount; i++) //Recursion the intermediate results
    {
        if(iResults->results[i]->dataType == IMRDT_IMAGE)
        {
            int type = 0;
            ImageData* oImg = (ImageData*)iResults->results[i]->results[0];
            switch(oImg->format)
            {
            case IPF_BINARY:
            case IPF_GRAYSCALED:
            case IPF_BINARYINVERTED:
                type = CV_8UC1;
                break;
            case IPF_RGB_888:
                type = CV_8UC3;
                break;
            default:
                break;
            }
            
            if (oImg->format == IPF_BINARY|| oImg->format == IPF_BINARYINVERTED)
            {
                int count = 0;
                int pos = 0;
                int whiteValue = oImg->format == IPF_BINARY?1:0;
                
                unsigned char* binData = new unsigned char[oImg->bytesLength<<3];
                while (pos < oImg->bytesLength)
                {
                    for (int bit = 7; bit >= 0; --bit)
                    {
                        binData[count] = ((oImg->bytes[pos] >> bit) & 0x01) == whiteValue ? 255 : 0;
                        count++;
                    }
                    pos++;
                }
                
                Mat img(oImg->height, oImg->width, type, binData, oImg->stride<<3);
                imshow("Img", img);
                waitKey(0);
                delete[] binData;
            }
            else 
            {
                Mat img(oImg->height, oImg->width, type, oImg->bytes, oImg->stride);
                imshow("Img", img);
                waitKey(0);
            } 
        }
        else if(iResults->results[i]->dataType == IMRDT_LINESEGMENT)
        {
            for (int j = 0; j < iResults->results[i]->resultsCount;j++) 
            {
                LineSegment* lines = (LineSegment*)iResults->results[i]->results[j];
                printf("startpoint (%d,%d)\n", lines->startPoint.x, lines->startPoint.y);
                printf("endpoint (%d,%d)\n", lines->endPoint.x, lines->endPoint.y);
                printf("confidenceCoefficient:%p\n", lines->linesConfidenceCoefficients);
            }
        }
        else if (iResults->results[i]->dataType == IMRDT_CONTOUR) 
        {
            for (int j = 0; j < iResults->results[i]->resultsCount; j++) 
            {
                Contour* contours = (Contour*)iResults->results[i]->results[j];
                for (int pointId = 0; pointId < contours->pointsCount; pointId++) 
                {
                    printf("contourPoint (%d,%d)\n", contours->points[pointId].x, contours->points[pointId].y);
                }
            }
        }
        else if (iResults->results[i]->dataType == IMRDT_LOCALIZATIONRESULT) 
        {
            LocalizationResult* localization = (LocalizationResult*)iResults->results[i]->results[0];
            printf("confidence:%d\n", localization->confidence);
        }
        else if (iResults->results[i]->dataType == IMRDT_REGIONOFINTEREST) 
        {
            RegionOfInterest* region = (RegionOfInterest*)iResults->results[i]->results[0];
            printf("roiId :%d\n", region->roiId);
            printf("top-left point(%d,%d)\n", region->point.x, region->point.y);
            printf("height:%d\n", region->height);
            printf("weight:%d\n", region->width);
        }
        else
        {
            Quadrilateral* quadrilateral = (Quadrilateral*)iResults->results[i]->results[0];
            for (int pointId = 0; pointId < 4; pointId++)
            {
                printf("Point(%d,%d)\n", quadrilateral->points[pointId].x, quadrilateral->points[pointId].y);
            }
        }
    }

    CBarcodeReader::FreeTextResults(&result);
    CBarcodeReader::FreeIntermediateResults(&iResults);
    delete runtimeSettings;
    delete reader;
}
```

When using IRSM_FILESYSTEMto save the intermediate results, the user should also specify the FolderPath. If there is no FolderPath specified, the intermediate results will be saved in the same directory as DBR library.

The following illustrates how to set the IRSM_FILESYSTEM to save the intermediate results in JSON:

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "BarcodeFormatIds": [
            "BF_ALL"
        ], 
        "IntermediateResultTypes":["IRT_TRANSFORMED_GRAYSCALE_IMAGE"],                           
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_FILESYSTEM",     
            "FolderPath":"C:\\WorkingFolder\\intermediateResult"     
                                         
        }
    }, 
    "Version": "3.0"
}
```

## Type of intermediate results 

There are a variety of intermediate result types. You could get the desired intermediate result by specifying the [`IntermediateResultTypes`]({{ site.parameters_reference }}intermediate-result-types.html)parameter, which has the following available enumerations:

|Enumeration                 |Value    |
|-------------------   |----------|
|IRT_NO_RESULT         |0x00000000|
|IRT_ORIGINAL_IMAGE    |0x00000001|
|IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE|0x00000002|
|IRT_TRANSFORMED_GRAYSCALE_IMAGE|0x00000008|
|IRT_PREDETECTED_REGION|0x00000010|
|IRT_PREDETECTED_QUADRILATERAL|0x00002000|
|IRT_PREPROCESSED_IMAGE|0x00000020|
|IRT_BINARIZED_IMAGE   |0x00000040|
|IRT_CONTOUR           |0x00000100|
|IRT_LINE_SEGMENT      |0x00000200|
|IRT_TEXT_ZONE         |0x00000080|
|IRT_TYPED_BARCODE_ZONE|0x00001000|

Default value is IRT_NO_RESULT. You can specify one or multiple intermediate result types. Next, we will dive into each of the intermediate result types.

### IRT_ORIGINAL_IMAGE

The original image applies for the user who want to have a copy of the original captured image. The typical scenario would be users who use DecodeBuffer or video streaming to read the barcode. If there is a need to check the original image or frame that was used to recognize the barcode, we could set the IntermediateResultTypes to IRT_ORIGINAL_IMAGE to save the original image.

### IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE

Users who use [`ColourConversionModes`]({{ site.parameters_reference }}colour-conversion-modes.html#colourconversionmodes)to adjust a colour image to a grayscale image could set IntermediateResultTypes to IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE to observe the result. Following are the original image and grayscale image obtain from intermediate result.

![original colour image][8]
![grayscale image][9]

### IRT_TRANSFORMED_GRAYSCALE_IMAGE

Users who use [`GrayscaleTransformationModes`]({{ site.parameters_reference }}grayscale-transformation-modes.html#grayscaletransformationmodes)to do the colour conversion on a grayscale image could set IntermediateResultTypes to IRT_TRANSFORMED_GRAYSCALE_IMAGE to observe the result. Following are the original image and transformed grayscale image obtained from intermediate result.

![original-inverted][16]
![inverted image][17]

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "GrayscaleTransformationModes":
        [
            {
                "Mode":"GTM_INVERTED"
            }
        ],
        "IntermediateResultTypes":["IRT_TRANSFORMED_GRAYSCALE_IMAGE"],
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_BOTH",     
            "FolderPath":"C:\\Users\\Desktop\\intermediaterResult"     
        }
    }, 
    "Version": "3.0"
}
```

### IRT_PREDETECTED_QUADRILATERAL

The intermediate result of [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes). Here is a sample image:

![original image before region detected][13]

We could set the RegionPredetectionModes to RPM_GENERAL_HSV_CONTRAST to detect yellow region and observe the results by setting IntermediateResultTypes to IRT_PREDETECTED_QUADRILATERAL. The area is now highlighted with red:

![quadrilateral region][14]

JSON template:

```json
{
   "resultType" : 8192,
   "results" : [
      {
         "points" : "(0, 2),(659, 16),(659, 215),(0, 215)"  //Coordinates detected
      }
   ],
   "resultsCount" : 1,
}
```

### IRT_PREDETECTED_REGION

Predetected region of interest. When using [`RegionPredetectionModes`]({{ site.parameters_reference }}region-predetection-modes.html#regionpredetectionmodes)and the `RegionDefinition`, we could set IntermediateResultTypes to IRT_PREDETECTED_REGION to observe the region of interest. For example, we could use RPM_GENERAL_HSV_CONTRAST to detect yellow region, and set the corresponding position to the yellow region, eventually, get the ROI with green rectangle.

![predetected region sample][15]

JSON template

```json
{
   "resultType" : 16,
   "results" : [
      {
         "height" : 86,              //Height
         "point" : "(230, 278)",     //ROI of the left top point
         "roiId" : 0,                //Index
         "width" : 349               //Width
      }
   ],
   "resultsCount" : 1
}
```

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "RegionPredetectionModes":
        [
            {
                "Mode":"RPM_GENERAL_HSV_CONTRAST",
                "ForeAndBackgroundColours":"[-1,54,10]",
                "RelativeBarcodeRegions":"[35,130,88,170,-1]",
                "MinImageDimension":16384
            }
        ],
        "IntermediateResultTypes":["IRT_PREDETECTED_REGION"],
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_BOTH",     
            "FolderPath":"C:\\Users\\Desktop\\intermediaterResult"     
        }
    }, 
    "Version": "3.0"
}
```

### IRT_PREPROCESSED_IMAGE

This intermediate result type is used to observe the effect of adjusting image preprocessing using the [`ImagePreprocessingModes`]({{ site.parameters_reference }}image-preprocessing-modes.html#imagepreprocessingmodes)parameter. The following example shows both the original image and the pre-processed image after gray equalization.

![original-equalize][11]![equalized image][12]

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "ImagePreprocessingModes":
        [
            {
                "Mode":"IPM_GRAY_EQUALIZE",
                "Sensitivity":9
            }
        ],
        "IntermediateResultTypes":["IRT_PREPROCESSED_IMAGE"],
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_FILESYSTEM",     
            "FolderPath":"C:\\Users\\Desktop\\intermediaterResult"     
        }
    }, 
    "Version": "3.0"
}
```

### IRT_BINARIZED_IMAGE

This intermediate result is used to observe the effect of adjusting a binarized image using BinarizationMode.

### IRT_TEXT_ZONE

This intermediate result type is mainly used with barcode images that contain a lot of text. To get IRT_TEXT_ZONE intermediate result, you need to configure the [`TextFilterModes`]({{ site.parameters_reference }}text-filter-modes.html#textfiltermodes)in JSON template. The data for the text area is given in JSON as coordinates. The following sample image illustrates the effect of drawing the intermediate result (in red) onto the original image. 

![text zone demo][2]

JSON template

```json
{
   "resultType" : 128,
   "results" : [
      [ "(433, 465)", "(444, 465)", "(444, 473)", "(433, 473)" ],  //Coordinates
      [ "(390, 470)", "(393, 465)", "(405, 469)", "(401, 473)" ],
      [ "(379, 465)", "(390, 465)", "(390, 473)", "(379, 473)" ],
      [ "(371, 470)", "(374, 465)", "(378, 467)", "(376, 473)" ],
      ......
      ......                                                       
      [ "(83, 314)", "(100, 317)", "(96, 328)", "(83, 325)" ]
   ],
   "resultsCount" : 273
}
```

### IRT_LINE_SEGMENT

When using LM_LINES to localize the barcode, the line data in the image will be extracted. By setting IntermediateResultTypes to IRT_LINE_SEGMENT, we can observe the result of this extraction,.as is shown below when the intermediate result is overlaid on the barcode image:

![original image][4]

We plot the intermediate result of the line segment as follows

![image lines sample][5]

IRT_LINE_SEGMENT in JSON

```json
{
   "resultType" : 512,
   "results" : [
      "(193, 123)(193, 109)", //Two endpoint coordinates of a line segment
      "(192, 113)(192, 123)",
      ......                  
      ......
      "(108, 104)(113, 104)"
   ],
   "resultsCount" : 152
}
```

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "LocalizationModes": [
            {
                "Mode": "LM_LINES"
            }
        ], 
        "IntermediateResultTypes":["IRT_LINE_SEGMENT"],
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_FILESYSTEM",     
            "FolderPath":"C:\\Users\\Desktop\\intermediaterResult"     
        }
    }, 
    "Version": "3.0"
}
```

### IRT_CONTOUR

When using the LM_CONNECTED_BLOCKS and LM_LINES localization modes, the connected block will be extracted from the image. By setting IntermediateResultTypes to IRT_CONTOUR, you can obtain this connected block.. Here is a demonstration of the connected block on top of the barcode image:

![original contours image][6]

We draw the connected block to the image. Effect is as follows:

![contours image][7]

IRT_CONTOUR in JSON

```json
{
   "resultType" : 256,
   "results" : [
      [
         "(321, 159)",                            //Contour point coordinates
         "(320, 160)",                  
         ......                                   
         "(34, 26)"
      ]
   ],
   "resultsCount" : 50
}
```

JSON template

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "LocalizationModes": [
            {
                "Mode": "LM_CONNECTED_BLOCKS"
            }
        ], 
        "IntermediateResultTypes":["IRT_CONTOUR"],
        "IntermediateResultSavingMode":
        {
            "Mode":"IRSM_FILESYSTEM",     
            "FolderPath":"C:\\Users\\Desktop\\intermediaterResult"     
        }
    }, 
    "Version": "3.0"
}
```

### IRT_TYPED_BARCODE_ZONE

Once the TerminatePhase is done with the TP_BARCODE_TYPE_DETERMINED phase, we could get this intermediate result type.

The barcode localization result is formatted as follows in the JSON file

```javascript
{
    "resultType" : 4096,
    "results" : [
        {
            "angle" : 180,                           //Barcode angle
            "barcodeFormat" : 2047,                  //Barcode format
            "confidence" : 100,                      //Barcode confidence
            "moduleSize" : 3,                        //Module size
            "pageNumber" : 0,                        //Page number
            "terminatePhase" : 8,                    //Terminate Phase
            "x1y1x2y2x3y3x4y4" : "(548, 207)(175, 207)(175, 82)(548, 82)" //Coordinates of located barcode
        }
    ],
    "resultsCount" : 1
}
```

The following figure shows the result of the barcode localization

![barcode zone sample][3]



[1]:assets\intermediate-result\original-image-for-text.png

[2]:assets\intermediate-result\text-zone.png

[3]:assets\intermediate-result\barcode-zone.png

[4]:assets\intermediate-result\original-Lines.png

[5]:assets\intermediate-result\Lines.png

[6]:assets\intermediate-result\original-contours.png

[7]:assets\intermediate-result\contours.png

[8]:assets\intermediate-result\original-colour.png

[9]:assets\intermediate-result\grayscale.png

[10]:assets\intermediate-result\binarized.png

[11]:assets\intermediate-result\original-equalize.png

[12]:assets\intermediate-result\equalize.png

[13]:assets\intermediate-result\original-region.png

[14]:assets\intermediate-result\quadrilateral.png

[15]:assets\intermediate-result\region.png

[16]:assets\intermediate-result\original-inverted.png

[17]:assets\intermediate-result\inverted.png
