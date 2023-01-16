---
layout: default-layout
title: How to ?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, enable DPM
description:
needAutoGenerateSidebar: false
permalink: /faq/general/gs1-result-output.html
---

# How to Remove Unreadable Charactors Like "\u{1D}" or "{GS}" from the Barcode Text of GS1 Code 128 and GS1 DataMatrix?

This page helps you to check whether the detected barcodes complies with the GS1 standard and output the barcode text without the unreadable charactors.

It is known that when the barcode complies with the GS1 standard, the first element of the `barcodeByte` is always an ASCII value 29. In addition, the ASCII value 29 might not only exsits at the begining of the `barcodeByte`. To remove all the unreadable charactors from the barcodeText, you have to find all GS1 symbols from the barcodeByte and remove them.

You can use the following code to find all GS1 symbols and remove them from the `barcodeByte`:

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- Java
   >- C#
   >- C++
   >- C
   >
>
```javascript
```
>
```java
public void textResultCallback(int id, ImageData imageData, TextResult[] textResults) {
    if (textResults!=null && textResults.length!=0){
        for (int i=0; i< textResults.length; i++){
        // If the first value of Byte is 29 and the barcode format is DataMatrix or Code 128, we think it is a GS1 standard barcode result
        if (Arrays.binarySearch(textResults[i].barcodeBytes,(byte)29)>=0 && (textResults[i].barcodeFormat==EnumBarcodeFormat.BF_CODE_128|textResults[i].barcodeFormat==EnumBarcodeFormat.BF_DATAMATRIX) ){
            List<Byte> listWithoutSymbols = new ArrayList<Byte>();
            for(int j=0;j<textResults[i].barcodeBytes.length;j++){
                if (textResults[i].barcodeBytes[j]!=29){
                    Log.i("Result", "j="+j);
                    listWithoutSymbols.add(textResults[i].barcodeBytes[j]);
                }
            }
            Log.i("Result", "textResultCallback: "+listWithoutSymbols);
            byte[] byteWithoutSymbols = new byte[listWithoutSymbols.size()];
            for(int j=0;j<listWithoutSymbols.size();j++){
                byteWithoutSymbols[j] = listWithoutSymbols.get(j);
            }
            // Generate a new barcode text from the byte.
            String textWithGS1Symbol = new String(byteWithoutGS1Symblol);
            //Log.i("Result log", "Barcode Text without GS1 Symbol = " + textWithGS1Symbol);
            // Add GS1 to the barcode format
            String gs1barcodeFormat = "GS1 " + textResults[i].barcodeFormatString;
            // Update the barcode text and barcode format text.
            textResults[i].barcodeFormatString = gs1barcodeFormat;
            textResults[i].barcodeText = textWithGS1Symbol;
            }
        }
    }
    runOnUiThread(() -> showResult(textResults));
}
```
>
```objc
- (void)textResultCallback:(NSInteger)frameId imageData:(iImageData *)imageData results:(NSArray<iTextResult *> *)results{
    if (results) {
        [_barcodeReader stopScanning];
        [DCEFeedback vibrate];
        //[DCEFeedback beep];
        NSString *title = @"Results";
        NSString *msgText = @"";
        for (NSInteger i = 0; i< [results count]; i++) {
            // Check whether the barcode is a GS1 DataMatrix or GS1 128
            const unsigned char* barcodeByteChar = results[i].barcodeBytes.bytes;
            if((results[i].barcodeFormat==EnumBarcodeFormatDATAMATRIX||results[i].barcodeFormat==EnumBarcodeFormatCODE128) && barcodeByteChar[0]==29){
                NSMutableData *byteWithoutGS1Symbol = [NSMutableData dataWithData:results[i].barcodeBytes];
                for (NSInteger j=0; j<results[i].barcodeBytes.length; j++){
                    if (barcodeByteChar[j]==29){
                        [byteWithoutGS1Symbol replaceBytesInRange:NSMakeRange(j,j+1) withBytes:NULL length:0];
                    }
                }
                NSLog(@"%@,%@", @"Original Barcode Text = ", results[i].barcodeText);
                //NSData *byteWithoutGS1Symbol = [results[i].barcodeBytes subdataWithRange:NSMakeRange(1, results[i].barcodeBytes.length-1)];
                NSString *textWithoutGS1Symbol = [[NSString alloc] initWithData:byteWithoutGS1Symbol encoding:NSUTF8StringEncoding];
                results[i].barcodeText = textWithoutGS1Symbol;
                results[i].barcodeFormatString = [@"GS1 " stringByAppendingString:results[i].barcodeFormatString];
                NSLog(@"%@,%@", @"GS1 Barcode Text = ", textWithoutGS1Symbol);
            }
        }
    }
}
```
>
```swift
func textResultCallback(_ frameId: Int, imageData: iImageData, results: [iTextResult]?) {
    if (results != nil){
        var msgText:String = ""
        let title:String = "Results"
        for item in results! {
            // Check whether the barcode result is a GS1 128 or GS1 DataMatrix barcode.
            if ((item.barcodeFormat == EnumBarcodeFormat.CODE128 || item.barcodeFormat == EnumBarcodeFormat.DATAMATRIX) && item.barcodeBytes?[0] == 29){
                //let byteWithoutGS1Symbol:NSMutableData = item.barcodeBytes as! NSMutableData
                var byteWithoutGS1Symbol:NSMutableData! = nil
                byteWithoutGS1Symbol = .init(data: item.barcodeBytes!)
                var i:NSInteger = 0
                for byteData in item.barcodeBytes! {
                    if (byteData == 29){
                        byteWithoutGS1Symbol.replaceBytes(in: NSMakeRange(i, i+1), withBytes: byteWithoutGS1Symbol.bytes, length: 0)
                    }
                    i+=1
                }
                // Generate a new barcode byte without the GS1 Symbol.
                //let byteWithoutGS1Symbol = item.barcodeBytes?.subdata(in: 1..<item.barcodeBytes!.count)
                // Generate a new barcode text without the GS1 Symbol.
                let textWithoutGS1Symbol = String(data: byteWithoutGS1Symbol as Data, encoding: String.Encoding.utf8)
                // Update the barcode result with new barcode text and barcode format string.
                item.barcodeText = textWithoutGS1Symbol
                item.barcodeFormatString = "GS1 " + item.barcodeFormatString!
            }
        }
    }else{
        return
    }
}
```
>
```python
```
>
```java
```
>
```csharp
```
>
```c++
```
>
```c
```
