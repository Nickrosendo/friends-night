import React from "react";
import { Router, Route, browserHistory } from "react-router";

import "./css/App.css";

import Login from "./components/Login/Login.js";
import Home from "./components/Home/Home.js";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
