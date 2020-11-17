---
layout: default-layout
title: Dynamsoft Barcode Reader for Java - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for Java SDK.
keywords: user guide, java
needAutoGenerateSidebar: true
needGenerateH3Content: true
---


# User Guide for Java SDK

## System Requirements

- Operating systems:
   - Windows 7, 8, 10.
   - Windows Server 2003, 2008, 2008 R2, 2012.
   - Linux x64 (Ubuntu 14.04.4+ LTS, Debian 8+, etc.)
   - JDK 1.7 and above. 


&nbsp;


## Installation

### Option 1: Download from website
To install Dynamsoft Barcode Reader Java SDK on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and unzip the dbr-java-{version number}.zip

The items under the dbr-java-{version number} folder:
Dynamsoft Barcode Reader\samples contains the source code of sample application.
Dynamsoft Barcode Reader\documents contains the API Reference, the Developer's Guide, and legal notices.
Dynamsoft Barcode Reader\lib\dynamsoft-barcodereader-{version number}.jar is the library file.

### Option 2: Build with Maven
You can add Dynamsoft Barcode Reader as the dependency to pom.xml like this:
   ```xml
    <dependencies>
        <dependency>
            <groupId>com.dynamsoft</groupId>
            <artifactId>dbr</artifactId>
            <version>7.6.0</version>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>dbr</id>
            <url>https://download2.dynamsoft.com/maven/dbr/jar</url>
        </repository>
    </repositories>
   ```

   
&nbsp; 


## Getting Started: HelloWorld
1. Open Eclipse and create a new Java project HelloDBR.
2. Add the required JAR file to your project.
    Click File > Properties > Java Build Path > Libraries > Add external JARs, add dynamsoft-barcodereader-{version number}.jar and click Apply.
    The JAR file can be found at [INSTALLATION FOLDER]\Dynamsoft Barcode Reader\lib\ .
3. Import the header.
    ```java
    import com.dynamsoft.barcode.*;
    ```
4. Replace the code of HelloDBR with the following.
    ```java
    public class HelloDBR {
        public static void main(String[] args) {
            try {
                BarcodeReader dbr = new BarcodeReader();
                dbr.initLicense("<Put your license key here>");
                TextResult[] result = dbr.decodeFile("<your image file full path>", "");
                String output = "";
                for(int i =0; i<result.length;i++){
                    output += "Barcode Text: ";
                    output += result[i].barcodeText + "\n\n";
                }
                System.out.println(output);
            } catch (Exception ex) {
            }
        }
    }
    ```
    Please update `<your image file full path>` and `<your license key here>` in the code accordingly.
5. Run the project


&nbsp; 


## Decoding Methods
The SDK provides multiple decoding methods that support reading barcodes from different sources, including static images, video stream, files in memory, base64 string, bitmap, etc. Here is a list of all decoding methods:
- [DecodeFile](api-reference/BarcodeReader/decode.md#decodefile): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).
- [DecodeBase64String](api-reference/BarcodeReader/decode.md#decodebase64string): Reads barcodes from a base64 encoded string of a file.  
- [DecodeBitmap](api-reference/BarcodeReader/decode.md#decodebitmap): Reads barcodes from a bitmap. When handling multi-page images, it will only decode the current page.
- [DecodeBuffer](api-reference/BarcodeReader/decode.md#decodebuffer): Reads barcodes from raw buffer.
- [DecodeFileInMemory](api-reference/BarcodeReader/decode.md#decodefileinmemory): Decodes barcodes from an image file in memory.

You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx) or [Github Repositories](https://github.com/dynamsoft-dbr?q=java&type=&language=).


&nbsp; 


## Barcode Reading Settings
Calling the [decoding methods](#decoding-methods) directly will use the default scanning modes and it will satisfy most of the needs. The SDK also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.   
   
There are two ways to change the barcode reading settings - using the PublicRuntimeSettings class or template. For new developers, We recommend you to start with the PublicRuntimeSettings class; For those who are experienced with the SDK, you may use a template which is more flexible and easier to update.   

- [Use `PublicRuntimeSettings` class to Change Settings](#use-publicruntimesettings-class-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) class to Change Settings
Here are some common scanning settings you might find helpful:   
- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [How To](#how-to-guide) section.

#### Specify Barcode Type to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and DotCode from the image. (See [Product Overview]({{ site.introduction }}overview.html) for the full supported barcode list.) 

If your full license only covers some barcode formats, you can use `BarcodeFormatIds` and `BarcodeFormatIds_2` to specify the barcode format(s). Check out [`BarcodeFormat`]({{ site.enumerations }}format-enums.html#barcodeformat) and [`BarcodeFormat_2`]({{ site.enumerations }}format-enums.html#barcodeformat_2).

For example, to enable only 1D barcode reading, you can use the following code:

```java
BarcodeReader dbr = new BarcodeReader();
dbr.initLicense("<Put your license key here>"); //Replace "<Put your license key here>" with your own license
// Set barcodeFormatIds via PublicRuntimeSettings instance and update it to BarcodeReader instance
PublicRuntimeSettings runtimeSettings = dbr.getRuntimeSettings();
runtimeSettings.barcodeFormatIds = 0x7FF;// OneD barcode
dbr.updateRuntimeSettings(runtimeSettings);
// Replace "<Put the path of your file here>" with your own file path
TextResult[] result = dbr.decodeFile("<Put your file path here>","");
```


#### Specify maximum barcode count
By default, the SDK will read as many barcodes as it can. To increase the recognition efficiency, you can use `expectedBarcodesCount` to specify the maximum number of barcodes to recognize according to your scenario.

```java
BarcodeReader dbr = new BarcodeReader();
dbr.initLicense("<Put your license key here>"); //Replace "<Put your license key here>" with your own license
PublicRuntimeSettings rts = dbr.getRuntimeSettings();
rts.expectedBarcodesCount = 10;
dbr.updateRuntimeSettings(rts);
//Replace "<Put the path of your file here>" with your own file path
TextResult[] result = dbr.decodeFile("<Put your file path here>","");
reader.destroy();
```


#### Specify a scan region
By default, the barcode reader will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. You can speed up the recognition process by restricting the scanning region.   

To specify a region, you will need to define an area. The following code shows how to create a template string and define the region.  

```java
BarcodeReader dbr = new BarcodeReader();
dbr.initLicense("<Put your license key here>"); //Replace "<Put your license key here>" with your own license
PublicRuntimeSettings runtimeSettings = dbr.getRuntimeSettings();
runtimeSettings.region.regionBottom = 100;
runtimeSettings.region.regionLeft = 0;
runtimeSettings.region.regionRight = 50;
runtimeSettings.region.regionTop = 0;
runtimeSettings.region.regionMeasuredByPercentage = 1; //The region is determined by percentage
dbr.updateRuntimeSettings(runtimeSettings);
//Replace "<Put the path of your file here>" with your own file path
TextResult[] result = dbr.decodeFile("<Put your file path here>","");
reader.destroy();
```


### Use A Template to Change Settings
Besides the option of using the PublicRuntimeSettings class, the SDK also provides [`initRuntimeSettingsWithString`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) and [`initRuntimeSettingsWithFile`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) APIs that enable you to use a template to control all the runtime settings. With a template, instead of writing many codes to modify the settings, you can manage all the runtime settings in a JSON file/string. 

```java
BarcodeReader dbr = new BarcodeReader();
dbr.initLicense("<Put your license key here>"); //Replace "<Put your license key here>" with your own license
br.initRuntimeSettingsWithFile("<put your json file here>", EnumConflictMode.CM_OVERWRITE);
//Replace "<Put the path of your file here>" with your own file path
TextResult[] result = dbr.decodeFile("<Put your file path here>","");
reader.destroy();
```

Below is a template for your reference. To learn more about the APIs, you can check out [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) Class.  
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


&nbsp; 



