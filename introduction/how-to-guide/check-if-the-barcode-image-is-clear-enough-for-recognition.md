---
layout: default-layout
title: Dynamsoft Barcode Reader How-to Guides - Check If the Barcode Image Is Clear Enough for Recognition
description: This page shows how to check if the barcode image is clear enough for recognition.
keywords: image resolution, barcode module, clear image, how-to guides
needAutoGenerateSidebar: false
permalink: /introduction/how-to-guide/check-if-the-barcode-image-is-clear-enough-for-recognition.html
---


# How-to Guides - Check If the Barcode Image Is Clear Enough for Recognition

We often receive questions from customers as to why Dynamsoft Barcode Reader SDK is unable to decode their barcode, and the answer is often that the resolution of the original image is too low. Then what is the right resolution for a barcode image?

The resolution alone does not decide the barcode readability. What matters is the barcode module size. 

## Module size for a linear barcode

 A linear barcode is made up of parallel bars and spaces spacings. Module size is defined by the X-dimension -- the width of the narrowest bar, as shown in the image below:

![Clear Barcode Example Image][1]    


The recommended barcode module width for linear barcode types is at least **2 pixels**.     


[1]: assets/check-if-the-barcode-image-is-clear-enough-for-recognition/barcode-module-width.png
