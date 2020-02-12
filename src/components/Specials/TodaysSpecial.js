import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import Dishes from './dishes'

function TodaysSpecial() {
  // const [state, setState] = useState(0)

  return (
    <div className='card mt-2 clearfix'>
      <div>
        <p className='card-header'>
          Today's Special
          <a className='float-right' href='##'>
            See all
          </a>
        </p>
      </div>

      <div
        className='card-body d-flex flex-row'
        style={{ overflowY: 'scroll' }}>
        {Dishes.map(item => (
          <Link to={'dish/' + _.kebabCase(item.name)} className='mr-2'>
            <img
              src={item.imgUrl}
              className='rounded'
              style={{
                borderBottom: item.isVeg
                  ? '3px solid limegreen'
                  : '3px solid orangered'
              }}
              width='100px'
              height='100px'
              alt='specials'
            />

            <p className='text-dark'>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TodaysSpecial
