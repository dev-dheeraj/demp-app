import React from 'react'
import search from '../../assets/images/home/search.png'
import OfficialVideos from './components/OfficialVideos';
import DiscoverShows from './components/DiscoverShows'

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
			{/* render show cards */}
			<DiscoverShows />
			{/* show official videos */}
			<OfficialVideos />
		</div>
	)
}

export default Discover
