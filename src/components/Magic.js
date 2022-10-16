import React from 'react'
import './Magic.css'
import MagicCard from './MagicCard'
import MagicData from './MagicData'

const Magic = () => {
  return (
    <>
      <div className='magic__container'>
        <img
          src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_banner_1400x.jpg?v=1665570038'
          alt='magic'
          className='magic__image'
        />
        <div className='magic__components mt-4'>
          {MagicData.map((val) => {
            return <MagicCard
              src={val.src}
              name={val.name}
              category={val.category}
              price={val.price}
            />


          })
          }

        </div>
      </div>



    </>
  )
}

export default Magic