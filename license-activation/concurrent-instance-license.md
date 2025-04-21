---
layout: default-layout
title: Concurrent Instance License Initialization - Dynamsoft Barcode Reader Licensing
description: This page shows how to concurrent instance license.
keywords: license initialization, concurrent instance license
needAutoGenerateSidebar: false
---

# Concurrent Instance License Initialization

## Get a Trial License

<a href="https://www.dynamsoft.com/company/contact" target="_blank">Contact us</a> to try out `Concurrent Instance License`.

## Get a Full License

<a href="https://www.dynamsoft.com/company/contact" target="_blank">Contact us</a> to purchase a full license.

## Set the License In the Code

The following shows how to set the license in the code.

<div class="sample-code-prefix template2"></div>
   >- C++
   >- C#
   >- Python
   >
>
```cpp
    int licenseCount = YOUR-PURCHASED-LICENSE-COUNT;
    int errorCode = 1;
    char errorMsg[512];
    // Set the license count you purchased
    SetMaxConcurrentInstanceCount(licenseCount);
    errorCode = CLicenseManager::InitLicense("YOUR-LICENSE-KEY", errorMsg, 512);
    if (errorCode != EC_OK)
        cout << "License initialization error: " << errorMsg << endl;
    CCaptureVisionRouter *cvRouter = new CCaptureVisionRouter;
    // Update parameter maxParallelTasks
    SimplifiedCaptureVisionSettings setting;
    cvRouter->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    setting.maxParallelTasks = licenseCount;
    cvRouter->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    // add further process
    // CCapturedResult *result = cvRouter->Capture("IMAGE-FILE", CPresetTemplate::PT_READ_BARCODES);
```
>
```csharp
    int licenseCount = YOUR-PURCHASED-LICENSE-COUNT;
    int errorCode = 0;
    string errorMsg;
    errorCode = LicenseManager.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
    LicenseManager.SetMaxConcurrentInstanceCount(licenseCount)
    if (errorCode != (int)EnumErrorCode.EC_OK && errorCode != (int)EnumErrorCode.EC_LICENSE_CACHE_USED)
    {
        Console.WriteLine("License initialization error: " + errorMsg);
    }
    else
    {
        CaptureVisionRouter cvRouter = new CaptureVisionRouter();
        SimplifiedCaptureVisionSettings settings;
        cvRouter.GetSimplifiedSettings(PresetTemplate.PT_READ_BARCODES, out settings);
        setting.maxParallelTasks = licenseCount;
        cvRouter.UpdateSettings(PresetTemplate.PT_READ_BARCODES, settings, out errorMsg);
        // add code for further process
        // CapturedResult result = cvRouter.Capture("IMAGE-FILE", PresetTemplate.PT_READ_BARCODES);
    }
```
>
```python
license_count = YOUR-PURCHASED-LICENSE-COUNT
LicenseManager.set_max_concurrent_instance_count(license_count)
error_code, error_msg = LicenseManager.init_license("YOUR-LICENSE-KEY")
if error_code != EnumErrorCode.EC_OK and error_code != EnumErrorCode.EC_LICENSE_CACHE_USED:
    print("License initialization error: " + error_msg)
else:
    cvr_instance = CaptureVisionRouter()
    error_code, error_msg, settings = cvr_instance.get_simplified_settings(EnumPresetTemplate.PT_READ_BARCODES)
    settings.max_parallel_tasks = license_count
    error_code, error_msg = cvr_instance.update_settings(EnumPresetTemplate.PT_READ_BARCODES, settings)
    # add code for further process
    # result_array = cvr_instance.capture_multi_pages("IMAGE-FILE", EnumPresetTemplate.PT_READ_BARCODES)
```
