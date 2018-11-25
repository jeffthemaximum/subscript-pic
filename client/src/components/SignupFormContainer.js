import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import SignupFormComponent from './SignupFormComponent'

import users from '../ducks/users'

const { actions: { createUser } } = users

class SignupFormContainer extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: ''
    }
    this._handleInputChange = this._handleInputChange.bind(this)
    this._handleSignUpClick = this._handleSignUpClick.bind(this)
  }

  _handleInputChange (ev) {
    const nextState = _.cloneDeep(this.state)
    nextState[ev.target.name] = ev.target.value
    this.setState(nextState)
  }

  _handleSignUpClick (ev) {
    ev.preventDefault()
    const { createUser } = this.props
    const { name, email, password, passwordConfirmation } = this.state
    createUser(name, email, password, passwordConfirmation)
  }

  render () {
    const {
      email,
      name,
      password,
      passwordConfirmation
    } = this.state

    return (
      <SignupFormComponent
        email={email}
        handleInputChange={this._handleInputChange}
        handleSignUpClick={this._handleSignUpClick}
        name={name}
        password={password}
        passwordConfirmation={passwordConfirmation}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, { createUser })(SignupFormContainer)
