import React from 'react';
import {Button} from "reactstrap";

import profileLogo from '../../../img/Rosendo.jpg';
import "./BestFriends.scss";

class BestFriends extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="fn-my-best-friends-container">
        <section className="fn-my-best-friends">
          <p>
            Meus melhores amigos
          </p>
          <ul className="list-group">
            <li
              className="list-group-item d-flex align-items-center justify-content-between">
              <span>
                Nicolas Oliveira Rosendo</span>
              <img src={profileLogo} className="img-thumb rounded-circle" alt="profileIMG"/>
            </li>
            <li
              className="list-group-item d-flex align-items-center justify-content-between">
              <span>
                Nicolas Oliveira Rosendo</span>
              <img src={profileLogo} className="img-thumb rounded-circle" alt="profileIMG"/>
            </li>
          </ul>

          <Button className="mt-2" outline color="secondary">Gerenciar melhores amigos</Button>

        </section>
      </div>
    );
  }
}

export default BestFriends;
