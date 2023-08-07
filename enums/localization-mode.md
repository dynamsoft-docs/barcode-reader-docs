---
layout: default-layout
Title: LocalizationMode - Dynamsoft Barcode Reader Enumerations
Description: The enumeration LocalizationMode of Dynamsoft Barcode Reader describes the localization modes of the barcodes.
Keywords: Localization mode
needGenerateH3Content: true
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: LocalizationMode
codeAutoHeight: true
---

# Enumeration LocalizationMode

`LocalizationMode` describes the localization modes of the barcodes. It is used to define how to search for the barcodes.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- C++
   >
>
```javascript
enum EnumLocalizationMode {
   /**Not supported yet. */
   LM_AUTO = 1,
   /**Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. */
   LM_CONNECTED_BLOCKS = 2,
   /**Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. */
   LM_STATISTICS = 4,
   /**Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. */
   LM_LINES = 8,
   /**Localizes barcodes quickly. This mode is recommended in interactive scenario. Check @ref LM for available argument settings.*/
   LM_SCAN_DIRECTLY = 16,
   /**Localizes barcodes by groups of marks.This is optimized for DPM codes. */
   LM_STATISTICS_MARKS = 32,
   /**Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. */
   LM_STATISTICS_POSTAL_CODE = 64,
   /**Localizes barcodes from the centre of the image. Check @ref LM for available argument settings. */
   LM_CENTRE = 128,
   /**Localizes 1D barcodes fast. Check @ref LM for available argument settings. */
   LM_ONED_FAST_SCAN = 256,
   /**Skips localization. */
   LM_SKIP = 0,
   /**Reserved setting for localization mode. */
   LM_REV = 2147483648
}
```
>
```java
@Retention(RetentionPolicy.CLASS)
public @interface EnumLocalizationMode {
   /**Not supported yet. */
   public static final int LM_AUTO = 1;
   /**Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. */
   public static final int LM_CONNECTED_BLOCKS = 2;
   /**Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. */
   public static final int LM_STATISTICS = 4;
   /**Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. */
   public static final int LM_LINES = 8;
   /**Localizes barcodes quickly. This mode is recommended in interactive scenario. Check @ref LM for available argument settings.*/
   public static final int LM_SCAN_DIRECTLY = 16;
   /**Localizes barcodes by groups of marks.This is optimized for DPM codes. */
   public static final int LM_STATISTICS_MARKS = 32;
   /**Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. */
   public static final int LM_STATISTICS_POSTAL_CODE = 64;
   /**Localizes barcodes from the centre of the image. Check @ref LM for available argument settings. */
   public static final int LM_CENTRE = 128;
   /**Localizes 1D barcodes fast. Check @ref LM for available argument settings. */
   public static final int LM_ONED_FAST_SCAN = 256;
   /**Skips localization. */
   public static final int LM_SKIP = 0;
   /**Reserved setting for localization mode. */
   public static final int LM_REV = 2147483648;
}
```
>
```objc
typedef NS_ENUM(NSInteger , DSLocalizationMode)
{
   /**Not supported yet. */
   DSLocalizationModeAuto = 0x01,
   /**Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. */
   DSLocalizationModeConnectedBlocks = 0x02,
   /**Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. */
   DSLocalizationModeStatistics = 0x04,
   /**Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. */
   DSLocalizationModeLines = 0x08,
   /**Localizes barcodes quickly. This mode is recommended in interactive scenario. Check @ref LM for available argument settings.*/
   DSLocalizationModeScanDirectly = 0x10,
   /**Localizes barcodes by groups of marks.This is optimized for DPM codes. */
   DSLocalizationModeStatisticsMarks = 0x20,
   /**Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. */
   DSLocalizationModeStatisticsPostalCode = 0x40,
   /**Localizes barcodes from the centre of the image. Check @ref LM for available argument settings. */
   DSLocalizationModeCentre = 0x80,
   /**Localizes 1D barcodes fast. Check @ref LM for available argument settings. */
   DSLocalizationModeOneDFastScan = 0x100,
   /**Reserved setting for localization mode.*/
   DSLocalizationModeRev = -2147483648,
   /**Skips localization. */
   DSLocalizationModeSkip = 0x00
};
```
>
```swift
public enum LocalizationMode : Int
{
   /**Not supported yet. */
   auto = 0x01
   /**Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. */
   connectedBlocks = 0x02
   /**Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. */
   statistics = 0x04
   /**Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. */
   lines = 0x08
   /**Localizes barcodes quickly. This mode is recommended in interactive scenario. Check @ref LM for available argument settings.*/
   scanDirectly = 0x10
   /**Localizes barcodes by groups of marks.This is optimized for DPM codes. */
   statisticsMarks = 0x20
   /**Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. */
   postalCode = 0x40
   /**Localizes barcodes from the centre of the image. Check @ref LM for available argument settings. */
   centre = 0x80,
   /**Localizes 1D barcodes fast. Check @ref LM for available argument settings. */
   oneDFastScan = 0x100
   /**Reserved setting for localization mode.*/
   rev = -2147483648
   /**Skips localization. */
   skip = 0x00
}
```
>
```cpp
typedef enum LocalizationMode
{
   /**Not supported yet. */
   LM_AUTO = 0x01,
   /**Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. */
   LM_CONNECTED_BLOCKS = 0x02,
   /**Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. */
   LM_STATISTICS = 0x04,
   /**Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. */
   LM_LINES = 0x08,
   /**Localizes barcodes quickly. This mode is recommended in interactive scenario. Check @ref LM for available argument settings. */
   LM_SCAN_DIRECTLY = 0x10,
   /**Localizes barcodes by groups of marks.This is optimized for DPM codes. */
   LM_STATISTICS_MARKS = 0x20,
   /**Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. */
   LM_STATISTICS_POSTAL_CODE = 0x40,
   /**Localizes barcodes from the centre of the image. Check @ref LM for available argument settings. */
   LM_CENTRE = 0x80,
   /**Localizes 1D barcodes fast. Check @ref LM for available argument settings. */
   LM_ONED_FAST_SCAN = 0x100,
   /**Reserved setting for localization mode. */
#if defined(_WIN32) || defined(_WIN64)
   LM_REV = 0x80000000,
#else
   LM_REV = -2147483648,
#endif
   /**Skips localization. */
   LM_SKIP = 0x00
}LocalizationMode;
```
