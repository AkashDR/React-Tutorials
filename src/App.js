import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const decreamentHandle = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  const increamentHandle = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={decreamentHandle}>-</button>
      <h1>{count}</h1>
      <button onClick={increamentHandle}>+</button>
    </div>
  );
}
