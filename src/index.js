import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import Api from './api'
// Link,
// useRouteMatch,
// useParams
// Other Components
import Container from './components/App'
import reducer from './components/Redux/Reducers'
import Cart from './components/Specials/Cart'
import DishItem from './components/Specials/DishItem'
import * as serviceWorker from './serviceWorker'
// import App from './components/App'
// import './styles/index.css'

const Store = createStore(reducer, applyMiddleware(thunk))

render(
  <Router>
    <Switch>
      <Provider store={Store}>
        <Route exact path='/'>
          <Container />
        </Route>
        <Route exact path='/dish:any'>
          <DishItem />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/api/'>
          <Api />
        </Route>
      </Provider>
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
// serviceWorker.register();
