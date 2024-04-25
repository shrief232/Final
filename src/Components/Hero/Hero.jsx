import React from 'react'
import './Hero.css';
import hero_5 from '../Assets/hero/hero_5.png'
import hand_icon from '../Assets/hero/hand_icon.png'


export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW & MODERN FURNITURE</h2>
            <div className="hero-icon">
                <div className='hero-p'>
                  <p>New</p>
                  <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>For Every Home </p>
                
            </div>

        </div>
        <div className='hero-right'>
            <img src={hero_5} alt="" />

        </div>

    </div>
  )
}
