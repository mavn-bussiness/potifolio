const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        <img 
          src={project.image || '/api/placeholder/600/400'} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-primary-700 p-2 rounded-full hover:bg-primary-50 transition-colors duration-300"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-700 p-2 rounded-full hover:bg-primary-50 transition-colors duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;