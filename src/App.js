import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Master from './layouts/Master'
import Landing from './pages/Landing/Landing'

class App extends Component {
  render() {
    return (
        <Router history={ browserHistory }>
            <Route path="app" component={ Master }>
                <IndexRoute component={ Landing } />
            </Route>
            <Route path="/" component={ Landing } />
        </Router>
    );
  }
}

export default App;

// <Route path="home" component={ Home } />
