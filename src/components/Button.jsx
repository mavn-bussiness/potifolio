const Button = ({ text, href, variant = 'secondary', icon, onClick }) => {
  const baseClasses = "inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1";
  const variantClasses = variant === 'primary' 
    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
    : 'bg-white hover:bg-gray-50 text-primary-700 border border-gray-200';

  const content = (
    <>
      {icon && <i className={`mr-2 fa-fw ${icon}`}></i>}
      {text}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {content}
    </button>
  );
};

export default Button;