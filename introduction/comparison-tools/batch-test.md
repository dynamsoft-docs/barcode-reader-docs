---
layout: default-layout
title: Dynamsoft Barcode Reader Comparison Tools - Batch Test
description: This page shows how to test barcode reading performance.
keywords: batch test, comparison tools
needAutoGenerateSidebar: true
---
# How to Batch Test Barcode Reading Performance

This guide introduces how to use the BatchDecode program by Dynamsoft for barcode reading performance testing. Using the BatchDecode program, you can get a report of the images performance testing. The program can test not only DBR but also other barcode reader SDK. It's a convenient tool to evaluate different SDK performance.

Before you use the BatchDecode program, you need to use another program called BatchDecodeProjectGuardian. It's an auxiliary tool provided by Dynamsoft which can monitor a specified program, restart it when the program crashes or becomes unresponsive, and keep a log of running records. 

## How to use BatchDecodeProjectGuardian to call BatchDecode for barcode performance testing 

You can follow the steps below to use the daemon tool: 

- Open GuardianConfig.ini and configure the settings. Fields in the configuration file:   
    - ApplicationPath: Specifies the program to be guarded.    
    - ApplicationArgument: Sets the input parameters of the guarded program, separated by spaces.    
    - ApplicationLogDir: Configures the log output folder of the guarded program.    
    - TimeOutMin: Sets the daemon timeout value. When the guarded program has no new output for the specified time, the program will be restarted. The default timeout value is 2 minutes. Time unit: minutes.  

    The default settings are shown as below.  
    ![guardian config default][1]
- Set -i of the ApplicationArgument field to the file directory of the barcode images to be processed. The default directory is the Images folder under the installation folder of Dynamsoft Barcode Reader. 
- Save the settings and double click BatchDecodeProjectGuardian.exe to run and it will open a console window as follows (take BatchDecode as an example).       
![daemon execution interface][2]

Once the tool is started, it will output a record every 10 seconds to report the current running status of the guarded program. The tool will exit when the program finishes the execution and exits successfully.

If the guarded program crashes or times out when BatchDecodeProjectGuardian.exe is running, the daemon tool will actively restart the program and display the corresponding restart information in the console interface as well as record it in the GuardianLog file. 

The log file is a csv file with the name "GuardianLog_" + daemon name + runtime and it will be created in the same directory. The file records the working status of the daemon. Each time the guarded program is started or restarted, a new record will be registered in the log file.     

You can check the performance results in DBR_T_xxxx_xxxxx.csv in the directory of BatchDecode.exe.   

|Field in log | Description |
|-------|-------|
|Application_ID|Marks the name of the program being guarded, distinguished by time|   
|Running_Status|Indicates the status of the daemon, including: running, finished, timeout, and crashed| 
|Start_Time|Indicates the start time of the run|
|End_Time|indicates the end time of the run|
|Latest_Log|Logs the information when the program times out or exits abnormally. The log content consists of result file path plus the last line of the result content| 

## How to use the performance testing tool - BatchDecode 

### Start up and Configuration 
Command-line startup parameters    
BatchDecode.exe[-i] [-o]   
- -i: Sets the directory of where the barcode files to be evaluated is located, for example:  -i "D:\\images"    
The default directory is where BatchDecode.exe exists.    
- -o: Sets the directory to output the evaluation results, for example:  -o "D:\\output" The default directory is where BatchDecode.exe exists.    

If the program is started without any command-line parameters or you run it by double-clicking, the following interface will be displayed:  

![batch decode started][3]

You can follow the interface prompts. After setting the parameters, input r to automatically start the performance evaluation of your barcode files.  You can find the performance result in the output directory you specified, with the name of DBR_T_DEFAULT_xxxxx.csv. There is an additional file DBR_T_DEFAULT_xxxxx_original.txt storing the original barcode decoding results which cannot be displayed in the csv file.

### Using template files (optional) 
If you want to use a template file, please create a new templates subdirectory in the directory where BatchDecode.exe exists, then place the template file into the newly created templates directory.  After the performance testing program has started, it will automatically take the barcode reading settings in the DBR template file, decode any barcodes, and output the results.  
If the directory contains multiple template files, the performance testing program will evaluate all the templates and exits automatically once completed.   

![create templates subdirectory][4]   
Create templates subdirectory    
       
![create barcode reading templates][5]    
Create barcode reading templates

![testing results][6]    
Testing reuslts using different templates

### Interpretation of the results
After the program has executed, you will see DBR_T_DEFAULT_xxxxx.csv, the performance testing result file, in the output directory. Open the file and you will see the following fields:


|Field     |Description|
|--------|------|
|No. |ID of the source image file |
|Image Source |Path of the source image file |
|Time Cost (ms) |The time spent reading barcodes in the file. Unit in ms. |
|Barcode Count |Count of barcodes decoded in the file |
|Barcode Hex |Hex encoding of all the decoded barcode content. Mainly used for comparing different identification results. |
|Barcode Text |The content of the barcode identified. If the recognition result cannot be fully displayed due to the output format and/or word count limit, the field ‘Original’ will be set to No.|
|Original|If the value of this field is No, you can refer to the 'Note' section at the bottom of the file to view the details of the barcode. |


The statistics section of the document: 

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

[1]:assets/batch-tool/guardian-config-default.png
[2]:assets/batch-tool/daemon-execution-interface.png
[3]:assets/batch-tool/batch-decode-started.png
[4]:assets/batch-tool/create-templates-subdirectory.png
[5]:assets/batch-tool/create-barcode-reading-templates.png
[6]:assets/batch-tool/testing-results.png
