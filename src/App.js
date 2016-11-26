import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Auth0Lock from 'auth0-lock'

import Master from './layouts/Master'
import Landing from './pages/Landing/Landing'
import LangSelect from './pages/LangSelect/LangSelect'
import Test from './pages/Test/Test'

import store from './store'

import './Global.css'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA_9CkxUEVjmJB34iVLg8sq-3UFWKaRKdU",
    authDomain: "denoodle-3c592.firebaseapp.com",
    databaseURL: "https://denoodle-3c592.firebaseio.com",
    storageBucket: "denoodle-3c592.appspot.com",
    messagingSenderId: "54608870615"
};
firebase.initializeApp(config);

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

function restore_login(){
    if(!store.user.name && localStorage.getItem('id_auth')) {
        const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth'));
        user.on('value', snap => {
            store.login(snap.val(), localStorage.getItem('id_auth'));
        });
    }
}

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
            <Route path="app" component={ Master } store={store}>
                <IndexRoute component={ Test } auth={auth} store={store} onEnter={restore_login}/>
                <Route path="select" component={ LangSelect } store={store} onEnter={restore_login}/>
                <Route path="user" component={null} />
            </Route>
            <Route path="/" component={ Landing } auth={auth} store={store} />
        </Router>
    );
  }
}

export default App;

// <Route path="home" component={ Home } />
