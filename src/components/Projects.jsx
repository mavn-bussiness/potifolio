import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      description: "A comprehensive web-based system to manage school operations, including student records, attendance, and fee management.",
      image: "/api/placeholder/600/400",
      technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
      live: "https://example.com/school-system",
      github: "https://github.com/mpanga-marvin/school-management-system",
    },
    {
      title: "Authentication System",
      description: "A secure authentication system with user registration, login, password reset, and role-based access control.",
      image: "/api/placeholder/600/400",
      technologies: ["PHP", "JavaScript", "MySQL", "Security"],
      live: "https://example.com/auth-system",
      github: "https://github.com/mpanga-marvin/auth-system",
    },
    {
      title: "E-commerce Dashboard",
      description: "An admin dashboard for managing products, orders, and customers for an e-commerce platform.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Laravel", "Tailwind CSS", "Chart.js"],
      live: "https://example.com/e-commerce",
      github: "https://github.com/mpanga-marvin/e-commerce-dashboard",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Recent Projects" 
          subtitle="Here are some of my recent work that showcases my skills and experience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/marvin-bussiness" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg bg-white hover:bg-gray-50 text-primary-700 border border-gray-200"
          >
            <i className="fab fa-github mr-2"></i> View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;