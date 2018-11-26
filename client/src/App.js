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
import NotFound from './components/NotFound'
import PrivateRoute from './components/routes/PrivateRoute'
import SignupComponent from './components/SignupComponent'

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
            <Route path='/signup' extact component={SignupComponent} />
            <PrivateRoute path='/home' exact component={Home} />
            <Route path='/' exact component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
