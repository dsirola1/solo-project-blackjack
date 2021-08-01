import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Todos from "./Todos";

let hyperlink = "https://jsonplaceholder.typicode.com/todos";

const HomePage = () => {
  return (
    <>
      <div>This is from the awesome HomePage of this react app</div>
      <Link to="/Todos">Click here to go to todos</Link>
      <Link to="/Todo">Click here to go to todo</Link>
    </>
  );
};

export default HomePage;
