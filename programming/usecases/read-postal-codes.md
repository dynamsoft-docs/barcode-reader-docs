---   
layout: default-layout
description: This article introduces how to read Postal codes.
title: How to read Postal codes
keywords: Postal code, Direct Part Marking
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# How to Read Postal Codes

## Which Types of Postal Codes are Supported

Dynamsoft Barcode Reader (DBR) supports the following types of postal codes. Details about each barcode type can be found on the <a href="https://www.dynamsoft.com/barcode-reader/barcode-types/" target="_blank">list of supported barcode types</a> page.

* USPS Intelligent Mail
* Postnet
* Planet
* Australian Post
* Royal Mail 4-State Customer Barcode
* KIX


## Particular Parameter Required

DBR provides a parameter, [`BarcodeFormatIds`]({{ site.dcvb_parameters_reference }}barcode-reader-task-settings/barcode-format-ids.html){:target="_blank"}, to control the formats of the barcode to process. To enable decoding the postal codes, simply set a `BF_POSTALCODE` or a specific postal code format enumeration to this parameter.

## Sample Code

You can configure the parameter `BarcodeFormatIds` in two different ways, depending on your requirements. You can do it through `SimplifiedCaptureVisionSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure barcode format via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- C#
   >
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvRouter = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvRouter->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Enable all supported types of postal codes.
settings.barcodeSettings.barcodeFormatIds = BF_POSTALCODE;
// Update the settings.
cvRouter->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```
>
```java
try {
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   SimplifiedCaptureVisionSettings captureVisionSettings = cvr.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
   captureVisionSettings.barcodeSettings.barcodeFormatIds = BF_POSTALCODE;
   // Update the settings. Remember to specify the same template name you used when getting the settings.
   cvr.updateSettings(EnumPresetTemplate.PT_READ_BARCODES, captureVisionSettings);
} catch (CaptureVisionRouterException e) {
   e.printStackTrace();
}
```
>
```objc
NSError *error;
// Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
// Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
DSSimplifiedCaptureVisionSettings *captureVisionSettings = [self.cvr getSimplifiedSettings:DSPresetTemplateReadBarcodes error:&error];
captureVisionSettings.barcodeSettings.barcodeFormatIds = DSBarcodeFormatPostalCode;
// Update the settings. Remember to specify the same template name you used when getting the settings.
[self.cvr updateSettings:DSPresetTemplateReadBarcodes settings:captureVisionSettings error:&error];
```
>
```swift
do{
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   let captureVisionSettings = try cvr.getSimplifiedSettings(PresetTemplate.readBarcodes.rawValue)
   captureVisionSettings.barcodeSettings?.barcodeFormatIds = .postalCode
   // Update the settings. Remember to specify the same template name you used when getting the settings.
   try cvr.updateSettings(PresetTemplate.readBarcodes.rawValue, settings: captureVisionSettings)
}catch{
   // Add code to do when error occurs.
}
```
>
```python
cvr_instance = CaptureVisionRouter()
# Obtain current runtime settings of `CCaptureVisionRouter` instance.
err_code, err_str, settings = cvr_instance.get_simplified_settings(EnumPresetTemplate.PT_READ_BARCODES.value)
# Specify the barcode formats by enumeration values.
# Use "|" to enable multiple barcode formats at one time.
settings.barcode_settings.barcode_format_ids = EnumBarcodeFormat.BF_POSTALCODE.value
# Update the settings.
err_code, err_str = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
```
>
```csharp
using (CaptureVisionRouter cvRouter = new CaptureVisionRouter())
{
   SimplifiedCaptureVisionSettings settings;
   string errorMsg;
   // Obtain current runtime settings of `CCaptureVisionRouter` instance.
   cvRouter.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
   // Specify the barcode formats by enumeration values.
   // Use "|" to enable multiple barcode formats at one time.
   settings.barcodeSettings.barcodeFormatIds = (ulong)(EnumBarcodeFormat.BF_POSTALCODE);
   // Update the settings.
   cvRouter.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);  
}
```

* Configure barcode format via `JSON parameter template file`
  * update parameter `BarcodeFormatIds` in JSON template
   ```json
   {
    "CaptureVisionTemplates": [
        {
            "Name" : "CV_0",
            "ImageROIProcessingNameArray": ["TA_0" ]
        }       
    ],
    "TargetROIDefOptions" : [
        {
            "Name" : "TA_0",
            "TaskSettingNameArray": [ "BR_0" ]
        }
    ],
    "BarcodeReaderTaskSettingOptions": [
        {
            "Name" : "BR_0",
            "BarcodeFormatIds" : ["BF_POSTALCODE"]
        }
    ]
   }
   ```

  * Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
