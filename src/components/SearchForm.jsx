import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name.replace("search_", "")]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    onSearch({ name: "", email: "", phone: "" });
  };

  const [isVisible, setIsVisible] = useState(false);
  const searchFormRef = useRef(null);

  useEffect(() => {
    const content = searchFormRef.current;
    if (isVisible) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      content.style.marginTop = "1rem";
    } else {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
      content.style.marginTop = "0";
    }
  }, [isVisible]);

  return (
    <div className="bg-gray-800/80 rounded-xl shadow-lg border border-gray-700 p-6 mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <i className="fa-solid fa-search text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-semibold text-white">Search Contacts</h1>
        </div>
        <button
          type="button"
          id="toggleSearchForm"
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
        >
          <i
            className={`fa-solid 
              ${
                isVisible ? "fa-chevron-up" : "fa-chevron-down"
              } text-lg font-semibold`}
            id="toggleSearchIcon"
          ></i>
        </button>
      </div>
      <div
        id="searchFormContent"
        ref={searchFormRef}
        className="mt-4"
        style={{
          maxHeight: "0px",
          opacity: 0,
          marginTop: 0,
          overflow: "hidden",
          transition:
            "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin 0.3s ease-in-out",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            <div>
              <label
                htmlFor="search_name"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-user text-gray-500"></i>
                </div>
                <input
                  type="text"
                  id="search_name"
                  name="search_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Search by name"
                  className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="search_email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-envelope text-gray-500"></i>
                </div>
                <input
                  type="email"
                  id="search_email"
                  name="search_email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Search by email"
                  className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="search_phone"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-phone text-gray-500"></i>
                </div>
                <input
                  type="text"
                  id="search_phone"
                  name="search_phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Search by name"
                  className="w-full pl-10 pr-3 py-3 bg-gray-700/50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-end mr-2 mb-2 gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center cursor-pointer"
            >
              <i className="fa-solid fa-rotate-left mr-2"></i>
              Reset
            </button>
            <Button
              type="submit"
              icon="fa-search"
              text="Search"
              btnColor="bg-gradient"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
