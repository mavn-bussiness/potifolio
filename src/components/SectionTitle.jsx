const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-primary-500 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;