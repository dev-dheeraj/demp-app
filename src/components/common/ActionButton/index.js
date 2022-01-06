import React from 'react'

const ActionButton = ({image}) => {
    return (
        <div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
        <a href="javascript:void(0)">
            <img src={image} className="img-fluid" width="30" height="30" />
        </a>
    </div>
    )
}

export default ActionButton
