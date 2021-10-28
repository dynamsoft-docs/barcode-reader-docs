---   
layout: default-layout
description: This article introduces how to recognize accompanying text.
title: How to recognize accompanying text
keywords: accompanyingText, OCR
needAutoGenerateSidebar: false
---

# How to recognize accompanying text

In some scenarios, especially for 1D barcodes, a barcode can be accompanied by human readable text. This accompanying text might be useful for barcode value verification, or for further use in your application. Currently, DBR only supports the recognition of the accompanying text with 1D barcodes.

DBR provides the [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html#accompanyingtextrecognitionmodes) parameter which allows you to recognize the accompanying text near the barcode. The parameter [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html#accompanyingtextrecognitionmodes) is an array of [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) values. 

[`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) has the following enumeration values:

| Enumeration Member | Enumeration Value | Description |
|:-----------:|:--------:|:--------------------:|
| ATRM_SKIP | 0x00   | Turn off accompanying text recognition |
| ATRM_GENERAL | 0x01   | Turn on accompanying text recognition  |

## The default searching area for accompanying text

When [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode) is set to `ATRM_GENERAL`, the accompanying text recognition feature is enabled. By default, DBR uses the successfully decoded barcode as a reference, and tries to recognize possible accompanying text in close proximity around the barcode. 

The following is a sample image:

![standard-acompanying-text][1]

DBR is able to recognize the accompanying text marked by the red when accompanying text recognition is enabled. 

JSON template example:

```json
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is acompanying text demonstrate", 
        "AccompanyingTextRecognitionModes":["ATRM_GENERAL"]
    }, 
    "Version": "3.0"
}  
```
## Set a custom area for accompanying text

In some scenarios, the accompanying text you need is not in the immediate vicinity of the barcode. You can set a custom area to search by using the successfully decoded barcode as a reference via `top`, `bottom`, `left` and `right` values. The unit is in percentage.

Let's take the following image as an example. In this sample image, the information we would like to recognize is within the green box, but it is a relatively far from the barcode. We can specify a custom searching area (marked by the red box) by setting the following arguments:

`RegionBottom = -150`,
`RegionLeft = -12`,
`RegionRight = 85`,
`RegionTop = -250`

![a card image demo that has a customed acompanying text recognition range][3]

Example JSON template:
```javascript
{
    "ImageParameter": {
        "Name": "ImageParameter1", 
        "Description": "This is a acompanying text demonstrate", 
        "AccompanyingTextRecognitionModes":[
            {
                "Mode" : "ATRM_GENERAL",
                "RegionBottom" : -150,
                "RegionLeft" : -12,
                "RegionRight" : 85,
                "RegionTop" : -250
            }
        ]
    }, 
    "Version": "3.0"
}  
```
## How to get the result of recognized accompanying text

The result of the accompanying text is stored in the decoding result: [`ExtendedResult`]({{ site.structs }}ExtendedResult.html) -> type `RT_STANDARD_TEXT`. The following code snippet shows how to get the result of recognized accompanying text.

```c++
CBarcodeReader * reader = new CBarcodeReader;
reader->InitLicense("Insert your license here");
char error[512];
int ret = reader->InitRuntimeSettingsWithFile("JsonTemplate.txt",CM_OVERWRITE,error,512);
ret = reader->DecodeFile("Insert image file path here");
TextResultArray* pResults = NULL;
reader->GetAllTextResults(&pResults);
for(int resultId = 0; resultId < pResults->resultsCount; ++resultId)
{
    TextResult* pBarcode = pResults->results[resultId];
    string accompany;
    // Loop through all ExtendedResult
    for(int extendId = 0; extendId < pBarcode->resultsCount; ++extendId)
    {
        PExtendedResult pExtend = pBarcode->results[extendId];
        if(pExtend->resultType == RT_STANDARD_TEXT)
        {
            unsigned char * accompanyStr = pExtend->accompanyingTextBytes;
            int strLen = pExtend->accompanyingTextBytesLength;
            accompany = string(accompanyStr,accompanyStr + strLen);
            break;
        }    
    }
    if(!accompany.empty())
    {
        cout << "accompanyText: " << accompany << endl;
    }
}
CBarcodeReader::FreeTextResults(&pResults);
delete reader;
```

[1]:assets/recognise-accompanying-text/standard-accompanying-text.png
[3]:assets/recognise-accompanying-text/accompanying-text-card.png
