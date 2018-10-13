import React, { Component } from 'react';

import __html from '../assets/static/landing/index.html'
const template = { __html: __html }

class Landing extends Component {
  render () {
    debugger
    return (
      <div dangerouslySetInnerHTML={template} />
    )
  }
}

export default Landing
