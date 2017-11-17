import React, { Component } from 'react';
import logo from '../logo.svg';
import profileLogo from '../img/Rosendo.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="friends-header">
        <img src={logo} className="App-logo" alt="logo" />
          <form className="search-menu-w40 search-center">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>

          </form>

          <div className="header-profile">
            <img src={profileLogo} className="header-profile-img img-circle" alt="profileIMG" />
            <div className="button-group">
              <button type="button" className="btn btn-profile-header dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nicolas Rosendo <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>Action</li>
                <li>Another action</li>
                <li>Something else here</li>
                <li role="separator" className="divider"></li>
                <li>Separated link</li>
              </ul>

            </div>
          </div>
          
        </header>

        <div className="fn-content-feed-padding container">
          <main className="fn-content-feed jumbotron">
            <div className="thumbnail">
              <img src={profileLogo} className="img-feed img-circle" alt="profileIMG" />
              <h2 className="text-center">Nicolas Oliveira Rosendo</h2> 
              <p className="text-center"> <span className="text-success glyphicon glyphicon-ok"></span> Vai para o</p>
              <h3 className="text-center"><span className="label label-success">Mothership D.Edge w/ Rebekah [Fear Paralysis/Album tour...</span></h3>
              <img 
                src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/20993996_10155148932576636_7171477574217485746_n.jpg?oh=164225fd7fa06c5d211a3c7ca8a951c7&oe=5A4B0978"
                alt="Event Img"
                className="img-responsive img-thumbnail"
              />
              
              <div className="text-center">
                <a className="btn btn-success glyphicon glyphicon-ok mr-1"> Ir </a>
                <a className="btn btn-default glyphicon glyphicon-info-sign mr-1"> Detalhes </a>
                <a className="btn btn-warning glyphicon glyphicon-star mr-1"> Interesse </a>
              </div>  
            </div>
            <hr/>
            <div className="thumbnail">
              <img src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/20768180_1742822235746935_4721102509954539801_n.jpg?oh=86750c69cf92ddcf06750968692bd18d&oe=5A51524F" className="img-feed img-circle" alt="profileIMG" />
              <h2 className="text-center">Amanda Gonzalez</h2> 
              <p className="text-center"> <span className="text-success glyphicon glyphicon-ok"></span> Vai para o</p>
              <h3 className="text-center"><span className="label label-success"> Baile do Mack VI - O Majestoso</span></h3>
              <img 
                src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/21077597_1615129791892454_5073114169587912977_n.jpg?oh=35e81e3092b7bc1c7ed42856b0661ef5&oe=5A885679"
                alt="Event Img"
                className="img-responsive img-thumbnail"
              />
              
              <div className="text-center">
                <a className="btn btn-success glyphicon glyphicon-ok mr-1"> Ir </a>
                <a className="btn btn-default glyphicon glyphicon-info-sign mr-1"> Detalhes </a>
                <a className="btn btn-warning glyphicon glyphicon-star mr-1"> Interesse </a>
              </div>  
            </div>
          </main>
        </div>

        <div className="fn-ads-container">
          <section className="fn-ads">
            <p> Eventos Populares</p>
               <img 
                src="https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-9/21232030_1637333892946363_7644585608871775899_n.jpg?oh=aaf3e5733b7ddf4f8df8e14a004ee3f3&oe=5A824AC7"
                alt="Advertising"
                className="img-responsive img-thumbnail"
              />
              <h3 className="text-left"> D-Side - 0+1</h3>
          </section>
        </div>

        <div className="fn-my-next-events-container">
          <section className="fn-my-next-events">
            <p> Meus gêneros de eventos</p>
            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">2</span>
                Techno
              </li>
              <li className="list-group-item">
                <span className="badge">1</span>
                Rock
              </li>
              <li className="list-group-item">
                <span className="badge">5</span>
                Esportes
              </li>
              <li className="list-group-item">
                <span className="badge">1</span>
                Protesto
              </li>
            </ul>

            <a className="btn btn-underline-default glyphicon glyphicon-plus"> Adicionar gênero</a>

          </section>
        </div>

        
      </div>
    );
  }
}

export default Home;
