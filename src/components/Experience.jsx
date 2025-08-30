import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Reanets, Uganda",
      duration: "June 2024 - Present",
      description: "Developed scalable web applications using Laravel and JavaScript, collaborating with a team to deliver user-focused solutions.",
      skills: ["Laravel", "JavaScript", "MySQL", "Team Collaboration"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and work experience in the tech industry."
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative mb-16 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-10 md:text-right md:-left-2' : 'md:pl-10 md:left-2'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute md:left-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary-600 border-4 border-primary-100 z-10"></div>
                
                {/* Content */}
                <div className="ml-10 md:ml-0 p-6 bg-white rounded-xl shadow-md mb-16 relative">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-3">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <h4 className="text-primary-600 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Education</h3>
          <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="bg-primary-100 text-primary-700 p-4 rounded-lg inline-block">
                  <i className="fas fa-graduation-cap text-3xl"></i>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
                <p className="text-primary-600 mb-2">Makerere University</p>
                <p className="text-gray-500 mb-4">2023 - Present</p>
                <p className="text-gray-600">
                  Studying core computer science and software engineering principles with a focus on web and mobile application development, database systems, and software design patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;