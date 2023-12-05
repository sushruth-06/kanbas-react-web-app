import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success mx-1" onClick={() => setCount(count + 1)}>Up</button>
      <button className="btn btn-danger mx-1" onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;