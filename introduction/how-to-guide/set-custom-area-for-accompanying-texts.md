---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Set Custom Area for Accompanying Texts 
description: This page shows how to set custom area for accompanying texts.
keywords: accompanying texts, custom setting, text area, AccompanyingTextRecognitionModes, how-to guides
needAutoGenerateSidebar: false
---  


# How-to Guides - Set Custom Area for Accompanying Texts    


In some circumstances (especially for 1D barcodes), a barcode is typically accompanied by a human readable text. Since version 7.3, Dynamsoft Barcode Reader SDK is able to recognize the accompanying human readable text of a barcode. This text is useful for users to check whether the returned barcode result is correct.    


By default, our library will check the top and bottom areas of the barcode for accompanying texts. However, you can set a custom area via the following parameters:    


| Mode Parameter Name | Argument Name | Argument Description | Value Range | Default Value |
| ------------------- | ------------- | -------------------- | ----------- | ------------- |
| AccompanyingTextRecognitionModes | RegionBottom | Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode. | [-255, 255] | 0 |
| AccompanyingTextRecognitionModes | RegionLeft | Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode. | [-255, 255] | 0 |
| AccompanyingTextRecognitionModes | RegionRight | Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode. | [-255, 255] | 0 |
| AccompanyingTextRecognitionModes | RegionTop | Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode. | [-255, 255] | 0 |

     


To specify the region of the accompanying texts, you need to set [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`FurtherModes`]({{ site.structs }}FurtherModes.html)->[AccompanyingTextRecognitionModes]({{ site.structs }}FurtherModes.html#accompanyingtextrecognitionmodes) to ATRM_GENERAL and then specify AccompanyingTextRecognitionModes.RegionLeft, AccompanyingTextRecognitionModes.RegionLeft, AccompanyingTextRecognitionModes.RegionLeft and AccompanyingTextRecognitionModes.RegionLeft individually. The following diagram shows examples on how to set the value:    

![Accompanying Text Example][1]    


Below is the code snippet on how to set custom area for accompanying texts in Java:   

```java
BarcodeReader br = new BarcodeReader();

PublicRuntimeSettings runtimeSettings = br.getRuntimeSettings();
runtimeSettings.expectedBarcodesCount = iMaxCount;
runtimeSettings.barcodeFormatIds = barcodeFormatIds;
runtimeSettings.barcodeFormatIds_2 = barcodeFormatIds_2;
runtimeSettings.furtherModes.accompanyingTextRecognitionModes[0] = EnumAccompanyingTextRecognitionMode.ATRM_GENERAL;
br.updateRuntimeSettings(runtimeSettings);
br.setModeArgument("AccompanyingTextRecognitionModes", 0, "RegionBottom", "150");
br.setModeArgument("AccompanyingTextRecognitionModes", 0, "RegionLeft", "-10");
br.setModeArgument("AccompanyingTextRecognitionModes", 0, "RegionRight", "85");
br.setModeArgument("AccompanyingTextRecognitionModes", 0, "RegionTop", "100");   

TextResult[] results = br.decodeFile("<put your image file here>", "");
String pszTemp = String.format("Total barcode(s) found: %d. Total time spent: %.3f seconds.", results.length, ((float) (ullTimeEnd - ullTimeBegin) / 1000));
iIndex = 0;
for (TextResult result : results) {
    iIndex++;
    pszTemp = String.format("  Barcode %d:", iIndex);
    System.out.println(pszTemp);
    pszTemp = "    Value: " + result.barcodeText;
    System.out.println(pszTemp);                   
    byte[] byteArray = result.results[0].accompanyingTextBytes;
    String str = new String(byteArray);
    System.out.println("accompanyingTextBytes : " + str);
}
```

More useful information about Accompanying Texts can be found:
- Parameter [`AccompanyingTextRecognitionModes`]({{ site.parameters_reference }}accompanying-text-recognition-modes.html#accompanyingtextrecognitionmodes)
- Enumeration [`AccompanyingTextRecognitionMode`]({{ site.enumerations }}parameter-mode-enums.html#accompanyingtextrecognitionmode)
- [Recognise Accompanying Text]({{ site.scenario_settings }}recognise-accompanying-text.html)



[1]: assets/set-custom-area-for-accompanying-texts/accompanying-text-zone.png

