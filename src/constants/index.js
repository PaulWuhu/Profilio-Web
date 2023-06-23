import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    django,
    jobit,
    tripguide,
    threejs,
    bootstrap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Musician",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Car Car",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Implemented create, read, update, and delete functions for appointments and technicians and views for applications",
        "Employed modern web technologies such as Bootstrap to enhance the website's aesthetics and attract more user.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Utilized Django  to build a RestAPI backend and connect to the front end with JS and React.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Conference Go",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Changed the monolith application from Microservice with Docker and made the application more scalable .",
        "Deployed ACL and API calls to gather information from third-party API and protect the application from corruption, making the application safer and faster.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SyncUp",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Used React and Tailwind to build a functional front with Typescript and Vite that speed up  the application.",
        "Deployed a functional backend with FastAPI, enhanced data security for user information, and CRUD function for all aspects of the user.",
        "Built a complicated SQL database to demonstrates ",
        "Employed different React libraries to create fast data fetching and loading and quicken development speed.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I wholeheartedly recommend Paul Wu for any software engineering role. His intellect, innovation, and interpersonal skills make him a standout candidate, and I am certain that he will be a valuable asset to any team!",
      name: "Chris Zambito",
      designation: "Associate Software Engineer",
      company: "Apex Cloud Development",
      image: "https://media.licdn.com/dms/image/D4E35AQG77axSwGPtmQ/profile-framedphoto-shrink_400_400/0/1687270638402?e=1688079600&v=beta&t=z9e-_Qr2q3isJVNgF6KYdQst1AKX3zR1wECicPkoI44",
    },
    {
      testimonial:
        "This software has revolutionized my development process. Its seamless interface, powerful features, and extensive library of components have significantly boosted my productivity. I highly recommend this software to fellow software developers.",
      name: "ChaptGPT",
      designation: "Chatgpt",
      company: "OpenAi",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png",
    },
    {
      testimonial:
        "This software has revolutionized my development process. Its seamless interface, powerful features, and extensive library of components have significantly boosted my productivity. I highly recommend this software to fellow software developers.",
      name: "Yining Sun",
      designation: "my wife",
      company: "",
      image: "https://esoc.princeton.edu/sites/g/files/toruqf241/files/styles/3x4_750w_1000h/public/2021-09/Yining%20Sun.JPG?itok=de0nt6b0",
    },
  ];
  
  const projects = [
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "SyncUp",
      description:
        "Web application that enables users to create update and delete a group, and set user status such as admin or not. Also give user the ability to create, view update and delete meeting based on the group.",
      tags: [
        {
          name: "react-typescript",
          color: "blue-text-gradient",
        },
        {
          name: "FastApi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://gitlab.com/mford1021/module3-project-gamma",
    },
    {
      name: "Conference Go",
      description:
        "Web application that help user to create, and attend new conference, and attend any needed presentation for the conference. It includes 3rd party API that has automatic email function. It is made up with several micro-service",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://gitlab.com/PaulWuhu/fearless-frontend",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
