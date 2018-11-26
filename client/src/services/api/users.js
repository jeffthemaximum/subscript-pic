import axios from 'axios'
import base64url from 'b64url'

import { getMetaContent } from '../../services/csrfService'

export async function createUser (name, email, password, passwordConfirmation) {
  try {
    const requestConfig = {
      url: '/api/users.json',
      method: 'post',
      data: {
        user: {
          name,
          email,
          password,
          password_confirmation: passwordConfirmation
        },
        authenticity_token: getMetaContent('csrf-token')
      },
    }

    const user = await axios.request(requestConfig)

    return user
  } catch (error) {
    console.log({error})
    return { error }
  }
}

export async function authenticateFacebookUser (facebookResponse) {
  try {
    const requestConfig = {
      url: `/api/auth/facebook`,
      method: 'post',
      data: {
        ...facebookResponse,
        authenticity_token: getMetaContent('csrf-token')
      },
    }

    const user = await axios.request(requestConfig)

    return user
  } catch (error) {
    console.log({error})
    return { error }
  }
}
