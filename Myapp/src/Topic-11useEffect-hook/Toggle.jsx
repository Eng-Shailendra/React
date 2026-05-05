import { useEffect } from "react";

const Toggle = () => {
  const [login, setLogin] = useEffect(false);
  useEffect(() => {}, []);
  
  return (  
    <>
      <div>
        <button>Click</button>
      </div>
    </>
  );
};
