import React, { forwardRef } from 'react';

// Define a reusable Icon component with display name
const Icon = forwardRef(function Icon({ type, className, ...props }, ref) {
  const icons = {
    Code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    Cloud: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
    ),
    Shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    FullStack: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <path d="M3 3h18v18H3z" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
    Network: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <path d="M4 12l4-4 4 4-4 4-4-4z" />
        <path d="M12 12l4-4 4 4-4 4-4-4z" />
      </svg>
    ),
    DataAnalytics: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        {...props}
        className={className}
      >
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    // Additional icons can be added here...
  };

  return icons[type] || null;
});

Icon.displayName = 'Icon'; // Setting display name for ESLint

export function SkillsOffered() {
  const skills = [
    {
      title: "Web Development",
      description: "Expertise in building modern, responsive, and scalable web applications using the latest technologies.",
      icon: "Code",
    },
    {
      title: "Cloud Infrastructure",
      description: "Leveraging cloud-based services to build highly available, scalable, and secure applications.",
      icon: "Cloud",
    },
    {
      title: "Cybersecurity Professional",
      description: "Expert in securing systems, networks, and data against cyber threats. Proficient in risk assessment, threat analysis, and implementing security measures.",
      icon: "Shield",
    },
    {
      title: "Full Stack Developer",
      description: "Skilled in both front-end and back-end development. Proficient in technologies such as React, Node.js, and databases like MongoDB and PostgreSQL.",
      icon: "FullStack",
    },
    {
      title: "Network Engineer",
      description: "Experienced in designing, implementing, and managing network infrastructure. Proficient in routing, switching, and troubleshooting network issues.",
      icon: "Network",
    },
    {
      title: "Data Analytics",
      description: "Expertise in collecting, analyzing, and interpreting complex data to uncover valuable insights and drive informed decision-making.",
      icon: "DataAnalytics",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Services Offered</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Our team of experts provides a wide range of services to help you achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                  <Icon type={skill.icon} className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
