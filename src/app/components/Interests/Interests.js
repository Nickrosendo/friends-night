import React from 'react';
import {Button} from "reactstrap";

import "./Interests.scss";

class Interests extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="fn-my-interests-container mb-4">
        <section className="fn-my-interests">
          <p className="text-white">
            Meus Interesses</p>
          <ul className="list-group">
            <li className="list-group-item">
              Techno
            </li>
          </ul>

          <Button className="mt-2" outline color="secondary">Adicionar Interesse</Button>

        </section>
      </div>
    );
  }
}

export default Interests;
