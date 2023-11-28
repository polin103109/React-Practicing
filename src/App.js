import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [sum, setSum] = useState(); //using usestate hook
  const refelement = useRef(""); //for dom manipulation
  useEffect(() => {
    console.log("component mounted");
  }, [number1]); //using useEffect

  function handleAdd() {
    setSum(number1 + number2);

    refelement.current.style.color = "red"; // Accessing DOM styles using useRef
  }
  return (
    <div className="App">
      <h1>Calculate</h1>
      <input
        ref={refelement}
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
      <button onClick={handleAdd}>ADD</button>
      <br />
      <span>Result is:{sum}</span>
    </div>
  );
}

export default App;
