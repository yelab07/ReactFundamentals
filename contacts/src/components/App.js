import "../css/App.css";
import ContactList from "./ContactList";
import { useState } from "react";
const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter((item) => item.id !== contact.id));
  };
  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ]);

  return (
    <div>
      <ContactList contacts={contacts} onDeleteContact={removeContact} />
    </div>
  );
};

export default App;
