import { useState } from "react";


//arrow function
const Recap = () => {
    // state
  const [color, setColor] = useState("blue");

  return <div className="container">{color}</div>;
};

export default Recap;
