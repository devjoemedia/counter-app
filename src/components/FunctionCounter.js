import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 5);
  };

  const decrementCounter = () => {
    setCount(count - 5);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={incrementCounter}>Add 5</button>
        <button onClick={decrementCounter}>Subtract 5</button>
      </div>
    </div>
  );
};

export default FunctionCounter;
