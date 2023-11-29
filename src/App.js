import "./App.css";
import { useState } from "react";

function App() {
  const [allnumbers, setNumbers] = useState({
    //using object
    number1: 0,
    number2: 0,
  });

  const [sum, setSum] = useState(); //using usestate hook
  function handleInput(e, fieldName) {
    const value = parseInt(e.target.value);
    setNumbers((prevNumbers) => ({
      ...prevNumbers,
      [fieldName]: value,
    }));
  }

  function handleAdd() {
    setSum(allnumbers.number1 + allnumbers.number2);
  }
  function handleSubstract() {
    setSum(allnumbers.number1 + allnumbers.number2);
  }
  return (
    <div className="App">
      <h1>Calculate</h1>
      <input
        type="number"
        value={allnumbers.number1}
        onChange={(e) => handleInput(e, "number1")} // convert string to int
      ></input>
      <br />
      <input
        type="number"
        value={allnumbers.number2}
        onChange={(e) => handleInput(e, "number2")}
      ></input>
      <br />
      <button onClick={handleAdd}>ADD</button>

      <button onClick={handleSubstract}>Substract</button>
      <br />
      <span>Result is:{sum}</span>
    </div>
  );
}

export default App;
