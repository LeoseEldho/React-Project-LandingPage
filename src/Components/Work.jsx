import React from 'react'
import PickMeals from '../Components/Assets/pick-meals-image.png'
import ChooseMeals from '../Components/Assets/choose-image.png'
import DeliveryMeals from '../Components/Assets/delivery-image.png'
const Work = () => {
    const workInfoData=[
        {
            image:PickMeals,
            title:'Pick Meals',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odit saepe nam laboriosam a ducimus expedita consequuntur inventore ',
        },
        {
            image:ChooseMeals,
            title:'Choose How Often',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odit saepe nam laboriosam ',
        },
        {
            image:DeliveryMeals,
            title:'Fast Dlivary',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odit saepe nam laboriosam a ducimus expedita ',
        }
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam vel quas ipsam error delectus unde magni quos tenetur? Exercitationem ratione quas quisquam rerum! Eaque tempore vitae aperiam cumque est.</p>
        </div>
      <div className='work-section-bottom'>
        {
            workInfoData.map((data,index)=>
                <div className='work-section-info' key={index} >
                    <div className='info-boxes-img-container'>
                        <img src={data.image}/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Work
