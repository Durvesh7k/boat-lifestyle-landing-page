import React from 'react'
import { Button } from 'react-bootstrap'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa"
import { RiInstagramLine } from "react-icons//ri"
import { IoLogoTwitter } from "react-icons/io"
import { AiFillLinkedin } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import boatLogo from '../../assets/Logos/boat-logo.jpg'



const Footer = () => {
    return (
        <>
            <div className='footer__container'>
                <div className='footer__section1'>
                    <div className='email__container'>
                        <img
                            src={boatLogo}
                            alt='boat-logo'
                            className='boat__logo'
                        />
                        <p className='email__details'>Subscribe to email alerts. We promise not to spam your inbox.</p>
                        <div className='input__container'>
                            <input type="email" placeholder='Enter your Email' className='email__input' />
                            <div className='button__container'>
                                <Button className='input__button'>Subscribe</Button>

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='socials__container mt-3 '>

                    <div className='social__icons'>
                        <FaFacebookF />
                    </div>
                    <div className='social__icons'>
                        <RiInstagramLine />
                    </div>
                    <div className='social__icons'>
                        <IoLogoTwitter />
                    </div>
                    <div className='social__icons'>
                        <AiFillLinkedin />
                    </div>
                    <div className='social__icons'>
                        <AiOutlineYoutube />
                    </div>
                </div>
                <hr />
                <div className='rights text-center mt-3'>
                    <p>© 2022 Imagine Marketing Limited. All Rights Reserved</p>
                </div>
                <h3 className='text-center fw-bold fs-3 mt-1 text-danger '>Made by DSC ❤️</h3>
            </div>










        </>
    )
}

export default Footer