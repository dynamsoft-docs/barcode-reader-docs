---   
layout: default-layout
title: Scan Barcodes from PDF & multi-page TIF
description: This article describes how Dynamsoft's barcode SDK processes multi-page images, such as TIF and PDF.
keywords: tif, pdf, multi-page
needAutoGenerateSidebar: false
---

# Scan Barcodes from PDF & multi-page TIF

For multi-page TIF and PDF files, DBR provides the parameter [`Pages`]({{ site.parameters_reference }}pages.html) to process them, [`PDFReadingMode`]({{ site.parameters_reference }}pdf-reading-mode.html) and [`PDFRasterDPI`]({{ site.parameters_reference }}pdf-raster-dpi.html) are used to handle PDF file specifically. 

## Specify the page number to be processed

When DBR is processing multi-page files (TIF or PDF), you can use the parameter [`Pages`]({{ site.parameters_reference }}image-parameter/image-process-control.html#pages) to specify the specific page or range of pages to be processed. This parameter can be used to specify one or more page index values, starting from 0. The default value is "", which means all pages.

[`Pages`]({{ site.parameters_reference }}pages.html)can be set by one or more of the following data, separated by commas:
- An integer index value, representing a specific page;
- Two integer index values, connected by "-" in the middle, representing a certain range of page numbers.

[`Pages`]({{ site.parameters_reference }}pages.html) can only be configured in Json, for example, `{"Pages": "0,3,5,7-10"}`.

In the returned decoding result, you can get the information of the corresponding barcode on the page of the file. Please refer to the following procedure:

```c++
BarcodeReader* reader = new CBarcodeReader();     
reader->InitLicense("Insert license");    
char sError[512];     
reader->DecodeFile("File path", ""); //decoding    
TextResultArray* pResult = NULL;     
reader->GetAllTextResults(&pResult); //get the decoded results   
int iCount = pResult->resultsCount;  
for(int j = 0; j < iCount; j++)  //Loop through all returned results
{  
    TextResult* pBarcode = pResults->results[j];  
    LocalizationResult* pLocRes = pBarcode->localizationResult;  
    printf("pageNumber:%d\n", pLocRes->PageNumber); //get the page number in which the barcode is located
}  
dynamsoft::dbr::CBarcodeReader::FreeTextResults(&pResult);        
delete reader; 
```

## Select PDFReadingMode

The parameter [`PDFReadingMode`]({{ site.parameters_reference }}pdf-reading-mode.html) is used to set how to process PDF files. DBR provides two ways to read PDF data, PDFRM_RASTER and PDFRM_VECTOR.

- PDFRM_RASTER   
This method will render each page of the PDF as an image, which will be processed later. This reading mode can be used for all PDF files, but the drawback is that you need to choose the appropriate value of PDFRasterDPI to render the image. Otherwise, if the image is too large, the processing speed of DBR may be slowed, and if the image is too small, the barcode region may be distorted and cannot be decoded.

- PDFRM_VECTOR   
This method is specifically designed for PDF composed of vector data. This mode will not render PDF data into images, but directly extract PDF vector data for barcode region positioning and decoding. Its advantages are fast speed and high accuracy, but it is only suitable for PDF composed of vector data.

At the same time, we also provide PDFRM_AUTO mode, this mode will automatically choose the appropriate processing mode according to whether the PDF file has enough available vector data.

## Select the appropriate PDFRasterDPI

When using PDFRM_RASTER, we need to select an appropriate [`PDFRasterDPI`]({{ site.parameters_reference }}pdf-raster-dpi.html) to ensure that the rendered image has the right size. The higher the PDFRasterDPI, the higher the final resolution of the rendered image. The high-resolution image can ensure the image details are not distorted, which is helpful for DBR to correctly identify the barcode region but will make the processing speed slow at the same time. This section will introduce the calculation method from PDFRasterDPI to the size of the rendered image. You can observe the rendered image based on the calculation method and the intermediate result IRT_ORIGINAL_IMAGE to decide how to adjust PDFRasterDPI.

The resolution of the rendered image is calculated as follows:
Set PDF page height to h and page width to w,
Final rendered image height  ImgHeight = h / 72 * PDFRasterDPI
Final rendered image width  ImgWidth = w / 72 * PDFRasterDPI

PDFRasterDPI is the number of pixels per inch of the image. 
The page width and height unit defined in PDF is pt (length unit, 1 inch = 72 pt), so in the above formula we first divide the width and height by 72 to get the inch length of the page, and then multiply by PDFRasterDPI to get the final image pixel width and height.

## Json Template

In the following template, we configured PDFReadingMode to PDFRM_AUTO, PDFRasterDPI to 500, and Pages specified three Pages in index 1, 2, and 3.

```json
{
    "ImageParameter": {
        "BarcodeFormatIds": ["BF_ALL"], 
        "PDFRasterDPI": 500,
        "PDFReadingMode": {
            "Mode": "PDFRM_AUTO "
        },                         
        "Pages": "1,2,3"           
    }, 
    "Version": "3.0"
}
```



