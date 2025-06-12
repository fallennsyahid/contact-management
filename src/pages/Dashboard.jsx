import { useEffect, useState } from "react";
import ContactListCard from "../components/ContactListCard";
import CreateContactCard from "../components/CreateContactCard";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../config/config";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(db, "contacts"),
          where("uid", "==", user.uid)
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(data);
          setFilteredContacts(data);
        });

        return () => unsubscribe();
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const handleSearch = ({ name, email, phone }) => {
    const result = contacts.filter((contact) => {
      const matchesName =
        !name ||
        contact.first_name.toLowerCase().includes(name.toLowerCase()) ||
        contact.last_name.toLowerCase().includes(name.toLowerCase());

      const matchesEmail =
        !email || contact.email?.toLowerCase().includes(email.toLowerCase());

      const matchesPhone =
        !phone || contact.phone?.toLowerCase().includes(phone.toLowerCase());

      return matchesName && matchesEmail && matchesPhone;
    });

    setFilteredContacts(result);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fa-solid fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>
        <SearchForm onSearch={handleSearch} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <CreateContactCard />
          {filteredContacts.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 text-lg font-semibold mt-6">
              <i className="fas fa-circle-exclamation text-yellow-400 mr-2"></i>
              Contact Belum Tersedia
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <ContactListCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </main>
    </>
  );
}
