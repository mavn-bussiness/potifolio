import SectionTitle from './SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="I'm excited to connect and discuss opportunities or projects."
        />
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Whether you have a project idea, internship opportunity, or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a 
              href="mailto:mpangamarvin2003@gmail.com" 
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 bg-primary-600 hover:bg-primary-700 text-white"
            >
              <i className="fas fa-envelope mr-2"></i> Email Me
            </a>
            <a 
              href="#" 
              download 
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 bg-white hover:bg-gray-50 text-primary-700 border border-gray-200"
            >
              <i className="fas fa-download mr-2"></i> Download Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/mavn-bussiness" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/mpanga-marvin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;