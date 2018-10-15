import React, { Component } from 'react'
import { connect } from 'react-redux'

import socialPlatforms from '../ducks/socialPlatforms'

import logo from '../assets/logo.svg'

import './Home.css'

const { actions: { fetchSocialPlatforms } } = socialPlatforms

class Home extends Component {
  constructor () {
    super()
    this.state = {}
    this._fetchSocialPlatforms = this._fetchSocialPlatforms.bind(this)
  }

  componentWillMount () {
    this._fetchSocialPlatforms()
  }

  _fetchSocialPlatforms () {
    const { fetchSocialPlatforms } = this.props
    fetchSocialPlatforms()
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {}
}

export default connect(mapStateToProps, { fetchSocialPlatforms })(Home)
