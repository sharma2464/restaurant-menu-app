import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import Dishes from './Dishes'

function TodaysSpecial() {
  // const [state, setState] = useState(0)

  return (
    <div className='card clearfix'>
      <div>
        <p className='card-header'>
          <strong>Today's Special</strong>
          <a className='float-right' href='##'>
            See all
          </a>
        </p>
      </div>

      <div
        className='card-body d-flex flex-row'
        style={{ overflowY: 'hidden' }}>
        {Dishes.map((item, id) => (
          <Link
            to={{
              pathname: `dish/${_.kebabCase(item.name)}`,
              itemName: { name: `${item.name}` }
            }}
            className='mr-2'>
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

            <p className='text-dark' key={id}>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TodaysSpecial
