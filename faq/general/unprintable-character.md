---
layout: default-layout
title: How to ?
keywords: Dynamsoft Barcode Reader, FAQ, tech basic, enable DPM
description:
needAutoGenerateSidebar: false
---

# How to Handle Non-printable Characters Like "\u{1D}" or "{GS}" from the Barcode Text?

This page helps to you modify the barcode results when non-printable characters exists in the barcode text you decoded.

You always get 2 values that stands for the barcode decoding result from the `textResult` object:

- `barcodeBytes`
- `barcodeText`

Since `barcodeText` is a string value that generated from the `barcodeBytes`, is might be decoded into different characters based on different character encoding formats. When there exists a non-printable ASCII value (0 ~ 31 or 127) in the `barcodeBytes` array, the value is decoded into a messy code. Currently, the library doesn't provide methods to remove the non-printable characters nor convert them into printable characters, you have to add your own code to recognize the non-printable characters and replace or remove them. The following code snippet is an example for how to create a method for processing the `barcodeBytes` into a string you want.

**Code Snippet**

<div class="sample-code-prefix template2"></div>
   >- JavaScript
   >- Android
   >- Objective-C
   >- Swift
   >- Python
   >- Java
   >- C#
   >- C++
   >
>
```javascript
const ProcessNonPrintingCharsMode = {
  PNPCM_KEEP: 0,
  PNPCM_REMOVE: 1,
  PNPCM_CONVERT: 2};
class ProcessBarcodeBytesUtil {
  #__non_printing_ascii_chars_value_to_string_dict = new Map([
    [0, '{NUL}'],
    [1, '{SOH}'],
    [2, '{STX}'],
    [3, '{ETX}'],
    [4, '{EOT}'],
    [5, '{ENQ}'],
    [6, '{ACK}'],
    [7, '{BEL}'],
    [8, '{BS}'],
    [9, '{HT}'],
    [10, '{LF}'],
    [11, '{VT}'],
    [12, '{FF}'],
    [13, '{CR}'],
    [14, '{SO}'],
    [15, '{SI}'],
    [16, '{DLE}'],
    [17, '{DC1}'],
    [18, '{DC2}'],
    [19, '{DC3}'],
    [20, '{DC4}'],
    [21, '{NAK}'],
    [22, '{SYN}'],
    [23, '{ETB}'],
    [24, '{CAN}'],
    [25, '{EM}'],
    [26, '{SUB}'],
    [27, '{ESC}'],
    [28, '{FS}'],
    [29, '{GS}'],
    [30, '{RS}'],
    [31, '{US}'],
    [127, '{DEL}']
  ])
  process_barcode_bytes(bytes, mode, keepLineBreak = true) {
    // Process the non-printing chars of barcode bytes to obtain desired text.
    // Parameters
    // ----------
    // bytes : bytearray
    //    The barcode content in a byte array.
    // mode : ProcessNonPrintingCharsMode
    //    The mode indicates how to processing non-printing chars.
    // keepLineBreak : bool
    //    The flag indicates whether to preserve the original line breaks in the resulting text. It is only valid when mode is PNPCM_REMOVE or PNPCM_CONVERT.
    // Returns
    // -------
    // result : str
    //    Returns The text result after processing barcode bytes.
    let result = "";
    for (let _byte in bytes) {
      if (this.#__non_printing_ascii_chars_value_to_string_dict.has(_byte) || mode == ProcessNonPrintingCharsMode.PNPCM_KEEP || keepLineBreak && (_byte == 10 || _byte == 13)) {
        result += String.fromCharCode(_byte);
      } else if (mode == ProcessNonPrintingCharsMode.PNPCM_CONVERT) {
        result += this.#__non_printing_ascii_chars_value_to_string_dict.get(_byte);
      }
    }
    return result;
  }
}
let barcode_bytes = text_result.barcode_bytes;
let util = new ProcessBarcodeBytesUtil();
let origin_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_KEEP);
console.log('original text:\n' + origin_str);
let removed_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE);
console.log('2.text after removing non-printing chars except line break:\n' + removed_str);
let removed_str2 = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, false);
console.log('3.text after removing non-printing chars:\n' + removed_str2);
let converted_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT);
console.log('4.text after converting non-printing chars except line break:\n' + converted_str);
let converted_str2 = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, false);
console.log('5.text after converting non-printing chars:\n' + converted_str2);
```
>
```java
mReader.setTextResultListener(new TextResultListener() {
    // Obtain the recognized barcode results and display.
    @Override
    public void textResultCallback(int id, ImageData imageData, TextResult[] textResults) {
        process = new ProcessBarcodeResultUtil();
        if (textResults!=null && textResults.length!=0){
            for (int i=0; i< textResults.length; i++){
                String processedResult = process.processBarcodeByte(textResults[i].barcodeBytes,ProcessBarcodeResultUtil.ProcessNonPrintingCharsMode.PNPCM_REMOVE,true);
                Log.i("ProcessByte", "textResultCallback: processeResult = "+processedResult);
                textResults[i].barcodeText = processedResult;
            }
        }
    }
}
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
- (void)textResultCallback:(NSInteger)frameId imageData:(iImageData *)imageData results:(NSArray<iTextResult *> *)results{
    if (results) {
        for (NSInteger i = 0; i< [results count]; i++) {
            results[i].barcodeText = [self processResult:results[i].barcodeBytes mode:RPM_CONVERT isBreaklineKept:NO];
            msgText = [msgText stringByAppendingString:[NSString stringWithFormat:@"\nFormat: %@\nText: %@\n", results[i].barcodeFormatString, results[i].barcodeText]];
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
func textResultCallback(_ frameId: Int, imageData: iImageData, results: [iTextResult]?) {
    if (results != nil){
        for item in results! {
            let processedBarcodeText = processBarcodeBytes(byte: item.barcodeBytes!, processMode: EnumResultProcessMode.convert, isKeep: true)
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
>
```python
class ProcessNonPrintingCharsMode:
    PNPCM_KEEP = 0
    PNPCM_REMOVE = 1
    PNPCM_CONVERT = 2
class ProcessBarcodeBytesUtil:
    def __init__(self):
        self.__non_printing_ascii_chars_value_to_string_dict:dict = dict({
            (0,'{NUL}'),(1,'{SOH}'),(2,'{STX}'),(3,'{ETX}'),(4,'{EOT}'),(5,'{ENQ}'),(6,'{ACK}'),(7,'{BEL}'),
            (8,'{BS}'),(9,'{HT}'),(10,'{LF}'),(11,'{VT}'),(12,'{FF}'),(13,'{CR}'),(14,'{SO}'),(15,'{SI}'),
            (16,'{DLE}'),(17,'{DC1}'),(18,'{DC2}'),(19,'{DC3}'),(20,'{DC4}'),(21,'{NAK}'),(22,'{SYN}'),(23,'{ETB}'),
            (24,'{CAN}'),(25,'{EM}'),(26,'{SUB}'),(27,'{ESC}'),(28,'{FS}'),(29,'{GS}'),(30,'{RS}'),(31,'{US}'),(127,'{DEL}')
        })
    def process_barcode_bytes(self, bytes:bytearray, mode:ProcessNonPrintingCharsMode, keepLineBreak:bool = True)->str:
        """
        Process the non-printing chars of barcode bytes to obtain desired text.
        Parameters
        ----------
        bytes : bytearray
            The barcode content in a byte array.
        mode : ProcessNonPrintingCharsMode
            The mode indicates how to processing non-printing chars.
        keepLineBreak : bool
            The flag indicates whether to preserve the original line breaks in the resulting text. It is only valid when mode is PNPCM_REMOVE or PNPCM_CONVERT.
        Returns
        -------
        result : str
            Returns The text result after processing barcode bytes.
        """
        result:str = ''
        for _byte in bytes:
            if not self.__non_printing_ascii_chars_value_to_string_dict.__contains__(_byte) \
                or mode == ProcessNonPrintingCharsMode.PNPCM_KEEP \
                or keepLineBreak and (_byte == 10 or _byte == 13):
                result += chr(_byte)
            elif mode == ProcessNonPrintingCharsMode.PNPCM_CONVERT:
                result += self.__non_printing_ascii_chars_value_to_string_dict.get(_byte)
        return result
if __name__ == '__main__':
    barcode_bytes = text_result.barcode_bytes
    util = ProcessBarcodeBytesUtil()
    origin_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_KEEP)
    print('original text:\n' + origin_str)
    removed_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE)
    print('\n2.text after removing non-printing chars except line break:\n' + removed_str)
    removed_str2 = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, False)
    print('\n3.text after removing non-printing chars:\n' + removed_str2)
    converted_str = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT)
    print('\n4.text after converting non-printing chars except line break:\n' + converted_str)
    converted_str2 = util.process_barcode_bytes(barcode_bytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, False)
    print('\n5.text after converting non-printing chars:\n' + converted_str2)
```
>
```java
public class ProcessBarcodeBytesUtil {
    enum ProcessNonPrintingCharsMode
    {
        PNPCM_KEEP,
        PNPCM_REMOVE,
        PNPCM_CONVERT
    }
    final HashMap<Integer, String> charValueToStringDict = new HashMap<Integer, String>();       
    ProcessBarcodeBytesUtil() {
        final int[] NonPrintingAsciiCharsValue = {0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127};
        final String[] NonPrintingAsciiCharsString = {"{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}","{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
    };          
    for (int i = 0; i < 33; ++i)
        charValueToStringDict.put(NonPrintingAsciiCharsValue[i], NonPrintingAsciiCharsString[i]);
    }
    /**
     * Process the non-printing chars of barcode bytes to obtain desired text.
     * 
     * @param bytes The barcode content in a byte array.
     * @param mode The mode indicates how to processing non-printing chars.
     * @param keepLineBreak The flag indicates whether to preserve the original line breaks in the resulting text. It is only valid when mode is PNPCM_REMOVE or PNPCM_CONVERT.
     * @return Returns The text result after processing barcode bytes.
     * 
     */
    public String processBarcodeBytes(byte[] bytes, ProcessNonPrintingCharsMode mode, boolean keepLineBreak) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < bytes.length; ++i)
        {
            int byteValue = (int)bytes[i];
            if (!charValueToStringDict.containsKey(byteValue)
                || mode == ProcessNonPrintingCharsMode.PNPCM_KEEP
                || keepLineBreak && (byteValue == 10 || byteValue == 13)) {
                result.append((char)bytes[i]);
            }
            else if (mode == ProcessNonPrintingCharsMode.PNPCM_CONVERT) {
                result.append(charValueToStringDict.get(byteValue));
            }
        }
        return result.toString();
    }
    public static void main(String[] args) throws InterruptedException {
        byte[] barcodeBytes = textResult.barcodeBytes;
        ProcessBarcodeBytesUtil util = new ProcessBarcodeBytesUtil();
        String s0 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_KEEP, true);
        String s1 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, true);
        String s2 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, false);
        String s3 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, true);
        String s4 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, false);
        System.out.println("1.original text:\n" + s0);
        System.out.println("\n2.text after removing non-printing chars except line break:\n" + s1);
        System.out.println("\n3.text after removing non-printing chars:\n" + s2);
        System.out.println("\n4.text after converting non-printing chars except line break:\n" + s3);
        System.out.println("\n5.text after converting non-printing chars:\n" + s4);
    }
}
```
>
```csharp
class ProcessBarcodeBytesUtil
{
    internal enum ProcessNonPrintingCharsMode
    {
        PNPCM_KEEP,
        PNPCM_REMOVE,
        PNPCM_CONVERT
    }
    Hashtable charValueToStringDict = new Hashtable();
    ProcessBarcodeBytesUtil()
    {
        int[] NonPrintingAsciiCharsValue = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127 };
        string[] NonPrintingAsciiCharsString = {
            "{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}",
            "{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
        };
        for (int i = 0; i < 33; ++i)
            charValueToStringDict.Add(NonPrintingAsciiCharsValue[i], NonPrintingAsciiCharsString[i]);
    }
    /// <summary>
    /// Process the non-printing chars of barcode bytes to obtain desired text.
    /// </summary>
    /// <param name="bytes">The barcode content in a byte array.</param>
    /// <param name="mode">The mode indicates how to processing non-printing chars.</param>
    /// <param name="keepLineBreak">The flag indicates whether to preserve the original line breaks in the resulting text. It is only valid when mode is PNPCM_REMOVE or PNPCM_CONVERT.</param>
    /// <returns>Returns The text result after processing barcode bytes.</returns>        
    public string ProcessBarcodeBytes(byte[] bytes, ProcessNonPrintingCharsMode mode, bool keepLineBreak = true)
    {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < bytes.Length; ++i)
        {
            int byteValue = (int)bytes[i];
            if (!charValueToStringDict.ContainsKey(byteValue)
                || mode == ProcessNonPrintingCharsMode.PNPCM_KEEP
                || keepLineBreak && (byteValue == 10 || byteValue == 13))
            {
                result.Append((char)bytes[i]);
            }
            else if (mode == ProcessNonPrintingCharsMode.PNPCM_CONVERT)
            {
                result.Append(charValueToStringDict[byteValue]);
            }
        }
        return result.ToString();
    }
    public static void Main(string[] args)
    {
        byte[] barcodeBytes = textResult.barcodeBytes;
        ProcessBarcodeBytesUtil util = new ProcessBarcodeBytesUtil();
        String s0 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_KEEP);
        String s1 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE);
        String s2 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, false);
        String s3 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT);
        String s4 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, false);
        Console.WriteLine("1.original text:\n" + s0);
        Console.WriteLine("\n2.text after removing non-printing chars except line break:\n" + s1);
        Console.WriteLine("\n3.text after removing non-printing chars:\n" + s2);
        Console.WriteLine("\n4.text after converting non-printing chars except line break:\n" + s3);
        Console.WriteLine("\n5.text after converting non-printing chars:\n" + s4);
    }
}
```
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
    // obtain bytes from TextResult.
    unsigned char barcodeBytes = textResult->barcodeBytes;
    int bytesLength = textResult->bytesLength;
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
