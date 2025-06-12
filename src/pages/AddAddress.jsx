import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/config";
import toast from "react-hot-toast";

const AddAddress = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    street: "",
    city: "",
    province: "",
    country: "",
    postal_code: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "address"), form);
      toast.success("Add address successfully!");
      navigate("/detail-contact");
    } catch (err) {
      console.error("Failed to add address: " + err);
      toast.error("Failed to add address");
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/detail-contact"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fa-solid fa-arrow-left text-blue-400 mr-2"></i>
            Back to Contact Details
          </Link>
          <h1 className="text-white font-bold text-2xl flex items-center">
            <i className="fa-solid fa-plus-circle text-blue-400 mr-3"></i> Add
            New Address
          </h1>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            {/* Contact Information */}
            <div className="mb-6 pb-6 border-b border-gray-700">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mr-4 shadow-md">
                  <i className="fa-solid fa-user text-white"></i>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">John Doe</h1>
                  <p className="text-gray-300 text-sm">
                    john.example@gmail.com &bull; +62 123456789
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="street"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Street
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-road text-gray-500"></i>
                  </div>

                  <input
                    type="text"
                    name="street"
                    id="street"
                    onChange={handleChange}
                    value={form.street}
                    placeholder="Enter street address"
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-city text-gray-500"></i>
                    </div>

                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={handleChange}
                      value={form.city}
                      placeholder="Enter city"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="province"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Province/State
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-map text-gray-500"></i>
                    </div>

                    <input
                      type="text"
                      name="province"
                      id="province"
                      onChange={handleChange}
                      value={form.province}
                      placeholder="Enter province or state"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-flag text-gray-500"></i>
                    </div>

                    <input
                      type="text"
                      name="country"
                      id="country"
                      onChange={handleChange}
                      value={form.country}
                      placeholder="Enter country"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="postal_code"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Postal Code
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-envelopes-bulk text-gray-500"></i>
                    </div>

                    <input
                      type="text"
                      name="postal_code"
                      id="postal_code"
                      onChange={handleChange}
                      value={form.postal_code}
                      placeholder="Enter postal code"
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  to="/detail-contact"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <Button
                  type="submit"
                  icon="fa-plus-circle"
                  text="Add Address"
                  btnColor="bg-gradient"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddAddress;
