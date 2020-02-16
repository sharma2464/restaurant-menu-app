import React from 'react'

function Courses() {
  const courseItems = ['Starters', 'Main Courses', 'Desserts', 'Beverages']

  return (
    <div className='card clearfix'>
      <div className='card-header'>
        
          <strong>Courses</strong>
          <a className='float-right' href='##'>
            See all
          </a>
      </div>

      <div className='card-body d-flex flex-row'>
        <div className='inline-flex row'>
          {courseItems.map(item => {
            return (
              <button className='btn btn-sm btn-outline-warning text-left col-6'>
                <i className='fas fa-circle float-left mr-2'></i>
                {item}
              </button>
            )
          })}
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default Courses
