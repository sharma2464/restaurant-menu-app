import React from 'react'

const Cart = ({ ...cart }) => {
  const handleClick = () => {}

  return (
    <div className='container'>
      <p>Count: {cart.count} : </p>
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
