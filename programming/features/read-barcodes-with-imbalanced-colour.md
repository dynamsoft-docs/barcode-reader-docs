---
layout: default-layout
title: Read barcodes with imbalanced colour - Dynamsoft Barcode Reader SDK
description: This page describes how to read huge barcodes with imbalanced colour  in Dynamsoft Barcode Reader SDK.
keywords: imbalanced colour barcode
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
permalink: /programming/features/read-barcodes-with-imbalanced-colour.html
---

# How to read barcodes with imbalanced colour

As we all know, any color is composed of red, blue and green. If the image is a colour image, DBR will convert it to grayscale first for further process.

```math
Gray = Red*RedChannelWeight + Green*GreenChannelWeight + Blue*BlueChannelWeight
```

The default weights in DBR are suitable for most cases. However, some color images may produce poor grayscale images based on the default weights. For example, the image below is a color image with imbalanced colour.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/colour-conversion-original-image.png" alt="barcode colour image" width="25%" /></p>
   <p>Figure 1 – Sample barcode colour image</p>
</div>

The default grayscale image converted by DBR is show below.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/default-gray-img.png" alt="barcode gray image using default" width="25%" /></p>
   <p>Figure 2 – Sample barcode gray image using default mode</p>
</div>

The image below shows the grayscale image converted by DBR using only red channel.

<div align="center">
   <p><img src="assets/read-barcodes-with-imbalanced-colour/gray-img-only-red.png" alt="barcode gray image using red" width="25%" /></p>
   <p>Figure 3 – Sample barcode gray image using only red channel</p>
</div>

As we can see, the gray image converted using only red channel is much better than the default gray image. Now we will demonstrate how to configure the `PublicRuntimeSettings.furtherModes.colourConversionModes` to complete the conversion.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- Java
   >- C#
   >- C++
   >- C
   >
>
```javascript
// Obtains the current runtime settings of DBR.
let rs = await scanner.getRuntimeSettings();
// Sets the text filter mode.
rs.furtherModes.colourConversionModes[0] = Dynamsoft.DBR.EnumColourConversionMode.CICM_GENERAL;
// Updates the settings.
await scanner.updateRuntimeSettings(rs);
// Fine-tunes some arguments of the first mode in `colourConversionModes`
scanner.setModeArgument("colourConversionModes", 0, "RedChannelWeight", "1000");
scanner.setModeArgument("colourConversionModes", 0, "GreenChannelWeight", "0");
scanner.setModeArgument("colourConversionModes", 0, "BlueChannelWeight", "0");
await scanner.show();
```
>
```java
// Obtain current runtime settings of `reader` instance.
PublicRuntimeSettings settings = reader.getRuntimeSettings();
// Enable a colour conversion mode
settings.furtherModes.colourConversionModes = new int[]{ EnumColourConversionMode.CICM_GENERAL };
// Update the settings.
reader.updateRuntimeSettings(settings);
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
reader.setModeArgument("colourConversionModes", 0, "RedChannelWeight", "1000");
reader.setModeArgument("colourConversionModes", 0, "GreenChannelWeight", "0");
reader.setModeArgument("colourConversionModes", 0, "BlueChannelWeight", "0");
```
>
```objc
NSError* err = nil;
// Obtain current runtime settings of `reader` instance.
iPublicRuntimeSettings* settings = [reader getRuntimeSettings:&err];
// Enable a colour conversion mode
settings.furtherModes.colourConversionModes = @[@(EnumColourConversionModeGeneral)];
// Update the settings.
[reader updateRuntimeSettings:settings error:&err];
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"RedChannelWeight" argumentValue:"1000" error:nil];
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"GreenChannelWeight" argumentValue:"0" error:nil];
[reader setModeArgument:@"colourConversionModes" index:0 argumentName:@"BlueChannelWeight" argumentValue:"0" error:nil];
```
>
```swift
// Obtain current runtime settings of `reader` instance.
let settings = try? reader.getRuntimeSettings()
// Enable a colour conversion mode
settings!.furtherModes.colourConversionModes = [EnumColourConversionMode.general.rawValue]
// Update the settings.
try? reader.updateRuntimeSettings(settings!)
// Fine-tune three `Weight` parameter value of the first mode in `colourConversionModes`
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "RedChannelWeight", argumentValue: "1000")
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "GreenChannelWeight", argumentValue: "0")
try? reader.setModeArgument("colourConversionModes", index: 0, argumentName: "BlueChannelWeight", argumentValue: "0")
```
>
```python
```
>
```java
```
>
```csharp
```
>
```c++
```
>
```c
```
