import React from "react";
import { Router, Route, browserHistory } from "react-router";

import Login from "./Login/Login.js";
import Home from "./Home/Home.js";
// import auth from "./services/auth.js";

const verificaToken = (nextState, replace) => {
  if(localStorage.getItem('auth-token') === null) {
    replace("/login?msg=Acesso Negado");
  }
}

const verificaLogado = (nextState, replace) => {
  if(localStorage.getItem('auth-token') !== null) {
    replace("/home");
  }
}

// const verificaFacebookLogin = (nextState, replace) => {
//   auth.getLoginStatus();
// }

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/login" component={Login} onEnter={verificaLogado}/>
        <Route path="/" component={Login} onEnter={verificaToken}/>
        <Route path="/home" component={Home} onEnter={verificaToken} />
      </Router>
    );
  }
}

export default App;
