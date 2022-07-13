import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  // const [value, setValue] = useState("");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const [inputText, setInputText] = useState("Your text will show here ");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          // value={inputText}
          onChange={(e) => setInputText(e.target.value.trim())}
        />
        <p className="echo">Echo:</p>
        <p>{inputText}</p>
      </div>
    </div>
  );
};

export default App;
