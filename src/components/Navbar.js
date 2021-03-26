import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand" to={{pathname: props.brandLink}}>{props.brandName}</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {props.links && props.links.map((e, i) => (
                                <li className="nav-item" key={e.name + i}>
                                    <Link className={`nav-link active ${e.className}`} to={{pathname: e.link}}
                                          onClick={e.onClick}>{e.name}</Link>
                                </li>
                            ))}
                        </ul>
                        {props.children && (
                            <div className='d-flex'>
                                {props.children}
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    brandName: PropTypes.string.isRequired,
    brandLink: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string
    }))
}

Navbar.defaultProps = {
    brandName: 'Restaurant Menu',
    brandLink: '/',
    links: [
        {name: "Today's Special", link: '/todays_special', onClick: () => console.log("Today's Special")}
    ]
}