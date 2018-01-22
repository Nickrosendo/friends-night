import React, {Component} from 'react';

import Header from "../components/Header/Header.js";
import Feed from "../components/Feed/Feed.js";
import Ads from "../components/Ads/Ads.js";
import Interests from "../components/Interests/Interests.js";
import BestFriends from "../components/BestFriends/BestFriends.js";

import "./Home.scss";

class Home extends Component {

  componentDidMount() {
    // http.get('/v1/events', { headers: { "x-access-token" : localStorage.getItem("auth-token")}})
    //   .then( response => {
    //     console.log('res: ', response);
    //   })
    //   .catch( error => console.log('error: ', error))
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="row mx-0 clear-header-position">
          <section className="col-md-3">
            <Ads></Ads>
          </section>
          <section className="col-md-6">
            <Feed></Feed>
          </section>
          <section className="col-md-3 pr-0 d-flex flex-column align-items-end">
            <Interests></Interests>
            <BestFriends></BestFriends>
          </section>
        </div>

      </div>
    );
  }
}

export default Home;
