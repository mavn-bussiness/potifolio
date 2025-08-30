import Button from './Button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary-100 opacity-60 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-100 opacity-60 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-100 opacity-40 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <i className="fas fa-code mr-1"></i> Software Engineer | CyberSecurity and Cloud Computing Enthusiast
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">Marvin Mpanga</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              I build innovative web solutions and turn complex problems into elegant, user-friendly applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button 
                text="View My Work" 
                variant="primary" 
                icon="fas fa-eye"
                onClick={() => scrollToSection('#projects')}
              />
              <Button 
                text="Get In Touch" 
                icon="fas fa-paper-plane"
                onClick={() => scrollToSection('#contact')}
              />
            </div>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="https://github.com/mavn-bussiness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mpanga-marvin/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:mpangamarvin2003@gmail.com" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-300">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 relative">
            <div className="relative mx-auto w-80 h-80 mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-lg"></div>
              <div className="absolute inset-6 bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-full"></div>
              <div className="absolute inset-7 bg-white rounded-full flex items-center justify-center">
                <img src="/IMG_20230827_090504_006.jpg" alt="Marvin Mpanga" className="h-full w-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <a href="#about" className="text-gray-500 hover:text-primary-600 transition-colors duration-300">
            <i className="fas fa-chevron-down text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;