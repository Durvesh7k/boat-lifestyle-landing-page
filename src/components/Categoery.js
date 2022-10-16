import React from 'react'
import './Categoery.css'
import ShopCom from './ShopCom'
import ShopComData from './ShopComData'

const Categoery = () => {
    return (
        <>
            <div className='category__container'>
                <p className='category__heading'>Shop by Category</p>
                <div className='category__components'>
                    {
                        ShopComData.map((val)=>(
                            <ShopCom
                            comImage = {val.comImage}
                            comName = {val.comName}
                            />
                        ))
                    }

                </div>
            </div>





        </>
    )
}

export default Categoery