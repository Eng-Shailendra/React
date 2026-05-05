// import React, { useState } from "react";
// import Login from "./Login";
// const Home = () => {
//   const [login, setLogin] = useState(true);

//   if (!login) {
//     <Login />;
//   }
//   return (
//     <div id="home">
//       <h1>HOME page</h1>
//       <button onClick={() => setLogin(!login)}>Login</button>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Login from "./Login";

export const Home = () => {
  const [login, setLogin] = useState(false);
  const handletask = () => {
    setLogin(!login);
  };
  return (
    <>
      {login ? (
        <div>
          <h1>Home hello guys bhaiya jiii</h1>
        </div>
      ) : (
        <div>
          <h1>Login page</h1>
        </div>
      )}
      <button onClick={handletask}>Button</button>
    </>
  );
};

export default Home;
