import { useEffect, useState } from "react";
import ContactListCard from "../components/ContactListCard";
import CreateContactCard from "../components/CreateContactCard";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/config";

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contacts"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(data);
    });

    return () => unsubscribe();
  });

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex items-center mb-6">
          <i className="fa-solid fa-users text-blue-400 text-2xl mr-3"></i>
          <h1 className="text-2xl font-bold text-white">My Contacts</h1>
        </div>
        <SearchForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <CreateContactCard />
          {contacts.map((contact) => (
            <ContactListCard key={contact.id} contact={contact} />
          ))}
        </div>
      </main>
    </>
  );
}
