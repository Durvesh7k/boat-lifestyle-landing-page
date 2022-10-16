import React from 'react'
import "./Press.css"

const Press = () => {
    return (
        <>
            <div className='press__container'>
                <div className='press__info'>
                    <p className='press__heading fw-bold fs-4'>In the Press</p>
                    <p className='press__details mt-4'>The Airdopes 441 is sweat proof and packs in crisp audio. Great for fitness enthusiasts.</p>
                    <div className='press__icons'>
                        <img
                            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_200x.png?v=1649066803'
                            alt='mint'
                        />
                        <img
                            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/forbes_grey_200x.png?v=1663666690'
                            alt='forbes'
                        />
                        <img
                            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_200x.png?v=1649066820'
                            alt='tech-tadar'
                        />
                        <img
                            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ET_1_9f80aa59-c905-4886-b75f-5b96808f2903_200x.png?v=1649066820'
                            alt='Et'
                        />
                        <img
                            src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821'
                            alt='Gadgets-360'
                        />
                    </div>
                </div>

                <div className='black__section mt-4'>
                    <p className='black__detail'>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
                </div>
            </div>


        </>
    )
}

export default Press