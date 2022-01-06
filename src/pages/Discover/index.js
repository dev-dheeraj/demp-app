import React from 'react'
import DiscoverShows from './components/DiscoverShows'
import OwlCarousel from 'react-owl-carousel';


import search from '../../assets/images/home/search.png'
import prime from '../../assets/images/home/prime.png'

import plus from '../../assets/images/home/plus.png'
import cross from '../../assets/images/home/cross.png'
import rock from '../../assets/images/home/rock.png'
import info from '../../assets/images/home/info.png'
import play from '../../assets/images/home/play.png'


import home_1 from '../../assets/images/home/home_1.jpg'
import OfficialVideos from './components/OfficialVideos';


const Discover = () => {
	return (
		<div className="dashboard-section">
			<div className="search-input text-center mb-20">
				<form action="/action_page.php">
					<label className="position-relative">
						<input type="search" id="gsearch" name="gsearch" placeholder="Search" className="border-0" />
						<div className="icon-search">
							<img src={search} className="img-fluid" width="15" height="15" />
						</div>
					</label>
				</form>
			</div>

			<div id="carouselExampleControls" className="carousel slide mb-5" dataBsRide="carousel">
				<div className="carousel-inner rounded-30">

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
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="tooltip-hover">
											<img src={prime} className="img-fluid" />
											<div className="tooltip-inner">Watch on prime</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-12 tooltip-hover">
											<img src={plus} className="img-fluid" />
											<div className="tooltip-inner">Add to wishlist</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-12 tooltip-hover">
											<img src={cross} className="img-fluid" />
											<div className="tooltip-inner">Close it</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-15 tooltip-hover">
											<img src={rock} className="img-fluid" />
											<div className="tooltip-inner">Liked</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-2 tooltip-hover">
											<img src={info} className="img-fluid" />
											<div className="tooltip-inner">Information</div>
										</a>
									</div>
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


					<div className="carousel-item">
						<div className="dashboard-post-box banner-2 bg-dark-blue">
							<div className="position-relative">
								<div className="row">
									<div className="col-md-3">
										<div className="d-flex align-items-center justify-content-center h-100">
											<div className="wh-75 border border-white rounded-pill overflow-hidden user-image">
												<img src="assets/images/home/home_1.jpg" className="img-fluid h-100 object-cover" />
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
														<img src="assets/images/home/the-girl.jpeg" className="img-fluid w-100 h-100 object-cover" />
													</a>
													<a href="#" className="bg-danger text-white t-d-n img-show-content font-16">
														The Girl On The Train
													</a>
												</div>
											</div>
											<div className="col-md-6">
												<div className="row">
													<div className="col-md-6">
														<div className="bg-success sm-img-show position-relative">
															<a href="#">
																<img src="assets/images/home/week-away.jpeg" className="img-fluid w-100 h-100 object-cover" />
															</a>
															<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
																A Week Away
															</a>
														</div>
													</div>
													<div className="col-md-6">
														<div className="bg-success sm-img-show position-relative">
															<a href="#">
																<img src="assets/images/home/holidate.jpeg" className="img-fluid w-100 h-100 object-cover" />
															</a>
															<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
																Holidate
															</a>
														</div>
													</div>
													<div className="col-md-6">
														<div className="bg-success sm-img-show position-relative">
															<a href="#">
																<img src="assets/images/home/deep.jpeg" className="img-fluid w-100 h-100 object-cover" />
															</a>
															<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
																Deep
															</a>
														</div>
													</div>
													<div className="col-md-6">
														<div className="bg-success sm-img-show position-relative">
															<a href="#">
																<img src="assets/images/home/love-aj-kal.jpeg" className="img-fluid w-100 h-100 object-cover" />
															</a>
															<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
																Love Aaj Kal
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>



					<div className="carousel-item">
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
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="tooltip-hover">
											<img src={prime} className="img-fluid" />
											<div className="tooltip-inner">Watch on prime</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-12 tooltip-hover">
											<img src={plus} className="img-fluid" />
											<div className="tooltip-inner">Add to wishlist</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-12 tooltip-hover">
											<img src={cross} className="img-fluid" />
											<div className="tooltip-inner">Close it</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-15 tooltip-hover">
											<img src={rock} className="img-fluid" />
											<div className="tooltip-inner">Liked</div>
										</a>
									</div>
									<div className="bg-white rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center">
										<a href="#" className="p-2 tooltip-hover">
											<img src={info} className="img-fluid" />
											<div className="tooltip-inner">Information</div>
										</a>
									</div>
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
				</div>

				<button className="carousel-control-prev" type="button" dataBsTarget="#carouselExampleControls" dataBsSlide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" dataBsTarget="#carouselExampleControls" dataBsSlide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			{/* show official videos */}
			<OfficialVideos />
		</div>



	)
}

export default Discover
