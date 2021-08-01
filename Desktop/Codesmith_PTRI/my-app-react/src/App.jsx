import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Todo from "./Todo";
import Todos from "./Todos";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Todos">
            <Todos />
          </Route>
          <Route exact path="/Todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
