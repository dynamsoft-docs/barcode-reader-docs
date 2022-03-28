---
layout: default-layout
title: Dynamsoft Barcode Reader for Java - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for Java SDK.
keywords: user guide, java
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---


# User Guide for Java SDK
In this guide, you will learn step by step on how to build a barcode reading application with Dynamsoft Barcode Reader SDK using Java.

## Requirements

- Operating systems:
   - Windows 7, 8, 10, 11
   - Windows Server 2003, 2008, 2008 R2, 2012, 2019, 2022
   - Linux x64 (Ubuntu 14.04.4+ LTS, Debian 8+, etc.)
   - Linux arm 64bit
   - macOS x64 10.12+

- Developing Environment:
   - JDK 1.7 and above


## Installation
If you haven't downloaded the SDK yet, download the `Java Package` now from <a href="https://www.dynamsoft.com/barcode-reader/downloads/?utm_source=docs" target="_blank">Dynamsoft website</a> and unpack the package into the directory of your choice.
>For this tutorial, we unpack it to `[INSTALLATION FOLDER]`, change it to your unpacking path for the following content.

## Build Your First Application
Let's start by creating a console application which demonstrates how to use the minimum code to read barcodes from an image file.  
>You can download the entire source code and compiled program from [Here](https://download2.dynamsoft.com/samples/dbr/user-guide/dbr-java-sample.zip).


### Create a New Project 

1. Open Eclipse. Go to File > New > Project,  create a new Java project `DBRJavaSample`.

2. Add a new Class named `DBRJavaSample` into the project.

### Add the Library Reference
1. Right click on Project -> Properties > Java Build Path > Libraries > Add external JARs, Browse to `[INSTALLATION FOLDER]\lib` and Select `dynamsoft-barcodereader-{version number}.jar`.

2. Import the package in the file `DBRJavaSample.java`
   ```java
   import com.dynamsoft.dbr.*;
   ```
### Initialize a Barcode Reader Instance
1. Initialize the license key.

    ```java
    BarcodeReader.initLicense("<insert DBR license key here>");
    ```    
    
    >Please replace `<insert DBR license key here>` with a valid DBR licensekey. There are two ways to obtain one:
    >- Search `initLicense` and find the license from `[INSTALLATION FOLDER]/samples/BarcodeReaderDemo/src/com/dynamsoft/demo/BarcodeReaderDemo.java`.
    >- Request a trial license from <a href="https://www.dynamsoft.com/customer/license/trialLicense?utm_source=docs" target="_blank">Customer Portal</a>. 

2. Create an instance of Dynamsoft Barcode Reader.

    ```java
    BarcodeReader reader = new BarcodeReader()
    ```
### Configure the Barcode Scanning Behavior
1. Set barcode format and count to read.

    ```java
   PublicRuntimeSettings runtimeSettings = reader.getRuntimeSettings();
   runtimeSettings.barcodeFormatIds = EnumBarcodeFormat.BF_ALL;
   runtimeSettings.barcodeFormatIds_2 = EnumBarcodeFormat_2.BF2_POSTALCODE | EnumBarcodeFormat_2.BF2_DOTCODE;
   runtimeSettings.expectedBarcodesCount = 32;
   reader.updateRuntimeSettings(runtimeSettings);
    ```

    >The barcode formats to enable is highly application-specific. We recommend that you only enable the barcode formats your application requires. Check out [Barcode Format Enumeration]({{ site.enumerations }}format-enums.html) for full supported barcode formats. 

    >If you know exactly the barcode count you want to read, specify `expectedBarcodesCount` to speed up the process and improve the accuracy. 

### Decode and Output Results 
1. Decode barcodes from an image file.
2. Get and output barcode results.

    ```java
   TextResult[] results;
   try
   {
       results = reader.decodeFile("[INSTALLATION FOLDER]/images/AllSupportedBarcodeTypes.png", "");
       System.out.println("Total barcodes found: " + results.length);
       for (int iIndex = 0; iIndex < results.length; ++iIndex)
       {
           System.out.println("Barcode " + (iIndex + 1));
           if (results[iIndex].barcodeFormat != 0)
           {
               System.out.println("    Barcode Format: " + results[iIndex].barcodeFormatString);
           }
           else
           {
               System.out.println("    Barcode Format: " + results[iIndex].barcodeFormatString_2);
           }
           System.out.println("    Barcode Text: " + results[iIndex].barcodeText);
       }     
   }
   catch (BarcodeReaderException exp)
   {
       System.out.println(exp.getMessage());
   }
    ```

    >For the error handling mechanism, the SDK throws [BarcodeReaderException]({{site.java_class}}BarcodeReaderException.html) for each function. You should add codes for exception handling based on your needs. 

    >The SDK returns multiple barcode information, including barcode count, barcode format, barcode text, location, barcode raw data, etc. Check out [TextResult]({{ site.java_class }}TextResult.html) for full supported result data.

### Release Resource

1. Destroy the instance to release all resources.

    ```java
    reader.destroy();
    ```

>Note:  
Please change all `[INSTALLATION FOLDER]` in above code snippet to your unpacking path.


### Build and Run the Project
1. Right click the project， click Run As > Java Application.

>You can download the entire source code and compiled program from [Here](https://download2.dynamsoft.com/samples/dbr/user-guide/dbr-java-sample.zip).

## Related Articles
- [How to select the appropriate DBR parameter configuration]({{ site.scenario_settings }})
- [How to upgrade to latest version](upgrade-instruction.md)


   
 
