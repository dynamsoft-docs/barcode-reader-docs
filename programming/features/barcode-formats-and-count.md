---
layout: default-layout
title: Barcode Formats and Count - Dynamsoft Barcode Reader SDK
description: This page describes how to set barcode formats and count in Dynamsoft Barcode Reader SDK.
keywords: Barcode Formats, Expected Count
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Specify Barcode Formats and Count

## Set Barcode Formats

Specifying the barcode format is always the first step when it comes to the configuration of Dynamsoft Barcode Reader(DBR). Be sure to confirm that the target barcode formats are indeed supported by DBR by checking our [list of supported barcode types](https://www.dynamsoft.com/barcode-types/). Excluding undesired barcode types will improve the processing efficiency. 

You can configure the parameter in two different ways, depending on your requirements. You can do it through `SimplifiedCaptureVisionSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure barcode format via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
>- JavaScript
>- C++
>- Android
>- Objective-C
>- Swift
>- Python
>- C#
>
>
```javascript
// Obtain current runtime settings of `router` instance. Here we use `ReadSingleBarcode` as an example. You can change it to your own template name or the name of other preset template.
let settings = await router.getSimplifiedSettings("ReadSingleBarcode");
// Specify the barcode formats by enumeration values.
// Use "|" to enable multiple barcode formats at one time.
settings.barcodeSettings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE | Dynamsoft.DBR.EnumBarcodeFormat.BF_QR_CODE;
// Update the settings to a specific template.
await router.updateSettings("ReadSingleBarcode", settings);
```
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the barcode formats by enumeration values.
// Use "|" to enable multiple barcode formats at one time.
settings.barcodeSettings.barcodeFormatIds = BF_QR_CODE | BF_ONED;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```
>
```java
try {
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   SimplifiedCaptureVisionSettings captureVisionSettings = cvr.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
   captureVisionSettings.barcodeSettings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED;
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
captureVisionSettings.barcodeSettings.barcodeFormatIds = DSBarcodeFormatQRCode | DSBarcodeFormatOneD;
// Update the settings. Remember to specify the same template name you used when getting the settings.
[self.cvr updateSettings:DSPresetTemplateReadBarcodes settings:captureVisionSettings error:&error];
```
>
```swift
do{
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   let captureVisionSettings = try cvr.getSimplifiedSettings(PresetTemplate.readBarcodes.rawValue)
   captureVisionSettings.barcodeSettings?.barcodeFormatIds = [.qrCode,.oneD]
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
settings.barcode_settings.barcode_format_ids = EnumBarcodeFormat.BF_QR_CODE.value | EnumBarcodeFormat.BF_ONED.value
# Update the settings.
err_code, err_str = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
```
>
```csharp
using (CaptureVisionRouter cvr = new CaptureVisionRouter())
{
   SimplifiedCaptureVisionSettings settings;
   string errorMsg;
   // Obtain current runtime settings of `CCaptureVisionRouter` instance.
   cvr.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
   // Specify the barcode formats by enumeration values.
   // Use "|" to enable multiple barcode formats at one time.
   settings.barcodeSettings.barcodeFormatIds = (ulong)(EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED);
   // Update the settings.
   cvr.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);  
}
```


* Configure barcode format via `JSON parameter template file`
  * Update parameter `BarcodeFormatIds` in your JSON template
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
                "BarcodeFormatIds" : ["BF_ONED", "BF_QR_CODE"]
            }
        ]
    }
    ```

  * Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).

## Set Barcode Count

The `ExpectedBarcodesCount` parameter controls the number of expected results of the recognized barcodes from a single image. The process will be stopped as soon as the count of successfully decoded barcodes reaches the expected amount.

There are some suggestions on how to set the `ExpectedBarcodesCount`:

- When your project is designed for decoding a **single** barcode per image or frame, the recommended `ExpectedBarcodesCount` is **1**. This will sharply improve the processing speed.
- When there are **n** barcodes in a single image or frame (**n** is a fixed number) and you'd like the barcode reader to decode **all of them**, the recommended `ExpectedBarcodesCount` is **n**.
- When the number of barcodes is unknown and you want to output **as many** barcode results as possible, you can set the `ExpectedBarcodesCount` to the **maximum possible value** of `ExpectedBarcodesCount`.
- When the number of barcodes is unknown and you want to output **at least one** barcode result as **soon** as possible, you can set the `ExpectedBarcodesCount` to **0**. The barcode reader will try to decode at least one barcode from the image.

You can configure the parameter in two different ways, depending on your requirements. You can do it through `SimplifiedBarcodeReaderSettings`, or if it suits your needs better, you can opt for `JSON Template`. Below are examples illustrating both of these configuration methods:

* Configure expected barcode count via `SimplifiedCaptureVisionSettings`.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- C#
   >
>
```javascript
// Obtain current runtime settings of `router` instance. Here we use `ReadSingleBarcode` as an example. You can change it to your own template name or the name of other preset template.
let settings = await router.getSimplifiedSettings("ReadSingleBarcode");
// Specify the expected barcode count.
settings.barcodeSettings.expectedBarcodesCount = 1;
// Update the settings.
await router.updateSettings("ReadSingleBarcode", settings);
```
>
```c++
char szErrorMsg[256] = {0};
// Obtain current runtime settings of `CCaptureVisionRouter` instance.
CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
SimplifiedCaptureVisionSettings settings;
cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &settings);
// Specify the expected barcode count.
settings.barcodeSettings.expectedBarcodesCount = 1;
// Update the settings.
cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &settings, szErrorMsg, 256);
```
>
```java
try {
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   SimplifiedCaptureVisionSettings captureVisionSettings = cvr.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
   captureVisionSettings.barcodeSettings.expectedBarcodesCount = 1;
   // Update the settings. Remember to specify the same template name you used when getting the settings.
   cvr.updateSettings(EnumPresetTemplate.PT_READ_BARCODES, captureVisionSettings);
} catch (CaptureVisionRouterException e) {
   e.printStackTrace();
}
```
>
```objc
NSError *error;
// Obtain current runtime settings. `cvr` is an instance of `DSCaptureVisionRouter`.
// Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
DSSimplifiedCaptureVisionSettings *captureVisionSettings = [self.cvr getSimplifiedSettings:DSPresetTemplateReadBarcodes error:&error];
captureVisionSettings.barcodeSettings.expectedBarcodesCount = 1;
// Update the settings. Remember to specify the same template name you used when getting the settings.
[self.cvr updateSettings:DSPresetTemplateReadBarcodes settings:captureVisionSettings error:&error];
```
>
```swift
do{
   // Obtain current runtime settings. `cvr` is an instance of `CaptureVisionRouter`.
   // Here we use `EnumPresetTemplate.PT_READ_BARCODES` as an example. You can change it to your own template name or the name of other preset template.
   let captureVisionSettings = try cvr.getSimplifiedSettings(PresetTemplate.readBarcodes.rawValue)
   captureVisionSettings.barcodeSettings?.expectedBarcodesCount = 1
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
# Specify the expected barcode count.
settings.barcode_settings.expected_barcodes_count = 1
# Update the settings.
err_code, err_str = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES.value, settings)
```
>
```csharp
using (CaptureVisionRouter cvr = new CaptureVisionRouter())
{
   SimplifiedCaptureVisionSettings settings;
   string errorMsg;
   // Obtain current runtime settings of `CCaptureVisionRouter` instance.
   cvr.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
   // Specify the expected barcode count.
   settings.barcodeSettings.expectedBarcodesCount = 1;
   // Update the settings.
   cvr.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);  
}
```

* Configure barcode format via `JSON parameter template file`
  * update parameter `ExpectedBarcodesCount` in your JSON template
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
                "ExpectedBarcodesCount" : 1
            }
        ]
    }
   ```
  * Apply the above settings following the article [Use Templates for Configuring Parameters]({{ site.features }}use-runtimesettings-or-templates.html#json-template).
