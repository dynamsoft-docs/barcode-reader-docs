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

You always get 2 values that stands for the barcode decoding result from the `textResult` object:

- `barcodeBytes`
- `barcodeText`

Since `barcodeText` is a string value that generated from the `barcodeBytes`, is might be decoded into different characters based on different character encoding formats. When there exists a non-printable ASCII value (0 ~ 31 or 127) in the `barcodeBytes` array, the value is decoded into a messy code. Currently, the library doesn't provide methods to remove the non-printable characters nor convert them into printable characters, you have to add your own code to recognize the non-printable characters and replace or remove them. The following code snippet is an example for how to create a method for processing the `barcodeBytes` into a string you want.

**Code Snippet**

<div class="sample-code-prefix template2"></div>
   >- C++
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
    // obtain bytes from CDecodedBarcodeElement or CBarcodeResultItem.
    unsigned char* barcodeBytes = textResult->GetBytes();
    int bytesLength = textResult->GetBytesLength();
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
