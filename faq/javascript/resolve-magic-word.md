---
layout: default-layout
title: How to resolve the expected magic word error that occurs when using DBR JS?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, Magic Word, MIME
description: How to resolve the expected magic word error that occurs when using DBR JS?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to resolve the expected magic word error that occurs when using DBR JS?

When you build an application using DBR JS, and you choose to self-host the resources on your own server by getting a copy of the resource files of the library, there is a chance that you could run into an error along the lines of:

`Failed to get license info: WebAssembly.instantiate(): expected magic word...`

This error is most probably happening because you failed to configure the MIME types to include the `.wasm` file type when setting up the server. To learn how to configure the server, including the MIME type as well as enabling HTTPS, please refer to this [article](https://www.dynamsoft.com/barcode-reader/programming/javascript/user-guide/?ver=latest#step-two-configure-the-server).