import React from 'react'
import './../../../styles/HomePage.css';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import CardLocation from '../components/CardLocation'
import CardExp from '../components/CardExp'
function HomePage() {
    return (
        <div className="homePage">
            <Hero/>
            <Banner/>
            <CardLocation/>
            <CardExp/>
        </div>
    )
}

export default HomePage;
