import React from 'react'

import './Privacy.scss'

import Header from '../components/Header/Header.js'
import Ads from '../components/Ads/Ads.js'
import Interests from '../components/Interests/Interests.js'
import BestFriends from '../components/BestFriends/BestFriends.js'

import '../Home/Home.scss'

class Privacy extends React.Component {
  constructor() {
    super()
    this.state = {}
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
            <main className="fn-privacy-container jumbotron">
              <h1 className="fn-privacy-title">
                Política de Privacidade <br />
                Friends-Night
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                justo dignissim, aliquet arcu et, efficitur ipsum. Suspendisse
                potenti. Morbi at vulputate metus, ac vulputate erat. Fusce orci
                risus, tempor id mi et, placerat volutpat elit. Sed ultrices
                facilisis tortor, eu fermentum enim egestas id. Praesent
                fringilla lacus a ullamcorper varius. Duis efficitur diam in mi
                posuere cursus. Sed eu gravida nisl, eget efficitur sapien.
                Integer neque dui, venenatis vitae elit vel, porttitor volutpat
                ex. Quisque viverra nibh et imperdiet hendrerit. Nunc euismod id
                ligula eget sodales. Integer pretium ante sapien, quis cursus
                nisl iaculis id. Phasellus condimentum urna a est facilisis
                ullamcorper. Curabitur rhoncus malesuada erat iaculis egestas.
                Nunc eget suscipit lorem, vel tempus est. Nullam euismod mauris
                ut convallis vehicula. Nulla porttitor augue velit, sit amet
                pretium nisi dapibus eget. Cras efficitur eu metus nec
                malesuada. Sed vitae quam in diam consectetur aliquet. Integer
                accumsan pretium orci, et euismod leo malesuada eu. Aenean vitae
                quam non felis elementum aliquam eu posuere elit. Nullam quis
                metus dui. Praesent sit amet ante augue. Praesent vitae
                fringilla dui. Donec pulvinar ante magna, et ornare urna varius
                vitae. Vivamus ultricies congue dictum. Mauris vestibulum nulla
                id commodo volutpat. In porttitor arcu sit amet sem sollicitudin
                mollis. Curabitur sollicitudin elementum mi, at iaculis elit
                tincidunt a. Vivamus mattis odio quam, id dapibus lorem gravida
                vitae. Aliquam ex ipsum, facilisis quis sodales quis,
                sollicitudin ac tortor. Vestibulum sit amet imperdiet urna.
                Aenean in nunc non felis maximus porttitor. Morbi sed nisi
                mauris. Sed sodales molestie odio, sed dapibus ligula eleifend
                ut. Vivamus eget imperdiet ex. Nullam vehicula cursus nisl, a
                aliquet eros suscipit nec. Sed sed sem sed ligula consectetur
                condimentum. Sed in quam porttitor, congue diam ac, condimentum
                lectus. Morbi aliquam est et quam volutpat, sit amet consectetur
                mi viverra. Mauris non neque orci. Vestibulum pulvinar neque
                nisi, at blandit sapien consectetur nec. Aliquam sollicitudin
                metus at aliquam porta. Sed efficitur mi sit amet purus
                imperdiet euismod. Etiam ut turpis sed lectus rutrum lobortis in
                sed arcu. Nulla facilisi. Donec cursus arcu a laoreet feugiat.
                Aliquam in vehicula ipsum. Suspendisse ut leo pellentesque,
                vehicula felis sed, dignissim massa. Etiam gravida pretium risus
                sit amet commodo. Etiam lobortis pretium ex, vitae laoreet neque
                imperdiet sit amet. Nullam sit amet magna vitae ex scelerisque
                laoreet. Cras sed blandit elit, quis aliquam mi. Proin non
                fermentum purus. Curabitur elementum diam elit, a ultricies
                lorem ornare non. Curabitur in magna laoreet, dignissim sem at,
                dapibus elit. Nunc laoreet, dui eget interdum dignissim, mi mi
                lacinia ante, in hendrerit nunc leo non justo. Suspendisse
                vehicula dui commodo magna semper tincidunt. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Sed tempus purus at luctus finibus. Interdum et malesuada
                fames ac ante ipsum primis in faucibus. Praesent et nunc
                bibendum, pretium erat fermentum, consectetur erat. Fusce
                gravida nulla nec lacus vestibulum, non pharetra mauris rhoncus.
                Sed cursus justo magna, non dignissim eros molestie non.
              </span>
            </main>
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

export default Privacy
