// import React, { useState, useRef, useEffect } from "react";

export default function SearchForm() {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const searchFormRef = useRef(null);

  //   useEffect(() => {
  //     const content = searchFormRef.current;
  //     if (isVisible) {
  //       content.style.maxHeight = content.scrollHeight + "px";
  //       content.style.opacity = "1";
  //       content.style.marginTop = "1rem";
  //     } else {
  //       content.style.maxHeight = "0px";
  //       content.style.opacity = "0";
  //       content.style.marginTop = "0";
  //     }
  //   }, [isVisible]);

  return (
    <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg border border-gray-700 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <i className="fa-solid fa-search text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-semibold text-white">Search Contacts</h1>
        </div>
        <button
          type="button"
          id="toggleSearchForm"
          className="text-gray-300 cursor-pointer hover:text-white hover:bg-gray-700 p-2 rounded-full focus:outline-none transition-all duration-200"
        >
          <i
            className="fa-solid fa-chevron-down text-lg font-semibold"
            id="toggleSearchIcon"
          ></i>
        </button>
      </div>
      <div id="searchFormContent" className="mt-4"></div>
    </div>
  );
}
