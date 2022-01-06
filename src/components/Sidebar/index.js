import React from 'react'
import logo from './../../assets/images/logoimg/logo.gif'
import ServiceSection from './component'

const Sidebar = (props) => {
    return (
        <div className="logo-and-menu-section">
            {/* logo section on right side header */}
            <div className="brand-logo">
                <a href="#">
                    <img src={logo} className="img-fluid" />
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
                    <li>
                        <a href="#" className="d-flex" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                            <span className="material-icons icons_side_nav mr-5">visibility</span> Discover
                        </a>
                        <ul id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ "paddingLeft": "10px" }}>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Shows</a></li>
                            <li><a href="#">Watchlist</a></li>
                            <li><a href="#">Subscription</a></li>
                        </ul>
                    </li>
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