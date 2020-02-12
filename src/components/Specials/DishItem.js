/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
// import _ from 'lodash'
// import {Route} from 'react-router-dom'
// import Dishes from './dishes'

const DishItem = (props) => {
const dish = props.match.params 
  //     const findItem = () => {
  //       return Dishes.find(item => item.name === _.startCase(handle)).name
  //     }
  //   const findItem = property => {
  //     return Dishes[_.startCase(handle)]
  //   }

return <div>hey {dish}</div>
}
export default DishItem

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
