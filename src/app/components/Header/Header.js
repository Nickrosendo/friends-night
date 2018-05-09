import React from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'
import { browserHistory } from 'react-router'

import Auth from '../../services/auth'
import './Header.scss'
import logo from '../../../fn-logo.svg'
import profileLogo from '../../../img/Rosendo.jpg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  handleHome() {
    browserHistory.push('/home')
  }

  handlePrivacy() {
    browserHistory.push('/privacy')
  }

  handleLogout() {
    Auth.logout()
  }

  render() {
    return (
      <header className="friends-header">
        <Button onClick={this.handleHome} color="link">
          <img src={logo} className="App-logo" alt="logo" />
        </Button>
        <form className="search-menu-w40 search-center">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar eventos ou amigos"
          />
        </form>
        <div className="header-profile">
          <ButtonDropdown
            className="btn-header"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret outline className="px-1 py-0">
              <img
                src={profileLogo}
                className="rounded-circle img-fluid"
                alt="profileIMG"
              />
              <span className="ml-1">Nicolas Rosendo</span>
            </DropdownToggle>
            <DropdownMenu className="btn-profile">
              <DropdownItem>Perfil</DropdownItem>
              <DropdownItem>Favoritos</DropdownItem>
              <DropdownItem>Segurança</DropdownItem>
              <DropdownItem onClick={this.handlePrivacy}>
                Privacidade
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.handleLogout}>Sair</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </header>
    )
  }
}

export default Header
