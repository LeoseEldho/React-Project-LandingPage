import React from 'react'
import NavBar from './NavBar'
import { FiArrowRight } from 'react-icons/fi'
function Home() {
  return (
    <div className='home-container'>
      <NavBar></NavBar>
    <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src="../home-banner-background.png"/>            
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className='primary-text'>
            Healthy switcher chefs do all the pre work, like peeding, chopping & marinating, so you can cook a fresh food.
          </p>
          <button className='secondary-button'>
            Order Now <FiArrowRight/>
          </button>
        </div>
        <div className='home-image-container'>
          <img src='../home-banner-image.png' alt=''/>
        </div>
    </div>
    </div>
  )
}
export default Home
//sdfjiojfd