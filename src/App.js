import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <header className="friends-header">
      
         <form className="search-menu-w40 search-center">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            
          </form>
         <img src={logo} className="App-logo" alt="logo" />
      </header>  
      
    );
  }
}

export default App;
