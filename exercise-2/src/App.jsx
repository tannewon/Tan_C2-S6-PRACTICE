
import React, { useState } from "react";

function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [text, setText] = useState("");

  function handleKeyPress(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }
 /* You will need a function to handle a key pressed on the first input and update the state*/
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text!</label>
      <input type="text" onChange={handleKeyPress} />

      <p>
        <label>Here is the text in upper case</label>
        <input type="text" value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;
