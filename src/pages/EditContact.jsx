import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/config";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, "contacts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContact(docSnap.data());
        } else {
          toast.error("No such contact found");
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching contact: " + error);
        toast.error("Error fetching contact data");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating contact: " + error);
      toast.error("Error updating contact");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <Link
            to="/dashboard"
            className="text-blue-400 hover:text-blue-300 mr-4 flex items-center transition-colors duration-200"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Contacts
          </Link>
          <h1 className="text-2xl text-white font-bold flex items-center">
            <i className="fa-solid fa-user-edit text-blue-400 mr-3"></i>
            Edit Contact
          </h1>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden max-w-2xl mx-auto">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-5">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user-tag text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      placeholder="Enter first name"
                      value={contact.first_name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i className="fa-solid fa-user-tag text-gray-500"></i>
                    </div>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      placeholder="Enter last name"
                      value={contact.last_name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
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
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
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
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    value={contact.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  to="/dashboard"
                  className="px-5 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md"
                >
                  <i className="fas fa-times mr-2"></i> Cancel
                </Link>
                <button
                  type="submit"
                  className="px-5 py-3 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center cursor-pointer"
                >
                  <i class="fas fa-save mr-2"></i> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EditContact;
