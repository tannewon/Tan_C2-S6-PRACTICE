import React, { useState } from "react";
import "./index.css"; // Ensure you have the CSS classes defined here

function App() {
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    return isRaining ? "Rain Time" : "Sun Time";
  }

  function getBackgroundColor() {
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
