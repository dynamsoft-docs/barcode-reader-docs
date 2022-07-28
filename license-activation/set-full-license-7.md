---
layout: default-layout
title: Dynamsoft Barcode Reader Licensing - How to set full license in version 7.x
description: This page shows how to set full license of Dynamsoft Barcode Reader in version 7.x.
keywords: full license, licensing, 7.x, License 1.0
needAutoGenerateSidebar: true
needGenerateH3Content: false
permalink: /license-activation/set-full-license-7.html
---

# How to set full license in version 7.x

> This article shows how to set the license in DBR version 7.x using License 1.0 protocol.

## For using C/C++/.NET/Java/Python on Windows & Linux 

Different methods are used for setting trial and full license keys. In the demo or sample applications, we use `.InitLicense()` or `.ProductKeys` to set trial license keys. For the purchased version, you need to use `initLicenseFromServer()` or `initLicenseFromLicenseContent()` to complete the license registration.

You can use a development/runtime license by following the steps below:

1. [Activate a development/runtime license](#activate-a-developmentruntime-license)
2. [Register the development/runtime license key](#register-the-development-license-key) 

### Activate a development/runtime license

 Once you obtain a Development License, you can find your license information at <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a>. 

 To activate a development license (8-digit key), select **Unactivated** license, click the **License Id** link beside it.
 
 ![NewLicense2][1]
 
 On the license page, click the **Activate** button on the top left.
 
![LicensePage][11]

 On the next page, click the **Activate** button.
 
 ![ActivationPage][2]
 
 On the following popup window, click the **OK** button.
 
 ![ContinueActivation2][3]
 
 Then you can see the status, quota, used seats and expiration date of the activated license key. 
 
 ![ActivatedKey2][4]

 You can repeat the above steps to activate other license keys.

### Register the development license key

Here are the possible options to register a development license:

- [Option 1: Connect to Dynamsoft server once and use the SDK offline](#connect-once)
- [Option 2: Always connect to Dynamsoft server for license verification](#always-connect)
- [Option 3: No Internet connection](#offline)

#### Option 1: Connect to Dynamsoft server once and use the SDK offline {#connect-once}

 If you wish to use the SDK offline after activating, please follow the steps below:

 1. Use `initLicenseFromServer()` to connect to Dynamsoft Hosted server (or your own server) to obtain the license information. The machine needs Internet connection to complete the device registration for the first time. 
 2. Use `outputLicenseToString()` to get the information of the license and store the information to the development machine.
 3. Use `initLicenseFromLicenseContent()` API to register the license. If you got error message such as: license expired, run out of quota or barcode invalid etc. You need to recall `initLicenseFromServer()`  to update the information of the license.

Code snippet in C:
```c
void* _br = NULL;
int iLicMsg = -1;
char info[1024];
_br = DBR_CreateInstance();
FILE *file;
// Check if there is a license file on the local machine. If yes, use the local license file; Otherwise, connect to Dynamsoft Hosted server to verify the license. 
if ((file = fopen("license.txt", "r")) == NULL) 
{
  // Connect to the Dynamsoft server to verify the license
  iLicMsg = DBR_InitLicenseFromServer(_br, "", "licenseKey1;licenseKey2"); 
  // The second parameter is the IP of the license server. Leaving it  empty ("") means it will connect to Dynamsoft License Server for online  verification automatically.
  // If error occurs to the license
  if (iLicMsg != DBR_OK) {
     printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
     return iLicMsg;
  } 
  DBR_OutputLicenseToString(_br, info, 1024); // For the third parameter, the recommended length is 512 for one license key. 
  // If you have N license keys, please set it to N * 512. 

  // If you wish to use SDK offline, store the license information in txt or other format
  FILE *fp = fopen("license.txt", "w");
  if (fp == 0){
     printf("can't open file\n");
     return 0;
  }
  fwrite(info, sizeof(char) * 1024, 1, fp);
  fclose(fp);
}
else{
  // Use the local license file and use Dynamsoft Barcode Reader SDK offline
  FILE *fp = fopen("license.txt", "r");
  fscanf(fp, "%s", &info);
  fclose(fp);
  iLicenMsg = DBR_InitLicenseFromLicenseContent(_br, "licenseKey1;licenseKey2",  info);
  // If error occurs to the license
  if (iLicMsg != DBR_OK) {
     printf("Failed to initialize the license successfully: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
     return iLicMsg;
  } 
}

// Barcode decoding happens here
//....
DBR_DestroyInstance(_br);
```

Code snippet in C++:
```cpp
CBarcodeReader* reader = new CBarcodeReader();
int iLicMsg = -1;
char info[1024];
string filePath= "license.txt";
// To be able to use the license key offline, you need to store the license file obtained from Dynamsoft server once you use the API, InitLicenseFromServer.
fstream licenseFile;
licenseFile.open(filePath, ios::in);
// Check if there is a license file on the local machine. If not, connect to Dynamsoft Hosted server to verify the license. Otherwise, use the local license file.
if (!licenseFile)  
{
   // Connect to Dynamsoft server to verify the license. 
   iLicMsg = reader->InitLicenseFromServer("", "licenseKey1;licenseKey2");
   // The first parameter is the IP of the license server. Leaving it empty ("") means it will connect to Dynamsoft License Server for online verification automatically.
       
   // If error occurs to the license
   if (iLicMsg != DBR_OK) 
   {
      printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, CBarcodeReader::GetErrorString(iLicMsg));
      return iLicMsg;
   }
   // If you wish to use SDK offline, store the license information in TXT or other format
   reader->OutputLicenseToString(info, 1024); // For the third parameter, the recommended length is 512 for one license key. 
  // If you have N license keys, please set it to N * 512. 
  
   ofstream licFileOut(filePath);
   licFileOut << info;
   licFileOut.close();
}
else
{
   // Use the local license file and use Dynamsoft Barcode Reader SDK offline
   ifstream licFileIn(filePath);
   licFileIn >> info;
   licFileIn.close();
   iLicMsg = reader->InitLicenseFromLicenseContent("licenseKey1;licenseKey2", info);
   // If error occurs to the license
   if (iLicMsg != DBR_OK) 
   {
      printf("Failed to initialize the license successfully: %d\r\n%s\r\n", iLicMsg, CBarcodeReader::GetErrorString(iLicMsg));
      return iLicMsg;
   }
}
// Decode barcodes happens here
//....
delete reader;
```

Code snippet in C#:
```csharp
int iLicMsg = -1;
string path = @"Put your file path here";
// To be able to use the license key offline, you need to store the license file obtained from Dynamsoft server once you use the API, InitLicenseFromServer.
BarcodeReader _br = new BarcodeReader();
// Check if there is a license file in the local machine. If not, connect to Dynamsoft Hosted server to verify the license. Otherwise, use the local license file.
if (!File.Exists(path))
{
   // Connect to Dynamsoft server to verify the license
   iLicMsg = _br.InitLicenseFromServer("", "licenseKey1;licenseKey2");
   // The first parameter is the string of the license server. Leaving it empty ("") means it will connect to Dynamsoft License Server for online verification.
   if(iLicMsg != 0)
   {
      Console.WriteLine("License error Code:",iLicMsg);
      return; 
   }
   // If you wish to use SDK offline, store the license information as txt format
   string license = _br.OutputLicenseToString();
   File.WriteAllText(path, license);
}
else{
   // Use the local license file and use Dynamsoft Barcode Reader SDK 
   string license = File.ReadAllText(path);
   iLicMsg = _br.InitLicenseFromLicenseContent("licenseKey1;licenseKey2",license);
   if(iLicMsg != 0)
   {
      Console.WriteLine("Error Code:",iLicMsg);
      return; 
   }
}
// Decode barcodes happens here
//....
```

Code snippet in Java:
```java
try {
   File file = new File("`<Please insert your intended license file path here for licensing procedure`>");
   BarcodeReader reader = new BarcodeReader();
   // Check if there is a license file on the local machine. If not, connect to Dynamsoft Hosted server to verify the license. Otherwise, use the license file.
   if (!file.exists()){
      // Connect to Dynamsoft server to verify the license. 
      reader.initLicenseFromServer("", "licenseKey1;licenseKey2");
      //The first parameter is the string of the license server. Leaving it empty ("") means it will connect to Dynamsoft License Server for online verification. 
      //The second parameter refer to 8-bit short key. You may buy our product with more than 2 supported barcode format types and in that case you need to list every license key divided by colon(;)
      //If you bought our product with single supported barcode format type, please just fill in your single license key in second parameter.
      // If you wish to use SDK offline, store the license information as txt format or in other format
      String license = reader.outputLicenseToString();
      PrintWriter pw = new PrintWriter(file);
      pw.print(license);
      pw.close();
   }
   else{
      // Use the local license file and use Dynamsoft Barcode Reader SDK 
      byte[] encoded = Files.readAllBytes(file.toPath());
      String license = new String(encoded, "utf-8");
      reader.initLicenseFromLicenseContent("licenseKey1;licenseKey2",license);
   }
}catch(Exception e) { //if your license is invalid, a BarcodeReaderException will be throw out
System.out.println(e);
}
```

Code snippet in Python:
```python
from typing import List
from dbr import *
license_key = "Input your own license"
reader = BarcodeReader()

#Check if there is a license file on the local machine. If not, connect to Dynamsoft Hosted server to verify the license. Otherwise, use the local license file.
if os.path.exists(license.txt):
   #Use the local license file to activate the SDK 
   with open("license.txt","r") as f:
      license_content = f.read()
try
   error = reader.init_license_from_license_content(license_key, license_content)
   if error[0] != EnumErrorCode.DBR_OK:
        print(error[0])
        print(error[1])
except BarcodeReaderError as bre:
    print(bre)
else:
try
   error = reader.init_license_from_server(license_server, license_key)
   if error[0] != EnumErrorCode.DBR_OK:
        print(error[0])
        print(error[1])
except BarcodeReaderError as bre:
    print(bre)
   #If you wish to use SDK offline, store the license information as .txt or other format
   license_content = reader.output_license_to_string()
   with open("license.txt","w") as f:
      f.write(license_content)
```

**Note:**
  - The license verification process on the machine can be a one-time process. Once it is registered, the registration file for this specific device can be returned and stored to the machine. 

  - If you need to increase the quota of your existing license key, please [contact us](https://www.dynamsoft.com/Company/Contact.aspx). 

#### Option 2: Always connect to Dynamsoft server for license verification {#always-connect}

 If your development machine can access Internet all the time, you can use the `initLicenseFromServer()` method to register the development license. It will connect to Dynamsoft server for license verification each time you use the SDK. 

Code snippet in C:
```c
void* _br = NULL;
int iLicMsg = -1;
_br = DBR_CreateInstance();
// Connect to the Dynamsoft server to verify the license
iLicMsg = DBR_InitLicenseFromServer(_br, "", "licenseKey1;licenseKey2"); 
// If error occurs to the license
if (iLicMsg != DBR_OK) {
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
   return iLicMsg;
} 
// Barcode decoding happens here
//....
DBR_DestroyInstance(_br);
```

Code snippet in C++:
```cpp
CBarcodeReader* reader = new CBarcodeReader();
int iLicMsg = -1;
// Connect to Dynamsoft server to verify the license. 
iLicMsg = reader->InitLicenseFromServer("", "licenseKey1;licenseKey2");
// If error occurs to the license
if (iLicMsg != DBR_OK) 
{
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, CBarcodeReader::GetErrorString(iLicMsg));
   return iLicMsg;
}
// Decode barcodes happens here
//....
delete reader;
```

Code snippet in C#:
```csharp
int iLicMsg = -1;
BarcodeReader _br = new BarcodeReader();
// Connect to Dynamsoft server to verify the license. 
iLicMsg = _br.InitLicenseFromServer("", "licenseKey1;licenseKey2");
if(iLicMsg != 0)
{
   Console.WriteLine("License error Code:",iLicMsg);
   return; 
}
// Decode barcodes happens here
//....
_br.Dispose();
```

Code snippet in Java:
```java
try {
   BarcodeReader reader = new BarcodeReader();
   // Connect to Dynamsoft server to verify the license. 
   reader.initLicenseFromServer("", "licenseKey1;licenseKey2"); 
   //now you are free to start barcode decoding.
}
catch(Exception ex) {
   //if your license is invalid, a BarcodeReaderException will be throw out
   //com.dynamsoft.barcode.BarcodeReaderException: The license key is invalid.
   System.out.println(ex); 
}
```

Code snippet in Python:
```python
from typing import List
from dbr import *
license_key = "Input your own license"
reader = BarcodeReader()
try
error = reader.init_license_from_server(license_server, license_key)
if error[0] != EnumErrorCode.DBR_OK:
        print(error[0])
        print(error[1])
except BarcodeReaderError as bre:
    print(bre)
```

#### Option 3: No Internet connection {#offline}

If your machine is not allowed to access Internet, you can follow the steps below to manually register the device and get the license content.

1. Log in <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a> and click **License Id**.

![ActivatedKey_Used2][5]

2. Click the **Add Device** button to add a device.

![Add2][6]

3. Get amd run the Dynamsoft tool on the device to be registered and get the machine ID. 

 **For Windows:** 
 
 Download <a href="https://download.dynamsoft.com/MachineIDGenerator/MachineIDGenerator.exe" target="_blank">MachineIDGenerator.exe</a> and run it. The returned string, e.g. `tZRk-6qb2-sEyE-wcz7-jf6j-8DH/-Di3u-zjSv-G86f-ol3x`, is the machine ID.

![MachineID_Windows][7]

 **For Linux:** 

 Download <a href="https://download.dynamsoft.com/MachineIDGenerator/MachineIDGenerator.tar.gz" target="_blank">MachineIDGenerator.tar.gz</a> and unzip it. Open **Terminal** and type `./MachineIDGenerator`. The returned string, e.g. `iJpN-Cajc-qQip-Sl50-NEX+-z1dJ-XmmV-lS9O-G86f-ol3x`, is the machine ID.

 ![MachineID_Linux][8]

4. Input the machine ID in the text box and click **Submit**.

 ![ManuallyActivate2][9]

 Then the license file (`.dslf`), which contains the license content, will be downloaded automatically.

 ![DownloadLicense][10]

5. Use the `initLicenseFromLicenseContent(licenseKey, licenseContent)` API to activate the SDK offline.
 
 `licenseKey`: 8-digit key in the customer portal

 `licenseContent`: the string in the `.dslf` file

Code snippet in C:
```c
void* _br = NULL;
int iLicMsg = -1;
_br = DBR_CreateInstance();
// Use the SDK offline
iLicMsg = DBR_InitLicenseFromLicenseContent(_br, "licenseKey1;licenseKey2", "LicenseContent")); 
// If error occurs to the license
if (iLicMsg != DBR_OK) {
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
   return iLicMsg;
} 
// Barcode decoding happens here
//....
DBR_DestroyInstance(_br);
```

Code snippet in C++:
```cpp
CBarcodeReader* reader = new CBarcodeReader();
int iLicMsg = -1;
// Use the SDK offline 
iLicMsg = reader->InitLicenseFromLicenseContent("licenseKey1;licenseKey2", "LicenseContent");
// If error occurs to the license
if (iLicMsg != DBR_OK) 
{
   printf("Failed to initialize the license: %d\r\n%s\r\n", iLicMsg, CBarcodeReader::GetErrorString(iLicMsg));
   return iLicMsg;
}
// Decode barcodes happens here
//....
delete reader;
```

Code snippet in C#:
```csharp
int iLicMsg = -1;
BarcodeReader _br = new BarcodeReader();
// Use the SDK offline 
iLicMsg = _br.InitLicenseFromLicenseContent("licenseKey1;licenseKey2", "LicenseContent");
if(iLicMsg != 0)
{
   Console.WriteLine("License error Code:",iLicMsg);
   return; 
}
// Decode barcodes happens here
//....
_br.Dispose();
```

Code snippet in Java:
```java
try{
   BarcodeReader reader = new BarcodeReader();
   // Use the SDK offline
   reader.initLicenseFromLicenseContent("licenseKey1;licenseKey2", "LicenseContent");
}catch(BarcodeReaderException e) { //if your license is invalid, a BarcodeReaderException will be thrown
   System.out.println(e.getErrorCode());
   System.out.println(e.getMessage());
}
```

Code snippet in Python:
```python
from typing import List
from dbr import *
license_key = "Input your own license"
reader = BarcodeReader()
os.path.exists(license.txt):
   #Use the local license file to activate the SDK 
   with open("license.txt","r") as f:
      license_content = f.read()
try
   error = reader.init_license_from_license_content(license_key, license_content)
   if error[0] != EnumErrorCode.DBR_OK:
        print(error[0])
        print(error[1])
except BarcodeReaderError as bre:
    print(bre)
```

## For iOS/Android SDK

Please use a development/runtime license by following the steps below:

1. [Activate a development/runtime license](#activate)
2. [Register the development/runtime license key](#register-the-developmentruntime-license-key) 

### Activate a development/runtime license {#activate}

 Once you obtain a Development License, you can find your license information at <a href ="https://www.dynamsoft.com/customer/license/fullLicense" target="_blank">Customer Portal</a>. 

 To activate a development license (8-digit key), select **Unactivated** license, click the **Activate Now** link beside it.

 ![NewLicense2][1]

 On the next page, click the **Activate** button.
 
 ![ActivationPage][2]
 
 On the following popup window, click the **OK** button.
 
 ![ContinueActivation2][3]
 
 Then you can see the status, quota, used seats and expiration date of the activated license key. 
 
 ![ActivatedKey2][4]

 You can repeat the above steps to activate other license keys.

### Register the development/runtime license key

 Use `initLicenseFromServer()` to connect to Dynamsoft hosted server or your own server to obtain the license information. The machine needs Internet connection to complete the device registration for the first time. 

 Code snippet in obj-c:
 ```obj-c
DynamsoftBarcodeReader *m_barcodeReader;
m_barcodeReader = [[DynamsoftBarcodeReader alloc] initWithLicenseFromServer:serverURL licenseKey:licenseKey verificationDelegate:self];
 ```

 Code snippet in swift:
 ```swift
var barcodeReader: DynamsoftBarcodeReader!;
barcodeReader = DynamsoftBarcodeReader(licenseFromServer: serverURL, licenseKey: licenseKey, verificationDelegate: self);
 ```

 Code snippet in Java:
 ```java
BarcodeReader dbr = new BarcodeReader();

dbr.initLicenseFromServer("", "", new DBRServerLicenseVerificationListener() {
    @Override
    public void licenseVerificationCallback(boolean isSuccess, Exception error) {
       }
    });
 ```
## Common error code

- **Error Code:  -10044**

 **Error Message:** Failed to request the license content

 **Solution:**

 Check your network connection and make sure you have Internet access. If you have a firewall configured on the device, it is very likely that our license server is blocked by your firewall. Please [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) to resolve the issue. 


- **Error Code: -10054**

 **Error Message:** The license key has no remaining quota

 **Solution:** 

 You can [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) to expand the volume of your current runtime license key. Rest assured that your license key remains unchanged during the upgrade process, so no code change is required to your application. 


- **Error Code: -10004**

 **Error Message:** The license has expired

 **Solution:** 

 Your annual runtime license has expired. You can log into the customer portal to renew your runtime license by credit card or PayPal. Alternatively, you can [contact Dynamsoft](https://www.dynamsoft.com/Company/Contact.aspx) if you prefer other payment methods (wire transfer or check). Rest assured that your license key remains unchanged during the upgrade process, so no code change is required to your application. 


- **Error Code: -10042**

 **Error Message:** The license DLL is missing (for C/C++)

 **Solution:**

 For 8-digit license keys, we use a separate license DLL to verify the License. Please copy `DynamsoftLicClientx64.dll` (or `DynamsoftLicClientx86.dll`) from `[INSTALLATION FOLDER]\Components\C_C++\Redist\x64\` (or `[INSTALLATION FOLDER]\Components\C_C++\Redist\x86`) to the same folder as the barcode reader dll `DynamsoftBarcodeReaderx64.dll` (or `DynamsoftBarcodeReaderx86.dll`).


- **Error Code: -10052**

 **Error Message:** The license content is invalid

 **Solution:** 

 This error happens when you are trying to use InitLicenseFromLicenseContent() API to activate the license. Please refer to [Use a Development License](#register-the-development-license-key) section to double check if the license content is correct. 
If you run into any issues, please [contact Dynamsoft Support](https://www.dynamsoft.com/Company/Contact.aspx).

[1]:assets\set-full-license\NewLicense2.png
[2]:assets\set-full-license\ActivationPage.png
[3]:assets\set-full-license\ContinueActivation2.png
[4]:assets\set-full-license\ActivatedKey2.png
[5]:assets\set-full-license\ActivatedKey_Used2.png
[6]:assets\set-full-license\Add2.png
[7]:assets\set-full-license\MachineID_Windows.png
[8]:assets\set-full-license\MachineID_Linux.png
[9]:assets\set-full-license\ManuallyActivate2.png
[10]:assets\set-full-license\DownloadLicense.png
[11]:assets\set-full-license\LicensePage.png
