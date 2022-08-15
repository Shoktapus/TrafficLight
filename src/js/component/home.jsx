import React from "react";

//include images into your bundle

import Light from "./light.jsx";
import { useState } from "react";
//create your first component
const Home = () => {
  const [color, setColor] = useState("red");
  return (
    <div className="lightBox">
      <div className="container">
        <Light thisColor="red" currentColor={color} setColor={setColor} />
        <Light thisColor="yellow" currentColor={color} setColor={setColor} />
        <Light thisColor="green" currentColor={color} setColor={setColor} />
      </div>
    </div>
  );
};

export default Home;
