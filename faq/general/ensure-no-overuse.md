---
layout: default-layout
title: How to ensure that a device does not overuse its allotted number of instances?
keywords: Dynamsoft Barcode Reader, FAQ, Pricing/Licensing, General, ensure no overuse
description: How to ensure that a device does not overuse its allotted number of instances?
needAutoGenerateSidebar: false
permalink: /faq/general/ensure-no-overuse.html
---

## How to ensure that a device does not overuse its allotted number of instances?

[<< Back to FAQ index](index.md)

The standard way(C++) to use concurrent instance license is:

* Call method SetMaxConcurrentInstanceCount to set the license count you purchased.
* Update the parameter MaxParallelTasks to align with the purchased quantity.
```cpp
    int licenseCount = YOUR-PURCHASED-LICENSE-COUNT;
    int errorCode = 1;
    char errorMsg[512];
    // Set the license count you purchased
    SetMaxConcurrentInstanceCount(licenseCount);
    errorCode = CLicenseManager::InitLicense("YOUR-LICENSE-KEY", errorMsg, 512);
    if (errorCode != EC_OK)
        cout << "License initialization error: " << errorMsg << endl;
    CCaptureVisionRouter *cvr = new CCaptureVisionRouter;
    // Update parameter maxParallelTasks
    SimplifiedCaptureVisionSettings setting;
    cvr->GetSimplifiedSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    setting.maxParallelTasks = licenseCount;
    cvr->UpdateSettings(CPresetTemplate::PT_READ_BARCODES, &setting);
    // add further process
```

Sometimes, a device may encounter an error message indicating that the instance count has exceeded the limit. This occurs when a device attempts to request more instances than the license pool has available or to initiate more parallel tasks than requested.

By default, if `SetMaxConcurrentInstanceCount` is not called, your program will obtain the full number of instances from the license. If you request more instances than are available in your license pool, an error will be thrown.

Additionally, if `maxParallelTasks` is not set, 4 parallel tasks will be opened to decode barcodes. If you configure the barcode reading settings to open up more parallel tasks than the number of instances obtained from `SetMaxConcurrentInstanceCount`, an error will be thrown.

> If you attempt to run two programs on one device, the sum of the number of ParallelTasks opened by the two programs cannot exceed the maximum number of `SetMaxConcurrentInstanceCount` that the two programs set. For example, if one program sets `SetMaxConcurrentInstanceCount`(10) and another program sets `SetMaxConcurrentInstanceCount`(5), and your license has sufficient instances, the device will obtain 10 instances. If one program sets `setting.maxParallelTasks` = 6 and another program sets `setting.maxParallelTasks` = 5, an error will be thrown because the total number of parallel tasks (5+6) exceeds the MaxConcurrentInstanceCount (10).


