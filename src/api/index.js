/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Dishes from '../components/Specials/Dishes'

const Api = () => {
  const match = useRouteMatch()

  const [selected, setSelected] = useState('<Select item above>')

  const [state, setState] = useState({
    Name: '',
    Price: 0,
    ImgURL: '',
    Description: '',
    IsVeg: false,
    IsSpecial: false,
    IsAvailable: false,
    Category: '',
    Stars: '',
    Ratings: 0,
    Cuisine: ''
  })

  var items = ''

  const selectItem = event => {
    setSelected(event.target.value)
    items = Dishes.find(e => e.name === "Pastry")
    fillData()
  }
  const fillData = () => {
    setState({
      Name: items
    })
  }

  return (
    <div className='card'>
      <div className='card-header clearfix'>
        <strong>CMS Page</strong>
        <pre>Update your menu data through this page</pre>

        {state.Name}
        {/* ---------------- */}

        <div className='container bg-warning text-dark pt-2 pb-2'>
          <label for='selectItem'>Select item to edit</label>
          <select
            className='form-control'
            id='selectItem'
            text='checkbox'
            onChange={selectItem}
            required>
            <option value='<Select item above>' selected>
              Choose...
            </option>
            {Dishes.map(e => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ---------------- */}
      <div className='card-body'>
        <p className='alert alert-warning'>
          Making changes in <strong>{selected}</strong>.
        </p>
        <form>
          <div className='form-group'>
            <label>
              Food name:
              <input
                type='text'
                className='form-control'
                value={state.Name}
                onChange={e => setState(e.target.value)}
                required
              />
            </label>
          </div>

          <div className='form-group'>
            <label>
              Price:
              <input type='number' className='form-control' required />
            </label>
          </div>

          <div className='form-group'>
            <label>
              Image URL:
              <input className='form-control' type='url' required />
            </label>
          </div>

          <div className='form-group'>
            <label>
              Description:
              <textarea type='text' className='form-control' required />
            </label>
          </div>

          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>
                <input className='mr-2' id='isVeg' type='checkbox' />
                Vegetarian
              </span>
            </div>
            <div className='input-group-append'>
              <span className='input-group-text'>
                <input className='mr-2' id='isVeg' type='checkbox' />
                Todays Special
              </span>
            </div>
          </div>

          <br />

          <div className='input-group cleafix'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>
                <input className='mr-2' id='isVeg' type='checkbox' />
                Available
              </span>
            </div>
            <div className='input-group-append'>
              <select
                className='form-control'
                id='itemCategory'
                text='checkbox'
                required>
                <option value='Starters'>Starters</option>
                <option value='Main Course'>Main Course</option>
                <option value='Desserts'>Desserts</option>
                <option value='Beverages'>Beverages</option>
              </select>
            </div>
          </div>

          {/* <div className='form-group'>
              <label className='input-label'>
                Food name:
                <input type='text' className='form-control' />
              </label>
            </div> */}
        </form>
      </div>

      <div className='card-footer'>
        <div className='btn-group'>
          <button className='btn btn-success mr-1'>
            <i className='fas fa-check mr-2'></i>
            Submit
          </button>
          <button className='btn btn-warning mx-1'>
            <i className='fas fa-times mr-2'></i>
            Reset
          </button>
          <Link className='btn btn-outline-success ml-1' to={`${match.url}`}>
            <i className='fas fa-home mr-2'></i>
            Home
          </Link>
        </div>
      </div>
      {/* Test codes-- */}
      <code>URL: {match.url}</code>
      <br />
      <code>PATH: {match.path}</code>
      <h3>
        {Object.keys(match).map(e => (
          <li>{e}</li>
        ))}
      </h3>
    </div>
  )
}

export default Api
