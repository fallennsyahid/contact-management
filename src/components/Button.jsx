const Button = ({ type, text, icon, onClick, btnColor }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-5 py-3 ${btnColor} text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center cursor-pointer`}
    >
      <i className={`fas ${icon} mr-2`}></i> {text}
    </button>
  );
};

export default Button;
