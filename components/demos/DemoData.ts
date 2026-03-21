export const demos = [
  {
    title: "Machine Learning Classification Models",
    slug: "machine-learning-classification-models",
    description:
      `Built and evaluated classification models using structured datasets to understand model performance, preprocessing techniques, and evaluation methods. This project focused on applying supervised learning to real-world-style data and interpreting results.`,
    tech: [
      "Python", 
      "scikit-learn", 
      "Pandas", 
      "NumPy", 
      "Matplotlib"
    ],
    content:
      `This project explores classification tasks using datasets such as IMDB and Reuters. The focus was on building a complete machine learning workflow, including data preprocessing, feature preparation, model training, and evaluation. I implemented classification models using scikit-learn and evaluated their performance using metrics such as accuracy and loss. The project also involved experimenting with different approaches to data representation and observing how these changes impacted model performance. Through this work, I developed an understanding of how preprocessing, feature engineering, and validation techniques such as train/test splits influence the effectiveness of machine learning models.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
  {
    title: "Developer Portfolio Website",
    slug: "developer-portfolio-website",
    description:
      `Designed and developed a personal portfolio website to showcase projects, skills, and experience, with a focus on clean design, responsiveness, and reusable components.`,
    tech: [
      "TypeScript", 
      "React", 
      "Next.js", 
      "Tailwind",
    ],
    content:
      `This project is a custom-built portfolio website designed to present my work, skills, and experience in a clear and structured way. The focus was on creating a clean, modern interface while maintaining flexibility through reusable components. I implemented a component-based architecture using React and TypeScript, allowing for consistent styling and scalable design. The site includes multiple sections such as projects, demos, and resume content, all organized for easy navigation. Special attention was given to layout, typography, and responsiveness to ensure the site remains intuitive and visually consistent across devices. This project reflects my approach to building user-focused interfaces that balance design and functionality.`,
    videoUrl: "https://player.vimeo.com/video/VIDEO_ID2",
  },
  {
    title: "Regression Modeling and Prediction",
    slug: "regression-modeling-and-prediction",
    description:
      `Developed regression models to predict continuous values using structured datasets, with a focus on model evaluation, validation techniques, and understanding overfitting.`,
    tech: [
      "Python", 
      "scikit-learn", 
      "TensorFlow", 
      "Pandas", 
      "NumPy",
    ],
    content:
      `This project focuses on regression analysis using datasets such as the Boston Housing dataset to predict continuous values. The goal was to understand how machine learning models can be applied to real-world prediction problems. I implemented regression models and evaluated their performance using techniques such as K-fold cross-validation to ensure reliable results. The project also explored how model complexity affects performance, including identifying and reducing overfitting. This work helped build a strong foundation in model evaluation, validation strategies, and the practical challenges of working with real datasets.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
  {
    title: "Smart Inventory Management System 1",
    slug: "smart-inventory-management-system-1",
    description:
      `Developed a full-stack inventory management system to help small businesses track products, manage orders, and monitor stock levels, with support for search, filtering, and guest order functionality.`,
    tech: [
      "C#",
      "JavaScript",
      "ASP.NET Core",
      ".NET",
      "Entity Framework",
      "Bootstrap",
      "PostgreSQL",
    ],
    content:
      `This project is a database-driven web application designed to support inventory management for small businesses. The system allows users to manage products and categories, track inventory levels, and create basic orders without requiring user authentication. Core functionality includes full CRUD operations for products, including tracking stock quantities and low-stock thresholds. The interface was styled using Bootstrap to create a responsive and user-friendly layout. The application also supports dynamic search, filtering, and sorting, allowing users to quickly locate products by category, price range, or stock status. A guest order system was implemented to allow users to create and review orders, including product selection and total price calculation. The application was built using the ASP.NET Core MVC architecture, separating concerns across models, views, and controllers to ensure maintainability and scalability. The database was designed with relational structure and data integrity in mind, including normalized tables for products, categories, and orders, with appropriate relationships and constraints. Entity Framework Core migrations were used to manage schema changes and support reproducibility. This project demonstrates the ability to design and implement full-stack, database-driven applications with a focus on usability, structured data management, and real-world business functionality.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
   {
    title: "Smart Inventory Management System 2",
    slug: "smart-inventory-management-system-2",
    description:
      `Extended a full-stack inventory management system with authentication, role-based access control, real-time interactivity, 
      and production deployment to create a more secure and scalable application.`,
    tech: [
      "C#",
      "JavaScript",
      "ASP.NET Core",
      ".NET",
      "Entity Framework",
      "Bootstrap",
      "PostgreSQL",
      "AJAX",
      "Azure",
      "Serilog",
    ],
    content:
      `This project builds on a foundational inventory management system 
      by introducing advanced features focused on security, reliability, 
      and user experience. User authentication and role-based authorization 
      were implemented using ASP.NET Core Identity, 
      supporting registration, login, password reset, and role-specific access. 
      Admin users can manage products and categories, 
      while regular users can browse inventory and place orders. 
      The user model was extended to support additional profile data. 
      The application includes a structured error-handling system, 
      with global exception handling, custom error pages (404 and 500), 
      and logging using Serilog to capture application-level issues. 
      This improves reliability while maintaining a user-friendly experience. 
      To enhance interactivity, AJAX was used to implement dynamic product search 
      and asynchronous form submissions, allowing parts of the interface to update without full page reloads. 
      Visual feedback such as loading indicators was included to improve usability. 
      The application was deployed to Microsoft Azure, demonstrating production readiness, 
      including environment configuration and secure handling of application settings. 
      This project demonstrates the ability to evolve a basic application 
      into a more complete, secure, and scalable system aligned with modern web development practices.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
  {
    title: "Microservices Backend with API Gateway",
    slug: "microservices-backend-with-api-gateway",
    description:
      `Developed a distributed backend system using Java Spring Boot microservices, 
      implementing API gateway routing, inter-service communication, and containerized deployment.`,
   tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "API Gateway",
      "Docker",
      "Testcontainers",
    ],
    content:
      `This project involves building a microservices-based backend system designed to support a larger application architecture. 
      The system is composed of multiple services, each responsible for a specific domain, 
      communicating through RESTful APIs. An API gateway was implemented to manage routing and 
      provide a unified entry point for client requests. This structure improves modularity and 
      allows services to be developed and scaled independently. The project also includes 
      containerized deployment using Docker and integration testing with TestContainers, 
      ensuring that services function correctly in a realistic environment. 
      Through this work, I developed an understanding of distributed system design, service communication, 
      and how backend architectures support scalable applications.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
  {
    title: "Object-Oriented Battle Game in Python",
    slug: "object-oriented-battle-game-in-python",
    description:
      `Added a custom game play feature to a command-line battle game in Python 
      using object-oriented programming, inheritance, exception handling, 
      and file persistence to create a reusable and expandable game structure.`,
    tech: [
      "Python",
      "OOP",
      "Inheritance",
      "File I/O",
      "Exception Handling",
    ],
    content:
      `This project involved building a Python-based battle game that simulates combat between a hero and a monster using 
      an object-oriented design. The goal was to refactor procedural game logic into a more structured and reusable architecture using 
      classes, inheritance, and encapsulation. I created separate Hero, Monster, and Character classes, 
      using inheritance to share core attributes such as combat strength and health points. 
      Complex getters and setters were implemented with @property decorators to manage private data safely and consistently. 
      The project also included exception handling for user input validation, ensuring that game choices were constrained 
      to valid values without crashing the program. File reading and writing were used to support save/load functionality, 
      including persistent tracking of game statistics such as monsters defeated across play sessions. 
      Additional work included using Python’s os and platform libraries to access system-level information, 
      reinforcing familiarity with built-in modules and environment-aware programming. 
      This project demonstrates a strong foundation in Python programming, object-oriented design, debugging, 
      and structuring code for maintainability and future expansion.`,
    videoUrl: "https://vento.so/view/57c32482-472b-49a9-b0fe-f68d8bcc521a/embed",
  },
]