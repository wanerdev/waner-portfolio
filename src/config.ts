import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Waner Kevin",
  logo: "/logo.webp",
  email: "wanerkevin1@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/wanerdev",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:wanerkevin@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "Linkdin",
    url:"https://www.linkedin.com/in/wanerkevin/",
    icon:"mdi:linkedin-box"
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Waner Kevin",
    description:
      "Full-stack developer who loves code",
    image: identity.logo,
  },
  role: "Software Developer",
  description:
      "I am Waner Kevin, a young full-time developer who enjoys analyzing everyday situations and translating them into code!",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Waner Kevin",
    description:
      "Fullstack developer",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Waner Kevin,
<br/><br/>
Passionate Full Stack developer with extensive experience in designing, developing, and maintaining web applications. 
Proficient in front-end and back-end technologies, with skills in HTML, CSS, JavaScript, PHP, Java, and SQL and NoSQL databases. 
I have worked on diverse projects, from startups to large companies, which has provided me with a solid understanding of current technological challenges. 
Always seeking innovative solutions with a focus on efficiency and scalability. Connect with me to discuss potential collaboration opportunities!`, // Markdown is supported
    image_l: {
      url: "/codigo.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/codigo-2.jpeg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer",
        company: {
          name: "Eviano Digital SL",
          image: "/logo.webp",
          url: "https://www.linkedin.com/in/wanerkevin/",
        },
        date: "Sept 2022 - Present",
      },
      {
        title: "Software Developer",
        company: {
          name: "Housfy",
          image: "/logo.webp",
          url: "https://www.linkedin.com/in/wanerkevin/",
        },
        date: "Mar 2022  - Aug 2022",
      },
      {
        title: "Software Developer",
        company: {
          name: "Cyberclick",
          image: "/logo.webp",
          url: "https://www.linkedin.com/in/wanerkevin/",
        },
        date: "Jun 2021  - Mar 2022",
      },
    ],
  },
  study: {
    description: `My educational career has focused quite a bit on the line of computing and development.`, // Markdown is supported
    items: [
      {
        title: "Informatics Engineering",
        center: {
          name: "UOC",
          url: "",
        },
        date: "Jan 2023 - Present",
        description: ""
      },
      {
        title: "Web applications development",
        center: {
          name: "Institut Provençana",
          url: "",
        },
        date: "Sep 2019  - Jun 2021",
        description: ""
      },
      {
        title: "Database Design and Programing  with SQL ",
        center: {
          name: "Oracle",
          url: "",
        },
        date: "Sep 2021  - Jun 2021",
        description: ""
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Tim Witzdam",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
