import "./App.css";
import { useState } from "react";

function App() {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [sum, setSum] = useState(); //using usestate hook

  function handleAdd() {
    setSum(number1 + number2);
  }
  function handleSubstract() {
    setSum(number1 - number2);
  }
  return (
    <div className="App">
      <h1>Calculate</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setnumber1(parseInt(e.target.value))} // convert string to int
      ></input>
      <br />
      <input
        type="number"
        value={number2}
        onChange={(e) => setnumber2(parseInt(e.target.value))}
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
