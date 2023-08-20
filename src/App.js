import React, { useState, useRef } from "react";
import "./App.css";

const sportArray = [
  "Tennis",
  "Rugby",
  "Golf",
  "Netball",
  "Soccer",
  "Swimming",
  "Gymnastics",
  "Athletics",
  "Hockey",
  "Judo",
  "Wrestling",
  "Boxing",
  "Waterpolo",
  "Sailing",
  "Fishing",
  "Marathon",
  "Formula 1 Racing",
  "Tabletennis",
  "BasketBall",
];

function App() {
  const [sport, setSport] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const description1 = useRef();
  const description2 = useRef();
  const inputRef = useRef();

  const handleInput = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    if (sportArray.includes(inputValue)) {
      setSport(inputValue);
      setErrorMessage("");
      description1.current.innerHTML = "You have chosen ";
      description2.current.innerHTML =
        " and it is one of the sports on our list";
    } else {
      setSport("");
      setErrorMessage("Sorry, Your choice of sport is not on our list");
      description1.current.innerHTML = "";
      description2.current.innerHTML = "";
    }
  };

  const getRandomSport = () => {
    inputRef.current.value = sportArray[Math.floor(Math.random() * 19)];
  };

  return (
    <>
      <div className="input_container">
        <label>What sport do you like?</label>
        <input ref={inputRef} defaultValue={sport} onBlur={handleInput} />
        <h4>
          <span ref={description1}></span>
          {sport} <span ref={description2}></span>
        </h4>
      </div>
      <button onClick={getRandomSport}>Click to get a Random Sport</button>
      <div className="errors">
        <h4>{errorMessage}</h4>
      </div>
    </>
  );
}

export default App;
