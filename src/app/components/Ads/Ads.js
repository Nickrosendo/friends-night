import React from 'react';

import "./Ads.scss";

class Ads extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default Ads;
