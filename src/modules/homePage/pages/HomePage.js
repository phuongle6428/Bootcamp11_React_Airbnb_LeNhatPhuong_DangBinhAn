import React from 'react'
import './../../../styles/HomePage.css';
import Banner from '../components/Banner'
import Picture from '../components/Picture'
import Menu from '../components/Menu'
function HomePage() {
    return (
        <div className="homePage">
            <Banner/>
            <Picture/>
            <Menu/>
        </div>
    )
}

export default HomePage;
