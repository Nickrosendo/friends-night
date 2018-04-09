import {browserHistory} from 'react-router';

export default {
  getLoginStatus : function () {
    window.fbAsyncInit = function () {
      window
        .FB
        .init({appId: '1945964319010132', autoLogAppEvents: true, xfbml: true, version: 'v2.12'});

      window
        .FB
        .getLoginStatus(function (response) {
          if (response.status === 'connected') {
            // the user is logged in and has authenticated your app, and
            // response.authResponse supplies the user's ID, a valid access token, a signed
            // request, and the time the access token and signed request each expire 
            const accessToken = response.authResponse.accessToken;
            localStorage.setItem('auth-token', accessToken);
            browserHistory.push('/home');
            
            window
              .FB
              .api('/me', function (response) {
                console.log('log res', response);
                
              });
          } else {
            // the user isn't logged in to Facebook.
            window
              .FB
              .login((res) => {
                if (res.status === 'connected') {
                  // localStorage.setItem('auth-token', res.authResponse.accessToken);
                  // browserHistory.push('/home');
                  console.log('Welcome!  Fetching your information.... ');
                  window
                    .FB
                    .api('/me', function (response) {
                      console.log('Successful login for: ' + response.name);
                      document
                        .getElementById('status')
                        .innerHTML = 'Thanks for logging in, ' + response.name + '!';
                    });
                }
              })
          }
        })
    }
  },
  logout : function () {

    localStorage.removeItem('auth-token');
    browserHistory.push('/login');

  },
  testAPI : function () {
    console.log('Welcome!  Fetching your information.... ');
    window
      .FB
      .api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document
          .getElementById('status')
          .innerHTML = 'Thanks for logging in, ' + response.name + '!';
      });
  }

}