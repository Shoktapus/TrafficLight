import React from "react";
import {useState } from 'react';
//include images into your bundle


//create your first component
const Light = (props) => {
    let currentClass = "light"
    if (props.thisColor == props.currentColor) {
        currentClass = "active"
    }
	return (
		<div className={currentClass} onClick={() => props.setColor(props.thisColor)}>{props.thisColor}</div>
        
	);
};

export default Light;
