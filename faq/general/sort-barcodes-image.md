---
layout: default-layout
title: How can I sort the barcodes of my image in reading order?
keywords: Dynamsoft Barcode Reader, FAQ, DBR Introduction, General, sorting, reading order
description: How can I sort the barcodes of my image in reading order?
needAutoGenerateSidebar: false
permalink: /faq/general/sort-barcodes-image.html
---

## How can I sort the barcodes of my image in reading order?

When decoding a large image that contains a large number of barcodes (like a large batch of test vials in a  medical lab), you will probably find that the order in which you get the results is not in a natural reading order.

This is mainly due to the localization algorithms that the SDK utilizes in order to achieve a 100% read rate on the entire image and pick up all the barcodes. However, getting the barcodes back in reading order can be greatly helpful to your users and can be used to offer a nice visual representation of the recognized barcodes and help easily identify which barcode(s) did not get read.

Our team created the following [article](https://www.dynamsoft.com/codepool/sort-multiple-barcodes-in-reading-order.html?utm_medium=social&utm_campaign=Codepool2023) which details how you can sort the barcode results in reading order. Please note that the article mainly deals with JavaScript code, but the same principles can be applied to other editions of the Barcode Reader SDK.