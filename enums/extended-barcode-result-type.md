---
layout: default-layout
Title: ExtendedBarcodeResultType - Dynamsoft Barcode Reader Enumerations
Description: The enumeration ExtendedBarcodeResultType of Dynamsoft Barcode Reader describes the type of the extended barcode result.
Keywords: Extended barcode result type
needGenerateH3Content: true
needAutoGenerateSidebar: true
noTitleIndex: true
breadcrumbText: ExtendedBarcodeResultType
codeAutoHeight: true
---

# Enumeration ExtendedBarcodeResultType

`ExtendedBarcodeResultType` describes the type of the extended barcode result.

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- C++
   >
>
```javascript
enum EnumExtendedBarcodeResultType
{
   /**Specifies the standard text. This means the barcode value. */
   EBRT_STANDARD_RESULT = 0,
   /**Specifies all the candidate text. This means all the standard text results decoded from the barcode. */
   EBRT_CANDIDATE_RESULT = 1,
   /**Specifies the partial text. This means part of the text result decoded from the barcode. */
   EBRT_PARTIAL_RESULT = 2
}
```
>
```java
@Retention(RetentionPolicy.CLASS)
public @interface EnumExtendedBarcodeResultType
{
   /**Specifies the standard text. This means the barcode value. */
   public static final int EBRT_STANDARD_RESULT = 0;
   /**Specifies all the candidate text. This means all the standard text results decoded from the barcode. */
   public static final int EBRT_CANDIDATE_RESULT = 1;
   /**Specifies the partial text. This means part of the text result decoded from the barcode. */
   public static final int EBRT_PARTIAL_RESULT = 2;
}
```
>
```objc
typedef NS_ENUM(NSInteger, DSExtendedBarcodeResultType)
{
   /**Specifies the standard text. This means the barcode value. */
   DSExtendedBarcodeResultTypeStandardResult = 0,
   /**Specifies all the candidate text. This means all the standard text results decoded from the barcode. */
   DSExtendedBarcodeResultTypeCandidateResult = 1,
   /**Specifies the partial text. This means part of the text result decoded from the barcode. */
   DSExtendedBarcodeResultTypePartialResult = 2
};
```
>
```swift
public enum ExtendedBarcodeResultType : Int
{
   /**Specifies the standard text. This means the barcode value. */
   standardResult = 0
   /**Specifies all the candidate text. This means all the standard text results decoded from the barcode. */
   candidateResult = 1
   /**Specifies the partial text. This means part of the text result decoded from the barcode. */
   partialResult = 2
}
```
>
```cpp
typedef enum ExtendedBarcodeResultType
{
   /**Specifies the standard text. This means the barcode value. */
   EBRT_STANDARD_RESULT,
   /**Specifies all the candidate text. This means all the standard text results decoded from the barcode. */
   EBRT_CANDIDATE_RESULT,
   /**Specifies the partial text. This means part of the text result decoded from the barcode. */
   EBRT_PARTIAL_RESULT
}ExtendedBarcodeResultType;
```
