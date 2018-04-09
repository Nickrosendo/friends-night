import React, {Component} from 'react';

import Auth from "../services/auth";
import logo from '../../logo.svg';
import "./Login.scss";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.location.query.msg
    }
  }

  componentDidMount() {
    Auth.getLoginStatus();
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/pt_BR/sdk.js";
      fjs
        .parentNode
        .insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  verificaUsuario() {
    Auth.getLoginStatus();
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

            <section className="fn-fb-login-container">
              <div
                className="fb-login-button"
                data-max-rows="1"
                data-size="large"
                data-scope="public_profile, email"
                data-button-type="login_with"
                data-show-faces="true"
                data-auto-logout-link="true"
                data-use-continue-as="true"
                data-onlogin={this.verificaUsuario()}></div>
            </section>

          </div>
        </div>
      </page>
    );

  }
}

export default Login;
