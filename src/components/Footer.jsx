const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-gray-300 mb-4">
          Designed & Built by Marvin Mpanga with <i className="fas fa-heart text-red-500 mx-1"></i> and Code
        </p>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Marvin Mpanga. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;