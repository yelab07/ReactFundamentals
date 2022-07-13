import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  const addLikes = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes:{likes} </p>
      <button
        className="contact-remove"
        // onClick={() => {
        //   console.log("button clicked");
        // }}
        onClick={() => addLikes()}
      >
        Like
      </button>
    </div>
  );
};

export default App;
