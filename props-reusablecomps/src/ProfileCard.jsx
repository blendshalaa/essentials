/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ProfileCard({title,handle,image}) {
  return (
    <div>
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-1by1'>
                    <img src={image} alt='logo'/>
                </figure>
            </div>

            <div className='card-content'>
                <div className='media-content'>
                    <p className='title is-4'>{title}</p>
                    <p className='subtitle is-6'>{handle}</p>
                </div>
            </div>

        </div>
        
      
    </div>
  )
}

export default ProfileCard