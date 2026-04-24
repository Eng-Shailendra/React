import React from "react";
import SubChild from "./SubChild";

const Child = (props) => {
  console.log(props);

  return (
    <>
      <h2>Child Component :{props.name}</h2>
      <SubChild name={props.name} />
    </>
  );
};

export default Child;
