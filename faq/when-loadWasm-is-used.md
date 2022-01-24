---
layout: default-layout
title: When and why loadWasm is used?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, loadWasm
description: When and why loadWasm is used?
needAutoGenerateSidebar: false
---

# Tech Basic

## When and why loadWasm is used?

`loadWasm` method can be used to manually load the library on page load (DOMContentLoaded) rather than waiting till the instance needs to be created. This in turn saves the user time when the instance is created later on.
