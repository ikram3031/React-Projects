import { useState } from "react";

const counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1> COunter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </>
  );
};

export default counter;
