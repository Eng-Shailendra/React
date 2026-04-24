const Card = ({ name, age, team, skill }) => {
  //   const user = {
  //     fullname: "Virat Kohli",
  //     age: 36,
  //   };

  // console.log("props : ", props);

  return (
    <>
      <h4>Username : {name}</h4>
      <h4>Age : {age} </h4>
      <h4>Team : {team}</h4>
      <h4>Skill {skill}</h4>
    </>
  );
};

export default Card;
