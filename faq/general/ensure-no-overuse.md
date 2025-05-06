---
layout: default-layout
title: How to properly use concurrent instance license?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, ensure no overuse
description: How to properly use concurrent instance license?
needAutoGenerateSidebar: false
---

## How to properly use concurrent instance license?

[<< Back to FAQ index](index.md)

The standard way to use concurrent instance license is:

* Call method `SetMaxConcurrentInstanceCount` to set the license count you purchased.
* Update the parameter `MaxParallelTasks` to align with the purchased quantity.

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

## Managing Instance Limits and Parallel Tasks on a Device

Sometimes, a device may encounter an error indicating that the instance count has exceeded the permitted limit. This typically occurs when the total number of concurrently used instances surpasses the maximum number allowed for the device, either due to over-requesting instances or initiating more parallel decoding tasks than permitted.

### About `SetMaxConcurrentInstanceCount`

The `SetMaxConcurrentInstanceCount` function is used to **declare the maximum number of instances a device is allowed to use**. This count is **managed per device**, not per program.

- If multiple programs are running on the same device and each calls `SetMaxConcurrentInstanceCount`, the device will be allocated **the highest value** among the calls, **not the sum**.

- If `SetMaxConcurrentInstanceCount` is **not called**, the device will by default request **only one instance**, not the full number available from the purchased license quantity.

### About `MaxParallelTasks`

The `MaxParallelTasks` setting defines how many decoding tasks can run in parallel within a single `CaptureVisionRouter` instance. It controls the level of concurrency during barcode processing.

- Each `CaptureVisionRouter` instance will open up to `MaxParallelTasks` decoding tasks simultaneously.
- By default, if `MaxParallelTasks` is **not set, 4 parallel tasks** will be opened.

### How Instance Usage Is Calculated

The actual instance usage on a device is calculated using the following formula:

```text
Total Instance Usage = Number of concurrent programs × 
Number of CaptureVisionRouter instances per program × 
MaxParallelTasks per CaptureVisionRouter instance
```
For example, if two programs are running on the same device, and each creates 2 `CaptureVisionRouter` instances with `MaxParallelTasks = 4`, then the total instance usage is:

`2 programs × 2 instances × 4 tasks = 16 instances`

### When Will an Error Occur?

An error will be thrown if the total instance usage on the device exceeds the maximum instance count declared via `SetMaxConcurrentInstanceCount`. This can happen in the following scenarios:

- The device tries to open more decoding tasks (via `MaxParallelTasks`) than the number of instances allowed.
- Multiple programs together consume more instances than what the device was granted.

>Example:  
>Program A calls `SetMaxConcurrentInstanceCount(10)` and Program B calls `SetMaxConcurrentInstanceCount(5)`. The device will be allowed to use up to **10 instances**.  
>If Program A uses `MaxParallelTasks = 6` and Program B uses `MaxParallelTasks = 5`, and both have only one `CaptureVisionRouter` instance, the total becomes `6 + 5 = 11` which exceeds the limit of 10, causing an error.

### Best Practices

- Always call `SetMaxConcurrentInstanceCount` early to explicitly declare your instance needs.
- Avoid exceeding the limit by carefully managing how many `CaptureVisionRouter` instances and `MaxParallelTasks` for each instance are being used across all running programs on a device.
- Monitor actual usage during development to avoid runtime errors in production.