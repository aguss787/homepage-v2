export const NAME = "Agus Sentosa Hermawan";
export const BIO = [
  `I'm a software engineer with interest in learning new technology. 
  Experienced in both back-end and front-end services.`,

  `Languages that I use are, but not limited to: Java, C++, Python, Golang,
  Haskell, Rust, Elixir, JavaScript, React, and Elm. I'm always open to 
  learn new programming languages, especially those with new concepts.`,
]
  .map((line) => line.replace(/\n|\r/g, ""))
  .map((line) => line.replace(/ +/g, " "));

export const EXPERIENCE = [
  {
    id: "glints",
    name: "Glints",
    image: "images/glints.png",
    date: "November 2022 - Present",
    sections: [
      {
        id: "glints-sse",
        title: "Senior Software Engineer",
        date: "November 2022 - Present",
        responsibilities: [
          "Building and leading Glints’ new Managed Talent Platform team to facilitate rapid development of the new product",
          "Mentoring two engineers on learning Rust and helping them transition into back-end/full-stack software engineers",
          "Developing Glints’ Managed Talent Rust code bases, including the API services, workers, and its shared libraries",
          "Maintaining Glints’ Managed Talent CI/CD on GitLab pipeline to ensure development can be done rapidly",
          "Managed Glints’ Managed Talent API and its supporting infrastructure in the company’s Kubernetes cluster",
          "Developing Glints’ Job Marketplace shared library and services to improve developer experience and efficiency",
        ],
      },
    ],
  },
  {
    id: "horangi",
    name: "Horangi",
    image: "images/horangi.png",
    date: "December 2021 - October 2022",
    sections: [
      {
        id: "horangi-se",
        title: "Software Engineer",
        date: "December 2021 - October 2022",
        responsibilities: [
          "Developed new feature for the IAM Team Data Pipeline and API",
          "Optimized the performance of the IAM Team Data Pipeline to enable ingestion of data in the magnitude of gigabytes",
          "Built the IAM Team CI/CD Process using GitHub actions",
          "Occasionally ran the team scrum rituals",
        ],
      },
    ],
  },
  {
    id: "sirclo",
    name: "Sirclo",
    image: "images/sirclo.png",
    date: "January 2020 - November 2021",
    sections: [
      {
        id: "sirclo-aem",
        title: "Associate Engineer Manager",
        date: "January 2021 - November 2021",
        responsibilities: [
          "Managed three teams: Account, Authentication, and Authorization; Billing; and Integration with one of Indonesia’s biggest shopping malls. Each team presents a unique challenge that must be approached differently",
          "Oversaw company’s open API development",
          "Conducted 1-on-1 with direct reports to ensure optimal performance and maintain it without burning out",
          "Optimized team workflow and give feedback on both technical and non-technical aspects",
          "Managed team projects and prioritization together with the Product Owner and Manager",
          "Established the engineering standard for the company",
        ],
      },
      {
        id: "sirclo-se",
        title: "Software Engineer",
        date: "January 2020 - January 2021",
        responsibilities: [
          "Initialized and develop the company’s open API project",
          "Optimized stock synchronization process with marketplaces that results in faster and more consistent stock in marketplaces",
          "Developed the company’s in-house framework that all teams will use to develop their services to reduce time and boilerplate code to develop new services",
          "Started and led the Account, Authentication, and Authorization team as engineer and team lead",
        ],
      },
    ],
  },
];

export const SIDE_PROJECTS = [
  {
    id: "homepage",
    name: "This Page!",
    description:
      "This site is built using Next.js and fully works without JavaScript enabled.",
    links: [
      { name: "Homepage", link: "https://agus.dev" },
      { name: "GitHub Repo", link: "https://github.com/aguss787/homepage-v2" },
    ],
  },
  {
    id: "auto-tunnel",
    name: "Auto Tunnel",
    description:
      "Auto-Tunnel is a simple tool that allows you to tunnel all registered ports from remote machine to your local machine without exposing all of them to the internet",
    links: [
      { name: "GitHub Repo", link: "https://github.com/aguss787/auto-tunnel" },
    ],
  },
  {
    id: "sso",
    name: "Single Sign-On",
    description: "Oauth2 Implementation used by all agus.dev tools",
    links: [{ name: "GitHub Repo", link: "https://github.com/aguss787/sso" }],
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    description:
      "A simple URL shortener that I use to shorten my URL for easy sharing",
    links: [
      { name: "App", link: "https://admin.s.agus.dev" },
      {
        name: "GitHub Repo",
        link: "https://example.com",
      },
    ],
  },
  {
    id: "markx",
    name: "MarkX",
    description:
      "A compiler for TLX-style problem description. Used by TOKI scientific committee to compile problem description into HTML.",
    links: [{ name: "GitHub Repo", link: "https://github.com/aguss787/MarkX" }],
  },
];
