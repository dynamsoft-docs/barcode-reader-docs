---
layout: default-layout
title: The pdf file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, scan specific page
description: The pdf file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?
needAutoGenerateSidebar: false
permalink: /faq/general/scan-specific-page.html
---

## The PDF file has 10 pages but only the last page has a barcode. Is it possible to decode the last page only?

[<< Back to FAQ index](index.md)

We are planning to add `Pages` parameter of the `ImageParameterOptions` Parameter.

Currently you will need to manually filter out the extra results from the returned retults or you can convert the specific pages pdf file to single image files and then decode the images. 
