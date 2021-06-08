---
layout: default-layout
title: Dynamsoft Barcode Reader for Java - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for Java SDK.
keywords: user guide, java
needAutoGenerateSidebar: true
needGenerateH3Content: false
noTitleIndex: true
---


# User Guide for Java SDK

## System Requirements

- Operating systems:
   - Windows 7, 8, 10
   - Windows Server 2003, 2008, 2008 R2, 2012
   - Linux x64 (Ubuntu 14.04.4+ LTS, Debian 8+, etc.)
   - macOS x64 10.12+
   - JDK 1.7 and above


## Installation

### Option 1: Download from website

To install Dynamsoft Barcode Reader Java SDK on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and unzip the DBR-Java-{version number}.zip

The items under the DBR-Java-{version number} folder:

 - DynamsoftBarcodeReader\documents contains the API Reference, the Developer's Guide, and legal notices.
 - DynamsoftBarcodeReader\images contains the sample barcode images.
 - DynamsoftBarcodeReader\samples contains the source code of sample application.
 - DynamsoftBarcodeReader\lib\dynamsoft-barcodereader-{version number}.jar is the library file.
 - DynamsoftBarcodeReader\readme.txt is the readme file to help you get started.

### Option 2: Build with Maven

You can add Dynamsoft Barcode Reader as the dependency to pom.xml like this:
   ```xml
    <dependencies>
        <dependency>
            <groupId>com.dynamsoft</groupId>
            <artifactId>dbr</artifactId>
            <version>8.4.0</version>
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
    The JAR file can be found at `DBR-Java-{version number}\DynamsoftBarcodeReader\lib`.
3. Import the header.
    ```java
    import com.dynamsoft.dbr.*;
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

### Use `PublicRuntimeSettings` class to Change Settings
Here are some common scanning settings you might find helpful:   
- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [`PublicRuntimeSettings`](api-reference/class/PublicRuntimeSettings.md) Class.

#### Specify Barcode Type to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. If you know exactly the barcode format(s) you want to read, use `barcodeFormatIds` and `barcodeFormatIds_2` to specify the barcode format(s) to speed up the process and improve the accuracy. Check out [`Barcode Format Enumeration`]({{ site.enumerations }}format-enums.html) for full supported barcode list.   

For example, to read QR Code only, you can use the following code:   

```java
//...Initialization code
PublicRuntimeSettings runtimeSettings = dbr.getRuntimeSettings();
runtimeSettings.barcodeFormatIds = EnumBarcodeFormat.BF_QR_CODE;
runtimeSettings.barcodeFormatIds_2 = EnumBarcodeFormat_2.BF2_NULL;
dbr.updateRuntimeSettings(runtimeSettings);
//...Decode and do something with the result
```


#### Specify maximum barcode count
By default, the SDK will read as many barcodes as it can. If you know exactly the barcode count or the maximum count you want to read, use `expectedBarcodesCount` to specify the count value to speed up the process.   

For example, to read two barcodes only, you can use the following code:   

```java
//...Initialization code
PublicRuntimeSettings rts = dbr.getRuntimeSettings();
rts.expectedBarcodesCount = 2;
dbr.updateRuntimeSettings(rts);
//...Decode and do something with the result
```


#### Specify a scan region
By default, the SDK will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. If you know exactly where the barcode locates, use `region` to specify the barcode location.   

For example, to find the barcode located in the middle of the image, you can use the following code:   

```java
//...Initialization code
PublicRuntimeSettings runtimeSettings = dbr.getRuntimeSettings();
runtimeSettings.region.regionLeft = 25;
runtimeSettings.region.regionTop = 25;
runtimeSettings.region.regionRight = 75;
runtimeSettings.region.regionBottom = 75;
runtimeSettings.region.regionMeasuredByPercentage = 1; 
dbr.updateRuntimeSettings(runtimeSettings);
//...Decode and do something with the result
```


### Use A Template to Change Settings
Besides the option of using the PublicRuntimeSettings class, the SDK also provides [`initRuntimeSettingsWithString`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) and [`initRuntimeSettingsWithFile`](api-reference/BarcodeReader/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile) APIs that enable you to use a template to control all the settings. With a template, instead of writing many codes to modify the settings, you can manage all the settings in a JSON file/string. 

```java
//...Initialization code
br.initRuntimeSettingsWithFile("<put your json file here>", EnumConflictMode.CM_OVERWRITE);
//...Decode and do something with the result
```

Below is a template for your reference. For more scanning settings guide, check out the [`Structure and Interfaces of Parameters`]({{ site.parameters }}structure-and-interfaces-of-parameters.html).

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

Distribute the `dynamsoft-barcodereader-{version number}.jar` file with the applications using the Dynamsoft Barcode Reader SDK. The .JAR file can be found under `DBR-Java-{version number}\DynamsoftBarcodeReader\lib`.

You can also distribute with Maven, like this:

```xml
   <dependencies>
      <dependency>
         <groupId>com.dynamsoft</groupId>
         <artifactId>dbr</artifactId>
         <version>8.1.2</version>
      </dependency>
   </dependencies>
   <repositories>
      <repository>
         <id>dbr</id>
         <url>https://download2.dynamsoft.com/maven/dbr/jar</url>
      </repository>
   </repositories>
```

## How to Upgrade

### From version 8.0 to 8.x

Just replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx). Your existing license for 8.0 is compatible with 8.x.

### From version 7.x to 8.x

You need to replace the old assembly files with the ones in the latest version. Download the latest version [here](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx).

Your previous SDK license for version 7.x is not compatible with the version 8.x. Please [contact us](https://www.dynamsoft.com/Company/Contact.aspx) to upgrade your license.

In v8.0, we introduced a new license tracking mechanism, <a href="https://www.dynamsoft.com/license-tracking/docs/about/index.html" target="_blank">License 2.0</a>. 

If you wish to use License 2.0, please refer to [this article](../../license-activation/set-full-license.md) to set the license.

If you wish to use the old license tracking mechanism, please check the followings:

- If you were using `ProductKeys`, please replace the old license with the newly generated one.

- If you were using `InitLicenseFromServer` to connect to Dynamsoft server for license verification, then no need to change the license key. But please make sure the device has Internet connection.

- If you were using `InitLicenseFromServer` + `DBR_InitLicenseFromLicenseContent` to connect to Dynamsoft server once and use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#connect-once) to re-register the device.

- If you were using `DBR_InitLicenseFromLicenseContent` to use the SDK offline, please follow [these steps](../../license-activation/set-full-license-7.md#offline) to re-register the device.

### From version 6.x to 8.x

We made some structural updates in the new version. To upgrade from 6.x to 8.x, we recommend you to review our sample code and re-write the barcode scanning module.





