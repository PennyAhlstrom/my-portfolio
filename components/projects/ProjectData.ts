export const projects = [
  {
    title: "Classmate – Full-Stack Microservices Application",
    slug: "classmate-fullstack-microservices-app",
    description:
      `Developed a full-stack application with a React frontend and Java Spring Boot microservices backend, implementing API gateway routing and distributed system architecture.`,
    tech: [
      "Java",
      "JavaScript",
      "React",
      "Spring Boot",
      "RESTful APIs",
      "API Gateway",
      "Docker",
    ],
    content:
      `Classmate is a full-stack capstone project designed using a microservices architecture to support a scalable and modular application. The backend is composed of multiple Java Spring Boot services, each responsible for a specific domain, communicating through RESTful APIs.
      An API gateway was implemented to centralize routing and manage client requests, providing a unified interface between the frontend and backend services. This approach improves system organization and supports independent development and scaling of services.
      The frontend was built using React and TypeScript, focusing on a structured component architecture and clear user interaction flows. The system was designed to handle real-world application complexity, emphasizing maintainability, modularity, and separation of concerns.
      This project demonstrates experience with distributed systems, full-stack development, and designing scalable application architectures.`,
    githubUrl: "https://github.com/ClassMate3000",
    images: [
      {
        src: "/images/projects/classmate-login-1.png",
        alt: "ClassMate Login Screen",
      },
      {
        src: "/images/projects/classmate-courses-2.png",
        alt: "ClassMate Home Screen - Courses",
      },
      {
        src: "/images/projects/classmate-tasks-3.png",
        alt: "ClassMate Home Screen - Tasks",
      },
      {
        src: "/images/projects/classmate-reminders-4.png",
        alt: "ClassMate Home Screen - Reminders",
      },
      {
        src: "/images/projects/classmate-grades-5.png",
        alt: "ClassMate Home Screen - Grades",
      },
    ],
    featured: true,
  },
  {
    title: "Developer Portfolio Website",
    slug: "developer-portfolio-website",
    description:
      `Designed and developed a professional respnsive portfolio website built with Next.js and Tailwind to showcase projects,skills, and experience using modern frontend technologies`,
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
    ],
    content:
      `This project is a custom-built portfolio website created to present technical work in a clear and structured format. The site uses a component-based architecture, enabling reusable UI elements and consistent styling across sections.
      The design emphasizes clean layout, typography, and responsiveness, ensuring usability across devices. Multiple sections were implemented to organize content, including projects, demos, resume, and contact information.
      This project reflects a focus on user experience, front-end development best practices, and the ability to translate design ideas into functional interfaces.`,
    githubUrl: "https://github.com/PennyAhlstrom/my-portfolio",
    images: [
      {
        src: "/images/projects/portfolio-home-1.png",
        alt: "Homepage of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-about-2.png",
        alt: "About page of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-projects-3.png",
        alt: "Projects page of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-demos-4.png",
        alt: "Demos page of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-documents-5.png",
        alt: "Documents page of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-references-6.png",
        alt: "References page of the Portfolio Website",
      },
      {
        src: "/images/projects/portfolio-contact-7.png",
        alt: "Contact page of the Portfolio Website",
      },
    ],
    featured: true,
  },
  {
    title: "Smart Inventory Management System",
    slug: "smart-inventory-management-system",
    description:
      `Built and enhanced a full-stack inventory system with authentication, role-based access, dynamic search, and production deployment, supporting real-world business workflows.`,
   tech: [
    "C#",
    "JavaScript",
    ".NET",
    "ASP.NET Core",
    "Entity Framework",
    "Bootstrap",
    "AJAX",
    "PostgreSQL",
    "Azure",
    "Serilog",
    ],
      content:
      `This project is a database-driven web application designed to help small businesses manage inventory, track products, and process orders. The system supports full CRUD operations, category management, and low-stock monitoring.
      The application was later extended with ASP.NET Core Identity to implement user authentication and role-based authorization, enabling secure access control for admin and regular users. Additional enhancements included global error handling, logging, and custom error pages to improve reliability.
      AJAX was used to implement dynamic search and asynchronous form submissions, allowing users to interact with the system without full page reloads. The application was deployed to Microsoft Azure, demonstrating production readiness and environment configuration.
      The system was built using MVC architecture with a normalized relational database, ensuring data integrity and scalability. This project highlights the ability to design, extend, and deploy real-world business applications.`,
    githubUrl: "https://github.com/PennyAhlstrom/comp2139-boatshoppe",
    images: [
      {
        src: "/projects/inventory-management-1.jpg",
        alt: "Homepage of the inventory management system",
      },
    ],
    featured: false,
  },
    {
    title: "Swift iOS UI Development",
    slug: "swift-ios-ui-development",
    description:
      `Designed and implemented mobile user interfaces for iOS using Swift, focusing on layout structure, navigation, and user experience.`,
    tech: [
      "Swift",
      "iOS",
      "Xcode",
    ],
    content:
      `Developed user interface components for an iOS application using Swift, focusing on clean layout design and intuitive navigation. The work involved structuring views, handling user interactions, and organizing screen flow within the application.
      Attention was given to usability and consistency, ensuring that the interface aligns with standard iOS design patterns. This project strengthened understanding of mobile UI development and platform-specific implementation in a native environment.`,
    githubUrl: "https://github.com/PennyAhlstrom/COMP3097_Project_UIDesign",
    images: [
      {
        src: "/projects/ios-classmate-ui-1.jpg",
        alt: "Homepage of iOS ClassMate app",
      },
    ],
    featured: false,
  },
  {
    title: "Android UI Development",
    slug: "android-ui-development",
    description:
      `Designed and implemented user interfaces for an Android application using XML for layout definition and Java for interaction logic. The project involved structuring UI components, managing layouts, and handling user input across different screens.
      The focus was on creating responsive and organized interfaces while following Android design conventions. This work provided experience in platform-specific UI development and reinforced understanding of how front-end structure integrates with application logic.`,
    tech: [
      "Java",
      "XML",
      "Android",
      "Android Studio",
    ],
    content:
      "This project focuses on reusable UI components, page composition, responsive layout, and clean portfolio presentation.",
    githubUrl: "https://github.com/PennyAhlstrom/comp3074project/tree/layouts",
    images: [
      {
        src: "/projects/android-classmate-ui-1.jpg",
        alt: "Homepage of Android ClassMate app",
      },
    ],
    featured: false,
  },
  {
    title: "Python Game Feature Development",
    slug: "python-game-feature-development",
    description:
      `Developed a feature for a command-line game using object-oriented programming, inheritance, and file handling to create a reusable and extensible system.`,
    tech: [
      "Python",
      "OOP",
      "File I/O",
      "Exception Handling",
    ],
    content:
      `This project involved adding a unique featuire to a structured game system in Python, focusing on object-oriented programming principles such as inheritance, encapsulation, and code reuse.
      Separate classes were created for core entities, with a shared parent class to manage common attributes. Property decorators were used to control access to private data, and exception handling was implemented to validate user input and prevent runtime errors.
      The system also includes file-based persistence to store and load game progress, demonstrating the ability to manage state across sessions.
      This project highlights strong foundational programming skills and the ability to structure maintainable and extensible code.`,
    githubUrl: "https://github.com/PennyAhlstrom/comp2152_labs/tree/main/assignment2",
    images: [
      {
        src: "/projects/python-game-feature-1.jpg",
        alt: "Python Game - Crazy Scientist Feature",
      },
    ],
    featured: false,
  },
];
