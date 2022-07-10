import "./App.css";
const contacts = [
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
];
const ContactList = () => {
  const contacts = [{ name: "abebe" }, { name: "kebede" }, { name: "ayalew" }];
  return (
    <ol>
      {contacts.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ol>
  );
};
function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

// export default App;
