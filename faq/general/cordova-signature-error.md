---
layout: default-layout
title: When building my Cordova app, I get an error saying “invalid signature”. How do I resolve that?
keywords: Dynamsoft Barcode Reader, FAQ, Mobile, tech basic, ios, cordova, invalid signature
description: When building my Cordova app, I get an error saying “invalid signature”. How do I resolve that?
needAutoGenerateSidebar: true
---

# When building my Cordova app, I get an error saying “invalid signature”. How do I resolve that?

[<< Back to FAQ index](index.md)

Once the `ios` platform is added to your Cordova project, you must manually configure the signature of the application on the iOS side of things via the *.xcworkspace* of the app. The *.xcworkspace* can be found in `platforms/ios`. 

After opening the *.xcworkspace*, please go to the “Build Settings” and configure the “Signing & Capabilities” section. 