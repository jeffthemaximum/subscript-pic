import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers';
import rootSaga from '../sagas'

import Home from './Home'
import NotFound from './NotFound'


const sagaMiddleware = createSagaMiddleware()
const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
 )

sagaMiddleware.run(rootSaga)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
