import "../css/index.css";
import "../css/App.css";
const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(props);
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
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
  );
};

export default ContactList;
