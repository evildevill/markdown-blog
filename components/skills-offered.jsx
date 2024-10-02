export function SkillsOffered() {
    const skills = [
      {
        title: "Web Development",
        description:
          "Expertise in building modern, responsive, and scalable web applications using the latest technologies.",
        icon: "CodeIcon",
      },
      {
        title: "Cloud Infrastructure",
        description: "Leveraging cloud-based services to build highly available, scalable, and secure applications.",
        icon: "CloudUploadIcon",
      },
      {
        title: "Cybersecurity Professional",
        description:
          "Expert in securing systems, networks, and data against cyber threats. Proficient in risk assessment, threat analysis, and implementing security measures.",
        icon: "ShieldCheckIcon",
      },
      {
        title: "Full Stack Developer",
        description:
          "Skilled in both front-end and back-end development. Proficient in technologies such as React, Node.js, and databases like MongoDB and PostgreSQL.",
        icon: "CodeBracketSquareIcon",
      },
      {
        title: "Network Engineer",
        description:
          "Experienced in designing, implementing, and managing network infrastructure. Proficient in routing, switching, and troubleshooting network issues.",
        icon: "ServerIcon",
      },
      {
        title: "Data Analytics",
        description:
          "Expertise in collecting, analyzing, and interpreting complex data to uncover valuable insights and drive informed decision-making.",
        icon: "ChartBarIcon",
      },
    ]
    return (
      (<section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills &amp; Services Offered</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Our team of experts provides a wide range of services to help you achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                    <Volume1Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>)
    );
  }
  
  function BarChartIcon(props) {
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
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>)
    );
  }
  
  
  function CloudUploadIcon(props) {
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
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>)
    );
  }
  
  
  function CodeIcon(props) {
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>)
    );
  }
  
  
  function ServerIcon(props) {
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
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>)
    );
  }
  
  
  function ShieldCheckIcon(props) {
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
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>)
    );
  }
  
  
  function SquareCodeIcon(props) {
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
        <path d="M10 9.5 8 12l2 2.5" />
        <path d="m14 9.5 2 2.5-2 2.5" />
        <rect width="18" height="18" x="3" y="3" rx="2" />
      </svg>)
    );
  }
  
  
  function Volume1Icon(props) {
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
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>)
    );
  }
  