import React from 'react'
import { Accordion, Image } from 'react-bootstrap'
import logo from './../../assets/images/logoimg/logo.gif'
import ServiceSection from './component/ServiceSection'

const Sidebar = (props) => {
    return (
        <div className="logo-and-menu-section">
            {/* logo section on right side header */}
            <div className="brand-logo">
                <a href="#">
                    <Image src={logo} className="img-fluid" />
                </a>
            </div>
            {/* sidebar constants  */}


            <div className="menu">
                <ul className="listing-menu m-0 p-0 pl-78 pt-20">
                    <li>
                        <a href="#" className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">home</span>Home
                        </a>
                    </li>

                    <Accordion flush as={'li'}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <a href="#" className="d-flex">
                                    <span className="material-icons icons_side_nav mr-5">visibility</span> Discover
                                </a>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"}>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">Shows</a></li>
                                <li><a href="#">Watchlist</a></li>
                                <li><a href="#">Subscription</a></li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <li>
                        <a href="#" className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">grade</span> Rewards
                        </a>
                    </li>
                    <li>
                        <a href="#" className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">settings</span> Setting
                        </a>
                    </li>
                    <li>
                        <a href="#" className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">flight_land</span> Promotions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="d-flex">
                            <span className="material-icons icons_side_nav mr-5">logout</span> Logout
                        </a>
                    </li>
                </ul>
            </div>
            {/* service sectionon right side bar */}
            <ServiceSection />
        </div>
    )
}

export default Sidebar