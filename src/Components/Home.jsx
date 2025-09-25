import React from 'react'
import NavBar from './NavBar'
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import { FiArrowRight } from 'react-icons/fi'
function Home() {
  return (
    <div className='home-container'>
      <NavBar></NavBar>
    <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerImage} alt=''/>
            <img src="/home-banner-image" alt="" />

<img src="/Logo.svg" alt="" />
            
        </div>
    </div>
    </div>
  )
}

export default Home
