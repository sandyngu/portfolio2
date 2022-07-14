import React from 'react';
import Flowers from '../../assets/images/flowers3.png';
import './welcome.scss';

function Welcome() {
  return (
    <div className="welcome section" id="welcome">
        <p className="title" style={{display: 'none'}}>hello, welcome</p>
        <div className="welcome__section">
            <img src={Flowers} alt="Flowers" className="welcome__image flowers"/>
            <h1 className="new new1">andy</h1>
            <h1 className="new new2">Nguyen</h1>
            <h1 className="big big1">S</h1>
            <div className="welcome__section-text">
                <h1 className="welcome__title">welcome.</h1>
                <p className="welcome__maintext"><span className="welcome__maintext-first">Hi! You've managed to stumble upon my personal portfolio─ congratulations.</span> It's nice to have some company so feel free to take a look around. I created this webpage from scratch so I hope it's somewhat impressive. Keep scrolling down to learn about me and the small projects I've worked on, and don't hesitate to <a href="#contact"><span className="welcome__maintext-second">connect with me!</span></a></p>
            </div>
        </div>
        <div className="welcome__wave welcome__wave1">
            <svg viewBox="0 60 500 80">             
              <path className="welcome__wave-svg welcome__wave-svg1" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>           
            </svg>
        </div>
        <div className="welcome__wave welcome__wave2">
            <svg viewBox="0 60 500 80">             
              <path className="welcome__wave-svg welcome__wave-svg2" d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>           
            </svg>
        </div>
    </div>
  )
}

export default Welcome;