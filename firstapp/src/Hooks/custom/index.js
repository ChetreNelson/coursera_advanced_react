import React, { useState } from "react";
import useConsoleLog from "./useConsoleLog";

const CustomConsoleLogHook = () => {
  const [state, setState] = useState(0);
  const handleClick = () => {
    setState((prev) => prev + 1);
  };
  useConsoleLog(state);
  return (
    <div>
      <h1>state : {state}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default CustomConsoleLogHook;
