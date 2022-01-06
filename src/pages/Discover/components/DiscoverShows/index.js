import React from 'react'
import { Carousel } from 'react-bootstrap'
import prime from '../../../../assets/images/home/prime.png'
import plus from '../../../../assets/images/home/plus.png'
import cross from '../../../../assets/images/home/cross.png'
import rock from '../../../../assets/images/home/rock.png'
import info from '../../../../assets/images/home/info.png'
import play from '../../../../assets/images/home/play.png'
import girl from '../../../../assets/images/home/the-girl.jpeg'
import weekAway from '../../../../assets/images/home/week-away.jpeg'
import holidate from '../../../../assets/images/home/holidate.jpeg'
import deep from '../../../../assets/images/home/deep.jpeg'
import loveAj from '../../../../assets/images/home/love-aj-kal.jpeg'

import home_1 from '../../../../assets/images/home/home_1.jpg'
import ShowsCards from '../ShowsCards'

import ShowsActionBtn from '../../../../components/common/ActionButton/ShowsActionBtn'
const DiscoverShows = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="carousel-item active">
                    <div className="dashboard-post-box bg-white gradient-overlay" style={{ "backgroundImage": `url(${home_1})` }}>
                        <div className="w-50 position-relative">
                            <h2 className="text-white mb-1">The Wheel of Time</h2>
                            <h5 className="text-blue text-uppercase">Drama, Fantasy, Adventure, 2021</h5>
                            <h4 className="text-white fw-bolder mb-20">7/10</h4>
                            <div className="mb-3">
                                <button type="button" className="btn btn-danger mr-10">Based on novel or book</button>
                                <button type="button" className="btn btn-danger mr-10">adaptation</button>
                            </div>
                            <p className="text-white mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries
                            </p>

                            <div className="d-flex">
                                {/* Show shows action buttons */}
                                <ShowsActionBtn url={"#"} image={prime} title={"Watch on prime"} />
                                <ShowsActionBtn url={"#"} image={plus} title={"Add to wishlist"} />
                                <ShowsActionBtn url={"#"} image={cross} title={"Close it"} />
                                <ShowsActionBtn url={"#"} image={rock} title={"Liked"} />
                                <ShowsActionBtn url={"#"} image={info} title={"Information"} />
                            </div>
                        </div>
                        <div className="bg-success p-2 free-label text-white px-3 py-1 fw-bolder">Free</div>
                        <div className="p-2 play-icon text-white px-3 py-1 fw-bolder">
                            <a href="javascript:void(0)" className="pointer">
                                <img src={play} className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="carousel-item active">
                    <div className="dashboard-post-box banner-2 bg-dark-blue">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <div className="wh-75 border border-white rounded-pill overflow-hidden user-image">
                                            <img src={home_1} className="img-fluid h-100 object-cover" />
                                        </div>
                                        <div className="pl-10">
                                            <h3 className="font-26 mb-1 text-white">Quinn</h3>
                                            <h6 className="text-blue mb-0">Follow</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="bg-success bg-img-show position-relative">
                                                <a href="#">
                                                    <img src={girl} className="img-fluid w-100 h-100 object-cover" />
                                                </a>
                                                <a href="#" className="bg-danger text-white t-d-n img-show-content font-16">
                                                    The Girl On The Train
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                {/* Show shows cards with image and urls */}
                                                <div className="col-md-6">
                                                    <ShowsCards url="https://www.jiosaavn.com/album/love-aaj-kal/08dQgBZGh20_" img={weekAway} title={' A Week Away'} />
                                                </div>
                                                <div className="col-md-6">
                                                    <ShowsCards url="https://www.jiosaavn.com/album/love-aaj-kal/08dQgBZGh20_" img={holidate} title={'holidate'} />
                                                </div>
                                                <div className="col-md-6">
                                                    <ShowsCards url="https://www.jiosaavn.com/album/love-aaj-kal/08dQgBZGh20_" img={deep} title={'Deep'} />
                                                </div>
                                                <div className="col-md-6">
                                                    <ShowsCards url="https://www.jiosaavn.com/album/love-aaj-kal/08dQgBZGh20_" img={loveAj} title={'Love aaj kal'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default DiscoverShows
