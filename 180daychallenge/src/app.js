import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Navigation from './components/Navigation'
import Home from './routes/Home'
import Full from './routes/Full'

import './styles/index.scss'
// import Sample from './routes/Sample'

export const App = () => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      {/* <Navigation /> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/full" component={Full}/>
      </Switch>
    </Router>
  </Fragment>
)
