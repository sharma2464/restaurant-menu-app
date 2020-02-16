/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { useParams /* useRouteMatch */ } from 'react-router-dom'
import _ from 'lodash'

import { Dishes } from './Dishes'

// import _ from 'lodash'
// import {Route} from 'react-router-dom'
// import Dishes from './dishes'

const DishItem = () => {
  const { dishName } = useParams()

  const currentDish = Dishes.find(item => {
    if (item.name === _.startCase(dishName)) {
      return item.name
    }
  })

  return (
    <div>
      <h1>Hey</h1>
      <code>{dishName}</code>
      <code>{currentDish}</code>
    </div>
  )
}
export default DishItem

// <code>
//   {Object.keys().map(e => (
//     <li>{e}</li>
//   ))}
// </code> */}
// {/* <code>
//   {Object.keys(props.match).map(e => (
//     <li>{e}</li>
//   ))}
// </code>

//   const myDish = property => {
//     for (var i = 0; i < Dishes.length; i++) {
//       if (Dishes[i].property === property) {
//         return Dishes[i].property
//       }
//     }
//   }

//   const findItem = (data = Dishes, property) => {
//     data.forEach(item => {
//       if (item.name === _.startCase(handle)) {
//         return item.property
//       }
//     })
//   }

/*
        <div className='card clearfix'>
        <p>{dishItem('name')}</p>
        <p>{myDish('name')}</p> 
        <p>{findItem('name')}</p>
  
        <p className='card-header'>
          Add to My Plate
          <a className='float-right' href='/'>
            <i className='fas fa-times'></i>
          </a>
        </p>
        <div className='card-body d-flex flex-row'>
        <img
          src={dishItem(imgUrl)}
          className='rounded'
          style={{
            borderBottom: handle.isVeg
              ? '3px solid limegreen'
              : '3px solid orangered'
          }}
          width='100px'
          height='100px'
          alt='specials'
        />
        </div>
        
        
        {Route.fetch('url')
        .then(res => res.json())
        .then(e => (
          <p>{e}</p>
          ))} 
          </div>
          */
