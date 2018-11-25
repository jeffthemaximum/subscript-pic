import React from 'react'
import { connect } from 'react-redux'

import FacebookLoginComponent from './FacebookLoginComponent'

import users from '../ducks/users'

const { actions: { authenticateFacebookUser } } = users

class FacebookLoginContainer extends React.Component {
  constructor () {
    super()

    this._responseFacebook = this._responseFacebook.bind(this)
  }

  _responseFacebook (response) {
    const { authenticateFacebookUser } = this.props
    console.log(response)
    authenticateFacebookUser(response)
  }

  render () {
    return (
      <FacebookLoginComponent
        callback={this._responseFacebook}
      />
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, { authenticateFacebookUser })(FacebookLoginContainer)
