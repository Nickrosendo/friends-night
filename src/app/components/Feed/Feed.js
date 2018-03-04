import React from 'react';

import "./Feed.scss";

import profileLogo from '../../../img/Rosendo.jpg';
import theHoleFestival from '../../../img/theholefestival.jpg';

class Feed extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main className="fn-content-feed jumbotron">
        <div className="card text-center p-1 mb-4">
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
              The Hole Festival  
            </span>
          </h3>
          <img
            src={theHoleFestival}
            alt="Event Img"
            className="img-responsive img-thumbnail"/>

          <div className="text-center mt-1">
            <a className="btn btn-success text-white glyphicon glyphicon-ok mr-1">
              Ir
            </a>
            <a className="btn btn-primary text-white glyphicon glyphicon-info-sign mr-1">
              Detalhes
            </a>
            <a className="btn btn-warning text-white glyphicon glyphicon-star mr-1">
              Interesse
            </a>
          </div>
        </div>
      </main>
    );
  }

}

export default Feed;
