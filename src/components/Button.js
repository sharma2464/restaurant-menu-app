import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <>
            <button className={`btn btn-${props.size} btn-${props.color}`}>
                {props.label}
            </button>
        </>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    // link: PropTypes.string
}

Button.defaultProps = {
    label: "Button",
    // color: "primary",
    size: "sm",
    // link: '/button'
}