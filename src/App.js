import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import profileLogo from './img/Rosendo.jpg';

class App extends Component {
  render() {
    return (
      <header className="friends-header">
        <form className="search-menu-w40 search-center">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>

        </form>

        <div className="header-profile">
          <img src={profileLogo} className="header-profile-img img-circle" alt="profileIMG" />
          <div className="button-group">
            <button type="button" className="btn btn-profile-header dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nicolas Rosendo <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li role="separator" className="divider"></li>
              <li>Separated link</li>
            </ul>

          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    );
  }
}

export default App;
