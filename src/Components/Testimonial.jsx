import React from 'react'
import Profilepic from '../Components/Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo praesentium eius iure odit et accusantium eum omnis delectus est! Ab vero reiciendis asperiores dolorem illum qui blanditiis aperiam culpa autem?</p>
      </div>
      <div className='testimonial-section-bottom'>
        <img src={Profilepic} alt='' />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel? Labore, voluptas natus! Et atque deserunt inventore ducimus esse reprehenderit enim fugit, qui laudantium optio maxime repellat ab. Eveniet, optio.</p>
        <div className='testimonials-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  )
}

export default Testimonial
