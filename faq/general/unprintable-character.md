---
layout: default-layout
title: How to Handle Non-printable Characters Like "\u{1D}" or "{GS}" from the Barcode Text?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, enable DPM
description: How to Handle Non-printable Characters Like "\u{1D}" or "{GS}" from the Barcode Text?
needAutoGenerateSidebar: false
permalink: /faq/general/unprintable-character.html
---

# How to Handle Non-printable Characters Like "\u{1D}" or "{GS}" from the Barcode Text?

This page helps to you modify the barcode results when non-printable characters exists in the barcode text you decoded.

You always get 2 values that stands for the barcode decoding result from the `CBarcodeResultItem` object:

- `barcodeBytes`
- `barcodeText`

Since `barcodeText` is a string value that generated from the `barcodeBytes`, is might be decoded into different characters based on different character encoding formats. When there exists a non-printable ASCII value (0 ~ 31 or 127) in the `barcodeBytes` array, the value is decoded into a messy code. Currently, the library doesn't provide methods to remove the non-printable characters nor convert them into printable characters, you have to add your own code to recognize the non-printable characters and replace or remove them. The following code snippet is an example for how to create a method for processing the `barcodeBytes` into a string you want.

**Code Snippet**

<div class="sample-code-prefix template2"></div>
   >- C++
   >- Android
   >- Objective-C
   >- Swift
   >
>
```c++
#include <string>
#include <map>
typedef enum ProcessNonPrintingCharsMode
{
    PNPCM_KEEP,
    PNPCM_REMOVE,
    PNPCM_CONVERT
}ProcessNonPrintingCharsMode;
class ProcessBarcodeBytesUtil
{
private:
    std::map<int, std::string> charValueToStringDict;
public:
    ProcessBarcodeBytesUtil()
    {
        int NonPrintingAsciiCharsValue[33] = {
            0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf,0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1a,0x1b,0x1c,0x1d,0x1e,0x1f,0x7f
        };
        const char* NonPrintingAsciiCharsString[33] = {
            "{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}","{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
        };
        for (int i = 0; i < 33; ++i)
            charValueToStringDict.insert(std::make_pair(NonPrintingAsciiCharsValue[i], NonPrintingAsciiCharsString[i]));
        }
        /**
        * Process the non-printing chars of barcode bytes to obtain desired text.
        *
        * @param [in] bytes The barcode content in a byte array.
        * @param [in] bytesLength The length of the byte array.
        * @param [in] mode The mode indicates how to processing non-printing chars.
        * @param [in] keepLineBreak The flag indicates whether to preserve the original line breaks in the resulting text. It is only valid when mode is PNPCM_REMOVE or PNPCM_CONVERT.
        *
        * @return Returns The text result after processing barcode bytes.
        *
        */
        std::string processBarcodeBytes(unsigned char* bytes, int bytesLength, ProcessNonPrintingCharsMode mode, bool keepLineBreak = true) {
        std::string result;
        for (int i = 0; i < bytesLength; ++i)
        {
            int byteValue = (int)bytes[i];
            if (charValueToStringDict.find(byteValue) == charValueToStringDict.end()
                || mode == PNPCM_KEEP
                || keepLineBreak && (byteValue == 10 || byteValue == 13)) {
                    result.append(1, bytes[i]);
                }
            else if (mode == PNPCM_CONVERT) {
                result.append(charValueToStringDict[byteValue]);
            }
        }
        return result;
    }
};
int main()
{
    // obtain bytes from CBarcodeResultItem.
    unsigned char* barcodeBytes = barcodeResult->GetBytes();
    int bytesLength = barcodeResult->GetBytesLength();
    ProcessBarcodeBytesUtil util;
    std::string originStr = util.processBarcodeBytes(barcodeBytes, bytesLength, PNPCM_KEEP);
    std::cout << "1.original text:" << std::endl << originStr << std::endl << std::endl;
    std::string strAfterRemoveExceptLineBreack = util.processBarcodeBytes(barcodeBytes, bytesLength, PNPCM_REMOVE);
    std::cout << "2.text after removing non-printing chars except line break:" << std::endl << strAfterRemoveExceptLineBreack << std::endl << std::endl;
    std::string strAfterRemove= util.processBarcodeBytes(barcodeBytes, bytesLength, PNPCM_REMOVE, false);
    std::cout << "3.text after removing non-printing chars:" << std::endl << strAfterRemove << std::endl << std::endl;
    std::string strAfterConvertExceptLineBreack = util.processBarcodeBytes(barcodeBytes, bytesLength, PNPCM_CONVERT);
    std::cout << "4.text after converting non-printing chars except line break:" << std::endl << strAfterConvertExceptLineBreack << std::endl << std::endl;
    std::string strAfterConvert = util.processBarcodeBytes(barcodeBytes, bytesLength, PNPCM_CONVERT, false);
    std::cout << "5.text after converting non-printing chars:" << std::endl << strAfterConvert << std::endl << std::endl;
    return 0;
}
```
>
```java
mRouter.addResultReceiver(new CapturedResultReceiver() {
    @Override
    // Implement the callback method to receive DecodedBarcodesResult.
    // The method returns a DecodedBarcodesResult object that contains an array of BarcodeResultItems.
    // BarcodeResultItems is the basic unit from which you can get the basic info of the barcode like the barcode text and barcode format.
    public void onDecodedBarcodesReceived(DecodedBarcodesResult result) {
        process = new ProcessBarcodeResultUtil();
        if (result!=null && result.getItems().length!=0){
            for (int i=0; i< result.getItems().length; i++){
                // The return value is the modified barcode text.
                String processedResult = process.processBarcodeByte(result.getItems().getBytes(),ProcessBarcodeResultUtil.ProcessNonPrintingCharsMode.PNPCM_REMOVE,true);
                Log.i("ProcessByte", "onDecodedBarcodesReceived: processeResult = "+processedResult);
            }
        }
    }
});
// Create a ProcessBarcodeResultUtil class
public class ProcessBarcodeResultUtil {
    enum ProcessNonPrintingCharsMode{
        PNPCM_KEEP,
        PNPCM_REMOVE,
        PNPCM_CONVERT
    }
    final HashMap<Integer, String> charValueToStringDict = new HashMap<Integer, String>();
    ProcessBarcodeResultUtil(){
        final int[] NonPrintingAsciiCharsValue = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127};
        final String[] NonPrintingAsciiCharsString = {
                "{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}",
                "{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
        };
        for (int i = 0; i < 33; ++i){
            charValueToStringDict.put(NonPrintingAsciiCharsValue[i], NonPrintingAsciiCharsString[i]);
        }
    }
    public String processBarcodeByte(byte[] barcodeByte, ProcessNonPrintingCharsMode mode, boolean keepLineBreak){
        StringBuilder processedResult = new StringBuilder();
        for (int i=0; i<barcodeByte.length; i++){
            int byteValue = (int)barcodeByte[i];
            if ((!charValueToStringDict.containsKey(byteValue)) || ((byteValue == 10 || byteValue == 13) && keepLineBreak) || mode == ProcessNonPrintingCharsMode.PNPCM_KEEP){
                processedResult.append((char)barcodeByte[i]);
            }
            else if(mode == ProcessNonPrintingCharsMode.PNPCM_CONVERT){
                processedResult.append(charValueToStringDict.get(byteValue));
            }
        }
        return processedResult.toString();
    }
}
```
>
```objc
typedef NS_ENUM(NSInteger,EnumResultProcessMode)
{
    RPM_KEEP = 0,
    RPM_CONVERT = 1,
    RPM_REMOVE = 2
};
...
- (void)onDecodedBarcodesReceived:(DSDecodedBarcodesResult *)result {
    if (result.items.count > 0) {
        for (DSBarcodeResultItem *item in result.items) {
            NSString *modifiedBarcodeText = [self processResult:item.bytes mode:RPM_CONVERT isBreaklineKept:NO];
            msgText = [msgText stringByAppendingString:[NSString stringWithFormat:@"\nFormat: %@\nText: %@\n", item.formatString, modifiedBarcodeText]];
        }
    }
}
- (NSString *)processBarcodeBytes:(NSData *)byte
                     mode:(EnumResultProcessMode)mode
          isBreaklineKept:(BOOL)isKept{
    NSArray<NSNumber*>* _nonPrintingAsciiCharsKey = @[@0,@1,@2,@3,@4,@5,@6,@7,@8,@9,@10,@11,@12,@13,@14,@15,@16,@17,@18,@19,@20,@21,@22,@23,@24,@25,@26,@27,@28,@29,@30,@31,@127];
    NSArray<NSString*>* _nonPrintingAsciiCharsString = @[@"{NUL}",@"{SOH}",@"{STX}",@"{ETX}",@"{EOT}",@"{ENQ}",@"{ACK}",@"{BEL}",@"{BS}",@"{HT}",@"{LF}",@"{VT}",@"{FF}",@"{CR}",@"{SO}",@"{SI}",@"{DLE}",@"{DC1}",@"{DC2}",@"{DC3}",@"{DC4}",@"{NAK}",@"{SYN}",@"{ETB}",@"{CAN}",@"{EM}",@"{SUB}",@"{ESC}",@"{FS}",@"{GS}",@"{RS}",@"{US}",@"{DEL}"];
    NSMapTable<NSNumber*,NSString *> * _charValueToStringDict = [NSMapTable strongToStrongObjectsMapTable];
    for (int i=0; i<_nonPrintingAsciiCharsKey.count;i++){
        [_charValueToStringDict setObject:_nonPrintingAsciiCharsString[i] forKey:_nonPrintingAsciiCharsKey[i]];
    }
    const char* _Nonnull barcodeByteChar = byte.bytes;
    NSString *processedText = @"";
    for (int i=0;i<byte.length;i++){
        if ((isKept && (barcodeByteChar[i]==10 || barcodeByteChar[i]==13)) || mode==RPM_KEEP || ((int)barcodeByteChar[i]>31 && (int)barcodeByteChar[i]!=127 && (int)barcodeByteChar[i]!=0)){
            NSString *nextString = [NSString stringWithFormat:@"%c",barcodeByteChar[i]];
            processedText = [processedText stringByAppendingString:nextString];
        }
        else if (mode == RPM_CONVERT){
            NSNumber *keyValue = [[NSNumber alloc] initWithInt:(int)barcodeByteChar[i]];
            NSString *nextString = [_charValueToStringDict objectForKey:@2];
            processedText = [processedText stringByAppendingString:nextString];
        }
    }
    return processedText;
}
```
>
```swift
enum EnumResultProcessMode{
    case keep
    case convert
    case remove
}
func onDecodedBarcodesReceived(_ result: DecodedBarcodesResult) {
    if let items = result.items, items.count > 0 {
        for item in items {
            let processedBarcodeText = processBarcodeBytes(byte: item.bytes, processMode: EnumResultProcessMode.convert, isKeep: true)
            item.barcodeText = processedBarcodeText
        }
    }
}
private func processBarcodeBytes(byte:Data, processMode:EnumResultProcessMode, isKeep:Bool) -> String{
    let charValueToStringDict:NSDictionary = [0:"{NUL}",1:"{SOH}",2:"{STX}",3:"{ETX}",4:"{EOT}",5:"{ENQ}",6:"{ACK}",7:"{BEL}",8:"{BS}",9:"{HT}",10:"{LF}",11:"{VT}",12:"{FF}",13:"{CR}",14:"{SO}",15:"{SI}",16:"{DLE}",17:"{DC1}",18:"{DC2}",19:"{DC3}",20:"{DC4}",21:"{NAK}",22:"{SYN}",23:"{ETB}",24:"{CAN}",25:"{EM}",26:"{SUB}",27:"{ESC}",28:"{FS}",29:"{GS}",30:"{RS}",31:"{US}",127:"{DEL}"]
    var processedString = ""
    for i in 0...byte.count-1{
        if ((isKeep && ((byte[i]==10) || (byte[i]==13))) || (processMode == EnumResultProcessMode.keep) || ((byte[i]>31) && (byte[i] != 127) && (byte[i] != 0))){
            let nextText:String = String(bytes: [byte[i]], encoding: String.Encoding.utf8)!
            processedString += nextText as String
        }
        else if (processMode == EnumResultProcessMode.convert){
            let nextText:NSString = charValueToStringDict.object(forKey: byte[i]) as! NSString
            processedString += nextText as String
        }
    }
    return processedString
}
```
