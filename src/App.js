import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <header className="friends-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="friends-header-item-group nav nav-pills">
          <li role="presentation" className="active"><a >Home</a></li>
          <li role="presentation"><a >Profile</a></li>
          <li role="presentation"><a >Messages</a></li>
        </ul>
      
        
      </header>
    );
  }
}

export default App;
