import React from 'react'

const ServiceSection = () => {
    return (
        <div className="services-section">
            <div className="services">
                <div className="company-setion">
                    <div className="company">
                        <a href="#" className="text-purple">Company</a>
                    </div>
                    <div className="company-menu">
                        <p className="m-0 pb-0">About The Company</p>
                        <p className="m-0 pb-0">Corporate Information</p>
                        <p className="m-0 pb-0">Jobs</p>
                        <p className="m-0">Media Center</p>
                    </div>
                </div>
                <div className="Policies text-purple">
                    <a href="#">Policies</a>
                </div>
                <div className="Help text-purple" >
                    <a href="#">Help</a>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
