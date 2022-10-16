import React from 'react'
import './MagicCard.css'

const MagicCard = (props) => {
    return (
        <>
            <div className='magic__card'>
                <video className='rounded-top magic__video' autoplay="true" loop="true" muted = "true">
                    <source src={props.src} />
                </video>

                <div className='magic__details ps-2 mt-3'>
                    <p className='magic__name'><strong>{props.name}</strong></p>
                    <p className='magic__category'>{props.category}</p>
                    <hr />
                    <p className='magic__red'>New arrival</p>
                    <p className='magic__red magic__price'>₹ {props.price}</p>
                </div>



            </div>


        </>
    )
}

export default MagicCard