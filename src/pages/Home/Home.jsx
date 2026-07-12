import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection';
function HomePage() {
  return (
    <div className={"home-page"}>
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default HomePage;