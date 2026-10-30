// All portfolio content lives here. Edit this file to update the site.
// Facts come from Shifali's LinkedIn / GitHub. Items marked TODO need her confirmation.

// The live URL. Used for canonical links, Open Graph, the sitemap and JSON-LD.
// Change this one line if the site moves to a custom domain.
export const siteUrl = "https://my-portfolio-six-drab-75.vercel.app";

export const profile = {
  name: "Shifali Gwal",
  roles: ["Frontend Engineer", "UI/UX Designer"],
  location: "Bengaluru, India",
  pronouns: "she/her",
  status: "Open to work · hybrid or remote",
  openTo: ["Frontend Engineer", "UI/UX Designer", "Design Engineer"],
  intro:
    "I design interfaces in Figma and build them in React and Next.js. Same person, one handoff less.",
  // Plain, self-contained description for search snippets, AI answers and structured data.
  summary:
    "Shifali Gwal is a Bengaluru-based frontend engineer and UI/UX designer who designs interfaces in Figma and builds them in React and Next.js, with a focus on Core Web Vitals, SEO and accessibility.",
  about: [
    "I'm Shifali Gwal, a frontend engineer and UI/UX designer based in Bengaluru, India. I design interfaces in Figma and build them in React, Next.js and TypeScript.",
    "I started in web design, moved into full-stack development, settled into frontend engineering, and in 2026 added UI/UX design to the work I do for clients.",
    "I care about the part where a design meets a real browser: Core Web Vitals, SEO, accessibility, and the small details that decide if a page feels fast. I also mentor interns and enjoy developer-experience tooling like Jotai, Vite and Turborepo.",
  ],
  // TODO: confirm she wants this email public on the site.
  email: "gwal.shifali2223@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/theshifaligwal",
    github: "https://github.com/theshifaligwal",
    x: "https://twitter.com/Theshifaligwal",
  },
  xHandle: "@Theshifaligwal",
};

export const metrics = [
  { value: "0.8 s", label: "LCP on 4G", note: "D2C web app, Next.js App Router" },
  { value: "+58%", label: "organic traffic in 8 weeks", note: "SEO playbook" },
  { value: "−2.4 s", label: "page load", note: "React to Next.js (SSR + ISR)" },
  { value: "₹4.2 cr", label: "monthly GMV", note: "OgClub B2B portal" },
];

export type Project = {
  id: string;
  title: string;
  kind: "Design" | "Engineering";
  org: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "jaispro",
    title: "Company website and e-commerce website",
    kind: "Design",
    org: "JaisPro · freelance UI/UX Designer",
    period: "Mar – Aug 2026",
    summary:
      "My first UI/UX engagement. I designed two websites for JaisPro, a company site and an e-commerce site, with user research behind the decisions.",
    points: [
      "Ran user research to ground the flows and layouts",
      "Designed the company website and the e-commerce experience in Figma",
    ],
    stack: ["Figma", "User research", "UI design", "UX design"],
  },
  {
    id: "d2c",
    title: "D2C web app, wallet and rewards",
    kind: "Engineering",
    org: "Web Developer · Bengaluru",
    period: "Apr – Sep 2024",
    summary:
      "Built a direct-to-consumer web app on Next.js App Router and Tailwind, plus the wallet and rewards engine behind it.",
    points: [
      "LCP 0.8 s and CLS 0.03 on 4G",
      "Wallet and rewards engine: average order value +27%, ₹1.6 crore redeemed",
      "Real-time event listeners for React Native WebViews: crash reports −43%",
      "SEO playbook with dynamic OG tags, sitemap and structured data: organic traffic +58% in 8 weeks",
    ],
    stack: ["Next.js", "Tailwind CSS", "React Native WebView", "SEO"],
  },
  {
    id: "mandi",
    title: "Madras Mandi platform",
    kind: "Engineering",
    org: "Full-stack Developer",
    period: "Jul 2022 – Apr 2024",
    summary:
      "Two years on a commerce platform: a Next.js revamp, instant delivery, and a B2B ordering portal.",
    points: [
      "React to Next.js with SSR and ISR: page load −2.4 s, bundle −210 kB",
      "Instant Delivery with location-aware slots and dispatch ETA: daily orders 1.7× (2k to 3.4k)",
      "OgClub B2B portal with role-based dashboards and bulk orders: ₹4.2 crore monthly GMV",
      "GitLab CI with a 250 kB gzip performance budget",
    ],
    stack: ["Next.js", "React", "Node.js", "GitLab CI"],
  },
];

export const research = {
  title: "Performance Analysis of Supervised Learning Algorithms on Structured Data",
  context: "M.Tech dissertation · Shri Venkateshwara University",
  summary:
    "Compared 8 algorithms on 4 UCI datasets across 6 metrics, with grid-search and stratified 5-fold cross-validation, then tested the differences statistically.",
  facts: [
    ["Algorithms", "Logistic Regression, KNN, Naive Bayes, Decision Tree, Random Forest, SVM, XGBoost, MLP"],
    ["Datasets", "Adult, Wine Quality, Heart Disease, Letter Recognition"],
    ["Metrics", "Accuracy, precision, recall, F1, AUC-ROC, training time"],
    ["Statistics", "Friedman test with Nemenyi post-hoc"],
    ["Result", "XGBoost ranked best (average rank 1.50), Random Forest second (2.00)"],
  ] as [string, string][],
  stack: ["Python", "scikit-learn", "XGBoost", "pandas", "SciPy"],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Design", items: ["Figma", "UI design", "UX design", "User research"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux-Saga"],
  },
  {
    group: "Quality",
    items: ["Core Web Vitals", "SEO", "Performance budgets", "Visual regression tests"],
  },
  { group: "Tooling", items: ["Jotai", "Vite", "Turborepo", "GitLab CI", "Node.js"] },
];

export const uiuxCareer = [
  { when: "2026", what: "UI/UX Designer (freelance)", where: "JaisPro" },
  { when: "2024 – 2026", what: "Design-led product thinking", where: "Independent and client work" },
  { when: "2019", what: "Web design internship", where: "World Wide College" },
];

export const frontendCareer = [
  { when: "2024", what: "Web Developer", where: "Bengaluru" },
  { when: "2022 – 2024", what: "Full-stack Developer", where: "Madras Mandi" },
  { when: "2024 – 2026", what: "M.Tech, Computer Science", where: "Shri Venkateshwara University" },
  { when: "Earlier", what: "B.Tech, Computer Science", where: "Veer Bahadur Singh Purvanchal University" },
];

export const repos = [
  // TODO: descriptions are inferred from repo names. Confirm or edit.
  { name: "quiz-manager", note: "TypeScript quiz app" },
  { name: "ecom-client", note: "E-commerce frontend" },
  { name: "2d-room-drafting-application", note: "2D room drafting tool" },
  { name: "noteZipper-client", note: "Notes app frontend" },
];
