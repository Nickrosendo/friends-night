import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import Auth from "../services/auth";
import logo from '../../fn-logo.svg';
import "./Login.scss";

const responseFacebook = (res) => {
  Auth.getLoginStatus();
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: this.props.location.query.msg
    }
  }

  componentDidMount() {
    // Auth.getLoginStatus();

  }


  verificaUsuario() {
    console.log('foi verifica')
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
        <div className="fn-login-container jumbotron">

          <div className="fn-login-title-container">
            <img src={logo} className="App-logo text-center" alt="logo"/>
            <p>Friends Night</p>
          </div>
          {this.ErrorMessages()}

          <section className="fn-fb-login-container text-center">
            <FacebookLogin
              appId="1945964319010132"
              cssClass="fn-facebook-btn"
              icon="fa-facebook"
              autoLoad={true}
              fields="name,email,picture,user_friends"
              callback={responseFacebook} 
            ></FacebookLogin>
            {/* <div
              className="fb-login-button"
              data-max-rows="1"
              data-size="large"
              data-scope="public_profile, email"
              data-button-type="continue_with"
              data-show-faces="true"
              data-use-continue-as="true"
              data-onlogin={window.FB.login( res => console.log("res: ", res) ) }></div> */}
          </section>

        </div>
      </page>
    );

  }
}

export default Login;
