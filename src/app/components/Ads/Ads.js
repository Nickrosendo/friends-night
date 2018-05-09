import React from 'react'

import './Ads.scss'
import dgtl from '../../../img/DGTL.jpg'

class Ads extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="fn-ads-container">
        <section className="fn-ads">
          <p>Eventos Populares</p>
          <img
            src={dgtl}
            alt="Advertising"
            className="img-responsive img-thumbnail"
          />
          <h3 className="text-left">DGTL-sp 2018</h3>
        </section>
      </div>
    )
  }
}

export default Ads
