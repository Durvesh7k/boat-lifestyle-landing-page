import React from 'react'
import "./Header.css"
import { CgProfile } from "react-icons/cg"
import { BiHeadphone } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import boatLogo from '../assets/Logos/boat.gif'


const styles = {
    navbar: "navbar fw-bold text-uppercase m-auto",
}

const Header = () => {
    return (
        <div className='header'>
            <div className='header__container shadow p-3 mb-1 bg-body rounded'>
                <div className='header-img__container'>
                    <img className="header__img" src={boatLogo}  alt="boat-logo"/>
                </div>
                <div className={styles.navbar}>
                    <ul className='navbar__items'>
                        <li className='hover-underline-animation'>Categoeries</li>
                        <li className='hover-underline-animation'>Sale With Boat</li>
                        <li className='hover-underline-animation'>Offer Zone</li>
                        <li className='hover-underline-animation'>More</li>
                    </ul>

                </div>
                <div className='header-input__container'>
                    <input className="header__input" placeholder="Search here" />
                </div>
                <div className='header__icons'>
                    <CgProfile />
                    <BiHeadphone />
                    <FaShoppingCart />
                </div>
            </div>
        </div>

    )
}

export default Header