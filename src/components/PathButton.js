import React from 'react'
import { Link } from 'react-router-dom'

const PathButton = (props) => {
    return (
        <div className="button-div">
            <Link to={props.path}>
                <button className="button" onClick={props.abortData}>{props.name}</button>
            </Link>
        </div>
    )
}

export default PathButton
