import React from 'react'

import FacebookLogin from 'react-facebook-login'

class FacebookLoginComponent extends React.Component {
  render () {
    const {
      callback
    } = this.props

    return (
      <FacebookLogin
        appId={process.env.YT_FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={callback}
        responseType={'code'}
        cookie={true}
        version={3.2}
      />
    )
  }
}

export default FacebookLoginComponent
