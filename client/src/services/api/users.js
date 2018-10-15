import axios from 'axios'

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
    debugger

    return user
  } catch (err) {
    console.log({err})
    return []
  }
}
