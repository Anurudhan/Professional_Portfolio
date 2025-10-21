import React, { useState } from 'react';
import '../CSS/project.css';
import ProjectModal from './ProjectModal';

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "EduSprint - E-Learning Platform",
    category: "E-Learning",
    description: "Scalable e-learning platform with microservice architecture, supporting student, instructor, and admin roles.",
    longDescription: "EduSprint is a robust e-learning platform designed using microservice architecture and Clean Architecture principles. It supports three user roles: Student, Instructor, and Admin. Admins manage instructors by reviewing resumes and details, oversee users, control site banners, and organize course categories like Electronics, Web Development, and Mathematics. Instructors can create and manage lessons with videos, set up assessments, track student progress, and interact via real-time chat. Students can browse free and paid courses, purchase courses, view marks, track their learning journey, and receive certificates upon completion. Deployed with Docker and Kubernetes for performance and scalability.",
    technologies: [
      "Node.js", "Express.js", "React", "Tailwind CSS", "MongoDB",
      "Microservice Architecture", "Clean Architecture", "JWT",
      "Socket.io", "Docker", "Kubernetes", "Payment Gateway API",
      "Certificate Generation"
    ],
    media: [
      { type: "image", url: "/assets/eduSprint/landing.png" },
      { type: "video", url: "https://youtu.be/ZhWBkVixJE0" },
      { type: "video", url: "https://youtu.be/IXoIiL5AW5I" },
      { type: "video", url: "https://youtu.be/45XX3w7KIgQ" }
    ],
    liveDemo: "",
    github: "https://github.com/Anurudhan/EduSprint-server",
    featured: true
  },
  {
    id: 2,
    title: "TeeCraze - E-Commerce Web Application for T-Shirts",
    category: "E-Commerce",
    description: "Full-stack e-commerce platform dedicated to T-shirts with user and admin functionalities.",
    longDescription: "TeeCraze is a comprehensive e-commerce platform built using MVC architecture with EJS templates, focused on selling T-shirts. It supports two roles: User and Admin. Admins can manage users, add T-shirt categories, create/edit/soft-delete products, generate sales reports in PDF and Excel, view analytics, manage orders, create coupons, and handle homepage banners. Users can browse products with filters and search, add items to cart and wishlist, manage profiles and wallets, place orders with coupons, manage addresses, and choose payment methods including Cash on Delivery, Wallet, and Razorpay. Features a responsive Bootstrap UI and secure authentication.",
    technologies: [
      "Node.js", "Express.js", "MVC Architecture", "EJS Templates",
      "Bootstrap CSS", "MongoDB", "JWT", "Razorpay API", "ExcelJS", "PDFKit"
    ],
    media: [
    { type: "image", url: "/assets/teeCraze/landing.png" },
      { type: "image", url: "/assets/teeCraze/login.png" },
      { type: "video", url: "https://youtu.be/i_SBlG1d8i4" },
      { type: "video", url: "https://youtu.be/PoYeWbn950s" },
    ],
    liveDemo: "https://yumi-tees.onrender.com/",
    github: "https://github.com/Anurudhan/YUMI-TEES-ecommerce",
    featured: true
  },
  {
    id: 3,
    title: "Knowaria - Article Feed Platform",
    category: "Social Media",
    description: "Mini article feed platform for creating, editing, and managing articles with user interaction features.",
    longDescription: "Knowaria is a streamlined article feed platform where users can sign up, log in, and create, edit, and delete articles. It supports profile editing, liking and disliking articles, and blocking specific articles. Built using the repository pattern for clean code structure, it features a responsive Tailwind CSS frontend and secure JWT-based authentication.",
    technologies: [
      "Node.js", "Express.js", "React", "Tailwind CSS", "MongoDB",
      "Repository Pattern", "JWT"
    ],
     media: [
      { type: "image", url: "/assets/knowaria/landing.png" },
      { type: "video", url: "https://youtu.be/oPcM_QWk8vU" },
    ],
    liveDemo: "https://article-feed-client.vercel.app/",
    github: "https://github.com/Anurudhan/Article_Feed_RepoPattern_Server",
    featured: false
  },
  {
    id: 4,
    title: "Netflix Clone",
    category: "Streaming",
    description: "Streaming platform clone with movie browsing and video streaming capabilities.",
    longDescription: "A Netflix clone replicating core streaming platform features, including user authentication, movie browsing, and video streaming. It leverages the TMDB API for fetching movie data and Firebase for secure authentication. The platform is designed with a clean and responsive Tailwind CSS interface, providing a seamless user experience.",
    technologies: [
      "React", "Redux", "Firebase", "TMDB API", "Tailwind CSS"
    ],
     media: [
      { type: "image", url: "/assets/netFlix/front.png" },
      { type: "video", url: "https://youtu.be/49iFRT86BJQ" },
      { type: "image", url: "/assets/netFlix/signin.png" },
      { type: "image", url: "/assets/netFlix/signup.png" }
      
    ],
    liveDemo: "",
    github: "https://github.com/Anurudhan/Netflix-Clone",
    featured: false
  },
  {
    id: 5,
    title: "OLX Clone",
    category: "Marketplace",
    description: "Online marketplace platform for listing and browsing products with user authentication.",
    longDescription: "An OLX clone platform enabling users to list products for sale, browse available products, and contact sellers. It includes user authentication, image uploads via Cloudinary API, product categories, and robust search and filter functionality. Built with a responsive Tailwind CSS frontend and secure JWT-based authentication.",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary API"
    ],
     media: [
      { type: "image", url: "/assets/OLX/first.png" },
      { type: "image", url: "/assets/OLX/landing.png" },
      { type: "image", url: "/assets/OLX/login.png" },
      { type: "image", url: "/assets/OLX/signup.png" },
      { type: "image", url: "/assets/OLX/sell.png" },
    ],
    liveDemo: "",
    github: "https://github.com/Anurudhan/OLX-CLONE-REACT",
    featured: false
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
 

  const openModal = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div id="projects">
      <div className="projects-container">
        {/* Section Title */}
        <h1 className="section-title">
          <span>Projects</span>
        </h1>

        {/* Terminal Header */}
        <div className="terminal-header">
          <span className="terminal-text">{'>'} LOADING PROJECTS DATABASE...</span>
          <span className="terminal-cursor">_</span>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="project-image-container">
                <img 
                  src={project.media[0].url} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-details">VIEW DETAILS</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">FEATURED</div>
                )}
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Glitch Border Effect */}
              <div className="card-border"></div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {projectsData.length === 0 && (
          <div className="no-results">
            <p>{'>'} NO PROJECTS FOUND IN THIS CATEGORY</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      {/* Background Effects */}
      <div className="grid-background"></div>
    </div>
  );
};

export default Projects;