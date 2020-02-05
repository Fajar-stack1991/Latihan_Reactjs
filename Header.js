import React from "react";
import PropsTypes from "prop-types";

function Header(props){

  return  (
    <>
    <h1>{props.children}</h1>
    </>
  );
}

Header.protoTypes = {
  children: PropsTypes.string.isRequired
}

export deafult App;