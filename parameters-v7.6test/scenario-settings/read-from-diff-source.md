---   
layout: default-layout
title: How to read images from different sources 
description: This article introduces how to read images from different sources, including read from file, read from memory and read from video stream
keywords: file memory video stream
needAutoGenerateSidebar: false
---

# How to read images from different sources 
The DBR algorithm provides multiple ways to read images from different sources. This article will introduce the following methods. 
1. [Read from File](#Read from File)
2. [Read from Memory](#Read from Memory)
3. [Read from Video stream ](#Read from Video stream )

## Read from File
For image files, DBR provides the following two APIs.
- [`DecodeFile`]({{ site.cpp_methods }}decode.html#decodefile)
- [`DecodeFileInMemory`]({{ site.cpp_methods }}decode.html#decodefileinmemory)

Sample codes:
``` c++
//DecodeFile
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("enter your license");
int errorCode = reader->DecodeFile("image path", "");
delete reader;
```
```c++
//DecodeFileInMemory
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("enter your license");
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("image path", &pFileBytes, &nFileSize); //read file to memory 
int errorCode = reader->DecodeFileInMemory(pFileBytes, nFileSize, "");
delete reader;
```
## Read from Memory 
For the image data in the memory, DBR provides the following API. 
- [`DecodeBuffer`]({{ site.cpp_methods }}decode.html#decodebuffer)   
   Decodes barcodes from the memory buffer containing image pixels in defined format. This API is generally used in video stream decoding. After obtaining a frame of image data, you can invoke this API to decode the frame. The main parameters are as follows: 
   - pBufferBytes   
      The array of bytes which contain the image data.
   - iWidth   
      The width of the image in pixels. 
   - iHeight   
      The height of the image in pixels.
   - iStride   
      The number of single-bytes of the image in pixels.
   - format   
      The data format of a single pixel of an image, corresponds to the depth of the image. Detailed enumeration reference [`ImagePixelFormat`]({{ site.enumerations }}other-enums.html#imagepixelformat)
   
The following uses a 152 * 152 QR code to illustrate these parameters. The image has three channels of RGB, with a 24bit image depth (each pixel occupies 24bit of memory space). So in this example, the format value is `IPF_RGB888` 

The number of bits of the memory size occupied by one line of the image is iwidth * depth, so In this example, the image is width is 152px, times 24 bits, resulting with 3648 bits. 

If we now use `int ( 32 bit / int )` type array to store the pixel data of the image, the length of the `int` array required for a row of image pixel data is (iwidth * depth + 31) / 32, the actual number of single-line bytes of the image pixel data iStride is `iStride = (iwidth * depth + 31) / 32 * 4`

Then the structure of the pixel data pBufferBytes of the image is `int* pBufferBytes = new int[(width * depth + 31) / 32 * iHeight]; `
 
After the construction of pBufferBytes is completed, read the image data and fill it in. 


   ![alt dbr_qr][1]   
   
In the following example, we use opencv to read image data and call the DecodeBuffer 

``` cpp
#include "DynamsoftBarcodeReader.h"
#include <opencv2/opencv.hpp>
using namespace cv;
using namespace std;
#ifdef _WIN64
#pragma comment(lib, "DBRx64.lib")
#else
#pragma comment(lib, "DBRx86.lib")
#endif

int main()
{
   int ret = 0;
   CBarcodeReader* reader = new CBarcodeReader();
   reader->InitLicense("your license here");
   Mat image = cv::imread("your img file path");
   if (image.type() == CV_8UC3) {
	   ret = reader->DecodeBuffer(image.data, image.cols, image.rows, image.cols * 3, IPF_RGB_888);
	}
   else if (image.type() == CV_8UC1) {
      ret = reader->DecodeBuffer(image.data, image.cols, image.rows, image.cols, IPF_GRAYSCALED);
   }
   TextResultArray* pResults = NULL;
   reader->GetAllTextResults(&pResults);
   CBarcodeReader::FreeTextResults(&pResults);
   delete(reader);
   return 0;
}
```

- [`DecodeBase64String`]({{ site.cpp_methods }}decode.html#decodebase64string)   
   Decodes barcode from an image file encoded as a base64 string.
- [`DecodeDIB`]({{ site.cpp_methods }}decode.html#decodedib)   
   Decodes barcode from a handle of device-independent bitmap (DIB).

## Read from Video Stream 
DBR provides several processing interfaces for video streams, which facilitates the processing of video frame queues and multi-threading. 

DBR creates a queue to be processed to store the video frame currently being processed, and then create a decoding thread to process the queue. The decoding thread takes the latest frame in the queue for processing each time, and then moves it out of the queue after decoding to perform the next processing. The results will be put into a result queue. If the length of the queue to be processed reaches the maximum value you set, the decoding thread will exit the current processing frame as soon as possible, and empty the queue to be processed, and then waiting for new frames to join the queue and restart processing to prevent a frame from taking too long. 

DBR also provides the feature to filter blurred frames. When enabled, DBR will calculate the sharpness of the image frames in the queue to be processed, and the frames whose sharpness is lower than the threshold you set will be removed. The main APIs are as follows 

- [`AppendFrame`]({{ site.cpp_methods }}video.html#appendframe)   
   Appends a frame image buffer to the inner frame queue. 
- [`StartFrameDecoding`]({{ site.cpp_methods }}video.html#startframedecoding)  
   Starts a new thread to decode barcodes from the inner frame queue. 
- [`StartFrameDecodingEx`]({{ site.cpp_methods }}video.html#startframedecodingex)   
   Starts a new thread to decode barcodes from the inner frame queue.  
- [`SetTextResultCallback`]({{ site.cpp_methods }}video.html#settextresultcallback)   
   Sets call back function to process text results generated during frame decoding. DBR will start a thread loop to check the result queue when processing the video stream. If new results are put into the queue, the callback function will be called 
- [`StopFrameDecoding`]({{ site.cpp_methods }}video.html#stopframedecoding)   
   Stops the frame decoding thread created by StartFrameDecoding. 
- [`InitFrameDecodingParameters`]({{ site.cpp_methods }}video.html#initframedecodingparameters)   
   Init  [`FrameDecodingParameters`]({{ site.structs }}FrameDecodingParameters.html) object
- [`FrameDecodingParameters`]({{ site.structs }}FrameDecodingParameters.html)   
   Defines a struct to configure the frame decoding Parameters.The structure provides a series of configuration parameters for users to configure the processing method of DBR involving video streams. The main fields are as follows 
    - `maxQueueLength`   
      The maximum number of frames waiting for decoding
    - `maxResultQueueLength`    
      The maximum number of frames waiting results (text result/localization result) will be kept for further reference.
    - `width`    
      The width of the frame image in pixels. 
    - `height`     
      The height of the frame image in pixels.
    - `stride`    
      The number of single-bytes of the image in pixels. 
    - `imagePixelFormat`    
      The image pixel format used in the image byte array. 
    - `region`    
      The region definition of the frame to calculate the internal indicator.This is a rectangular area. After setting, DBR only performs decoding within the area. 
    - `autoFilter`     
      Sets whether to filter frames automatically. The default is 1: Enable filtering frames automatically.
    - `threshold`    
      The threshold used for filtering frames. Range 0-1, the smaller the value, the easier the image frame will be filtered out. 
    - `fps`     
      The frequency of calling AppendFrame() per second. DBR will refer to this value when performing fuzzy frame filtering logic. If it is not set, then DBR will estimate based on the frequency of calling [`AppendFrame`]({{ site.cpp_methods }}video.html#appendframe).

The following example demonstrates these interfaces. In this example, we use opencv to read camera data and call DBR's video streaming interface to decode. 

```c++
#include <opencv2/core.hpp>
#include <opencv2/videoio.hpp>
#include <opencv2/highgui.hpp>
#include <iostream>
#include <vector>
#include "Include/DynamsoftBarcodeReader.h"
using namespace cv;
using namespace std;
using std::cerr; 
using std::endl;
using std::cin;

#ifdef _WIN64
#pragma comment(lib, "Lib/DBRx64.lib")
#else
#pragma comment(lib, "Lib/DBRx86.lib")
#endif

//Callback function when decoding is completed
void textResultcallback(int frameId, TextResultArray *pResults, void * pUser)
{
   for (int iIndex = 0; iIndex < pResults->resultsCount; iIndex++)
   {
      printf("Barcode %d, Value %s\n", iIndex + 1, pResults->results[iIndex]->barcodeText);
   }
   CBarcodeReader::FreeTextResults(&pResults);
}

//Callback function when decoding error 
void errorcb(int frameId, int errorCode, void * pUser)
{
   printf("frame = %d errorcode = %d, %s\n", frameId, errorCode, CBarcodeReader::GetErrorString(errorCode));
}

int main()
{
   Mat frame;
   cout << "Opening camera..." << endl;
   VideoCapture capture(0); // open the first camera
   if (!capture.isOpened())
   {
      cerr << "ERROR: Can't initialize camera capture" << endl;
      return 1;
   }
	 
   int iRet = -1;
   CBarcodeReader reader;
   iRet = reader.InitLicense("enter your license");
   if (iRet != 0)
   {
      printf("%s\n", CBarcodeReader::GetErrorString(iRet));
      return -1;
   }
   reader.InitRuntimeSettingsWithString("enter your template path", CM_OVERWRITE);	
   reader.SetTextResultCallback(textResultcallback, NULL); // Set callback when decoding is complete 
   reader.SetErrorCallback(errorcb, NULL); // Set the callback when an error occurs 
   FrameDecodingParameters parameters;
   reader.InitFrameDecodingParameters(&parameters);

   capture >> frame;
   parameters.width = capture.get(CAP_PROP_FRAME_WIDTH);
   parameters.height = capture.get(CAP_PROP_FRAME_HEIGHT);
   parameters.maxQueueLength = 30;
   parameters.maxResultQueueLength = 30;
   parameters.stride = frame.step.p[0];
   parameters.imagePixelFormat = IPF_RGB_888;
   iRet = reader.StartFrameDecodingEx(parameters, "");
   if (iRet != 0)
   {
      printf("%s\n", CBarcodeReader::GetErrorString(iRet));
      return -1;
   }
   for(;;)
   {
      capture >> frame; // read the next frame from camera
      if (frame.empty())
      {
         cerr << "ERROR: Can't grab camera frame." << endl;
         break;
      }
      reader.AppendFrame(frame.data);
      imshow("Frame", frame);
      int key = waitKey(1);
      if (key == 27/*ESC*/)
         break;
   }
   reader.StopFrameDecoding();
   return 0;
}
```

[1]: assets/read-from-diff-source/dbr_qr.png


