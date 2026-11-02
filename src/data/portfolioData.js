export const PERSONAL_INFO = {
  name: "Ankit Kumar",
  role: "MCA | Web Developer | Tech Explorer",
  roles: [
    "MCA Student @ KIET",
    "Full-Stack Web Developer",
    "AI & ML Enthusiast",
    "React & Python Developer"
  ],
  bio: "MCA student with hands-on experience in full-stack development and programming projects. Proficient in Java, Python, React, databases, and problem solving. Seeking opportunities to grow as a professional developer and contribute to impactful software solutions.",
  location: "Ghaziabad, Uttar Pradesh, India",
  email: "iankitgupta04@gmail.com",
  phone: "+91 9990285721",
  whatsapp: "https://wa.me/919990285721",
  github: "https://github.com/iankitguptaa",
  linkedin: "https://www.linkedin.com/in/ankit-kumar-gupta04/",
  leetcode: "https://leetcode.com/u/theankitguptaa/",
  instagram: "https://www.instagram.com/theankitguptaa?igsh=MW9hODI5OXpydDFtag==",
  avatarImg: "/ankit_avatar_no_bg.png",
  photoImg: "/personalpic.jpeg",
  cutoutImg: "/ankit_hero_cutout.webp",
  heroImg: "/ankit_hero_cutout.webp",
  resumeUrl: "#resume"
};

export const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Grantcode Software Pvt. Ltd.",
    location: "Noida",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Developed responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript and React.js.",
      "Used Git and GitHub for version control and collaborative development.",
      "Created reusable React components and implemented dynamic features for production-oriented web applications."
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Git", "GitHub"]
  },
  {
    role: "Analyst",
    company: "Netmine Vision Pvt. Ltd.",
    location: "Noida",
    period: "Feb 2025 – Sept 2025",
    points: [
      "Collected, cleaned, and analyzed datasets using Excel, SQL, and Python to support business decisions.",
      "Created interactive dashboards and reports using Power BI / Tableau for performance tracking.",
      "Identified trends and patterns to improve operational efficiency.",
      "Assisted senior analysts in preparing weekly and monthly analytical reports."
    ],
    tags: ["Excel", "SQL", "Python", "Power BI", "Tableau"]
  }
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "KIET Deemed to be University, Ghaziabad",
    duration: "2025 – 2027",
    status: "Currently Pursuing",
    description: "Advanced studies in Software Engineering, Cloud Architectures, Machine Learning, and Advanced Data Structures & Algorithms."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Institute of Technology & Science (ITS), Ghaziabad",
    duration: "2021 – 2024",
    status: "Completed with Distinction",
    description: "Core foundation in Computer Science, Database Systems, Object-Oriented Programming, C/C++, Java, and Web Development."
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Dehradun Public School, Ghaziabad",
    duration: "2021",
    status: "Completed",
    description: "Focus on Mathematics, Computer Science, and Science fundamentals."
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "C / C++", level: 85, icon: "⚡" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "JavaScript (ES6+)", level: 90, icon: "🟨" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 88, icon: "▲" },
      { name: "HTML5 / CSS3", level: 95, icon: "🌐" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Node.js / Express", level: 82, icon: "🟢" },
      { name: "REST APIs", level: 85, icon: "🔌" },
      { name: "Three.js / 3D Web", level: 85, icon: "🎲" }
    ]
  },
  {
    category: "Databases & Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "MySQL", level: 85, icon: "🐬" },
      { name: "MongoDB", level: 82, icon: "🍃" },
      { name: "Git & GitHub", level: 88, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" }
    ]
  },
  {
    category: "AI Development Tools",
    icon: "Bot",
    skills: [
      { name: "Claude", level: 90, icon: "🧠" },
      { name: "Google Antigravity", level: 85, icon: "🚀" },
      { name: "Codex", level: 85, icon: "⌨️" },
      { name: "GitHub Copilot", level: 88, icon: "🤖" }
    ]
  },
  {
    category: "Deployment",
    icon: "Cloud",
    skills: [
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Render", level: 85, icon: "☁️" }
    ]
  },
  {
    category: "AI, ML & Libraries",
    icon: "Brain",
    skills: [
      { name: "Scikit-Learn", level: 82, icon: "🤖" },
      { name: "NumPy & Pandas", level: 85, icon: "📊" },
      { name: "Matplotlib / Seaborn", level: 80, icon: "📈" }
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, icon: "🧩" },
      { name: "Object-Oriented Programming (OOPS)", level: 90, icon: "📐" },
      { name: "Database Management (DBMS)", level: 88, icon: "🗄️" },
      { name: "Web Application Security", level: 78, icon: "🔒" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "lung-cancer",
    title: "Lung Cancer Prediction",
    category: "Machine Learning",
    description: "Logistic Regression based ML model to predict lung cancer with 90%+ accuracy using Python and scikit-learn.",
    longDescription: "Logistic Regression based ML model to predict lung cancer with 90%+ accuracy using Python and scikit-learn, with NumPy and Pandas for data preprocessing.",
    tags: ["Python", "scikit-learn", "NumPy", "Pandas"],
    image: "/projects/project1.jpg",
    github: "https://github.com/iankitguptaa/Lung-Cancer-prediction-project",
    demo: "https://github.com/iankitguptaa/Lung-Cancer-prediction-project",
    featured: true,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    category: "Full Stack",
    description: "Full responsive React e-commerce app with cart, product listing, hooks, and deployed on Vercel.",
    longDescription: "Full responsive React e-commerce app with cart management, product listing and React hooks for state, deployed on Vercel.",
    tags: ["React", "JavaScript", "CSS", "Vercel"],
    image: "/projects/project2.jpeg",
    github: "https://github.com/iankitguptaa/ECOMMERCE-REACT",
    demo: "https://ecommerce-react-ten-puce.vercel.app/",
    featured: true,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: "digital-portfolio",
    title: "Digital Portfolio Platform",
    category: "Web Development",
    description: "React based digital portfolio platform to showcase student projects, skills and achievements dynamically.",
    longDescription: "React based digital portfolio platform to showcase student projects, skills and achievements dynamically using hooks and custom CSS.",
    tags: ["React", "Hooks", "CSS"],
    image: "/projects/project3.png",
    github: "https://github.com/iankitguptaa/Student-Portfolio-Website-React",
    demo: "https://student-portfolio-website-react.vercel.app/",
    featured: false,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: "restaurant",
    title: "Restaurant Website",
    category: "Full Stack",
    description: "A complete, production-ready food delivery platform built from scratch with a stunning, interactive UI powered by a real backend.",
    longDescription: "I challenged myself to build a complete, production-ready food delivery platform from scratch. I wanted to go beyond a simple frontend mockup and build something that looks stunning, feels interactive, and is powered by a real backend.",
    tags: ["React", "Express", "REST API", "Vercel"],
    image: "/projects/restaurant-biteroute.png",
    github: "https://github.com/iankitguptaa/Restaurant-Website",
    demo: "https://restaurant-website-zeta-ruby.vercel.app/",
    featured: true,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "renteasee",
    title: "RentEasee",
    category: "Web Development",
    description: "Rental platform to discover verified apartments, independent villas, and co-living spaces across India with zero brokerage.",
    longDescription: "RentEasee helps users discover verified luxury apartments, independent villas, and managed co-living spaces across India with zero brokerage, wrapped in a clean, responsive interface and deployed on Vercel.",
    tags: ["React", "JavaScript", "CSS", "Vercel"],
    image: "/projects/renteasee.png",
    github: "https://github.com/iankitguptaa/RentEasee",
    demo: "https://renteasee-six.vercel.app/",
    featured: true,
    gradient: "from-rose-500 to-red-600"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Ethical Considerations for Generative AI",
    issuer: "IBM",
    icon: "ShieldCheck",
    image: "/certificates/cert1.jpeg"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    icon: "Award",
    image: "/certificates/cert2.jpeg"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    icon: "CheckCircle2",
    image: "/certificates/cert3.jpeg"
  },
  {
    title: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services (TCS)",
    icon: "Briefcase",
    image: "/certificates/cert4.jpeg"
  },
  {
    title: "ChatGPT: Introduction and Application in Various Domains",
    issuer: "Data Trained",
    icon: "Sparkles",
    image: "/certificates/cert5.jpeg"
  },
  {
    title: "Oracle Certified Foundations Associate: Agentic AI",
    issuer: "Oracle University",
    icon: "Award",
    image: "/certificates/cert6.webp"
  }
];

const TOTAL_SKILLS_COUNT = SKILLS_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

export const STATS = [
  { label: "Degree Level", value: "MCA Candidate" },
  { label: "Featured Projects", value: `${PROJECTS.length}+` },
  { label: "Certifications", value: `${CERTIFICATIONS.length}` },
  { label: "Technologies", value: `${TOTAL_SKILLS_COUNT}+` }
];

