import React from 'react'
import search from '../../../assets/images/home/search.png'
import OfficialVideos from './components/OfficialVideos';
import ShowsSlider from './components/ShowsSlider'
import { Form,FormLabel,FormControl, Image } from 'react-bootstrap';

const DiscoverShows = () => {
	return (
		<div className="dashboard-section">
			<div className="search-input text-center mb-20">
				<Form action="/action_page.php">
					<FormLabel className="position-relative">
						<FormControl type="search" id="gsearch" name="gsearch" placeholder="Search" className="border-0" />
						<div className="icon-search">
							<Image src={search} className="img-fluid" width="15" height="15" />
						</div>
					</FormLabel>
				</Form>
			</div>
			{/* render show cards */}
			<ShowsSlider />
			{/* show official videos */}
			<OfficialVideos />
		</div>
	)
}

export default DiscoverShows
