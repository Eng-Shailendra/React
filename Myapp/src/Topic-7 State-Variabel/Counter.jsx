import React, { use, useState } from "react";

const Counter = () => {
  //   const handleClic = () => {
  //     console.log("clicked...");
  //   };

  //   let count = 0;
  //   const handleClic = () => {
  //     count++;
  //     console.log(count);
  //   };

  //! Special type state variable
  //   [initalvalue, updater] = useState();
  const [count, setCount] = useState(0);
  const handleClic = () => {
    console.log(count);
    setCount(count + 1);
  };

  return (
    <>
      <div id="counter">
        <h1>Count : {count}</h1>
        <button type="button" onClick={handleClic}>
          Add
        </button>
      </div>
    </>
  );
};

export default Counter;
