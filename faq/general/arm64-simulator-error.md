---
layout: default-layout
title: How to resolve the "Building for iOS Simulator, but linking in dylib built for iOS" error when building for the iOS simulator?
keywords: Dynamsoft Barcode Reader, FAQ, Mobile, tech basic, ios, arm64, simulator, exclude architectures
description: How to resolve the "Building for iOS Simulator, but linking in dylib built for iOS" error when building for the iOS simulator?
needAutoGenerateSidebar: true
---

# How to resolve the "Building for iOS Simulator, but linking in dylib built for iOS" error when building for the iOS simulator?

[<< Back to FAQ index](index.md)

DBR iOS can be used to build apps that belong to the arm64 architecture. If you try building an app for the arm64 simulator, and you migrated your app from an older version of Xcode to Xcode 12 or higher, then you might encounter the following error message:

> ld: "Building for iOS Simulator, but linking in dylib built for iOS, file '/ios/Pods/DynamsoftBarcodeReader/DynamsoftBarcodeReader.framework/DynamsoftBarcodeReader' for architecture arm64"

<br />

In order to fix the error, please take the following steps under the *Build Settings* of the Xcode project:

1. Under *User-Defined* -> find *VALIDATE_WORKSPACE* and set it to **YES**. Rebuild your project.

2. Under *Architectures* -> find *Build Active Architecture Only* and set it to **YES**.

3. Under *Architectures* -> make sure that *Architectures* is set to $(ARCHS_STANDARD).

<br />

If the error message persists, please make one of the following changes: 

- Instead of using the .framework (which all the samples do by default), switch to using the corresponding .xcframework

- Under the *Build Settings* -> find *Excluded Architectures* -> in the *Debug* field click the + icon -> select *Any iOS Simulator SDK* -> put "arm64"

- You can also exclude architectures via the Podfile as such:

    ```ruby
    post_install do |installer|
        installer.pods_project.build_configurations.each do |config|
            config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
        end
    end
    ```
    OR
    ```ruby
    post_install do |installer|
        installer.pods_project.build_configurations.each do |config|
            config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "uname -m"
        end
    end
    ```
    OR
    ```ruby
    podspec:
    s.pod_target_xcconfig = { 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64' }
    s.user_target_xcconfig = { 'EXCLUDED_ARCHS[sdk=iphonesimulator*]' => 'arm64' }
    ```
    