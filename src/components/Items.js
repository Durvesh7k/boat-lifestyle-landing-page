import React from 'react'
import Cards from './Cards'
import './Items.css'

import ItemsData from './ItemsData'

const Items = () => {
  return (
    <div className='sound__items'>
      {ItemsData.map((val) => (
        <Cards
          cardImage={val.cardImage}
          cardName={val.cardName}
          cardReview={val.cardReview}
          cardPrice={val.cardPrice}
          hoverImage={val.hoverImage}
        />
      ))}


    </div>
  )
}

export default Items