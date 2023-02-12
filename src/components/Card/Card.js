import React from 'react'
import './Card.css'

function Card({title, description, background_image}) {
  return (
    <div className='card-container'>
      <img src={ background_image } alt='bruh' className='image-container'/>
        <div className='card-content'>
            <div className='card-title'><h3>{ title }</h3></div>
            <div className='body-text'>
              { description }
            </div>
        </div>
    </div>
  )
}

export default Card