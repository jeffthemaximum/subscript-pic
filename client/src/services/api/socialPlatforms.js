import axios from 'axios'

async function fetchSocialPlatforms (options) {
  try {
    let requestConfig = {
      url: '/api/social_platforms',
      method: 'get',
      params: {}
    }

    let socialPlatforms = await axios.request(requestConfig)

    return socialPlatforms
  } catch (err) {
    console.log(err)
    return []
  }
}

export {
  fetchSocialPlatforms
}
