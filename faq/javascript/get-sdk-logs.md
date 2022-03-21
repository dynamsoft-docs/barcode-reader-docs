---
layout: default-layout
title: How to get the logs for the SDK?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, logs
description: How to get the logs for the SDK?
needAutoGenerateSidebar: false
---

# FAQ - JavaScript

## How to get the logs for the SDK?

The SDK can provide logs via the browser console. Logging can be activated by `_onLog` property.

```javascript
Dynamsoft.DBR.BarcodeReader._onLog = console.log;
```
