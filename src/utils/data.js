import easyshare from "../assets/easyshare.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const data = {
  hero: {
    name: "Ashutosh Muley",
    title: "Senior Engineer",
    company: "Sage",
    location: "Pune, India",
    yearsExperience: "4+",
    roles: [
      "Senior Engineer",
      "Backend Developer",
      "Software Engineer",
      "Problem Solver",
    ],
  },
  about: [
    "I'm a software developer with a strong background in backend engineering and cloud technologies, currently working as a Senior Engineer at Sage (Formerly Fyle). I have a proven track record of optimizing system performance, solving complex issues, and delivering high-impact solutions.",
    "Skilled in Python, SQL, and modern frameworks like React and Flask, I thrive in fast-paced environments and am passionate about building robust and scalable products.",
  ],
  resume:
    "https://docs.google.com/document/d/1JdRTRu4G_GzR7kmx_nOznzewybcRnTZo/edit?usp=sharing&ouid=110232544566602709812&rtpof=true&sd=true",
  email: "muleyashutosh@gmail.com",
  socials: {
    twitter: "https://twitter.com/muley_ashu",
    codepen: "https://codepen.io/muleyashutosh",
    linkedin: "https://www.linkedin.com/in/muleyashutosh/",
    github: "https://github.com/muleyashutosh",
  },
  experience: [
    {
      company: "Sage",
      logo: "S",
      totalDuration: "6 months",
      roles: [
        {
          title: "Senior Engineer",
          duration: "January 2026 - Present",
          location: "Pune, Maharashtra, India",
          highlights: [],
        },
        {
          title: "Engineer",
          duration: "August 2025 - January 2026",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Part of a dynamic team focused on developing and enhancing innovative solutions for financial automation",
            "Designing scalable backend systems and collaborating across teams to deliver robust features",
          ],
        },
      ],
    },
    {
      company: "Fyle",
      logo: "F",
      totalDuration: "3 years 11 months",
      roles: [
        {
          title: "Member of Technical Staff III",
          duration: "July 2024 - August 2025",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Joined the Embedded Engineering team to support and develop white-labeled versions of Fyle for external partners",
            "Contributed to the successful MVP launch of expense management for one of the top banks in the US",
            "Served as a member of the on-call team, providing rapid response for production issues",
          ],
        },
        {
          title: "Member of Technical Staff II",
          duration: "July 2023 - June 2024",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Led the 'Fix Broken Window Backend' initiative, reducing weekly 5xx errors by 82% and failed events by 53%",
            "Fixed multiple Dwolla service issues, saving 100+ hours of manual work",
            "Took complete ownership of the ACH area as single point of contact",
            "Proactively added and improved Grafana alerts for enhanced monitoring",
          ],
        },
        {
          title: "Member of Technical Staff I",
          duration: "April 2022 - June 2023",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Developed and launched MCC v1 for automated card transaction categorization",
            "Implemented core business logic for transactions across Visa, MasterCard, Amex, Diners Club",
            "Led major category cleanup through extensive impact analysis and SQL operations",
            "Rolled out Merchant-Based Expense Rules from beta to GA",
          ],
        },
        {
          title: "Engineering Intern",
          duration: "October 2021 - April 2022",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Increased test coverage from 68% to 98.5%, boosting code reliability",
            "Implemented GitHub Actions to track code coverage on every master merge",
            "Ensured comprehensive OpenAPI documentation for all APIs",
          ],
        },
      ],
    },
    {
      company: "Possibillion Technologies",
      logo: "P",
      totalDuration: "3 months",
      roles: [
        {
          title: "Software Engineer Intern",
          duration: "May 2021 - July 2021",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Developed the Backend of an OTT platform App using Node.js, Express, and MongoDB from scratch",
            "Used Amazon Cognito, Google Firebase, JWTs for REST API Authentication",
            "Implemented Digital Ocean S3 Spaces for Media and Object Storage",
          ],
        },
      ],
    },
    {
      company: "English Summary",
      logo: "E",
      totalDuration: "7 months",
      roles: [
        {
          title: "Web Developer",
          duration: "November 2020 - May 2021",
          location: "Pune, Maharashtra, India",
          highlights: [
            "Created keyword research and English language tools using PHP, HTML, CSS, JS",
            "Built tools including Citation Generator, Article Rewriter, Plagiarism Checker, and more",
          ],
        },
      ],
    },
  ],
  skills: {
    languages: {
      title: "Languages",
      items: ["Python", "JavaScript", "SQL", "C++"],
    },
    backend: {
      title: "Backend",
      items: ["Flask", "Node.js", "Express", "REST APIs", "Microservices"],
    },
    frontend: {
      title: "Frontend",
      items: ["React", "HTML5", "CSS3", "Bootstrap"],
    },
    database: {
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    devops: {
      title: "DevOps & Tools",
      items: ["Kubernetes", "Docker", "GitHub Actions", "Git", "Grafana"],
    },
    cloud: {
      title: "Cloud",
      items: ["AWS", "Digital Ocean", "Firebase"],
    },
  },
  certifications: [
    {
      name: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      icon: "code",
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      icon: "psychology",
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      icon: "code",
    },
    {
      name: "Python For Everybody Specialization",
      issuer: "Coursera",
      icon: "school",
    },
  ],
  projects: [
    {
      title: "EasyShare",
      description: [
        "A blockchain-based system for secure storage and seamless sharing of documents within a university setting.",
        "Built with React, Node.js, and Hyperledger Fabric for absolute transparency and authenticity of document ownership.",
        "Employed advanced cryptography techniques, resulting in 50% reduction in paperwork and manual tasks.",
      ],
      liveUrl: "",
      sourceUrl: "https://github.com/muleyashutosh/miniature-octo-robot-frontend",
      backendUrl: "https://github.com/muleyashutosh/miniature-octo-robot-backend",
      screenshot: easyshare,
    },
    {
      title: "Smart-Brain App",
      description: [
        "An App that detects the faces in a given photo.",
        "Used React JS for the front-end, Node.js for the backend server which is connected to a PostgreSQL database for storing user information.",
        "Used a Face Detection API by Clarifai to get search results.",
      ],
      liveUrl: "https://muleyashutosh.github.io/smart-brain/",
      sourceUrl: "https://github.com/muleyashutosh/smart-brain",
      screenshot: project2,
    },
    {
      title: "E-Commerce Database System",
      description: [
        "A full-stack e-commerce application with user authentication and product management.",
        "Used FLASK with python backend for connecting to a MySQL database.",
        "Used Git to coordinate with the team members.",
        "Used Google's Material Design Components and fundamentals to create a beautiful UI.",
      ],
      liveUrl: "",
      sourceUrl: "https://github.com/muleyashutosh/e-commerce-system",
      screenshot: project3,
    },
  ],
};

export default data;
