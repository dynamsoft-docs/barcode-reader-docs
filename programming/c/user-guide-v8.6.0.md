---
layout: default-layout
title: Dynamsoft Barcode Reader for C Language - User Guide
description: This is the user guide of Dynamsoft Barcode Reader for C Language.
keywords: user guide, c
needAutoGenerateSidebar: true
needGenerateH3Content: true
noTitleIndex: true
---

# User Guide for C Language
In this guide, you will learn step by step on how to build a barcode reading application with Dynamsoft Barcode Reader SDK using C language.

## Requirements
   
- Operating System: 
    - Windows 7, 8, 10, 2003, 2008, 2008 R2, 2012, 2016
    - Linux x64: Ubuntu 14.04.4+ LTS, Debian 8+, etc
    - Linux arm 32bit
    - Linux arm 64bit (not included in the trial package,  click <a href="https://tst.dynamsoft.com/public/download/dbr/8.6/dbr-c_cpp-8.6-(include-ARM64).zip" target="_blank">here</a> to download the SDK)
    - MacOS 64bit: 10.12+ (not included in the trial package, contact us to get the SDK)

- Developing Tool
    - Visual Studio 2008 or above
    - GCC 5.4+  

## Installation
If you haven't downloaded the SDK yet, download the `C/C++ Package` now from <a href="https://www.dynamsoft.com/barcode-reader/downloads/?utm_source=docs" target="_blank">Dynamsoft website</a> and unpack the package into the directory of your choice.
>For this tutorial, we unpack it to `[INSTALLATION FOLDER]`, change it to your unpacking path for the following content.

## Build Your First Application
Let's start by creating a console application which demonstrates how to use the minimum code to read barcodes from an image file.  
>You can download the entire source code and compiled program from [Here](https://download2.dynamsoft.com/samples/dbr/user-guide/dbr-c-sample.zip).

### Create a New Project 

#### For Windows

1. Open Visual Studio. Go to File > New > Project, create a new Empty Project and set Project name as `DBRCSample`.

2. Add a new source file named `DBRCSample.c` into the project.

#### For Linux/ARM/Mac
1. Create a new source file named `DBRCSample.c` and place it into the folder `[INSTALLATION FOLDER]/Samples`.

### Include the Library

1. Add headers and libs in `DBRCSample.c`.   
   
    ```c
    #include <stdio.h>
    #include "[INSTALLATION FOLDER]/Include/DynamsoftBarcodeReader.h"
    #if defined(_WIN64) || defined(_WIN32)
        #ifdef _WIN64
            #pragma comment(lib, "[INSTALLATION FOLDER]/Lib/Windows/x64/DBRx64.lib")
        #else
            #pragma comment(lib, "[INSTALLATION FOLDER]/Lib/Windows/x86/DBRx86.lib")
        #endif
    #endif
    ```

### Initialize a Barcode Reader Instance
1. Create an instance of Dynamsoft Barcode Reader.

    ```c
    void *hBarcode = DBR_CreateInstance();
    ```

2. Initialize the license key.

    ```c
    DBR_InitLicense(hBarcode, "<insert DBR license key here>");
    ```    
    
    >Please replace `<insert DBR license key here>` with a valid DBR licensekey. There are two ways to obtain one:
    >- Search `DBR_InitLicense` and find the license from `[INSTALLATION FOLDER]/Samples/BarcodeReaderDemo/BarcodeReaderDemo.cpp`.
    >- Request a trial license from <a href="https://www.dynamsoft.com/customer/license/trialLicense?utm_source=guide&product=dbr&package=desktop" target="_blank">Customer Portal</a>. 

### Configure the Barcode Scanning Behavior
1. Set barcode format and count to read.

    ```c
    char sError[512];
    PublicRuntimeSettings runtimeSettings;
    DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
    runtimeSettings.barcodeFormatIds = BF_ALL; 
    runtimeSettings.barcodeFormatIds_2 = BF2_POSTALCODE | BF2_DOTCODE; 
    runtimeSettings.expectedBarcodesCount = 32;
    DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings, sError, 512);
    ```

    >The barcode formats to enable is highly application-specific. We recommend that you only enable the barcode formats your application requires. Check out [Barcode Format Enumeration]({{ site.enumerations }}format-enums.html) for full supported barcode formats. 

    >If you know exactly the barcode count you want to read, specify `expectedBarcodesCount` to speed up the process and improve the accuracy. 

### Decode and Output Results 
1. Decode barcodes from an image file.

    ```c
    int iErrorCode = -1;
    iErrorCode = DBR_DecodeFile(hBarcode, "[INSTALLATION FOLDER]/Images/AllSupportedBarcodeTypes.png", "");
    if(iErrorCode != DBR_OK)
        printf("%s\n", DBR_GetErrorString(iErrorCode));
    ```

    >For the error handling mechanism, the SDK returns Error Code for each function and provides a function `DBR_GetErrorString` to get the readable message. You should add codes for error handling based on your needs. Check out [Error Code]({{site.enumerations}}error-code.html) for full supported error codes.

2. Get and output barcode results.

    ```c
    TextResultArray* pResult = NULL;
    DBR_GetAllTextResults(hBarcode, &pResult);
    if (pResult != NULL && pResult->resultsCount > 0)
    {
        printf("%d total barcode(s) found. \n", pResult->resultsCount);
        for (int iIndex = 0; iIndex < pResult->resultsCount; iIndex++)
        {
            printf("Result %d\n", iIndex + 1);
            printf("Barcode Format: %s\n", pResult->results[iIndex] ->barcodeFormatString);
            printf("Barcode Text: %s \n", pResult->results[iIndex] ->barcodeText);
        }
    }
    getchar();
    ```

    >The SDK returns multiple barcode information, including barcode count, barcode format, barcode text, location, barcode raw data, etc. Check out [TextResult]({{ site.structs }}TextResult.html) for full supported result data.

### Release Allocated Memory

1. Release the allocated memory for the barcode results and instance.

    ```c
    if(pResult != NULL)           
        DBR_FreeTextResults(&pResult);
    DBR_DestroyInstance(hBarcode);
    ```

>Note:  
Please change all `[INSTALLATION FOLDER]` in above code snippet to your unpacking path.


### Build and Run the Project

#### For Windows
1. In Visual Studio, set the solution to build as Release\|x64.

2. Build the project to generate program `DBRCSample.exe`.

3. Copy **ALL** `*.dll` files under `[INSTALLATION FOLDER]\Lib\Windows\x64` to the same folder as the `DBRCSample.exe`.

4. Run the program `DBRCSample.exe`.

>The SDK supports both x86 and x64, please set the platform based on your needs.

#### For Linux/ARM/Mac
1. Create a file named `Makefile` with following content and put it in the same directory as the file `DBRCSample.c`.

    ```makefile
    CC=gcc
    CCFLAGS=-c

    DBR_LIB_PATH=../Lib/Linux
    DBR_INCLUDE_PATH=../Include

    LDFLAGS=-lDynamsoftBarcodeReader -L $(DBR_LIB_PATH) -Wl,-rpath=$(DBR_LIB_PATH) -Wl,-rpath=./

    TARGET=DBRCSample
    OBJECT=DBRCSample.o
    SOURCE=DBRCSample.c

    # build rule for target.
    $(TARGET): $(OBJECT)
        $(CC) -o $(TARGET) $(OBJECT) $(LDFLAGS)

    # target to build an object file
    $(OBJECT): $(SOURCE)
        $(CC) $(CCFLAGS) -I $(DBR_INCLUDE_PATH) $(SOURCE)

    # the clean target
    .PHONY : clean
    clean: 
        rm -f $(OBJECT) $(TARGET)
    ```

2. Open a terminal and change to the target directory where `Makefile` located in. Build the sample:

    ```bash
    make
    ```

3. Run the program `DBRCSample`.

    ```bash
    ./DBRCSample
    ```

>You can download the entire source code and compiled program from [Here](https://download2.dynamsoft.com/samples/dbr/user-guide/dbr-c-sample.zip).

## Related Articles
- [How to select the appropriate DBR parameter configuration]({{ site.scenario_settings }})
- [How to upgrade to latest version](upgrade-instruction.md)
