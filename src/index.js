import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import Api from './api'
// Link,
// useRouteMatch,
// useParams
// Other Components
import Container from './App'
import reducer from './components/Redux/Reducers'
import Cart from './components/Specials/Cart'
import DishItem from './components/Specials/DishItem'
import * as serviceWorker from './serviceWorker'
import Navbar from './components/Specials/Navbar'
import App from "./App";
// import App from './components/App'
// import './styles/index.css'

const Store = createStore(reducer, applyMiddleware(thunk))

render(
    <App/>,
    document.getElementById('root')
)
// <Router>
//   <div>
//     <Navbar cart={{ count: 1 }} />
//     <Switch>
//       <Provider store={Store}>
//         <Route exact path='/'>
//           <Container />
//         </Route>
//         <Route path='/dish/:dishName'>
//           <DishItem />
//         </Route>
//         <Route path='/cart'>
//           <Cart />
//         </Route>
//         <Route exact path='/api'>
//           <Api />
//         </Route>
//       </Provider>
//     </Switch>
//   </div>
// </Router>,

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()
// serviceWorker.register();
