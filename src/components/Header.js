import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            This page is for {props.heading}
        </div>
    )
}

export default Header
