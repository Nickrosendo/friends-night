import React, { Component } from 'react';
import './login.css';
import $  from 'jquery';
// import loginBG from './img/friends-night-login-bg.jpg';

class App extends Component {
  
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount(){
   
     $.get("http://localhost:8080/usuarios", function(data, status){
        console.log("Data: " + JSON.stringify( data) + "\nStatus: " + status);
    });
  }

  cadastraUsuario(event){
    event.preventDefault();
    $.ajax({
      url: 'http://localhost:8080/usuarios/usuario',
      dataType: 'text',
      type: 'POST',
      data: JSON.stringify({ email: 'TESTE@hotmail.com', senha: '123456' }),
      succcess: function(resposta) {
        console.log('ok, ',resposta.status);
      },
      error: function(resposta) {
      console.log( 'not ok ',resposta.status);
      }
    })

  }


  
  render() {
    return (
      <div className="fn-login">
        <div className="fn-login-container jumbotron">
          <p> Login Friends Night</p>
          <form className="fn-login-form" onSubmit={this.cadastraUsuario}>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Email</span>
              <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Senha</span>
              <input type="password" className="form-control" placeholder="Senha" aria-describedby="basic-addon1" />
            </div>

            <div className="login-options">
              <input type="submit" className="btn btn-default btn-login glyphicon glyphicon-log-in" value="Entrar"/>
            
              <div className="fb-login-button btn-login" data-width="130" data-max-rows="1" data-size="medium" data-button-type="continue_with" data-auto-logout-link="false"></div>
            </div>
          </form>

        </div>
      </div>
    );


  }
}

export default App;
