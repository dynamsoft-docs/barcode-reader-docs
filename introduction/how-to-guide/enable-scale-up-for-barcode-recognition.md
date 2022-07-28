---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Enable Scale Up for Barcode Recognition
description: This page shows how to enable scale up for barcode recognition.
keywords: scale up, small image decode, ScaleUpModes, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/enable-scale-up-for-barcode-recognition.html
---


# How-to Guides - Enable Scale Up for Barcode Recognition


For some barcodes with small module size, Dynamsoft Barcode Reader SDK will automatically enlarge the barcode to a proper size before recognition.    


Since version 7.3, Dynamsoft Barcode Reader SDK provides [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`ScaleUpModes`]({{ site.structs }}PublicRuntimeSettings.html)#scaleupmodes) with arguments - `ModuleSizeThreshold`, `AcuteAngleWithXThreshold` and `TargetModuleSize` APIs which allow you to set the custom rules for scaling up. To enable it, you need to set [`PublicRuntimeSettings`]({{ site.structs }}PublicRuntimeSettings.html)->[`ScaleUpModes`]({{ site.structs }}PublicRuntimeSettings.html#scaleupmodes) to `SUM_LINEAR_INTERPOLATION` or `SUM_NEAREST_NEIGHBOUR_INTERPOLATION`, then set the rest parameters.   



If the module size of the barcode < ModuleSizeThreshold and the acute angle with X of the barcode > AcuteAngleWithXThreshold, the barcode will be enlarged to N times (N=1,2,3...) till N * modulesize >= TargetModuleSize.    


**Example**    


Condition: `ModuleSizeThreshold` = 4, `AcuteAngleWithXThreshold` = 30, `TargetModuleSize` = 4    

![Scale Up Example Image][1]   

Result:    

The module size of the barcode in the image is 2, which is smaller than ModuleSizeThreshold, and the acute angle is larger than AcuteAngleWithXThreshold, so our library will perform scaling up operation. After scaling up, the barcode is enlarged to 2 times since 2 * modulesize >= TargetModuleSize.   


For more information about enabling scale up mode, please see [`ScaleUpModes`]({{ site.parameters_reference }}scale-up-modes.html#scaleupmodes) and [How to Set Scale Up Modes]({{ site.scenario_settings }}how-to-set-scaleup-modes.html).    


[1]: assets/enable-scale-up-for-barcode-recognition/scale-up-image.png
