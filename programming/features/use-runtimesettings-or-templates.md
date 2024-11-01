---   
layout: default-layout
description: This article introduces two ways to configure DBR parameters, SimplifiedCaptureVisionSettings and JSON Template, and their syntax rules.
title: Use SimplifiedCaptureVisionSettings or JSON Template
keywords: DBR SimplifiedCaptureVisionSettings Json Template ImageParameter FormatSpecification
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# Use SimplifiedCaptureVisionSettings or JSON Template

Dynamsoft Barcode Reader (DBR) provides two ways for configuring the parameters: via `SimplifiedCaptureVisionSettings` or via a `JSON Template`.

* [SimplifiedCaptureVisionSettings](#simplifiedcapturevisionsettings)

  `SimplifiedCaptureVisionSettings` is an object that manages various parameters during runtime. If you need to *dynamically* configure the reading process, use `SimplifiedCaptureVisionSettings`.

  However, bear in mind that `SimplifiedCaptureVisionSettings` doesn't provide all the available configuration options of the SDK.

* [JSON Template](#json-template)

  With a JSON template, you can make use of all the configuration options that DBR offers.
  
  However, compared with `SimplifiedCaptureVisionSettings`, a template is static and can't be changed. If you need to use different settings for different scenarios, you can define a few templates and specify the proper one to use at runtime.

## SimplifiedCaptureVisionSettings

`SimplifiedCaptureVisionSettings` is an object that manages various runtime settings of the DBR SDK which dictate the performance of the barcode reader.

Basic steps:

1. Get the current value of the `SimplifiedCaptureVisionSettings` object
2. Change one or more settings
3. Update the `SimplifiedCaptureVisionSettings` object with the changed copy for the changes to take effect

The following code snippet demonstrates how to specify barcode formats via `SimplifiedCaptureVisionSettings`.  

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
   // `cvr` is an instance of `CaptureVisionRouter`.
   SimplifiedCaptureVisionSettings captureVisionSettings = cvr.getSimplifiedSettings(EnumPresetTemplate.PT_READ_BARCODES);
   captureVisionSettings.barcodeSettings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE | EnumBarcodeFormat.BF_ONED;
   cvr.updateSettings(EnumPresetTemplate.PT_READ_BARCODES, captureVisionSettings);
} catch (CaptureVisionRouterException e) {
   e.printStackTrace();
}
```
>
```objc
NSError *error;
// `cvr` is an instance of `DSCaptureVisionRouter`.
DSSimplifiedCaptureVisionSettings *cvrRuntimeSettings = [cvr getSimplifiedSettings:DSPresetTemplateReadBarcodes error:&error];
cvrRuntimeSettings.barcodeSettings.barcodeFormatIds = DSBarcodeFormatQRCode | DSBarcodeFormatOned;
[cvr updateSettings:DSPresetTemplate.PT_READ_BARCODES settings:cvrRuntimeSettings error:&error];
```
>
```swift
guard let cvrRuntimeSettings = try? cvr.getSimplifiedSettings(template.rawValue) else {
    return
}
cvrRuntimeSettings.barcodeSettings?.barcodeFormatIds = .qrCode | .oneD
do {
    try cvr.updateSettings(template.rawValue, settings:cvrRuntimeSettings)
} catch {
    print("update runtimeSettings error:\(error.localizedDescription)")
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

**See Also**  

- `SimplifiedCaptureVisionSettings:` [C++]({{ site.dcvb_cpp_api }}capture-vision-router/structs/simplified-capture-vision-settings.html) / [JavaScript](https://www.dynamsoft.com/capture-vision/docs/web/programming/javascript/api-reference/capture-vision-router/interfaces/simplified-capture-vision-settings.html) / [Python]({{ site.dcvb_python_api }}capture-vision-router/auxiliary-classes/simplified-capture-vision-settings.html) / [.NET]({{ site.dcvb_dotnet_api }}capture-vision-router/auxiliary-classes/simplified-capture-vision-settings.html)
- `SimplifiedBarcodeReaderSettings:` [C++]({{ site.cpp_api }}simplified-barcode-reader-settings.html) / [JavaScript](https://www.dynamsoft.com/barcode-reader/docs/web/programming/javascript/api-reference/interfaces/simplified-barcode-reader-settings.html) / [Python]({{ site.python_api }}simplified-barcode-reader-settings.html) / [.NET]({{ site.dotnet_api }}simplified-barcode-reader-settings.html)

## JSON Template

With a JSON template, you can make use of all the configuration options that DBR offers.

Basic steps:

1. Build a JSON template and configure the required parameters
2. Save the template to a file or convert it to string
3. Call method `InitSettingsFromFile` or `InitSettings` to apply the settings

> Read [Parameter Template Structure]({{ site.parameters }}structure-and-interfaces-of-parameters.html) to learn more about the structure of templates.

> JavaScript edition only supports importing a JSON string and not a file.

The following steps demonstrates how to specify barcode formats via `JSON Template`.  

  * Build a most basic JSON template and configure parameter `BarcodeFormatIds`
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

  * Save the above template to file `setting.json` or Convert the above content into a string format for the respective programming language.

  * Call method `InitSettingsFromFile` or `InitSettings` to apply the settings

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
    // `router` is an instance of `CaptureVisionRouter`.
    // In the JS edition, the method name we use for initialization is different.
    router.initSettings("PATH-TO-YOUR-SETTING")
    ```
    >
    ```c++
    char szErrorMsg[256] = {0};
    CCaptureVisionRouter* cvr = new CCaptureVisionRouter;
    cvr->InitSettingsFromFile("PATH-TO-SETTING-FILE", szErrorMsg, 256);
    //cvr->InitSettings("{\"CaptureVisionTemplates\":[{\"Name\":\"CV_0\",\"ImageROIProcessingNameArray\":[\"TA_0\"]}],\"TargetROIDefOptions\":[{\"Name\":\"TA_0\",\"TaskSettingNameArray\":[\"BR_0\"]}],\"BarcodeReaderTaskSettingOptions\":[{\"Name\":\"BR_0\",\"BarcodeFormatIds\":[\"BF_ONED\",\"BF_QR_CODE\"]}]}", szErrorMsg, 256);
    // more process here
    ```
    >
    ```java
    try {
       // `cvr` is an instance of `CaptureVisionRouter`.
       cvr.initSettingsFromFile("PATH-TO-YOUR-SETTING-FILE");
    } catch (CaptureVisionRouterException e) {
       e.printStackTrace();
    }
    ```
    >
    ```objc
    NSError *error;
    // `cvr` is an instance of `DSCaptureVisionRouter`.
    [self.cvr initSettingsFromFile:@"PATH-TO-YOUR-SETTING-FILE" error:&error];
    ```
    >
    ```swift
    do{
       //`cvr` is an instance of `CaptureVisionRouter`.
       try cvr.initSettingsFromFile("PATH-TO-YOUR-SETTING-FILE")
    }catch{
       // Add code to do when error occurs.
    }
    ```
    >
    ```python
    cvr_instance = CaptureVisionRouter()
    template_file = 'PATH-TO-YOUR-SETTING-FILE'
    errorCode, errorMsg = cvr_instance.init_settings_from_file(template_file)
    # template_string = 'TEMPLATE-JSON-STRING'
    # errorCode, errorMsg = cvr_instance.init_settings(template_string)
    if errorCode != EnumErrorCode.EC_OK:
        raise Exception("Init template failed: " + errorMsg)
    # more process here
    ```
    >
    ```csharp
    int errorCode = 1;
    string errorMsg;
    using (CaptureVisionRouter cvr = new CaptureVisionRouter())
    {
        string templateFile = "PATH-TO-YOUR-SETTING-FILE";
        errorCode = cvr.InitSettingsFromFile(templateFile, out errorMsg);
        //string templateString = "";
        //errorCode = cvr.InitSettings(templateString, out errorMsg);
        if (errorCode != (int)EnumErrorCode.EC_OK)
        {
            Console.WriteLine("Init template failed: " + errorMsg);
        }
        // more process here
    }
    ```

## Mixed Usage

It's also possible to use a `JSON Template` along with `SimplifiedCaptureVisionSettings`. Typically, you initialize the SDK with a `JSON Template`, the settings in which will be reflected in `SimplifiedCaptureVisionSettings`, then you can further fine-tune `SimplifiedCaptureVisionSettings` to apply to the actual reading process.
