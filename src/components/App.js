import React from 'react'
import { connect } from 'react-redux'
// import { addCart, removeCart } from './Redux/Actions'

// import Api from '../api'
import Navbar from './Specials/Navbar'
import TodaysSpecial from './Specials/TodaysSpecial'
import Courses from './Specials/Courses'

function App() {

  return (
    <div className='container'>
      <Navbar cart={{ count: 1 }} />
      <TodaysSpecial />
      <Courses />
    </div>
    //  malolan.s@careator.com 
  )
}

// React - Redux
const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: itemName => dispatch({ type: 'ADD' }),
    decrease: itemName => dispatch({ type: 'REMOVE' })
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

export default Container
