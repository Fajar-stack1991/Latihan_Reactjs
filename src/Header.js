import React from "react";
import PropsTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropsTypes.string.isRequired
};

export default Header;
