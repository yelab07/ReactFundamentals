import "../css/index.css";
import "../css/App.css";

import { PropTypes } from "prop-types";
import { useState } from "react";
const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(props);
  const [inputText, setInputText] = useState("");

  const handleInputText = (e) => {
    //trim() removes white space from left or right
    setInputText(e.target.value.trim());
  };

  const showContact =
    inputText === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(inputText.toLowerCase())
        );

  console.log(inputText);
  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        {/* With Controlled Components, our form state lives inside of the component.
       Because of this, we can easily update our UI based on that form state. */}
        <input
          className="search-contacts"
          type="text"
          // our event listner is onchange here
          onChange={handleInputText}
          placeholder="Search Contacts"
          value={inputText}
        />
      </div>

      {showContact.length !== contacts.length && (
        <div className="showing-contacts">
          <span>
            Now showing {showContact.length} of {contacts.length}
          </span>
          <button onClick={() => setInputText("")}>Show all</button>
        </div>
      )}

      <ol className="contact-list">
        {showContact.map((contact) => (
          <li key={contact.name} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            ></div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              className="contact-remove"
              // onClick={() => {
              //   console.log("button clicked");
              // }}
              onClick={() => onDeleteContact(contact)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
