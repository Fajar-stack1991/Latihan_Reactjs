import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function App(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <>
      <header>{props.nama}</header>
      <p>React is Awesome</p>
      <p>Counter: {count}</p>
      <button onClick={e => setCount(count + 1)}>Berhitung</button>
    </>
  );
}

App.PropTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
