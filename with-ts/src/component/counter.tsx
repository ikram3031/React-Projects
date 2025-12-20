import { useState, useContext, type FC } from "react";
import { MyContext } from "../context/MyContext";

const counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    useContext(MyContext),
    (
      <>
        <h1> COunter</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        {/* <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button> */}
      </>
    )
  );
};

export default counter;
