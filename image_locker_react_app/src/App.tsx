import { Router, Route, Switch } from "wouter";
import React from "react";
import ReactDOM from "react-dom";

import Home from "./Home";
import Lock from "./Lock";
import Login from "./Login";
import Register from "./Register";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/lock" component={Lock} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
