import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ShoppingList from "./Components/ShoppingList";

const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <ShoppingList
        value={value}
        items={items}
        handleChange={handleChange}
        addItem={addItem}
        deleteLastItem={deleteLastItem}
      />
    </div>
  );
};

export default App;
