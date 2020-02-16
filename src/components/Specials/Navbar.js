import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ cart }) {
  return (
    <div className="sticky-top">
      <nav className='navbar bg-light'>
        <button className='btn btn-sm btn-warning'>
          <span className='fas fa-bars'></span>
        </button>
        <Link to='/' className='navbar-brand'>
          <strong>FOOD MENU</strong>
        </Link>
        <div className='btn-group'>
          <Link className='btn btn-sm btn-warning' to='/api'>
            <i className='fas fa-user'></i>
          </Link>
          {/* <Link className='btn btn-sm btn-outline-warning text-dark' to='/cart'> */}
          <Link
            className='btn btn-sm btn-outline-warning text-dark'
            to={{
              pathname: '/cart',
              items: `${cart.count}`
            }}>
            <span className='badge badge-pill badge-success'>
              {cart.count !== 0 ? cart.count : null}
            </span>
            <i className='fas fa-shopping-cart'></i>
          </Link>
        </div>
      </nav>
      <div className=''>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <input className='mr-2' id='isVeg' type='checkbox' />
              Veg
            </span>
          </div>
          <input type='text' className='form-control' placeholder='search..' />
          <div className='input-group-append'>
            <button className='btn btn-warning' alt='search'>
              <span className='fas fa-search'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
