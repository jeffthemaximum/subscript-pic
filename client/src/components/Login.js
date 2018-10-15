import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  Button,
  Input
} from 'semantic-ui-react'

import users from '../ducks/users'

const { actions: { createUser } } = users

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: ''
    }
    this._handleInputChange = this._handleInputChange.bind(this)
    this._handleSignInClick = this._handleSignInClick.bind(this)
  }

  _handleInputChange (ev) {
    const nextState = _.cloneDeep(this.state)
    nextState[ev.target.name] = ev.target.value
    this.setState(nextState)
  }

  _handleSignInClick (ev) {
    ev.preventDefault()
    const { createUser } = this.props
    const { name, email, password, passwordConfirmation } = this.state
    createUser(name, email, password, passwordConfirmation)
  }

  render () {
    return (
      <form>
        <Input
          type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this._handleInputChange}
        />
        <Input
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this._handleInputChange}
        />
        <Input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this._handleInputChange}
        />
        <Input
          type='password'
          name='passwordConfirmation'
          placeholder='re-type password'
          value={this.state.passwordConfirmation}
          onChange={this._handleInputChange}
        />
        <Button
          type='submit'
          onClick={this._handleSignInClick}
        >
          Register
        </Button>
      </form>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, { createUser })(Login)
