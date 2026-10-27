
import {  useEffect } from "react";
import { useState } from "react";

const DocumentTitleCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Document Title Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={increaseCount}>+1</button>
      <button onClick={decreaseCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default DocumentTitleCounter;
