import React from 'react'
import logo from '../../../../assets/images/logo-foot.png'

import { FooterStyles } from './Footer.styles'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter,FaYoutube} from 'react-icons/fa'


const Footer = () => {
    return (
        <FooterStyles>
            <div className='container'>
                <div className='header'>
                    <img src={logo} alt="" />
                    <h1>Airtime2Cash</h1>
                </div>
                <div className='links'>
                    <ul>
                        <li className='home'><a href="/home">Home</a></li>
                        <li className='about'><a href="/about">About Airtime2Cash</a></li>
                        <li className='contact'><a href="/contact">Contact</a></li>
                    </ul>
                </div> 
            </div>
            <div className='divider'></div>
            <div className='footerInfo'>
                <div className='details'>
                    <p>2022 Airtime2Cash. All rights reserved</p>
                </div>
                <div className='icons'>
                    <RiInstagramFill/>
                    <FaTwitter />
                    <FaYoutube />        
                </div>    
            </div>

        </FooterStyles>
    )
}
export default Footer
