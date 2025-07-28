import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial count = 0

  return (
    <div style={{ backgroundColor: "pink", padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default  Counter;
