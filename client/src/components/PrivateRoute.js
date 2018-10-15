import React from 'react';
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

import users from '../ducks/users'

const { selectors: { userIsSignedIn } } = users

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    userIsSignedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute)
