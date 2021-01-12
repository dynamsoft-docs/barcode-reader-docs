---
layout: default-layout
title: Dynamsoft Barcode Reader Objective-C & Swift API Reference - Decode Methods
description: This page shows Decode methods of Dynamsoft Barcode Reader for iOS SDK.
keywords: decodeFileWithName, decodeImage, decodeBuffer, decodeBase64, decode methods, api reference, objective-c, oc, swift
needAutoGenerateSidebar: true
---


# Objective-C API Reference - Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`decodeFileWithName`](#decodefilewithname) | Decode barcodes from a specified image file. |
  | [`decodeImage`](#decodeImage) | Decode barcodes from an image file in memory. |
  | [`decodeBuffer`](#decodeBuffer) | Decode barcodes from raw buffer. |
  | [`decodeBase64`](#decodeBase64) | Decode barcodes from a base64 encoded string. |
  | [`createIntermediateResult`](decode.md#createintermediateresult) | Inits an intermediateResult struct with default values. |
  | [`decodeIntermediateResults`](#decodeintermediateresults) | Decodes barcode from intermediate results. |
  
---


## decodeFileWithName

Decode barcodes from a specified image file.

```objc
- (NSArray<iTextResult*>* _Nullable)decodeFileWithName:(NSString* _Nonnull)name templateName:(NSString* _Nonnull)templateName error:(NSError* _Nullable * _Nullable)error;	
```   
   
### Parameters

`[in] name` The local path of the file.
`[in] templateName` The template name.
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

All barcode text results decoded successfully.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
NSArray<iTextResult*>* result = [barcodeReader decodeFileWithName:@"your file path" templateName:@"" error:&error];
```

Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
let result = barcodeReader.decodeFileWithName(name:"your file path",templateName:"",error:&error)
```
&nbsp;





## decodeImage

Decode barcodes from an image file in memory.

```objc
- (NSArray<iTextResult*>* _Nullable)decodeImage:(UIImage* _Nonnull)image withTemplate:(NSString* _Nonnull)templateName error:(NSError* _Nullable * _Nullable)error;	
```  
   
### Parameters

`[in] image` The image file in memory.
`[in] templateName` The template name.
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

All barcode text results decoded successfully.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
UIImage *image = [[UIImage alloc] init];
NSError __autoreleasing * _Nullable error;
NSArray<iTextResult*>* result = [barcodeReader decodeImage:image withTemplate:@"" error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let image: UIImage? = UIImage()
let error: NSError? = NSError()
let result = barcodeReader.decodeImage(image:image withTemplate:"" error:&error)
```

## decodeBuffer

Decode barcodes from the memory buffer containing image pixels in defined format.

```objc
- (NSArray<iTextResult*>* _Nullable)decodeBuffer:(NSData* _Nonnull)buffer withWidth:(NSInteger)width height:(NSInteger)height stride:(NSInteger)stride format:(EnumImagePixelFormat)format templateName:(NSString* _Nonnull)templateName error:(NSError* _Nullable * _Nullable)error;
```   
   
### Parameters

`[in] buffer` The array of bytes which contain the image data.  
`[in] width` The width of the image in pixels.  
`[in] height` The height of the image in pixels.  
`[in] stride` The stride (or scan width) of the image.  
`[in] format` The image pixel format used in the image byte array.  
`[in] templateName` The template name.
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

All barcode text results decoded successfully.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSData *bufferBytes;
NSInteger iWidth = 0;
NSInteger iHeight = 0;
NSInteger iStride = 0;
NSInteger format;
NSError __autoreleasing * _Nullable error;
NSArray<iTextResult*>* result = [barcodeReader decodeBuffer:bufferBytes withWidth:iWidth height:iHeight stride:iStride format:format templateName:@"" error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
let error: NSError? = NSError()
let bufferBytes:Data?
let width = 0
let height = 0
let stride = 0
let format:Int
let result = barcodeReader.decodeBuffer(buffer: bufferBytes!, width: width, height: height, stride: stride, format: format, templateName: "", error: &error)
```

&nbsp;



## decodeBase64

Decode barcodes from an image file encoded as a base64 string.

```objc
DBR_API int DBR_DecodeBase64String (void* barcodeReader, const char* pBase64String, const char* pTemplateName)	
```   

### Parameters

`[in] base64` A base64 encoded string that represents an image.  
`[in] templateName` The template name.  
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

All barcode text results decoded successfully.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
NSArray<iTextResult*>* result = [barcodeReader decodeBase64:@"file in base64 string" withTemplate:@"" error:&error];
```
Swift:

```Swift
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************") 
let error: NSError? = NSError() 
let result = barcodeReader.decodeBase64(base64: file in base64 string, withTemplate: "", error: &error)
```


&nbsp;

## createIntermediateResult

Inits an intermediateResult struct with default values.

```objc
- (iIntermediateResult* _Nullable)createIntermediateResult:(EnumIntermediateResultType)type error:(NSError* _Nullable * _Nullable)error;	
```   
   
### Parameters

`[in] type` The type of the intermediate result to init.
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

An intermediateResult struct with default values.

### Code Snippet

Objective-C:

```objc
NSError __autoreleasing * _Nullable error;
iIntermediateResult *irResult;
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
irResult = [barcodeReader createIntermediateResult:EnumIntermediateResultTypeOriginalImage error:&error];
```

Swift:

```Swift
var error:NSError? = NSError()
var irResult:iIntermediateResult!
barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
irResult = try! barcodeReader?.createIntermediateResult(EnumIntermediateResultType(rawValue: EnumIntermediateResultType.originalImage.rawValue)!)
```


&nbsp;


## decodeIntermediateResults

Decodes barcode from intermediate results.

```objc
- (NSArray<iTextResult*>* _Nullable)decodeIntermediateResults:(NSArray<iIntermediateResult*>* _Nullable)array templateName:(NSString* _Nonnull)templateName error:(NSError* _Nullable * _Nullable)error;	
```   
   
### Parameters

`[in] array` The intermediate result array for decoding.
`[in] templateName` The template name.
`[in,out] error` Input a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error information. You may specify nil for this parameter if you do not want the error information.

### Return value

All barcode text results decoded successfully.

### Code Snippet

Objective-C:

```objc
DynamsoftBarcodeReader *barcodeReader;
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0260NwAAAHV***************"];
NSError __autoreleasing * _Nullable error;
[barcodeReader getRuntimeSettings:&error];
settings.intermediateResultTypes = EnumIntermediateResultTypeOriginalImage | EnumIntermediateResultTypeTypedBarcodeZone;
settings.intermediateResultSavingMode = EnumIntermediateResultSavingModeMemory;
[barcodeReader updateRuntimeSettings:settings error:&error];
NSArray<iTextResult*>* resultByFile = [barcodeReader decodeFileWithName:@"your file path" templateName:@"" error:&error];
NSArray<iIntermediateResult*>* array = [barcodeReader getIntermediateResult:&error];
NSArray<iTextResult*>* result = [barcodeReader decodeIntermediateResults:array withTemplate:@"" error:&error];
```

Swift:

```Swift
barcodeReader = DynamsoftBarcodeReader.init(license: "t0260NwAAAHV***************")
var result:[iTextResult]?
var error:NSError? = NSError()
var settings:iPublicRuntimeSettings! = try! barcodeReader?.getRuntimeSettings()
settings.intermediateResultTypes = EnumIntermediateResultType.originalImage.rawValue | EnumIntermediateResultType.typedBarcodeZone.rawValue
settings.intermediateResultSavingMode = .memory
barcodeReader?.update(settings, error: &error)
result = try! barcodeReader?.decodeFile(withName: "your file path", templateName: "")
var array:[iIntermediateResult]? = try! barcodeReader?.getIntermediateResult()
result = try! barcodeReader?.decode(array, withTemplate: "")
```


&nbsp;

