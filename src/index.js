import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/login.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/login" component={Login}></Route>
    <Route path="/" component={Home}></Route>
  </Router>
),
  document.getElementById('root')
);
registerServiceWorker();
