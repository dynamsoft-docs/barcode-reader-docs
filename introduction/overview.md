---
layout: default-layout
title: Dynamsoft Barcode Reader Introduction - Overview
description: This is the overview page of Dynamsoft Barcode Reader Introduction.
keywords: overview
needAutoGenerateSidebar: true
needGenerateH3Content: true
---

# Overview of Dynamsoft Barcode Reader  

Dynamsoft Barcode Reader (DBR) is a software development kit (SDK) with highly competitive performance and service. DBR enables you to efficiently embed barcode reading functionality in your web, mobile, desktop and server application using just a few lines of code. With our SDK, you can create reliable barcode scanner software with enterprise-grade performance to meet your business needs. The following gives you a brief overview of available DBR features.


## Barcode Formats

As of v9.0, DBR currently supports the following barcode formats:  

| 1D/Linear Barcodes       | 2D Barcodes         | GS1 DataBar             | Postal Codes          | Other Types         |     
|--------------------------|---------------------|-------------------------| --------------------- | ------------------ |
| Code 39/Code 39 Extended | QR Code             | Omnidirectional         | USPS Intelligent Mail | GS1 Composite Code |     
| Code 93                  | Micro QR Code       | Truncated               | Postnet               | Patch Code         |    
| Code 128                 | Data Matrix         | Stacked                 | Planet                | Pharmacode         |
| Codabar                  | PDF417              | Stacked Omnidirectional | Australian Post       | | 
| Interleaved 2 of 5       | Micro PDF417        | Limited                 | UK Royal Mail         | |
| EAN-8                    | Aztec Code          | Expanded                |                       | |
| EAN-13                   | MaxiCode (mode 2-5) | Expanded Stacked        |                       | | 
| UPC-A                    | DotCode             |                         |                       | | 
| UPC-E                    |                     |                         |                       | |
| Industrial 2 of 5        |                     |                         |                       | |    
| MSI (Modified Plessey)   |                     |                         |                       | |    
| Code 11                  |                     |                         |                       | |    

&nbsp;

## Programming Languages and Frameworks

Cross-platform application development is now the new trend. The core of DBR is written in C and C++ for performance. The library is also wrapped for use with .NET, PHP, Java, Python, and other programming languages so that your users can use the barcode scanning functionality on iOS, Android, Windows, macOS, and Linux. Below is a list of supported programming languages and frameworks: 

| Programming Language | Framework             |
|----------------------|-----------------------|
| C/C++                | Cordova/PhoneGap      |
| JavaScript           | React Native          |
| Python               | Xamarin/Xamarin.Forms |
| C\#/VB.NET           | .NET Core             |
| Java                 |                       |
| Swift/Objective-C    |                       |
| PHP                  |                       |

&nbsp;

## Key Features

### Customize every aspect of the barcode image
Do you have a small, blurry, or damaged barcode? Are you capturing barcodes in a low light situation or with glare? No problem! DBR provides hundreds of customization settings to allow you to take control of it all. Our default settings are sufficient for most enterprise customers. However, additional tweaks can be made for your specific cases to achieve greater speed and accuracy. DBR has consistently proven itself to be robust and flexible enough for every industry. 

### Adjustable balance between speed and accuracy
Although life is not perfect, Dynamsoft Barcode Reader is coming quite close. Sometimes, a trade-off between speed and accuracy might be needed depending on the barcode images. DBR is capable of achieving high speed or high accuracy with minimal sacrifices to the other factor. Or why not have both high speed and high accuracy? We can help strike a perfect balance for your use case.

### Universal architecture to handle various barcode formats
Do you want to read multiple barcodes at once? How about multiple barcode formats at once? DBR is capable of reading multiple barcodes of varying barcode formats at any time. Wherever you’re in healthcare, retail, or manufacturing, DBR can help you successfully meet your business needs.

### Friendly interfaces to third-party applications
DBR provides friendly interfaces for data sharing with third-party applications.


&nbsp;

## Enhanced Functionalities

### Intermediate Results
DBR returns intermediate results providing information that advanced users can employ in other workflows to improve efficiency or create new applications. Intermediate results include, but is not limited to, original image, pre-detected region, preprocessed image, binary image, text zone, contours and line segments.   

### Data Matrix Direct Part Marking
DBR supports decoding DPM Data Matrix codes commonly used in automotive, aerospace, and electronics manufacturing industries. DPM codes are quite tricky to read with probable surface imperfections, poor lighting conditions, and similar colour and contrast. Despite these challenges, DBR’s proprietary algorithm makes it possible to achieve successful scans on parts with traditional barcode decoding.   

### Panorama / Overlap 
Dynamsoft Panorama™ is a revolutionary inventory management solution for warehouse managers and others involved with inventory. It improves the use of an inventory barcode scanner by maximizing barcode reader recognition speed and accuracy and delivering results in real-time. This new panorama feature will capture and stitch images together to form a complete panoramic view allowing workers to discover any missed barcodes in real-time, as well as see text results of the barcodes.   

### Vector PDF File
DBR can read barcodes in vector PDF files much more efficiently than raster PDF files. The LM_LINES localization mode uses line segments to find barcodes, which allows vectors in a PDF file to be utilized by DBR directly. Each bar or module is sampled based on the distance of the vectors comprising the barcodes. This procedure skips all image processing steps. It’s speedy and precise.   


&nbsp;

## User Scenarios
Dynamsoft works with customers ranging from startups to fortune 500 companies that span all industry verticals. Below is a list of common uses, their challenges, and what DBR can do to overcome these obstacles.

- General paper documents   
   Documents are usually filled with text, as they should be, which makes barcode reading tricky. DBR is able to filter out the text when localizing a barcode resulting in quicker and more accurate reads.   
   
- IDs and certifications (e.g. driver licenses, passports)   

- General labels (soft/hard base)   
   Labels on soft and hard surfaces like boxes are prone to damage. DBR tries to resist deformation and restore the proper barcode.   

- Paper tickets, invoices, receipts (dot matrix printing, lack of ink) (Complement)   
   Dot matrix, inkjet, and thermal printers may face issues with ink such as streaking, fading, and smudging. DBR can fill and merge the missing parts of a barcode to produce the correct result.

- Electronic tickets (screen)   
   Surface and lighting imperfections like glare and reflection on screens poses a great challenge to barcode scanning. Luckily, DBR is able to detect and filter out the texture before localization.   
      
    
The following environments and scenarios can make use of Dynamsoft Panorama:
- Inventory management
- Vending machines
- Logistics (Conveyor, Dispatcher)
- Product lines
- Warehouses

Do you see your case above? Let DBR supercharge your barcode workflow.

