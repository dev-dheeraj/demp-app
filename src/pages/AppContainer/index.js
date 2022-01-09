import React from 'react'
import RightSidebar from '../../components/RightSidebar'
import Sidebar from '../../components/Sidebar'
import Content from './component/Content'

const App = (props) => {
    return (
        <div className="main-container">
            {/* render left sidebar  */}
            <Sidebar />

            {/* render the dashboard content page e.g : discover */}
            <Content /> 

            {/* render right side bar ot chat section */}
            <RightSidebar />
        </div>
    )
}

export default App