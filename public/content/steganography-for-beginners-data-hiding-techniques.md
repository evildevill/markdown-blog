---
title: "Steganography for Beginners - Data Hiding Techniques 🔏"
description: "The basename command in Linux is used to extract the last element of a file path. This is particularly helpful in bash scripts where you only need the..."
slug: "steganography-for-beginners-data-hiding-techniques"
date: "2019-02-07"
author: "Waseem Akram"
image: "/images/posts/steganography/thumb.webp"
---

Steganography is the technique of hiding secret data within an ordinary, non-secret, file or message in order to avoid detection; the secret data is then extracted at its destination... The word steganography is derived from the Greek words steganos (meaning hidden or covered) and the Greek root graph (meaning to write) - Wikipedia.

In this post, we are going to describe solutions to the KRACK-JIIT CTF 2019 Organized by **JIIT Open Dev Circle (jodc)**. This was a very interesting and beginner friendly capture-the-flag event.

## capture_Vietnam — Packets

Challenge Description: We sniffed some packets on the traffic. Who knows what you'll find.

Type: flag

Category: Easy

Point: 50

Solution: Provided with the captured packets, we can check for the flag in pcap dumps. Opening the packet dump in Wireshark, we found 31 packets captured and we don't mind to go packet by packet to get flag within 31 packets only.

![](/images/posts/steganography/1.webp)

After 4–5 packets the count, we see a username logging in with username as Jerry and password as saymynameheisenberg

Thus! the password is our flag

```
Flag: KJ_CTF{saymynameheisenberg}
```

## capture_Romania — Amnesic

Challenge Description: Information privacy, or data privacy, is the relationship between the collection and dissemination of data, technology, the public expectation of privacy, and the legal and political issues surrounding them.

Type: flag

Category: Easy

Point: 50

Solution: Given was an amnesic.txt which we were unable to open with a text editor taking us to first challenge that it was not a text file.

![](/images/posts/steganography/2.webp)

with "file amnesic.txt" we came to know that it was an Image file. Renaming it with amnesic.jpeg gives us an image.

![](/images/posts/steganography/3.webp)

Binwalk the image to get tor/secret.txt embedded inside the image. with binwalk -e amnesic.jpeg to extract known filetype embedded in the image, we got a secret.txt with the file.

```
FLAG: KJ_FLAG{3984G43GF43873897875GF4UI5ERIUVB7GVIGBIVBIUEB7GEV487}
```

## capture_Poland — Hexadecimal

Challenge Description: This will be really fun for you as well You have hex encoded string XOR'd against a single character. Find the key, decrypt the message.

NOTE Flag looks like KJ_CTF{ here-is-your-key }

Type: flag

Category: Easy

Point: 50

Ciphertext:

```
2e2f3a2631231e1c2a10450d241320452445022a0a2145210c06112c0a0b24171c18
```

Solution: Consider this as an example:

The ciphertext was hex encoded string to be decrypted

With the Description, we came to know that it is a Single byte XOR which was encrypted using a key

plaintext

```
53454352455420444154412057452057414e5420544f20454e4352595054
```

xor

```
4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4b
```

ciphertext

```
180e08190e1f6b0f0a1f0a6b1c0e6b1c0a051f6b1f046b0e050819121b1f
```

Hence get K thus receiving the key and the same key is used to decrypt rest of string.

exploit.py

```
import binascii
print(&#x201C;ENTER THE STRING&#x201D;)
input_string = raw_input()
str1 = binascii.unhexlify(input_string)
for i in range(0,255):
str2=""
for j in range(len(str1)):
str2 += chr(ord( str1[j] ) ^ i)
if "KJ_CTF{" in str2:
print(str2)
```

![](/images/posts/steganography/4.webp)

```
Flag: KJ_CTF{yOu hAvE A gOoD DictIonAry}
```

## capture_Mali — Bang Bang!

Challenge Description: NOTE Flag looks like KJ_CTF{ here-is-your-key }

Type: flag

Category: Easy

Point: 50

Solution: The URL in the description of challenge took us to a website which was a login portal for routers.

Cracking password always taught us to try default credentials for the fields.

![](/images/posts/steganography/5.webp)

```
user: admin
password: admin
```

![](/images/posts/steganography/6.webp)

we got the flag

```
Flag: KJ_CTF{gG_wP_so_thiCcK}
```

## capture_Greece — Decipher

Challenge Description: NOTE Flag looks like KJ_CTF{ here-is-your-key }

Type: flag

Category: Easy

Point: 50

Solution: The ciphertext in enc.txt was only provided with jumbled text, neither of the keys was available to us nor the algorithm was known.

Which makes us conclude it maybe Base64 encoding, Caeser cipher or Rot13 encoding.

The cipher text was not having alphanumeric characters and the = padding at end of the string was also missing which makes base64 out of guess.

Caesar cipher was tested with all possible 26 keys but none of the outcomes were meaningless, not fruitful.

Coming to Rot13, when we decode the ciphertext, we get another set of meaningless ciphertext but when you search for KJ_CTF, you can find the flag in the decoded text.

![](/images/posts/steganography/7.webp)

```
Flag &#x2014; KJ_CTF{crypto_first_flag}
```

## capture_Croatia — Last Challenge

Challenge Description:

```
Cipher1: TGFzdCBjaGFsbGVuZ2Ugb2YgS1JBQ0stSklJVC0xLjAg
Plain1: Last challenge of KRACK-JIIT-1.0
Cipher2: VEhBTksgWU9VIEZPUiBQTEFZSU5H
Plain2: THANK YOU FOR PLAYING
Cipher3: S0otQ1RGe0tJTkRMWU1BSUxZT1VSRkVFREJBQ0tUT0FOS0s5OEBHTUFJTC5DT019
```

Plain: flag

Note: It is the easiest challenge.

Type: flag

Category: Easy

Point: 50

Solution: Mentioned that it was the easiest challenge for KJ CTF, we decoded the base64 to plain text.

*PS: all the base64 encoding doesn't have = padding at the end.

![](/images/posts/steganography/8.webp)

```
Flag: KJ-CTF{KINDLYMAILYOURFEEDBACKTOANKK98@GMAIL.COM}
```

## capture_Chile — Decode it

Challenge Description: The author who made this Question Hates JS.

NOTE Flag looks like KJ_CTF{ here-is-your-key }

Type: flag

Category: Easy

Point: 50

Solution: Given is the ciphertext which is base64 encoded(padding with = at the end)

Decoding that gives us another program which was a jsfuck program as the author hates JS.

jsfuck_code.png

PS: Figured out JS Fuck by google search "[][(![]+[]) JS"

You can further run the code in JS console or on jsfuck.com to get an alert for the flag.

![](/images/posts/steganography/9.webp)

```
Flag: KJ_JIIT{well_js_really_sucks}
```

## capture_Azerbaijan — In the front of you.

Challenge Description: Find the flag out of the image herewith

Type: flag

Category: Medium

Point: 100

![](/images/posts/steganography/10.webp)

BBB.jpg Solution: Viewing the image gave no hits all red.

Converting a string of image resulted in nothing.

Binwalking image gave no flag either.

Finally checking the metadata of the image, we got the flag.

Metadata of image can be checked with exiftool in Linux or there are various online web applications to check the metadata of files.

Here the website I used to get metadata. [http://metapicz.com/#landing](http://metapicz.com/#landing)

![](/images/posts/steganography/11.webp)

```
Flag &#x2014; KJ_CTF{h3R3_1_4M}
```

## capture_Egypt — Read it again

Type: flag

Category: Easy

Point: 50

Solution: After opening the flag.pdf file, we noticed "Can you krack it?" was written in text.

![](/images/posts/steganography/12.webp)

After converting that flag.pdf into text format we noticed this:

![](/images/posts/steganography/13.webp)

which gave us a hint that some type of file is embedded inside this pdf.

![](/images/posts/steganography/14.webp)

we tried a very popular steghide tool but no success.

After a few minutes, a tool name qpdf got into my mind. This tool is mostly used by CTF players for pdf-related challenges.

```
qpdf &#x2014; qdf &#x2014; object-streams=disable flag.pdf out.pdf
binwalk -Me out.pdf
```

![](/images/posts/steganography/15.webp)

```
Flag: KJ_CTF{THISISKRACKJIIT}
```

## capture_Turkmenistan — I am not what i look like

Type: flag

Category: Medium

Point: 100

Solution: After opening this challenge link we got a .gif format file.

![](/images/posts/steganography/16.webp)

iamnotwhatilooklike.gif This image was looking like a QR code but colorful.

This challenge took us less than 1 minute to crack.

I don't know why this challenge was in Medium Category. It was super easy.

Just open images.google.com and upload that image.

![](/images/posts/steganography/17.webp)

And after uploading that image we got the flag. SERIOUSLY WTF!!!!!!!!

![](/images/posts/steganography/18.webp)

It was written "Hello, world!" in Piet programming language

```
Flag: KJ_CTF{Hello, world!}
```

## capture_Bolivia — Gotta Catch 'Em All!

Type: flag

Category: Medium

Point: 100

Solution: After opening the link we noticed that a sound was playing

![](/images/posts/steganography/19.webp)

checked source code of the page and got this sound file

I have solved a lot of these type of challenges before.

That sound was "morse code".

I remember when I was a kid, I visit the police station where my dad works and they showed me the machine which exactly creates a sound like that for communication between departments.

So searched on google: "Morse sound to text converter" and uploaded that file on [https://morsecode.scphillips.com/labs/audio-decoder-adaptive/](https://morsecode.scphillips.com/labs/audio-decoder-adaptive/)

![](/images/posts/steganography/20.webp)

```
Result: PIKAPIKACHUU
```

Got the result from that sound file, But that was not a flag and value adminwas not editable. So tried to intercepting the request with Burp Suite.

![](/images/posts/steganography/21.webp)

Entered the output of morse code in pass= parameter and forward the request.

![](/images/posts/steganography/22.webp)

Achieved flag on the next page.

```
Flag: KJ_CTF{truST_iS_daNgeRs_G@me}
```

## capture_Portugal — "Can you krack it?"

Challenge Description: In this challenge, a zip file was given with named "Krack-it.zip" which was locked with a password.

Challenge URL: [https://drive.google.com/file/d/18znNYcX5-4KYdewTR3IC6_5KnctkOYr_/view?usp=sharing](https://drive.google.com/file/d/18znNYcX5-4KYdewTR3IC6_5KnctkOYr_/view?usp=sharing)

Type: flag

Category: Easy

Points: 50

Solution: So seeing that the challenge is categorized as easy there is nothing much to think after reading the name of the challenge and the name of the zip file, it was sure that we have to crack the zip file to reveal the flag, now the thing was how to do it?? For this, we used a tool called "fcrackzip" and used rockyou.txt as our wordlist as its most common wordlist being used in CTFs,

SYNTAX:

```
fcrackzip -u -D -p &#x2018;rockyou.txt&#x2019; &#x2018;krack-it.zip&#x2019;
```

After which we got our flag!!!!

```
Flag: KJ_CTF{OWEI843TYINFO8HVNWR8Y43FIN3W48FINV3W89Y4FV43INV384V34WH983NO}
```

## capture_Madagascar — "YouTube"

Challenge Description: In this challenge, we were provided a link and nothing more than that.

Type: flag

Category: Easy

Points: 50

Solution: The first thing done was visiting the link provided to us, it was a basic webpage with a link given Watch Me! of a youtube video.

![](/images/posts/steganography/23.webp)

But since we were playing the CTF I thought why not see the source code of the website before enjoying some youtube videos? And voila!!! we got our flag!!!

![](/images/posts/steganography/24.webp)

After that, I opened the video and guess what?? the link was of the trailer of the movie "Source Code".

```
Flag: KJ_CTF{n00bs_lOvees_b00}
```

## capture_Honduras: "Recognize Me!"

Challenge Description: This challenge was categorized under Cryptography, the description provided was nothing but what is the meaning of cryptography? Other than that an image was provided (can we call it a cipher?).

![](/images/posts/steganography/25.webp)

Link of the image: [https://drive.google.com/file/d/1AvVJLzJUx1BAuoN1vEAyjcsLEKntpHS4/view?usp=sharing](https://drive.google.com/file/d/1AvVJLzJUx1BAuoN1vEAyjcsLEKntpHS4/view?usp=sharing)

Type: flag

Category: Easy

Points: 50

Solution: The solution was easy as f@#k but the thing is, it was a tricky one (kind of!), after wasting my time trying to decode it, understanding the cipher, trying all sort of steganography on the image, analyzing the image for some compressed data nothing worked!? the reason was that the text displayed in the image was not the cipher!! But it was the flag (-_-) (answer to my question was, hell no!!! it can't be called a ciphertext).

```
Flag:KJ_CTF{aima0AiwahsidupaiToehoong1PhieruqueivahphieKah7uceetair9aiGae1eSsaedoo4becooShohhu8eifahXi7EJoh2gaephechei5chiP9}
```

Thanks for reading this post, if you like my work you can support by [buying me a coffee](https://www.buymeacoffee.com/hackerwasii). ☕️
Read other posts

***Happy Hacking!!!***