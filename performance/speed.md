# How Dynamsoft Barcode Reader achieves the best speed in barcode reading

This article describes how the Dynamsoft Barcode Reader SDK (hereafter referred to as "the library") is designed for best speed and how to adjust its many settings to make the barcode reading even faster.

## Designed for speed

### Find all types of barcodes with one-time scan

The process to find barcodes on an image is called "localization". The library comes with a few different localization modes. Each mode stands for a unique algorithm, but they all share the same design: scan the image once to find all types of barcodes.

Because the library scans for the characteristics of all types of barcodes at once, it doesn't need to process the same image twice or more times when different types of barcodes are required. In other words, whether you just need to scan barcodes of a particular type or multiple types, the time cost is almost the same.

//LocalizationModes

### Special design for limited barcode type(s)

In most cases, an application only needs to handle one or a few types of barcodes. By using a specific localization mode, the library can focus better and become faster, because when the characteristics of some "regions of interest" do not match the type(s) it is looking for, it can quickly skip them.

For example, use "OneD_FAST_MODE" if you are only interested in linear barcodes or "Statistics_MODE" if you just want to find QR or DataMatrix codes.

//LocalizationModes

### Automatically distinguish and exclude regions with no barcode

In order to quickly focus on the actual region where the barcode is located, the library will do a fast scan of the image to identify irrelevant characters and exclude the areas surroudnging these characters for the following steps.

This is particularly useful for scanning barcodes on documents filled with text.

//TextFilterModes
//https://www.dynamsoft.com/barcode-reader/parameters/scenario-settings/text-filter.html?ver=latest

### Scalable-effort workflow design

The process to scan an image and read the barcode(s) from it consists of many steps. The library offers different approaches / algorithms in the form of modes for quite a few of these steps. Different modes are specified in the form of an array and the library will go through the array and try every single mode until the expected number and types of barcode(s) are found.

This design allows the user to adjust the workflow according to a specific use case to achieve best possible speed.

For example, as mentioned above, you can specify only the localization mode of "OneD_FAST_MODE" if all the barcodes to read are linear. Of course, the actual use case may not be so ideal. Assume most barcodes are linear but a few might be DataMatrix, we can allocate two modes "OneD_FAST_MODE" and "Statistics_MODE" but put "OneD_FAST_MODE".

Furthermore, for each mode, there could be adjustable arguments. For example, for each localization mode, you can set the `ScanStride` and `ScanDirection` which determines the step and direction on how the library scans an image.

To sum up, for a particular step in the workflow, if there are multiple modes available, there are three things to adjust for best speed:

* Which modes to use;
* The order of the modes;
* The configuration of a particular mode.

### Optimized for video frame decoding

For a mobile or web application, the use case is usually to pick barcodes out of continuous video frames. There are four major factors that may have a big impact in speed

* Whether the camera is suitable;
* Whether the frames are clear;
* How big the frame is;
* Whether the process is intermittent.

Generally speaking, you get the best speed if

* The camera that takes the best shot of the intended barcode(s) on the device is used;
* The video frame is clear enough;
* The video frame is cropped so that it is small but still contains the complete barcode region;
* The barcode reading engine is kept busy so that it doesn't waste time requesting the device for resources.

For these benefits, the library comes with an assistant program by the name of Dynamsoft Camera Enhancer ("DCE" for short) which may appear as an independent library (as in the Mobile edition) or built into the main barcode reader library itself (as in the JavaScript edition).

DCE speeds up video frame decoding by the following features:

* It comes with camera control and is able to find and open the best suited camera by default;
* It maintains a frame queue and has a sequence to crop these frames to make them smaller. The decoding process will always be able to get the next frame to process once it finishes the previous one;
* It also has a lightspeed algorithm to detect whether a frame is blurry, once confirmed, the frame is discarded so it doesn't waste any decoding time. At the same time, it will tell the camera to adjust its focus;
* With the help of the localization algorithm of the main library, it can even tell the camera to zoom in on the intended barcode(s).

## How to adjust the library's many settings to make it faster

### Specify the barcode types

This is probably the most natural setting of all. By clearly telling the library what we are looking for, it can quickly identify and skip other types of barcodes.

// add link to the related APIs of different languages
// BarcodeFormatIds, BarcodeFormatIds_2

### Specify the count of barcodes

By default, the library tries to find as many barcodes as possible. Assume an image is very big but has only one barcode at the top, the library finds the barcode instantly but will spend more time scanning the rest of the image. By telling the library that we are only expecting one barcode, it will stop scanning the image as soon as that barcode is found.

// add link to the related APIs of different languages
// ExpectedBarcodesCount

### Specify the region of interest

When reading barcodes from a certain types of documents or from video frames, the barcode location is usually predetermined. For example, the barcode on a patient registration form is most likely located in the top 20% of the document and the barcode that a user is trying to read from a video input is usually located at the center. By telling the library where to look, we can significantly reduce wasted time.

// add link to the related APIs of different languages
// RegionDefinition

// More info: multiple regions, each with its own settings
// RegionPredetectionModes

### Shrink monstrous images

Sometimes, the image to read may be very very big and it's uncertain where the barcode(s) is. If the size of the barcode(s) is comparable to the image itself, we can tell the library to scale down the image itself before scanning it to save time.

// add link to the related APIs of different languages
// ScaleDownThreshold

### Unleash the power of the masses

The algorithm to process an image has quite a few steps and for each step, there could be multiple options to try. For processes which don't necessary need to wait for each other, we can tell the library to open multiple threads/workers to work on different tasks at the same time.

// add link to the related APIs of different languages
// MaxAlgorithmThreadCount

### Avoid time-consuming exceptions

Sometimes, the library may encoutner an image that is very challenging. The nature of the library is to try its best at all costs, so it may take a really long time. Although the reading may eventually succeed, this probably isn't what we want for our application. Therefore, we can tell the library to set a timer and stops a reading process once the timer expires.

This is especially useful when it comes to continuous scanning of video frames as it makes no sense to spend too much time on one difficult frame when the next frame in the queue contains the same barcode(s).

// add link to the related APIs of different languages
// there could be different implementation too.
// Timeout