import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Auth0Lock from 'auth0-lock'

import Master from './layouts/Master'
import Landing from './pages/Landing/Landing'
import Test from './pages/Test/Test'

import store from './store'

import './Global.css'

var auth = new Auth0Lock('5lEbkHrNuPFVqEKoE5M9LcjMy40ucITe', 'denoodle.eu.auth0.com', {
    languageDictionary: {
        title: 'Denoodle'
    },
    theme: {
        logo: '/logo.png'
    },
    auth: {
        redirectUrl: 'http://localhost:3000/app',
        redirect: false,
        sso: false,
        responseType: 'token'
    }
});

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
            <Route path="app" component={ Master }>
                <IndexRoute component={ Landing } />
                <Route path="test" component={ Test } auth={auth} store={store} />
            </Route>
            <Route path="/" component={ Landing } auth={auth} />
        </Router>
    );
  }
}

export default App;

// <Route path="home" component={ Home } />
