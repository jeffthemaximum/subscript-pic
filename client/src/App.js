import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './reducers';
import rootSaga from './sagas'

import Home from './components/Home'
import Landing from './components/Landing'
import Login from './components/Login'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'


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
            <Route path='/landing' exact component={Landing} />
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/' exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
