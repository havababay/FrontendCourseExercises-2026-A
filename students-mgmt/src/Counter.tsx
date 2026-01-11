import { useEffect, useState } from "react";
import "./Counter.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Title from "./Title";

function Counter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <div className="counter">
     {isMobile ? "mobile" : "desktop"}
      <div className="counter-value">
       <Title text={`Count: ${count}`} level={1}></Title>
      </div>
      <div className="counter-buttons">
        <button className="counter-btn" onClick={increment}>
          Increment
        </button>
        <button
          className="counter-btn"
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
