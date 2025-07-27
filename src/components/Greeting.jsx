// Greeting.js
import React from "react";

function Greeting(props) {
  return <h1 className="text-pink-500">Hello, {props.name} {props.surname}!</h1>;
}

export default Greeting;
