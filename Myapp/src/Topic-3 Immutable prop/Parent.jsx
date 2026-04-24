import Child from "./Child";

const Parent3 = () => {
  const data = {
    name: "Qspider",
  };
  return (
    <>
      <Child name={data.name} />
    </>
  );
};

export default Parent3;
