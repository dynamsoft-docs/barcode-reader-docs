---
layout: default-layout
title: How to use the JavaScript SDK in offline mode?
keywords: Dynamsoft Barcode Reader, FAQ, Sales & Licensing, offline mode use
description: How to use the JavaScript SDK in offline mode?
needAutoGenerateSidebar: false
---

# How to use the Dynamsoft Barcode Reader JavaScript SDK in offline mode?

[<< Back to FAQ index](index.md)


It depends on the license option you are using:

 1. If it is Per Barcode Scan License, the client device can work in an offline scenario after it is registered, but no more than 3 days. The initial registration of the device requires an internet connection if the license is hosted on the Dynamsoft server. If you chose the self-hosting option when activating the license, then the device must have a connection to your internally hosted license server for the initial registration.

 2. If it is Per Client Device License, we have some per-device license types: **Yearly**, **Quarterly**, **Monthly** and **Daily** active device license, which allows users to set the offline usage interval in an allowed time period (365 days, 90 days, 30 days and 24 hours), in the settled interval the SDK could work successfully. 

The full details are explained [here](https://www.dynamsoft.com/license-server/docs/about/licensefaq.html?ver=latest#can-a-client-device-work-offline).
