/* eslint-disable jsx-a11y/anchor-has-content */
import _ from 'lodash'
import React, { useState } from 'react'
import { useParams /* useRouteMatch */ } from 'react-router-dom'
import Dishes from './Dishes'

// import _ from 'lodash'
// import {Route} from 'react-router-dom'
// import Dishes from './dishes'

const DishItem = () => {
  const { dishName } = useParams()
  const [counter, setCounter] = useState(0)

  const currentDish = Dishes.find(item => item.name === _.startCase(dishName))

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleRemove = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0)
  }

  return (
    <div>
      <div className='card clearfix'>
        <div className='card-header'>
          <strong>Add to My Plate</strong>
          <a className='float-right' href='/'>
            <i className='fas fa-times'></i>
          </a>
        </div>

        <div className='row'>
          <div className='card-body'>
            <img
              src={currentDish.imgUrl}
              className='rounded'
              style={{
                borderBottom: currentDish.isVeg
                  ? '3px solid limegreen'
                  : '3px solid orangered',
                width: '100px',
                height: '100px',
                margin: 'auto'
              }}
              alt='specials'
            />
          </div>
          <div className='col-8 card-body bg-light'>
            <h4 className=''>{currentDish.name}</h4>
            {currentDish.isAvailable ? (
              <div>
                <button
                  className='btn btn-sm btn-warning pr-3 pl-3'
                  onClick={handleRemove}>
                  -
                </button>
                <strong className='mr-3 ml-3'>{counter}</strong>
                <button
                  className='btn btn-sm btn-warning pr-3 pl-3'
                  onClick={handleAdd}>
                  +
                </button>
                <button className='btn btn-sm btn-dark ml-3'>
                  <i className='fas fa-plus mr-2'></i>Add
                </button>
              </div>
            ) : (
              <p className='badge badge-warning'>Out of Stock</p>
            )}
            <div className='mt-2'>
              {currentDish.isVeg ? (
                <p className='badge badge-pill badge-success'>Vegetarian</p>
              ) : (
                <p className='badge badge-pill badge-danger'>Non Vegetarian</p>
              )}
            </div>
          </div>
          <p className='card-footer bg-warning'>{currentDish.description}</p>
        </div>
      </div>
    </div>
  )
}

export default DishItem
