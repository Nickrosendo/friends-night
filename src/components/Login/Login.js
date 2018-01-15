import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import logo from '../../logo.svg';
import "./Login.css";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      msg: ''
    }
  }

  componentDidMount() {}

  verificaUsuario(event) {
    event.preventDefault();
    this.setState({ msg: 'Não foi possível efetuar o login!' })
    const RequestInfo = {
      method: 'POST',
      body: JSON.stringify({ email: this.email.value, senha: this.senha.value }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    fetch('http://localhost:8080/usuarios/usuario', RequestInfo)
      .then(response => {
        if (response.ok)
          return response.text();
        else
          throw new Error()
      })
      .then(token => {
        browserHistory.push('/');
      })
      .catch(error => {
        this.setState({ msg: 'Não foi possível efetuar o login!' });
      });

  }

  ErrorMessages() {
    if (this.state.msg) {
      return (<span className="label label-danger text-center error-msg"> {this.state.msg} </span>);
    }
  }



  render() {
    return (
      <page className="login-page-bg">
        <div className="fn-login">
          <div className="fn-login-container jumbotron">

            <div className="fn-login-title-container">
              <img src={logo} className="App-logo text-center" alt="logo" />
              <p className="text-center"> Login Friends Night</p>
            </div>
            {this.ErrorMessages()}
            <form className="fn-login-form" onSubmit={this.verificaUsuario.bind(this)}>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="Email" ref={value => this.email = value} />
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Senha</span>
                <input type="password" className="form-control" placeholder="Senha" ref={value => this.senha = value} />
              </div>

              <div className="login-options">
                <input type="submit" className="btn btn-default btn-login glyphicon glyphicon-log-in" value="Entrar" />

                <div className="fb-login-button btn-login" data-width="130" data-max-rows="1" data-size="medium" data-button-type="continue_with" data-auto-logout-link="false"></div>
              </div>
            </form>

          </div>
        </div>
      </page>
    );


  }
}

export default Login;
