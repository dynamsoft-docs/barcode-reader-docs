---
layout: default-layout
title: Why is the barcode image returning messy (non-english) characters on the online demo?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, messy characters, non-English characters
description: Why is the barcode image returning messy (non-english) characters on the online demo?
needAutoGenerateSidebar: false
permalink: /faq/general/non-english-characters.html
---

# FAQ - General

## Why is the barcode image returning messy (non-english) characters on the online demo?

The barcode text of the result is of a non-Latin based language, as by default most webpages are able to display Latin-based languages. 

In order to display the barcode text, it is best to do it via the [`barcodeBytes`](https://www.dynamsoft.com/barcode-reader/programming/c-cplusplus/struct/TextResult.html?src=c&&ver=latest#barcodebytes) of the TextResult. Once the bytes are obtained, you can 'translate' them to a string based on the encoding identifier of the language that you are trying to display.
