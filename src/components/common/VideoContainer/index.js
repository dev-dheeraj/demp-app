import React from 'react'
import ActionButton from '../ActionButton'

const VideoContainer = (
    { profileImg,
        title,
        views,
        date,
        description,
        button,
        likeImg,
        addImg,
        commentImg,
        shareImg,
        promoteImg,
        url
    }) => {

    return (
        <div>
            <div className="">
                {/* <img src={profileImg} className="img-fluid" /> */}
                {/* render youtube videos */}
                <iframe
                width={"100%"}
                    src={url}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                >
                </iframe>
            </div>
            <div className="p-2 bg-white border">
                <h5 className="font-18 mb-1">{title}</h5>
                <h6 className="font-12 mb-2">{views}{date}</h6>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                        <div className="wh-45 bg-dark rounded-pill overflow-hidden user-image">
                            <img src={profileImg} className="img-fluid" />
                        </div>
                        <h5 className="font-12 mb-0 pl-10">{description}</h5>
                    </div>
                    <div><button type="button" className="btn btn-purple">{button}</button></div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/* Show action buttons */}
                        <ActionButton image={likeImg} />
                        <ActionButton image={commentImg} />
                        <ActionButton image={shareImg} />
                        <ActionButton image={promoteImg} />
                    </div>
                    <div>
                        <div className="wh-45 d-flex align-items-center justify-content-between">
                            <a href="javascript:void(0)">
                                <img src={addImg} className="img-fluid" width="45" height="45" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoContainer
