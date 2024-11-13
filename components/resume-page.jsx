export function ResumePage() {
  return (
    <div className="bg-background text-foreground font-inter px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Muhammad Waseem Akram</h1>
          <div className="flex items-center space-x-4">
            <div className="text-muted-foreground">
              <MailIcon className="w-5 h-5 inline-block mr-1" />
              hello@hackerwasii.com
            </div>
            <div className="hidden sm:flex text-muted-foreground">
              <PhoneIcon className="w-5 h-5 inline-block mr-1" />
              +92 313 7119351
            </div>
            <div className="hidden sm:flex items-center text-muted-foreground">
              <GlobeIcon className="w-5 h-5 inline-block mr-1" />
              <a href="https://hackerwasii.com">hackerwasii.com</a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <ul className="list-disc pl-6 space-y-2" >
            <li>Information security enthusiast with industry level certifications and a strong interest in penetration testing and offensive security.</li>
            <li>Strong background in security tools, emerging technologies, processes and best practices.</li>
            <li>Reported Security Vulnerabilities in Microsoft, Facebook, Apple, Dell etc.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Networking:</strong> Storage Networks, Network Security, Server Networks, IP Protocols, LAN/WAN Switching, Troubleshooting.</li>
            <li><strong>Security Assessment:</strong> SAST, DAST, VAPT, Open-Source Analysis, OWASP top 10, Mitre ATT&CK Framework, SANS top 25.</li>
            <li><strong>Operating Systems:</strong> Ubuntu, CentOS, Kali Linux, MacOS, Windows Servers.</li>
            <li><strong>Cloud/DevOps technologies:</strong> Docker, CI/CD, Azure, Web Server, AWS Cloud, Python, Bash.</li>
            <li><strong>Security & Testing tools:</strong> Snyk, BloodHound, Veracode, Burp Suite, Tenable.io, Nmap, gobuster, ExtraHop, Metasploit, OWASP ZAP, Netsparker, Postman, Wireshark etc.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Certifications & Trainings</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.coursera.org/account/accomplishments/specialization/Y4NWDLSW8LU7">Google IT Automation with Python Specialization - Google</a> - June 2024</li>
            <li><a href="https://www.coursera.org/account/accomplishments/specialization/URUZDGXYMS8J">Object Oriented Programming - University of London</a> - April 2024</li>
            <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/43K9826B3XF4">IBM Full Stack Software Developer - IBM</a> - March 2024</li>
            <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/BTNLPN7LJNUP">Google IT Support Specialization - Google</a> - Issued October 2023</li>
            <li><a href="https://www.coursera.org/account/accomplishments/professional-cert/54RRYGTN4RUK">Google Cybersecurity Specialization</a> - Issued May 2023</li>
            <li><a href="https://www.credly.com/badges/ab171c07-a55f-43b9-8293-bea4e45a6cdf">Foundations of Operationalizing MITRE ATT&CK - AttackIQ</a> - Issued April 2023</li>
            <li><a href="/resume">OSCP - offensive Security Certified Professional - Issued April 2022</a></li>
            <li><a href="/resume">eCPPT - eLearn Security Certified Professional Penetration Tester - Issued June 2022</a></li>
            <li><a href="/resume">ThrowBack Network - AD Pentesting Network - TryHackMe</a> - May 2022</li>
            <li><a href="/resume">eJPT - eLearn Security Junior Penetration Tester - INE</a> - Jan 2022</li>
            <li><a href="/resume">Introduction to Azure Penetration Testing - Altered Security</a> - Jan 2022</li>
            <li><a href="/resume">[SC-900] Microsoft Certified: Security, Compliance, and Identity Fundamentals</a> - Nov 2021</li>
            <li><a href="/resume">Security Engineering on AWS - Amazon Web Services</a> - Oct 2021</li>
            <li><a href="/resume">Cyber Security Essentials - Cisco</a> - Jun 2021</li>
            <li><a href="/resume">MacOS for IT Administrators - LinkedIn Learning</a> - May 2020</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Network/Systems Administrator - CoventBridge Group, Remote</h3>
              <p className="text-muted-foreground">July 2022 - July 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Application Security Analyst - Gore Mutual Insurance, Remote</h3>
              <p className="text-muted-foreground">Aug 2021 - May 2022</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Conducting source code reviews using Veracode and Snyk, triaging and reporting vulnerabilities, guiding developers with vulnerability remediation.</li>
                <li>Performing automated and manual vulnerability assessments and penetration tests on web applications, networks and infrastructure.</li>
                <li>Conducting focused research on newly identified threats and vulnerabilities.</li>
                <li>Providing recommendations on system patching, hardening of web application and servers to mitigate potential risks.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Application Security Tester - Saluber MD LLC., Remote</h3>
              <p className="text-muted-foreground">Aug 2020 - July 2021</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Experience with managing an enterprise level SIEM platform.</li>
                <li>Strong understanding of variety of IT systems, applications and configurations.</li>
                <li>Prioritizing and classifying bugs according to severity.</li>
                <li>Familiarity with basic reverse engineering principles.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Virtual University of Pakistan</h3>
              <p className="text-muted-foreground">Bachelor of Business & Information Technology (BBIT) - 2023</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Aspire Group of Colleges (Okara Campus)</h3>
              <p className="text-muted-foreground">Intermediate of Computer Science - 2020 - 2022</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Reported bug in Pakistan Government Website</h2>
              <p className="text-muted-foreground">Bugcrowd - Hall of Fame - Reported bugs in Companies like Microsoft, Facebook, Apple etc.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Instahack (Security Research on Brute Force Attacks)</h3>
              <p className="text-muted-foreground text-sm">Python, Bash | GPL-3.0 License</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Designed and researched a script to simulate brute force attacks to understand how login systems handle security challenges.</li>
                <li>Focused on developing preventive measures, such as rate limiting, CAPTCHA, and account lockout features to defend against brute force attempts.</li>
                <li>Ensured the project was conducted in a controlled, ethical environment.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function GlobeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
