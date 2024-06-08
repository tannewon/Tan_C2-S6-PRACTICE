import React, { useState } from "react";

function App() {
   /* You will need to use many state to keep the inut values and other needs */
  const [valueA, setA] = useState("");
  const [valueB, setB] = useState("");
  const [result, setResult] = useState("");
  const [isWarning, setIsWarning] = useState(false);

  function handleA(event) {
    setA(event.target.value);
  }

  function handleB(event) {
    setB(event.target.value);
  }

  function handleCompute() {
    if (isNaN(valueA) || isNaN(valueB)) {
      setResult("vui long nhap lai");
      setIsWarning(true);
    } else {
      const sum = parseFloat(valueA) + parseFloat(valueB);
      setResult(sum);
      setIsWarning(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={valueA} onChange={handleA} />

      <label>B =</label>
      <input type="text" value={valueB} onChange={handleB} />

      <label>A + B =</label>
      <input
        type="text"
        value={result}
        disabled
        style={{ color: isWarning ? "red" : "black" }}
      />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
