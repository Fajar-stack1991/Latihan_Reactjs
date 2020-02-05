import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//tag name
const element = <h1>Hello World</h1>;

//component
const element2 = <App nama="React App" />;

//React Fregment
const element3 = (
  <>
    <h1>Hello</h1>
    <h2>World</h2>
    <p>React is Amazing</p>
  </>
);

const domElement = document.getElementById("root");

ReactDOM.render(element2, domElement);
