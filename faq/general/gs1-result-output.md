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
import java.util.HashMap;

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
		final String[] NonPrintingAsciiCharsString = {
				"{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}",
				"{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
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
		
		String s0 = util.processBarcodeBytes(testBytes, ProcessNonPrintingCharsMode.PNPCM_KEEP, true);
		String s1 = util.processBarcodeBytes(testBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, true);
		String s2 = util.processBarcodeBytes(testBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, false);
		String s3 = util.processBarcodeBytes(testBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, true);
		String s4 = util.processBarcodeBytes(testBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, false);
		
		System.out.println("0:\n" + s0);
		System.out.println("\n1:\n" + s1);
		System.out.println("\n2:\n" + s2);
		System.out.println("\n3:\n" + s3);
		System.out.println("\n4:\n" + s4);

        byte[] barcodeBytes = textResult.barcodeBytes;

        ProcessBarcodeBytesUtil util = new ProcessBarcodeBytesUtil();

        String s0 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_KEEP, true);
        String s1 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, true);
        String s2 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_REMOVE, false);
        String s3 = util.ProcessBarcodeBytes(barcodeBytes, ProcessNonPrintingCharsMode.PNPCM_CONVERT, true);
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
			0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa,0xb,0xc,0xd,0xe,0xf,
			0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19,0x1a,0x1b,0x1c,0x1d,0x1e,0x1f,0x7f
		};

		const char* NonPrintingAsciiCharsString[33] = {
			"{NUL}","{SOH}","{STX}","{ETX}","{EOT}","{ENQ}","{ACK}","{BEL}","{BS}","{HT}","{LF}","{VT}","{FF}","{CR}","{SO}","{SI}",
			"{DLE}","{DC1}","{DC2}","{DC3}","{DC4}","{NAK}","{SYN}","{ETB}","{CAN}","{EM}","{SUB}","{ESC}","{FS}","{GS}","{RS}","{US}","{DEL}"
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
>
```c
```
