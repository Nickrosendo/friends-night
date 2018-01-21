import React from "react";
import { Router, Route, browserHistory } from "react-router";

import Login from "./Login/Login.js";
import Home from "./Home/Home.js";

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
