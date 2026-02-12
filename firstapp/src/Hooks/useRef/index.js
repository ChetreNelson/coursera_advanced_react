import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  const hanldeChange = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} onChange={hanldeChange} />
      <button onClick={handleClick}>Type something</button>
    </div>
  );
};

export default RefHook;
