export type Role = {
  title: string;
  company: string;
  via?: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

export type SkillGroup = {
  name: string;
  items: string[];
  accent?: boolean;
};

export type Project = {
  name: string;
  context: string;
  description: string;
  stack: string[];
  href?: string;
  private?: boolean;
};

export const profile = {
  name: "Emmanuel Morales Jr.",
  shortName: "Emmanuel",
  title: "Senior Full Stack Software Engineer",
  email: "emman.fsdev@gmail.com",
  siteUrl: "https://emman-fsdev.vercel.app",
  location: "Tarlac, Philippines",
  timezone: "UTC+8",
  since: 2016,
  years: "9+",
  resumeHref: "/Emmanuel_Morales_Jr_Resume.pdf",
  photo: "/emmanuel.png",
  headline: "I build e-commerce platforms and the cloud they run on.",
  intro:
    "TypeScript, React and Node.js on the product side; AWS, Docker and Jenkins underneath. I own features from the Figma mockup to production monitoring.",
};

export const experience: Role[] = [
  {
    title: "Senior Full Stack Engineer",
    company: "Officeworks",
    via: "ConnectOS",
    location: "Manila (Australia) · Hybrid",
    start: "Dec 2023",
    end: "Present",
    current: true,
    summary: "E-commerce platform development and maintenance.",
    highlights: [
      "Customer-facing features in TypeScript and React, including the online print workflow that lets customers design custom artwork for in-store pickup",
      "Node.js and Python microservices backed by PostgreSQL and NoSQL (DynamoDB) data stores",
      "AWS infrastructure across ECS, EC2, S3, DynamoDB and Batch, provisioned with CloudFormation and Sceptre",
      "Dockerized services and Jenkins CI/CD pipelines",
      "Production monitoring, incident resolution and XML/YAML configuration upkeep",
    ],
    stack: ["TypeScript", "React", "Node.js", "AWS", "Microservices", "PostgreSQL", "NoSQL"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "TwistResources",
    start: "Sep 2023",
    end: "Dec 2023",
    summary: "Next.js boilerplate, REST APIs, MUI with SSR.",
    highlights: [
      "Built scalable RESTful APIs powering business logic and data workflows for TwistReview projects",
      "Standardized and maintained the team's Next.js boilerplate",
      "Converted complex Figma designs into responsive Next.js interfaces",
      "Integrated Material-UI with Next.js server-side rendering for fast first loads",
    ],
    stack: ["Next.js", "React", "MUI", "REST APIs"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Quantum Technology Inc.",
    start: "Jan 2022",
    end: "Sep 2023",
    summary: "React, React Native + Expo, microservices.",
    highlights: [
      "Converted Figma designs into modular React.js interfaces",
      "Built cross-platform mobile apps with React Native and Expo",
      "Engineered REST APIs and designed scalable microservices",
    ],
    stack: ["React", "React Native", "Expo", "Microservices"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "JNB Software OPC",
    start: "Jun 2018",
    end: "Jan 2022",
    summary: "React, React Native + Expo, REST APIs.",
    highlights: [
      "Converted Figma designs into modular React.js interfaces",
      "Built cross-platform mobile apps with React Native and Expo",
      "Engineered REST APIs and microservices for core product features",
    ],
    stack: ["React", "React Native", "Node.js", "REST APIs"],
  },
  {
    title: "Front-End Developer",
    company: "WEMOAP IT Solutions",
    start: "Sep 2016",
    end: "Apr 2018",
    summary: "WordPress, hosting, design.",
    highlights: [
      "Built and configured responsive WordPress sites and web applications",
      "Handled deployments, domain configuration and server management on HostGator",
      "Produced logos, graphics and UI assets for Hong Kong–based client teams",
    ],
    stack: ["WordPress", "Photoshop", "Illustrator"],
  },
];

export const skills: SkillGroup[] = [
  { name: "Frontend", items: ["TypeScript", "React", "Next.js", "React Native", "Expo", "Tailwind CSS", "MUI", "Ant Design", "shadcn/ui"], accent: true },
  { name: "Backend", items: ["Node.js", "Express", "Nest.js", "Python", "FastAPI", "REST", "GraphQL", "Microservices", "OAuth2", "Algolia"] },
  { name: "Data", items: ["PostgreSQL", "SQL", "MongoDB", "DynamoDB", "Redis", "Memcached", "Supabase", "Firebase"] },
  { name: "Testing", items: ["Jest", "Mocha", "Selenium"] },
  { name: "AI & Process", items: ["Claude", "OpenAI", "Gemini", "Agile", "Scrum"] },
  { name: "Tools", items: ["Git", "Bitbucket", "Figma", "WordPress", "Photoshop", "Illustrator"] },
];

export const cloud = {
  services: ["ECS", "EC2", "S3", "Batch", "DynamoDB", "Lambda", "Events", "Messaging", "Docker", "Jenkins", "Nginx", "CI/CD"],
  caption: "Infrastructure as code with CloudFormation + Sceptre",
};

export const projects: Project[] = [
  {
    name: "Officeworks webstore",
    context: "Officeworks · 2023 — now",
    description:
      "Large-scale Australian e-commerce platform. Feature work across the storefront and the custom print-and-pickup flow, plus the AWS infrastructure behind it.",
    stack: ["TypeScript", "React", "Node.js", "AWS", "PostgreSQL"],
    href: "https://www.officeworks.com.au",
    private: true,
  },
  {
    name: "TwistReview",
    context: "TwistResources · 2023",
    description:
      "REST APIs for core business logic and data workflows, on a standardized Next.js boilerplate with MUI and server-side rendering.",
    stack: ["Next.js", "MUI", "REST APIs"],
    private: true,
  },
  {
    name: "Cross-platform mobile apps",
    context: "Quantum Technology & JNB Software · 2018 — 2023",
    description:
      "React Native and Expo apps built from Figma designs, backed by REST APIs and microservices.",
    stack: ["React Native", "Expo", "Node.js"],
    private: true,
  },
];
