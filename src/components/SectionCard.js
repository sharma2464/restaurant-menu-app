import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default function SectionCard(props) {
    return (
        <div className='card mt-1'>
            {props.headline && <h5 className='card-header'>{props.headline}</h5>}
            <div className='card-body'>
                {props.children && props.children}
            </div>
        </div>
    )
}

SectionCard.propTypes = {
    headline: PropTypes.string.isRequired,
    children: PropTypes.node,
    // collections: PropTypes.arrayOf(PropTypes.shape({
    //     title: PropTypes.string.isRequired,
    //     list: PropTypes.arrayOf(PropTypes.shape({
    //         id: PropTypes.number,
    //         text: PropTypes.string
    //     }))
    // }))
}

SectionCard.defaultProps = {
    headline: "Section 1",
    children: <>Hello</>
}