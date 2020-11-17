---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Test Batch Scan Performance
description: This page shows how to test batch scan performance.
keywords: test batch, scan performance, how-to guides
needAutoGenerateSidebar: false
---


# How-to Guides - Test Batch Scan Performance

This guide introduces how to use the tools by Dynamsoft to read barcodes from files in a specified directory and get decoding results plus performance metrics. This will be helpful for you to evaluate the performance of Dynamsoft Barcode Reader.


## Related Files

Here are the related files which can be found at `[Installation Folder]\Samples\Desktop\Bin\BatchDecode\`:   
   
- `BatchDecode.exe` is a tool to help you evaluate the barcode scanning performane. It provides performance testing data by calling the SDK to decode barcodes from a batch of images in a specified folder.   

- `BatchDecodeProjectGuardian.exe` is an auxiliary tool provided by Dynamsoft. The tool can monitor a specified program, restart it when the program crashes or becomes unresponsive, and keep a log of running records.   

- `GuardianConfig.ini` is the configuration file for `BatchDecodeProjectGuardian.exe`.


## Configure the Settings

First, let's configure the image directory in `GuardianConfig.ini`. Fields in the configuration file:

- **ApplicationPath**: Specifies the program to be guarded.   
- **ApplicationArgument**: Sets the input parameters of the guarded program, separated by spaces.   
- **ApplicationLogDir**: Sets output folder of the guarded program.   
- **TimeOutMin**: Sets the daemon timeout value. When the guarded program has no new output for the specified time, the program will be restarted. The default timeout value is 2 minutes. Time unit: minutes.   


Open `GuardianConfig.ini`, set `-i` of the `ApplicationArgument` field to the file directory of the barcode images to be processed. The default directory is the Images folder under the installation folder of Dynamsoft Barcode Reader.
   
Save the settings.


## Run the BatchDecodeProjectGuardian Daemon Tool

After configuring `GuardianConfig.ini` as needed, double click `BatchDecodeProjectGuardian.exe` and it will open a console window as follows (take BatchDecode as an example):   


![Daemon Execution Interface][1]   
Figure 1 - Daemon Execution Interface   
   

Once the tool is started, it will output a record every 10 seconds to report the current running status of the guarded program. The tool will exit when the program finishes the execution and exits successfully.   

If the guarded program crashes or times out during the running, `BatchDecodeProjectGuardian.exe` is running, the daemon tool will actively restart the program and display the corresponding restart information in the console interface as well as record it in the GuardianLog file.   

After running `BatchDecodeProjectGuardian.exe`, a csv file with the name "GuardianLog_" + daemon name + runtime will be created in the same directory. The file records the working status of the daemon. Each time the guarded program is started or restarted, a record will be registered in the log file.   

Fields in the log file:   

- **Application_ID**: Marks the name of the program being guarded, distinguished by time.   
- **Running_Status**: Indicates the status of the daemon, including: running, finished, timeout, and crashed.   
- **Start_Time**: Indicates the start time of the run.   
- **End_Time**: Indicates the end time of the run.   
- **Latest_Log**: Logs the information when the program times out or exits abnormally. The log content consists of result file path plus the last line of the result content.   


## Run the BatchDecode Performance Testing Tool

### Command line startup parameters

`> BatchDecode.exe[-i] [-o]`

- -i: Sets the directory where the barcode files to be evaluated is located, for example:  
    -i "D:\\images".   
    The default is the directory where BatchDecode.exe exists.   

- -o: Sets the directory to output the evaluation results, for example:   
    -o "D:\\output".   
    The default is the directory where BatchDecode.exe exists.   

If the program is started without any command line parameters or you run it by double clicking, the following interface will be displayed:   


![The Startup Interface of the Evaluation Program without Command Parameters][2]    
Figure 2 - The Startup Interface of the Evaluation Program without Command Parameters   


You can follow the interface prompts. After setting the parameters, input `r` to automatically starts the performance evaluation of your barcode files.   

You can find the performance result in the output directory you specified, with the name of `DBR_T_DEFULT_xxxxx.csv`. There is an additional file `DBR_T_DEFULT_xxxxx_original.txt` storing the original barcode decoding results which cannot be displayed in the csv file.   



## Interpretation of Results

After executing the program, you can see the performance testing results in `DBR_T_DEFULT_xxxxx.csv` in the output directory. Open the file and you can see the following fields:  


| Field | Description |
|-------|-------------|
| No. | ID of the barcode file. | 
| Image Source | Path of the source image files. | 
| Read Duration (ms) | The time spent reading barcodes in the file. Unit in ms. | 
| Barcode Count | Count of barcodes decoded in the file. | 
| Barcode Hex | Hex encoding of all the decoded barcode content decoded. Mainly used for comparing different identification results. | 
| Barcode Text | The content of the barcode identified. If the recognition result cannot be full displayed due to the output format and word count limit, the field 'Original' will be set to No. | 
| Original | If the value of this field is No, you can refer to the 'Note' section at the bottom of the file to see the details of the barcode. | 
   


The statistics section of the document:


| Field | Description |
|-------|-------------|
| Total Image Count | Number of image files processed | 
| Images with Barcodes Recognized | Number of image files with barcodes recognized | 
| Total Barcode Count | Total barcodes recognized | 
| Time Cost of All Images (ms) | Total time spent on reading barcodes from all images | 
| Recognition Rate | Percentage of images with barcodes recognized, i.e., Images with Barcodes Recognized / Total Image  | 
| Avg Time of Total Scan Per Image (ms) | The average time spent for decoding an image file, i.e., Total Time Spent for Recognition / Total Image Count | 
| Avg Time of Total Scan Per Barcode (ms) | The average time spent decoding a barcode, i.e., Total Time Cost of All Images / Total Barcode Count. | 
| Time Cost of Images with Barcodes Recognized (ms) | Total time spent decoding images with barcodes recognized | 
| Avg Time of Successful Scan Per Image (ms) | The average time spent decoding an image file with barcodes found, i.e., Time Spent for Recognition Images with Barcodes Found / Images with Barcodes Recognized | 





[1]: assets/test-batch-scan-performance/daemon-execution-interface.png

[2]: assets/test-batch-scan-performance/startup-interface.png