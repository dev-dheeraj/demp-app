import React from 'react'

const ShowsActionBtn = ({ url, image, title }) => {
    return (
        <div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
            <a href={url} className="p-12 tooltip-hover">
                <img src={image} className="img-fluid" />
                <div className="tooltip-inner">{title}</div>
            </a>
        </div>
    )
}

export default ShowsActionBtn
