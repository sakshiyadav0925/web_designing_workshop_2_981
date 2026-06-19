import React, { useState } from "react";

function CounterApp() {
  // Step 1: Create state
  const [count, setCount] = useState(0);

  // Step 2: Event handlers
  const increaseScore = () => {
    setCount(count + 1);
  };
 // step 3:function to decrease count 
  const decreaseScore = () => {
    setCount(count - 1);
  };
//reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>

      //* Display count *//
      <h2>{count}</h2>

      /* Buttons */
      <button onClick={increaseScore}>Increase Count</button>
      <button onClick={decreaseScore} style={{ margin: "10px" }}>Decrease Count</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;