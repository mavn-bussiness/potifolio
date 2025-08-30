import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, passion for software engineering, and what drives me."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary-700">
              <i className="fas fa-user-graduate mr-2"></i> Education & Background
            </h3>
            <p className="text-gray-600 mb-4">
              I'm a second-year Software Engineering student at Makerere University, passionate about building innovative web solutions. My academic journey has equipped me with strong theoretical foundations in computer science and software development methodologies.
            </p>
            <p className="text-gray-600">
              Beyond academics, I'm committed to continuous learning and staying updated with the latest technologies and industry trends.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-primary-700">
              <i className="fas fa-rocket mr-2"></i> What I Do
            </h3>
            <ul className="space-y-3">
              {[
                "Develop responsive and user-friendly web applications",
                "Build robust backend systems with Laravel and MySQL",
                "Create interactive user interfaces with JavaScript and Vue.js",
                "Design and implement secure authentication systems"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mr-3">
                    <i className="fas fa-check text-sm"></i>
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4">
              <h3 className="text-2xl font-bold mb-4">Looking for a passionate developer for your next project?</h3>
              <p className="text-primary-100 mb-6 md:mb-0">
                I'm currently available for freelance work and internship opportunities. Let's collaborate to bring your ideas to life!
              </p>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-right">
              <a href="#contact" className="inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;