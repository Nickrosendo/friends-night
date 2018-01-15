import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./Header.css";
import logo from '../../logo.svg';
import profileLogo from '../../img/Rosendo.jpg';


class Header extends React.Component {
  
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <header className="friends-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form className="search-menu-w40 search-center">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </form>
          <div className="header-profile">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret className="btn-profile px-1 py-0">
                <img src={profileLogo} className="header-profile-img rounded-circle img-fluid" alt="profileIMG" />
                <span className="ml-1" style={{ border: "1px solid #fff;"}}>Nicolas Rosendo</span>
              </DropdownToggle>
              <DropdownMenu>                
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem>Favoritos</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sair</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </header>
    );
  }
}

export default Header;
