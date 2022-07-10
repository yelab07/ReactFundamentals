import "../css/App.css";
import "../css/index.css";
const ContactList = (props) => {
  console.log(props);
  return (
    <ol className="contact-list">
      {props.contacts.map((item) => (
        <li key={item.name} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${item.avatarURL})` }}
          ></div>
          <div className="contact-details">
            <p>{item.name}</p>
            <p>{item.handle}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ContactList;
