import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src="../about-background.png" alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src='../about-background-image.png' alt=''/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi provident fugiat inventore dolore ratione iste maxime a. Quis autem necessitatibus ab illum nemo, a quibusdam, tempore saepe perferendis magnam amet?</p>
            <p className='primary-text'> Fugiat explicabo cum eligendi facilis vel tempora aspernatur voluptatem perspiciatis velit, fugit labore quibusdam accusantium asperiores voluptatibus eos eaque consequatur libero maiores!</p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About
