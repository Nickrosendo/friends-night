import React, { Component } from 'react'

import Header from '../components/Header/Header.js'
import Feed from '../components/Feed/Feed.js'
import Ads from '../components/Ads/Ads.js'
import Interests from '../components/Interests/Interests.js'
import BestFriends from '../components/BestFriends/BestFriends.js'
// import http from '../services/http'

import './Home.scss'

class Home extends Component {
  componentDidMount() {
    window.FB.getLoginStatus(function(response) {
      // const token = localStorage.getItem('auth-token')
      window.FB.api('/me', function(response) {
        window.FB.api(
          `/${response.id}`,
          function(response) {
            console.log('profile: ', response)
          }
        )
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row mx-0 clear-header-position">
          <section className="col-md-3">
            <Ads />
          </section>
          <section className="col-md-6">
            <Feed />
          </section>
          <section className="col-md-3 pr-0 d-flex flex-column align-items-end">
            <Interests />
            <BestFriends />
          </section>
        </div>
      </div>
    )
  }
}

export default Home
