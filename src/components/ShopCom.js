import React from 'react'
import "./ShopCom.css"

const ShopCom = (props) => {
    return (
        <>
            <div className='category__component'>
                <img
                    src={props.comImage}
                    alt = "componets-img"
                    className='component__img mt-2'
                />
                <p className =  'component__name' >{props.comName}</p>
            </div>

        </>

    )
}

export default ShopCom