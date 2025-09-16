const navLinks: { name: string; link: string }[] = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
];

const projects = [
  {
    name: "ConnectLU",
    images: [
      "/images/connectlu1.png",
      "/images/connectlu2.png",
      "/images/connectlu3.png",
    ],
    description:
      "A React Native and Expo app for business desk and space bookings, built as part of the ITPI team at Lancaster University. Developed from scratch in an agile environment, working closely with stakeholders to iterate.",
    skills: ["React Native", "Expo", "AWS", "TypeScript"],
  },
  {
    name: "ConnectLU",
    images: [
      "/images/connectlu1.png",
      "/images/connectlu2.png",
      "/images/connectlu3.png",
    ],
    description:
      "A React Native and Expo app for business desk and space bookings, built as part of the ITPI team at Lancaster University. Developed from scratch in an agile environment, working closely with stakeholders to iterate.",
    skills: ["React Native", "Expo", "AWS", "TypeScript"],
  },
  {
    name: "SaveYouRecipes.com",
    images: [
      "/images/recipes1.png",
      "/images/recipes2.png",
      "/images/recipes3.png",
    ],
    description:
      "A recipe-sharing platform with account management, ingredient-based search, and posting capabilities. Includes a custom Python web scraper and deployed using Linode, Nginx, and Gunicorn.",
    skills: ["Python", "Flask", "Linode", "Nginx", "Gunicorn"],
  },
  {
    name: "Gym Management App",
    images: [
      "/images/gym1.png",
      "/images/gym2.png",
      "/images/gym3.png",
    ],
    description:
      "An A-Level final project: a complete gym management system for a local business. Included user & staff management, membership tracking, revenue analysis, and booking tools.",
    skills: ["Python", "SQLite", "GUI Development"],
  },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const words_dev = [
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Development Experience" },
  { value: 3, suffix: "+", label: "Major Projects Completed" },
  { value: 2, suffix: "", label: "Internships (ITPI & Barclays)" },
  { value: 15, suffix: "k+", label: "End-Users Impacted (ILancaster)" },
];

const logoIconsList = [
  { imgPath: "/images/logos/lancaster.png" },
  { imgPath: "/images/logos/barclays.png" },
  { imgPath: "/images/logos/itpi.png" },
  { imgPath: "/images/logos/azure.png" },
  { imgPath: "/images/logos/aws.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Experience across frontend, backend, and cloud deployments.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaboration",
    desc: "Worked closely with stakeholders in agile teams, delivering iterative results.",
  },
  {
    imgPath: "/images/time.png",
    title: "Adaptability",
    desc: "Delivered high-quality work under time pressure (e.g., Barclays AI project).",
  },
];

const techStackImgs = [
  { name: "React / React Native", imgPath: "/images/logos/react.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Flask", imgPath: "/images/logos/flask.png" },
  { name: "AWS & Azure", imgPath: "/images/logos/aws.png" },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Flask",
    modelPath: "/models/flask-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "AWS & Azure",
    modelPath: "/models/cloud-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Contributed to ILancaster, an app used by over 15,000 students. Learned DevOps practices and large-scale error reporting.",
    imgPath: "/images/exp-itpi.png",
    logoPath: "/images/logo/lancaster.png",
    title: "Junior Front-End Developer – ITPI",
    date: "2023 – Present",
    responsibilities: [
      "Practiced agile methodology",
      "Used Sentry for large-scale error reporting",
      "Worked with AWS (DynamoDB, S3, Lambda)",
    ],
    skills: ["React Native", "TypeScript", "AWS", "Git", "Agile"],
  },
  {
    review:
      "Worked on Generative AI solutions and ServiceNow tooling to support Barclays’ infrastructure backbone.",
    imgPath: "/images/logo/.png",
    logoPath: "/images/logo/barclays.png",
    title: "Tech Developer Intern – Barclays",
    date: "Summer 2025",
    responsibilities: [
      "Built ServiceNow-based tools",
      "Developed Generative AI workflows",
      "Communicated with stakeholders & implemented feedback",
    ],
    skills: ["Generative AI", "ServiceNow", "Python", "Agile", "Git"],
  },
  {
    review:
      "Built an AI-powered award nomination classifier with Azure Foundry SDK and scikit-learn under strict deadlines.",
    imgPath: "/images/exp-barclays-ai.png",
    logoPath: "/images/logo/barclays.png",
    title: "Selected AI Project – Barclays",
    date: "Summer 2025",
    responsibilities: [
      "Python development with Azure Foundry API",
      "Applied machine learning with scikit-learn",
      "Delivered well-documented project under time pressure",
    ],
    skills: ["Python", "Azure Foundry", "Machine Learning", "Git"],
  },
];

const expLogos = [
  { name: "ITPI", imgPath: "/images/logos/itpi.png" },
  { name: "Barclays", imgPath: "/images/logos/barclays.png" },
  { name: "Lancaster University", imgPath: "/images/logos/lancaster.png" },
];

const testimonials = [
  {
    name: "ITPI Team Lead",
    mentions: "@Lancaster University",
    review:
      "Nai consistently delivered high-quality features and showed strong initiative in problem-solving.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Barclays Manager",
    mentions: "@Barclays",
    review:
      "Nai quickly picked up complex concepts and delivered impactful Generative AI tools for our team.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  { name: "GitHub", imgPath: "/images/github.png", link: "https://github.com/nai4205" },
  { name: "LinkedIn", imgPath: "/images/linkedin.png", link: "https://linkedin.com/in/nai-korn-8012b319b" },
  { name: "Email", imgPath: "/images/email.png", link: "mailto:naijonkorn@gmail.com" },
];

export {
  words,
  projects,
  words_dev,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
