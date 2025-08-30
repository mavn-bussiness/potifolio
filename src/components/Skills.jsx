import React from 'react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const frontendSkills = ["HTML5", "CSS3", "JavaScript", "Vue.js", "Tailwind CSS", "Responsive Design"];
  const backendSkills = ["PHP", "Laravel", "Python", "MySQL", "RESTful APIs", "Database Design", "Java"];
  const otherSkills = ["Git", "Figma", "VS Code", "Agile", "UI/UX", "Problem Solving", "Jira"];
  
  const skillLevels = [
    { name: "JavaScript", level: 85 },
    { name: "Vue.js", level: 50 },
    { name: "PHP/Laravel", level: 80 },
    { name: "Java", level: 70 },
    { name: "UI/UX Design", level: 65 },
    { name: "Database Management", level: 90 },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: "fas fa-code",
      skills: frontendSkills
    },
    {
      title: "Backend Development", 
      description: "Creating robust and scalable server-side applications.",
      icon: "fas fa-server",
      skills: backendSkills
    },
    {
      title: "Tools & Others",
      description: "Supporting technologies and methodologies I use.",
      icon: "fas fa-tools", 
      skills: otherSkills
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="My Skills" 
          subtitle="I specialize in these technologies and tools to build modern web applications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <i className={`${category.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-6">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillLevels.map((skill, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;