import React, {Component} from 'react';
import {Button} from "reactstrap";

import Header from "../Header/Header.js";
import profileLogo from '../../img/Rosendo.jpg';

class Home extends Component {

  render() {
    return (
      <div>
        <Header></Header>

        <div className="fn-content-feed-padding container">
          <main className="fn-content-feed jumbotron">
            <div className="card text-center p-1">
              <img
                src={profileLogo}
                className="img-feed rounded-circle m-auto"
                alt="profileIMG"/>
              <h2 className="text-center">Nicolas Oliveira Rosendo</h2>
              <p className="text-center">
                <span className="text-success glyphicon glyphicon-ok"></span>
                Vai para o</p>
              <h3 className="text-center">
                <span className="label label-success">
                  Baile do Mack VI - O Majestoso</span>
              </h3>
              <img
                src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/21077597_1615129791892454_5073114169587912977_n.jpg?oh=35e81e3092b7bc1c7ed42856b0661ef5&oe=5A885679"
                alt="Event Img"
                className="img-responsive img-thumbnail"/>

              <div className="text-center mt-1">
                <a className="btn btn-success glyphicon glyphicon-ok mr-1">
                  Ir
                </a>
                <a className="btn btn-secondary glyphicon glyphicon-info-sign mr-1">
                  Detalhes
                </a>
                <a className="btn btn-warning glyphicon glyphicon-star mr-1">
                  Interesse
                </a>
              </div>
            </div>
            <hr/>
            <div className="card text-center p-1">
              <div className="btn btn-danger">aaa</div>
              <div className="btn btn-primary">nnn</div>
              <img
                src={profileLogo}
                className="img-feed rounded-circle m-auto"
                alt="profileIMG"/>
              <h2 className="text-center">Nicolas Oliveira Rosendo</h2>
              <p className="text-center">
                <span className="text-success glyphicon glyphicon-ok"></span>
                Vai para o</p>
              <h3 className="text-center">
                <span className="label label-success">
                  Baile do Mack VI - O Majestoso</span>
              </h3>
              <img
                src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/21077597_1615129791892454_5073114169587912977_n.jpg?oh=35e81e3092b7bc1c7ed42856b0661ef5&oe=5A885679"
                alt="Event Img"
                className="img-responsive img-thumbnail"/>

              <div className="text-center mt-1">
                <a className="btn btn-success glyphicon glyphicon-ok mr-1">
                  Ir
                </a>
                <a className="btn btn-secondary glyphicon glyphicon-info-sign mr-1">
                  Detalhes
                </a>
                <a className="btn btn-warning glyphicon glyphicon-star mr-1">
                  Interesse
                </a>
              </div>
            </div>
          </main>
        </div>

        <div className="fn-ads-container">
          <section className="fn-ads">
            <p>
              Eventos Populares</p>
            <img
              src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/21232030_1637333892946363_7644585608871775899_n.jpg?oh=aaf3e5733b7ddf4f8df8e14a004ee3f3&oe=5A824AC7"
              alt="Advertising"
              className="img-responsive img-thumbnail"/>
            <h3 className="text-left">
              D-Side - 0+1</h3>
          </section>
        </div>

        <div className="fn-my-next-events-container">
          <section className="fn-my-next-events">
            <p>
              Meus Interesses</p>
            <ul className="list-group">
              <li className="list-group-item">
                Techno
              </li>
              <li className="list-group-item">
                Rock
              </li>
              <li className="list-group-item">
                Esportes
              </li>
              <li className="list-group-item">
                Politica
              </li>
            </ul>
            
            <Button className="mt-2" color="secondary">Adicionar Interesse</Button>            

          </section>
        </div>

      </div>
    );
  }
}

export default Home;
