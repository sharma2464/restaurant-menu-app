import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'

const Cart = props => {
  const handleClick = () => {}

  return (
    <div className='card'>
      <div className='card-header'>
        <strong>Your plate</strong>
      </div>
      <p>Count: : </p>
      <button onClick='' value='increase'>
        +
      </button>
      <button onClick={handleClick} value='decrease'>
        -
      </button>
    </div>
  )
}

export default Cart
