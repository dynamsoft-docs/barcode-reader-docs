---
layout: default-layout
title: How to use offline registration license type?
keywords: Dynamsoft Barcode Reader, FAQ, offline, license type
description: How to use offline registration license type?
needAutoGenerateSidebar: false
permalink: /faq/general/offline-registration-license.html
---

## How to use offline registration license type?

[<< Back to FAQ index](index.md)


You can follow the steps below to manually register the device and get the license key for each device:

1. Log in [Customer Portal](https://www.dynamsoft.com/customer/license/fullLicense) -> Click the Activate button to activate the license
![activate](./assets/activate.jpg)


2. Select the 3rd option "No License Server. Register Offline Device(s) Manually" and click Activate.
![offline-activate](./assets/offline-activate.jpg)

3. Click the Add Device button then it will pop up a dialog. Download the tool from the pop up.
![uuid-tool](./assets/uuid-tool.jpg)

4. Unzip the file and run the GenerateUUID tool on the device to be registered and get the UUID.<br>

## For Windows:

1. Open Command Prompt (cmd.exe)
2. Change the working directory to the one where `GenerateUUID.exe` is located
3. Run the command: `GenerateUUID.exe`

The returned string, e.g. `8ECCA3B6-66F9-4fd6-B6B6-308C874140C6`, is the machine ID.

![uuid](./assets/uuid.jpg)

## For Linux:

1. Open Terminal
2. Change the working directory to the one where `GenerateUUID` is located
3. Run the command: `sudo chmod 777 GenerateUUID`
4. After inputting the password, run: `./GenerateUUID`

  You will see the generated UUID like this (the ID should be different):
  
  ```
  SoftbindUUID: 230e089a-7dc3-4caa-9c77-f7cc6d567f9b
  ```
  
  `230e089a-7dc3-4caa-9c77-f7cc6d567f9b` is the generated UUID. You can now use it to register the device and get an Authorization String for it.
  
  > Note: If your device is an ARM-based architecture, please use get device uuid API to generate the uuid: 
  > ```python
  > # sample code in python
  > print(BarcodeReader.get_device_uuid(1))
  > ```
  
  > Note: If you want multiple users in operating system to use the license, you will need to move the .Dynamsoft folder to a path where all the users can access. Let us say `/Home/shared/.Dynamsoft`.
  > For all the programs in the devices, you will need to set the license cache path to `/Home/shared` before initialize the license
  > ```python
  > # set license cache path before initialize the license
  > BarcodeReader.set_license_cache_path("/Home/shared")
  > ```


5. Input the generated UUID and device name and click Submit.
![submit-uuid](./assets/submit-uuid.jpg)

6. Then an authorization string will be generated. This string is the license for this device. Copy the license and set it in the code
![cp-license](./assets/cp-license.jpg)

Code snippet in JavaScript:
```javascript
Dynamsoft.DBR.BarcodeScanner.license = "DLC2+4LgkxoZik5yCuJxMDneqJPVQZJROL…";
let scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
```

Code snippet in C:
```C
  char errorBuf[512];
  DBR_InitLicense("DLC2+4LgkxoZik5yCuJxMDneqJPVQZJROL…", errorBuf, 512);
  void* barcodeReader = DBR_CreateInstance();
  // add further process
```
Code snippet in C++
```C++
errorCode = CLicenseManager::InitLicense("YOUR-LICENSE-KEY", szErrorMsg, 256);
if (errorCode != ErrorCode::EC_OK && errorCode != ErrorCode::EC_LICENSE_CACHE_USED)
{
    cout << "License initialization failed: ErrorCode: " << errorCode << ", ErrorString: " << szErrorMsg << endl;
}
else
{
    // other codes...
}
  // add further process
```
Code snippet in C#:
```C#
errorCode = LicenseManager.InitLicense("YOUR-LICENSE-KEY", out errorMsg);
if (errorCode != (int)EnumErrorCode.EC_OK && errorCode != (int)EnumErrorCode.EC_LICENSE_CACHE_USED)
{
    Console.WriteLine("License initialization error: " + errorMsg);
}
else
{
    CaptureVisionRouter cvr = new CaptureVisionRouter();
    // add code for further process
}
```
Code snippet in Java:
```Java
  LicenseError licenseError = LicenseManager.initLicense("YOUR-LICENSE-KEY");
  if (licenseError.getErrorCode() != EnumErrorCode.EC_OK && 
      licenseError.getErrorCode() != EnumErrorCode.EC_LICENSE_CACHE_USED) {
      System.out.println("License initialization error: " + licenseError.getErrorString());
  } else {
      CaptureVisionRouter cvrInstance = new CaptureVisionRouter();
      // add code for further process
  }
```
Code snippet in Python:
```Python
error_code, error_msg = LicenseManager.init_license("YOUR-LICENSE-KEY")
if error_code != EnumErrorCode.EC_OK.value and error_code != EnumErrorCode.EC_LICENSE_CACHE_USED.value:
    print("License initialization error: " + error_msg)
else:
    cvr_instance = CaptureVisionRouter()
```




