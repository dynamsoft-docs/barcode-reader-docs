---
layout: default-layout
title: Dynamsoft Barcode Reader for Objective-C & Swift - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for iOS SDK.
keywords: user guide, objective-c, oc, swift
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# User Guide for Objective-C & Swift

## System Requirements

- Operating systems:
   - macOS 10.11 and above.
   - iOS 9.0 and above. 
- Environment: Xcode 7.1 - 11.5 and above.  

- Recommended: macOS 10.15.4+, Xcode 11.5+, iOS 11+

&nbsp; 

   
## Installation

To install Dynamsoft Barcode Reader iOS Edition on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and run the setup program. The trial installer includes a free trial license valid for 30 days.   
   
After installation, you can find samples for supported platforms in the **Samples** folder under the installation folder.  


&nbsp; 


## Getting Started: HelloWorld
To build a Hello World app that reads barcodes from an image, you can follow the steps below:
1. Create a new iOS project in Xcode.
2. Add the barcode reader framework to your project

   - Unzip the downloaded ZIP file `dbr-ios-{version number}.zip` and you'll see `DynamsoftBarcodeReader.framework`.

   - Drag and drop the framework into your Xcode project. Make sure to check Copy items if needed and Create groups to copy the framework into your project's folder.
   
3. Add the required `.tbd/.dylib` file to your project.
   Go to the `Build Phases` tab of your Xcode project, under `Link Binary with Libraries` section, click + button. Search for the file `libc++.tbd`, select it and click Add button. Then the libc++.tbd file will be copied to your project.

4. Import the framework's header.

   Objective-C:

   ```objc
   #import <DynamsoftBarcodeSDK/DynamsoftBarcodeSDK.h>
   ```

   Swift:
   ```Swift
   import DynamsoftBarcodeReader
   ```   
5. Add code for barcode scanning

   After setting up the basic project, you can now move on to coding.

   The following code demonstrates initializing DynamsoftBarcodeReader and starting the barcode recognition process.

   Objective-C:

   ```objc
    #import "ViewController.h"
    #import <DynamsoftBarcodeReader/DynamsoftBarcodeReader.h>

    @interface ViewController ()
    @end
    @implementation ViewController

    - (void)viewDidLoad {
        [super viewDidLoad];
        // Do any additional setup after loading the view, typically from a nib.
        // Create and initialize a DynamsoftBarcodeReader.
        DynamsoftBarcodeReader *dbr;
        // Please replace "t0068MgAAAIe***inVNj14D4=" with your own license.
        // Note: If you do not have a valid license for the SDK, some characters of the barcode 
        // results will be replaced with "***".
        dbr = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0068MgAAAIe***inVNj14D4="];
        UIImage *image =[UIImage imageNamed:@"Put your license file here"];
        NSError* error = nil;
        NSArray* readResult = [dbr decodeImage:image withTemplate:@"" error:&error];
        if (error.code != 0){
                NSLog(@"%@", error);
         }
         else
         {
            if (readResult.count > 0)
            {
               for(int i = 0; i< readResult.count;i++){
                  iTextResult* result = readResult[i];
                  NSLog(@"Barcode %d: %@", i, result.barcodeText);
               }
            }
            else
            {
               NSLog(@"%@: no barcode found.",image);
            }
         }
      }

   - (void)didReceiveMemoryWarning {
      // Dispose of any resources that can be recreated.
      [super didReceiveMemoryWarning];
   }

   @end
   ```
   
   Swift:

   ```Swift
   import UIKit
   import DynamsoftBarcodeReader

   class ViewController: UIViewController {
      override func viewDidLoad() {
         super.viewDidLoad()
         do {
            /*
               Create and initialize a DynamsoftBarcodeReader.
               Please replace "t0068MgAAAIe***inVNj14D4=" with your own license.
               Note: If you do not have a valid license for the SDK, some characters of the barcode
               results will be replaced with "***". 
            */
            let reader = DynamsoftBarcodeReader.init(license: "t0068MgAAAIe***inVNj14D4=")
            guard let uiImage = UIImage.init(named: "Put your license file here") else { return }
            let results = try reader.decode(uiImage, withTemplate: "")
            let count = results.count;
            if (count > 0) {
               for i in 0..<count {
                  print("Barcode",String(i),": ",results[i].barcodeText);
               }
            } 
            else {
               print("no barcode found")
            }
         } 
         catch {
            print(error)
         }
      }
   }
   ```
&nbsp; 


## Decoding Methods
The SDK provides multiple decoding methods that support reading barcodes from different sources, including static images,
video stream, files in memory, base64 string, bitmap, etc. Here is a list of all decoding methods:
- [decodeFile](api-reference/methods/decode.md#decodefilewithname): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).   
- [decodebase64](api-reference/methods/decode.md#decodebase64): Reads barcodes from a base64 encoded string of a file.  
- [decodeBuffer](api-reference/methods/decode.md#decodebuffer): Reads barcodes from raw buffer.
- [decodeImage](api-reference/methods/decode.md#decodeimage): Decodes barcodes from an image file in memory.   
   
You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx).


&nbsp; 


## Barcode Reading Settings
Calling the [decoding methods](#decoding-methods) directly will use the default scanning modes and it will satisfy most of the needs. The SDK also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.   
   
There are two ways to change the barcode reading settings - using the PublicRuntimeSettings Struct or template. For new
developers, We recommend you to start with the PublicRuntimeSettings struct; For those who are experienced with the SDK,
you may use a template which is more flexible and easier to update.   

- [Use iPublicRuntimeSettings Struct to Change Settings](#use-publicruntimesettings-struct-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use PublicRuntimeSettings struct to change settings
Here are some common scanning settings you might find helpful:   
- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [How To](#how-to-guides) section.

#### Specify Barcode Type to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. (See [Product Overview]() for the full supported barcode list.)   

If your full license only covers some barcode formats, you can use `BarcodeFormatIds` and `BarcodeFormatIds_2` to specify the barcode format(s). Check out [`EnumBarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) and [`EnumBarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2).   

For example, to enable only 1D barcode reading, you can use the following code: 

Objective-C:

```objc
NSError __autoreleasing * _Nullable error;
DynamsoftBarcodeReader *dbr;
// Initialize license prior to any decoding. replace "t0068MgAAAIeGN7Q***MMQ+inVNj14D4=" with your own license.
dbr = [[DynamsoftBarcodeReader alloc] initWithLicense:@"t0068MgAAAIeGN7Q***MMQ+inVNj14D4="];
UIImage *image =[UIImage imageNamed:@"AllSupportedBarcodeTypes.tif"];
iPublicRuntimeSettings* settings = [dbr getRuntimeSettings:nil];
settings.barcodeFormatIds = EnumBarcodeFormatONED; // Set the barcode format
[dbr updateRuntimeSettings:settings error:nil];
NSArray* readResult = [dbr decodeImage:image withTemplate:@"" error:&error];
if (error)
{
    NSLog(@"%@", error);
}else{
   if (readResult.count > 0)
   {
      for(int i = 0; i< readResult.count;i++){
         iTextResult* result = readResult[i];
         NSLog(@"Barcode %d: %@", i, result.barcodeText);
      }
   }else{
      NSLog(@"%@: No barcode found.",image);
   }
}
```

Swift:

```Swift
// Initialize license prior to any decoding. replace "t0068MgAAAIeGN7***inVNj14D4=" with your own license.
let reader = DynamsoftBarcodeReader.init(license: "t0068MgAAAIeGN7***inVNj14D4=")

let settings = try reader.getRuntimeSettings()
settings.barcodeFormatIds = Int(EnumBarcodeFormat.ONED.rawValue) // Set the barcode format
reader.update(settings, error: nil)

guard let uiImage = UIImage.init(named: "AllSupportedBarcodeTypes.tif") else { return }
let results = try reader.decode(uiImage, withTemplate: "")
let count = results.count
if (count > 0) {
    for i in 0..<count {
        print("Barcode",String(i),": ",results[i].barcodeText)
    }
} else {
    print("No barcode found.")
}
```

#### Specify maximum barcode count
By default, the SDK will read as many barcodes as it can. To increase the recognition efficiency, you can use `expectedBarcodesCount` to specify the maximum number of barcodes to recognize according to your scenario.

Objective-C:

```objc
NSError __autoreleasing * _Nullable error;
DynamsoftBarcodeReader *barcodeReader;
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"Put your license key here"];
iPublicRuntimeSettings* settings = [barcodeReader getRuntimeSettings:nil];
settings.expectedBarcodesCount = 1;
[barcodeReader updateRuntimeSettings:settings error:&error];
```
Swift:

```Swift
// Initialize license prior to any decoding. replace "t0068MgAAAIeGN7***inVNj14D4=" with your own license.
let reader = DynamsoftBarcodeReader.init(license: "t0068MgAAAIeGN7***inVNj14D4=")
let settings = try reader.getRuntimeSettings()
settings.expectedBarcodesCount = 1 // Set the expected number of barcodes to be read
reader.update(settings, error: nil)
```

#### Specify a scan region

By default, the barcode reader will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. You can speed up the recognition process by restricting the scanning region.   

To specify a region, you will need to define an area. The following code shows how to create a template string and define the region. 

Objective-C:

```objc
NSError __autoreleasing * _Nullable error;
DynamsoftBarcodeReader *barcodeReader;
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"Put your license key here"];
iPublicRuntimeSettings* settings = [barcodeReader getRuntimeSettings:nil];
settings.region.regionBottom = 100;
settings.region.regionLeft = 0;
settings.region.regionRight = 50;
settings.region.regionTop = 0;
settings.region.regionMeasuredByPercentage = 1; //The region is determined by percentage
[barcodeReader updateRuntimeSettings:settings error:&error];
```
Swift:

```Swift
// Initialize license prior to any decoding. replace "t0068MgAAAIeGN7***inVNj14D4=" with your own license.
let reader = DynamsoftBarcodeReader.init(license: "t0068MgAAAIeGN7***inVNj14D4=")
let settings = try reader.getRuntimeSettings()
// Set the scan region
settings.region.regionTop = 0
settings.region.regionLeft = 0
settings.region.regionRight = 100
settings.region.regionBottom = 50
settings.region.regionMeasuredByPercentage = 1  // true
reader.update(settings, error: nil)
```

### Use A Template to Change Settings

Besides the option of using the PublicRuntimeSettings struct, the SDK also provides [`initRuntimeSettingsWithString`](api-reference/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) and [`initRuntimeSettingsWithFile`](api-reference/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) APIs that enable you to use a template to control all the runtime settings. With a template, instead of writing many codes to modify the settings, you can manage all the runtime settings in a JSON file/string.

Objective-C:

```objc
NSError __autoreleasing * _Nullable error;
DynamsoftBarcodeReader *barcodeReader;
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicense:@"Put your license key here"];
//Use a template to modify the runtime settings
[barcodeReader initRuntimeSettingsWithString:@"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}" conflictMode:EnumConflictModeOverwrite error:&error];
```
Swift:

```Swift
// Initialize license prior to any decoding. replace "t0068MgAAAIeGN7***inVNj14D4=" with your own license.
let barcodeReader = DynamsoftBarcodeReader.init(license: "t0068MgAAAIeGN7***inVNj14D4=")
let error: NSError? = NSError()
barcodeReader.initRuntimeSettingsWithString(content:"{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", conflictMode:EnumConflictMode.Overwrite, error: &error)
```  

Below is a template for your reference. To learn more about the APIs, you can check out [`iPublicRuntimeSettings`](api-reference/class/iPublicRuntimeSettings.md) Struct.

```js
{
   "ImageParameter" : {
      "BarcodeFormatIds" : [ "BF_ALL" ],
      "BinarizationModes" : [
         {
            "BlockSizeX" : 0,
            "BlockSizeY" : 0,
            "EnableFillBinaryVacancy" : 1,
            "ImagePreprocessingModesIndex" : -1,
            "Mode" : "BM_LOCAL_BLOCK",
            "ThreshValueCoefficient" : 10
         }
      ],
      "DeblurLevel" : 9,
      "Description" : "",
      "ExpectedBarcodesCount" : 0,
      "GrayscaleTransformationModes" : [
         {
            "Mode" : "GTM_ORIGINAL"
         }
      ],
      "ImagePreprocessingModes" : [
         {
            "Mode" : "IPM_GENERAL"
         }
      ],
      "IntermediateResultSavingMode" : {
         "Mode" : "IRSM_MEMORY"
      },
      "IntermediateResultTypes" : [ "IRT_NO_RESULT" ],
      "MaxAlgorithmThreadCount" : 4,
      "Name" : "runtimesettings",
      "PDFRasterDPI" : 300,
      "Pages" : "",
      "RegionDefinitionNameArray" : null,
      "RegionPredetectionModes" : [
         {
            "Mode" : "RPM_GENERAL"
         }
      ],
      "ResultCoordinateType" : "RCT_PIXEL",
      "ScaleDownThreshold" : 2300,
      "TerminatePhase" : "TP_BARCODE_RECOGNIZED",
      "TextFilterModes" : [
         {
            "MinImageDimension" : 65536,
            "Mode" : "TFM_GENERAL_CONTOUR",
            "Sensitivity" : 0
         }
      ],
      "TextResultOrderModes" : [
         {
            "Mode" : "TROM_CONFIDENCE"
         },
         {
            "Mode" : "TROM_POSITION"
         },
         {
            "Mode" : "TROM_FORMAT"
         }
      ],
      "TextureDetectionModes" : [
         {
            "Mode" : "TDM_GENERAL_WIDTH_CONCENTRATION",
            "Sensitivity" : 5
         }
      ],
      "Timeout" : 10000
   },
   "Version" : "3.0"
}
```

# How to Upgrade

## From version 7.x

You need to replace the old `DynamsoftBarcodeReader.framework` file with the one in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

Your previous SDK license for version 7.x is not compatible with the version 8.x. Please [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to upgrade your license.

After you upgraded your license to version 8.x:

- If you were using `initWithLicense`, please replace the old license with the newly generated one.

- If you were using `initWithLicenseFromServer` to connect to Dynamsoft server for license verification, then no need to change the license key. But please make sure the device has Internet connection.

## From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 8.x, we recommend you to review our sample code and re-write the barcode scanning module.

