import React from "react";
import { useState } from "react";
//include images into your bundle

//create your first component
const Light = (props) => {
  let currentClass = "light";
  let currentStyles = {backgroundColor:props.thisColor}
  if (props.thisColor == props.currentColor) {
    currentClass = "active";
    currentStyles.boxShadow = "0px 0px 40px 20px " + props.thisColor
  }
  return (
    <div
      style={ currentStyles}
      className={currentClass}
      onClick={() => props.setColor(props.thisColor)}
    >
      {props.thisColor}
    </div>
  );
};

export default Light;
