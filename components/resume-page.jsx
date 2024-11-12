export function ResumePage() {
  return (
    (<div
      className="bg-background text-foreground font-inter px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Muhammad Waseem Akram</h1>
          <div className="flex items-center space-x-4">
            <div className="text-muted-foreground">
              <MailIcon className="w-5 h-5 inline-block mr-1" />
              hello@hackerwasii.com
            </div>
            <div className="text-muted-foreground">
              <PhoneIcon className="w-5 h-5 inline-block mr-1" />
              +92 313 7119351
            </div>
            <div className="text-muted-foreground">
              <GlobeIcon className="w-5 h-5 inline-block mr-1" />
              hackerwasii.com
            </div>
          </div>
        </header>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Software Engineer</h3>
              <p className="text-muted-foreground">Acme Inc. | 2018 - Present</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Developed and maintained web applications using React, Next.js, and Tailwind CSS</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                <li>Participated in code reviews and pair programming sessions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Web Developer Intern</h3>
              <p className="text-muted-foreground">Widgets Inc. | 2016 - 2018</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Developed and maintained responsive web pages using HTML, CSS, and JavaScript</li>
                <li>Assisted in implementing new features and bug fixes</li>
                <li>Participated in daily stand-up meetings and sprint planning</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University of Example | 2014 - 2018</p>
              <p className="mt-2">GPA: 3.8</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">React</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">Next.js</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">Tailwind CSS</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">JavaScript</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">TypeScript</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">Git</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">SQL</div>
            <div className="bg-muted px-3 py-1 rounded-md text-muted-foreground">Agile</div>
          </div>
        </section>
      </div>
    </div>)
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
