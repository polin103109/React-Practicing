import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0); //using usestate hook
  useEffect(() => {
    console.log("component mounted");
  }, [count]); //using useEffect

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>REACTTTT</h1>

      <button onClick={handleClick}>Click here</button>
      <br />
      <span>{count}</span>
    </div>
  );
}

export default App;
