// Greeting.js

import React, { Fragment } from "react";
function Greeting(props) {
  return (
    <>
      <h1 className="text-pink-500">
        Hello, {props.name} {props.surname}!
      </h1>
      <h2>this text was not there</h2>
    </>
  );
}

export default Greeting;
