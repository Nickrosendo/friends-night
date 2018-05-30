import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import { browserHistory } from 'react-router'

import http from '../services/http.js'

import logo from '../../fn-logo.svg'
import './Login.scss'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: this.props.location.query.msg,
      email: '',
      senha: ''
    }
  }

  handleLogin = event => {
    event.preventDefault()
    http
      .post('/login', { usuario: this.state.email, senha: this.state.senha })
      .then(response => {
        if (response.status === 200) return response.data
        else throw new Error('Não foi possível efetuar o login!')
      })
      .then(token => {
        this.setState({ msg: '' })
        if (token) {
          localStorage.setItem('auth-token', token)
          browserHistory.push('/home')
        }
      })
      .catch(error => {
        this.setState({ msg: error.message })
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  ErrorMessages = () => {
    if (this.state.msg) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.state.msg}
        </div>
      )
    }
  }

  render() {
    return (
      <page className="login-page-bg">
        <div className="fn-login-container jumbotron">
          <div className="fn-login-title-container">
            <img src={logo} className="App-logo text-center" alt="logo" />
            <p>Friends Night</p>
          </div>
          {this.ErrorMessages()}

          <form
            className="fn-login-form-container text-center"
            onSubmit={this.handleLogin}
          >
            <FormGroup controlId="email" bsSize="large">
              <FormControl
                autoFocus
                placeholder="Email"
                type="email"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="senha" bsSize="large">
              <FormControl
                placeholder="Senha"
                type="password"
                required
                value={this.state.senha}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button block bsSize="large" type="submit" className="btn-login">
              Entrar
            </Button>
            <p>Usuário e senha padrao: teste</p>
          </form>
        </div>
      </page>
    )
  }
}

export default Login
