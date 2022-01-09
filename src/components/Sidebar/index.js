import React from 'react'
import { Accordion, Image, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
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
                        <NavLink className="d-flex" to="/home">
                            <span className="material-icons icons_side_nav mr-5">home</span>Home
                        </NavLink>
                    </li>

                    <Accordion flush as={'li'}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >
                                <a href="#" className="d-flex">
                                    <span className="material-icons icons_side_nav mr-5">visibility</span> Discover
                                </a>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"}>
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                <NavLink className="nav-link" to="/shows">Shows</NavLink>
                                <NavLink className="nav-link" to="/wathlist">Watchlist</NavLink>
                                <NavLink className="nav-link" to="/subscription">Subscription</NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    <li>
                        <NavLink className="d-flex" to="/rewards">
                            <span className="material-icons icons_side_nav mr-5">grade</span> Rewards
                        </NavLink>

                    </li>
                    <li>
                        <NavLink className="d-flex" to="/Setting">
                            <span className="material-icons icons_side_nav mr-5">settings</span> Setting
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="d-flex" to="/Promotions">
                            <span className="material-icons icons_side_nav mr-5">flight_land</span> Promotions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="d-flex" to="/logout">
                            <span className="material-icons icons_side_nav mr-5">logout</span> Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* service sectionon right side bar */}
            <ServiceSection />
        </div>
    )
}

export default Sidebar