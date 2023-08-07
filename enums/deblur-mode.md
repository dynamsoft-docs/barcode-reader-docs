---
layout: default-layout
Title: DeblurMode - Dynamsoft Barcode Reader Enumerations
Description: The enumeration DeblurMode of Dynamsoft Barcode Reader describes deblur modes that implemented on the localized barcodes.
Keywords: Deblur mode
needGenerateH3Content: true
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: DeblurMode
codeAutoHeight: true
---

# Enumeration DeblurMode

`DeblurMode` is implemented in the final stage of barcode decoding algorithm. It decides which image processing algorithms to perform on the localized barcode zones to extract the barcode information.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- C++
   >
>
```javascript
enum EnumDeblurMode {
   /** Performs deblur process using the direct binarization algorithm. */
   DM_DIRECT_BINARIZATION = 1,
   /** Performs deblur process using the threshold binarization algorithm. */
   DM_THRESHOLD_BINARIZATION = 2,
   /** Performs deblur process using the gray equalization algorithm. */
   DM_GRAY_EQUALIZATION = 4,
   /** Performs deblur process using the smoothing algorithm. */
   DM_SMOOTHING = 8,
   /** Performs deblur process using the morphing algorithm. */
   DM_MORPHING = 16,
   /** Performs deblur process using the deep analysis algorithm. */
   DM_DEEP_ANALYSIS = 32,
   /** Performs deblur process using the sharpening algorithm. */
   DM_SHARPENING = 64,
   /** Performs deblur process based on the binary image from the localization process. */
   DM_BASED_ON_LOC_BIN = 128,
   /** Performs deblur process using the sharpening and smoothing algorithm. */
   DM_SHARPENING_SMOOTHING = 256,
   /** Reserved setting for deblur mode. */
   DM_REV = -2147483648
}
```
>
```java
@Retention(RetentionPolicy.CLASS)
public @interface EnumDeblurMode {
   /** Performs deblur process using the direct binarization algorithm. */
   public static final int DM_DIRECT_BINARIZATION = 0x01;
   /** Performs deblur process using the threshold binarization algorithm. */
   public static final int DM_THRESHOLD_BINARIZATION = 0x02;
   /** Performs deblur process using the gray equalization algorithm. */
   public static final int DM_GRAY_EQUALIZATION = 0x04;
   /** Performs deblur process using the smoothing algorithm. */
   public static final int DM_SMOOTHING = 0x08;
   /** Performs deblur process using the morphing algorithm. */
   public static final int DM_MORPHING = 0x10;
   /** Performs deblur process using the deep analysis algorithm. */
   public static final int DM_DEEP_ANALYSIS = 0x20;
   /** Performs deblur process using the sharpening algorithm. */
   public static final int DM_SHARPENING = 0x40;
   /** Performs deblur process based on the binary image from the localization process. */
   public static final int DM_BASED_ON_LOC_BIN = 0x80;
   /** Performs deblur process using the sharpening and smoothing algorithm. */
   public static final int DM_SHARPENING_SMOOTHING = 0x100;
   /**Reserved setting for deblur mode.*/
   public static final int DM_REV = -2147483648;
   /**Skips the deblur process.*/
   public static final int DM_SKIP = 0x00
}
```
>
```objc
typedef NS_ENUM(NSInteger , DSDeblurMode)
{
   /**Performs deblur process using the direct binarization algorithm.*/
   DSDeblurModeDirectBinarization = 0x01,
   /**Performs deblur process using the threshold binarization algorithm.*/
   DSDeblurModeThresholdBinarization = 0x02,
   /**Performs deblur process using the gray equalization algorithm.*/
   DSDeblurModeGrayEqualization = 0x04,
   /**Performs deblur process using the smoothing algorithm.*/
   DSDeblurModeSmoothing = 0x08,
   /**Performs deblur process using the morphing algorithm.*/
   DSDeblurModeMorphing = 0x10,
   /**Performs deblur process using the deep analysis algorithm.*/
   DSDeblurModeDeepAnalysis = 0x20,
   /**Performs deblur process using the sharpening algorithm.*/
   DSDeblurModeSharpening = 0x40,
   /**Performs deblur process based on the binary image from the localization process.*/
   DSDeblurModeBasedOnLocBin = 0x80,
   /**Performs deblur process using the sharpening and smoothing algorithm.*/
   DSDeblurModeSharpeningSmoothing = 0x100,
   /**Reserved setting for deblur mode.*/
   DSDeblurModeRev = -2147483648,
   /**Skips the deblur process.*/
   DSDeblurModeSkip = 0x00
};
```
>
```swift
public enum DeblurMode : Int
{
   /**Performs deblur process using the direct binarization algorithm.*/
   directBinarization = 0x01
   /**Performs deblur process using the threshold binarization algorithm.*/
   thresholdBinarization = 0x02
   /**Performs deblur process using the gray equalization algorithm.*/
   grayEqualization = 0x04
   /**Performs deblur process using the smoothing algorithm.*/
   smoothing = 0x08
   /**Performs deblur process using the morphing algorithm.*/
   morphing = 0x10
   /**Performs deblur process using the deep analysis algorithm.*/
   deepAnalysis = 0x20
   /**Performs deblur process using the sharpening algorithm.*/
   sharpening = 0x40
   /**Performs deblur process based on the binary image from the localization process.*/
   basedOnLocBin = 0x80
   /**Performs deblur process using the sharpening and smoothing algorithm.*/
   sharpeningSmoothing = 0x100
   /**Reserved setting for deblur mode.*/
   rev = -2147483648
   /**Skips the deblur process.*/
   skip = 0x00
}
```
>
```cpp
typedef enum DeblurMode
{
   /** Performs deblur process using the direct binarization algorithm. */
   DM_DIRECT_BINARIZATION = 0x01,
   /** Performs deblur process using the threshold binarization algorithm. */
   DM_THRESHOLD_BINARIZATION = 0x02,
   /** Performs deblur process using the gray equalization algorithm. */
   DM_GRAY_EQUALIZATION = 0x04,
   /** Performs deblur process using the smoothing algorithm. */
   DM_SMOOTHING = 0x08,
   /** Performs deblur process using the morphing algorithm. */
   DM_MORPHING = 0x10,
   /** Performs deblur process using the deep analysis algorithm. */
   DM_DEEP_ANALYSIS = 0x20,
   /** Performs deblur process using the sharpening algorithm. */
   DM_SHARPENING = 0x40,
   /** Performs deblur process based on the binary image from the localization process. */
   DM_BASED_ON_LOC_BIN = 0x80,
   /** Performs deblur process using the sharpening and smoothing algorithm. */
   DM_SHARPENING_SMOOTHING = 0x100,
   /** Reserved setting for deblur mode. */
#if defined(_WIN32) || defined(_WIN64)
   DM_REV = 0x80000000,
#else
   DM_REV = -2147483648,
#endif
   /**Skips the deblur process. */
   DM_SKIP = 0x00
}DeblurMode;
```
