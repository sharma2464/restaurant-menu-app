import React from 'react'
import SectionCard from "../SectionCard";

function Courses() {
    const courseItems = ['Starters', 'Main Courses', 'Desserts', 'Beverages']

    return (
        <div className='card clearfix'>
            <div className='card-header py-2'>
                <h4 className='col'>Courses</h4>
                <a className='col' href='/'>See more</a>
            </div>
            <div className=''>
                {courseItems.map((e, i) => {
                    return (
                        <>
                            <SectionCard {...{
                                headline: e,
                                children: e.toUpperCase()
                            }} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Courses
