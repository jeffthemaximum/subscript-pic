import React, { Component } from 'react'

import {
  Button,
  Input
} from 'semantic-ui-react'

class SignupFormComponent extends Component {
  render () {
    const {
      email,
      handleInputChange,
      handleSignUpClick,
      name,
      password,
      passwordConfirmation
    } = this.props

    return (
      <div>
        <form>
          <Input
            type='text'
            name='name'
            placeholder='name'
            value={name}
            onChange={handleInputChange}
          />
          <Input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleInputChange}
          />
          <Input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleInputChange}
          />
          <Input
            type='password'
            name='passwordConfirmation'
            placeholder='re-type password'
            value={passwordConfirmation}
            onChange={handleInputChange}
          />
          <Button
            type='submit'
            onClick={handleSignUpClick}
          >
            Register
          </Button>
        </form>
      </div>
    )
  }
}

export default SignupFormComponent
