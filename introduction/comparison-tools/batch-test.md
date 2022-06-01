---
layout: default-layout
title: Dynamsoft Barcode Reader Comparison Tools - Batch Test
description: This page shows how to test barcode reading performance.
keywords: batch test, comparison tools
needAutoGenerateSidebar: true
---
# How to Batch Test Barcode Reading Performance

This guide introduces how to use the BatchDecode program provided by Dynamsoft to test barcode reading performance. With this tool, you can run a batch barcode reading process on images in a specified directory and get decoding results plus performance metrics.

## Download the Program

If you haven’t got the program yet,  [download the package from here](https://download2.dynamsoft.com/samples/dbr/dbr_cpp_performanceevaluation.zip) and unpack it into the directory of your choice.

## Configure and Run the Daemon Tool

A daemon tool is designed to monitor the running state of the BatchDecode program, restart and continue the process when it crashes or becomes unresponsive. Before starting the daemon tool, please open `GuardianConfig.ini` and configure the settings first.
    - ApplicationPath: Specify the full path of the BatchDecode program.
    - ApplicationArgument: Specify the image folder formatted as "-i <IMAGE-FOLDER-PATH>" and output folder formatted as "-o <OUTPUT-FOLDER-PATH>".
    - ApplicationLogDir: Specify the full path of the folder where the BatchDecode program outputs the result.
    - TimeOutMin: Sets the timeout value. If the BatchDecode program has no new output for the specified time (in minute), it will be restarted.

After saving the above settings, open a console window and run the daemon tool, `BatchDecodeProjectGuardian`, to start the testing.

## Interpretation of the Report

After the program has executed, you will see the performance testing report file, DBR_T_DEFAULT_xxxxx.csv, in the output directory. Open the file and you will see two sections:

- The statistics section

|Field     |Description|
|--------|------|
|Total Image Count |Number of image files processed |
|Images with Barcodes Recognized | Number of image files with barcodes recognized |
|Total Barcode Count |Total barcodes recognized |
|Time Cost of All Images (ms) |Total time spent on reading barcodes from all images |
|Recognition Rate |Percentage of images with barcodes recognized, i.e., Images with Barcodes Recognized / Total Image Count|
|Avg Time of Total Scan Per Image (ms) |The average time spent decoding an image file, i.e., Total Time Spent for Recognition/ Total Image Count|
|Avg Time of Total Scan Per Barcode (ms) |The average time spent decoding a barcode, i.e., Total Time Cost of All Images/ Total Barcode Count. |
|Time Cost of Images with Barcodes Recognized (ms) |Total time spent decoding images with barcodes recognized|
|Avg Time of Successful Scan Per Image (ms) |The average time spent decoding an image file with barcodes found, i.e., Time Spent for Recognition Images with Barcodes Found/ Images with Barcodes Recognized|

- The details section

|Field     |Description|
|--------|------|
|No. |ID of the source image file |
|Image Source |Path of the source image file |
|Time Cost (ms) |The time (in ms) spent reading barcodes in the file. |
|Barcode Count |Count of barcodes decoded in the file |
|Barcode Hex |Hex encoding of all the decoded barcode content. Mainly used for comparing different identification results. |
|Barcode Text |The content of the barcode identified. If the recognition result cannot be fully displayed due to the output format and/or word count limit, the field `Original` will be set to No.|
|Original|If the value of this field is No, you can refer to the 'Note' section at the bottom of the file to view the details of the barcode. |

## Try Out Multiple Parameters

To evaluate performances between different parameters, you can create a subdirectory `templates` in the directory where the BatchDecode program exists, then place the template files into the `templates` directory. Rerun the above configured daemon tool and then you will get reports for each template named as DBR_T_<TEMPLATE-FILE-NAME>_xxxxx.csv.

## Integrate Other SDKs

The BatchDecode program can be easily extended to test other barcode reader SDK. The main steps are as below:

- Download the source code of the BatchDecode program from [here](https://github.com/Dynamsoft/barcode-reader-c-cpp-samples/tree/main/samples/C%2B%2B/Performance/BatchDecode)
- Create a subclass (ClassA as example) of Class `CBarcodeFileReader`
- Implement method ClassA::ReadFileBarcodes to decode image file and construct result info referring to `CDbrBarcodeFileReader::ReadFileBarcodes`
