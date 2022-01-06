import React from 'react'

import search from '../../assets/images/home/search.png'
import crossRed from '../../assets/images/home/cross-red.png'
import home_1 from '../../assets/images/home/home_1.jpg'
import caretDown from '../../assets/images/home/caret-down.png'
import message from '../../assets/images/home/message.png'
import ProfileInfo from './components/Profile'
import Chat from './components/Chat'

const RightSidebar = (props) => {
    return (
        <div className="chat-section">

            {/* profile info-section */}
            <ProfileInfo />

            {/* Chat header section */}
            <div className="bg-white py-1 px-3 d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="wh-15 mr-10">
                        <a href="#">
                            <img src={message} className="img-fluid" />
                        </a>
                    </div>
                    <h6 className="font-14 text-danger mb-0">Messages</h6>
                </div>
                <div className="d-flex align-items-center">
                    <div className="wh-15">
                        <a href="#">
                            <img src={search} className="img-fluid" />
                        </a>
                    </div>
                    <div className="wh-35">
                        <a href="#">
                            <img src={caretDown} className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Chat section */}
            <Chat />
        </div>

    )
}

export default RightSidebar