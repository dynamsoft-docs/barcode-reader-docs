---
layout: default-layout
title: What I can do when barcode image returnes messy (non-english) characters?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, messy characters, non-English characters
description: What I can do when barcode image returnes messy (non-english) characters?
needAutoGenerateSidebar: false
permalink: /faq/general/non-english-characters.html
---

## What I can do when barcode image returnes messy (non-english) characters?

[<< Back to FAQ index](index.md)

The barcode text of the result is of a non-Latin based language, as by default most webpages are able to display Latin-based languages. 

In order to display the barcode text, it is best to do it via the [`getBytes`](https://www.dynamsoft.com/barcode-reader/docs/server/programming/cplusplus/api-reference/barcode-result-item.html#getbytes) of the TextResult. Once the bytes are obtained, you can 'translate' them to a string based on the encoding identifier of the language that you are trying to display.
