import React, { Component } from 'react'

import FacebookLoginContainer from './FacebookLoginContainer'
import SignupFormContainer from './SignupFormContainer'

class SignupComponent extends Component {
  render () {
    return (
      <div>
        <SignupFormContainer />
        <p>or</p>
        <FacebookLoginContainer />
      </div>
    )
  }
}

export default SignupComponent
