import React, { useEffect, useReducer, useState } from "react";
import "./styles.css";
import ContextHook from "./contextHook";

export default function App() {
  const [count, setCount] = useState(0);

  const initialState = { tickCount: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { tickCount: state.tickCount + 1 };
      case "decrement":
        return { tickCount: state.tickCount - 1 };
      default:
        return "Error";
    }
  }
  const [state, setTickCount] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log("useFeect");
    let a = document.createElement("p");
    a.innerHTML = `You clicked ${count} times`;
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <ContextHook />
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <button onClick={() => setTickCount({ type: "increment" })}>
        Ticker Increement
      </button>
      <button onClick={() => setTickCount({ type: "decrement" })}>
        Ticker Decrement
      </button>
      <span>{state.tickCount}</span>
    </div>
  );
}
