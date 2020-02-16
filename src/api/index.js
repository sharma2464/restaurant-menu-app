/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, useRouteMatch, useParams } from 'react-router-dom'

const Api = () => {
  const match = useParams()
  // const match = useRouteMatch()

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header clearfix'>
          <h3>CMS Page</h3>
          <code>URL: {match.url}</code><br/>
          <code>PATH: {match.path}</code>
          <h3>
            {Object.keys(match).map(e => (
              <li>{e}</li>
            ))}
          </h3>
          <p>Upload data to the app through this page</p>
        </div>

        {/*  */}

        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label>
                Food name:
                <input type='text' className='form-control' required />
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
      </div>
    </div>
  )
}

export default Api
