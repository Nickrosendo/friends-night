import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import http from "../services/http.js";

import logo from '../../logo.svg';
import "./Login.scss";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.location.query.msg
    }
  }

  componentDidMount() {}

  verificaUsuario(event) {
    event.preventDefault();    
    http.post('/login', {usuario: this.email.value, senha: this.senha.value})
      .then(response => {
        if (response.status === 200) 
          return response.data;
        else 
          throw new Error('Não foi possível efetuar o login!');
        }
      )
      .then(token => {
        this.setState({msg: ''});
        if (token) {
          localStorage.setItem('auth-token', token);
          browserHistory.push('/');
        }
      })
      .catch((error) => {
        this.setState({msg: error.message});
      });

  }

  ErrorMessages() {
    if (this.state.msg) {
      return (
        <div className="alert alert-danger" role="alert">{this.state.msg}</div>
      );
    }
  }

  render() {
    return (
      <page className="login-page-bg">
        <div className="fn-login">
          <div className="fn-login-container jumbotron">

            <div className="fn-login-title-container">
              <img src={logo} className="App-logo text-center" alt="logo"/>
              <p className="text-center">
                Login Friends Night</p>
            </div>
            {this.ErrorMessages()}
            <form
              className="fn-login-form"
              onSubmit={this
              .verificaUsuario
              .bind(this)}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Email</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  ref={value => this.email = value}/>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    Senha</span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  aria-label="Senha"
                  ref={value => this.senha = value}/>
              </div>

              <div className="login-options mt-2">
                <input type="submit" className="btn btn-default btn-block" value="Entrar"/>
              </div>
            </form>

          </div>
        </div>
      </page>
    );

  }
}

export default Login;
