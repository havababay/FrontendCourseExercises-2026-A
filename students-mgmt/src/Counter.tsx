import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect: Count has changed: " + count);
  }, [count]);
  useEffect(() => {
    console.log("Effect: Component mounted");
  }, []);

  function increment() {
    setCount(count + 1);
    console.log("Increment button clicked: " + (count + 1));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <div>Count: {count}</div>
      <div>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("Decrement button clicked: " + (count - 1));
          }}
          disabled={count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
