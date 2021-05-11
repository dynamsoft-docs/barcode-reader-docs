---
layout: default-layout
title: Dynamsoft Barcode Reader for .NET - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for .NET SDK.
keywords: user guide, .Net
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---

# User Guide for Windows Edition - .Net

## System Requirements

- Operating systems:
    - Windows 7, 8, 10.
    - Windows Server 2003, 2008, 2008 R2, 2012.

- Environment: Visual Studio 2008 and above.

- Framework supported: .NET Framework 2.0, .NET Framework 4.0


&nbsp;


## Installation
To install Dynamsoft Barcode Reader Windows Edition on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx). The zip package includes a free trial license valid for 30 days.   
   
After installation, you can find samples for supported platforms in the **Samples** folder under the installation folder. 


&nbsp;


## Getting Started: HelloWorld

1. Start Visual Studio and create a new Console Application in C#. Let's name it `BarcodeReadDemo_DotNet`. Don't forget to choose a supported .NET Framework edition.

2. Add the namespace in `Program.cs`.
   ```csharp
    using Dynamsoft;
    using Dynamsoft.DBR;
   ```
   Please add Dynamsoft Barcode Reader libraries (`Dynamsoft.BarcodeReader.dll` and `DynamsoftCommon.dll`) in project references. The lib files can be found in `DBR-DotNet-{version number}\DynamsoftBarcodeReader\Lib\2.0` or `DBR-DotNet-{version number}\DynamsoftBarcodeReader\Lib\4.0`. The folder which you should choose depends on your .NET Framework edition.

3. Update the main function in `Program.cs`.
    ```csharp
    class Program
    {
        static void Main(string[] args)
        {
            BarcodeReader reader = new BarcodeReader("<your license key here>");
            try
            {
                TextResult[] results = reader.DecodeFile(@"<your image file full path>","");
                string outputInfo = "Total barcodes found: " + results.Length.ToString(); 
                Console.WriteLine(outputInfo);
                for(int iIndex = 0; iIndex < results.Length; ++iIndex)
                {
                    int iBarcodeIndex = iIndex + 1;
                    string builder = "Barcode " + iBarcodeIndex.ToString() + ":\r\n";
                    if (results[iIndex].BarcodeFormat != 0)
                    {
                        builder += "    Type: " + results[iIndex].BarcodeFormatString + "\r\n";
                    }
                    else
                    {
                        builder += "    Type: " + results[iIndex].BarcodeFormatString_2 + "\r\n";
                    }
                    builder += "    Value: " + results[iIndex].BarcodeText + "\r\n";
                    Console.WriteLine(builder);
                }
            }
            catch(BarcodeReaderException exp)
            {
                Console.WriteLine(exp.Message);
            }
            reader.Dispose();
        }
    }
    ```
    Please update `<your image file full path>` and `<your license key here>` in the code accordingly.

4. Build the project and then copy `x64` and `x86` folders to the folder where `Dynamsoft.BarcodeReader.dll` and `DynamsoftCommon.dll` resides. In this case, it is under `bin\Debug_VS2010\` folder.

5. Run the project.

 If you got the error "An exception of type 'Dynamsoft.DBR.BarcodeReaderException' occurred in Dynamsoft.BarcodeReader.dll" or "Failed to load module dll", please double check if you copied `x64` and `x86` folders as stated in Step #4.

&nbsp;


## Decoding Methods
The SDK provides multiple decoding methods that support reading barcodes from different sources, including static images,
video stream, files in memory, base64 string, bitmap, etc. Here is a list of all decoding methods:
- [DecodeFile](api-reference/BarcodeReader/decode.md#decodefile): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).   
- [DecodeBase64String](api-reference/BarcodeReader/decode.md#decodebase64string): Reads barcodes from a base64 encoded string of a file.   
- [DecodeBitmap](api-reference/BarcodeReader/decode.md#decodebitmap): Reads barcodes from a bitmap. When handling multi-page images, it will only decode the
current page.   
- [DecodeBuffer](api-reference/BarcodeReader/decode.md#decodebuffer): Reads barcodes from raw buffer.
- [DecodeFileInMemory](api-reference/BarcodeReader/decode.md#decodefileinmemory): Decodes barcodes from an image file in memory. 

You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx).


&nbsp;


## Barcode Reading Settings
Calling the [decoding methods](#decoding-methods) directly will use the default scanning modes and it will satisfy most of the needs. The SDK also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.   
   
There are two ways to change the barcode reading settings - using the PublicRuntimeSettings Struct or template. For new
developers, We recommend you to start with the PublicRuntimeSettings struct; For those who are experienced with the SDK,
you may use a template which is more flexible and easier to update.   

- [Use `PublicRuntimeSettings` Struct to Change Settings](#use-publicruntimesettings-struct-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use [`PublicRuntimeSettings`](api-reference/struct/PublicRuntimeSettings.md) Struct to Change Settings
Here are some common scanning settings you might find helpful:   
- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [How To](#how-to-guide) section.

#### Specify Barcode Type to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. (See [Product Overview]() for the full supported barcode list.)   

If your full license only covers some barcode formats, you can use `BarcodeFormatIds` and `BarcodeFormatIds_2` to specify the barcode format(s). Check out [`BarcodeFormat`]() and [`BarcodeFormat_2`]().   

For example, to enable only 1D barcode reading, you can use the following code:   

```csharp
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
BarcodeReader reader = new BarcodeReader("<your license key here>");
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
//Set the barcode format
settings.BarcodeFormatIds = (int)EnumBarcodeFormat.BF_ONED;
reader.UpdateRuntimeSettings(settings);
try
{
    //Replace "<Put the path of your file here>" with your own file path
    TextResult[] results = reader.DecodeFile(@"<your image file full path>","");
}
catch(BarcodeReaderException exp)
{
    Console.WriteLine(exp.Message);
}
reader.Dispose();
```


#### Specify maximum barcode count
By default, the SDK will read as many barcodes as it can. To increase the recognition efficiency, you can use `expectedBarcodesCount` to specify the maximum number of barcodes to recognize according to your scenario. 

```csharp
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
BarcodeReader reader = new BarcodeReader("<your license key here>");
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
//Set the barcode format
settings.ExpectedBarcodesCount = 1;
reader.UpdateRuntimeSettings(settings);
try
{
    //Replace "<Put the path of your file here>" with your own file path
    TextResult[] results = reader.DecodeFile(@"<your image file full path>","");
}
catch(BarcodeReaderException exp)
{
    Console.WriteLine(exp.Message);
}
reader.Dispose();
```


#### Specify a scan region
By default, the barcode reader will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. You can speed up the recognition process by restricting the scanning region.   

To specify a region, you will need to define an area. The following code shows how to create a template string and define the region.

```csharp
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
BarcodeReader reader = new BarcodeReader("<your license key here>");
PublicRuntimeSettings settings = reader.GetRuntimeSettings();
//Set the barcode format
settings.Region.RegionBottom = 100;
settings.Region.RegionLeft = 0;
settings.Region.RegionRight = 50;
settings.Region.RegionTop = 0;
settings.Region.RegionMeasuredByPercentage = 1;
reader.UpdateRuntimeSettings(settings);
try
{
    //Replace "<Put the path of your file here>" with your own file path
    TextResult[] results = reader.DecodeFile(@"<your image file full path>","");
}
catch(BarcodeReaderException exp)
{
    Console.WriteLine(exp.Message);
}
reader.Dispose();
```


### Use A Template to Change Settings
Besides the option of using the PublicRuntimeSettings struct, the SDK also provides [`InitRuntimeSettingsWithString`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) and [`InitRuntimeSettingsWithFile`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) APIs that enable you to use a template to control all the runtime settings. With a template, instead of writing many codes to modify the settings, you can manage all the runtime settings in a JSON file/string.

```csharp
string errorMsg = "";
//Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
BarcodeReader reader = new BarcodeReader("<your license key here>");
EnumErrorCode error = reader.InitRuntimeSettingsWithFile(@"<Put your file path here>", EnumConflictMode.CM_OVERWRITE, out errorMsg);
reader.OutputSettingsToFile(@"<Put your output file path here>","CurrentRuntimeSettings");
try
{
    //Replace "<Put the path of your file here>" with your own file path
    TextResult[] results = reader.DecodeFile(@"<your image file full path>","");
}
catch(BarcodeReaderException exp)
{
    Console.WriteLine(exp.Message);
}
reader.Dispose();
```

Below is a template for your reference. To learn more about the APIs, you can check out [`PublicRuntimeSettings`](api-reference/struct/PublicRuntimeSettings.md) Struct.  
```json
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

## How to Distribute

Distribute the following required library files with the applications using the Dynamsoft Barcode Reader SDK. The distribution files can be found under:

**for .NET Framework 2.0 - 3.5:** 
`Dynamsoft.BarcodeReader.dll`, 
`DynamsoftCommon.dll`, 
`x86` and `x64` folders. 

These files are under `DBR-DotNet-{version number}\DynamsoftBarcodeReader\Lib\2.0`.

**for .NET Framework 4.0 and above:**
`Dynamsoft.BarcodeReader.dll`, 
`DynamsoftCommon.dll`, 
`x86` and `x64` folders. 

These files are under `DBR-DotNet-{version number}\DynamsoftBarcodeReader\Lib\4.0`.

## How to Upgrade

### From version 7.x

#### Replace the library

   You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

#### Update existing code

   Change the namespace from:
   ```csharp
      using Dynamsoft.Barcode;
   ```
   to:
   ```csharp
      using Dynamsoft;
      using Dynamsoft.DBR;
   ```

####  Upgrade the license

 Your previous SDK license for version 7.x is not compatible with the version 8.x. Please [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to upgrade your license.

 After you upgraded your license to version 8.x:

 - If you were using `ProductKeys`, please replace the old license with the newly generated one.

 - If you were using `InitLicenseFromServer` to connect to Dynamsoft server for license verification, then no need to change the license key. But please make sure the device has Internet connection.

 - If you were using `InitLicenseFromServer` + `DBR_InitLicenseFromLicenseContent` to connect to Dynamsoft server once and use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#connect-once) to re-register the device.
 
 - If you were using `DBR_InitLicenseFromLicenseContent` to use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#offline) to re-register the device.

### From version 6.x

We made some structural updates in the new version. To upgrade from 6.x to 8.x, we recommend you to review our sample code and re-write the barcode scanning module.

