import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Profils from '../screens/profils'
import Videos from '../screens/videos'
import Video from '../screens/video'
import Search from '../screens/search'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Profils} />
        <Route path='/videos' component={Videos} />
        <Route path='/search' component={Search} />
        <Route path='/video/:slug' component={Video} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes