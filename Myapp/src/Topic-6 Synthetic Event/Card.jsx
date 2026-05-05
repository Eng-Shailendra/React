import React from "react";

const Card = () => {
  const changeText = (e) => {
    console.log("clicked......"+ e);
  };
  return (
    <div>
      <h2>Card Component </h2>
      <button onClick={changeText}>Click</button>
    </div>
  );
};

export default Card;
