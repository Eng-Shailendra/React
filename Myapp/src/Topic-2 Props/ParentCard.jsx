import Card from "./Card";

const Parent = () => {
  const player1 = {
    name: "Rohit Sharma",
    age: 38,
    skill: "Batting",
    address: {
      city: "Mumbai",
      country: "India",
    },
  };
  const player2 = {
    name: "Virat kohli",
    age: 39,
    skill: "Batting",
    address: {
      city: "Delhi",
      country: "India",
    },
  };
  const player3 = {
    name: "Hardik pandya",
    age: 30,
    skill: "Batting",
    address: {
      city: "Mumbai",
      country: "India",
    },
  };
  return (
    <div className="Parent Component">
      {/* this is paretn card commponent */}
      <Card {...player1} />
      <Card {...player2} />
      <Card {...player3} />
    </div>
  );
};

export default Parent;
