const subChild = (props) => {
  console.log(props);
  return (
    <>
      <h3>Sub Child Component</h3>
      <p>{props.name}</p>
    </>
  );
};

export default subChild;
