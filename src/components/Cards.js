import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Card.css'

const Cards = (props) => {
    const [earPhones,setEarPhones] = useState(props.cardImage);

    const hoverHandlerIn = () =>{
        setEarPhones(props.hoverImage)
    }

    const hoverHandlerOut = () =>{
        setEarPhones(props.cardImage)
        setTimeout()
    }

    return (
        <>
            <div className='card__container'>
                <div className='card__content'>
                    <img
                        className='card__img'
                        src={earPhones}
                        alt='card-img'
                        onMouseOver={hoverHandlerIn}
                        onMouseOut={hoverHandlerOut}
                    />
                    <div className='card__details'>
                        <div className='card__detail'>
                            <p><strong>{props.cardName}</strong></p>
                            <p>{props.cardReview}</p>
                            <hr />
                            <p>{props.cardPrice}</p>
                        </div>
                        <Button variant="warning" className='text-white text-uppercase pb-2'><strong>Add to cart</strong></Button>
                    </div>
                </div>

            </div>
        </>

    )

}

export default Cards;