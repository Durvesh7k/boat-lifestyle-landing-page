import React, { useState } from 'react'
import "./Best.css";
import Cards from '../Cards';
import BestData1 from './BestData1';
import BestData2 from './BestData2';


const Best = () => {
    const [boldStyle, SetBoldStyle] = useState("best__tab");
    const [boldStyle1, SetBoldStyle1] = useState("best__tab");
    const [boldStyle2, SetBoldStyle2] = useState("best__tab");
    const [boldStyle3, SetBoldStyle3] = useState("best__tab");
    const [currentList,SetCurrentList] = useState(BestData1)



    const selectTab = () => {
        SetBoldStyle("best__tab fw-bold text-black");
        SetBoldStyle1("best__tab");
        SetBoldStyle2("best__tab");
        SetBoldStyle3("best__tab");
        SetCurrentList(BestData1);
    }
    const selectTab1 = () => {
        SetBoldStyle1("best__tab fw-bold text-black");
        SetBoldStyle("best__tab");
        SetBoldStyle2("best__tab");
        SetBoldStyle3("best__tab");
        SetCurrentList(BestData2)
    }
    const selectTab2 = () => {
        SetBoldStyle2("best__tab fw-bold text-black");
        SetBoldStyle("best__tab");
        SetBoldStyle1("best__tab");
        SetBoldStyle3("best__tab");
    }
    const selectTab3 = () => {
        SetBoldStyle3("best__tab fw-bold text-black");
        SetBoldStyle("best__tab");
        SetBoldStyle1("best__tab");
        SetBoldStyle2("best__tab");
    }

    return (
        <>
            <div className='best__container'>
                <h4 className='ms-4'><strong>BEST of Boat</strong></h4>
                <div className='best__navbar'>
                    <ul className='best__list'>
                        <li className='hover-underline-animation'><button onClick={selectTab} className={boldStyle}>Earbuds</button></li>
                        <li className='hover-underline-animation'><button onClick={selectTab1} className={boldStyle1}>Top Headphones</button></li>
                        <li className='hover-underline-animation'><button onClick={selectTab2} className={boldStyle2}>SmartWatches</button></li>
                        <li className='hover-underline-animation'><button onClick={selectTab3} className={boldStyle3} >Trending wireless</button></li>
                    </ul>
                </div>
                <div className='sound__items'>
                    {currentList.map((val) => (
                        <Cards
                            cardImage={val.cardImage}
                            cardName={val.cardName}
                            cardReview={val.cardReview}
                            cardPrice={val.cardPrice}
                            hoverImage={val.hoverImage}
                        />
                    ))}


                </div>
            </div>
        </>
    )
}

export default Best